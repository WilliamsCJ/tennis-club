import { React, useState } from 'react';
import NotesModal from '../general/NotesModal';
import Ping from '../notifications/Ping';

/**
 * Table row.
 */
 export function TableRow({key, col2, col3, val1, val2, val3, notes}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
      <>
      <tr key={key}>
          <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
              {notes ? 
                <a onClick={() => setModalIsOpen(true)} className='cursor-pointer'>
                  {val1}
                  <Ping />                     
                </a>
                :
                val1
              }
              <dl className="font-normal lg:hidden">
                  <dt className="sr-only">{col2}</dt>
                  <dd className="mt-1 truncate text-gray-700">{val2}</dd>
                  <dt className="sr-only sm:hidden">{col3}</dt>
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">{val3}</dd>
              </dl>
          </td>
          <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{val2}</td>
          <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{val3}</td>
      </tr> 
      <NotesModal title={"Notes"} notes={notes} open={modalIsOpen} setOpen={setModalIsOpen} />
      </>
  )
}

/**
* Table header.
* Modified from example at: https://tailwindui.com/components/application-ui/lists/tables 
*/
export function TableHeader({column1, column2, column3}) {
  return (
      <thead className="bg-gray-50">
          <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">{column1}</th>
              <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">{column2}</th>
              <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">{column3}</th>
          </tr>
      </thead>
  )
}