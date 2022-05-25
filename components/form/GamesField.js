import { React } from 'react';

const options = [0, 1, 2, 3, 4, 5, 6, 7]

/**
 * Form field for selecting the number of games won by a givne player.
 * Modified from example at: https://tailwindui.com/components/application-ui/forms/form-layouts 
 */
export default function GamesField({ player, id, value, onChange, optional, error}) {
    return (
        <div className="col-span-1 sm:col-span-2">

        {/* Select */}
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {player + " Games"}
        </label>

        {/* Dropdown select */}
        <select
            value={value}
            onChange={onChange}
          id={id}
          name={id}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        >
          {optional && <option></option>}
          {options.map((option) => {return (<option value={option} key={option}>{option}</option>)})}
        </select>

        {/* Error message */}
        {error ? <p className="mt-2 text-sm text-red-600" id={id + "-error"}>{error}</p> : null}
      </div>   
    )
}