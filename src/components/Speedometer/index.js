import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image-size"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate-button button"
            type="button"
            onClick={this.onAccelerateButton}
          >
            Accelerate
          </button>
          <button
            className="apply-brake-button button"
            type="button"
            onClick={this.onApplyBrakeButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
