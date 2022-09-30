// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import AddContacts from './AddContacts';
import './App.css';
import { ContactList } from './ContactList';
import { Header } from './Header';
// import {BrowserRouter as Router, Switch,Routes , Route} from 'react-router-dom';

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
    console.log(newContact);
    setContact([...contacts,newContact])
    // console.log(contacts);// why length is less here ??? becoz its asynchronous 
  }

  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contact)=>{
      console.log(contact);
      return contact.id!==id;
    })
    setContact(newContactList);
  }
  return (
    <div className='ui container'>
      {/* <Router>
      
      <Routes> */}
        {/* <Route path='/add' element={<AddContacts addContactHandler={addContactHandler}/>}/> */}
        {/* <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/> */}
        <Header/>
        <AddContacts addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      {/* </Routes>
      </Router> */}
      
    </div>
  );
}

export default App;
