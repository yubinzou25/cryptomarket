import { useParams } from 'react-router-dom';

import TradingChart from '../../util/TradingChart';
function Trading() {
 const { coinId } = useParams<{ coinId: string }>();

  return (
   <div className="mt-20">
   {
   coinId &&
   <TradingChart
     coinId={coinId}/>
  }
   </div>
  );
}

export default Trading