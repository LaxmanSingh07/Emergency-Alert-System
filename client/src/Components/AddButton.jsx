import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
      >
        Add Emergency Contact
      </button>
    </div>
  );
};

export default AddButton;
