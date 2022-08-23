import { React } from 'react';

/**
 * Dropdown field to a venue when creating a new match.
 */
export default function PlayerField({ value, onChange, courts, error }) {
  return (
    <div className="col-span-1 sm:col-span-1">

      {/* Label */}
      <label htmlFor="courtNumber" className="block text-sm font-medium text-gray-700">
        Court
      </label>

      {/* Dropdown select */}
      <select
          value={value}
          onChange={onChange}
        id="courtNumber"
        name="courtNumber"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      >
        {courts && courts.map((court, index) => {return (<option value={court.court_number} key={index}>{court.court_number}</option>)})}
      </select>

      {/* Error message */}
      {error ? <p className="mt-2 text-sm text-red-600" id={"courtNumber-error"}>{error}</p> : null}
    </div>
  )
}