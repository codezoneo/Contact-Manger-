
import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const addContact = (data)=>{
    setContact([...contact,data])
  }

  const [contact,setContact] = useState([])
  return (
    <div >
      <Header />
      <AddContact contactAdd ={addContact}/>
      <ContactList contact={contact}/>
    </div>
  );
}

export default App;
