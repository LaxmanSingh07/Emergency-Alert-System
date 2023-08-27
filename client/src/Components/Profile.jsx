import React, { useState } from "react";

const UserProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <img
        src="profile-picture.jpg"
        alt="User Profile"
        onClick={toggleDropdown}
        className="cursor-pointer"
      />
      <div
        className={`absolute right-0 mt-2 py-2 bg-white border border-gray-300 shadow-lg rounded  bg-richblue-500 text-brown-5 ${
          isDropdownOpen ? "block" : "hidden"
        } transform transition-transform duration-300`}
      >
        <p className="px-4 py-2 text-gray-800">John Doe</p>
        <p className="px-4 py-2 text-gray-600">johndoe@example.com</p>
        <p className="px-4 py-2 text-gray-600">123-456-7890</p>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
