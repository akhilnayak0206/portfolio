import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/pages/NotFoundPage.module.scss';
import Layout from '../components/Layout';
import error404 from '../public/error-404.svg';
import Link from 'next/link';
import defaultData from '../defaultData.json';
import axios from 'axios';
import apiAppendData from 'utils/apiAppendData';
import { SECRET_API_URL } from '../config/index';

export default function NotFoundPage({ headerFooterData }) {
  const [headFootData, setHeadFootData] = useState(headerFooterData);

  // get data from API after waking the Heroku Dyno
  useEffect(() => {
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

        const resHeaderFooter = await axios.get(`/header-footer`, { headers });
        let headerFooterData = resHeaderFooter.data;
        const {
          updated_at,
          created_at,
          published_at,
          id,
          defaultPageTitle,
          defaultPageDescription,
          defaultSeoKeyword,
          ...neededHeaderFooterVariables
        } = headerFooterData;

        headerFooterData = neededHeaderFooterVariables;

        setHeadFootData(headerFooterData);
      } catch (error) {
        console.log(error, 'error');
      }
    };

    callInitialData();
  }, []);

  return (
    <Layout title='Akhil Nayak' headerFooterData={headFootData}>
      <div className={styles.notFoundPage}>
        <main>
          <div className={`${styles.container} ${styles.notFoundDiv}`}>
            <div className={`${styles.errorImage}`}>
              <Image
                layout='responsive'
                src={error404}
                objectPosition='top'
                alt='404'
              />
            </div>
            <br />
            <h1>
              If someone asks where this page is,
              <br /> it has left the country.
            </h1>
            <br />
            <h2>
              <Link href='/'>
                <a>Go back to Home?</a>
              </Link>
            </h2>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    axios.get(SECRET_API_URL);

    return {
      props: { headerFooterData: defaultData.headerFooterData },
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
