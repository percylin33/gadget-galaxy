import {z} from "zod"
 const cate = ["Desktop", "Laptop", "Cell phone"] as const

export type cate = (typeof cate)[number]
export const mappedCategory :{[key in cate]: string}={
    "Desktop": "Desktop", 
    "Laptop": "Laptop", 
    "Cell phone": "Cell phone",
 }
export const productSchema = z.object({
    name: z.string().min(2,{
        message: "The name must be at least 2 characters "
    }).max(15,{
        message: "The name must have a maximum of 15 characters"
    }),

    brand: z.string().min(4,{
        message: "The brand must be at least 4 characters "
    }).max(15,{
        message: "The brand must have a maximum of 15 characters"
    }),

    category: z.enum(cate, {
        errorMap: ()=>({message: "Please select a category"})  
    }),
    
    image: z.string().min(4,{
        message: "The image must be at least 4 characters "
    }).max(40,{
        message: "The image must have a maximum of 40 characters"
    }),

    price: z.string().refine((price)=>!isNaN(parseFloat(price)),{
        message: "The price must be a number greater than 0 "
    }),
    
    description: z.string().min(10,{
        message: "The description must be at least 10 characters "
    }).max(50,{
        message: "The description must have a maximum of 50 characters"
    }),
        
    

})
