'use client'

import {useState} from 'react'
import { IoAlbums, IoBarChart, IoBuild, IoEllipsisVerticalCircleSharp, IoStorefront, IoBook, IoPeople, IoCloseCircle } from 'react-icons/io5';
import Link from 'next/link';

function Sidebar(){
       const [showMenu, setShowMenu] = useState(true);
    return (
    <>
    <div className={`bg-gradient-to-b from-plomo to-teal-100 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all duration-300   ${showMenu ? "left-0" : "-left-full" }`}>
            <div className="flex flex-col items-center justify-center p-8 py-4 gap-2 h-[15vh]">
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" alt="imagen" 
                className="w-20 h-20 object-cover rounded-full " />
            </div>
            <h1 className="text-xl font-bold text-center">Percy Valderrama</h1>
        
            <p className="bg-rojo m-auto my-2  rounded-full py-1 px-3 text-center w-24 text-white">Pro level</p>
        {/* nav */}
        <div className='bg-teal-100 p-6 rounded-tr-[100px] h-[66vh] md:h-[66vh] lg:h-[74vh] flex flex-col  justify-between overflow-y-scroll gap-8'>
        <nav className='flex flex-col gap-4'>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoStorefront />Store
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoBarChart />Graphic
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoAlbums />Sales
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoBook />Forms
            </Link>
            <Link href='#' className='flex items-center gap-4 py-2 px-2 rounded-xl hover:bg-plomo/50 transition-colors'>
                <IoPeople />Users
            </Link>

        </nav>
        <div className='bg-plomo/50 p-2 rounded-xl'>
            <p className='text-center text-gray-800'>Having Problems ?</p>
            <Link href='#'> <p className='text-sm text-center font-bold'>Contact Us</p></Link>

        </div>
        </div>
    </div>
    {/* boton movil */}
    <button onClick={()=> setShowMenu(!showMenu)} className='fixed right-4 bottom-4 text-4xl lg:hidden'>
        {showMenu ? <IoCloseCircle /> : <IoEllipsisVerticalCircleSharp /> }
       
    </button>
    </>
    );
}

export default Sidebar;
