import React from "react";

export default function AddContact() {
  return (
    <div className="formHeader">
      <div className="add-contact">Add Contacts</div>
      <form>
        <label>Name</label>
        <br />
        <input type="text" placeholder="Enter Name" name="name" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter Email" name="Email" />
        <br />
        <label>Contact Number</label>
        <br />
        <input type="text" placeholder="" name="Number" />
        <br />
      </form>
      <button className="btn">Add Contact</button>
    </div>
  );
}
