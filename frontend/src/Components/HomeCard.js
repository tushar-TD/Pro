import React from 'react'

const HomeCard = ({ name, image, price }) => {
  return (
    <div className='bg-white shadow-lg p-3 rounded-md'>
      <div className='w-40 min-h-[120px]'>
        <img src={image} className='h-full w-full' />
      </div>
      <h3 className='font-semibold text-violet-500
      text-lg capitalize text-center'>{name}</h3>
      <h3 className='font-semibold 
      text-lg capitalize text-center'>{price} Rs</h3>
    </div >
  )
}

export default HomeCard
