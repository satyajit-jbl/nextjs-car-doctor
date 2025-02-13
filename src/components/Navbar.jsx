import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const navMenu =()=>{
        return (
            <>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/About"}>About</Link></li>
            <li><Link href={"/Services"}>Services</Link></li>
            <li><Link href={"/Blogs"}>Blogs</Link></li>
            <li><Link href={"/Contacts"}>Contacts</Link></li>
                       
            
            </>
        )

    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navMenu()}
                    </ul>
                </div>
                <Link href={"/"} className=" text-xl">
                    <Image src={"/assets/logo.svg"} width={107} height={87}/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu()}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}
