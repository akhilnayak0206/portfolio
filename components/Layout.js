import React, { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/styles/layouts/Layout.module.scss';
import { LoaderContext, ChatMeContext, ChatMeProvider } from './Context';
import Loader from './Loader';
import ChatMePopup from './ChatMePopup';
import Script from 'next/script';

function Layout({ title, keywords, description, children, headerFooterData }) {
  const router = useRouter();

  const [loader, setLoader] = useContext(LoaderContext);
  const [openPopup, setOpenPopup] = useContext(ChatMeContext);

  // loading controller
  useEffect(() => {
    const handleStart = (url) => setLoader(true);
    const handleComplete = (url) => setLoader(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <div>
      {/* google analytics */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
	<meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SEO} />
      </Head>
      <Header headerFooterData={headerFooterData} />
        {/* <div id="#roundedCursor" className={`${styles.cursor} ${styles.rounded}`}></div>
        <div id="#pointedCursor" className={`${styles.cursor} ${styles.pointed}`}></div> */}
        {loader && <Loader />}
        {openPopup && <ChatMePopup />}
        {children}
      <Footer headerFooterData={headerFooterData} />
    </div>
  );
}

Layout.defaultProps = {
  title: `Akhil Nayak's Portfolio`,
  description: "Akhil Nayak's Portfolio. Information on Akhil Nayak",
  keywords:
    `akhil, nayak, akhil-nayak, akhilnayak, akhil nayak, portfolio, front-end developer, developer, 
    frontend, fullstack, backend, software, full-stack developer, JavaScript, html, css, react, nodejs, IT, akhilnayak0206, akhil's portoflio, akhils`,
};

export default Layout;


// mouse logic
// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
  
//   const cursorRounded = document.getElementById('#roundedCursor');
//   const cursorPointed = document.getElementById('#pointedCursor');

//   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//   cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
// }

// useEffect(() => {
//   window.addEventListener('mousemove', moveCursor);

//   return () => {
//     window.removeEventListener('mousemove', moveCursor)
//   }
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
