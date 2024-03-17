import React from "react";

export default function ContactList({ contact }) {
  const contactList = contact.map((val) => {
    return (
      <>
        <div className="contacts">
          <div>{val.name}</div>
          <div>{val.email}</div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="contactHeader">ContactList</div>
      <div>{contactList}</div>
    </>
  );
}
