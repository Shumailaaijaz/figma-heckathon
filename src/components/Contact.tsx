import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

export default function ContactUS() {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)] p-8 pb-3 mb-10">
      {/* Left Side: Heading and Form */}
      <div className="flex flex-col justify-center items-start space-y-6">
        {/* Heading */}
        <h1 className="text-gray-700 font-roboto text-5xl font-bold mb-4">
          Contact Us
        </h1>

        {/* Form */}
        <div className="flex flex-col w-full space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="interestedIn"
            placeholder="Interested In"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Message*"
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none"
          ></textarea>
          <button className="flex items-center justify-center bg-black text-white py-3 px-6 rounded mt-4 hover:bg-gray-800">
            SEND E-MAIL <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/contact.png" 
          alt="Contact Us Image"
          width={500} // adjust the width as needed
          height={500} // adjust the height as needed
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
