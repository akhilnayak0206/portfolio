import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/layouts/Header.module.scss";
import LinkedInIcon from "../public/linkedin-icon.svg";
import GithubIcon from "../public/github-icon.svg";
import Hamburger from "./Hamburger";

function Header({headerFooterData}) {
  const router = useRouter();
  const [headerClass, setHeaderClass] = useState(`${styles.header}`);

  const { linkedInUrl, githubUrl, myEmail } = headerFooterData || {};

  const scrollFunc = (e) => {
    if (window.scrollY > 65) {
      setHeaderClass(`${styles.header} ${styles.headerScrolled}`);
    } else {
      setHeaderClass(`${styles.header}`);
    }
  };
  
  useEffect(() => {
    // specific page show header background color logic
    // if(router.pathname == "/contact-me"){
    //   setHeaderClass(`${styles.header} ${styles.headerScrolled}`);
    // }
    // else{
      window.addEventListener("scroll", scrollFunc, false);
    // }
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={headerClass}>
      <div
        className={`${styles.container} ${styles.flexBaseline} ${styles.fullWidthNav}`}
      >
        <div className={`${styles.logo} ${styles.width25}`}>
          <Link href="/">
            <a>
              <span>Akhil</span> Nayak
            </a>
          </Link>
        </div>

        <nav className={styles.navigationDiv}>
          <span>
            <Link href="/">
              <a className={router.pathname == "/" ? `${styles.active}` : ""}>
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
                {" "}
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
                {" "}
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

        <nav className={styles.contactDiv}>
          <span>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <Image src={LinkedInIcon} alt="linkedin" />
              LinkedIn
            </a>
          </span>
          <span>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Image src={GithubIcon} alt="github" />
              Github
            </a>
          </span>
          <span>
            <a href={`mailto:${myEmail}`} target="_blank" rel="noreferrer">Email</a>
          </span>
        </nav>
      </div>
      <div
        className={`${styles.burgerNavigation} ${styles.container} ${styles.flexBaseline}`}
      >
        <div className={`${styles.hamburgerDiv}`}>
          <Hamburger headerFooterData={headerFooterData} />
        </div>
        <div className={`${styles.logo} ${styles.mobileHeaderLogo}`}>
          <Link href="/">
            <a>
              <span>Akhil</span> Nayak
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;