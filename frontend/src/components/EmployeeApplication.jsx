import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeApplication = () => {
  const [applications, setApplications] = useState([]);

  // Define a mapping for status to color
  const statusColors = {
    applied: "bg-blue-200",       // Light blue for "Applied"
    interviewed: "bg-yellow-300",  // Light yellow for "Interviewed"
    rejected: "bg-red-400",        // Light red for "Rejected"
    hired: "bg-green-400",         // Light green for "Hired"
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user")); // Get user details from localStorage
    
        if (!user || !user.username) {
          console.error("User not found in localStorage");
          return; // Exit if no user found
        }
    
        console.log("Fetching applications for user:", user.username); // Log the user being fetched
    
        const response = await axios.get(`http://127.0.0.1:8000/applications/api/applied/?user=${user.username}`);
    
        console.log("Applications fetched:", response.data); // Log the response data
        setApplications(response.data); // Set the response data to state
      } catch (err) {
        console.error("Error fetching applications:", err.response ? err.response.data : err); // Log more detailed error
      }
    };
    
    fetchApplications(); // Call the fetch function
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Your Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.length > 0 ? (
            applications.map((application, index) => (
              <div
                key={index} // Use application.id if available for better uniqueness
                className={`shadow-lg rounded-lg p-6 border border-gray-200 ${statusColors[application.status] || 'bg-white'}`} // Apply background color based on status
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {application.jobTitle}
                </h3>
                <p className="text-gray-700 mb-1">
                  <strong>Company:</strong> {application.companyName}
                </p>
                <p className="text-gray-600">
                  <strong>Applied on:</strong> {new Date(application.applicationDate).toLocaleDateString()} {/* Format date */}
                </p>
                <p className="text-gray-600">
                  <strong>Status:</strong> {application.status} {/* Display status */}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No applications found.</p> // Handle no applications case
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeApplication;
