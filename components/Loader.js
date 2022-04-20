import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/components/Loader.module.scss";
import Image from 'next/image';
import { imageConfigDefault } from 'next/dist/server/image-config';
import LoaderIcon from "../public/loader-icon.svg";
import { LoaderContext } from './Context';

function Loader(props) {
  const router = useRouter();

  const [loader, setLoader] = useContext(LoaderContext);

  // // loading controller
  // useEffect(() => {
  //   // const handleStart = (url) => (url !== router.asPath) && setLoader(true);
  //   // const handleComplete = (url) => (url === router.asPath) && setLoader(false);
  //   const handleStart = (url) => {console.log("check")};
  //   const handleComplete = (url) => {console.log("went")};

  //   router.events.on('routeChangeStart', handleStart)
  //   router.events.on('routeChangeComplete', handleComplete)
  //   router.events.on('routeChangeError', handleComplete)

  //   return () => {
  //       router.events.off('routeChangeStart', handleStart)
  //       router.events.off('routeChangeComplete', handleComplete)
  //       router.events.off('routeChangeError', handleComplete)
  //   }
  // })
  

  return (
    <div className={`${styles.loader__mainDiv}`}>
      <div>
          <div>
                <Image layout="fixed" src={LoaderIcon} alt="loader" />
          </div>
      </div>
    </div>
  );
}

export default Loader;
