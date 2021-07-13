import React, { Component, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SkillBoxes from "./pageModules/skillBoxes";
import CoverPage from "./pageModules/coverPage";
import { Background, Title } from "./pageModules/accessories.js";

function App() {

  return (
    <div className="App">
      <Page/> 
    </div>
  );
}

function Page() {
  return (
    <div className="Page">
      <Background/>
      <Title/>
      <CoverPage/>
      <SkillBoxes/>
    </div>
  )
}







export default App;
