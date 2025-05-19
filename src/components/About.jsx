import React from 'react';
import styles from '../styles/About.module.css';
import myPhoto from '../assets/me.jpg';

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <img src={myPhoto} alt="Natalia" className={styles.profileImage} />
        <div className={styles.textBox}>
          <h2>Hello, I'm Natalia 👋</h2>
          <p>
            I'm a computer science student who finds peace in the rhythm of waves and the logic of code.
            Just like the ocean, I believe coding has depth, flow, and endless discovery.
          </p>
        </div>
      </div>
    </section>
  );
};

