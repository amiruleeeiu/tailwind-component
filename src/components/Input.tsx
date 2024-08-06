import { Field, useField } from "formik";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  const [, meta] = useField(name);

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        placeholder={label}
        className={`text-xl border p-2 rounded focus:ring-1 focus:outline-none ${
          meta.touched && meta.error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }`}
        {...props}
      />
      <div
        className={`mb-2 transition-all duration-300 ease-in-out ${
          meta.touched && meta.error
            ? "opacity-100 h-4 text-red-500"
            : "opacity-0 h-0"
        }`}
      >
        {meta.touched && meta.error ? meta.error : ""}
      </div>
    </div>
  );
};

export default Input;
