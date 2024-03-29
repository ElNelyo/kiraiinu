import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/logo.png';
import { ReactComponent as Twitter }from '../images/twitter.svg';
import { ReactComponent as Medium }from '../images/medium.svg';
import { ReactComponent as Telegram }from '../images/telegram.svg';

const navigation = [
  { name: 'Home', href: '/', current: true, hidden: false },
  { name: 'Docs', href: 'https://kiraiinu.medium.com/', current: false, hidden: false },
  { name: 'LitePaper', href: '#', current: false, hidden: false },
  { name: 'Chart', href: '#', current: false , hidden: false},
  { name: 'Launch App', href: '#', current: false , hidden: true}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-purple-low">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center relative">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-24 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-24 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 mt-8 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.hidden ? 
                          'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold text-xl cursor-not-allowed'
                          : (
                            item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-white text-sm font-bold text-xl bg-gradient-to-r from-purple-hard to-indigo-400'
                          )
                         
                          
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                  <div className="hidden space-x-2 md:flex flex-row md:mb-0 right-0 md:absolute">
                                      <div className="h-14 w-14 bg-gradient-to-r from-purple-medium to-indigo-400 rounded-full">
                                        <a href="https://twitter.com/kiraiinu">
                                        <Twitter className="ml-1 pt-3 w-12 h-12 text-white" fill={"white"}/>
                                        </a>
                                      </div>
                                      <div className="h-14 w-14 bg-gradient-to-r from-purple-medium  to-indigo-400 rounded-full">
                                        <a href="https://t.me/kiraiinu">
                                          <Telegram className="ml-1 pt-3 w-12 h-12 text-white" fill={"white"}/>
                                        </a>
                                    </div>
                                </div>
                    
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.hidden ?'bg-gray-900 text-white px-3 py-2 rounded-md text-base font-bold cursor-not-allowed' : 'bg-gradient-to-r from-purple-hard to-indigo-400 text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                    
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
