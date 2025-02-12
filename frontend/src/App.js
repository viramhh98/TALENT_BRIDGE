import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scripts from "./components/Scripts";
import Home from "./components/Home";
import About from "./components/About";
import JobListings from "./components/JobListings";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Eereg from "./components/Eereg"; // Jobseeker Registration
import Erreg from "./components/Erreg"; // Employer Registration
import JobListingee from "./components/JobListingee";
import Jobdetails from "./components/Jobdetails";
import JobPost from "./components/JobPost";
import Applied from "./components/Applied";
import EmployeeApplication from "./components/EmployeeApplication";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      setUser(loggedUser);
    };
    fetchUser();
  }, []);

  const handleUserUpdate = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <Router>
      <React.Fragment>
        <Head />
        <Header user={user} setUser={setUser} />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/job-listings" element={<JobListings />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={<Login onUserUpdate={handleUserUpdate} />}
            />
            <Route path="/eereg" element={<Eereg />} />
            <Route path="/erreg" element={<Erreg />} />
            <Route path="/job-listings-e" element={<JobListingee />} />
            <Route path="/job-details/:id" element={<Jobdetails />} />
            <Route path="/post-job" element={<JobPost />} />
            <Route path="/applied" element={<Applied />} />
            <Route
              path="/EmployeeApplication"
              element={<EmployeeApplication />}
            />
          </Routes>
        </main>
        <Scripts />
      </React.Fragment>
    </Router>
  );
};

export default App;

// employer -- joblisting ema je job aave ema kone kone apply karyu e details aave ane ema button aavu joiye accept, reject and resume nu pn btavu joiye
