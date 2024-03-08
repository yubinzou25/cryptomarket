
import BTC from '../../../test_data/BTC.json';
import Chart from '../../util/Chart';
import CoinButton from '../../util/CoinButton';
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
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-row md:flex-col md:w-1/5 justify-evenly">
        <CoinButton to='/' buttonText='BTC'/>
        <CoinButton to='/' buttonText='ETH'/>
        <CoinButton to='/' buttonText='ARB'/>
      </div>
      <Chart data={priceData}/>
    </div>
  )
}

export default PriceChart