import {IoPeople, IoFileTrayFull , IoStorefrontOutline } from "react-icons/io5"
const icoMap ={
    userIcon: IoPeople,
    productIcon: IoStorefrontOutline, 
    invoicesIcon: IoFileTrayFull


}

export default async function CardWrapper() {
    const numberOfProduct= "await"
    const numberOfUsers= "await"
    const numberOfInvoices= "await"

    return(
        <>
            <Card title="Products" value={numberOfProduct} type="productIcon" />
            <Card title="Uders" value={numberOfUsers} type="userIcon" />
            <Card title="Invoices" value={numberOfInvoices} type="invoicesIcon" />

        </>
    )
    
}

export function Card({
    title,
    value, 
    type
}:{
    title: string;
    value: number | string;
    type: "userIcon" | "productIcon" | "invoicesIcon"
}) {
    const Icon = icoMap[type];

    return(
        <div className="rounded-xl bg-gray-50 p-2  shadow-sm">
            <div className="flex p-4 ">
                {Icon ? <Icon className="h-5 w-5 text-gray-700"/> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
                {value}
            </p>
        </div>
    )

    
}