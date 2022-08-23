import { React } from 'react';

/**
 * Set label for new match form.
 */
export default function SetFieldLabel({number, optional}) {
    return (
      <div className="mt-4 col-span-1 sm:col-span-4">
        <label className="block text-sm font-medium text-gray-700">
          Set {number} {optional && <span>(Optional)</span>}
        </label>
      </div>     
    )
}