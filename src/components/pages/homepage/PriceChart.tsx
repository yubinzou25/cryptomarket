
import { useMemo, useState } from 'react';
import { useGetCoinsQuery } from '../../../api/cryptoApi';
import CoinButton from '../../util/CoinButton';
import CryptoChart from '../../util/CryptoChart';
type coinButtonData = {
  uuid: string,
  name:string,
  symbol: string,
  iconUrl: string,
  change: number,
  price: number
}
function PriceChart() {
  const [requestUUID, setRequestUUID] = useState('Qwsogvtv82FCd');
  const {data:coinRawData} = useGetCoinsQuery({limit:5, offset:0});
  const coinData:coinButtonData[] = useMemo(() => {
    if(!coinRawData?.data?.coins){return [];}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return coinRawData.data.coins.map((item:any) => {
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
    })
  }, [coinRawData]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between space-x-10">
        <div className="flex flex-row md:flex-col md:w-1/5 justify-evenly">
          {coinData.map((item, index) => (
             <CoinButton 
              key={index}
              name={item.name}
              uuid={item.uuid}
              change={item.change}
              price={item.price}
              iconUrl={item.iconUrl}
              requestUUID={requestUUID}
              setRequestUUID={setRequestUUID}
             />
          ))}
        </div>
        <CryptoChart
        coinId={requestUUID}
        simplified={true}/>
      </div>
    </div>
  )
}

export default PriceChart