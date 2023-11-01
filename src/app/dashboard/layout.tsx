import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

import Link from "next/link"

export default function dashboardLayout({children}: {
    children: React.ReactNode;
    
  }) {
    return (
      
      <div className=' grid  lg:grid-cols-4 xl:grid-cols-6 min-h-screen lg:h-[calc(100vh-4rem)] bg-gris'> 
        <Sidebar />
        <main className="lg:col-span-3 xl:col-span-5 ">
          <Header />
          {children}
        </main>
      </div>
      
    )
  }
  