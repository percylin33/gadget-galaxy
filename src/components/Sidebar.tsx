'use client'

import {useState} from 'react'
import { IoAlbums, IoBarChart, IoBuild, IoEllipsisVerticalCircleSharp, IoStorefront, IoBook, IoPeople, IoCloseCircle } from 'react-icons/io5';
import Link from 'next/link';
import logo from "@/access/logo.png"
import Image from 'next/image';

function Sidebar(){
       const [showMenu, setShowMenu] = useState(true);
    return (
    <>
    <div className={`bg-gradient-to-b from-plomo to-teal-100 h-[100vh] fixed lg:sticky top-0 w-[80%] md:w-[40%] lg:w-64 transition-all duration-300 z-20  ${showMenu ? "left-0" : "-left-full" }`}>
        <div className='h-[32%]'>
            <div className="flex flex-col items-center mt-3 justify-center p-8 py-4 gap-2 h-[15vh]">
                <Image src={logo} alt="imagen" 
                className="w-20 h-20 object-cover rounded-full " />
            </div>
            <h1 className="text-xl font-bold text-center my-2 text-gray-900">Percy Valderrama</h1>
        
            <p className="bg-rojo m-auto my-4  rounded-full  py-1 px-3 text-center w-24 text-white">Pro level</p>
        </div>
        {/* nav */}
        <div className='bg-teal-100 p-6 rounded-tr-[100px] h-[68%]  flex flex-col  justify-between  gap-8'>
        <nav className='flex flex-col gap-4 text-gray-900'>
            <Link href='/dashboard' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoStorefront />Store
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoBarChart />Graphic
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoAlbums />Sales
            </Link>
            <Link href='/dashboard/form' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoBook />Forms
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoPeople />Users
            </Link>

        </nav>
        <div className='bg-plomo/50 p-2 rounded-xl'>
            <p className='text-center text-gray-800'>Having Problems ?</p>
            <Link href='#'> <p className='text-sm text-center font-bold text-gray-900'>Contact Us</p></Link>

        </div>
        </div>
    </div>
    {/* boton movil */}
    <button onClick={()=> setShowMenu(!showMenu)} className='fixed right-4 bottom-4 text-4xl lg:hidden z-20 text-gray-900'>
        {showMenu ? <IoCloseCircle /> : <IoEllipsisVerticalCircleSharp /> }
       
    </button>
    </>
    );
}

export default Sidebar;
