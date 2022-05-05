// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { SECRET_API_URL } from "../../config/index";
import qs from 'qs'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    try{
        let headers = req.headers || {};
        let resBody = req.body;
        let data = await axios.post(`${SECRET_API_URL}/contact-mes/`, resBody, headers);

        res.status(200).json(data.data);
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  }
  