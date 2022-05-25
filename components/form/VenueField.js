import { React } from 'react';

/**
 * Dropdown field to a court from a venues courts when creating a new match.
 * Modified from example at: https://tailwindui.com/components/application-ui/forms/form-layouts 
 */
export default function PlayerField({ value, onChange, venues, error }) {
  return (
    <div className="col-span-1 sm:col-span-2">
      {/* Label */}
      <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
        Venue
      </label>

      {/* Dropdown select */}
      <select
          value={value}
          onChange={onChange}
        id="venue"
        name="venue"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      >
        {venues && venues.map((venue, index) => {return (<option value={venue.name} key={index}>{venue.name}</option>)})}
      </select>

      {/* Error message */}
      {error ? <p className="mt-2 text-sm text-red-600" id={"venue-error"}>{error}</p> : null}
    </div>
  )
}