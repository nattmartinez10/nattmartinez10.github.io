import React from 'react';
import styles from '../styles/About.module.css';
import usfLogo from '../assets/usf.png';
import unLogo from '../assets/un.png';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <motion.div
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h2 className={styles.title}>Education</h2>
        <motion.div
          className={styles.line}
          initial={{ width: '160px' }}
          whileInView={{ width: '240px' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <div className={styles.educationGrid}>
          {[{
            logo: usfLogo,
            degree: "B.S in Computer Science",
            school: "University of South Florida",
            date: "May 2025"
          }, {
            logo: unLogo,
            degree: "B.S in Software Engineering",
            school: "Universidad del Norte",
            date: "May 2025"
          }].map((edu, i) => (
            <motion.div
              className={styles.eduItem}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src={edu.logo} alt={edu.school} className={styles.logo} />
              <div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.school}>{edu.school}</p>
                <p className={styles.date}>{edu.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={`${styles.section} ${styles.experienceSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h2 className={styles.title}>Experience</h2>
        <motion.div
          className={styles.line}
          initial={{ width: '160px' }}
          whileInView={{ width: '240px' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.div
          className={styles.expItem}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className={styles.degree}>Differential Equations Tutor</h3>
          <p className={styles.school}>Universidad del Norte</p>
          <p className={styles.date}>Jan 2022 – Dec 2023</p>
        </motion.div>
      </motion.div>
    </section>
  );
};



