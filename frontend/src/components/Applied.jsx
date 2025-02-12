import React, { useEffect, useState } from "react";
import axios from "axios";

const Applied = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [applicants, setApplicants] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(""); // State to track selected status

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/jobs/api/employer-jobs', {
          params: { 'username': JSON.parse(localStorage.getItem('user')).username }
        });
        setJobs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleApplicantsView = async (jobId) => {
    if (selectedJobId === jobId) {
      setSelectedJobId(null);
      setApplicants((prev) => ({ ...prev, [jobId]: [] }));
    } else {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/applications/api/applied/${jobId}/`);
        setApplicants((prev) => ({ ...prev, [jobId]: response.data }));
      } catch (err) {
        console.error(err);
        setError("Failed to load applicants.");
      }
      setSelectedJobId(jobId);
    }
  };



  const handleStatusChange = async (applicantId) => {
    if (!selectedStatus) {
      alert("Please select a status before submitting.");
      return; // Do not proceed if no status is selected
    }

    try {
      await axios.patch(`http://127.0.0.1:8000/applications/api/update-status/${applicantId}/`, { status: selectedStatus });
      // alert(`Status updated to ${selectedStatus} for applicant ID: ${applicantId}`);
      setSelectedApplicant(null); // Close details view after updating
      setSelectedStatus(""); // Reset status selection
      window.location.reload()
    } catch (err) {
      console.error(err);
      setError("Failed to update status.");
      alert(`Status updated to ${selectedStatus} for applicant ID: ${applicantId}`);

    }
  };



  const openApplicantDetails = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const closeApplicantDetails = () => {
    setSelectedApplicant(null);
    setSelectedStatus(""); // Reset selected status when closing details
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">Employer Dashboard</h1>

      {/* Job Listings */}
      {/* <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Listed Jobs</h2> */}
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border border-gray-200 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <button
              onClick={() => toggleApplicantsView(job.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {selectedJobId === job.id ? "Hide Applicants" : "View Applicants"}
            </button>

            {selectedJobId === job.id && (
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Applicants for {job.title}</h2>
                {applicants[job.id] && applicants[job.id].length > 0 ? (
                  <ul className="space-y-4">
                    {applicants[job.id].map((applicant) => (
                      <li key={applicant.id} className="border border-gray-200 p-4 rounded-lg flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{applicant.name}</h3>
                          <p className="text-gray-600">Email: {applicant.email}</p>
                        </div>
                        <button
                          onClick={() => openApplicantDetails(applicant)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          View Details
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No applicants for this job.</p>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Applicant Details Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg w-1/2 max-w-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{selectedApplicant.name}</h1>
            <p className="text-gray-600">Email: {selectedApplicant.email}</p>
            <div className="mt-4 overflow-y-scroll h-80 w-full border border-gray-300 p-2">
              {/* Assuming the resume URL is provided */}
              <iframe src='/media/resumes/T2_-_UNIT_-_5.pdf' title="Resume" className="w-full h-full" />

            </div>
            <div className="flex items-center space-x-2 mt-4">
              <select
                className="border border-gray-300 rounded p-1"
                value={selectedStatus} // Controlled component
                onChange={(e) => setSelectedStatus(e.target.value)} // Update selected status
              >
                <option value="" disabled>Select Status</option>
                <option value="interviewed">Interviewed</option>
                <option value="rejected">Rejected</option>
                <option value="hired">Hired</option>
              </select>

              <button
                onClick={() => handleStatusChange(selectedApplicant.id)} // Update status on submit
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
              <button
                onClick={closeApplicantDetails} // Close details modal
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applied;
