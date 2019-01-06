import React, { Component } from 'react'

class ConnectStravaButton extends Component {
  handleClick() {
    this.props.clickHandler()
  }
  render() {
    return (
      <li><button onClick={this.handleClick.bind(this)}>Connect to Strava</button></li>
    )
  }
}

export default ConnectStravaButton
