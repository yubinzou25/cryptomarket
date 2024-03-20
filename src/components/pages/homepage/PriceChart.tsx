
import { useMemo, useState } from 'react';
import { useGetCoinPriceHistoryQuery, useGetCoinsQuery } from '../../../api/cryptoApi';
import Chart from '../../util/Chart';
import CoinButton from '../../util/CoinButton';
function PriceChart() {
  // const coins = useGetCoinsQuery(5);
  // console.log(coins);
  const [requestUUID, setRequestUUID] = useState('Qwsogvtv82FCd');
  const [requestPeriod, setRequestPeriod] = useState('24h');
  const {data:priceData} = useGetCoinPriceHistoryQuery({coinId:requestUUID, timePeriod:requestPeriod});
  const priceHistory = useMemo(() => {
    if(!priceData?.data?.history){return [];}
    const history = priceData?.data?.history;
    const rate = Math.floor(history.length / 100);
    console.log(rate);
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
  }, [priceData]);
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
        {/* 
        https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg
            https://cdn.coinranking.com/rk4RKHOuW/eth.svg 
            https://cdn.coinranking.com/B1N19L_dZ/bnb.svg
            https://cdn.coinranking.com/yvUG4Qex5/solana.svg
        */}
          <CoinButton name='BTC' requestUUID={requestUUID} uuid="Qwsogvtv82FCd" setRequestUUID={setRequestUUID} iconUrl="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"/>
          <CoinButton name='ETH' requestUUID={requestUUID} uuid="razxDUgYGNAdQ" setRequestUUID={setRequestUUID} iconUrl="https://cdn.coinranking.com/rk4RKHOuW/eth.svg"/>
          <CoinButton name='BNB' requestUUID={requestUUID} uuid="WcwrkfNI4FUAe" setRequestUUID={setRequestUUID} iconUrl="https://cdn.coinranking.com/B1N19L_dZ/bnb.svg"/>
          <CoinButton name='SOL' requestUUID={requestUUID} uuid="zNZHO_Sjf" setRequestUUID={setRequestUUID} iconUrl="https://cdn.coinranking.com/yvUG4Qex5/solana.svg"/>
        </div>
        <Chart data={priceHistory} yAxisKey={requestPeriod === '24h'? 'time':'date'}/>
      </div>
    </div>
  )
}

export default PriceChart