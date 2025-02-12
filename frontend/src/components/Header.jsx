// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Header = ({ user, setUser }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       console.log("salman");
//       await axios.post("http://127.0.0.1:8000/users/api/logout/");
//       setUser(null); // Clear the user state
//       localStorage.removeItem("user"); // Remove user from local storage
//       navigate("/"); // Redirect to home
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

//   return (
//     <header className="bg-lime-400 p-4 h-18">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           <Link to="/">TalentBridge</Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden xl:flex space-x-6">
//           <Link
//             to="/"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-home"></span> Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-info_outline"></span> About
//           </Link>

//           <Link
//             to="/contact"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-contact_mail"></span> Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="xl:hidden flex items-center">
//           <button
//             className="text-white focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <span className="icon-menu text-3xl"></span>
//           </button>
//         </div>

//         {/* Desktop User Options */}
//         <div className="hidden xl:flex items-center space-x-4">
//           {user && user.type === "employer" ? (
//             <>
//               <Link
//                 to="/post-job"
//                 className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition"
//               >
//                 <span className="mr-2 icon-add"></span> Publish Job
//               </Link>
//               <div className="relative group">
//                 <Link to="/dashboard" className="text-white font-medium">
//                   Dashboard
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       onClick={handleLogout}
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </>
//           ) : user ? (
//             <>
//               <div className="relative group">
//                 <Link to="/profile" className="text-white font-medium">
//                   Profile
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to={`/edit-profile/${user.id}`}
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Edit Settings
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="relative group">
//                 <Link to="/dashboard" className="text-white font-medium">
//                   Dashboard
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       onClick={handleLogout}
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="relative">
//                 <select
//                   className="text-white font-medium bg-gray-700 hover:bg-gray-600 border-gray-500 rounded-lg py-2 px-2 shadow-md transition-colors duration-200 ease-in-out"
//                   onChange={(e) => (window.location.href = e.target.value)}
//                 >
//                   <option value="/">Register</option>
//                   <option value="/Erreg">Employer</option>
//                   <option value="/Eereg">Employee</option>
//                 </select>
//               </div>

//               <Link
//                 to="/login"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition text-center"
//               >
//                 Log In
//               </Link>
//             </>
//           )}
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <nav className="xl:hidden bg-lime-400 p-4">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 to="/"
//                 className="text-white font-medium hover:text-[#008bf8] transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="text-white font-medium hover:text-[#008bf8] transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 className="text-white font-medium hover:text-[#008bf8] transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserType(storedUser.type);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/users/api/logout/");
      setUser(null);
      localStorage.removeItem("user");
      navigate("/");
      window.location.reload()
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="bg-lime-500 p-4 h-18">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">TalentBridge</Link>
        </div>

        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            Contact
          </Link>

          {userType === "jobseeker" ? (
            <>
              <Link
                to="/job-listings-e"
                className="text-white font-medium hover:text-[#008bf8] transition-all"
              >
                Search Jobs
              </Link>

              <Link
                to="/EmployeeApplication"
                className="text-white font-medium hover:text-[#008bf8] transition-all"
              >
                Applied
              </Link>
            </>

          ) : userType === "employer" ? (
            <Link
              to="/applied"
              className="text-white font-medium hover:text-[#008bf8] transition-all"
            >
              Posted Jobs
            </Link>
          ) : null}
        </nav>

        <div className="flex items-center space-x-4">
          {user && userType === "employer" ? (
            <>
              <Link
                to="/post-job"
                className="text-white   border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition"
              >
                <span className="mr-2 icon-add">Publish Job</span>
              </Link>
              <div className="relative group">
                <Link
                  onClick={handleLogout}
                  className=" text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition text-center"
                >
                  Logout
                </Link>
              </div>
            </>
          ) : user ? (
            <>
              {/* <div className="relative group">
                <Link to="/profile" className="text-white font-medium">
                  Profile
                </Link>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
                  <li>
                    <Link
                      to={`/edit-profile/${user.id}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Edit Settings
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="relative group">
                <Link
                  onClick={handleLogout}
                  className=" text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition text-center"
                >
                  Logout
                </Link>

              </div>
            </>
          ) : (
            <>
              <div className="relative">
                <select
                  className="text-white font-medium bg-gray-600 hover:bg-gray-600 border-white rounded-lg py-2 px-2 shadow-md transition-colors duration-200 ease-in-out"
                  onChange={(e) => (window.location.href = e.target.value)}
                >
                  <option value="/">Register</option>
                  <option value="/Erreg">Employer</option>
                  <option value="/Eereg">Employee</option>
                </select>
              </div>

              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition text-center"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
