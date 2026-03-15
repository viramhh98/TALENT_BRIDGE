import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Erreg = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    company_name: "",
    company_website: "",
    company_description: "",
    contact_person_name: "",
    contact_person_phone: "",
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
        "http://127.0.0.1:8000/users/api/register-employer/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
      navigate('/login')
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Register as Employer
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
            name="company_name"
            placeholder="Company Name"
            required
            minLength="2"
            maxLength="100"
            value={formData.company_name}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="url"
            name="company_website"
            placeholder="Company Website (e.g., http://example.com)"
            required
            value={formData.company_website}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <textarea
            name="company_description"
            placeholder="Company Description"
            required
            minLength="10"
            maxLength="500"
            value={formData.company_description}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="contact_person_name"
            placeholder="Contact Person Name"
            required
            minLength="2"
            maxLength="50"
            value={formData.contact_person_name}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="contact_person_phone"
            placeholder="Contact Person Phone"
            required
            pattern="[0-9]{10}"
            value={formData.contact_person_phone}
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

export default Erreg;
