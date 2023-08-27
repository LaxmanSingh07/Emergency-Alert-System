import React, { useState } from "react";

const WellWishers = () => {
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
    <div className="container mx-auto py-6 ">
      <table className="table-auto w-full flex flex-col justify-center items-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Sent Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className={`transition ${
                contact.received ? "bg-green-100" : "bg-white"
              } hover:bg-blue-100`}
            >
              <td className="border px-3 py-2">{contact.name}</td>
              <td className="border px-3 py-2">{contact.email}</td>
              <td className="border px-3 py-2">{contact.sentDate}</td>
              <td className="border px-3 py-2">
                {contact.received ? (
                  <span className="text-green-600">Received</span>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={() => markReceived(contact.id)}
                  >
                    Mark Received
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WellWishers;
