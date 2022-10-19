// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { SECRET_API_URL, CHAT_ID, NODE_ENV, SECRET_API_CALLED } from "../../config/index";
import qs from "qs";
import achievementJSON from '../../utils/achievement.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = {};

    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };

    let queryToBeAdded = qs.stringify(req.query);
    // let data = await axios.get(`${SECRET_API_URL}/achievement-years?${queryToBeAdded}`,{headers});
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis
    let data = {
      data: achievementJSON.data || [],
    };

    let achievementsData = data.data;

    achievementsData = achievementsData.map((value) => {
      let { year, achievements, ...notNeededAchievementValues } = value;
      achievements.sort((a, b) => b.position - a.position);

      achievements = achievements.map((value) => {
        let { title, subtitle, ...notNeededAchievementValues } = value;

        return {
          title,
          subtitle,
        };
      });

      if (achievements.length) {
        return {
          year,
          achievements,
        };
      }
      return false;
    });

    achievementsData = achievementsData.filter((value) => value && value);

    res.status(200).json(achievementsData);
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
