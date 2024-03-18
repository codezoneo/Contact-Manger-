import { useState, useEffect } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };
  const removeList = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };
  return (
    <div>
      <Header />
      <AddContact contactAdd={addContact} />
      <ContactList contact={contact} removeContact={removeList} />
    </div>
  );
}

export default App;
