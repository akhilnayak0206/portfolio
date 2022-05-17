// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { SECRET_API_URL } from "../../config/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = { };

    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };

    let data = await axios.get(`${SECRET_API_URL}/home-page`, { headers });

    let homePageData = data.data;

    let { section1Image, ...neededData } = homePageData;

    homePageData = neededData;

    const { url } = section1Image;

    res.status(200).json({ ...homePageData, section1Image: { url } });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
};
