import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/styles/layouts/Layout.module.scss';

function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Akhil Nayak',
  description: "Akhil Nayak's Portfolio. Information on Akhil Nayak",
  keywords:
    'akhil, nayak, akhil-nayak, akhilnayak, akhil nayak, portfolio, front-end developer, developer, frontend, fullstack, backend, software, full-stack developer, JavaScript, html, css, react, nodejs, IT',
};

export default Layout;
