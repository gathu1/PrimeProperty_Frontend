import React, { useState } from 'react';
import BASE_URL from './config';
import axios from 'axios';

const Price = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [units, setUnits] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/type/api/price/`, {
                lname,
                fname,
                email,
                contact,
                company,
                units
            });
            console.log('Tenant added:', response.data);
            // Reset form fields
            setFname('');
            setLname('');
            setEmail('');
            setContact('');
            setCompany('');
            setUnits('');
        } catch (error) {
            console.error("Error adding tenant:", error);
        }
    };

    return (
        <>
            <div className="mt-40 mb-60 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 p-4 lg:ml-20 mt-10 lg:mt-20">
                    <h2 className="text-3xl lg:text-4xl">Flexible plans, <br /> transparent <br />pricing</h2>
                    <p className="mt-5">Whether your company is small to mid-size to large — <br />Habitalink offers unique pricing plans designed to help your <br /> business unlock its potential.</p>
                </div>
                <div className="w-full lg:w-1/2 p-4 lg:mr-20 mt-10">
                    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className=" text-2xl text-gray-700 text-xs font-bold mb-2" htmlFor="fname">
                                    First Name
                                </label>
                                <input type="text" id="fname" name='fname' value={fname} onChange={(e) => setFname(e.target.value)} className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-2xl tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lname">
                                    Last Name
                                </label>
                                <input type="text" id="lname" name='lname' value={lname} onChange={(e) => setLname(e.target.value)} className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-2xl tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input type="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-2xl tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact">
                                    Phone Number
                                </label>
                                <input type="tel" id="contact" name='contact' value={contact} onChange={(e) => setContact(e.target.value)} className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-2xl tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
                                    Company Name
                                </label>
                                <input type="text" id="company" name='company' value={company} onChange={(e) => setCompany(e.target.value)} className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-2xl tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="units">
                                    Total Units Managed
                                </label>
                                <input type="number" id="units" name='units' value={units} onChange={(e) => setUnits(e.target.value)} className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onSubmit={handleSubmit}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Price;
