import React, { useState } from 'react';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';

const skillsCategories = [
  {
    title: "Platforms & OS",
    color: "#6C5CE7",
    skills: [
      { name: 'Windows', icon: '🪟' },
      { name: 'Linux', icon: '🐧' },
      { name: 'macOS', icon: '🍎' },
      { name: 'Ubuntu (WSL)', icon: '🧱' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📚' }
    ]
  },
  {
    title: "Technologies",
    color: "#00B894",
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Express.js', icon: '🚀' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Tesseract', icon: '🔍' },
      { name: 'YOLOv8', icon: '🧠' }
    ]
  },
  {
    title: "Languages",
    color: "#FF6B6B",
    skills: [
      { name: 'JavaScript', icon: '💛' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'C++', icon: '⚡' },
      { name: 'C#', icon: '📦' },
      { name: 'SQL', icon: '📊' },
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'Bash', icon: '💻' }
    ]
  }
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
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
        <h2 className={styles.title}>Technical Skills</h2>
        <motion.div
          className={styles.line}
          initial={{ width: '160px' }}
          whileInView={{ width: '240px' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <div className={styles.twoColumn}>
          {skillsCategories.slice(0, 2).map((category, i) => (
            <div key={i} className={styles.categoryBlock}>
              <h3 className={styles.categoryTitle} style={{ color: category.color }}>
                {category.title}
              </h3>
              <motion.div
                className={styles.skillsSlide}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {category.skills.map((skill, j) => (
                  <SkillBubble
                    key={`${i}-${j}`}
                    skill={skill}
                    categoryColor={category.color}
                  />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className={styles.categoryBlock}>
          <h3 className={styles.categoryTitle} style={{ color: skillsCategories[2].color }}>
            {skillsCategories[2].title}
          </h3>
          <motion.div
            className={styles.skillsSlide}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {skillsCategories[2].skills.map((skill, j) => (
              <SkillBubble
                key={`2-${j}`}
                skill={skill}
                categoryColor={skillsCategories[2].color}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const SkillBubble = ({ skill, categoryColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${styles.skillBubble} ${isHovered ? styles.skillBubbleHover : ''}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: `${categoryColor}30`,
        ...(isHovered && {
          backgroundColor: categoryColor,
          borderColor: categoryColor,
          boxShadow: `0 8px 25px ${categoryColor}40`
        })
      }}
    >
      <div className={styles.skillIcon}>{skill.icon}</div>
      <span
        className={styles.skillName}
        style={{ color: isHovered ? '#fff' : '#342E37' }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

export { Skills };
