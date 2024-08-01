import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons

const Lease = () => {
  const [isSidebarReduced, setIsSidebarReduced] = useState(false);

  const toggleSidebarSize = () => {
    setIsSidebarReduced(!isSidebarReduced);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-1/4">
          <div className={`${isSidebarReduced ? 'w-20' : 'w-64'} fixed top-0 left-0 z-40 h-screen bg-blue-800 dark:bg-gray-800 transition-width duration-300`}>
            <aside id="logo-sidebar" className="h-full px-3 py-4 mt-20 overflow-y-auto">
              <button
                className="p-2 text-white rounded-lg dark:text-white bg-black dark:bg-gray-700 mb-4"
                onClick={toggleSidebarSize}
              >
                {isSidebarReduced ? <AiOutlineMenu /> : <AiOutlineArrowLeft />} {/* Use icons */}
              </button>
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="/Maintenance"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className={`flex-1 ms-3 whitespace-nowrap ${isSidebarReduced ? 'hidden' : 'block'}`}>Maintenance</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Lease"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className={`flex-1 ms-3 whitespace-nowrap ${isSidebarReduced ? 'hidden' : 'block'}`}>Lease Information</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Rent"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className={`flex-1 ms-3 whitespace-nowrap ${isSidebarReduced ? 'hidden' : 'block'}`}>Rent Payment</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Vacant"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className={`flex-1 ms-3 whitespace-nowrap ${isSidebarReduced ? 'hidden' : 'block'}`}>Vacant</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Announcements"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group mb-5"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3m-4 4v-4m0 0H7a6 6 0 0 1-6-6v0a6 6 0 0 1 6-6h4"
                      />
                    </svg>
                    <span className={`flex-1 ms-3 whitespace-nowrap ${isSidebarReduced ? 'hidden' : 'block'}`}>Announcements</span>
                  </a>
                </li>
              </ul>
              <button className="mt-5">
            <a href="/" className='bg-red-800 text-white flex items-center rounded-lg p-2'>
            <AiOutlineHome/>
              <span  className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}> Home </span>
            </a>
          </button>
            </aside>
          </div>
        </div>
        <div className="fixed top-0 left-0 right-0 bg-blue-800 text-white pt-5 pb-5 flex justify-center z-50">
    <h1 className="text-3xl font-bold">LEASE</h1></div>
    <div className={`flex-grow p-4 mr-60 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}>             <h1 className="text-2xl font-semibold mb-4">House List</h1>

                    <div className="max-w-sm p-6 mt-40 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Payment</p>
                        <a
                            href="/Houses"
                            className="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">View Houses</span>
                            <svg
                                className="w-3.5 h-3.5 ml-2 transform transition-opacity transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Balance</p>
                        <a
                            href="/Tenants"
                            className="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">View Tenants</span>
                            <svg
                                className="w-3.5 h-3.5 ml-2 transform transition-opacity transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Registered Date</p>
                        <a
                            href="/Payments"
                            className="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">View Payments</span>
                            <svg
                                className="w-3.5 h-3.5 ml-2 transform transition-opacity transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lease;
