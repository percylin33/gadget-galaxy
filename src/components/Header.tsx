import Link from "next/link";
import {IoSearch} from 'react-icons/io5';

function Header() {
  
    return (
        <header className="flex flex-col items-center justify-between md:flex-row gap-4 p-8 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold">🤗Good morning, <span className="text-rojo">Percy</span>
            </h1>
            <form className="w-full md:w-auto" >
                <div className="relative">
                    <IoSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
                    <input type="text"
                    className="bg-plomo outline-none py-2 pl-8 pr4 rounded-xl w-full md:w-auto"
                    placeholder="Search for Product"
                    />
                </div>
            </form>     
        </header>
    );
}

export default Header;
