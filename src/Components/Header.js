import React from 'react'

// MY COMMUNITY HEADER COMPONENTS IN REACT

function Header() {
  return (
    <header className='community_header'>
        <h1 className='community_title'>My Community</h1>
        <ul className='nav_header'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>History</a></li>
            <li><a href='#'>Projects</a></li>
        </ul>
        <h2 className="logo-icon">🛒</h2>
    </header>
  )
}

export default Header