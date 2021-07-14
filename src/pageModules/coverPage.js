import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'
import DatePicker from 'react-date-picker'

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

    const [fromDate, fromDateChange] = useState(new Date())
    const [toDate, toDateChange] = useState(new Date())

    let fromDateUnix;
    let toDateUnix;
    (fromDate != null) ? fromDateUnix = fromDate.getTime() : fromDateUnix = "";
    (toDate != null) ? toDateUnix = toDate.getTime() : toDateUnix = "";

    return (
      <div className="BacktestForm">
        <div>Current trading pair: {props.currentPair}</div>
        <div>Date to simulate from:</div>
        <DatePicker
          onChange={fromDateChange}
          value={fromDate}
          required={true}
          maxDate={toDate}
        />
        <div>Date to simulate to:</div>
        <DatePicker
          onChange={toDateChange}
          value={toDate}
          required={true}
          maxDate={new Date()}
          minDate={fromDate}
        />
        {fromDateUnix}
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