import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#fff]">
            <div className="footer-top bg-[#FAFAFA] py-8">
                <div className="container">
                    <div className="custom-container">
                        <div className="footersocial-bar flex justify-between">
                            <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
                            <div className="flex items-center space-x-4 text-[#23A6F0]">
                                <a href="#" aria-label="Facebook">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle-area py-8">
                <div className="container">
                    <div className="custom-container">
                        <div className="flex flex-wrap justify-between mb-8">
                            <div className="w-full sm:w-1/2 md:w-1/6 mb-6 space-y-6">
                                <h3 className="text-[16px] font-bold text-[#252B42]">Company Info</h3>
                                <ul className="text-[14px] text-[#737373] font-bold space-y-4">
                                    <li><a href="#" className="hover:text-[#23A6F0]">About Us</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Careers</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">We are hiring</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Blog</a></li>
                                </ul>
                            </div>

                            <div className="w-full sm:w-1/2 md:w-1/6 mb-6 space-y-6">
                                <h3 className="text-[16px] font-bold text-[#252B42]">Legal</h3>
                                <ul className="text-[14px] text-[#737373] font-bold space-y-4">
                                    <li><a href="#" className="hover:text-[#23A6F0]">About Us</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Careers</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">We are hiring</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Blog</a></li>
                                </ul>
                            </div>

                            <div className="w-full sm:w-1/2 md:w-1/6 mb-6 space-y-6">
                                <h3 className="text-[16px] font-bold text-[#252B42]">Features</h3>
                                <ul className="text-[14px] text-[#737373] font-bold space-y-4">
                                    <li><a href="#" className="hover:text-[#23A6F0]">Business Marketing</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">User Analytics</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Live Chat</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a></li>
                                </ul>
                            </div>

                            <div className="w-full sm:w-1/2 md:w-1/6 mb-6 space-y-6">
                                <h3 className="text-[16px] font-bold text-[#252B42]">Resources</h3>
                                <ul className="text-[14px] text-[#737373] font-bold space-y-4">
                                    <li><a href="#" className="hover:text-[#23A6F0]">IOS & Android</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">Customers</a></li>
                                    <li><a href="#" className="hover:text-[#23A6F0]">API</a></li>
                                </ul>
                            </div>

                            <div className="w-full sm:w-1/2 md:w-1/4 mb-6 space-y-6">
                                <h3 className="text-[16px] font-bold text-[#252B42]">Get In Touch</h3>
                                <div className="flex items-center get-in-touchform relative">
                                    <input type="email" placeholder="Your Email" className="py-2 px-4 w-full text-[14px] text-[#737373] font-regular bg-[#F9F9F9] border border-[#737373] rounded-l-md" />
                                    <button className="bg-[#23A6F0] text-white py-2 px-4 rounded-r-md text-sm">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-[12px] font-regular text-[#737373]">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerend bg-[#FAFAFA]">
                <div className="container mx-auto px-8">
                    <div className="custom-container">
                        <div className="text-[14px] text-[#737373] py-8 tracking-[0.2px] font-bold">
                            <p>Made with love by Pakistan. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;