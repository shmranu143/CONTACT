import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div className='ui fixed menu'>
        <div className='navbar'>
            <h2 style={{text_align:"center"}}>Contact Manager</h2>
            <div className='navlinks'>
            <Link className='navmenu' to='/'>Add-contact</Link>
            <Link className='navmenu' to='/list'> contact-list</Link>
            </div>
        </div>
    </div>
  )
}
