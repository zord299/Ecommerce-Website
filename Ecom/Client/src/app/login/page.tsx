"use client";

import { usePathname } from "next/navigation"; // Correct hook for pathname in App Router
import "./styleLogin.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Login() {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:4000/users");
      const users = response.data;
      console.log(users);
      console.log(formData)
      const user = users.find(
        (user: { username: string; password: string }) =>
          user.username == formData.username && user.password == formData.password
      );
      console.log(user)
      if (user) {
        router.push("/");
      } else {
        console.log("Invalid Username and password");
      }
    } catch (err) {
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
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="login_box">
            <div className="login-header">
              <span>Login</span>
            </div>
            <div className="input_box">
              <input
                type="text"
                id="user"
                className="input-field"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <label className="label">Username</label>
              <i className="bx bx-user icon"></i>
            </div>
            <div className="input_box">
              <input
                type="password"
                id="pass"
                className="input-field"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <label className="label">Password</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label>Remember me</label>
              </div>
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="input_box">
              <input type="submit" className="input-submit" value="Login" />
            </div>
            <div className="register">
              <span>
                Don't have an account? <Link href="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
