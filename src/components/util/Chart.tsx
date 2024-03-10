
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
function Chart({data}:{data: any}) {
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
      <XAxis dataKey="time"
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
        domain={['auto', 'auto']}
        />
      <Tooltip />
      <Area
      type="monotone"
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

export default Chart