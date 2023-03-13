import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import ImageCarousel from './components/ImageCarousel.js'
import FAQs  from './components/FAQs.js';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <ImageCarousel />
      <Routes>
        <Route path="/" element={<Navbar menu1='Home' menu2='About' menu3='FAQs'/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="faqs" element={<FAQs />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
