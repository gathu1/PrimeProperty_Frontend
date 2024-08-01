import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'; // Importing icons
import BASE_URL from './config';
import axios from 'axios';

const Payments = () => {
   const [payment, setPayment] = useState([]);
   const [tenant, setTenant] = useState('');
   const [invoice, setInvoice] = useState('');
   const [amount, setAmount] = useState('');
   const [editingPayment, setEditingPayment] = useState(null);
   const [isSidebarReduced, setIsSidebarReduced] = useState(false);

   useEffect(() => {
      fetchPayment();
   }, []);

   const fetchPayment = async () => {
      try {
         const response = await axios.get(`${BASE_URL}/type/api/payment/`);
         console.log('API response:', response.data); // Debugging: log API response
         setPayment(response.data);
      } catch (error) {
         console.error("There was an error fetching the payments!", error);
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${BASE_URL}/type/api/payment/`, {
              tenant,
              invoice,
              amount,
          });
          console.log('Payment added:', response.data);
          fetchPayment(); // Refresh the tenant list after adding
          // Reset form fields
          setTenant('');
          setInvoice('');
          setAmount('');
      } catch (error) {
          console.error("Error adding payment:", error);
      }
   };

   const handleEdit = (house) => {
      setEditingPayment(house);
      setTenant(house.tenant);
      setInvoice(house.invoice);
      setAmount(house.amount);
   };

   const handleDelete = async (id) => {
      if (window.confirm('Are you sure you want to delete this payment?')) {
         try {
            await axios.delete(`${BASE_URL}/type/api/payment/${id}/`);
            fetchPayment();
         } catch (error) {
            console.error("Error deleting payment:", error);
         }
      }
   };

   // const handleUpdate = async (id) => {
   //    try {
   //        const response = await axios.put(`http://127.0.0.1:8000/type/api/payment/${id}/`, {
   //            tenant,
   //            invoice,
   //            amount,
   //        });
   //        console.log('Payment updated:', response.data);
   //        fetchPayment(); // Refresh the tenant list after updating
   //        // Reset form fields or update state as needed
   //    } catch (error) {
   //        console.error("Error updating house:", error);
   //    }
   // };
  
   const resetForm = () => {
      setTenant('');
      setInvoice('');
      setAmount('');
      setEditingPayment(null);
   };

const toggleSidebarSize = () => {
    setIsSidebarReduced(!isSidebarReduced);
  };

   return (
      <>
         <div className="flex flex-col sm:flex-row">
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
    <h1 className="text-3xl font-bold">PAYMENTS</h1></div>
    <div className={`flex-grow p-4 transition-all duration-300 ease-in-out ${isSidebarReduced ? 'ml-20' : 'ml-64'}`}>
            

               <div className="p-4 ml-40">
                     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-sm mr-60 mt-40">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                           <div className="flex-1">
                              <label htmlFor="tenant" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tenant</label>
                              <input
                                 type="text"
                                 id="tenant"
                                 value={tenant}
                                 onChange={(e) => setTenant(e.target.value)}
                                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                              />
                           </div>
                           <div className="flex-1 mt-4 md:mt-0">
                              <label htmlFor="invoice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Invoice</label>
                              <input
                                 type="text"
                                 id="invoice"
                                 value={invoice}
                                 onChange={(e) => setInvoice(e.target.value)}
                                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                              />
                           </div>
                        </div>
                        <div>
                           <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Amount</label>
                           <input
                              type="number"
                              id="amount"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                           />
                        </div>
                        <div className="flex justify-end space-x-4">
                           <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-green-600">Save</button>
                           <button type="button" onClick={resetForm} className="px-4 py-2 bg-red-700 text-white rounded hover:bg-gray-600">Cancel</button>
                        </div>
                     </form>
                  
                  <div className="mt-8 bg-white mr-60 p-6 rounded ">
                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">Payments List</h3>
                     <table className="w-full mt-4 table-auto">
                        <thead>
                           <tr className="bg-gray-100 dark:bg-gray-700 text-left text-sm font-medium text-gray-900 dark:text-white">
                              <th className="p-2">Tenant</th>
                              <th className="p-2">Invoice</th>
                              <th className="p-2">Amount</th>
                              <th className="p-2">Actions</th>
                           </tr>
                        </thead>
                        <tbody>
                           {payment.map((p) => (
                              <tr key={p.id} className="border-b dark:border-gray-700">
                                 <td className="p-2">{p.tenant}</td>
                                 <td className="p-2">{p.invoice}</td>
                                 <td className="p-2">{p.amount}</td>
                                 <td className="p-2">
                                    <button onClick={() => handleEdit(p)} className="px-4 py-2 text-blue-600 rounded ">Edit</button>
                                    <button onClick={() => handleDelete(p.id)} className="px-4 py-2 ms-2 text-red-600 rounded ">Delete</button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Payments;
