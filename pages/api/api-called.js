// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { SECRET_API_URL, CHAT_ID, NODE_ENV, SECRET_API_CALLED } from "../../config/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = { };

    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };

    let data = await axios.post(`${SECRET_API_CALLED}`,
        { 
            chat_id: CHAT_ID, 
            text: `
            Portfolio Website \n
            ENV: ${NODE_ENV} \n
            ${new Date()} : ${req.headers.host} \n
             
            deviceId: ${req.headers["user-agent"]},  \n
            origin: ${req.headers.referer},  \n
            browser: ${req.headers.browser},  \n
            location: ${req.headers.location},  \n
             
            fullInfoFromApi: ${JSON.stringify(req.headers.fullinfofromapi)}
            `
        })

    res.status(200).json({});
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
};
