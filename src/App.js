import React from 'react';

// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';

import './style/App.css';
import yellow from "./images/blob 5.png"
import violet from "./images/blobs.png"

const App = () => (
  <div className="App">
    <img className="back--yellow" src={yellow} alt="back blob y"/>
    <img className="back--violet" src={violet} alt="back blob" v/>
    App
    {/* <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
);

export default App;
