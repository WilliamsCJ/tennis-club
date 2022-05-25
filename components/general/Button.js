import { React } from 'react';

/**
 * Button for opening modal, mainly to create a  new player or match.
 * Modified from example at: https://tailwindui.com/components/application-ui/headings/card-headings 
 */
export default function Button({ text, onClick }) {
    return (
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-500 hover:scale-110 active:scale-90 transition ease-in-out px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
} 