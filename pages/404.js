import { useState } from "react";
import Image from "next/image";
import styles from "../styles/pages/NotFoundPage.module.scss";
import Layout from "../components/Layout";
import error404 from '../public/error-404.svg'
import Link from "next/link";

export default function NotFoundPage({ events }) {

  return (
    <Layout title="Akhil Nayak">
      <div className={styles.notFoundPage}>
        <main>
            <div className={`${styles.container} ${styles.notFoundDiv}`}>
                <div className={`${styles.errorImage}`}>
                <Image
                    layout="responsive"
                    src={error404}
                    objectPosition="top"
                    alt="404"
                />
                </div>
                <br />
                <h1>If someone asks where this page is,<br /> it has left the country.</h1>
                <br />
                <h2>
                <Link href="/">
                  <a>
                    Go back to Home?
                  </a>
                </Link>
                </h2>
            </div>
        </main>
      </div>
    </Layout>
  );
}
