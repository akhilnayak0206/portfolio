import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/pages/ProjectsPage.module.scss";
import Layout from "@/components/Layout";
import ProjectCarousel from "@/components/ProjectCarousel";
import axios from "axios";
import defaultData from "../../defaultData.json";
import apiAppendData from 'utils/apiAppendData';
import { SECRET_API_URL } from "../config/index";

export default function ProjectsPage({ headerFooterData, projects }) {
  const [projectItems, setProjectItems] = useState(projects);
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [headFootData, setHeadFootData] = useState(headerFooterData)

  // get data from API after waking the Heroku Dyno
  useEffect(() => {
    let callInitialData = async() =>{
      try {
        let headers = {};
        // let data = await apiAppendData();
        // headers['fullInfoFromApi'] = JSON.stringify(data);
        // headers['location'] = JSON.stringify(data.ipAndLocationData);
        // headers['browser'] = data.browser;

        const resHeaderFooter = await axios.get(`/header-footer`,{headers});
        let headerFooterData = resHeaderFooter.data;
        const { updated_at, created_at, published_at, id, defaultPageTitle, 
          defaultPageDescription, defaultSeoKeyword, 
          ...neededHeaderFooterVariables} = headerFooterData;
    
        headerFooterData = neededHeaderFooterVariables;

        const resProjectData = await axios.get(`/projects?_sort=position`,{headers});
        let projectsData = resProjectData.data;

        projectsData = projectsData.map((value)=>{
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
    
        setHeadFootData(headerFooterData);
        setProjectItems(projectsData);
      }
      catch(error){
        console.log(error,"error");
      }
    }

    callInitialData();
  }, [])

  const closeCarousel = () => {
    return setShowCarousel(false);
  };

  return (
    <Layout title="Akhil Nayak's Projects" headerFooterData={headFootData}>
      <div className={styles.projectsPage}>
        <main>
          {showCarousel && (
            <div className={styles.carouselDiv}>
              <ProjectCarousel
                selectedProject={selectedProject}
                closeCarousel={() => closeCarousel()}
              />
            </div>
          )}
          <div className={`${styles.container} ${styles.mainProjectsDiv}`}>
            {projectItems &&
              projectItems.map(
                (data, key) => (
                  // eslint-disable-next-line @next/next/link-passhref
                  // <Link key={key} href="/project/check">
                  <div className={`${styles.projectCard}`} key={key}>
                    <div className={styles.projectCardImage}>
                      <div className={styles.projectCardImage__div}>
                        <Image
                          // src="https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/1loginPage.jpg"
                          // src="https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730539/Dev%20Forum/web/homePageWeb.png"
                          src={
                            data?.heroImage?.formats?.small?.url ||
                            data.heroImage.url
                          }
                          layout="fill"
                          alt={data.title}
                          // width="100%"
                          // height="100%"
                          objectFit="contain"
                          className={styles.projectCardImage__Image}
                        />
                      </div>
                      <div className={styles.projectCardTitle}>
                        <span>{data.title}</span>
                      </div>
                    </div>
                    <div className={styles.projectCardButtons}>
                      <div
                        className={styles.projectCardButtons__ssButton}
                        onClick={(e) => {
                          setSelectedProject({ data, check: 1 });
                          setShowCarousel(true);
                        }}
                      >
                        Open Screenshots
                      </div>
                      {data.websiteUrl && (
                        <div className={styles.projectCardButtons__vcButton}>
                          <a
                            href={data.codeUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            View Code
                          </a>
                        </div>
                      )}
                    </div>
                    {data.websiteUrl ? (
                      <div className={styles.projectCardButtons}>
                        <div className={styles.projectCardButtons__vcButton}>
                          <a
                            href={data.websiteUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            View Website
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.projectCardButtons}>
                        <div className={styles.projectCardButtons__vcButton}>
                          <a
                            href={data.codeUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            View Code
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )
                //  </Link>
              )}
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    // const resHeaderFooter = await axios.get(`/header-footer`);
    // let headerFooterData = resHeaderFooter.data;

    // const { updated_at, created_at, published_at, id, defaultPageTitle, 
    //   defaultPageDescription, defaultSeoKeyword, 
    //    ...neededHeaderFooterVariables} = headerFooterData;

    // headerFooterData = neededHeaderFooterVariables;

    // const resProjectData = await axios.get(`/projects?_sort=position`);
    // let projects = resProjectData.data;

    // projects = projects.map((value)=>{
    //   let { heroImage, title, description,
    //     codeUrl, websiteUrl,screenshots } = value;

    //   screenshots = screenshots.map((screen)=>{
    //     let { name, 
    //       formats, 
    //       url 
    //     } = screen;

    //     let temp = formats?.large?.url ? formats.large.url : url;

    //     return {
    //       name, url,
    //       formats:{
    //         large:{
    //           url: temp
    //         }
    //       }
    //     }
    //   })

    //   return {
    //     title, description, codeUrl, websiteUrl, screenshots,
    //     heroImage:{
    //       url: heroImage.url,
    //       name: heroImage.name,
    //       formats:{
    //         small:{
    //           url: heroImage?.formats?.small?.url
    //         }
    //       }
    //     }
    //   }
    // })

    axios.getSECRET_API_URL)

    return {
      props: { 
        headerFooterData: defaultData.headerFooterData,
        projects: defaultData.projects
       },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        headerFooterData: defaultData.headerFooterData,
        projects: defaultData.projects,
      },
    };
  }
}