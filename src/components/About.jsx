import React from 'react';
import styles from '../styles/About.module.css';
import usfLogo from '../assets/usf.png';
import unLogo from '../assets/un.png';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.section}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.line}></div>

        <div className={styles.educationGrid}>
          <div className={styles.eduItem}>
            <img src={usfLogo} alt="USF" className={styles.logo} />
            <div>
              <h3 className={styles.degree}>B.S in Computer Science</h3>
              <p className={styles.school}>University of South Florida</p>
              <p className={styles.date}>May 2025</p>
            </div>
          </div>

          <div className={styles.eduItem}>
            <img src={unLogo} alt="UN" className={styles.logo} />
            <div>
              <h3 className={styles.degree}>B.S in Software Engineering</h3>
              <p className={styles.school}>Universidad del Norte</p>
              <p className={styles.date}>May 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.line}></div>

        <div className={styles.expItem}>
          <h3 className={styles.degree}>Differential Equations Tutor</h3>
          <p className={styles.school}>Universidad del Norte</p>
          <p className={styles.date}>Jan 2022 – Dec 2023</p>
        </div>
      </div>
    </section>
  );
};
