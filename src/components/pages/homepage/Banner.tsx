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
        <p className="text-lg mt-4 font-semibold text-slate-600 max-w-xl">
        Disclaimer: This website is intended solely for the purpose of demonstrating
        <wbr /> the developer's technical skills and is not intended for real-world usage
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url("/image/github_icon.svg")`,
                width: "40px",
                height: "40px",
            }}/>
        <LinkButton to="https://github.com/yubinzou25/cryptomarket" buttonText="GitHub Repo" primaryColor={false}/>
        </div>
      </div>
    </main>
    
  )
}

export default Banner