import { useState, useEffect } from 'react';
import BASE_URL from './config';
import axios from 'axios';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons

const Types = () => {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');
  const [houseRange, setHouseRange] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [editingType, setEditingType] = useState(null);
  const [isSidebarReduced, setIsSidebarReduced] = useState(false);
  useEffect(() => {
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/type/api/type/`);
        console.log('API response:', response.data);
        setTypes(response.data);
    } catch (error) {
        console.error("Error fetching houses:", error);
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/type/api/type/`, { name, houseRange, totalAmount });
      fetchTypes(); // Refresh the types list after adding
      resetForm();
    } catch (error) {
      console.error("Error adding type:", error);
    }
  };

  const handleEdit = (type) => {
    setEditingType(type);
    setName(type.name);
    setHouseRange(type.houseRange);
    setTotalAmount(type.totalAmount);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this type?')) {
      try {
        await axios.delete(`${BASE_URL}/type/api/type/${id}/`);
        fetchTypes();
      } catch (error) {
        console.error("Error deleting type:", error);
      }
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`${BASE_URL}/type/api/type/${id}/`, { name, houseRange, totalAmount });
      fetchTypes();
      resetForm();
    } catch (error) {
      console.error("Error updating type:", error);
    }
  };

  const resetForm = () => {
    setName('');
    setHouseRange('');
    setTotalAmount('');
    setEditingType(null);
  };

  const toggleSidebarSize = () => {
    setIsSidebarReduced(!isSidebarReduced);
  };

  return (
    <div className="flex flex-col md:flex-row">
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
            <AiOutlineHome/>
              <span  className={`ms-3 ${isSidebarReduced ? 'hidden' : 'block'}`}> Home </span>
            </a>
          </button>
        </aside>
      </div>
    </div>
    <div className="fixed top-0 left-0 right-0 bg-blue-800 text-white pt-5 pb-5 flex justify-center z-50">
    <h1 className="text-3xl font-bold">TYPES OF HOUSES</h1></div>
    <div className={`flex-grow p-4 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}>

        <form onSubmit={editingType ? () => handleUpdate(editingType.id) : handleSubmit} className='ml-40 mt-40 mr-40'>
          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="houseRange" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House No</label>
              <input
                type="text"
                id="houseRange"
                value={houseRange}
                onChange={(e) => setHouseRange(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="totalAmount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Number</label>
              <input
                type="number"
                id="totalAmount"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {editingType ? 'Update Type' : 'Add Type'}
          </button>
          {editingType && (
            <button
              type="button"
              onClick={resetForm}
              className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Cancel
            </button>
          )}
        </form>

        <h2 className="text-xl font-semibold my-4  ml-40">Existing Types</h2>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ml-40 mr-40">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">Name</th>
                <th scope="col" className="py-3 px-6">House No</th>
                <th scope="col" className="py-3 px-6">Total Number</th>
                <th scope="col" className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {types.map((type) => (
                <tr key={type.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-black">{type.name}</td>
                  <td className="py-4 px-6 text-black">{type.houseRange}</td>
                  <td className="py-4 px-6 text-black">{type.totalAmount}</td>
                  <td className="py-4 px-6 text-black flex gap-2">
                    <button
                      onClick={() => handleEdit(type)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(type.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Types;
