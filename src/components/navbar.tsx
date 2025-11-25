"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuth = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo Left */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">Next Auth</Link>
                </div>

                {/* Nav Items Middle */}
                <ul className="hidden md:flex space-x-8 text-lg font-medium">
                    <li><Link href="/" className="text-black hover:text-blue-600">Home</Link></li>
                    <li><Link href="/about" className="text-black hover:text-blue-600">About</Link></li>
                    <li><Link href="/services" className="text-black  hover:text-blue-600">Services</Link></li>
                    <li><Link href="/contact" className="text-black  hover:text-blue-600">Contact</Link></li>
                </ul>

                {/* Right Side — Login / Logout */}
                <div className="flex items-center text-black space-x-2">
                    <SignedOut>
                        <SignInButton mode="modal" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                        {/* <SignOutButton /> */}
                        <Link href="/user-profile">Profile</Link>
                    </SignedIn>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
