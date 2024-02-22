import React from 'react'
import RotateText from './RotateText'
import { Link } from 'react-router-dom'

function Banner() {
  return (

    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        <img src="/image/banner.png" width={500} height={500}/>
      </div>
      <div>
        <div
          className="text-5xl lg:text-7xl xl:text-8xl font-bold lg:tracking-tight xl:tracking-wider">
          BUY, TRADE
          <RotateText
            itemList={[
                {text:"BTC", color:"#ffc107"}, 
                {text:"BTC", color:"#bc4fd5"}, 
                {text:"BTC", color:"#75d1b2"}
            ]}
            letterNum = {3}
        />
        </div>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites & landing
          pages.<wbr /> Built with Astro.build and TailwindCSS. You can quickly
          create any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to='/'
              className="flex gap-1 items-center justify-center"
              >
              Download for Free
            </Link>
            <Link
              to='/'
              className="flex gap-1 items-center justify-center"
              >
              GitHub Repo
            </Link>
        </div>
      </div>
    </main>
    
  )
}

export default Banner