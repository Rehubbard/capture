import React, { Component } from 'react'
import './styles.css'
import firebase from '../../firebase'

class Home extends Component {

  componentDidMount () {
    const user = firebase.auth().currentUser
    console.log(user)
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
        <h1>Welcome to Capture!</h1>
        <button className='btn btn-default' onClick={() => this.logout()}>Log Out</button>
      </div>
    )
  }
}

export default Home
