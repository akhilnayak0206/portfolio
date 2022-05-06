// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { SECRET_API_URL } from "../../config/index";
import qs from 'qs'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    try{
        let headers = req.headers || {};;
        let queryToBeAdded = qs.stringify(req.query)
        let data = await axios.get(`${SECRET_API_URL}/projects?${queryToBeAdded}`,headers);

        let projects = data.data;

        if(req?.query?.showOnHomePage){
            projects = projects.map((value) => {
                const { heroImage } = value;
          
                return {
                  heroImage: {
                    url: heroImage.url,
                    name: heroImage.name,
                    formats: {
                      small: {
                        url: heroImage?.formats?.small?.url,
                      },
                    },
                  },
                };
              });
        }
        else{
            projects = projects.map((value)=>{
                let { heroImage, title, description,
                  codeUrl, websiteUrl,screenshots } = value;
          
                screenshots = screenshots.map((screen)=>{
                  let { name, 
                    formats, 
                    url 
                  } = screen;
          
                  let temp = formats?.large?.url ? formats.large.url : url;
          
                  return {
                    name, url,
                    formats:{
                      large:{
                        url: temp
                      }
                    }
                  }
                })
          
                return {
                  title, description, codeUrl, websiteUrl, screenshots,
                  heroImage:{
                    url: heroImage.url,
                    name: heroImage.name,
                    formats:{
                      small:{
                        url: heroImage?.formats?.small?.url
                      }
                    }
                  }
                }
              })
        }

        res.status(200).json(projects)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  }
  