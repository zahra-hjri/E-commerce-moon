import React from "react";
import InputField from "@/app/components/ui/InputField";

const Register = () => {
  return (
    <div className="bg-gray-100 h-screen w-full flex py-40 justify-center items-center">
      <form className="bg-white border border-gray-200 shadow-2xl p-8 rounded-2xl w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>

        <InputField label="Username" name="username" type="text" />
        <InputField label="Email" name="email" type="email" />
        <InputField label="Password" name="password" type="password" />

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
