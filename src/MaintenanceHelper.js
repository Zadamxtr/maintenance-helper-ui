import React, { Component } from 'react'
import { Redirect, Router, withRouter } from 'react-router-dom'
import ConnectStravaButton from './ConnectStravaButton.js'

//let quizData = require('./quiz_data.json')
// TODO: Strava URL, client ID, etc from properties
const stravaAuthorizeUrl = 'https://www.strava.com/oauth/authorize'
const clientId = '31154'
const redirectUrl = 'http://localhost:3000/authorized'

class MaintenanceHelper extends Component {
  constructor(props) {
    super(props)
    this.state = { user_id: 0,
                   code: props.code,
                   redirect: false}
  }

  constructStravaAuthorizeUrl() {
    return stravaAuthorizeUrl + '?' +
      'client_id=' + clientId + '&' +
      'redirect_uri=' + redirectUrl + '&' +
      'response_type=code&' +
      'scope=profile:read_all';
  }

  clickHandler() {
    this.setState({ user_id: 0,
                    code: 0,
                    redirect: true});

    window.location = this.constructStravaAuthorizeUrl();
  }

  render() {
    const connectedToStrava = (this.state.code !== 0 && !!this.state.code);
    if(this.state.redirect) {
      return (
        <div>
          <p>Redirecting...</p>
        </div> );
    }
    return (
      <div>
        <p>not redirecting</p>
        {
          !connectedToStrava ?
            <ConnectStravaButton clickHandler={this.clickHandler.bind(this)}/>
          :
            <div>
              <p>user_id: {this.state.user_id}</p>
              <p>code: {this.state.code}</p>
            </div>
        }
      </div>
    )
  }
}

export default MaintenanceHelper
