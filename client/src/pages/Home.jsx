import Activity from "../Components/Activity/Activity";
import WellWishers from "../Components/Activity/WellWishers";
import AddButton from "../Components/AddButton";
import Adduser from "../Components/Adduser";
import React, { useState } from "react";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-2">
      <div className="flex flex-col bg-richblue-500  justify-center items-center gap-6 ">
        <div className="text-6xl  font-bold  text-brown-5 mt-7">
          Help is one click away
        </div>
        <p className="py-3 w-2/3 text-2xl  text-pure-greys-5">
          When ever you are struck in some danger your friends are just one
          click away from helping you.
        </p>
      </div>
      <div className="flex flex-wrap justify-center bg-richblue-300 items-center h-auto">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
            <img
              src="../../public/images/02.png"
              alt="Feature 2"
              className="mx-auto mb-4 rounded-3xl"
            ></img>
            <h3 className="text-lg font-semibold mb-2">Fast reaction</h3>
            <p className="text-gray-600">
              It will take even less than a second to send a mail.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mx-16">
          <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
            <img
              src="../../public/images/01.webp"
              alt="Feature 1"
              className="mx-auto mb-4 rounded-3xl"
            ></img>
            <h3 className="text-lg font-semibold mb-2">Easy to use</h3>
            <p className="text-gray-600">
              You just have to enter the mail id of your known one.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
          <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
            <img
              src="../../public/images/04.webp"
              alt="Feature 3"
              className="mx-auto mb-4 rounded-3xl"
            ></img>
            <h3 className="text-lg font-semibold mb-2">Safe and secure</h3>
            <p className="text-gray-600">You and your data is safe with us .</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-7">
          <Activity />
          <WellWishers />
        </div>
        {!isModalOpen && <AddButton onClick={openModal} />}
        <Adduser isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Home;
