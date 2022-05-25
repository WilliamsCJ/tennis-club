import { React } from 'react';
import { Dialog } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/outline';

import Modal from './Modal';

/**
 * Notes modal for showing extra information. 
 * Modified from example at: https://headlessui.dev/react/dialog 
 */
export default function NotesModal({ title, notes, open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <InformationCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
              {title}
              </Dialog.Title>
              <div className="mt-2">
                  {notes}
              </div>
          </div>
      </div>
    </Modal>
  )
}