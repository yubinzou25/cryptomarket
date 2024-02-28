import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ScrollCard = ({cardWidth, cardHeight, cardList}: 
  {cardWidth:number, cardHeight:number, cardList:string[]}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);

  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: screenWidth/cardWidth - 1,
      partialVisibilityGutter: 40
    }
  };

  return (
    <Carousel 
        responsive={responsive}
        centerMode
        pauseOnHover
        autoPlay
        autoPlaySpeed={2000}
        infinite
        itemClass="carousel-item-padding-10"
        >
        {cardList.map((card:string) => (
          <div key={card}>
            <img src={card} width={cardWidth} height={cardHeight}/>
          </div>
        ))}
      </Carousel>
  )
}

export default ScrollCard