import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login status
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    const toggleDrop = () => {
        setDropOpen(!dropOpen);
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSignout = () => {
        localStorage.removeItem('accessToken'); // Clear token on logout
        localStorage.removeItem('userRole'); // Clear role on logout
        setIsLoggedIn(false);
        setUserRole(null);
        navigate('/');
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const role = localStorage.getItem('userRole'); // Retrieve role from localStorage
        setIsLoggedIn(!!token); // Set login status based on token presence
        setUserRole(role);

    }, []);

    const dashboardLink = userRole === 'admin' ? '/dash' : '/vacant';


    return (
        <header>
            <nav className='bg-blue-800 shadow-md mb-10 py-3 fixed top-0 left-0 w-full flex flex-col items-center justify-center z-10'>
                <div className='container mx-auto flex justify-between items-center px-4 md:px-10'>
            <Link to="/">   <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L3 9.5V21C3 21.5523 3.44772 22 4 22H10V16H14V22H20C20.5523 22 21 21.5523 21 21V9.5L12 2Z" fill="#4A90E2"/>
  <path d="M14 12H16C16.5523 12 17 11.5523 17 11V7C17 6.44772 16.5523 6 16 6H14C13.4477 6 13 6.44772 13 7V11C13 11.5523 13.4477 12 14 12Z" fill="#50E3C2"/>
  <path d="M10 12H8C7.44772 12 7 11.5523 7 11V7C7 6.44772 7.44772 6 8 6H10C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12Z" fill="#50E3C2"/>
  <path d="M12 22H14V16H10V22H12Z" fill="#50E3C2"/>
</svg></Link> 


                    <ul className="hidden md:flex justify-center items-center space-x-4 lg:space-x-10 flex-grow mx-4 lg:mx-10">
                        <li>
                            <Link to="/" className='text-white transition duration-300 ease-in-out font-bold'>Home</Link>
                        </li>
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className=" text-white transition duration-300 ease-in-out font-bold focus:outline-none"
                            >
                                Markets
                            </button>
                            {dropdownOpen && (
                                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                                    {['single-family', 'multifamily', 'studenthousing', 'affordablehousing', 'communityassociations', 'commercial', 'investmentmanagement'].map(path => (
                                        <Link
                                            key={path}
                                            to={`/${path}`}
                                            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                        >
                                            {path.replace(/-/g, ' ')}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/about" className='text-white transition duration-300 ease-in-out font-bold'>Why Habitalink</Link>
                        </li>
                        <li>
                            <Link to="/price" className='text-white transition duration-300 ease-in-out font-bold'>Pricing</Link>
                        </li>
                    </ul>

                    <div className='hidden md:flex space-x-4'>
                        {isLoggedIn ? (
                            <>
                                <Link to={dashboardLink} className='text-white transition duration-300 ease-in-out font-bold'>Dash</Link>
                                <button
                                    onClick={handleSignout}
                                    className="hover:underline text-white transition duration-300 ease-in-out font-bold"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <li className="relative">
                                <button
                                    onClick={toggleDrop}
                                    className="text-white transition duration-300 ease-in-out font-bold focus:outline-none"
                                >
                                    Login
                                </button>
                                {dropOpen && (
                                    <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                                        <Link
                                            to="/login"
                                            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                        >
                                            Manager Login
                                        </Link>
                                        <Link
                                            to="/logint"
                                            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                        >
                                            Tenant Login
                                        </Link>
                                    </div>
                                )}
                            </li>
                        )}
                        <Link to="/contact" className='text-white transition duration-300 ease-in-out font-bold'>Contact</Link>
                    </div>

                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-indigo-500 w-full">
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            <li>
                                <Link to="/" className='text-white transition duration-300 ease-in-out font-bold' onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-white transition duration-300 ease-in-out font-bold focus:outline-none"
                                >
                                    Markets
                                </button>
                                {dropdownOpen && (
                                    <div className="mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                                        {['single-family', 'multifamily', 'studenthousing', 'affordablehousing', 'communityassociations', 'commercial', 'investmentmanagement'].map(path => (
                                            <Link
                                                key={path}
                                                to={`/${path}`}
                                                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                                onClick={toggleMenu}
                                            >
                                                {path.replace(/-/g, ' ')}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link to="/about" className='text-white transition duration-300 ease-in-out font-bold' onClick={toggleMenu}>Why Habitalink</Link>
                            </li>
                            <li>
                                <Link to="/price" className='text-white transition duration-300 ease-in-out font-bold' onClick={toggleMenu}>Pricing</Link>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li>
                                    <Link to={dashboardLink} className='text-white transition duration-300 ease-in-out font-bold'>Dash</Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleSignout}
                                            className="text-white transition duration-300 ease-in-out font-bold"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="text-white transition duration-300 ease-in-out font-bold focus:outline-none"
                                    >
                                        Login
                                    </button>
                                    {dropdownOpen && (
                                        <div className="mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                                            <Link
                                                to="/login"
                                                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                                onClick={toggleMenu}
                                            >
                                                Manager Login
                                            </Link>
                                            <Link
                                                to="/logint"
                                                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                                onClick={toggleMenu}
                                            >
                                                Tenant Login
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            )}
                            <li>
                                <Link to="/contact" className='text-white transition duration-300 ease-in-out font-bold' onClick={toggleMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
