import LinkButton from "../../util/LinkButton"

function TradeAnywhere() {
  return (
    <>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col just">
          <div className="text-3xl lg:text-4xl text-center font-semibold">
            Trade Anywhere
            <div className="text-xl text-gray-500 font-light mt-5">
              Stay in the know with our app and desktop client.
            </div>
          </div>
          
        </div>
        <div
        className="bg-no-repeat bg-cover bg-center"
          style={{
              backgroundImage: `url("/image/download.png")`,
              width:'629px',
              height:'480px'
          }}
          />
    </div>

    <div className="flex flex-col justify-between gap-y-10">
      <div className="text-3xl lg:text-4xl text-center font-semibold">
        Register & Start Trading!
      </div>
      <div className="flex justify-center">
      <LinkButton to="/" buttonText="Register Now ->" primaryColor={true}/>
      </div>
    </div>
    </>
  )
}

export default TradeAnywhere