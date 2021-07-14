import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'

export default function SkillBoxes(props) {
    //var dragula = require('react-dragula');
    const boxRef = useRef(null);;
    useEffect(() => {
      if(boxRef.current){
        var container = boxRef.current;
      }
      //dragula([container]);
    });

    let setPair = props.setPair

    return (
      <div input ref={boxRef} className="SkillBoxes">
        <SkillBox backgroundColor="#e4588e" name="Bitcoin" tradingPair="BTCUSDT" updatePair={setPair}/>
        <SkillBox backgroundColor="#ef9e44" name="Ethereum" tradingPair="ETHUSDT" updatePair={setPair}/>
        <SkillBox backgroundColor="#b4cc32" name="Nano" tradingPair="NANOUSDT" updatePair={setPair}/>
        <SkillBox backgroundColor="#67cce4" name="Polkadot" tradingPair="DOTUSDT" updatePair={setPair}/>
      </div>
    )
  }

function SkillBox(props){

  function updatePair(){
    props.updatePair(props.tradingPair)
  }

  return (
    <div style={{backgroundColor: props.backgroundColor}}className="SkillBox" onClick={updatePair}>
      {props.name}
    </div>
  )
}