import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/2-Hero/Hero';
import Header from './components/1-Header/Header';
import Main from './components/3-Main/Main';
import Footer from './components/5-Footer/Footer';
import Contact from './components/4-Contact/Contact';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import BuilderPage from './builder-page';

function App() {
  return (
    <Router>
      <div id='up' className='container'>
        <Analytics />
        <SpeedInsights />
        <Header />
        <Routes>
          <Route path="/builder-demo" element={<BuilderPage />} />
          <Route path="/" element={
            <>
              <Hero />
              <div className='divider' />
              <Main />
              <div className='divider' />
              <Contact />
              <div className='divider' />
              <Footer />
            </>
          } />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <a href='#up'>
          <button className='scroll2top icon-arrow-right'></button>
        </a>
      </div>
    </Router>
  );
}

export default App;
