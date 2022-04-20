import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/components/ChatMePopup.module.scss";
import Image from 'next/image';
import { ChatMeContext } from './Context';
import ReCAPTCHA from "react-google-recaptcha";
import apiAppendData from '../utils/apiAppendData';

function ChatMePopup(props) {
  const router = useRouter();

  const [openPopup, setOpenPopup] = useContext(ChatMeContext);
  const recaptchaRef = React.createRef();


  const [popupAnimClass, setPopupAnimClass] = useState(`${styles.popupBox}`);
  const [firstComp, setFirstComp] = useState(true)
  const [formData, setFormData] = useState({name:"", email:"", comment:""});
  const [welcomeCloseMsg, setWelcomeCloseMsg] = useState("Hi, Drop a Message...");

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if(!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the 
    // alert
    console.log(`Hey, ${captchaCode}`);
    // Reset the reCAPTCHA so that it can be executed again if user 
    // submits another email.
    recaptchaRef.current.reset();
    setPopupAnimClass(`${styles.popupBox}`); 
    setFirstComp(true);
    setTimeout(() =>{
      setOpenPopup(false);
      setWelcomeCloseMsg("Hi, Drop a Message...");
    }, 1 * 1000);
  }

  const onSubmitForm = () =>{

  }


  const onClose = (e) =>{
    setPopupAnimClass(`${styles.popupBox}`); 
    setFirstComp(true); 
    setTimeout(() =>{
      setOpenPopup(false);
      setWelcomeCloseMsg("Hi, Drop a Message...");
    }, 2 * 1000);
    
  }


  useEffect(() => {
    let timer1 = setTimeout(() =>{ 
      setPopupAnimClass(`${styles.popupBox__big}`); 
      setFirstComp(false); 
      setWelcomeCloseMsg("Goodbye...");
    }, 1 * 1000);

    apiAppendData();
  
    return () => {
        clearTimeout(timer1);
    }
  }, [])
  

  return (
    <div className={`${styles.chatMePopup__mainDiv}`}>
      <div onClick={(e)=>{
        //   setPopupAnimClass(`${styles.popupBox}`); 
        //   setFirstComp(true);
        }}>
          <div>
                <div className={popupAnimClass} onClick={(e)=>e.stopPropagation()}>
                    {firstComp ? 
                        <h1>
                            {welcomeCloseMsg}
                        </h1> 
                    : 
                        <>
                            <div className={styles.popupContent}>
                                <form onSubmit={(e)=>{
                                    e.preventDefault();
                                    console.log(e.target.elements)
                                    console.log(e.target.elements.name.value)
                                    console.log(e.target.elements.email.value)
                                    console.log(e.target.elements.comment.value);
                                    // Execute the reCAPTCHA when the form is submitted
                                    recaptchaRef.current.execute();

                                    // e.target.elements.map((value)=>console.log(value))
                                }}>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        size="invisible"
                                        sitekey="6Leq-NMeAAAAAPUbuwVMafRvLHmA0K-7mq8e1AN_"
                                        onChange={(onReCAPTCHAChange)}
                                    />
                                    <div className={styles.popupContent__row}>
                                        <input type="text" placeholder="Full Name or maybe a testing name😜" id="name" required />
                                        <label htmlFor="name">Full name</label>
                                    </div>
                                    <div className={styles.popupContent__row}>
                                        <input type="email" placeholder="Email address" id="email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className={styles.popupContent__row}>
                                        <textarea type="text" placeholder="Say what's on you mind" id="comment" required />
                                        <label htmlFor="comment">Comment</label>
                                    </div>
                                    <div className={`${styles.popupContent__row} ${styles.popupContent__lastRow}`}>
                                        <button type="submit">Submit</button>
                                        <button onClick={(e)=>onClose(e)}>Close</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    }
                </div>
          </div>
      </div>
    </div>
  );
}

export default ChatMePopup;
