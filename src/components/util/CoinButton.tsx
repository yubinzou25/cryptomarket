import { useState } from "react";

function CoinButton({name, uuid, iconUrl, requestUUID, setRequestUUID}:{name:string, uuid:string, iconUrl:string, requestUUID:string, setRequestUUID: (uuid:string) => void}) {
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
    className={`font-medium rounded-full px-4 py-2 whitespace-nowrap w-4/5 border-2 border-gray-200 shadow-sm
    ${isHovered || uuid === requestUUID? 
    "bg-gray-100":
    "bg-white"}`}
    onClick={handleButtonClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row justify-evenly items-center">
          <img className="w-10 h-10 relative overflow-hidden rounded-full" src={iconUrl}/>
          <div className="flex flex-col">
              <div>{name}</div>
          </div>
      </div>
  </button>
  )
}

export default CoinButton