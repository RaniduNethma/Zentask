import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('currentUser');
    return stored ? json.parse(stored) : null
  });

  useEffect(() => {
    if(currentUser){
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    else{
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  const handleAuthSubmit = data => {
    const user = {
      email: data.email,
      name: data.name || 'User',
      avatar: ''
    }
  }

  return (
    <Routes>
      <Route path='/' element={ }
    </Routes>
  )
}

export default App