
import { useMemo, useState } from 'react';
import { useGetCoinPriceHistoryQuery, useGetCoinsQuery } from '../../../api/cryptoApi';
import Chart from '../../util/Chart';
import CoinButton from '../../util/CoinButton';
type coinButtonData = {
  uuid: string,
  symbol: string,
  iconUrl: string,
  change: number,
  price: number
}
function PriceChart() {
  const [requestUUID, setRequestUUID] = useState('Qwsogvtv82FCd');
  const [requestPeriod, setRequestPeriod] = useState('24h');
  const {data:coinRawData} = useGetCoinsQuery(5);
  const {data:priceRawData} = useGetCoinPriceHistoryQuery({coinId:requestUUID, timePeriod:requestPeriod});
  const coinData:coinButtonData[] = useMemo(() => {
    if(!coinRawData?.data?.coins){return [];}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return coinRawData.data.coins.map((item:any) => {
      const price = parseFloat(item.price)
      const change = parseFloat(item.change);
      return {
        uuid: item.uuid,
        symbol: item.symbol,
        iconUrl: item.iconUrl,
        change: change,
        price: price,
      }
    })
  }, [coinRawData]);
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
    <div className="flex flex-col">
      <div className="flex flex-row justify-end text-sm font-medium bg-white text-gray-800">
        <button
        onClick={() => handleButtonClick('24h')}
        className={`py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 
        border border-gray-200 shadow-sm hover:bg-gray-100 ${requestPeriod === '24h' && 'bg-gray-100'}`}>
          1D
        </button>
        <button 
        onClick={() => handleButtonClick('7d')}
        className={`py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 
        border border-gray-200 shadow-sm hover:bg-gray-100 ${requestPeriod === '7d' && 'bg-gray-100'}`}>
          7D
        </button>
        <button
        onClick={() => handleButtonClick('30d')}
        className={`py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 
        border border-gray-200 shadow-sm hover:bg-gray-100 ${requestPeriod === '30d' && 'bg-gray-100'}`}>
          30D
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row md:flex-col md:w-1/5 justify-evenly">
          {coinData.map((item, index) => (
             <CoinButton 
              key={index}
              name={item.symbol}
              uuid={item.uuid}
              change={item.change}
              price={item.price}
              iconUrl={item.iconUrl}
              requestUUID={requestUUID}
              setRequestUUID={setRequestUUID}
             />
          ))}
        </div>
        <Chart data={priceHistory} yAxisKey={requestPeriod === '24h'? 'time':'date'}/>
      </div>
    </div>
  )
}

export default PriceChart