"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoSync } from 'react-icons/io5';
import Image from 'next/image';

export default function LatestInvoices() {
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/product');
        setProductos(response.data);
        console.log(response);
        
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error al realizar la solicitud:', error.message);
        } else {
          console.error('Error desconocido:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente
console.log(productos);

  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={` mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      {loading ? (
        <div>
          {/* Puedes mostrar un spinner u otro indicador de carga aquí */}
          <IoSync className="animate-spin h-5 w-5 text-gray-500" />
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="bg-gray-50 p-6 rounded-xl">
          {productos.map((product, i) => (
            <div
              key={product.id}
              className={`flex flex-row items-center bg-white rounded-xl justify-between py-4 ${i !== 0 ? 'border-t' : ''}`}
            >

                   <div className="flex items-center">
                          <Image
                            src={product.image[0]}
                            className="rounded-full mr-3"
                            alt={`${product.name}'s profile picture`}
                            width={35}
                            height={35}
                          />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {product.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {product.brand}
                    </p>
                  </div>
                </div>
                <p
                  className={`truncate text-sm font-medium md:text-base`}
                >
                  {product.stock}
                </p>
              
              {/* Resto de tu lógica de renderizado */}
            </div>
          ))}
          <div className="flex items-center pb-2 pt-6">
            <IoSync className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
          </div>
        </div>
      )}
    </div>
  );
}
