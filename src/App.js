import React, { Component } from 'react'
import "./App.css"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date() };

  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date() });

  }

  render() {
    const hoursDegrees = this.state.date.getHours() * 30 + this.state.date.getMinutes() / 2;
    const minutesDegrees = this.state.date.getMinutes() * 6 + this.state.date.getSeconds() / 10;
    const secondsDegrees = this.state.date.getSeconds() * 6;

    const month = this.state.date.getMonth();
    const date = this.state.date.getDate();
    const day = this.state.date.getDay();
    const min = this.state.date.getMinutes();
    var hour = this.state.date.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;

    const divStyleHours = {
      transform: "rotateZ(" + hoursDegrees + "deg)" };

    const divStyleMinutes = {
      transform: "rotateZ(" + minutesDegrees + "deg)" };

    const divStyleSeconds = {
      transform: "rotateZ(" + secondsDegrees + "deg)" };

    return (
      <div>
        <div className="clock-container" >
          <div className="clock-content">
            <div style={divStyleHours} className= "indicator hours-indicator {this.state.date.getHours() === 0 ? '' : transition-effect}" />
            <div style={divStyleMinutes} className= "indicator minutes-indicator {this.state.date.getMinutes() === 0 ? '' : transition-effect}" />
            <div style={divStyleSeconds} className= "indicator seconds-indicator {this.state.date.getSeconds() === 0 ? '' : transition-effect }" />
            <div className= "indicator-cover" ></div>
          </div>
         </div>
         <div className="digital">
            <div className="time">{hour<10 ? `0`+hour : hour }:{min<10 ? `0`+min : min} <span className="ampm">{ampm}</span> </div>
              <div className="date">{days[day]},{months[month]}
                <span className="circle">{date}</span>
              </div>
              <div className="footer"> 
                <br></br>
            Made with <span style={{color: "#e74c3c"}}>&#9829;</span> in India <br></br>
            <span>Inspired by <a href="https://dribbble.com/shots/5958443-Alarm-clock" target="_blank">Renat Muratshin</a></span>
            </div>
          </div>
          
          
      </div>
      );
    }
}

export default App;