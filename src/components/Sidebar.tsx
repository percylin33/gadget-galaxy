import { IoAlbums, IoBarChart, IoBuild, IoExit, IoStorefront } from 'react-icons/io5';

function Sidebar(){
  
    return (
        <div className='bg-plomo h-full overflow-y-scroll '>
            <div className="flex flex-col items-center justify-center p-8 gap-2">
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" alt="imagen" className="w-20 h-20 object-cover rounded-full" />
            </div>
            <h1 className="text-xl font-bold text-center">Percy Valderrama</h1>
        
            <p className="bg-rojo m-auto my-2  rounded-full py-1 px-3 text-center w-24">Pro level</p>
        {/* nav */}
        <nav className='bg-teal-100 p-8 rounded-tr-[100px] h-[70vh]'>

        </nav>
        </div>
    );
}

export default Sidebar;
