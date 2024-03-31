import { useMemo, useState } from 'react'
import { useGetCoinPriceHistoryQuery } from '../../api/cryptoApi';
import Chart from './Chart';

function CryptoChart({coinId}:{coinId: string}) {
 const [requestPeriod, setRequestPeriod] = useState('24h');
 const {data:priceRawData} = useGetCoinPriceHistoryQuery({coinId:coinId, timePeriod:requestPeriod});
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
const handleButtonClick = (period:string) => {
  setRequestPeriod(period);
};
  return (
   <div className="flex-grow flex flex-col">
      <div className='flex flex-row justify-between'>
        <div>BTC</div>
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
      <Chart data={priceHistory} yAxisKey={requestPeriod === '24h'? 'time':'date'}/>
    </div>
   
  )
}

export default CryptoChart