import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import styles from '../styles/pages/HomePage.module.scss';
import Layout from '../components/Layout';
import myPic from '../public/meditate-world.png';
import javaScriptLogo from '../public/javascript-logo-1.png';
import imgCodeIcon from '../public/code-icon.svg';
import { ChatMeContext } from '../components/Context';
import Link from 'next/link';
import axios from 'axios';
import defaultData from '../defaultData.json';
import ReactMarkdown from 'react-markdown';
import apiAppendData from 'utils/apiAppendData';
// import { getLocation } from '../utils/apiAppendData';
import { SECRET_API_URL } from '../config/index';

export default function HomePage({
  headerFooterData,
  homepageData,
  projectData,
  achievementsData,
  developerTypeData,
}) {
  const [openPopup, setOpenPopup] = useContext(ChatMeContext);

  const [secondSectionCard, setSecondSectionCard] = useState(developerTypeData);
  const [achievements, setAchievements] = useState(achievementsData);
  const [projects, setProjects] = useState(projectData);

  // data used to update after component is mounted
  const [headFootData, setHeadFootData] = useState(headerFooterData);
  const [stateHomePageData, setStateHomePageData] = useState(homepageData);

  // get data from API after waking the Heroku Dyno
  useEffect(() => {
    let callInitialData = async () => {
      try {
        let headers = {};
        let data = await apiAppendData();
        headers['fullInfoFromApi'] = JSON.stringify(data);
        // headers['fullInfoFromApi'] = encodeURIComponent(JSON.stringify(data));
        headers['location'] = JSON.stringify(data.ipAndLocationData);
        headers['browser'] = data.browser;
        axios.get(`/api-called`, { headers });

        const resHomePage = await axios.get(`/home-page`, { headers });
        const homepageData = resHomePage.data;
        setStateHomePageData(homepageData);

        const developerTypeRes = await axios.get(`/developer-types?_sort=id`, {
          headers,
        });
        let developerTypeData = developerTypeRes.data;
        setSecondSectionCard(developerTypeData);

        const resProjectPage = await axios.get(
          `/projects?showOnHomePage=true&_sort=positionOnHomePage`,
          { headers }
        );
        let projectData = resProjectPage.data;
        setProjects(projectData);

        const resAchievements = await axios.get(
          `/achievement-years?_sort=year:desc`,
          { headers }
        );
        let achievementsData = resAchievements.data;
        setAchievements(achievementsData);

        const resHeaderFooter = await axios.get(`/header-footer`, { headers });
        let headerFooterData = resHeaderFooter.data;
        setHeadFootData(headerFooterData);
      } catch (error) {
        console.log(error, 'error');
      }
    };

    callInitialData();
  }, []);

  const {
    pageTitle,
    pageDescription,
    seoKeywords,
    projectCompleted,
    projectsCompletedText,
    section1MotoSubtitle,
    section1MotoTitle,
    section2IntroP1,
    section2IntroTitle,
    developerType,
    chatPopupText,
    section2IntroP2,
    section2IntroP3,
    discoverProjectSubtitle,
    discoverProjectTitle,
    viewAllProjectButton,
    achievementSubtitle,
    achievementTitle,
    section1Image,
    yearsOfExpText,
    yearsOfExp,
  } = stateHomePageData || {};

  // useEffect(() => {
  //   let yearsOfExpElement = document.getElementById('#yearsOfExp');
  //   let projectDoneElement = document.getElementById('#projectsDone');

  //   animateNumber(yearsOfExpElement, 0, yearsOfExp, 2000);
  //   animateNumber(projectDoneElement, 0, projectCompleted, 2000);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    let yearsOfExpElement = document.getElementById('#yearsOfExp');
    let projectDoneElement = document.getElementById('#projectsDone');

    animateNumber(yearsOfExpElement, 0, yearsOfExp, 2000);
    animateNumber(projectDoneElement, 0, projectCompleted, 2000);
  }, [projectCompleted, yearsOfExp]);

  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      keywords={seoKeywords}
      headerFooterData={headFootData}
    >
      <div className={styles.homepage}>
        <main>
          <section className={`${styles.container} ${styles.firstSection}`}>
            <div className={`${styles.firstSection__details}`}>
              <div className={`${styles.firstSection__details__top}`}>
                <p>{developerType}</p>
                <h1>{section1MotoTitle}</h1>
                <p>{section1MotoSubtitle}</p>
                <br />
                <br />
                <h1 onClick={() => setOpenPopup(true)}>{chatPopupText}</h1>
              </div>
              <div className={`${styles.firstSection__details__bottom}`}>
                <div>
                  <span id='#yearsOfExp'>{yearsOfExp}</span>
                  <span>{yearsOfExpText}</span>
                </div>
                <div>
                  <span id='#projectsDone'>{projectCompleted}</span>
                  <span>{projectsCompletedText}</span>
                </div>
              </div>
            </div>
            <div className={`${styles.firstSection__imageSection}`}>
              <div className={styles.sectionPic}>
                <div className={styles.system_sun}>
                  <div className={styles.system_earth}>
                    <Image
                      layout='fill'
                      src={javaScriptLogo}
                      // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425"
                      className={`${styles.earth}`}
                      alt='javaScriptLogo'
                    />
                  </div>
                  <div className={styles.system_saturn}>
                    <div className={`${styles.saturn}`}></div>
                  </div>
                  <div className={styles.system_nodeJS}>
                    <div className={`${styles.nodeJS}`}></div>
                  </div>
                  {/* <div className={styles.system_css}>
                    <div className={`${styles.css}`}></div>
                  </div> */}
                  <div className={`${styles.sun}`}>
                    <Image
                      // src={myPic}
                      src={section1Image?.url || myPic}
                      priority
                      alt='akhil nayak'
                      layout='fill'
                      objectFit='contain'
                      objectPosition='center'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.secondSection}`}>
            <div
              className={`${styles.container} ${styles.secondSection__container}`}
            >
              <div className={`${styles.bothSection}`}>
                {secondSectionCard &&
                  secondSectionCard.map((value, key) => (
                    <div key={key} className={`${styles.card}`}>
                      <span className={styles.card__first_line}>
                        <h1>{value?.title}</h1>
                        <Image
                          layout='fixed'
                          src={imgCodeIcon}
                          className={styles.svgIcon}
                          alt='code'
                        />
                        {/* <object className={styles.svgIcon} data={imgCodeIcon.src} type="image/svg+xml" /> */}
                      </span>
                      <p>{value?.subtitle}</p>
                      <br />
                      <p>
                        <Link href='/projects'>{value?.numberOfProjects}</Link>
                      </p>
                    </div>
                  ))}
              </div>
              <div className={`${styles.bothSection}`}>
                <p>{section2IntroTitle}</p>
                <h1>{section2IntroP1}</h1>
                <br />
                <h1>{section2IntroP2}</h1>
                <br />
                <p>{section2IntroP3}</p>
              </div>
            </div>
          </section>
          <section className={`${styles.thirdSection}`}>
            <div
              className={`${styles.thirdSection__topTitle} ${styles.container}`}
            >
              <h1>{discoverProjectTitle}</h1>
              <span>{discoverProjectSubtitle}</span>
            </div>
            <div
              className={`${styles.thirdSection__Images} ${styles.container}`}
            >
              {/* <div className={styles.thirdSection__Images__innerDiv}> */}
              {projects &&
                projects.map((data, key) => (
                  <div
                    className={styles.thirdSection__Images__innerDiv}
                    key={key}
                  >
                    {/* eslint-disable-next-line @next/next/link-passhref */}
                    {/* <Link href='/projects' replace passHref> */}
                    <Image
                      // src="https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580740705/Alzheimer%20App/screenshots/1loginPage.jpg"
                      // src="https://res.cloudinary.com/dx0wpoeyu/image/upload/v1580730539/Dev%20Forum/web/homePageWeb.png"
                      src={data?.heroImage?.formats?.small?.url || data?.url}
                      layout='fixed'
                      alt={data?.heroImage?.name || 'projects'}
                      width='350px'
                      height='200px'
                      objectFit='contain'
                    />
                    {/* </Link> */}
                  </div>
                ))}
              {/* </div> */}
            </div>
            <div className={styles.thirdSection__bottomDiv}>
              <Link href='/projects'>{`${viewAllProjectButton} →`}</Link>
            </div>
          </section>
          <section className={`${styles.container} ${styles.fourthSection}`}>
            <div
              className={`${styles.flexBaseline} ${styles.fourthSection__row}`}
              // className={`${styles.flexCenter} ${styles.fourthSection__row}`}
            >
              <div className={styles.fourthSection__leftSide}>
                <h1 className={styles.achievements_title}>
                  {achievementTitle}
                </h1>
              </div>
              <div className={styles.fourthSection__rightSide}>
                <p className={styles.achievements_title_detail}>
                  {achievementSubtitle}
                </p>
              </div>
            </div>
            {achievements &&
              achievements.map((data, key) => (
                <div
                  key={key}
                  className={`${styles.flexBaseline} ${styles.fourthSection__row}`}
                >
                  <div className={styles.fourthSection__leftSide}>
                    <p>{data?.year}</p>
                  </div>
                  <div className={styles.fourthSection__rightSide}>
                    {data?.achievements.map((value, internalKey) => (
                      <div
                        key={internalKey}
                        className={styles.fourthSection__rightSide__row}
                      >
                        <p>{value?.title}</p>
                        <h2>
                          {/* eslint-disable-next-line react/no-children-prop */}
                          <ReactMarkdown children={value?.subtitle} />
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </section>
        </main>
      </div>
    </Layout>
  );
}

// animation for the number being shown
function animateNumber(obj, initVal, lastVal, duration) {
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime) => {
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = currentTime;
    }

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = `${Math.floor(progress * (lastVal - initVal) + initVal)}`;

    //checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };

  //start animating
  window.requestAnimationFrame(step);
}

export async function getServerSideProps({ req }) {
  try {
    // // let addThisInFullInfo = await getLocation();
    // let headers = {};
    // // if(addThisInFullInfo){
    // //   headers['fullInfoFromApi'] = JSON.stringify(addThisInFullInfo);
    // headers['referer'] = 'portfolio-homepage';
    // // }

    // const resHeaderFooter = await axios.get(`/header-footer`, { headers });
    // let headerFooterData = resHeaderFooter.data;
    // const {
    //   updated_at,
    //   created_at,
    //   published_at,
    //   id,
    //   defaultPageTitle,
    //   defaultPageDescription,
    //   defaultSeoKeyword,
    //   ...neededHeaderFooterVariables
    // } = headerFooterData;

    // headerFooterData = neededHeaderFooterVariables;

    // const resHomePage = await axios.get(`/home-page`, { headers });
    // const homepageData = resHomePage.data;

    // const resProjectPage = await axios.get(
    //   `/projects?showOnHomePage=true&_sort=positionOnHomePage`,
    //   { headers }
    // );
    // let projectData = resProjectPage.data;

    // projectData = projectData.map((value) => {
    //   const { heroImage } = value;

    //   return {
    //     heroImage: {
    //       url: heroImage.url,
    //       name: heroImage.name,
    //       formats: {
    //         small: {
    //           url: heroImage?.formats?.small?.url,
    //         },
    //       },
    //     },
    //   };
    // });

    // const resAchievements = await axios.get(
    //   `/achievement-years?_sort=year:desc`,
    //   { headers }
    // );
    // let achievementsData = resAchievements.data;

    // achievementsData = achievementsData.map((value) => {
    //   let { year, achievements, ...notNeededAchievementValues } = value;
    //   achievements.sort((a, b) => b.position - a.position);

    //   achievements = achievements.map((value) => {
    //     let { title, subtitle, ...notNeededAchievementValues } = value;

    //     return {
    //       title,
    //       subtitle,
    //     };
    //   });

    //   if (achievements.length) {
    //     return {
    //       year,
    //       achievements,
    //     };
    //   }
    //   return false;
    // });

    // achievementsData = achievementsData.filter((value) => value && value);

    // const developerTypeRes = await axios.get(`/developer-types?_sort=id`, {
    //   headers,
    // });
    // let developerTypeData = developerTypeRes.data;

    // developerTypeData = developerTypeData.map((value) => {
    //   const { title, subtitle, numberOfProjects, ...notNeededValues } = value;

    //   return {
    //     title,
    //     subtitle,
    //     numberOfProjects,
    //   };
    // });

    // return {
    //   props: {
    //     headerFooterData,
    //     homepageData,
    //     projectData,
    //     achievementsData,
    //     developerTypeData,
    //   },
    // };

    //  SINCE THE HEROKU APP GOES TO SLEEP DUE TO INACTIVITY FOR MORE THAN 30 MINS THE APP MAY NOT RESPOND TO API CALLS AT FIRST CALL
    axios.get(SECRET_API_URL);

    return {
      props: {
        headerFooterData: defaultData.headerFooterData,
        homepageData: defaultData.homepageData,
        projectData: defaultData.projects,
        achievementsData: defaultData.achievementsData,
        developerTypeData: defaultData.developerTypeData,
      },
    };
  } catch (error) {
    console.log(error, 'error');
    return {
      props: {
        headerFooterData: defaultData.headerFooterData,
        homepageData: defaultData.homepageData,
        projectData: defaultData.projects,
        achievementsData: defaultData.achievementsData,
        developerTypeData: defaultData.developerTypeData,
      },
    };
  }
}
