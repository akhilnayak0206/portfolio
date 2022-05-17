// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { SECRET_API_URL } from "../../config/index";
import qs from 'qs'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    try{
        let headers = req.headers || {};;
        let queryToBeAdded = qs.stringify(req.query)
        let data = await axios.get(`${SECRET_API_URL}/achievement-years?${queryToBeAdded}`,{headers});

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

        res.status(200).json(achievementsData)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  }
  