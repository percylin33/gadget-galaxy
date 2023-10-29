import Sidebar from "@/components/Sidebar"
import RootLayout from "@/app/layout"
import Link from "next/link"

export default function dashboardPage() {
    return (
      <RootLayout showNavbar={false}>
      <div className=' grid grid-cols-6 min-h-screen '>
        
        <Sidebar />
        <main>
          <a href='/'>atras</a>
          <br/>
          contenct
        </main>
      </div>
      </RootLayout>
    )
  }
  