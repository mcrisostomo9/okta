import React from "react";

const Input = ({ handleChange, value, label, name, type, error }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={name} className="block text-sm text-primary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="mt-1 border py-2 px-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
