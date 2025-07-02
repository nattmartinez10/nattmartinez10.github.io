import React from 'react';
import styles from '../styles/Home.module.css';
import avatar from '../assets/yo.png'; 
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Home = () => {
  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.card}>
        <img src={avatar} alt="Natalia" className={styles.avatar} />
        <div className={styles.text}>
          <h1>
            <span className={styles.hi}>Hi!</span>
            <span className={styles.name}> I’m Natalia</span>
          </h1>
          <p className={styles.description}>
            I'm passionate about solving problems through technology, especially in full-stack development, data analysis, and IT.
            I’m drawn to building tools that improve workflows and enjoy exploring automation and infrastructure solutions.
          </p>
          <a href="/Martinez_Natalia_resume.pdf" className={styles.button} download>
            Download my resume
          </a>
          <div className={styles.icons}>
            <a href="https://linkedin.com/in/nmartinezdiaz" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/nattmartinez10" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://instagram.com/natymartinez04" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
