import './App.css';

import Education from './Components/Education';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skill from './Components/Skill';
import GoToTop from './Components/GoToTop';
import Footer from './Components/Footer';
import ScrollingLine from './Components/ScrollingLine';

function App() {
  return (
   <>
   <GoToTop />
   <ScrollingLine />
   <Navbar />
   <Home />
   <Skill />
   <Projects />
   <Education />
   <Footer />
   
       </>
  );
}

export default App;
