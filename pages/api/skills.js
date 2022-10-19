// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { SECRET_API_URL, CHAT_ID, NODE_ENV, SECRET_API_CALLED } from "../../config/index";
import qs from "qs";
import skillsJson from '../../utils/skills.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = {};
    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };
    let queryToBeAdded = qs.stringify(req.query);
    // let data = await axios.get(`${SECRET_API_URL}/skills?${queryToBeAdded}`,{headers});
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis
    let data = {
      data: skillsJson.data || [],
    };

    let skills = data.data;

    skills = skills.map((value) => {
      const { title, description, image } = value;

      return {
        title,
        description,
        image: {
          url: image.url,
          formats: {
            thumbnail: {
              url: image?.formats?.thumbnail?.url,
            },
          },
        },
      };
    });

    res.status(200).json(skills);
    axios.post(`${SECRET_API_CALLED}`, {
        chat_id: CHAT_ID,
        text: `
              Portfolio Website \n
              ENV: NODE_ENV \n
              ${new Date()} : ${req.headers.host} \n
               
              deviceId: ${req.headers["user-agent"]},  \n
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
