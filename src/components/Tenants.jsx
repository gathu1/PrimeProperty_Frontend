import React, { useState, useEffect } from 'react';
import BASE_URL from './config';
import axios from 'axios';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons

const Tenants = () => {
    const [tenant, setTenant] = useState([]);
    const [lname, setLname] = useState('');
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [house, setHouse] = useState('');
    const [houses, setHouses] = useState([]);
    const [date, setDate] = useState('');
    const [editingTenant, setEditingTenant] = useState(null);
    const [isSidebarReduced, setIsSidebarReduced] = useState(false);    
    const [filterHouse, setFilterHouse] = useState('');
    const [showForm, setShowForm] = useState(false);

    const filteredTenants = tenant.filter(t => t.house.toString().includes(filterHouse));
    
    useEffect(() => {
        fetchTenant();
        fetchHouses();
    }, []);

    const fetchTenant = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/type/api/tenant/`);
            console.log('API response:', response.data);
            setTenant(response.data);
        } catch (error) {
            console.error("Error fetching tenants:", error);
        }
    };

    const fetchHouses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/type/api/type/`);
        setHouses(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/type/api/tenant/`, {
                lname,
                fname,
                mname,
                email,
                contact,
                house,
                date
            });
            console.log('Tenant added:', response.data);
            fetchTenant(); // Refresh the tenant list after adding
            resetForm(); // Reset form fields
        } catch (error) {
            console.error("Error adding tenant:", error);
        }
    };

    const handleEdit = (tenant) => {
        setEditingTenant(tenant);
        setLname(tenant.lname);
        setFname(tenant.fname);
        setMname(tenant.mname);
        setEmail(tenant.email);
        setContact(tenant.contact);
        setHouse(tenant.house);
        setDate(tenant.date);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this tenant?')) {
            try {
                await axios.delete(`${BASE_URL}/tenant/${id}/`);
                fetchTenant();
            } catch (error) {
                console.error("Error deleting tenant:", error);
            }
        }
    };

    // const handleUpdate = async (id) => {
    //     try {
    //         const response = await axios.put(`http://127.0.0.1:8000/type/api/tenant/${id}/`, {
    //             lname,
    //             fname,
    //             mname,
    //             email,
    //             contact,
    //             house,
    //             date
    //         });
    //         console.log('Tenant updated:', response.data);
    //         fetchTenant(); // Refresh the tenant list after updating
    //     } catch (error) {
    //         console.error("Error updating tenant:", error);
    //     }
    // };

    const resetForm = () => {
        setLname('');
        setFname('');
        setMname('');
        setEmail('');
        setContact('');
        setHouse('');
        setDate('');
        setEditingTenant(null);
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
    <h1 className="text-3xl font-bold">LIST OF TENANTS</h1></div>
    <div className={`flex-grow p-4 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}>
                {/* Form */}

                <div className="mt-10 ml-40 mr-40">

            <div className="flex justify-between items-center mb-4 mt-40">
                <input
                    type="number"
                    placeholder="Filter by House"
                    value={filterHouse}
                    onChange={(e) => setFilterHouse(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                />
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {showForm ? 'Close Form' : 'Add Tenant'}
                </button>
            </div>

            {showForm && (
                <div className="w-full max-w-4xl mx-auto mb-10 ">
                    <h1 className="text-xl font-semibold mb-4"></h1>
                    <form
                        className="space-y-6 mt-20 ml-20 mr-20"
                        onSubmit={(e) => {
                            handleSubmit(e);
                            setShowForm(false);
                        }}
                    >
                        <div className="flex flex-col">
                            {/* Form fields... */}
<div>
                            <div className='flex mb-5'>
                            <div className="w-1/2 mr-5">
                                <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="" required />
                            </div>
                            <div className="w-1/2 ">
                                <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 sm:w-full md:w-full text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="" required />
                            </div>
                            </div>

                            <div className='flex mb-5'>
                            <div className="w-1/2 mr-5">
                                <label htmlFor="mname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle Name</label>
                                <input type="text" id="mname" value={mname} onChange={(e) => setMname(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="" required />
                            </div>
                            <div className="w-1/2 ">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="" required />
                            </div>
                            </div>
                            
                            
    <div className="flex mb-5">
        <div className="w-1/2 mr-5">
            <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
            <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="" required />
        </div>
        <div className="w-1/2">
        <label htmlFor="house" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="house"
                  name="house"
                  value={house}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select a house</option>
                  {houses.map((house) => (
                    <option key={house.id} value={house.id}>
                      {house.houseRange}
                    </option>
                  ))}
                </select>
    </div>
    </div>
    <div className="mb-5">
        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Date</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="" required />
    </div>


                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {editingTenant ? 'Update Tenant' : 'Add Tenant'}
                            </button>
                            <button type="button" onClick={resetForm} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            )}

                {/* Table */}
                <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Middle Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Contact</th>
                            <th className="px-4 py-2">House</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTenants.map((tenant) => (
                            <tr key={tenant.id} className="border-b">
                                <td className="px-4 py-2">{tenant.fname}</td>
                                <td className="px-4 py-2">{tenant.lname}</td>
                                <td className="px-4 py-2">{tenant.mname}</td>
                                <td className="px-4 py-2 hover:text-blue-700"><a href={`mailto:${tenant.email}`}>{tenant.email}</a></td>
                                <td className="px-4 py-2 hover:text-blue-700"><a href={`tel:${tenant.contact}`}>{tenant.contact}</a></td>
                                <td className="px-4 py-2">{tenant.house}</td>
                                <td className="px-4 py-2">{tenant.date}</td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleEdit(tenant)} className="text-blue-600 hover:text-blue-800">Edit</button>
                                    <button onClick={() => handleDelete(tenant.id)} className="text-red-600 hover:text-red-800 ms-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Tenants;
