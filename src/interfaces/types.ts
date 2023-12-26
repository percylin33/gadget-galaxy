 export type  Product = {
    name : string, 
    brand :string, 
    category :string, 
    image :string[], 
    price :number, 
    stock : number,
    description :string 
}

export type  errorProduct = {
    name : string, 
    brand :string, 
    category :string, 
    image :string[], 
    price :string, 
    stock:string,
    description :string 
}
export type Revenue ={
    month: string;
    revenue: number;
}