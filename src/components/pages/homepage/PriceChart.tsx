
import { useMemo } from 'react';
import { useGetCoinsQuery, useGetCoinDetailQuery, useGetCoinPriceHistoryQuery } from '../../../api/cryptoApi';
import Chart from '../../util/Chart';
import CoinButton from '../../util/CoinButton';
function PriceChart() {
  const {data:priceData} = useGetCoinPriceHistoryQuery('Qwsogvtv82FCd');

  const priceHistory = useMemo(() => {
    const history =  priceData?.data?.history || [];
    return history.map((val:any, _index:any) => {
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      }).format(new Date(val.timestamp));
      const price = parseFloat(val.price);
      return {price:price.toFixed(2), time: formattedTime}
    })
  }, [priceData]) 
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-row md:flex-col md:w-1/5 justify-evenly">
        <CoinButton to='/' buttonText='BTC/USDT'/>
        <CoinButton to='/' buttonText='ETH/USDT'/>
        <CoinButton to='/' buttonText='ARB/USDT'/>
      </div>
      <Chart data={priceHistory}/>
    </div>
  )
}

export default PriceChart