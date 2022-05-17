// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { SECRET_API_URL } from "../../config/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    // res.status(200).json({ name: `Hi, I'm Akhil Nayak` })
    try{
        let headers = {};
        const { browser, location, fullinfofromapi, referer } = req.headers;

        headers = { browser, location, fullinfofromapi, referer };

        let data = await axios.get(`${SECRET_API_URL}/header-footer`,{headers});

        let headerFooterData = data.data;

        const { updated_at, created_at, published_at, id, defaultPageTitle, 
          defaultPageDescription, defaultSeoKeyword, 
           ...neededHeaderFooterVariables} = headerFooterData;
    
        headerFooterData = neededHeaderFooterVariables;

        res.status(200).json(headerFooterData)
    }
    catch(err){
        console.log(err.message)
        res.status(500).send(err)
    }
  }
  