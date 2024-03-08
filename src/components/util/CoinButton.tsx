import { Link } from 'react-router-dom'

function CoinButton({to, buttonText}:{to:string, buttonText:string}) {
  return (
    <Link 
    className={`font-medium rounded-full px-4 py-2 whitespace-nowrap w-4/5 bg-gray-100 
    hover:w-full hover:bg-inherit hover:border-black hover:border-2 duration-300`}
    to={to}
    >
      <div>
          <div>
              
          </div>
      </div>
  </Link>
  )
}

export default CoinButton