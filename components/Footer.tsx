import React from "react";
import {MdLocationOn, MdAddIcCall, MdEmail} from "react-icons/md";
import {FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-8 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-6 xl:gap-8">
                    <img
                        className="w-1/2 xl:col-span-3"
                        src="/logo.png"
                        alt="Company name"
                    />
                    <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-3 xl:mt-0">
                        <div className="col-span-2 px-8">
                            <div className="mt-10 md:mt-0 ">
                                <h3 className="font-semibold leading-6 text-gray-900">CONTACT US</h3>
                                <div className="mt-6 space-y-4">
                                    {navigation.contact.map((item, index) => (
                                        <div className="flex flex-row gap-4" key={index}>
                                            {item.icon}
                                            {item.description}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="px-8">
                            <div>
                                <h3 className="font-semibold leading-6 text-gray-900">FOLLOW US</h3>
                                <div className="mt-6 flex gap-4">
                                    {navigation.social.map((item, index) => (
                                        <a href={item.href}
                                           key={index}
                                           className="text-xl text-gray-600 hover:text-gray-900">
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const navigation = {
    contact: [
        {
            icon: <MdLocationOn className="w-8 h-8"/>,
            description: <p className="text-sm">
                <strong>Corporate Office</strong> 525, Nakshtra VIII, Sadhu Vasvani Road, Rajkot - 360005.
            </p>
        },
        {icon: <MdAddIcCall className="w-5 h-5"/>, description: <p className="text-sm">+91 94296 53388</p>},
        {icon: <MdEmail className="w-5 h-5"/>, description: <p className="text-sm">info@laconicceramic.com</p>},
        {icon: <MdEmail className="w-5 h-5"/>, description: <p className="text-sm">export@laconicceramic.com</p>},
    ],
    social: [
        {icon: <FaFacebookF/>, href: '#'},
        {icon: <FaWhatsapp/>, href: '#'},
        {icon: <FaInstagram/>, href: '#'},
        {icon: <FaLinkedinIn/>, href: '#'},
    ],
}


export default Footer