"use client";

import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Login successful");
        console.log(response.data.user);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Login failed");
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3]">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg border border-[#0D775E] bg-white">
        <h2 className="text-3xl font-bold text-[#0D775E] text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded border border-[#0D775E] text-[#0D775E] placeholder-[#0D775E] focus:outline-none focus:ring-2 focus:ring-[#0D775E]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded border border-[#0D775E] text-[#0D775E] placeholder-[#0D775E] focus:outline-none focus:ring-2 focus:ring-[#0D775E]"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#0D775E] text-[#F3F3F3] font-semibold rounded hover:bg-[#0a5d4b] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
