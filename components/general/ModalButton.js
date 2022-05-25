import { React } from 'react';

/**
 * Modal submit button
 */
export default function ModalButton() {
  return (
    <div className="mt-5 sm:mt-6">
      <button
        type="submit"
        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 hover:scale-105 transition ease-in-out active:scale-90 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
      >
        Create
      </button>
    </div>
  )
}