"use client";

import React, { useState } from "react";
import InputField from "@/app/components/ui/InputField";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message); 
        setError(null); 
      } else {
        setError(data.error); 
        setSuccessMessage(null); 
      }
    } catch (error) {
      console.error(" error in register:", error);
      setError("please try again");
      setSuccessMessage(null);
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

        {error && <p className="text-red-500 font-bold pb-2">{error}</p>}
        {successMessage && <p className="text-green-500 font-bold pb-2">{successMessage}</p>}

        <InputField
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
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
