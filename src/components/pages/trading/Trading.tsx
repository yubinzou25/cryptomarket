import { useParams } from 'react-router-dom';
function Trading() {
 const { coinId } = useParams<{ coinId: string }>();
 console.log(coinId);
  return (
    <div>Trading</div>
  )
}

export default Trading