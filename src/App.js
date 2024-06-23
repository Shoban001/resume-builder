import React from 'react';
import Home from './components/HomePage/home';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes,} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from './components/Header/Header';
import  Body from './components/Body/Body';
import Page from './components/Page/page';
import About from './components/AboutPage/About';
import Sample from './components/Sample/Sample';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Page/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sample' element={<Sample/>}/>
      </Routes>
    </div>
  );
}

export default App;
