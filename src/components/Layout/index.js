import React from 'react'
import './styles.css'

const Layout = ({ children }) =>
  <div className='main'>
    <div className='content'>
      {children}
    </div>
  </div>

export default Layout
