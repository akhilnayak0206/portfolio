import { useState, useEffect } from "react";
import { ChatMeProvider, LoaderProvider } from "@/components/Context";
import "../styles/global.scss";
import axios from "axios";
import { API_URL } from "../config/index";
import apiAppendData from "../utils/apiAppendData";

axios.defaults.baseURL = API_URL;
axios.defaults.origin = "portfolio";

function MyApp({ Component, pageProps }) {
  // not needed
  // useEffect(() => {
  //   let headers = {
  //   };
  //   let getData = async () => {
  //     // let data = await apiAppendData();
  //     // headers['fullInfoFromApi'] = JSON.stringify(data);
  //     // headers['location'] = data.ipAndLocationData;
  //     // await axios.get("/", { headers });
  //   };
  //   getData();
  // }, []);

  return (
    <LoaderProvider>
      <ChatMeProvider>
        <Component {...pageProps} />
      </ChatMeProvider>
    </LoaderProvider>
  );
}

export default MyApp;
