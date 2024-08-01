import React, { useState } from 'react';
import BASE_URL from './config';
import axios from 'axios';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons

const Maintenance = () => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [house, setHouse] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isSidebarReduced, setIsSidebarReduced] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/type/api/maintenance/`, {
                name,
                contact,
                house,
                date,
                description      
            });
            console.log('Tenant added:', response.data);
            // Refresh the tenant list after adding
            // Reset form fields
            setName('');
            setContact('');
            setHouse('');
            setDate('');
            setDescription('');
        } catch (error) {
            console.error("Error adding tenant:", error);
        }
    };
    
    const toggleSidebarSize = () => {
      setIsSidebarReduced(!isSidebarReduced);
    };

    return (
        <div className="flex flex-col md:flex-row">
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
    <h1 className="text-3xl font-bold">MAINTENANCE</h1></div>
    <div className={`flex-grow p-4 mr-60 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}>         

                <div className="w-full">
                    <h1 className="text-center text-xl font-bold mb-4"></h1>
                    <form className="max-w-lg mx-auto mt-40" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row mb-5">
                            <div className="md:w-1/2 mb-5 md:mb-0 md:mr-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="md:w-1/2 md:ml-2">
                                <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                                <input type="number" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mb-5">
                            <div className="md:w-1/2 mb-5 md:mb-0 md:mr-2">
                                <label htmlFor="house" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House No</label>
                                <input type="number" id="house" name="house" value={house} onChange={(e) => setHouse(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="md:w-1/2 md:ml-2">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maintenance Date</label>
                                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="flex justify-between">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
