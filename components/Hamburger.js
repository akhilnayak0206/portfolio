import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "../public/linkedin-icon.svg";
import GithubIcon from "../public/github-icon.svg";
import styles from "@/styles/components/Hamburger.module.scss";

function Hamburger({headerFooterData}) {
  const router = useRouter();

  const { linkedInUrl, githubUrl, myEmail } = headerFooterData || {};

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className={styles.navigation}>
      <input
        type="checkbox"
        onChange={(e) => setOpenMenu(!openMenu)}
        className={styles.navigation__checkbox}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
      </label>

      <div className={`${styles.navigationContainer}`}>
        <nav
          className={`${styles.navigation__nav}`}
        >
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link href="/">
                <a
                  className={`${styles.navigation__link} ${
                    router.pathname == "/" ? `${styles.link_active}` : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link href="/projects">
                <a
                  className={`${styles.navigation__link} ${
                    router.pathname == "/projects" ? `${styles.link_active}` : ""
                  }`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link href="/skills">
                <a
                  className={`${styles.navigation__link} ${
                    router.pathname == "/skills" ? `${styles.link_active}` : ""
                  }`}
                >
                  Skills
                </a>
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link href="/contact-me">
                <a
                  className={`${styles.navigation__link} ${
                    router.pathname == "/contact-me" ? `${styles.link_active}` : ""
                  }`}
                >
                  Contact Me
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.hamburgerContactDiv}>
          <span>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <Image src={LinkedInIcon} alt="linkedin" />
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
      </div>
    </div>
  );
}

export default Hamburger;