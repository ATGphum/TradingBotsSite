import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'

export default function CoverPage() {
    return (
      <div className="CoverPage">
        <DescriptionHeader/>
        <Description/>
      </div>
    )
  }
  
  function DescriptionHeader() {
    return (
      <div className="DescriptionHeader">
        Cover Letter
      </div>
    )
  }
  
  function Description() {
    return (
      <div className="DescriptionBody">
        <p>
          Hi! I'm Jeremy, a 21 year old student at UWA who is soon to finish his degree in computer science
          and Data science. Throughout my 3 years at this uni, I've learnt and dabbled in various
          programming languages and software, writing things from iphone apps to cryptocurrency trading bots.
        </p>
        <p>
          Upon recently picking up web development, I can confidently say that I would love to pursue a further career in web development with Spacecubed. Although I definitely would not
          say that I am yet an expert when it comes to this field, I am extremely motivated and am a quick learner, and believe that given the chance,
          I would become a great asset to your team. To show my eagerness, I have quickly coded this site in react for my cover letter and to get in a little practice (with draggable boxes!).
          I have experience working in an agile environment at my previous internship at Spenda, in which I in fact developed a bot to automate and handle various agile and sprint items such as pbis, bugs and tasks.
        </p> 
        <p>
          I believe that I am a great cultural fit, because I love working with and developing connections with 
          a close-knit community. I lam definitely a team player, and ever since I watched a netflix show called "Startup", I have developed a strong interest in startup culture, and would love to see startups up close in a real co-working environment.
          The prospect of being able to both experience this and work to directly improve the startup culture across Perth greatly excites me.
        </p>
        <p>
          Thank you, Jeremy Vuong
        </p>
      </div>
    )
  }