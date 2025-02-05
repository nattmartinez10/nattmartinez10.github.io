import React from 'react'

import styles from "./Navbar.module"

export const NavBar = () => {
  return (
  <nav className={styles.navbar}>
    <a href="/">Portofolio</a>
    <div>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="experience">Experience</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
    </div>
  </nav>
  ); 
}
