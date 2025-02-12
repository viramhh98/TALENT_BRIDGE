import React from 'react';
import '../assets/css/Register.css';

const Register = () => (
  <div className="register-form">
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default Register;
