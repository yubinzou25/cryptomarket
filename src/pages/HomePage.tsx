import React from 'react'
import ScrollCard from '../components/ScrollCard'
import RotateText from '../components/RotateText'
import Banner from '../components/Banner'

function HomePage() {
    const cardList = [
        '/image/1.png', '/image/2.png', '/image/3.png', '/image/4.png', '/image/5.png', '/image/6.png',
    ]
  return (
    <div>
        <Banner/>
        {/* <RotateText
            itemList={[
                {text:"BTC", color:"#ffc107"}, 
                {text:"ETH", color:"#bc4fd5"}, 
                {text:"SUI", color:"#75d1b2"}
            ]}
            letterNum = {3}
        /> */}
        {/* <ScrollCard
            cardWidth={400}
            cardHeight={200}
            cardList={cardList}
        /> */}
    </div>
  )
}

export default HomePage