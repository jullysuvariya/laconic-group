import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import React from "react";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import Image from "next/image";


const Header = () => {
    return (
        <Navbar className="fixed top-0 z-10 bg-white py-6 px-32 w-full">
            <NavbarBrand>
                <Image alt="laconic brand logo" src="/logo.png" height={124} width={256}/>
            </NavbarBrand>
            <NavbarContent justify="end" className="hidden sm:flex gap-8 text-primary">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex px-6 py-3 text-white rounded-xl bg-primary">
                    <Link href="#">CALL US</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
export default Header