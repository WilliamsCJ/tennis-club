import { React } from 'react';

/**
 * Dropdown field to select a player from the list of all players
 * Modified from example at: https://tailwindui.com/components/application-ui/forms/form-layouts 
 */
export default function PlayerField({ number, id, value, onChange, players, error }) {
  return (
    <div className="col-span-1 sm:col-span-2">

      {/* Label */}
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        Player {number}
      </label>

      {/* Dropdown select */}
      <select
          value={value}
          onChange={onChange}
        id={id}
        name={id}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      >
        {players && players.map((player, index) => {return (<option value={player.email} key={index}>{player.fullname}</option>)})}
      </select>

      {/* Error message */}
      {error ? <p className="mt-2 text-sm text-red-600" id={id + "-error"}>{error}</p> : null}
  </div> 
  )
}