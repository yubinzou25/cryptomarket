import React from 'react'

function Download() {
  return (
  <div className="flex flex-row justify-evenly">
    <div className="flex flex-col just">
      <div className="text-3xl lg:text-4xl text-center font-semibold">
      Trade Anywhere
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
  )
}

export default Download