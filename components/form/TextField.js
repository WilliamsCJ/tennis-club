import { React } from 'react';

export default function TextField({ span, label, id, value, onChange, type, autoComplete, error}) {
  return (
    <div className={span}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          value={value}
          onChange={onChange}
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none	"
        />
        {error && <p className="mt-2 text-sm text-red-600" id={id + "-error"}>{error}</p>}
      </div>
    </div>
  )
}