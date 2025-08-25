import React from 'react'
import NavBar from './NavBar'

const Layout = ({ onLogout, user }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <NavBar user={user} onLogout={onLogout} />
    </div>
  );
}

export default Layout
