import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/layouts/Footer.module.scss";
import Image from "next/image";
import TwitterIcon from "../public/twitter-icon.svg";
import LinkedInIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import GithubIcon from "../public/github-icon.svg";
import StackOverflowIcon from "../public/stackoverflow-icon.svg";
import { ChatMeContext } from './Context';

function Footer({headerFooterData}) {
  const [openPopup, setOpenPopup] = useContext(ChatMeContext);

  const { linkedInUrl, githubUrl, myEmail, infoContent, infoTitle, 
    instagramUrl, makeAmazingText, myContactEmail, sayingHiLeftText,
    sayingHiPoupText, stackoverflowUrl, twitterUrl } = headerFooterData || {};

  const [date, setDate] = useState(new Date().getFullYear());

  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        <div className={styles.footerRowSection}>
          <div className={styles.leftDiv}>
            <h1>
              {makeAmazingText}
            </h1>
          </div>
          <div className={styles.rightDiv}>
            <span className={styles.info}>{infoTitle}</span>
            <br />
            <span className={styles.address}>{infoContent}</span>
            <span className={styles.emailAddress}>{myContactEmail}</span>
          </div>
        </div>
        <div className={styles.footerRowSection}>
          <div className={styles.leftDiv}>
            <h1>
              {sayingHiLeftText}&nbsp;
              <span className={styles.sayingHiFooter} onClick={()=>setOpenPopup(true)}>
                {sayingHiPoupText}
              </span>
            </h1>
          </div>
          <div className={styles.rightDiv}>
            <nav>
              <span>
                <Link href="/">
                  <a
                    className={router.pathname == "/" ? `${styles.active}` : ""}
                  >
                    About
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/projects">
                  <a
                    className={
                      router.pathname == "/projects" ? `${styles.active}` : ""
                    }
                  >
                    Projects
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/skills">
                  <a
                    className={
                      router.pathname == "/skills" ? `${styles.active}` : ""
                    }
                  >
                    Skills
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/contact-me">
                  <a
                    className={
                      router.pathname == "/contact-me" ? `${styles.active}` : ""
                    }
                  >
                    Contact Me
                  </a>
                </Link>
              </span>
            </nav>
          </div>
        </div>
        <div className={styles.footerRowSection}>
          <div className={styles.leftDiv}>
            <div className={`${styles.logo} ${styles.logoFooter}`}>
              <span className={styles.flexBaseline}>
                <Link href="/">
                  <a>
                    <span>Akhil</span> Nayak
                  </a>
                </Link>
                <span className={styles.rightsReserved}>
                  &copy;{date}. All Rights Reserved{" "}
                </span>
              </span>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <div>
              <span className={styles.flex100}>
                <nav className={styles.contactDiv}>
                  <span>
                    <a href={linkedInUrl} target="_blank" rel="noreferrer">
                      <Image src={LinkedInIcon} alt="linkedin" />
                    </a>
                  </span>
                  <span>
                    <a href={twitterUrl} target="_blank" rel="noreferrer">
                      <Image src={TwitterIcon} alt="twitter" />
                    </a>
                  </span>
                  <span>
                    <a href={instagramUrl} target="_blank" rel="noreferrer">
                      <Image src={InstagramIcon} alt="instagram" />
                    </a>
                  </span>
                  <span>
                    <a href={stackoverflowUrl} target="_blank" rel="noreferrer">
                      <Image src={StackOverflowIcon} alt="stackoverflow" />
                    </a>
                  </span>
                  <span>
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      <Image src={GithubIcon} alt="github" />
                    </a>
                  </span>
                  <span>
                    <a href={`mailto:${myEmail}`} target="_blank" rel="noreferrer">Email</a>
                  </span>
                </nav>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
