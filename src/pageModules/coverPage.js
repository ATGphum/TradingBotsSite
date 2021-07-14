import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'
import DatePicker from 'react-date-picker'
import { Slider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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
    const [startingFiat, startingFiatChange] = useState(0)
    const [startingCrypto, startingCryptoChange] = useState(0)
    const [tradingFee, tradingFeeChange] = React.useState(1);
    const [coinPercent, coinPercentChange] = React.useState(1);
    const [cryptoPercent, cryptoPercentChange] = React.useState(1);

    let fromDateUnix;
    let toDateUnix;
    (fromDate != null) ? fromDateUnix = fromDate.getTime() : fromDateUnix = "";
    (toDate != null) ? toDateUnix = toDate.getTime() : toDateUnix = "";

    function handleFiatChange(e){
      const re = /^[0-9\b]+$/;

      // if value is not blank, then test the regex
  
      if (e.target.value === '' || re.test(e.target.value)){
        startingFiatChange(e.target.value);
      }
    }
    function handleCryptoChange(e){
      const re = /^[0-9\b]+$/;

      // if value is not blank, then test the regex
  
      if (e.target.value === '' || re.test(e.target.value)){
        startingCryptoChange(e.target.value);
      }
    }
    function handleFeeChange(e, newValue){
      tradingFeeChange(newValue)
    }
    function handleCoinPercChange(e, newValue){
      coinPercentChange(newValue)
    }
    function handleCryptoPercChange(e, newValue){
      cryptoPercentChange(newValue)
    }

    return (
      <div className="BacktestForm">
        <div>Current trading pair: {props.currentPair}</div>
        <div>Date to simulate from:&nbsp;
          <DatePicker
            onChange={fromDateChange}
            value={fromDate}
            required={true}
            maxDate={toDate}
          />
        </div>
        <div>Date to simulate to:&nbsp; 
          <DatePicker
            onChange={toDateChange}
            value={toDate}
            required={true}
            maxDate={new Date()}
            minDate={fromDate}
          />
        </div>
        <div>Starting fiat balance</div>
        <label>$<input type="text" value={startingFiat} onChange={handleFiatChange} /></label>
        <div>Starting crypto balance</div>
        <label>$<input type="text" value={startingCrypto} onChange={handleCryptoChange} /></label>
        <div>Trading fee %</div>
        <Slider value={tradingFee} onChange={handleFeeChange} valueLabelDisplay="on" min={0} max={2} step={0.01}/>
        <div>Coin %</div>
        <Slider value={coinPercent} onChange={handleCoinPercChange} valueLabelDisplay="on" min={0} max={1} step={0.01}/>
        <div>Crypto %</div>
        <Slider value={cryptoPercent} onChange={handleCryptoPercChange} valueLabelDisplay="on" min={0} max={1} step={0.01}/>
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

