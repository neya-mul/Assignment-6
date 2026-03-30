import React from 'react'
import { MdVerified } from 'react-icons/md'

export default function Cards({ card }) {
  console.log(card)
  return (
    <div className='border p-10 max-w-[500px]'>

      <div className='flex justify-between'>

        <img src={card.image} alt="" className='h-[50px] w-fit' />
        <span className='border'>{card.tag}</span>
      </div>
      <h1>{card.name}</h1>
      <p>{card.description}</p>
      <p>{card.price}/month</p>
      <p className='flex items-center'> <span className='text-green-500'><MdVerified /></span> {card.features[0]}</p>
      <p className='flex items-center'> <span className='text-green-500'><MdVerified /></span> {card.features[1]}</p>
      <p className='flex items-center'> <span className='text-green-500'><MdVerified /></span> {card.features[2]}</p>

      <button className='btn w-full btn-primary'> Buy Now</button>

    </div>
  )
}
