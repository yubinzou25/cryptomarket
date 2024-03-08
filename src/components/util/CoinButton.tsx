import { Link } from 'react-router-dom'

function CoinButton({to, buttonText}:{to:string, buttonText:string}) {
  return (
    <Link 
    className={`font-medium rounded-full px-4 py-2 whitespace-nowrap w-4/5 bg-gray-100 
    hover:w-full hover:bg-inherit hover:border-black hover:border-2 duration-300`}
    to={to}
    >
      <div className="flex flex-row justify-evenly items-center">
          <img className="w-10 h-10 relative overflow-hidden rounded-full" src="/image/BTC.png"/>
          <div className="flex flex-col">
              <div>{buttonText}</div>
              <div>67080.5</div>
          </div>
      </div>
  </Link>
  )
}

export default CoinButton