import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo, background } from "../Assets/index";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          role,
          password,
        }),
      });
      const data = await response.json();
      console.log(data); // Log the response data to the console
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (

    <div>
      <Header/>
    <div
      className="container d-flex justify-content-center align-items-center min-vh-100 "
      style={{ backgroundImage: `url(${background})`, backgroundSize: "400px"  }}
    >
      <div className="card p-4">
        <div className="text-center">
          <img
            className="mb-4"
            src={logo}
            alt="logo"
            style={{ width: "250px", height: "200px" }}
          />
          <h1 className="mb-4">Register</h1>
          <p className="text-muted mb-4">
            Already have an account?{" "}
            <span className="text-primary">Sign In</span>
          </p>
        </div>
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <input
              type="text"
              className="form-control"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter your role"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 text-dark">
            Register
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Register;
