import styles from './App.module.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';



function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
      <div className="section-divider"></div>
      <About />

    </div>
  );
}

export default App;

