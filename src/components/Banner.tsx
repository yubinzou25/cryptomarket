import React from 'react'
import RotateText from './RotateText'

function Banner() {
  return (

    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        <img src="/image/banner.png" width={600} height={600}/>
      </div>
      <div>
        <h1
          className="text-6xl lg:text-7xl xl:text-8xl font-bold lg:tracking-tight xl:tracking-tighter">
          BUY, TRADE ON DIGIFINEX
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites & landing
          pages.<wbr /> Built with Astro.build and TailwindCSS. You can quickly
          create any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">

        </div>
      </div>
    </main>
    
  )
}

export default Banner