import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.formData()
    const file = data.get("file")

    if (!file) {
        return NextResponse.json("Error al subir la imagen", {
            status: 400
        })
    }

    const bytes = await (file as File).arrayBuffer();
    const buffer = Buffer.from(bytes)


    cloudinary.config({
        cloud_name: 'dgxgcjkb4',
        api_key: '328582633322922',
        api_secret: 'rK1H0ZhuKkIe-RDULnJXgAFymac'
    });

    const response: any = await new Promise((resolve, reject)=>{
         cloudinary.uploader
         .upload_stream({}, (err, result)=>{
            if (err) {
                reject(err);
            }
            resolve(result)
         })
         .end(buffer)

    })
    try {
        // const newProduct = await postProduct( name, brand, category, image, price, description);
        //return NextResponse.json(newProduct);
        return NextResponse.json({
            message: "imagen subida",
            url: response.secure_url,
        });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            )
        }
    }


}
