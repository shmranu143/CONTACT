import React from 'react'
import avatar from '../Images/avatar.png'
import './ContactCard.css';

export const ContactCard = (props) => {
    const {id ,name , email }= props.contact;
    // const id  = props.id;
    
  return (
    <div className='contact-outer'>
        <div className='contact'>
          <div>
            <img className='ui avatar image' src={avatar} alt='user'></img>
          </div>
            <div className='header'>{id} : {name}</div>
            <div>{email}</div>
            <div><i 
            className='trash alternate outline icon'
            style={{color:"red"}}
            onClick={()=> props.clickHandler(id)}></i></div>
        </div>
    </div>
  )
}
