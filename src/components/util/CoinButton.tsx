
function CoinButton({name, uuid, setRequestUUID}:{name:string, uuid:string, setRequestUUID: (uuid:string) => void}) {
  const handleButtonClick = () => {
    setRequestUUID(uuid);
  };
  return (
    <button 
    className={`font-medium rounded-full px-4 py-2 whitespace-nowrap w-4/5 bg-gray-100 
    hover:w-full hover:bg-inherit hover:border-black hover:border-2 duration-300`}
    onClick={handleButtonClick}
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