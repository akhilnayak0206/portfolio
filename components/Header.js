import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from '@/styles/layouts/Header.module.scss';

function Header() {
  const router = useRouter();

  const scrollFunc = (e) => {
    console.log('getting called');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc, false);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.flex}`}>Header</div>
    </header>
  );
}

export default Header;
