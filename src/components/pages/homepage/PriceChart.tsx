
import { useMemo, useState } from 'react';
import { useGetCoinsQuery, useGetCoinPriceHistoryQuery } from '../../../api/cryptoApi';
import Chart from '../../util/Chart';
import CoinButton from '../../util/CoinButton';
function PriceChart() {
  const [requestUUID, setRequestUUID] = useState('Qwsogvtv82FCd');
  // const {data: coinsData} = useGetCoinsQuery(4);
  const {data:priceData} = useGetCoinPriceHistoryQuery(requestUUID);
  const priceHistory = useMemo(() => {
    const history =  priceData?.data?.history || [];
    return history.map((val:any, _index:any) => {
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      }).format(new Date(val.timestamp * 1000));
      return {price:val.price, time: formattedTime}
    })
  }, [priceData]) 
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end">
      <div className="inline-flex rounded-lg">
        <button className="py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          1D
        </button>
        <button className="py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          7D
        </button>
        <button className="py-3 px-4 items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
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