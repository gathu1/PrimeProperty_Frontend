import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons

const Announcement = () => {
  const [isSidebarReduced, setIsSidebarReduced] = useState(false);

const toggleSidebarSize = () => {
  setIsSidebarReduced(!isSidebarReduced);
};
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
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
    <h1 className="text-3xl font-bold">ANNOUNCEMENTS</h1></div>
    <div className={`flex-grow p-4 mr-20 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-40'>
          <div className="mb-8 ">
            <section className="bg-white bg-opacity-80 shadow-md p-8 rounded-lg">
              <img 
                src="/static/assets/photo-1534398079543-7ae6d016b86a.avif" 
                alt="Maintenance" 
                className="mb-4 rounded-lg w-full h-auto"
              />
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-gray-800">Maintenance Notices</h2>
              <p className="text-base md:text-xl text-gray-700">
                Subject: Upcoming Elevator Maintenance
                <br /><br />
                Dear Residents,
                <br /><br />
                We want to inform you that scheduled elevator maintenance will take place on Friday, July 19th, from 9:00 AM to 5:00 PM. During this time, the elevators will be temporarily out of service.
                <br /><br />
                Impact:
                <br />
                - The elevators will be unavailable during the maintenance window.
                <br />
                - Please plan accordingly if you have mobility concerns or need assistance.
                <br /><br />
                Action Required:
                <br />
                - If you have any urgent needs during this period, please contact our maintenance team at maintenance@email.com or call (254) 456-7890.
                <br /><br />
                We apologize for any inconvenience and appreciate your understanding.
                <br /><br />
                Thank you for your cooperation.
                <br /><br />
                Sincerely, The Property Management Team
              </p>
            </section>
          </div>

          <div className="mb-8 ml-10">
            <section className="bg-white bg-opacity-80 shadow-md p-8 rounded-lg">
              <img 
                src="/static/assets/photo-1442504028989-ab58b5f29a4a.avif" 
                alt="Community" 
                className="mb-4 rounded-lg w-full h-auto"
              />
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-gray-800">Community Events</h2>
              <p className="text-base md:text-xl text-gray-700">
                - Summer BBQ Social: Join us on Saturday, July 27th, from 12:00 PM to 3:00 PM for a fun-filled barbecue event at the courtyard. Burgers, hot dogs, and vegetarian options will be available. Bring your family and enjoy good food and great company!
                <br /><br />
                - Yoga in the Park: Every Wednesday morning, meet at the community park for a rejuvenating yoga session. All levels are welcome! Don’t forget your mat and water bottle.
                <br /><br />
                - Movie Night: Grab your popcorn! We’ll be screening a family-friendly movie in the common area on Friday, August 2nd, starting at 7:00 PM. Check the bulletin board for the movie title.
                <br /><br />
                - Gardening Club: Interested in gardening? Join our gardening enthusiasts every Sunday afternoon to tend to the community garden beds. Learn about planting, composting, and sustainable practices.
                <br /><br />
                - Book Swap: Have books you’ve already read? Bring them to the lobby on Tuesday, August 6th, and exchange them with fellow tenants. It’s a great way to discover new reads!
              </p>
            </section>
          </div>

          <div className="mb-8">
            <section className="bg-white bg-opacity-80 shadow-md p-8 rounded-lg">
              <img 
                src="/static/assets/photo-1561715608-5659baeccfb4.avif" 
                alt="Emergency" 
                className="mb-4 rounded-lg w-full h-auto"
              />
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-gray-800">Emergency Alerts</h2>
              <p className="text-base md:text-xl text-gray-700">
                Emergency Alert: Building Evacuation Drill
                <br /><br />
                Date: July 20, 2024
                <br /><br />
                Dear Residents,
                <br /><br />
                We will be conducting a building evacuation drill on Saturday, July 27th, from 10:00 AM to 11:00 AM. This drill is essential for practicing emergency procedures and ensuring everyone’s safety.
                <br /><br />
                Key Details:
                <br />
                - Purpose: To familiarize residents with evacuation routes and assembly points.
                <br />
                - Procedure:
                <br />
                  - When the alarm sounds, exit your unit promptly.
                  <br />
                  - Use the nearest stairwell to descend to the ground floor.
                  <br />
                  - Gather at the designated assembly area in the courtyard.
                <br />
                - Participation: All residents are required to participate.
                <br /><br />
                Questions: If you have any questions or need assistance, contact our emergency hotline at (254) 456-7890.
                <br /><br />
                Remember, safety is our top priority. Thank you for your cooperation!
                <br /><br />
                Sincerely, The Property Management Team
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
