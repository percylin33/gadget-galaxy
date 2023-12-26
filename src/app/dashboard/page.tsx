

import {useSearchParams, useRouter, usePathname} from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';
import CardWrapper from "@/components/CardData"
import RevenueChart from "@/components/RevenueChart";


import Link from "next/link"

export default function dashboardPage() {
    return (
      
      <div className="w-full" > 
        <div className="px-8">
          <h1 className="text-2xl lg:pl-8">Store</h1>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8 px-4">
          <CardWrapper />
        </div >
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart />
        </div>
      </div>
      
    )
  }
  