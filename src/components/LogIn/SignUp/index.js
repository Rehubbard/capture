import React, { Component } from 'react'
import '../styles.css'
import firebase from './../../../firebase'

class SignUp extends Component {

  signUp () {
    firebase.auth().createUserWithEmailAndPassword(this.refs.email.value, this.refs.password.value).then((response) => {
      firebase.auth().currentUser.updateProfile({
        displayName: this.refs.displayName.value
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='signup-form-container'>
        <div className='form-group'>
          <label>Email</label>
          <input type='text' placeholder='Email' ref='email' />
        </div>
        <div className='form-group'>
          <label>Username</label>
          <input type='text' placeholder='Username' ref='displayName' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='text' placeholder='password' ref='password' />
        </div>
        <button className='btn btn-primary' onClick={this.signUp.bind(this)}>Create Account</button>
      </div>
    )
  }
}

export default SignUp
