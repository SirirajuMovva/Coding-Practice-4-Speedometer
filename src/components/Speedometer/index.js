import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickapplybrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickaccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-frist-contane">
        <div className="contaner">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="dercepattion">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-con">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onClickaccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-brake-button"
              onClick={this.onClickapplybrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
