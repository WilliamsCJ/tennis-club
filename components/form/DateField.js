import { React } from 'react';

/**
 * Date picker forms.
 */
export default function DateField({ label, id, value, onChange, error, bday}) {
  return (
    <div className="span-col-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          value={value}
          onChange={onChange}
          type="date"
          name={id}
          id={id}
          autoComplete={bday ? "bday" : ""}
          className={`shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md`}
        />
        {error && <p className="mt-2 text-sm text-red-600" id={id + "-error"}>{error}</p>}
      </div>
    </div>
  )
}