
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, required = true }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-600" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-xl bg-gray-50 border border-gray-300 shadow-inner w-full h-10 px-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        type={type}
        id={name}
        name={name}
        required={required}
      />
    </div>
  );
};

export default InputField;
