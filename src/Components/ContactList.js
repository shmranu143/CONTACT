import React from 'react'
import { ContactCard } from './ContactCard';
import './ContactList.css'


export const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact,index)=>{
        console.log(contact);
        return(
            <ContactCard key={index} contact={contact} clickHandler={deleteContactHandler}/>
        );
    });
  return (
    <div className='ui-list'>
        <h2 className='list-heading'>Contact List</h2>
        {renderContactList}
        </div> )
}
