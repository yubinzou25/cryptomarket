
import { useMemo, useState } from 'react';
import { useGetCoinsQuery, useGetCoinPriceHistoryQuery } from '../../../api/cryptoApi';
import Chart from '../../util/Chart';
import CoinButton from '../../util/CoinButton';
function PriceChart() {
  const [requestUUID, setRequestUUID] = useState('Qwsogvtv82FCd');
  const [requestPeriod, setRequestPeriod] = useState('24h');
  // const {data: coinsData} = useGetCoinsQuery(4);
  const {data:priceData} = useGetCoinPriceHistoryQuery({coinId:requestUUID, timePeriod:requestPeriod});
  const priceHistory = useMemo(() => {
    const history =  priceData?.data?.history || [];
    return history.map((val:any, _index:any) => {
      const date = new Date(val.timestamp * 1000);
      if(requestPeriod === '24h'){
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return {price:val.price, time: `${hours}:${minutes}`};
      }else{
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return {price:val.price, time: `${month}-${day}`};
      }
    });
  }, [priceData]);
  const handleButtonClick = (period:string) => {
    setRequestPeriod(period);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end">
      <div className="inline-flex text-sm font-medium bg-white text-gray-800">
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
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row md:flex-col md:w-1/5 justify-evenly">
          <CoinButton name='BTC' requestUUID={requestUUID} uuid="Qwsogvtv82FCd" setRequestUUID={setRequestUUID}/>
          <CoinButton name='ETH' requestUUID={requestUUID} uuid="razxDUgYGNAdQ" setRequestUUID={setRequestUUID}/>
          <CoinButton name='USDT' requestUUID={requestUUID} uuid="HIVsRcGKkPFtW" setRequestUUID={setRequestUUID}/>
        </div>
        <Chart data={priceHistory}/>
      </div>
    </div>
  )
}

export default PriceChart