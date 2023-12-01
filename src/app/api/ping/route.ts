// import { NextApiRequest, NextApiResponse } from "next";
// import {NextResponse} from  "next/server"; 
// import { conn } from "@/utils/database"

// export async function GET(req: NextApiRequest, res: NextApiResponse){
//   const repon =  await conn.query("SELECT NOW()")
//   console.log(repon);
  
//   return NextResponse.json({
//     message: "Pong!", time: repon.rows[0].now
//   });
// }