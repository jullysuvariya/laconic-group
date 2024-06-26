import React, { Fragment, useState } from "react";
import { Button } from "@nextui-org/button";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Link from "next/link";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const BiowareHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky lg:fixed top-0 left-0 right-0 z-30 bg-white">
            <nav className="mx-auto flex px-8 lg:px-64 items-center justify-between p-6" aria-label="Global">
                <Link href="/bioware/bioware_home">
                    <span className="sr-only">Laconic Biowares</span>
                    <img className="h-10 lg:h-14 w-auto" src="/logo_LaconicBiowaresGreen.png" alt="" />
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center text-primary2 justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FaBars className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12">

                    <Link href="/" className="text-sm font-semibold leading-6 text-primary2 hover:text-opacity-60 transform transition-transform hover:-translate-y-1 hover:scale-105">
                        Home
                    </Link>

                    <Link href="/bioware/about_us" className="text-sm font-semibold leading-6 text-primary2 hover:text-opacity-60 transform transition-transform hover:-translate-y-1 hover:scale-105">
                        About
                    </Link>

                    <Link href="/bioware/contact_us" className="text-sm font-semibold leading-6 text-primary2 hover:text-opacity-60 transform transition-transform hover:-translate-y-1 hover:scale-105">
                        Contact
                    </Link>

                    <Button as="a" href="tel:919429653388"
                        className="hidden lg:flex lg:flex-row px-4 py-2 text-white rounded-xl bg-primary2 hover:bg-opacity-75 transform transition-transform hover:-translate-y-1 hover:scale-105">
                        <MdAddIcCall />
                        CALL US
                    </Button>

                </Popover.Group>
            </nav>

            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} as="div">
                <div className="fixed inset-0 z-30" />
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/bioware/bioware_home" className="-m-1.5 p-1.5">
                            <span className="sr-only">Laconic Biowares</span>
                            <img
                                className="h-10 w-auto"
                                src="/logo_LaconicBiowaresGreen.png"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-primary2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FaXmark className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link
                                    href="/"
                                    className="-mx-3 block rounded-lg px-4 py-2 text-base font-medium leading-7 text-primary2 hover:bg-primary2 hover:bg-opacity-5 hover:text-opacity-60"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>


                                <Link
                                    href="/bioware/about_us"
                                    className="-mx-3 block rounded-lg px-4 py-2 text-base font-medium leading-7 text-primary2 hover:bg-primary2 hover:bg-opacity-5 hover:text-opacity-60"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>

                                <Link
                                    href="/bioware/contact_us"
                                    className="-mx-3 block rounded-lg px-4 py-2 text-base font-medium leading-7 text-primary2 hover:bg-primary2 hover:bg-opacity-5 hover:text-opacity-60"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>

                            </div>


                            <div className="py-6">
                                <a
                                    href="tel:919429653388"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary2 hover:bg-primar hover:bg-opacity-5 hover:text-opacity-60"
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
export default BiowareHeader