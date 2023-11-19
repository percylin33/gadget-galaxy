"use client"

import Link from "next/link";
import Image from "next/image";
import Button from '@/components/Button';
import { IoMenu, IoCloseCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import logo from '@/access/logo.png'
import { usePathname } from "next/navigation";

interface NavbarProps {
    showNavbar: boolean;
  }

function Navbar()  {
    const pathname = usePathname();
    let linkNav = [
        {name: "Home", link: "/"},
        {name: "Gallery", link: "/gallery"},
        {name: "About", link: "/about"},
        {name: "Dashboard", link: "/dashboard"},
     
    ];
    let [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };
    const buttonProps = <Link href='/login' onClick={closeMenu}>login</Link>;
    let hidden
    if (pathname.includes("/dashboard")) {
        hidden = "hidden"
    } else {
        hidden =""
    }


    return (
        <div className={`shadow-md w-full sticky top-0 left-0 z-30 ${hidden}`}>
            <div className='md:flex bg-nav items-center justify-between py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <Image src={logo} alt="imagen logo" className='w-14 h-14' />
                    <span className='text 3xl text-cyan-500  '>
                        commerce
                    </span>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-plomo text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <IoCloseCircleSharp /> : <IoMenu />}
                </div>
                <ul className={`bg-nav md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-25 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[90px] opacity-100':'top-[-490px] md:opacity-100 opacity-0'} `}>
                    {linkNav.map((li) => (
                        <li key={li.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={closeMenu}>
                            <Link href={li.link} className='text-gris hover:text-gray-400 duration-500 '>{li.name}</Link>
                        </li>
                    ))}
                    
                    <Link href="/shoppingCart">
                        <TiShoppingCart size={30} className='mb-6 md:mb-0  md:ml-6 text-gris' onClick={closeMenu} />
                    </Link>
                    <div onClick={closeMenu}>
                    <Button >
                          login
                    </Button>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
