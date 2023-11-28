import Image from "next/image"
import logo from "@/access/logo.png"
import Link from "next/link"

export default function formPage() {
    return (
      
<div className  =" bg-gris px-8 md:grid md:grid-flow-col lg:ml-8">
  <div className="relative bg-gradient-to-b from-teal-300 via-teal-200 to-teal-100 p-4 rounded-xl md:h-96">
    <div className="flex justify-center pb-8  ">
      <Image src={logo} alt="logo" className="w-20 h-20 md:w-60 md:h-60" />
    </div>
    <div className="absolute inset-x-0 bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
        <path fill="#f4f2f0" fillOpacity ="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,138.7C672,128,768,128,864,133.3C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        
        </path>
      </svg>
    
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-3 md:justify-start">
    <h2 className="font-semibold">Product Creation</h2>
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="Name" className="text-sm font-semibold text-gray-600">Name:</label>
        <input type="text" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Brand" className="text-sm font-semibold text-gray-600">Brand:</label>
        <input type="text" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div className="flex flex-col gap-1">
    <label htmlFor="Category" className="text-sm font-semibold text-gray-600">Category:</label>
        <input type="text" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Image" className="text-sm font-semibold text-gray-600">Image:</label>
        <input type="text" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Price" className="text-sm font-semibold text-gray-600">Price:</label>
        <input type="text" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Description" className="text-sm font-semibold text-gray-600">Description:</label>
        <textarea  className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
      </div>
  
      <button type="submit" className="bg-teal-500 text-white font-semibold rounded-lg py-2 my-4 px-4 hover:bg-teal-600 transition duration-300 ease-in-out">
        Submit
      </button>
    </form>

  </div>
</div>
      
    )
  }
  