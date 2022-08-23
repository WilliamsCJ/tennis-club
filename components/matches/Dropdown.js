import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, LocationMarkerIcon, ChevronDownIcon } from '@heroicons/react/solid'

/**
 * Venues dropdown, used to select a venue.
 */
export default function DropDown({ options, label, selected, setSelected }) {  
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="sr-only">{label}</Listbox.Label>
            
            <div className="relative">
              <div className="inline-flex shadow-sm rounded-md divide-x divide-primary-600">
                <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600">
                  <div className="relative inline-flex items-center bg-primary-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                    <LocationMarkerIcon className="h-5 w-5" aria-hidden="true" />
                    <p className="ml-2 text-sm font-medium">{selected ? selected.name : "Choose a venue"}</p>
                  </div>
                  <Listbox.Button className="relative inline-flex items-center bg-primary-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500">
                    <span className="sr-only">{label}</span>
                    <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </Listbox.Button>
                </div>
              </div>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.name}
                      className={({active}) => `${active ? 'text-white bg-primary-500' : 'text-gray-900'} cursor-default select-none relative p-4 text-sm`}
                      value={option}
                    >
                      {({ selected, active }) => (
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <p className={selected ? 'font-semibold' : 'font-normal'}>{option.name}</p>
                            {selected ? (
                              <span className={active ? 'text-white' : 'text-primary-500'}>
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </div>
                          <p className={({active}) => `${active ? 'text-primary-200' : 'text-gray-500'} mt-2`}>
                            {option.address}
                          </p>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    )
  }