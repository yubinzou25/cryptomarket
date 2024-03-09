import { useState } from "react";

function CoinButton({name, uuid, requestUUID, setRequestUUID}:{name:string, uuid:string, requestUUID:string, setRequestUUID: (uuid:string) => void}) {
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
    className={`font-medium rounded-full px-4 py-2 whitespace-nowrap 
    ${isHovered || uuid === requestUUID? "w-full bg-inherit border-black border-2":
    "w-4/5 bg-gray-100"} duration-300`}
    onClick={handleButtonClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row justify-evenly items-center">
          <img className="w-10 h-10 relative overflow-hidden rounded-full" src="/image/BTC.png"/>
          <div className="flex flex-col">
              <div>{name}</div>
              <div>67080.5</div>
          </div>
      </div>
  </button>
  )
}

export default CoinButton