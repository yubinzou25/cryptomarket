import { useParams } from 'react-router-dom';

import TradingChart from '../../util/TradingChart';
function Trading() {
 const { coinId } = useParams<{ coinId: string }>();

  return (
   <>
   {
   coinId &&
   <TradingChart
     coinId={coinId}/>
  }
   </>
  );
}

export default Trading