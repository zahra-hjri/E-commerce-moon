"use client";

import axios from "axios";
import React, { useState } from "react";
import InputField from "@/app/shared-components/ui/InputField";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });

      if (response.status >= 200 && response.status < 300) {
        alert("Success register");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      alert("Registration failed!");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex py-20 justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 shadow-2xl p-8 rounded-2xl w-[90%] max-w-md h-[500px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>

        <InputField
          label="Username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-700 hover:bg-green-800 transition-colors text-white font-bold py-2 rounded-xl shadow-lg mt-6"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
