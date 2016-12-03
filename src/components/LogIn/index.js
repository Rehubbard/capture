import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router'
import firebase from './../../firebase'
import SignUp from './SignUp'
import { hashHistory } from 'react-router'

class LogIn extends Component {

  componentDidMount () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        hashHistory.replace(user.uid)
      } else {
        console.log('no user signed in')
      }
    })
  }

  state = {
    signingUp: false
  }

  logIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).catch((error) => {
      console.log(error)
    })
  }

  signUp (email, password, name) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='login-form-container'>
        {this.signingUp ? <h1>SIGN UP</h1> : <h1>LOG IN</h1>}
        <div className='form-group'>
          <label>Username/Email</label>
          <input type='text' placeholder='Email' ref='email' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='text' placeholder='password' ref='password' />
        </div>
        <div className='buttons-container'>
          <button className='btn btn-primary' onClick={this.logIn}>Log In</button>
          <button className='btn btn-default' onClick={() => {this.setState({ signingUp: true })}}>Create An Account</button>
        </div>
        {this.state.signingUp && <SignUp signUp={this.signUp} />}
      </div>

    )
  }
}

export default LogIn
