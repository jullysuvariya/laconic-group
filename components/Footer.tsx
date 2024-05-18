import React from "react";
import {MdLocationOn, MdAddIcCall, MdEmail} from "react-icons/md";
import {FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-8 py-12 sm:py-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:grid lg:grid-cols-6 gap-8">
                    <img
                        className="max-lg:self-center w-1/2 lg:col-span-3"
                        src="/logo.png"
                        alt="Company name"
                    />
                    <div className="lg:col-span-2 px-8">
                        <h3 className="max-lg:text-center font-semibold leading-6 text-gray-900">CONTACT US</h3>
                        <div className="mt-6 space-y-4">
                            {navigation.contact.map((item, index) => (
                                <a href={item.href} target={"_blank"} className="flex flex-row gap-4" key={index}>
                                    {item.icon}
                                    {item.description}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="px-8">
                        <h3 className="max-lg:text-center font-semibold leading-6 text-gray-900">FOLLOW US</h3>
                        <div className="mt-6 flex max-lg:justify-center gap-4">
                            {navigation.social.map((item, index) => (
                                <a href={item.href}
                                   key={index}
                                   target={"_blank"}
                                   className="text-xl text-gray-600 hover:text-gray-900">
                                    {item.icon}
                                </a>
                            ))}
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
            </p>,
            href: "https://maps.app.goo.gl/brrKRHg4xWnQoBX68"
        },
        {
            icon: <MdAddIcCall className="w-5 h-5"/>,
            description: <p className="text-sm">+91 94296 53388</p>,
            href: "tel:919429653388"
        },
        {
            icon: <MdEmail className="w-5 h-5"/>,
            description: <p className="text-sm">info@laconicceramic.com</p>,
            href: "mailto:info@laconicceramic.com"
        },
        {
            icon: <MdEmail className="w-5 h-5"/>,
            description: <p className="text-sm">export@laconicceramic.com</p>,
            href: "mailto:export@laconicceramic.com"
        },
    ],
    social: [
        {icon: <FaFacebookF/>, href: 'https://www.facebook.com/profile.php?id=61555548309435'},
        {icon: <FaWhatsapp/>, href: 'https://wa.me/919429653388?text=I\'m%20interested%20in%20your%20products'},
        {icon: <FaInstagram/>, href: 'https://www.instagram.com/laconic_ceramic'},
        {icon: <FaLinkedinIn/>, href: 'https://www.linkedin.com/company/laconic-ceramics/'},
    ],
}


export default Footer