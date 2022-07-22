import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBrakes = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h2 className="speed">{`Speed is ${speed}mph`}</h2>
        <p className="para">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-container">
          <button className="btn1" onClick={this.accelerate} type="button">
            Accelerate
          </button>
          <button className="btn2" onClick={this.applyBrakes} type="button">
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
