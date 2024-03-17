import React from "react";
import { useState } from "react";

export default function AddContact({ contactAdd }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    Number: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("please Enter the Details");
      return;
    } else {
      contactAdd(contactData);
      setContactData({name:"",email:""})
    }
  };

  return (
    <>
      <div className="formHeader">
        <div className="add-contact">Add Contacts</div>
        <form>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            name="Email"
            value={contactData.email}
            onChange={handleChange}
          />
          <br />
        </form>
        <button className="btn" onClick={handleAdd}>
          Add Contact
        </button>
      </div>
    </>
  );
}
