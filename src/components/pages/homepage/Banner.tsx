import LinkButton from '../../util/LinkButton'
import RotateText from './RotateText'

function Banner() {
  return (

    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        <img src="/image/banner.png" width={500} height={500}/>
      </div>
      <div>
        <div className="flex flex-col text-5xl lg:text-7xl font-extrabold lg:tracking-tight xl:tracking-wider">
          <div
            className="flex flex-row gap-5">
            <h1>BUY, TRADE</h1>
            <RotateText
              itemList={[
                  {text:"BTC", color:"#ffc107"}, 
                  {text:"ETH", color:"#bc4fd5"}, 
                  {text:"BNB", color:"#75d1b2"}
              ]}
              letterNum = {3}
            />
          </div>
          <h1>ON DIGIFINEX</h1>
        </div>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites & landing
          pages.<wbr /> Built with Astro.build and TailwindCSS. You can quickly
          create any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <LinkButton to="https://github.com/yubinzou25/cryptomarket" buttonText="GitHub Repo" primaryColor={false}/>
        </div>
      </div>
    </main>
    
  )
}

export default Banner