import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-6 flex justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">About Dotdevs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="max-w-lg">
          <img
            src="../../public/images/03.png"
            alt="Dotdevs Team"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Welcome to Dotdevs! We are a passionate team of developers and
            designers who love creating innovative solutions and pushing the
            boundaries of technology.
          </p>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to build high-quality software products that solve
            real-world problems. We strive to make a positive impact on the
            lives of people through our work.
          </p>
          <h2 className="text-xl font-semibold mb-2">Meet the Team</h2>
          <p className="text-gray-600">
            We are a diverse team with expertise in various fields. Our members
            are dedicated, creative, and always eager to take on new challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
