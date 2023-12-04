"use client"
import Image from "next/image"
import logo from "@/access/logo.png"
import axios from "axios"
import React, { useState, useEffect } from 'react';
import Toast from "@/components/toast";

export default function FormPage() {

  const [name, setName] =useState("")
  const [brand, setBrand] =useState("")
  const [category, setCategory] =useState("")
  const [image, setImage] =useState("")
  const [price, setPrice] =useState(0)
  const [description, setDescription] =useState("")
  
  const [productCreated, setProductCreated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setProductCreated(false); // Reset product creation status to false
    }, 3000);
  }, [productCreated]);

  const handleSubmit = async (event: any)=>{
      event.preventDefault()
      
      const productData ={
        name,
        brand,
        category,
        image,
        price,
        description,
      }
      
    try {
      const response = await axios.post('/api/product', productData);
      console.log("Product created successfully:", response.data);
      const form: HTMLFormElement | null = document.querySelector("#form-product");
      form?  form.reset(): ""
      
      setProductCreated(true);  
      
    } catch (error) {
      console.error("Error creating product:" );

    }
  }

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
    {productCreated && <Toast message="Product created successfully!" />}

    <form onSubmit={handleSubmit} id="form-product" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-semibold text-gray-600">Name:</label>
        <input type="text" placeholder="Please enter the name" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onChange={(e)=>{setName(e.target.value)}} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="brand" className="text-sm font-semibold text-gray-600">Brand:</label>
        <input type="text" placeholder="Please enter the brand" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onChange={(e)=>{setBrand(e.target.value)}}/>
      </div>

      <div className="flex flex-col gap-1">
    <label htmlFor="category" className="text-sm font-semibold text-gray-600">Category:</label>
        <input type="text" placeholder="Please enter the category" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onChange={(e)=>{setCategory(e.target.value)}}/>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="image" className="text-sm font-semibold text-gray-600">Image:</label>
        <input type="text" placeholder="Please enter the image" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onChange={(e)=>{setImage(e.target.value)}}/>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="price" className="text-sm font-semibold text-gray-600">Price:</label>
        <input type="text" placeholder="Please enter the price" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onChange={(e)=>{setPrice(Number(e.target.value))}}/>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-semibold text-gray-600">Description:</label>
        <textarea placeholder="Please enter the description" className="rounded-lg py-1 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
      </div>
  
      <button type="submit" className="bg-teal-500 text-white font-semibold rounded-lg py-2 my-4 px-4 hover:bg-teal-600 transition duration-300 ease-in-out">
        Submit
      </button>
    </form>
  </div>
</div>
      
    )
  }
  