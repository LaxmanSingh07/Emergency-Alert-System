import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-6 mb-6">
      <button
        onClick={onClick}
        className="text-white px-6 py-3 rounded-md shadow-md bg-richblack-800 text-brown-5 hover:text-richblack-800 hover:bg-brown-5"
      >
        Add Emergency Contact
      </button>
    </div>
  );
};

export default AddButton;
