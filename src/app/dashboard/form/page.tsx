import Image from "next/image"
import logo from "@/access/logo.png"
import Link from "next/link"

export default function formPage() {
    return (
      
        <div className  ="h-screen bg-gris px-8 md:flex  md:items-start md:justify-center">
  <div className    =" h-[30%] bg-nav border-bottom-style-wavy border-bottom-color-ccc border-bottom-image-linear-gradient-to-bottom-from-ccc-to-transparent">
    <Image src={logo} alt="logo" className="w-20 h-20" />
  </div>
  <div className    ="flex flex-col items-center justify-center gap-2">
    <h2>Product Creation</h2>
    <form action="" className="flex flex-col gap-4">
      <label htmlFor="Name">Name:</label>
      <input type="text" />

      <label htmlFor="Brand ">Brand :</label>
      <input type="text" />

      <label htmlFor="Category">Category:</label>
      <input type="text" />

      <label htmlFor="Image">Image:</label>
      <input type="text" />

      <label htmlFor="Price">Price:</label>
      <input type="text" />

      <label htmlFor="Description">Description:</label>
    </form>
  </div>
</div>
      
    )
  }
  