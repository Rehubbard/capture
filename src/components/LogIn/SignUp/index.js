import React, { Component } from 'react'
import '../styles.css'

class SignUp extends Component {

  render () {
    return (
      <div className='signup-form-container'>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' placeholder='Name' ref='name' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='text' placeholder='Email' ref='email' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='text' placeholder='password' ref='password' />
        </div>
        <button className='btn btn-primary' onClick={() => this.props.signUp(this.refs.email.value, this.refs.password.value, this.refs.name.value)}>Create Account</button>
      </div>
    )
  }
}

export default SignUp
