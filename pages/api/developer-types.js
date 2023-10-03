// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
import {
  SECRET_API_URL,
  CHAT_ID,
  NODE_ENV,
  SECRET_API_CALLED,
} from '../../config/index';
import qs from 'qs';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = {};
    const { browser, location, fullinfofromapi, referer } = req.headers;
    headers = { browser, location, fullinfofromapi, referer };
    let queryToBeAdded = qs.stringify(req.query);
    // let data = await axios.get(`${SECRET_API_URL}/developer-types?${queryToBeAdded}`,{headers});
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis

    let data = {
      data: [
        {
          id: 1,
          title: 'Front End Developer',
          subtitle: 'I develop smooth Front End UI code',
          published_at: '2022-04-16T09:38:15.912Z',
          created_at: '2022-04-16T09:38:14.431Z',
          updated_at: '2022-04-18T11:21:53.974Z',
          numberOfProjects: '13+ PROJECTS',
          svgIcon: null,
        },
        {
          id: 2,
          title: 'Full Stack Developer',
          subtitle:
            'I love to solve complex frontend/backend architecture problems.',
          published_at: '2022-04-16T09:39:44.759Z',
          created_at: '2022-04-16T09:39:43.281Z',
          updated_at: '2022-04-18T11:21:47.936Z',
          numberOfProjects: '8+ PROJECTS',
          svgIcon: null,
        },
        {
          id: 3,
          title: 'Mobile Developer',
          subtitle:
            'I love to create smooth iOS and Android Mobile Applications',
          published_at: '2022-04-18T11:20:59.991Z',
          created_at: '2022-04-16T09:42:17.056Z',
          updated_at: '2022-04-18T11:21:42.762Z',
          numberOfProjects: '2+ PROJECTS',
          svgIcon: null,
        },
      ],
    };

    let developerTypeData = data.data;

    developerTypeData = developerTypeData.map((value) => {
      const { title, subtitle, numberOfProjects, ...notNeededValues } = value;

      return {
        title,
        subtitle,
        numberOfProjects,
      };
    });

    res.status(200).json(developerTypeData);
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
    console.log(err);
    res.status(500).send(err);
  }
};
