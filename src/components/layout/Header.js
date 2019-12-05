import React from 'react'

function Header() {
  return (
      <header style={headerStyle}>
        <h1> TodoList </h1>
      </header>
  )
}

const headerStyle = {
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
}

export default Header