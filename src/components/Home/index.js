import React, { Component } from 'react'
import './styles.css'
import firebase from '../../firebase'

import Header from './Header/index.js'

class Home extends Component {

  state = {
    user: null
  }

  componentWillMount () {
    this.setState({ user: firebase.auth().currentUser})
  }

  logout () {
    firebase.auth().signOut().then(() => {
      this.props.history.replace('/')
    }, (error) => {
      console.error('Sign Out Error', error)
    })
  }

  render () {
    return (
      <div>
        <Header user={this.state.user} />
        <button className='btn btn-default' onClick={() => this.logout()}>Log Out</button>
      </div>
    )
  }
}

export default Home
