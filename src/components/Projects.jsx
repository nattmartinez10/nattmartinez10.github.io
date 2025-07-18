import React from "react";
import styles from "../styles/Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import portfolioImage from '../assets/portafoliowebsite.png';
import sequenceImage from '../assets/SequenceGame.png';
import crudImage from '../assets/cruddocker.webp';
import geminiImage from '../assets/gemini.png';



const projects = [
  {
    title: "Receipt OCR App",
    image: geminiImage,
    description: "Extracts structured data from receipt images using Python, React, and MA full-stack expense reporting platform built with React.js, Node.js, MongoDB, and Python. Employees upload receipts for automatic data extraction using the Google Gemini API, and managers can review, approve, or deny expenses through an intuitive dashboard.",
    github: "https://github.com/nattmartinez10/EERIS-8"
  },
  {
    title: "Sequence Javascript Game",
    image: sequenceImage,
    description: "A browser-based implementation of the Sequence board game using JavaScript, featuring interactive gameplay, card logic, and token placement. Built from scratch to replicate real game rules, including wild cards, removals, and turn-based play.",
    github: "https://github.com/nattmartinez10/sequence_javascript_game"
  },

  {
    title: "Portfolio Website",
    image: portfolioImage,
    description: "A personal portfolio website built with HTML, CSS, and JavaScript to showcase my projects, skills, and experience. Designed for clean navigation and responsiveness to highlight my work and background as a software developer.",
    github: "https://github.com/nattmartinez10/nattmartinez10.github.io"
  },
  {
    title: "CRUD Docker Application",
    image: crudImage,
    description: "A Dockerized desktop application for managing personal records with full CRUD functionality. Includes field validation (e.g., name length, numeric and email format checks), dropdowns for gender and document type, date pickers, and image size validation. Packaged with Docker for consistent deployment and environment setup.",
    github: "https://github.com/nattmartinez10/CRUD-docker"
  }
];

export const Projects = () => {
  const [current, setCurrent] = React.useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 700,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ],
    beforeChange: (_, next) => setCurrent(next)
  };

  return (
    <section className={styles.projectsSection} id="projects">
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
        <h2 className={styles.title}>Projects</h2>
        <motion.div
          className={styles.line}
          initial={{ width: '160px' }}
          whileInView={{ width: '240px' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <Slider {...settings} className={styles.slider}>
          {projects.map((project, i) => (
            <div key={i} className={`${styles.card} ${i === current ? styles.active : ""}`}>
              <a href={project.github} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title} className={styles.image} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};
