'use client'
import React from 'react';
import Link from 'next/link';
import Logo from "@/assets/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Navbar = () => {


    const navItems = [
        {
            path: '/',
            text: "Home"
        },
        {
            path: '/apps',
            text: "Apps"
        },
        {
            path: '/installation',
            text: "Installation"
        },
        {
            path: '/dashboard',
            text: "dashboard"
        },
    ]

    const pathName = usePathname();
    return (
        <div className=' bg-base-100 shadow-sm'>
             <div className="navbar  container mx-auto bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu gap-2 menu-sm text-xs dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {/* nav items */}
                        {
                            navItems.map((navItem, index) => {
                                const isActive = pathName === navItem.path;
                                return (<li key={index}>
                                    <Link className={`hover:text-green-800 ${isActive? "text-green-700 border-2    font-bold": ""}`} href={navItem.path} >
                                        {navItem.text}</Link>
                               </li> )}                          )
                        }
      </ul>
    </div>
                   <Image src={Logo} loading='eager' alt="logo" width={50} height={50}></Image>              
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5 text-base font-semibold ">
     {/* nav items */}
                        {
                            navItems.map((navItem, index) => {
                                const isActive = pathName === navItem.path;
                                return (<li key={index}>
                                    <Link className={`hover:text-green-800 ${isActive? "text-green-700 border-b-2 rounded-none font-bold": ""}`} href={navItem.path} >
                                        {navItem.text}</Link>
                                </li>)
                            }     
                        )
                        }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-info ">🤍 Contribute</a>
  </div>
</div>
        </div>
      
    );
};

export default Navbar;