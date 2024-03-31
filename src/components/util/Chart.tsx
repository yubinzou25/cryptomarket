
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Chart({data, yAxisKey}:{data: any, yAxisKey:string}) {
  return (
    <ResponsiveContainer width={"100%"} height={600}>
      <AreaChart data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="#00E5DB"
              stopOpacity={0.3}
            />
            <stop
              offset="100%"
              stopColor="#00E5DB"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
      <XAxis dataKey={yAxisKey}
        axisLine={false}
        tickLine={false}
        interval="preserveStart"
        minTickGap={100}
        reversed={true}
        padding={{right:50}}
        />
      <YAxis dataKey="price"
        axisLine={false}
        tickLine={false}
        orientation="right"
        padding={{top:50, bottom:50}}
        domain={['auto','auto']}
        />
      <Tooltip content={<></>}/>
      <Area
      type="monotone"
      animationDuration = {500}
      dataKey="price"
      stroke="#00d5c8"
      strokeWidth={2}
      dot={false}
      fill="url(#colorPrice)"
      />
      </AreaChart>
      </ResponsiveContainer>
  )
}

// function Loading() {
//   return (
//     <svg
//   className="animate-spin h-10 w-10 text-gray-500 mx-auto"
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
// >
//   <circle
//     className="opacity-25"
//     cx="12"
//     cy="12"
//     r="10"
//     stroke="#00E5DB"
//     strokeWidth="4"
//   ></circle>
//   <path
//     className="opacity-75"
//     fill="#00E5DB"
//     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//   ></path>
// </svg>
//   );
// }

export default Chart