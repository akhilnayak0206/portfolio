import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/pages/SkillsPage.module.scss';
import Layout from '../components/Layout';
import defaultData from '../defaultData.json';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import apiAppendData from 'utils/apiAppendData';
import { SECRET_API_URL } from '../config/index';

export default function SkillsPage({ headerFooterData, skills }) {
  const [skillItems, setSkillItems] = useState(skills);
  const [headFootData, setHeadFootData] = useState(headerFooterData);

  // get data from API after waking the Heroku Dyno
  useEffect(() => {
    let onPage = true;
    let callInitialData = async () => {
      try {
        let headers = {};
        let data = await apiAppendData();
        headers['fullInfoFromApi'] = encodeURIComponent(JSON.stringify(data));
        headers['location'] = encodeURIComponent(
          JSON.stringify(data.ipAndLocationData)
        );
        headers['browser'] = data.browser;
        axios.get(`/api-called`, { headers });

        let checkIfSkillsDataExists = localStorage.getItem('skillsData');
        let checkIfHeaderFooterDataExists =
          localStorage.getItem('headerFooterData');

        if (checkIfSkillsDataExists && onPage) {
          setSkillItems(JSON.parse(checkIfSkillsDataExists));
        }

        if (checkIfHeaderFooterDataExists && onPage) {
          setHeadFootData(JSON.parse(checkIfHeaderFooterDataExists));
        }

        const resSkills = await axios.get(`/skills?_sort=position`, {
          headers,
        });
        const skillsData = resSkills.data;
        if (onPage) {
          setSkillItems(skillsData);
          localStorage.setItem('skillsData', JSON.stringify(skillsData));
        }

        const resHeaderFooter = await axios.get(`/header-footer`, { headers });
        let headerFooterData = resHeaderFooter.data;
        if (onPage) {
          setHeadFootData(headerFooterData);
          localStorage.setItem(
            'headerFooterData',
            JSON.stringify(headerFooterData)
          );
        }
      } catch (error) {
        console.log(error, 'error');
      }
    };

    callInitialData();

    return () => {
      onPage = false;
    };
  }, []);

  return (
    <Layout title="Akhil Nayak's Skills" headerFooterData={headFootData}>
      <div className={styles.skillsPage}>
        <main>
          <div className={`${styles.container} ${styles.mainSkillsDiv}`}>
            {skillItems &&
              skillItems.map((skill, key) => (
                <div key={key} className={`${styles.skillItem}`}>
                  {/* {console.log(skill?.image?.formats?.small?.url)} */}
                  <div className={styles.hideShowCard}>
                    <span>{skill.title}</span>
                    <span>
                      {/* eslint-disable-next-line react/no-children-prop */}
                      <ReactMarkdown children={skill?.description} />
                    </span>
                  </div>
                  <Image
                    layout='intrinsic'
                    width={100}
                    height={100}
                    src={
                      skill?.image?.formats?.thumbnail?.url || skill?.image?.url
                    }
                    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425"
                    // className={`${styles.skillLogo}`}
                    alt={skill.title}
                    objectFit='contain'
                  />
                  <span className={styles.skillTitle}>{skill.title}</span>
                </div>
              ))}
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

    // const resSkills = await axios.get(`/skills?_sort=position`);
    // const skills = resSkills.data;

    axios.get(SECRET_API_URL);

    return {
      props: {
        headerFooterData: defaultData.headerFooterData,
        skills: defaultData.skills,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        headerFooterData: defaultData.headerFooterData,
        skills: defaultData.skills,
      },
    };
  }
}
