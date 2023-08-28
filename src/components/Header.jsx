import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <span> | </span>
      <Link to='/login' >Login</Link>
    </div>
  )
}
