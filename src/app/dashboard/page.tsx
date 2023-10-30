import Sidebar from "@/components/Sidebar"

import Link from "next/link"

export default function dashboardPage() {
    return (
      
      <div className=' grid grid-cols-6 min-h-screen lg:h-[calc(100vh-4rem)] bg-rojo'>
        
        <Sidebar />
        <main className=" bg-rojo">
          <a href='/'>atras</a>
          <br/>
          contenct
        </main>
      </div>
      
    )
  }
  