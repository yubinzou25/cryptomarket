
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import BTC from '../../../test_data/BTC.json';
import Chart from '../../util/Chart';
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
      <Chart data={priceData}/>
    </div>
  )
}

export default PriceChart