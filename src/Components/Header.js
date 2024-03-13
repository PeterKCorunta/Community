import React from 'react'
import { useState, useEffect } from 'react'

// MY COMMUNITY HEADER COMPONENTS IN REACT

function Header() {
  const [toggle, setIsToggle] = useState(false)
  const handletoggle = () =>{
    setIsToggle(!toggle)
  }
  const [containerHeight, setContainerHeight] = useState(0)
  


  useEffect(()=>{
    const nav_length = document.querySelector('.nav_header').children.length
    var newheight = document.querySelector('.nav_header').clientHeight + (40 * nav_length) 
    setContainerHeight(newheight) 
  }, [containerHeight])

  return (
    <header className='community_header'>
        <h1 className='community_title'>My Community</h1>
        <ul className='nav_header' style={toggle? {height: `${containerHeight}px`, transition: 'height 1s ease'}:{height:'0%', transition: 'height 1s ease'}}>
            <li><a href='#'>Home</a></li>
            <li><a href='#history'>History</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#'>About Us</a></li>
        </ul>
        <h2 className="logo-icon" onClick={handletoggle}>🛒</h2>
    </header>
  )
}

export default Header