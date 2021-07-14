import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'

export default function CoverPage(props) {
    return (
      <div className="CoverPage">
        <DescriptionHeader/>
        <Description/>
        <TradingBox currentPair={props.currentPair}/>
      </div>
    )
  }
  
  function DescriptionHeader() {
    return (
      <div className="DescriptionHeader">
        Cryptocurrency Trading Bot
      </div>
    )
  }
  
  function Description() {
    return (
      <div className="DescriptionBody">
        <p>
          A trading bot that allows you to use multiple indicators to backtest your strategy to check for effectiveness and also allows for real time trading via a simple UI
        </p>
      </div>
    )
  }

  function TradingBox(props) {
    return (
      <div className="TradingBox">
        <TradingForm currentPair={props.currentPair}/>
        <BacktestConfirm/>
      </div>
    )
  }

  function TradingForm(props) {
    return (
      <div className="BacktestForm">
        <div>Current trading pair: {props.currentPair}</div>
      </div>
    )
  }

  function BacktestConfirm() {
    return (
      <div className="BacktestConfirm">
        run backtest 
      </div>
    )
  }

  function TradingBotBox() {
    return (
      <div className="TradingBotBox">
      </div>
    )
  }