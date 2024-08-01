import { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons
import BASE_URL from './config';
import axios from 'axios';
const Register = () => {

  const [isSidebarReduced, setIsSidebarReduced] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const toggleSidebarSize = () => {
    setIsSidebarReduced(!isSidebarReduced);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await axios.post(`${BASE_URL}/api/register/`, { email, username, password, role });
       // Reset form fields
       setEmail('');
       setUsername('');
       setPassword('');
       setRole('');
   
    } catch (error) {
       console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="flex">
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
                  <a href="/Dash" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/Types" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 12h-8V4h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8v8h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-8h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM6 14h2v2H6v-2Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>House type</span>
                  </a>
                </li>
                <li>
                  <a href="Houses" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l10 9H2l10-9Zm0 2.618L5.762 9h12.476L12 4.618ZM2 11h20v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11Zm11 2v7h6v-7h-6Zm-2 0H4v7h6v-7Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Houses</span>
                  </a>
                </li>
                <li>
                  <a href="/Tenants" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm7 11h-2v-2a7 7 0 0 0-14 0v2H3v-2a9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Tenants</span>
                  </a>
                </li>
                <li>
                  <a href="/Payments" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-1 8H4v-6h16Zm-5 2h2v2h-2Zm-4 0h2v2h-2Zm-4 0h2v2H7Zm0-4h10v2H7Zm0-4h10v2H7Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Payments</span>
                  </a>
                </li>
                <li>
                  <a href="/Reports" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 16h-2V12h2Zm2-8V6h-2v4Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Reports</span>
                  </a>
                </li>
                <li>
                  <a href="/Inquire" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 16h-2V12h2Zm2-8V6h-2v4Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Inquiries</span>
                  </a>
                </li>
                <li>
                  <a href="/Requests" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 16h-2V12h2Zm2-8V6h-2v4Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Maintenance</span>
                  </a>
                </li>
                <li>
                  <a href="/Auth" className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group mb-10">
                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 16h-2V12h2Zm2-8V6h-2v4Z" />
                    </svg>
                    <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}>Users</span>
                  </a>
                </li>
              </ul>
              <button className="mt-5">
                <a href="/" className='bg-red-800 text-white flex items-center rounded-lg p-2'>
                  <AiOutlineHome />
                  <span className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}> Home </span>
                </a>
              </button>
            </aside>
      </div>
      <div className="fixed top-0 left-0 right-0 bg-blue-800 text-white pt-5 pb-5 flex justify-center z-50">
      <h1 className="text-3xl font-bold">REGISTER</h1></div>
      <section className="bg-white dark:bg-gray-900 flex-grow ml-64">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register  user
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                  <input type="text" name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} placeholder="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="w-full text-black bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
