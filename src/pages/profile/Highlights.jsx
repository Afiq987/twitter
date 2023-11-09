import React from 'react'

function Highlights() {
  return (
    <div className='flex justify-center mt-[20%]'>
    <div className='flex flex-col ms-[25%]'>
      <h1 className='text-3xl font-bold w-[60%] '>
      Highlight on your profile
      </h1>
      <p className='w-[60%] my-3'>
      You must be subscribed to Premium to highlight posts on your profile.
      </p>
      <button className='bg-[color:var(--color-base)] w-[50%] text-[var(--background-primary)] py-3 px-5 rounded-full font-bold'>Subscribe to Premium</button>
    </div>
    </div>
    
  )
}

export default Highlights