// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import AddContacts from './AddContacts';
import './App.css';
import { ContactList } from './ContactList';
import { Header } from './Header';
import {Routes , Route} from 'react-router-dom';

function App() {
  const [uniqId,setUniqId] = useState(0);
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts , setContact]= useState([]);
  useEffect(()=>{
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivedContacts) setContact(retrivedContacts); 
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  const addContactHandler = (contact)=>{
    const newContact = {...contact,id:uniqId+1,"sex":"male"};
    setUniqId(uniqId+1);
    // console.log(newContact);
    setContact([...contacts,newContact])
    // console.log(contacts);// why length is less here ??? becoz its asynchronous 
  }

  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contact)=>{
      console.log(contact);
      return contact.id!=id;
    })
    setContact(newContactList);
  }
  return (
    <div className='ui container'>
      <Header/>
      <Routes>
        <Route path='/' element={<AddContacts addContactHandler={addContactHandler}/>}/>
        <Route path='/list' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
      </Routes>
      {/* <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
     </div>
  );
}

export default App;
