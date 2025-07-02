import React from 'react';
import styles from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

