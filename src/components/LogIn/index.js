import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router'
import firebase from './../../firebase'
import SignUp from './SignUp'
import router, { hashHistory } from 'react-router'

class LogIn extends Component {

  state = {
    signingUp: false,
    errorMessage: ''
  }

  componentDidMount () {

  }

  logIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).then(function(response){
      hashHistory.push('/home')
    }).catch((error) => {
      this.setState({ errorMessage: error.message })
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
        {this.displayErrorMessage()}
        <div className='buttons-container'>
          <button className='btn btn-primary' onClick={this.logIn}>Log In</button>
          <button className='btn btn-default' onClick={() => {this.setState({ signingUp: true })}}>Create An Account</button>
        </div>
        {this.state.signingUp && <SignUp />}
      </div>
    )
  }

  displayErrorMessage() {
    return this.state.errorMessage.length > 0 && <div className='error-div'><h5>{this.state.errorMessage}</h5></div>
  }
}

export default LogIn
