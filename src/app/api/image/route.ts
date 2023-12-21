import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.formData();

    const files = data.getAll("file");

    if (!files || files.length === 0) {
        return NextResponse.json("No se encontraron archivos en la solicitud", {
            status: 400
        });
    }

    var imageUrls = [];

    for (const file of files) {
        const bytes = await (file as File).arrayBuffer();
        const buffer = Buffer.from(bytes);

        cloudinary.config({
            cloud_name: 'dgxgcjkb4',
            api_key: '328582633322922',
            api_secret: 'rK1H0ZhuKkIe-RDULnJXgAFymac'
        });

        try {
            const response: any = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({}, (err, result) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(result);
                    })
                    .end(buffer);
            });

            imageUrls.push(response.secure_url);

        } catch (error) {
            console.error("Error al subir imagen:", error);

        }
    }
    return NextResponse.json({
        urls: imageUrls,
    });
}