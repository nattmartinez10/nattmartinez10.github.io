import styles from './App.module.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
      <div className="section-divider"></div>
      <About />
      <Skills />
      <Projects />

      <button
        onClick={() =>
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        }
        className={`${styles.scrollTopButton} ${
          showScrollTop ? styles.scrollTopButtonVisible : ''
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;


