import React from 'react'
import ScrollCard from '../components/ScrollCard';
import Banner from '../components/Banner';
import ProductInfo from '../components/ProductInfo';

function HomePage() {
    const cardList = [
        '/image/1.png', '/image/2.png', '/image/3.png', '/image/4.png', '/image/5.png', '/image/6.png',
    ]
  return (
    
    <div className="flex flex-col gap-y-20">
      <Banner/>
      <ScrollCard
          cardWidth={400}
          cardHeight={200}
          cardList={cardList}
      />
      <ProductInfo/>
    </div>
    
  )
}

export default HomePage