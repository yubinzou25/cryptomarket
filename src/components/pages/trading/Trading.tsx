import { useParams } from 'react-router-dom';

import TradingChart from '../../util/TradingChart';
function Trading() {
 const { coinId } = useParams<{ coinId: string }>();

  return (
   <div className="flex flex-row mt-20">
   <TradingChart
     coinId={coinId || 'Qwsogvtv82FCd'}/>
   <div className="flex flex-col">
    <div className="flex flex-row">
     <button className="p-5 broder-1">Buy BTC</button>
     <button className="p-5">Sell BTC</button>
    </div>
    <div className="flex flex-col">
     <div className="flex flex-row space-x-20">
      <div>Invest in</div>
      <input type="text" placeholder="$0.00" className="py-1.5 pl-7 pr-10 rounded-md bg-gray-100 ring-1 ring-inset ring-gray-500 text-gray-900"></input>
     </div>
     <div className="flex flex-row space-x-20">
      <div>Est. Quantity</div>
      <div>0</div>
     </div>
    </div>
   </div>
   </div>
  );
}

export default Trading