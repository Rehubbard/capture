import React, { Component } from 'react'
import './styles.css'


class Header extends Component {
  render() {
    console.log('Header props: ', this.props)
    return (
      <div>
        {this.display()}
      </div>
    )
  }

  display() {
    return this.props.user === null ? <p>Loading...</p> : <h1>Welcome to Capture, {this.props.user.displayName}!</h1>
  }
}

export default Header
