import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Main portrait={headshot} hero={heroBackground}/>
      <Footer/>
    </div>
  );
}

export default App;
