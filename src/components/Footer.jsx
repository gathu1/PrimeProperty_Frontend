import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="w-full bg-blue-900 p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <div className="text-white mb-3 flex">
                    <Link to="/">   <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L3 9.5V21C3 21.5523 3.44772 22 4 22H10V16H14V22H20C20.5523 22 21 21.5523 21 21V9.5L12 2Z" fill="#4A90E2"/>
  <path d="M14 12H16C16.5523 12 17 11.5523 17 11V7C17 6.44772 16.5523 6 16 6H14C13.4477 6 13 6.44772 13 7V11C13 11.5523 13.4477 12 14 12Z" fill="#50E3C2"/>
  <path d="M10 12H8C7.44772 12 7 11.5523 7 11V7C7 6.44772 7.44772 6 8 6H10C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12Z" fill="#50E3C2"/>
  <path d="M12 22H14V16H10V22H12Z" fill="#50E3C2"/>
</svg></Link> 
                        <strong className="text-2xl mt-5">Habitalink</strong>
                    </div>
                    <div className="text-white">
                        <p>Excellence in Every Lease, Convenience in Every Stay.</p>
                    </div>
                    <div className="mt-5 flex space-x-2 text-white">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTelegram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-end lg:space-x-12 text-white">
                    <ul className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-12 text-center lg:text-left">
                        <li>
                            <div className="text-lg font-semibold mb-2">Company</div>
                            <ul className="space-y-1 ">
                                <li className='hover:text-blue-400'>Community</li>
                                <li className='hover:text-blue-400'>Services</li>
                                <li className='hover:text-blue-400'>Email</li>
                            </ul>
                        </li>
                        <li>
                            <div className="text-lg font-semibold mb-2">  &nbsp;  &nbsp;  &nbsp;Features</div>
                            <ul className="space-y-1">
                                <li className='hover:text-blue-400'>Maintenance Management</li>
                                <li className='hover:text-blue-400'>Financial Management</li>
                                <li className='hover:text-blue-400'>Property Management</li>
                            </ul>
                        </li>
                        <li>
                            <div className="text-lg hover:text-accent font-semibold mb-2">Resources</div>
                            <ul className="space-y-1">
                                <li className='hover:text-blue-400'>Social media</li>
                                <li className='hover:text-blue-400'>News blog</li>
                                <li className='hover:text-blue-400'>Brochure</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-8 border-white" />
            <div className="text-center text-white">
                © 2024 InventorySync
            </div>
        </footer>
    );
};

export default Footer;
