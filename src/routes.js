import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import LogIn from './components/LogIn'
import Home from './components/Home'

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={LogIn} />
    <Route path='/home' component={Home} />
  </Route>
)
