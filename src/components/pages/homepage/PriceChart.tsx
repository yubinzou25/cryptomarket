
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import BTC from '../../../test_data/BTC.json';
function PriceChart() {
  const priceData = BTC.t.map((val, idx) => 
  {
    const date = new Date(Number(val) * 1000);
    const formattedTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    }).format(date);
    return {time:formattedTime, price:BTC.h[idx] }
  });
  return (
    <div className="flex justify-center">
      <ResponsiveContainer width={700} height={500}>
      <AreaChart data={priceData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="time"
        axisLine={false}
        tickLine={false}/>
      <YAxis dataKey="price"
        axisLine={false}
        tickLine={false}
        orientation="right"
        domain={['auto', 'auto']}/>
      <Tooltip />
      <Area type="monotone" dataKey="price" stroke="#8884d8" dot={false}/>
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceChart