"use client"
import Image from "next/image"
import logo from "@/access/logo.png"
import axios from "axios"
import React, { useState, useEffect } from 'react';
import Toast from "@/components/toast";
import Loading from "@/components/Loading";
import { SubmitHandler, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema, mappedCategory } from "@/validations/productSchema";


type inputs = {
  name: string
  brand: string
  category: string
  image: string[]
  price: string
  description: string
}

export default function FormPage() {

  const [imagesSelected, setImagesSelected] = useState<File[]>([])
  const [prev, setPrev] = useState<string[]>([]);
  const [productCreated, setProductCreated] = useState(false);
  const [loading, setLoading]= useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setProductCreated(false); // Reset product creation status to false
    }, 3000);
  }, [productCreated]);

  const { register, handleSubmit,reset , formState: { errors } } = useForm<inputs>({
    resolver: zodResolver(productSchema)
  });

  const categoryOptions = Object.entries(mappedCategory).map(([key, value]) => (
    <option value={key} key={key}>{value}</option>
  ))

  const onSubmit: SubmitHandler<inputs> = async (data) => {
         setLoading(true)
    const formData = new FormData()
    var response: any
    try {
      if (imagesSelected) {
        for (let index = 0; index < imagesSelected.length; index++) {
          let file = imagesSelected[index];
          formData.append(`file`, file);
        }
        response = await axios.post('/api/image', formData);
      }
      const product = {
        name: data.name,
        brand: data.brand,
        category: data.category,
        image: response.data.urls,
        price: Number(data.price),
        description: data.description
      }
      const creadoProduct = await axios.post('/api/product', product);
      setLoading(false)
      setProductCreated(true);
      setImagesSelected([])
      setPrev([])
      reset()
    } catch (error) {
      setLoading(false)
      alert("Error creating product")
    }

  }

  return (

    <div className=" bg-gris px-8 md:grid md:grid-flow-col lg:ml-8">
      <div className="relative bg-gradient-to-b from-teal-300 via-teal-200 to-teal-100 p-4 rounded-xl md:h-min">
        {
          !prev.length ? (
            <div>
              <div className="flex justify-center pb-16">
                <Image src={logo} alt="logo" className="w-20 h-20 md:w-60 md:h-60" />
              </div>
              <div className="absolute inset-x-0 bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#f4f2f0"
                    fillOpacity="1"
                    d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,138.7C672,128,768,128,864,133.3C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
            <div className={`grid ${prev.length > 4 ? "grid-cols-3" : "grid-cols-2"} grid-cols-2 gap-2 justify-items-center `}>
              {prev.map((image, index) => (
                <Image key={index} src={image} width={50} height={50} alt={`img-${index}`} className="w-20 h-20 md:w-40 md:h-40  rounded-lg" />
              ))}
            </div>
          )
        }

      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:justify-start lg:mx-w-[550px]">
        <h2 className="font-semibold">Product Creation</h2>
        {loading && <Loading />}
        {productCreated && <Toast message="Product created successfully!" />}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 lg:pl-20 lg:min-w-[352px]">

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-semibold text-gray-600">Name:</label>
            <input type="text" id="name" placeholder="Please enter the name"
              className={`rounded-lg py-1 px-3 border ${errors.name?.message ? " border-red-300 " : " border-gray-300  focus:ring-teal-500"} focus:outline-none focus:ring-2 max-w-[246px]`}
              {...register("name")}
            />
            {errors.name?.message && <p className="text-red-400">{errors.name?.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="brand" className="text-sm font-semibold text-gray-600">Brand:</label>
            <input type="text" id="brand" placeholder="Please enter the brand"
              className={`rounded-lg py-1 px-3 border ${errors.brand?.message ? " border-red-300 " : " border-gray-300  focus:ring-teal-500"} focus:outline-none focus:ring-2 max-w-[246px]`}
              {...register("brand")}
            />
            {errors.brand?.message && <p className="text-red-400">{errors.brand?.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-sm font-semibold text-gray-600">Category:</label>
            <select
              id="category"
              className={`peer block w-full rounded-md border  ${errors.category?.message ? " border-red-300 " : " border-gray-300  focus:ring-teal-500"} py-2 pl-10 text-sm focus:outline-none focus:ring-2 placeholder:text-gray-500 max-w-[246px]`}
              defaultValue=""
              {...register("category")}
            >
              <option value="" disabled >Select a category</option>
              {categoryOptions}
            </select>
            {errors.category?.message && <p className="text-red-400">{errors.category?.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="text-sm font-semibold text-gray-600">Image:</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              className={`rounded-lg py-1   ${errors.image?.message ? " border-red-300 " : "  focus:ring-teal-500"} focus:outline-none focus:ring-2 `}
              multiple={true}
              onChange={(e) => {
                const archivo = (e.target as HTMLInputElement).files
                setPrev([])
                if (archivo && archivo.length > 0) {
                  const selectedImages = Array.from(archivo)
                  setImagesSelected(selectedImages)

                  selectedImages.forEach((file) => {
                    const lector: FileReader = new FileReader();
                    lector.onloadend = () => {

                      setPrev((prev) => [...prev, lector.result as string]);
                    };

                    lector.readAsDataURL(file);
                  })
                }

              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="price" className="text-sm font-semibold text-gray-600">Price:</label>
            <input type="number" id="price" placeholder="Please enter the price"
              className={`rounded-lg py-1 px-3 border ${errors.price?.message ? " border-red-300 " : " border-gray-300  focus:ring-teal-500"} focus:outline-none focus:ring-2 max-w-[246px]`}
              {...register("price")}
            />
            {errors.price?.message && <p className="text-red-400">{errors.price?.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" id="description" className="text-sm font-semibold text-gray-600">Description:</label>
            <textarea placeholder="Please enter the description"
              className={`rounded-lg py-1 px-3 border ${errors.description?.message ? " border-red-300 " : " border-gray-300  focus:ring-teal-500"} focus:outline-none focus:ring-2 max-w-[246px]`}
              {...register("description")}
            />
            {errors.description?.message && <p className="text-red-400">{errors.description?.message}</p>}
          </div>

          <button type="submit" className="bg-teal-500 text-white font-semibold rounded-lg py-2 my-4 px-4 hover:bg-teal-600 transition duration-300 ease-in-out max-w-[246px]">
            Submit
          </button>
        </form>
      </div>
    </div>

  )
}
