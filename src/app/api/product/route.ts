import { NextResponse } from "next/server";
import { getAllProduct, postProduct} from "./controllerProduct";

export async function GET(){
    try {
        const productos = await getAllProduct();
        console.log(productos);
        return NextResponse.json(productos);
    } catch (error) {
        if (error instanceof Error ) {
            return NextResponse.json(
              {
                  message: error.message
              },
              {
                  status:500
              } 
            )
        }
    }
}

export async function POST(request: Request) {
    
    const { name, brand, category,image, price, stock, description } = await request.json();
    
    
    try {
        const newProduct = await postProduct( name, brand, category, image, price, stock, description);
        return NextResponse.json(newProduct);
        
    } catch (error) {
        if (error instanceof Error ) {
            return NextResponse.json(
              {
                  message: error.message
              },
              {
                  status:500
              } 
            )
        }
    }
    
  
  }
