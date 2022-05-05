import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/components/ChatMePopup.module.scss";
import Image from "next/image";
import { ChatMeContext, LoaderContext } from "./Context";
import ReCAPTCHA from "react-google-recaptcha";
import apiAppendData from "../utils/apiAppendData";
import axios from "axios";

function ChatMePopup(props) {
  const router = useRouter();

  const [openPopup, setOpenPopup] = useContext(ChatMeContext);
  const [loader, setLoader] = useContext(LoaderContext);

  const recaptchaRef = React.createRef();

  const [popupAnimClass, setPopupAnimClass] = useState(`${styles.popupBox}`);
  const [firstComp, setFirstComp] = useState(true);
  const [formData, setFormData] = useState({});
  const [reqHeader, setReqHeader] = useState({});
  const [welcomeCloseMsg, setWelcomeCloseMsg] = useState(
    "Hi, Drop a Message..."
  );

  useEffect(() => {
    if (!firstComp) {
      setLoader(true);
      // Execute the reCAPTCHA when the form is submitted
      recaptchaRef.current.execute();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    // let setAxiosHeader = async () => {
    //   let test = {};
    //   let data = await apiAppendData();
    //   test["fullInfoFromApi"] = `${JSON.stringify(data)}`;
    //   setReqHeader(test);
    // };
    // setAxiosHeader();
  }, []);

  const onReCAPTCHAChange = async (captchaCode) => {
    setWelcomeCloseMsg("Message sent successfully.");
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      setLoader(false);
      return;
    }
    // get browser data
    // let browserData = await apiAppendData();
    let resBody = {
      ...formData,
      code: captchaCode,
      website: "portfolio",
    };
    // resBody["fullInfoFromApi"] = JSON.stringify(browserData);
    // resBody["location"] = JSON.stringify(browserData.ipAndLocationData);
    // resBody["browser"] = JSON.stringify(browserData.browser);
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    // console.log()
    try {
      await axios.post("/contact-mes/", resBody, {
        headers: reqHeader
      });
    } catch (error) {
      setLoader(false);
    }
    // Reset the reCAPTCHA so that it can be executed again
    // if user submits another email.
    if(recaptchaRef && recaptchaRef.current){
      recaptchaRef.current.reset();
    }
    setPopupAnimClass(`${styles.popupBox}`);
    setLoader(false);
    setFirstComp(true);
    setFormData({});
    setTimeout(() => {
      setOpenPopup(false);
      setWelcomeCloseMsg("Hi, Drop a Message...");
    }, 1 * 1000);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setFormData({
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      comment: e.target.elements.comment.value,
    });
  };

  const onClose = (e) => {
    setPopupAnimClass(`${styles.popupBox}`);
    setFirstComp(true);
    setTimeout(() => {
      setOpenPopup(false);
      setWelcomeCloseMsg("Hi, Drop a Message...");
    }, 2 * 1000);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setPopupAnimClass(`${styles.popupBox__big}`);
      setFirstComp(false);
      setWelcomeCloseMsg("Goodbye.");
    }, 1 * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className={`${styles.chatMePopup__mainDiv}`}>
      <div
        onClick={(e) => {
          //   setPopupAnimClass(`${styles.popupBox}`);
          //   setFirstComp(true);
        }}
      >
        <div>
          <div className={popupAnimClass} onClick={(e) => e.stopPropagation()}>
            {firstComp ? (
              <h2>{welcomeCloseMsg}</h2>
            ) : (
              <>
                <div className={styles.popupContent}>
                  <form onSubmit={(e) => onSubmitForm(e)}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey="6Leq-NMeAAAAAPUbuwVMafRvLHmA0K-7mq8e1AN_"
                      onChange={onReCAPTCHAChange}
                    />
                    <div className={styles.popupContent__row}>
                      <input
                        type="text"
                        placeholder="Full Name or maybe a testing name😜"
                        id="name"
                        required
                      />
                      <label htmlFor="name">Full name</label>
                    </div>
                    <div className={styles.popupContent__row}>
                      <input
                        type="email"
                        placeholder="Email address"
                        id="email"
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.popupContent__row}>
                      <textarea
                        type="text"
                        placeholder="Say what's on you mind"
                        id="comment"
                        required
                      />
                      <label htmlFor="comment">Comment</label>
                    </div>
                    <div
                      className={`${styles.popupContent__row} ${styles.popupContent__lastRow}`}
                    >
                      <button type="submit">Submit</button>
                      <button onClick={(e) => onClose(e)}>Close</button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMePopup;
