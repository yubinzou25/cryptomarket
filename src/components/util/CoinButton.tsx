import { useState } from "react";

function CoinButton({name, uuid, iconUrl, change, price, requestUUID, setRequestUUID}:{name:string, uuid:string, iconUrl:string, change:number, price:number, requestUUID:string, setRequestUUID: (uuid:string) => void}) {
  const handleButtonClick = () => {
    setRequestUUID(uuid);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button 
    className={`font-medium rounded-full px-2 py-2 whitespace-nowrap w-full border-2 border-gray-200 shadow-sm
    ${isHovered || uuid === requestUUID? 
    "bg-gray-100":
    "bg-white"}`}
    onClick={handleButtonClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row justify-evenly items-center space-x-5">
          <img className={"w-10 h-10 relative overflow-hidden rounded-full"} src={iconUrl}/>
          <div className="flex flex-col w-1/2 hidden md:block">
              <span className="font-bold">{name}</span>
              <div className="flex flex-row content-center space-x-2 hidden xl:block">
                <span className="text-gray-500">
                  ${price.toString().substring(0, 7)}
                </span>
                <span className={`${change > 0? 'text-green-500': 'text-red-500'}`}>
                  {change > 0 && '+'}{change}%
                </span>
              </div>
              
          </div>
      </div>
  </button>
  )
}

export default CoinButton