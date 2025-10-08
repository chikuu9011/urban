import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // for redirecting

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
        // 🔍 1. Get all users from backend
        const res = await axios.get("http://localhost:9000/api/users");
        const users = res.data;

        // 🔒 2. Check if any user matches
        const foundUser = users.find(
          (user) =>
            user.name === form.name &&
            user.password === form.password
        );

        if (foundUser) {
          // ✅ 3. Save user to cookie
          Cookies.set("user", JSON.stringify(foundUser)); // expires in 1 day

          alert("Login successful!");
          navigate("/"); // ✅ redirect to home
        } else {
          alert("Invalid name or password.");
        }
      } else {
        // 📝 Sign Up
        await axios.post("http://localhost:9000/api/users", form);
        alert("Signed up successfully! You can now log in.");
        setIsLogin(true); // switch to login tab
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 20 }}>
        <button onClick={() => setIsLogin(true)} style={{ fontWeight: isLogin ? "bold" : "normal" }}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} style={{ fontWeight: !isLogin ? "bold" : "normal" }}>
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
        <div className="form-group mb-2">
          <select className="form-control" name="authority" value={form.authority} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      )}
      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
};

export default LoginPage;
