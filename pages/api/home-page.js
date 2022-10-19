// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { SECRET_API_URL, CHAT_ID, NODE_ENV, SECRET_API_CALLED } from "../../config/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    let headers = {};

    const { browser, location, fullinfofromapi, referer } = req.headers;

    headers = { browser, location, fullinfofromapi, referer };

    // let data = await axios.get(`${SECRET_API_URL}/home-page`, { headers });
    // sine heroku has stopped free dynos will have to move towards static data for temporary basis
    let data = {
      data: {
        id: 1,
        developerType: "Full Stack Developer",
        chatPopupText: "Let's Chat!",
        yearsOfExp: 2,
        projectCompleted: 14,
        section2IntroTitle: "Introduction",
        section2IntroP1: "Hello! I'm Akhil Nayak",
        section2IntroP2: "Every great design begins with an even better story",
        section2IntroP3:
          "I am a self-learnt developer learning and coding since 2018. Started my journey from FreeCodeCamp and then started solving problems on HackerRank. Have been creating websites, mobile applications and providing solutions on StackOverflow in my free time.",
        discoverProjectTitle: "Discover Projects",
        discoverProjectSubtitle:
          "I consider making projects as part of learning as well as a fun activity",
        viewAllProjectButton: "View All Projects",
        achievementTitle: "Achievements",
        achievementSubtitle: "Awards and Certification received so far",
        section1MotoTitle: "Simplicity is the\nsoul of efficiency.",
        section1MotoSubtitle:
          "I design and code beautifully simple things,\nand I love what I do.",
        yearsOfExpText: "YEARS\nOF EXPERIENCE",
        projectsCompletedText: "PROJECTS COMPLETED SINCE 2018",
        published_at: "2022-04-05T07:46:06.861Z",
        created_at: "2022-04-05T07:46:05.525Z",
        updated_at: "2022-05-09T11:37:38.599Z",
        pageTitle: "About Akhil Nayak",
        pageDescription:
          "Akhil Nayak's Portfolio. Information on Akhil Nayak. Akhil Nayak is a developer who loves to create website and mobile application",
        seoKeywords:
          "akhil, nayak, akhilnayak0206, akhil0206, akhil02, akhilnayak02, akhil-nayak, akhilnayak, akhil nayak, portfolio, front-end developer, developer,frontend, fullstack, backend, software, full-stack developer, akhilnayak0206, akhil's portoflio,",
        section1Image: {
          id: 174,
          name: "meditate-world.png",
          alternativeText: "",
          caption: "",
          width: 1592,
          height: 1592,
          formats: {
            large: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1651219624/large_meditate_world_fea9401906.png",
              hash: "large_meditate_world_fea9401906",
              mime: "image/png",
              name: "large_meditate-world.png",
              path: null,
              size: 716.94,
              width: 1000,
              height: 1000,
              provider_metadata: {
                public_id: "large_meditate_world_fea9401906",
                resource_type: "image",
              },
            },
            small: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1651219625/small_meditate_world_fea9401906.png",
              hash: "small_meditate_world_fea9401906",
              mime: "image/png",
              name: "small_meditate-world.png",
              path: null,
              size: 218.05,
              width: 500,
              height: 500,
              provider_metadata: {
                public_id: "small_meditate_world_fea9401906",
                resource_type: "image",
              },
            },
            medium: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1651219624/medium_meditate_world_fea9401906.png",
              hash: "medium_meditate_world_fea9401906",
              mime: "image/png",
              name: "medium_meditate-world.png",
              path: null,
              size: 439.35,
              width: 750,
              height: 750,
              provider_metadata: {
                public_id: "medium_meditate_world_fea9401906",
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".png",
              url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1651219623/thumbnail_meditate_world_fea9401906.png",
              hash: "thumbnail_meditate_world_fea9401906",
              mime: "image/png",
              name: "thumbnail_meditate-world.png",
              path: null,
              size: 30.34,
              width: 156,
              height: 156,
              provider_metadata: {
                public_id: "thumbnail_meditate_world_fea9401906",
                resource_type: "image",
              },
            },
          },
          hash: "meditate_world_fea9401906",
          ext: ".png",
          mime: "image/png",
          size: 1099.07,
          url: "https://res.cloudinary.com/dx0wpoeyu/image/upload/v1651219622/meditate_world_fea9401906.png",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "meditate_world_fea9401906",
            resource_type: "image",
          },
          created_at: "2022-04-29T08:07:06.093Z",
          updated_at: "2022-04-29T08:07:06.138Z",
        },
      },
    };

    let homePageData = data.data;

    let { section1Image, ...neededData } = homePageData;

    homePageData = neededData;

    const { url } = section1Image;

    res.status(200).json({ ...homePageData, section1Image: { url } });
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
    console.log(err.message);
    res.status(500).send(err);
  }
};
