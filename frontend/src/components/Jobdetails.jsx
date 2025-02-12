import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const Jobdetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    file: null,
    user:JSON.parse(localStorage.getItem("user"))
  });
  const navigate=useNavigate()

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/jobs/api/jobs/${id}`);
        setJob(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      setFormData({
        ...formData,
        file: file,
      });
    } else {
      alert("Please upload a valid PDF file.");
      e.target.value = ""; // Clear the file input
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // const data = new FormData();
  //   // data.append("file", formData.file);
  //   // data.append("user",localStorage.getItem("user"))
   
  //   try {
  //     console.log(formData)
  //     const response = await axios.post(`http://127.0.0.1:8000/applications/api/apply/${id}/`,formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     console.log("File uploaded successfully:", response.data);
  //   } catch (error) {
  //     console.error(
  //       "Error uploading file:","error"
  //       // error.response?.data || error.message

  //     );
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("file", formData.file); // Adding the file to FormData
    data.append("user", formData.user.username); // Adding the user information
  
    try {
      console.log(formData);
      const response = await axios.post(`http://127.0.0.1:8000/applications/api/apply/${id}/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate('/job-listings-e')
      console.log("File uploaded successfully:", response.data);
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  return (
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center ">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        {job ? (
          <>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {job.job_title}
                  </h1>
                  <p className="text-green-600 font-semibold">{job.company_name}</p>
                  <p className="text-gray-500">{job.job_location}||{job.employment_type}||{job.salary_range}</p>
                </div>
              </div>

            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-700">Job Description</h2>
              <p className="text-gray-600 mt-2">
                {job.job_description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
              <div>
                <label htmlFor="file">Upload CV:</label>
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  required
                  className="ml-2 border border-gray-300 rounded p-1"
                />
              </div>

              <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Apply Now
              </button>
            </form>
          </>
        ) : (
          <p className="text-gray-600">Loading job details...</p>
        )}
      </div>
    </div>
  );
};

export default Jobdetails;
