import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/jobs/api/employer-jobs',{params:{'username':JSON.parse(localStorage.getItem('user')).username}}); // Replace with your API endpoint
        setJobs(response.data); // Assuming response.data is an array of job listings
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="my-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Listings</h2>

        {jobs.map((job) => (
          <div key={job.id} className="border border-gray-200 p-6 mb-5 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
            <Link to={`/jobs/${job.id}`} className="text-2xl text-blue-600 font-semibold">
              <h3>{job.title}</h3>
            </Link>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {job.description}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default JobListings;
