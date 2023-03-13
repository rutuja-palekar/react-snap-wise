import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import ImageCarousel from './components/ImageCarousel.js'
// import FAQs from './components/FAQs.js';

function App() {

  return (
    <div>
      <Navbar title="SnapSwipe" menu1="Home" menu2="About" menu3="Contact" menu4="FAQ" />
      <ImageCarousel />
    </div>
  );
}

export default App;
