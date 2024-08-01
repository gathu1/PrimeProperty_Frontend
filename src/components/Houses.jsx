import React, { useState,  useEffect } from 'react';
import BASE_URL from './config';
import axios from 'axios';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons


function Houses() {
    const [houses, setHouses] = useState([]);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState('');
    const [remaining, setRemaining] = useState('');
    const [editingHouse, setEditingHouse] = useState(null);
    const [isSidebarReduced, setIsSidebarReduced] = useState(false);  

    useEffect(() => {
      fetchHouses();
      fetchCategories();
  }, []);

  const fetchHouses = async () => {
      try {
          const response = await axios.get(`${BASE_URL}/type/api/house/`);
          console.log('API response:', response.data);
          setHouses(response.data);
      } catch (error) {
          console.error("Error fetching houses:", error);
      }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/type/api/type/`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${BASE_URL}/type/api/house/`, {
              category, description, price, location, total, remaining
            });
            console.log('Tenant added:', response.data);
            fetchHouses(); // Refresh the tenant list after adding
            resetForm(); // Reset form fields
        } catch (error) {
            console.error("Error adding tenant:", error);
        }
    };

  const resetForm = () => {
      setCategory('');
      setDescription('');
      setPrice('');
      setLocation('');
      setTotal('');
      setRemaining('');
  };

    const handleEdit = (house) => {
        setEditingHouse(house);
        setCategory(house.category.id);
        setDescription(house.description);
        setLocation(house.location);
        setPrice(house.price);
        setTotal(house.total);
        setRemaining(house.remaining);
    };

    // const handleEdit = (type) => {
    //   setEditingType(type);
    //   setName(type.name);
    //   setHouseRange(type.houseRange);
    //   setTotalAmount(type.totalAmount);
    // };
  
    // const handleDelete = async (id) => {
    //   if (window.confirm('Are you sure you want to delete this type?')) {
    //     try {
    //       await axios.delete(`${BASE_URL}/type/api/type/${id}/`);
    //       fetchTypes();
    //     } catch (error) {
    //       console.error("Error deleting type:", error);
    //     }
    //   }
    // };
  
    // const handleUpdate = async (id) => {
    //   try {
    //     await axios.put(`${BASE_URL}/type/api/type/${id}/`, { name, houseRange, totalAmount });
    //     fetchTypes();
    //     resetForm();
    //   } catch (error) {
    //     console.error("Error updating type:", error);
    //   }
    // };

    const handleDelete = async (id) => {
        await axios.delete(`${BASE_URL}/type/api/house/${id}/`);
        fetchHouses();
    };

const toggleSidebarSize = () => {
    setIsSidebarReduced(!isSidebarReduced);
  };

    return (
        <div className="flex flex-col lg:flex-row">
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
    <h1 className="text-3xl font-bold">LIST OF HOUSES</h1></div>
    <div className={`flex-grow p-4 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}>
                 <div className='mr-40 ml-40'>         
                  <h1 className="text-2xl font-semibold mb-4">House List</h1>
                <form onSubmit={handleSubmit} className="mb-4 mt-20">
                    <div className="grid gap-4 mb-4">
                        <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
                            <input
                                type="number"
                                id="total"
                                name="total"
                                value={total}
                                onChange={(e) => setTotal(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="remaining" className="block text-sm font-medium text-gray-700">Remaining</label>
                            <input
                                type="number"
                                id="remaining"
                                name="remaining"
                                value={remaining}
                                onChange={(e) => setRemaining(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
                <h2 className="text-xl font-semibold mb-4">Existing Houses</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Price</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Total</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Remaining</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Action</th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
            {houses.map((house) => (
              <tr key={house.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{house.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{house.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{house.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{house.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{house.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{house.remaining}</td>
                <td className="py-4 px-6 text-black flex gap-2">
                    <button
                      onClick={() => handleEdit(house)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(house.id)}
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
}

export default Houses;
