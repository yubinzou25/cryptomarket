import LinkButton from "../../util/LinkButton";


function StartTrade() {
  const points = [
    'Create your DigiFinex account freely',
    'Complete Verification',
    'Start Trading'

  ];
  return (
    <div className="py-20 px-10 bg-gray-50">
      <div className="flex flex-col space-y-20 justify-between">
        <div className="text-3xl lg:text-4xl text-center font-semibold">
            Start Trade in 1 Minute
        </div>
        <div className="flex flex-row mx-auto justify-between text-center">
          {points.map((point, index) => (
          <NumberPoint
            text={point}
            index={index}
            key={index}
          />
          ))}
        </div>
        <div className="flex flex-row justify-center ">
          <input 
            className="w-64 rounded-lg border focus:border-gray-500 bg-gray-200 placeholder:text-sm placeholder:p-2"
            placeholder="Email or Phone Number"/>
          <LinkButton to="/" buttonText="Register Now" primaryColor={true}/>
        </div>
      </div>
    </div>
  )
}
function NumberPoint({text, index}:{text:string, index: number}) {
  return (
    <div className="flex-1 p-10 flex flex-col">
      <div className="font-extrabold">{index + 1}</div>
      <div className="text-lg font-semibold">
          {text}
      </div>
    </div>
  )
}

export default StartTrade