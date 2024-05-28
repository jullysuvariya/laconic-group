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

const products = [
    { name: 'Premium Tiles', href: 'https://laconicceramic.com/' },
    { name: 'SPC Vinyl Flooring', href: 'https://www.laconicsurfaces.com/' },
    { name: 'Building Materials', href: '/' },
    { name: 'Paper & Paperboards', href: 'https://www.enrichpapers.com/' },
    { name: 'Biowares & Sustainable Products', href: '/' },
    { name: 'Polypack Products', href: '/' },
    { name: 'Industrial Machinery & Equipments', href: '/' },
    { name: 'Electrical Appliances', href: '/' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isShowingProducts, setIsShowingProducts] = useState(false)

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
                <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12">

                    <Link href="#about" className="text-sm font-semibold leading-6 text-primary hover:text-opacity-60">
                        About
                    </Link>

                    <Popover className="relative">
                        <Popover.Button
                            onMouseEnter={() => setIsShowingProducts(true)}
                            onMouseLeave={() => setIsShowingProducts(false)}
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primary hover:text-opacity-60">
                            Products
                            {/* <FaAngleDown className="h-4 w-4 text-primary" aria-hidden="true" /> */}

                        </Popover.Button>

                        <Transition
                            show={isShowingProducts}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                onMouseEnter={() => setIsShowingProducts(true)}
                                onMouseLeave={() => setIsShowingProducts(false)}
                                className="absolute -left-8 top-full z-10 mt-5 w-72 p-3 rounded-xl bg-white shadow-xl outline outline-gray-50">
                                {products.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-2 px-4 rounded-lg hover:bg-primary hover:bg-opacity-5 text-sm font-medium leading-6 text-primary hover:text-opacity-60"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link href="/conatct" className="text-sm font-semibold leading-6 text-primary hover:text-opacity-60">
                        Contact
                    </Link>

                    <Button as="a" href="tel:919429653388"
                        className="hidden lg:flex lg:flex-row px-4 py-2 text-white rounded-xl bg-primary hover:bg-opacity-75">
                        <MdAddIcCall />
                        CALL US
                    </Button>

                </Popover.Group>

                <span className="relative flex group">
                    <span className="group-hover:animate-ping absolute right-5 left-5 bottom-0 top-0 inline-flex rounded-lg bg-primary opacity-75"></span>
                    <Button as="a" href="tel:919429653388"
                        className="hidden lg:flex lg:flex-row px-4 py-2 text-white rounded-xl bg-primary">
                        <MdAddIcCall />
                        CALL US
                    </Button>
                </span>

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

                                <Link
                                    href="#about"
                                    className="-mx-3 block rounded-lg px-4 py-2 text-base font-medium leading-7 text-primary hover:bg-primary hover:bg-opacity-5 hover:text-opacity-60"
                                >
                                    About
                                </Link>

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between py-2 px-4 text-base font-medium rounded-lg leading-7 text-primary hover:bg-primary hover:bg-opacity-5 hover:text-opacity-60">
                                                Products
                                                <FaAngleDown className={classNames(open ? 'rotate-180' : '', 'flex-none text-xl transition-all text-gray-400')} />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-7 pr-3 text-sm font-medium leading-7 rounded-lg text-primary hover:bg-primary hover:bg-opacity-5 hover:text-opacity-60"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    href="/conatct"
                                    className="-mx-3 block rounded-lg px-4 py-2 text-base font-medium leading-7 text-primary hover:bg-primary hover:bg-opacity-5 hover:text-opacity-60"
                                >
                                    Contact
                                </Link>

                            </div>


                            <div className="py-6">
                                <a
                                    href="tel:919429653388"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-primary hover:bg-opacity-5 hover:text-opacity-60"
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