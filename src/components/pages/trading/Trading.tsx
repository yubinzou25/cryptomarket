import { useParams } from 'react-router-dom';

import TradingChart from '../../util/TradingChart';
function Trading() {
 const { coinId } = useParams<{ coinId: string }>();

  return (
   <div className="flex flex-row mt-20">
   <TradingChart
     coinId={coinId || 'Qwsogvtv82FCd'}/>
   <div className="flex flex-col shadow-xl">
    <div className="flex flex-row justify-evenly">
     <button className="p-5 broder-1">Buy BTC</button>
     <button className="p-5">Sell BTC</button>
    </div>
    <div className="flex flex-col">
    <div className="flex flex-row justify-evenly">
      <div>Invest in</div>
      <select id="currency" name="currency" className="w-1/2 py-1.5 pl-7 pr-10 h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
     </div>
     <div className="flex flex-row justify-evenly">
      <div>Amount</div>
      <input type="text" placeholder="$0.00" className="w-1/2 py-1.5 pl-7 pr-10 rounded-md bg-gray-100 ring-1 ring-inset ring-gray-500 text-gray-900"></input>
     </div>
     <div className="flex flex-row justify-evenly">
      <div>Est. Quantity</div>
      <span className="w-1/2 py-1.5 pl-7 pr-10">0</span>
     </div>
     <button className="font-medium rounded-lg px-4 py-2 mx-5 whitespace-nowrap bg-primary-default hover:bg-primary-hover">
        place order
    </button>
    </div>
   </div>
   </div>
  );
}

export default Trading