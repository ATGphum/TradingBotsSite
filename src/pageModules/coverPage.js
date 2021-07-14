import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'
import DatePicker from 'react-date-picker'
import { Slider } from '@material-ui/core';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function CoverPage(props) {

    const [fiatWorth, fiatWorthChange] = useState(0)
    //const [cryptoBalanceWorth, cryptoBalanceWorthChange] = useState(0)
    const [winRate, winRateChange] = useState(0)
    const [message, messageChange] = useState("")

    function loadResults(newFiat, newCrypto, winningRate){
      let total = newFiat + newCrypto

      fiatWorthChange(total)
      winRateChange(winningRate)
      messageChange("Your initial investment would now be worth $" + total.toFixed(2) + ", with a win rate of " + winningRate + "%")
    }

    return (
      <div className="CoverPage">
        <DescriptionHeader/>
        <Description/>
        <TradingBox currentPair={props.currentPair} loadResults={loadResults}/>
        <BacktestMessage message={message}/>
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

  function BacktestMessage(props) {
    return (
      <div className="BacktestMessage">
        {props.message}
      </div>
    )
  }

  function TradingBox(props) {
  
    return (
      <div className="TradingBox">
        <TradingForm currentPair={props.currentPair} resultLoader={props.loadResults}/>
      </div>
    )
  }

  function TradingForm(props) {

    const [fromDate, fromDateChange] = useState(new Date())
    const [toDate, toDateChange] = useState(new Date())
    const [startingFiat, startingFiatChange] = useState(1000)
    const [startingCrypto, startingCryptoChange] = useState(0)
    const [tradingFee, tradingFeeChange] = React.useState(1);
    const [algoOption, algoOptionChange] = React.useState("rsi_algo");
    const [candleOption, candleOptionChange] = React.useState("1h");

    let fromDateUnix;
    let toDateUnix;
    (fromDate != null) ? fromDateUnix = fromDate.getTime() : fromDateUnix = null;
    (toDate != null) ? toDateUnix = toDate.getTime() : toDateUnix = null;

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
    function handleAlgoChange(e){
      algoOptionChange(e.value)
    }
    function handleCandleChange(e){
      candleOptionChange(e.value)
    }
    async function fetchBacktest(){
      const json = {
        ticker: props.currentPair,
        starting_fiat_balance: parseInt(startingFiat),
        starting_coin_balance: parseInt(startingCrypto),
        trading_fee: tradingFee/100,
        algolist: [algoOption],
        algoargs: [algo_dict[algoOption]],
        klineinterval: candleOption,
        fiat_percent: 1,
        coin_percent: 1,
        starting_date: fromDateUnix,
        ending_date: toDateUnix,
        df_search_size: 30
      }
      let resp = await getResponse(json)
      props.resultLoader(resp["fiat_balance"], resp["coin_worth"], resp["win_rate"])
    }

    return (
      <div className="BacktestForm">
        <div>Current trading pair:</div>
        <div className="TradingPair">{props.currentPair}</div>
        <div className="DateBox">
          <div>
            <div>simulate from:&nbsp;</div>
            <DatePicker
            onChange={fromDateChange}
            value={fromDate}
            required={true}
            maxDate={toDate}
          />
        </div>
        <div>
            <div>simulate to:&nbsp;</div>
            <DatePicker
              onChange={toDateChange}
              value={toDate}
              required={true}
              maxDate={new Date()}
              minDate={fromDate}
            />
          </div>
        </div>
        <div>Starting fiat balance</div>
        <label><input className="FiatInput" type="text" value={startingFiat} onChange={handleFiatChange} /></label>
        <div className="FeeBox">
        <div>Trading fee %</div>
        <Slider className="FeeSlider" value={tradingFee} defaultValue={0.1} onChange={handleFeeChange} valueLabelDisplay="on" min={0} max={0.2} step={0.01}/>
        </div>
        <div>Technical Indicator</div>
        <Dropdown options={algo_options} onChange={handleAlgoChange} value={algoOption} placeholder="Select an option"/>
        <div>Timeframe</div>
        <Dropdown options={candle_options} onChange={handleCandleChange} value={candleOption} placeholder="Select an option"/>
        <div className="ConfirmBox">
          <div className="BotConfirm" onClick={fetchBacktest}>run backtest</div>
          <div className="BotConfirm">run live bot</div>
        </div>
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

  const algo_options = [
    "rsi_algo",
    "sma_algo",
    "ema_algo", 
  ]

  const algo_dict = {
    "sma_algo": [14, 30],
    "ema_algo": [14, 30],
    "rsi_algo": [14, 30],
  }

  const candle_options = [
    '1m',
    '3m',
    '5m',
    '15m',
    '30m',
    '1h',
    '2h',
    '4h',
    '6h',
    '8h',
    '12h',
    '1d',
    '3d',
    '1w',
    '1m'
  ]

async function getResponse(json) {
  // request options
  const options = {
    method: 'POST',
    body: JSON.stringify(json),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // send post request
  let res = await fetch('http://127.0.0.1:8000/BacktestResults/', options)
  res = await res.json()
  return res 
}