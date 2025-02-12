import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const Eereg = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    skills: "",
    contactNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/api/register-jobseeker/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            minLength="3"
            maxLength="30"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength="6"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            minLength="2"
            maxLength="30"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            minLength="2"
            maxLength="30"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            required
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            required
            pattern="[0-9]{10}"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-4 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Eereg;
