import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/components/ProjectCarousel.module.scss";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function ProjectCarousel(props) {
  const router = useRouter();

  const [checkIfTablet, setCheckIfTablet] = useState(false);

  const { data } = props.selectedProject || {};

  
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

    if(isTablet){
      setCheckIfTablet(true);
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className={`${styles.projectCarousel__mainDiv}`} onClick={()=>checkIfTablet && props.closeCarousel()}>
      <div>
          <div onClick={()=>props.closeCarousel()}>
            <span></span>
          </div>
          <div onClick={(e)=>e.stopPropagation()}>
            <AwesomeSlider>
              {
                 data && data?.screenshots.map((value)=>{
                  return <div key={value.id} data-src={value?.formats?.large?.url || value?.url} />
                }
                )
              }
            </AwesomeSlider>
          </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
