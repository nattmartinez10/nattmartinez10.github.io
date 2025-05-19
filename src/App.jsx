import styles from './App.module.css';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className={styles.App}>
      <ParticleBackground />
      <NavBar />
      <About />
    </div>
  );
}

export default App;

