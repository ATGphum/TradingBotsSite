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
        <BacktestBox/>
      </div>
    )
  }

  function BacktestBox() {
    return (
      <div className="BacktestBox">
        <BacktestForm/>
        <BacktestConfirm/>
      </div>
    )
  }

  function BacktestForm() {
    return (
      <div className="BacktestForm">
        
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
      <div className="TradingBoxBox">

      </div>
    )
  }