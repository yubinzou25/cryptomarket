import React from 'react'

function StartTrade() {
  const points = [
    'Create your DigiFinex account freely',
    'Complete Verification',
    'Start Trading'

  ];
  return (
    <div className="flex flex-col space-y-20 bg-gray-50 text-center">
        <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold mt-10">
            Start Trade in 1 Minute
        </div>
        <div className="flex flex-row w-3/4 mx-auto justify-between text-lg font-semibold">
          {points.map((point, index) => (
          <NumberPoint
            text={point}
            index={index}
          />
          ))}
        </div>
        <div>input</div>
        <div className="flex flex-row">
        </div>
    </div>
  )
}
function NumberPoint({text, index}:{text:string, index: number}) {
  return (
    <div className="flex-1 p-10 flex flex-col" key={index}>
      <div className="font-extrabold">{index + 1}</div>
      <div className="text-lg font-semibold">
          {text}
      </div>
    </div>
  )
}

export default StartTrade