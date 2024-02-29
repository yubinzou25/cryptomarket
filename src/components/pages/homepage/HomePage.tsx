import React from 'react'
import ScrollCard from './ScrollCard';
import Banner from './Banner';
import ProductInfo from './ProductInfo';
import WhyChoose from './WhyChoose';
import StartTrade from './StartTrade';
import Download from './Download';
import Journey from './Journey';

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
      <WhyChoose/>
      <StartTrade/>
      <Download/>
      <Journey/>

    </div>
    
  )
}

export default HomePage