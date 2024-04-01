import { useMemo, useState } from 'react'
import { useGetCoinDetailQuery, useGetCoinPriceHistoryQuery } from '../../api/cryptoApi';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

function TradingChart({coinId}:{coinId: string}) {
 const [requestPeriod, setRequestPeriod] = useState('24h');
 const {data:priceRawData} = useGetCoinPriceHistoryQuery({coinId:coinId, timePeriod:requestPeriod});
 const {data: coinRawData} = useGetCoinDetailQuery(coinId);
 const priceHistory = useMemo(() => {
  if(!priceRawData?.data?.history){return [];}
  const history = priceRawData?.data?.history;
  const rate = Math.floor(history.length / 100);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return history.reduce((result:any, value:any, index:any) => {
    // Used to adjust sample rate in the future 
    if (index % rate === 0) {
      const date = new Date(value.timestamp * 1000);
      const price = parseFloat(value.price);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      result.push({price:price, time: `${hours}:${minutes}`, date: `${month}-${day}`});
    }
    return result;
  }, []);
}, [priceRawData]);
console.log(coinRawData);
const coinData = useMemo(() => {
 if(!coinRawData?.data?.coin){return {};}
  const item = coinRawData?.data?.coin;
  const price = parseFloat(item.price)
  const change = parseFloat(item.change);
  return {
    uuid: item.uuid,
    name: item.name,
    symbol: item.symbol,
    iconUrl: item.iconUrl,
    change: change,
    price: price,
  }
}, [coinRawData]);

const handleButtonClick = (period:string) => {
  setRequestPeriod(period);
};

 return (
  <div className="flex-grow flex flex-col">
     <div className='flex flex-row justify-between'>
      <div>
      <img className={"w-10 h-10 relative overflow-hidden rounded-full"} src={coinData.iconUrl}/>
      </div>
       <div className="flex flex-row justify-end text-sm font-medium bg-white text-gray-800">
         {['24h', '7d', '30d'].map((val:string, idx:number) => (
         <button
         key={idx}
         onClick={() => handleButtonClick(val)}
         className={`py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 
         border border-gray-200 shadow-sm hover:bg-gray-100 ${requestPeriod === val && 'bg-gray-100'}`}>
           {val}
         </button>
       ))}
       </div>
     </div>
     <ResponsiveContainer width={"100%"} height={600}>
      <AreaChart data={priceHistory}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
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
      <XAxis dataKey={requestPeriod === '24h'? 'time':'date'}
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
      <Tooltip/>
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
   </div>
 )
}

export default TradingChart