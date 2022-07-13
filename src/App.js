import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Roadmap from './components/roadmap/Roadmap'
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import MobileNavbar from './components/navbar/MobileNavbar';
import { useMediaQuery } from 'react-responsive'

function App() {
  const [currentRoute, setCurrentRoute] = useState("<dev>");

  const location = useLocation();

  useEffect(() => {
    if(location.pathname != '/')
    setCurrentRoute(`<${location.pathname.replace("/", "")}>`)
  }, [location])

  const isMobile = useMediaQuery({ maxWidth: 800 })

  return (
    <div className="App">
      {isMobile ? <MobileNavbar/> : <Navbar/>}
      <div className={styles.contentWrapper}>
        <Routes>
          <Route path="/" element={<Roadmap></Roadmap>}></Route>
            <Route path="/dev" element={<Roadmap></Roadmap>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
      <div className={isMobile ? styles.mobileCurrentRoute : styles.currentRoute}>{currentRoute}<div/>
      </div>
    </div>
  );
}

export default App;
