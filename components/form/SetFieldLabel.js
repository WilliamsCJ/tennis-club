import { React } from 'react';

/**
 * Set label for new match form.
 * Modified from example at: https://tailwindui.com/components/application-ui/forms/form-layouts 
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