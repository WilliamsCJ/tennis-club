import { React } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter} from 'next/router';

const pages = ["Matches", "Players", "Rankings"];

/**
 * Navigation bar shown at the top of page. 
 */
export default function NavBar() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h2 className="text-md font-bold leading-7 text-gray-900 sm:text-xl sm:truncate">Fake LTC</h2>
                </div>

                {/* Desktop items */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">                    
                  {pages.map((page, index) => {
                    let href = "/" + page.toLowerCase();
                    return (
                        <a
                        key={index}
                        href={href}
                        className={`${router.pathname == href ? 'border-primary-500 text-gray-900': 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                        >
                        {page}
                        </a>
                    )
                  })}
                </div>
              </div>
  
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {pages.map((page, index) => {
                let href = "/" + page.toLowerCase();
                return (
                  <Disclosure.Button
                    as="a"
                    key={index}
                    href={href}
                    className={`${router.pathname == href ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                  >
                    {page}
                  </Disclosure.Button>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}