import { React } from 'react';

/**
 * Table skeleton, used as a loading state in tables. Mock table layout matches that of actual table.
 * Table layout modified from example at: https://tailwindui.com/components/application-ui/lists/tables
 * Skeleton concept inspired by: https://codepen.io/ecomrick77/pen/bGePeoM 
 */
export default function Skeleton() {
    return (
      <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="animate-pulse bg-gray-200">
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6 ">
          <dl className="font-normal lg:hidden">
            <dt className="sr-only"></dt>
            <dd className="mt-1 truncate text-gray-700"></dd>
            <dt className="sr-only sm:hidden"></dt>
            <dd className="mt-1 truncate text-gray-500 sm:hidden"></dd>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"></td>
      </tr>
      <tr className="animate-pulse bg-gray-300">
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6 ">
          <dl className="font-normal lg:hidden">
            <dt className="sr-only"></dt>
            <dd className="mt-1 truncate text-gray-700"></dd>
            <dt className="sr-only sm:hidden"></dt>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"></td>
      </tr>
      <tr className="animate-pulse bg-gray-200">
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6 ">
          <dl className="font-normal lg:hidden">
            <dt className="sr-only"></dt>
            <dd className="mt-1 truncate text-gray-700"></dd>
            <dt className="sr-only sm:hidden"></dt>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"></td>
      </tr>
      </tbody>
    )
}