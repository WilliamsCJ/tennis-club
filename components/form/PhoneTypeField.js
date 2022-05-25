import { React } from 'react';

/**
 * Dropdown field to select a phone type
 * Modified from example at: https://tailwindui.com/components/application-ui/forms/form-layouts 
 */
export default function PhoneTypeField({ value, onChange, id}) {
  return (
    <div className="sm:col-span-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        Type
      </label>
      <select
          value={value}
          onChange={onChange}
        id={id}
        name={id}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      >
        <option>Mobile</option>
        <option>Home</option>
        <option>Work</option>
      </select>
    </div>
  )
}