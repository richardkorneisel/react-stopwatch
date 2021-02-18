import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  
  constructor(){
    super()
    this.state = {
      counterOn: false,
      counterStart: 0,
      counterTime: 0
    }
  }
  handleStart = (event)=> {
    this.setState({
      counterOn: true,
      counterTime: this.state.counterTime,
      counterStart: Date.now() - this.state.counterTime
    })
    this.timer = setInterval(()=>{
      this.setState({
        counterTime: Date.now() - this.state.counterStart
      })
    },1000)
  }
  // handleStart = (event) => {
  //     setInterval(() => {
  //       this.timer = this.setState = ({
  //         counter: this.state.counter +1
  //       })
  //       console.log (this.state.counter);
  //     }, 1000);
  //   };

  // My first attempt, works not format we used in class
  // handleStart = () => {
  //   setInterval(() => {
  //     setSeconds(seconds => seconds + 1);
  //     console.log (seconds)
  //   }, 1000);
  // };
  handlePause = (event) => {
    this.setState({
    timerOn: false});
    clearInterval(this.counter)
  }

  // handleResume = () => {
  //   setisPaused(true)
  //   this.setState = setInterval(() => {
  //     setTimer((timer) => timer +1)
  //   },1000)
  // }

  handleReset = (event) => {
    this.setState({
    counterStart: 0,
    counterTime: 0
  })
}

  render() {
    return (
      <div className="stopwatch">
        <h1>{Math.floor((this.state.counterTime)/1000)}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
