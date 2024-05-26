import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errors: FieldErrors<any>;
  className?: string;
};

export default function TextInput({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  required = false,
  errors,
  className = '',
}: TextInputProps) {
  return (
    <div className={`grid gap-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 dark:text-gray-900  text-gray-900 dark:bg-white">
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(name, { required })}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900  dark:bg-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[12px] placeholder:font-light placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
        />
        {errors[name] && <span className="text-red-600">{`${label} is required`}</span>}
      </div>
    </div>
  );
}
