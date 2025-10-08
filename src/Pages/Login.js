import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // 👈 Add this CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", password: "", authority: "user" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const res = await axios.get("http://localhost:9000/api/users");
        const users = res.data;

        const foundUser = users.find(
          (user) => user.name === form.name && user.password === form.password
        );

        if (foundUser) {
          Cookies.set("user", JSON.stringify(foundUser));
          alert("Login successful!");
          navigate("/");
        } else {
          alert("Invalid name or password.");
        }
      } else {
        await axios.post("http://localhost:9000/api/users", form);
        alert("Signed up successfully! You can now log in.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card animate-fade">
        <div className="tab-buttons">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="form-group mb-2">
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        {!isLogin && (
          <div className="form-group mb-3">
            <select
              className="form-control"
              name="authority"
              value={form.authority}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
