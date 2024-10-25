"use client";

import Link from "next/link";
import "./styleRegister.css";
import { useState } from "react";
import axios from "axios";
import { register } from "module";
import { useRouter } from "next/navigation";

export default function Page() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    phone: "",
    password: "",
  });
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:4000/users",
        formData
      );

      if (response.status === 200) {
        console.log("registration successful");
      }
    } catch (err) {
      console.log("error aa gaya bhai");
      console.log(err);
    }
  };

  return (
    <div
      className="bg-cover bg-fixed h-full"
      style={{
        backgroundImage: "url('/AstonMartinDB9.jpg')",
      }}
    >
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="login_box">
            <div className="login-header">
              <span>Register</span>
            </div>
            <div className="input_box">
              <input
                type="text"
                id="user"
                name="username"
                className="input-field"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label className="label">userame</label>
              <i className="bx bx-user icon"></i>
            </div>
            <div className="input_box">
              <input
                type="text"
                id="pass"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="label">Email</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="input_box">
              <input
                type="text"
                id="pass"
                name="country"
                className="input-field"
                value={formData.country}
                onChange={handleChange}
                required
              />
              <label className="label">Country</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="input_box">
              <input
                type="number"
                id="pass"
                className="input-field"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label className="label">Phone</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="input_box">
              <input
                type="password"
                id="pass"
                name="password"
                className="input-field"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <label className="label">Password</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label> I accept all the terms and conditions</label>
              </div>
            </div>
            <div className="input_box">
              <input type="submit" className="input-submit" value="Login" />
            </div>
            <div className="register">
              <span>
                Already have an account? <Link href="/login">Sign in</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
