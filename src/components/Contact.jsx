import React, { useState } from 'react';
import BASE_URL from './config';
import axios from 'axios';

const Contact = () => {
    const [yname, setYname] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/type/api/contact/`, {
                yname,
                email,
                department,
                contact,
                company,
            });
            console.log('House added:', response.data); // Refresh the tenant list after adding
            // Reset form fields
            setYname('');
            setEmail('');
            setDepartment('');
            setContact('');
            setCompany('');
            
        } catch (error) {
            console.error("Error adding house:", error);
        }
    };

    return (
        <>
            <div className="mb-20 flex flex-col lg:flex-row items-center bg-gradient-to-b from-[#1E40AF] to-[#FFFFFF] text-white h-full lg:h-screen">
                <div className="w-full lg:w-1/2 p-4 lg:ml-20 mt-10 lg:mt-20">
                    <h2 className="text-3xl lg:text-4xl">Contact Us</h2>
                    <p className="mt-5">Learn how DoorLoop can help you. We’ll get back to you within 24 hours guaranteed.</p>
                    <p className="mt-20">"My favorite DoorLoop feature is how easy it is for us to collect rent and for tenants to pay their rent. It's painless, quick, fast, to the point."</p>
                </div>
                <section className="bg-gray-50 dark:bg-gray-900 rounded-lg mt-10 lg:mt-0 p-6 lg:p-10 lg:ml-10 w-full lg:w-1/2">
                    <form className="max-w-lg mx-auto" onSubmit={handleSubmit} >
                        <div className="mb-5">
                            <label htmlFor="yname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" id="yname" name='yname' value={yname} onChange={(e) => setYname(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Work Email</label>
                            <input type="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                            <input type="tel" id="contact" name='contact' value={contact} onChange={(e) => setContact(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                            <select id="department" name='department' value={department} onChange={(e) => setDepartment(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                <option value="#">Select one...</option>
                                <option value="sales">Sales</option>
                                <option value="support">Support</option>
                                <option value="marketing">Marketing</option>
                                <option value="career">Careers</option>
                                <option value="partnership">Partnerships</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input type="text" id="company" name='company' value={company} onChange={(e) => setCompany(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> send </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Contact;
