import React from 'react'
import LinkButton from '../../util/LinkButton'

function Journey() {
  return (
    <div className="flex flex-col justify-between gap-y-10">
        <div className="text-3xl lg:text-4xl text-center font-semibold">
          Register & Start Trading!
        </div>
        <div className="flex justify-center">
        <LinkButton to="/" buttonText="Register Now ->" primaryColor={true}/>
        </div>
    </div>
  )
}

export default Journey