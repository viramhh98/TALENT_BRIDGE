import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const JobPost = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    job_description: "",
    job_location: "",
    salary_range: "",
    employment_type: "",
    username:JSON.parse(localStorage.getItem('user')).username
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
        "http://127.0.0.1:8000/jobs/api/jobs/create/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
      navigate("/applied");
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Enter Job Details
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="job_title"
            placeholder="Job title"
            required
            value={formData.job_title}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <textarea
            name="job_description"
            placeholder="Job description"
            required
            value={formData.job_description}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="job_location"
            placeholder="Enter job location"
            required
            value={formData.job_location}
            onChange={handleChange}
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="salary_range"
            placeholder="Enter salary range(Ex : 80000 to 90000)"
            required
            value={formData.salary_range}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          />
          <select
            name="employment_type"
            required
            value={formData.employment_type}
            onChange={handleChange}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg"
          >
            <option value="" disabled>Select Employment Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>

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

export default JobPost;
