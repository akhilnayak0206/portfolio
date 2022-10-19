// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { SECRET_API_URL, CHAT_ID, NODE_ENV, SECRET_API_CALLED } from "../../config/index";
import qs from "qs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = {};
    const { browser, location, fullinfofromapi, referer } = req.headers;
    headers = { browser, location, fullinfofromapi, referer };
    let queryToBeAdded = qs.stringify(req.query);
    // let data = await axios.get(`${SECRET_API_URL}/contact-page?${queryToBeAdded}`,{headers});
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis
    let data = {
      data: {
        id: 1,
        animation: true,
        developerType: [
          "Web",
          "Software",
          "Back-End",
          "Front-End",
          "Mobile-App",
        ],
        animationTextP1: "Your Friendly Neighbourhood",
        animationTextP3: "developer",
        published_at: "2022-04-12T15:05:59.275Z",
        created_at: "2022-04-12T14:42:26.437Z",
        updated_at: "2022-05-06T11:50:35.089Z",
        pageTitle: "Contact Akhil",
        pageDescription:
          "Contact Information of Akhil Nayak. Akhil Nayak is a developer who loves to create website and mobile application.",
        seoKeyword:
          "akhil, nayak, akhilnayak0206, akhil0206, akhil02, akhilnayak02, akhil-nayak, akhilnayak, akhil nayak, portfolio, front-end developer, developer,      frontend, fullstack, backend, software, full-stack developer, JavaScript, html, css, react, nodejs, IT, akhilnayak0206, akhil's portoflio, akhils, contact akhil nayak, contact akhil, contact akhilnayak0206, contact akhil02",
        mapImage: {
          id: 1,
          name: "mumbai.png",
          alternativeText: "",
          caption: "",
          width: 1002,
          height: 1578,
          formats: {
            large: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1649834732/large_mumbai_533e5171aa.png",
              hash: "large_mumbai_533e5171aa",
              mime: "image/png",
              name: "large_mumbai.png",
              path: null,
              size: 359.62,
              width: 635,
              height: 1000,
              provider_metadata: {
                public_id: "large_mumbai_533e5171aa",
                resource_type: "image",
              },
            },
            small: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1649834733/small_mumbai_533e5171aa.png",
              hash: "small_mumbai_533e5171aa",
              mime: "image/png",
              name: "small_mumbai.png",
              path: null,
              size: 116.16,
              width: 317,
              height: 500,
              provider_metadata: {
                public_id: "small_mumbai_533e5171aa",
                resource_type: "image",
              },
            },
            medium: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1649834733/medium_mumbai_533e5171aa.png",
              hash: "medium_mumbai_533e5171aa",
              mime: "image/png",
              name: "medium_mumbai.png",
              path: null,
              size: 224.84,
              width: 476,
              height: 750,
              provider_metadata: {
                public_id: "medium_mumbai_533e5171aa",
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1649834732/thumbnail_mumbai_533e5171aa.png",
              hash: "thumbnail_mumbai_533e5171aa",
              mime: "image/png",
              name: "thumbnail_mumbai.png",
              path: null,
              size: 15.4,
              width: 99,
              height: 156,
              provider_metadata: {
                public_id: "thumbnail_mumbai_533e5171aa",
                resource_type: "image",
              },
            },
          },
          hash: "mumbai_533e5171aa",
          ext: ".png",
          mime: "image/png",
          size: 454.27,
          url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1649834731/mumbai_533e5171aa.png",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "mumbai_533e5171aa",
            resource_type: "image",
          },
          created_at: "2022-04-13T07:25:34.133Z",
          updated_at: "2022-04-13T07:25:34.187Z",
        },
      },
    };

    res.status(200).json(data.data);
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
