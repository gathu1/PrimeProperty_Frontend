import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full bg-blue-900 p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <div className="text-white mb-3">
                        <strong className="text-2xl">Habitalink</strong>
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
