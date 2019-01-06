import React, { Component } from 'react';
import ReactQueryParams from 'react-query-params';
import { Redirect, Router } from 'react-router-dom'
import MaintenanceHelper from './MaintenanceHelper.js'
import './App.css';

class App extends ReactQueryParams {
  render() {
    const code = this.queryParams.code;
    return (
      <MaintenanceHelper code={code}/>
    );
  }
}

export default App;
