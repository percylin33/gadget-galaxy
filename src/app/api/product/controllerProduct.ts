import {prisma} from "@/libs/prisma"
import { v4 } from "uuid"

export async function getAllProduct() {
  const productos = await prisma.product.findMany();
 
  return productos;
}


export async function postProduct( name :string, brand :string, category :string, image :string, price :number, descriotion :string ) {
  const id = v4()
  const producto = await prisma.product.create({
    data:{
          id,
          name,
          brand,
          category,
          image,
          price,
          descriotion,
        },
      });

  return producto;
}