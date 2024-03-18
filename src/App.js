
import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import uuid4 from "uuid4";

function App() {
  
  const [contact, setContact] = useState([]);
  const addContact = (data)=>{
    setContact([...contact,{id:uuid4(),data}])
  }
  const removeList = (id)=>{
     const updatedList = contact.filter((val)=>{
       return val.id !== id
     })
     setContact(updatedList)
  }
  return (
    <div >
      <Header />
      <AddContact contactAdd ={addContact}/>
      <ContactList contact={contact} removeContact={removeList}/>
    </div>
  );
}

export default App;
