// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
import {
  SECRET_API_URL,
  CHAT_ID,
  NODE_ENV,
  SECRET_API_CALLED,
} from '../../config/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  // res.status(200).json({ name: `Hi, I'm Akhil Nayak` })
  try {
    let headers = {};
    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };

    // let data = await axios.get(`${SECRET_API_URL}/header-footer`,{headers});
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis
    let data = {
      data: {
        id: 1,
        infoTitle: 'Information',
        infoContent: 'Mumbai, Maharashtra, India',
        myContactEmail: 'nayak@duck.com',
        linkedInUrl: 'https://in.linkedin.com/in/akhil-nayak',
        twitterUrl: 'https://twitter.com/n_akhil_000',
        instagramUrl: 'https://www.instagram.com/akhiln_1',
        stackoverflowUrl:
          'https://stackoverflow.com/users/11380693/akhil-nayak',
        githubUrl: 'https://github.com/akhilnayak0206',
        myEmail: 'nayak@duck.com',
        sayingHiLeftText: 'Start by ',
        sayingHiPoupText: 'saying hi',
        makeAmazingText: "Let's make something \namazing together.",
        published_at: '2022-04-05T07:45:41.691Z',
        created_at: '2022-04-05T07:45:40.318Z',
        updated_at: '2022-05-06T10:27:42.021Z',
        defaultPageTitle: "Akhil Nayak's Portfolio",
        defaultPageDescription:
          "Akhil Nayak's Portfolio. Information on Akhil Nayak",
        defaultSeoKeyword:
          "akhil, nayak, akhil-nayak, akhilnayak, akhil nayak, portfolio, front-end developer, developer, \n    frontend, fullstack, backend, software, full-stack developer, JavaScript, html, css, react, nodejs, IT, akhilnayak0206, akhil's portoflio, akhils`",
        chatMePoup: true,
        maxContactSubmitAllowed: 5,
      },
    };

    let headerFooterData = data.data;

    const {
      updated_at,
      created_at,
      published_at,
      id,
      defaultPageTitle,
      defaultPageDescription,
      defaultSeoKeyword,
      ...neededHeaderFooterVariables
    } = headerFooterData;

    headerFooterData = neededHeaderFooterVariables;

    res.status(200).json(headerFooterData);

    axios.post(`${SECRET_API_CALLED}`, {
      chat_id: CHAT_ID,
      text: `
            Portfolio Website \n
            ENV: NODE_ENV \n
            ${new Date()} : ${req.headers.host} \n
             
            deviceId: ${req.headers['user-agent']},  \n
            origin: ${req.headers.referer},  \n
            browser: ${req.headers.browser},  \n
            location: ${req.headers.location},  \n
             
            fullInfoFromApi: ${JSON.stringify(req.headers.fullinfofromapi)}
            `,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
};
