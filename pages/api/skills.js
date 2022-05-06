// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { SECRET_API_URL } from "../../config/index";
import qs from 'qs'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    try{
        let headers = req.headers || {};;
        let queryToBeAdded = qs.stringify(req.query)
        let data = await axios.get(`${SECRET_API_URL}/skills?${queryToBeAdded}`,headers);

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

        res.status(200).json(skills)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  }
  