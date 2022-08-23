import { React } from 'react';
import { XCircleIcon } from "@heroicons/react/outline"

/**
 * Error banner. Used for showing user-friendly messages when data can't be fetched.
 */
export default function Error({ message }) {
    return (
        <div className="rounded-md bg-red-50 p-4 mt-8">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{message}</h3>
                </div>
            </div>
        </div>
    )
}