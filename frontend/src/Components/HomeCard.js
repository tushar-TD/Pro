import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ name, image, price, loading, id }) => {
  return (
    <div className='bg-white  min-w-[150px] shadow-lg p-3 rounded-md'>

      {
        name ? (
          <>
            <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className='w-40 min-h-[120px]'>
                <img src={image} className='h-full w-full' />
              </div>
              <h3 className='font-semibold text-violet-500
      text-lg capitalize text-center'>{name}</h3>
              <h3 className='font-semibold 
      text-lg capitalize text-center '>{price} ₹</h3>
            </Link>
          </>
        )
          :
          <p>{loading}</p>}
    </div >
  )
}

export default HomeCard
