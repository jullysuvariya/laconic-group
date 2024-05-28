import React, { useState } from "react";
import { Dialog } from '@headlessui/react'
import { Button } from "@nextui-org/button";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { motion } from "framer-motion";

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky lg:fixed top-0 left-0 right-0 z-50 bg-white">
            <nav className="mx-auto flex px-8 lg:px-64 items-center justify-between p-6" aria-label="Global">
                <a href="#" className="">
                    <span className="sr-only">Laconic Group of Companies</span>
                    <img className="h-10 lg:h-14 w-auto" src="/logo.png" alt="" />
                </a>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center text-primary justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FaBars className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-primary hover:text-opacity-60">
                            {item.name}
                        </a>
                    ))}
                    {/* <span className="relative flex">
                        <span className="animate-ping absolute inline-flex h-10 w-14 rounded-xl bg-primary opacity-75 "></span>
                        // <span className="relative inline-flex rounded-xl h-10 w-14 bg-primary"></span>
                        <span
                            // href="tel:919429653388"
                            className="relative inline-flex lg:flex lg:flex-row px-4 py-2 text-white rounded-xl bg-primary items-center overflow-hidden"
                        >
                            <a href="tel:919429653388">
                                <MdAddIcCall />
                                CALL US
                            </a>
                        </span>
                    </span> */}

                    <Button as="a" href="tel:919429653388"
                        className="hidden lg:flex lg:flex-row px-4 py-2 text-white rounded-xl bg-primary hover:bg-opacity-75">
                        <MdAddIcCall />
                        CALL US
                    </Button>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-10 w-auto"
                                src="/logo.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FaXmark className="h-6 w-6 text-primary" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="tel:919429653388"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-gray-50"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
export default Header