import { React } from 'react';

/**
 * Page header with title and description.
 * Modified from example at: https://tailwindui.com/components/application-ui/headings/card-headings
 */
export default function Header({ title, description }) {
    return (
        <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
)
}