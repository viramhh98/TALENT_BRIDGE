import React from "react";
import Footer from "./Footer";

const Contact = () => (
  <div>
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl mt-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Contact Us
      </h2>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer />
  </div>
);

export default Contact;
