import { generateYAxis } from "@/function/utils";
import { IoCalendarOutline } from "react-icons/io5";

const revenue=[
    { month: "Fer", revenue: 1000 },
    { month: "Mar", revenue: 4000 },
    { month: "Apr", revenue: 3000 },
    { month: "May", revenue: 2000 },
    { month: "Jun", revenue: 3000 },
    { month: "Jul", revenue: 5000 },
    { month: "Aug", revenue: 5000 },
    { month: "Sep", revenue: 2000 },
    { month: "Oct", revenue: 1000 },
    { month: "Nov", revenue: 4000 },
    { month: "Dec", revenue: 3000 },
]
export default function RevenueChart(){
    const chartHeight = 350;

    const { yAxisLabels, topLabel } = generateYAxis(revenue);

    if (!revenue || revenue.length === 0) {
        return <p className="mt-4 text-gray-400">No data available.</p>;
      }
    return(
        <div className="w-full md:col-span-4 lg:pl-8">
      <h2 className={` mb-4 text-xl md:text-2xl pl-4`}>
        Recent Revenue
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <IoCalendarOutline className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
    )
}