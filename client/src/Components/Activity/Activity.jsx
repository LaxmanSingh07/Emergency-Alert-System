import React, { useState } from "react";
import "./Activity.css"; // Import your CSS file for styling

const Activity = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      sentDate: "2023-08-27",
      received: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      sentDate: "2023-08-27",
      received: false,
    },
    // Add more contacts here
  ]);

  const markReceived = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === contactId ? { ...contact, received: true } : contact
      )
    );
  };

  return (
    <div className="container">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact-card ${contact.received ? "received" : ""}`}
        >
          <div className="contact-info">
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>Sent: {contact.sentDate}</p>
          </div>
          <div className="contact-actions">
            {contact.received ? (
              <span>Received</span>
            ) : (
              <button onClick={() => markReceived(contact.id)}>
                Mark Received
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
