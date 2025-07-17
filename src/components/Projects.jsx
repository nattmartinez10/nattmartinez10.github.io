import React from "react";
import styles from "../styles/Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Receipt OCR App",
    image: "https://via.placeholder.com/400x250?text=Receipt+OCR",
    description: "Extracts structured data from receipt images using Python, React, and ML.",
    github: "https://github.com/nattmartinez10/receipt-ocr"
  },
  {
    title: "CRUD Docker App",
    image: "https://via.placeholder.com/400x250?text=CRUD+Docker",
    description: "A containerized CRUD app using Node.js and MongoDB.",
    github: "https://github.com/nattmartinez10/CRUD-docker"
  },
  {
    title: "Personal Dashboard",
    image: "https://via.placeholder.com/400x250?text=Dashboard",
    description: "A dashboard for personal productivity using React and Firebase.",
    github: "https://github.com/nattmartinez10/personal-dashboard"
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x250?text=Portfolio",
    description: "My responsive portfolio built with React.",
    github: "https://github.com/nattmartinez10/nattmartinez10.github.io"
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
