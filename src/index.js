import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import Routes from './routes'
import { hashHistory } from 'react-router'
import './index.css'

ReactDOM.render(
  <Router history={hashHistory} routes={Routes} />,
  document.getElementById('root')
)
