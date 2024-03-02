import React from 'react'

function Journey() {
  return (
    <div className="flex flex-col justify-between gap-y-10">
        <div className="text-3xl lg:text-4xl text-center font-semibold">
          Register & Start Trading!
        </div>
        <div className="flex justify-center">
        <button className="bg-primary-default hover:bg-primary-hover rounded-md p-1">
            {'Register Now ->'}
          </button>
        </div>
    </div>
  )
}

export default Journey