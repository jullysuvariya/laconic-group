import React from "react";
import { MdLocationOn, MdAddIcCall, MdEmail } from "react-icons/md";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto px-10 lg:px-32 pt-14 lg:pt-20 max-lg:pb-4">
                <div className="flex flex-col lg:grid lg:grid-cols-6 gap-12 lg:gap-8">
                    <img
                        className="self-center w-6/12 lg:col-span-3"
                        src="/logo.png"
                        alt="Company name"
                    />
                    <div className="lg:col-span-2 px-8">
                        <h3 className="max-lg:text-center font-bold leading-6 text-primary">CONTACT US</h3>
                        <div className="mt-4 space-y-3">
                            {navigation.contact.map((item, index) => (
                                <a href={item.href} target={"_blank"} className="flex flex-row gap-4 items-center hover:text-primary" key={index}>
                                    {item.icon}
                                    {item.description}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="max-lg:text-center font-bold leading-6 text-primary">FOLLOW US</h3>
                        <div className="mt-6 flex max-lg:justify-center gap-4">
                            {navigation.social.map((item, index) => (
                                <a href={item.href}
                                    key={index}
                                    target={"_blank"}
                                    className="text-xl hover:text-primary">
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center p-12 lg:px-32 gap-4 text-xs from-transparent to-gray-300 bg-gradient-to-b">
                <p>© 2024 Laconic Group</p>
                <div className="flex">
                    <p>Developed by:</p>&nbsp;&nbsp;
                    <Link
                        className="flex items-center gap-2 hover:text-primary"
                        href="https://www.linkedin.com/in/rajsuvariya/">
                        Raj Suvariya
                    </Link>
                </div>

                {/* <div className="flex flex-col lg:flex-row items-center lg:gap-2 gap-1">
                    <p>Developed by: </p>

                    <div className="flex gap-2">
                        <Link
                            className="flex items-center gap-2 hover:text-primary"
                            href="https://www.linkedin.com/in/jully-suvariya-9b632023b/">
                            Jully Suvariya
                        </Link>
                        <p>&</p>
                        <Link
                            className="flex items-center gap-2 hover:text-primary"
                            href="https://www.linkedin.com/in/rajsuvariya/">
                            Raj Suvariya
                        </Link>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

const navigation = {
    contact: [
        {
            icon: <MdLocationOn className="flex-shrink-0 w-5 h-5" />,
            description: <p className="text-sm">
                <strong>Corporate Office</strong> 525, Nakshtra VIII, Sadhu Vasvani Road, Rajkot - 360005, Gujarat, India.
            </p>,
            href: "https://maps.app.goo.gl/brrKRHg4xWnQoBX68"
        },
        {
            icon: <MdAddIcCall className="flex-shrink-0 w-5 h-5" />,
            description: <p className="text-sm">+91 94296 53388</p>,
            href: "tel:919429653388"
        },
        {
            icon: <MdAddIcCall className="flex-shrink-0 w-5 h-5" />,
            description: <p className="text-sm">+91 96017 03388</p>,
            href: "tel:919601703388"
        },
        {
            icon: <MdEmail className="flex-shrink-0 w-5 h-5" />,
            description: <p className="text-sm">info@laconicgroup.in</p>,
            href: "mailto:info@laconicgroup.in"
        },
        {
            icon: <MdEmail className="flex-shrink-0 w-5 h-5" />,
            description: <p className="text-sm">sales@laconicgroup.in</p>,
            href: "mailto:sales@laconicgroup.in"
        },
        {
            icon: <MdEmail className="flex-shrink-0 w-5 h-5" />,
            description: <p className="text-sm">export@laconicgroup.in</p>,
            href: "mailto:export@laconicgroup.in"
        },
    ],
    social: [
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/profile.php?id=61555548309435' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/919429653388?text=I\'m%20interested%20in%20your%20products' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/laconic_ceramic' },
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/laconic-ceramics/' },
    ],
}


export default Footer