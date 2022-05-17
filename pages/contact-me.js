import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "../styles/pages/ContactPage.module.scss";
import Layout from "../components/Layout";
import TwitterIcon from "../public/twitter-icon.svg";
import LinkedInIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import GithubIcon from "../public/github-icon.svg";
import StackOverflowIcon from "../public/stackoverflow-icon.svg";
import emailIcon from "../public/email-icon.svg";
import mumbaiPic from "../public/mumbai.png";
import { ChatMeContext } from '../components/Context';
import axios from "axios";
import defaultData from '../defaultData.json'
import apiAppendData from 'utils/apiAppendData';
import { SECRET_API_URL } from "../config/index";

export default function ContactMePage({ headerFooterData, contactPageData }) {
  const [openPopup, setOpenPopup] = useContext(ChatMeContext);

  const [headFootData, setHeadFootData] = useState(headerFooterData)
  const [contactPage, setContactPage] = useState(contactPageData)


  const { animation, animationTextP1, animationTextP3, 
    developerType, mapImage, pageDescription, pageTitle, seoKeyword} = contactPage || {};

    const { linkedInUrl, githubUrl, myEmail, 
      instagramUrl, stackoverflowUrl, twitterUrl } = headerFooterData || {};

      const [developerTitles, setDeveloperTitles] = useState(developerType);
      const [developerIndex, setDeveloperIndex] = useState(0);

  useEffect(() => {
    const developerTitleInterval = animation && setInterval(() => {
      setDeveloperIndex((prevState)=>{
        if(prevState+1 >= developerTitles.length){
          return 0;
        }
          return prevState+1;
      }
        );
    }, 1000);
    
  
    return () => {
      clearInterval(developerTitleInterval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // get data from API after waking the Heroku Dyno
  useEffect(() => {
    let callInitialData = async() =>{
      try {
        let headers = {};
        let data = await apiAppendData();
        headers['fullInfoFromApi'] = JSON.stringify(data);
        headers['location'] = JSON.stringify(data.ipAndLocationData);
        headers['browser'] = data.browser;

        const resContactPage = await axios.get(`/contact-page`,{headers});
        const contactPageAPICall = resContactPage.data;
        setContactPage(contactPageAPICall);
    
        const resHeaderFooter = await axios.get(`/header-footer`,{headers});
        let headerFooterData = resHeaderFooter.data;
        setHeadFootData(headerFooterData);

      }
      catch(error){
        console.log(error,"error");
      }
    }

    callInitialData();
  }, [])

  return (
    <Layout title={pageTitle} description={pageDescription} keywords={seoKeyword} headerFooterData={headFootData}>
      <div className={styles.skillsPage}>
        <main>
            <div className={`${styles.container} ${styles.mainContactsDiv}`}>
                <div className={styles.leftContent}>
                  <div>
                    <Image 
                      src={mapImage.url || mumbaiPic}
                      // src={mapImage?.formats?.large?.url || mapImage.url}
                      // src={contactPhoto}
                      // layout="fill"
                      // layout="responsive"
                      alt="Mumbai_MAP"
                      width={1000}
                      height={1000}
                      objectFit="contain"
                      objectPosition="center"
                      />
                  </div>
                </div>
                <div className={styles.rightContent}>
                  <div className={styles.rightContent__title}>
                    <h1>Akhil <span>Nayak</span></h1>
                    <span>{animationTextP1}
                        <span className={`${animation && developerType ? styles.contact_page__marqueeText : ""}`}>
                        &nbsp;&nbsp;{developerTitles && developerTitles[developerIndex]}&nbsp;&nbsp;
                        </span>
                      {animationTextP3}</span>
                      <span className={styles.belowMarquee}>&nbsp;</span>
                  </div>
                  <div className={styles.findMeCard}>
                    <span className={styles.findMeText}>Find me on</span>
                    <div className={styles.cardContactMe}>
                        <div className={styles.cardContactMe__cardContent}>
                          <span className={styles.cardContactMe__cardContent__logo}>
                            <Image layout="fixed" src={LinkedInIcon} alt="linkedin" className={styles.contactCardSvgIcon} />
                          </span>
                          <a href={linkedInUrl} className={styles.cardContactMe__cardContent__title} rel="noreferrer" target="_blank">Linkedin</a>
                        </div>
                        <div className={styles.cardContactMe__cardContent}>
                          <span className={styles.cardContactMe__cardContent__logo}>
                            <Image layout="fixed" src={TwitterIcon} alt="linkedin" className={styles.contactCardSvgIcon} />
                          </span>
                          <a href={twitterUrl} className={styles.cardContactMe__cardContent__title} rel="noreferrer" target="_blank">Twitter</a>
                        </div>
                        <div className={styles.cardContactMe__cardContent}>
                          <span className={styles.cardContactMe__cardContent__logo}>
                            <Image layout="fixed" src={InstagramIcon} alt="linkedin" className={styles.contactCardSvgIcon} />
                          </span>
                          <a href={instagramUrl} className={styles.cardContactMe__cardContent__title} rel="noreferrer" target="_blank">Instagram</a>
                        </div>
                        <div className={styles.cardContactMe__cardContent}>
                          <span className={styles.cardContactMe__cardContent__logo}>
                            <Image layout="fixed" src={StackOverflowIcon} alt="linkedin" className={styles.contactCardSvgIcon} />
                          </span>
                          <a href={stackoverflowUrl} className={styles.cardContactMe__cardContent__title} rel="noreferrer" target="_blank">StackOverflow</a>
                        </div>
                        <div className={styles.cardContactMe__cardContent}>
                          <span className={styles.cardContactMe__cardContent__logo}>
                            <Image layout="fixed" src={GithubIcon} alt="linkedin" className={styles.contactCardSvgIcon} />
                          </span>
                          <a href={githubUrl} className={styles.cardContactMe__cardContent__title} rel="noreferrer" target="_blank">Github</a>
                        </div>
                        <div className={styles.cardContactMe__cardContent}>
                          <span className={styles.cardContactMe__cardContent__logo}>
                            <Image layout="fixed" src={emailIcon} alt="linkedin" className={styles.contactCardSvgIcon} />
                          </span>
                          <a href={`mailto:${myEmail}`} className={styles.cardContactMe__cardContent__title} rel="noreferrer" target="_blank">Email</a>
                        </div>
                    </div>
                  </div>
                  <div className={styles.rightContent__buttonChat}>
                    <button onClick={()=>setOpenPopup(true)}>
                        Let&apos;s Chat
                    </button>
                  </div>
                </div>
            </div>
        </main>
      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  try {
    // const resHeaderFooter = await axios.get(`/header-footer`);
    // let headerFooterData = resHeaderFooter.data;

    // const { updated_at, created_at, published_at, id, defaultPageTitle, 
    //   defaultPageDescription, defaultSeoKeyword, 
    //    ...neededHeaderFooterVariables} = headerFooterData;

    // headerFooterData = neededHeaderFooterVariables;

    // const resContactPage = await axios.get(`/contact-page`);
    // const contactPageData = resContactPage.data;

    axios.get(SECRET_API_URL);
    
    return {
      props: { 
        headerFooterData: defaultData.headerFooterData, 
        contactPageData: defaultData.contactPageData 
      }
    }
  }
  catch(error){
    console.log(error);
    return {
      props: { 
        headerFooterData: defaultData.headerFooterData, 
        contactPageData: defaultData.contactPageData 
      }
    }
  }
}