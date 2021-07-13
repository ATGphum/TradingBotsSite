import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'

function Background() {

  return (
    <div className="Background">
    </div>  
  )
}

function Title() {

  return (
    <div className="Title">
      <div className="InitialTitle">DEAR</div> 
      <Logo/>
    </div>
  )
}

function Logo() {
  return (
    <div className="Logo">
    </div>
  )
}

export {
  Background, 
  Title, 
}