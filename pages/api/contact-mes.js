// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
import {
  SECRET_API_URL,
  SECRET_API_CALLED,
  CHAT_ID,
  NODE_ENV,
} from '../../config/index';
import qs from 'qs';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = {};

    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };

    let resBody = req.body;
    // let data = await axios.post(`${SECRET_API_URL}/contact-mes/`, resBody);
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis
    // let data = {
    //     data:
    // }

    res.status(200).json({});
    axios.post(`${SECRET_API_CALLED}`, {
      chat_id: CHAT_ID,
      text: `
            Portfolio Website \n
            Message from ${req.body.name} \n
            ENV: NODE_ENV \n
            ${new Date()} : ${req.headers.host} \n
             
            deviceId: ${req.headers['user-agent']},  \n
            origin: ${req.headers.referer},  \n
            browser: ${req.headers.browser},  \n
            location: ${req.headers.location},  \n
             
            fullInfoFromApi: ${JSON.stringify(req.headers.fullinfofromapi)} \n
            email: ${req.body?.email} \n
            comment: ${req.body?.comment}
            `,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
