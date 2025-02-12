import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Login = ({ onUserUpdate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/users/api/login/", {
        username,
        password,
      });

      console.log("Login successful:", response.data);
      onUserUpdate(response.data.user); // Update user state
      navigate("/")
      window.location.reload();
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-gradient-to-r from-white to-gray-100 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
          Log In
        </h2>
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:bg-gradient-to-l hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Log In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
