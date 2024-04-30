import React, { useState } from "react";
import loginData from "../loginData.json";
import { useNavigate } from "react-router-dom";
import img from "../assets/img.jpg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("email",email)
    const admin = loginData.find(
      (user) => user.email === email && user.password === password
    );
    if (admin) {
      navigate("/");
      
    } else {
      setError("Invalid Email or Password");
    }
  };
  const backgroundImg = {
    backgroundImage: `url(${img})`,
    height: "100vh",
    fontSize: "40px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backgroundImg}>
      <div className="card w-25 position-absolute top-50 start-50 translate-middle shadow-lg rounded-3">
        <div className="card-header h-25">
          <b>
            <h3>Sign In to Shopping App</h3>
          </b>
        </div>
        <div className="card-body h-50">
          <form >
            <div className="input-group mb-3 w-75 mx-auto">
              <input
                type="email"
                className="form-control rounded-4"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-3 w-75 mx-auto ">
              <input
                type="password"
                className="form-control rounded-4 "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="btn btn-primary btn-block  w-75 rounded-5 bg-dark text-white border-0"
                onSubmit={handleLogin}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
