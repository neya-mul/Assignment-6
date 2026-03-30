import React from 'react'

export default function CartCom({ product }) {
  return (
    <div className='space-y-3.5'>
      {/* cards */}
      <div className='flex justify-between p-2 items-center border border-gray-300 rounded-2xl'>
        <div className='flex items-center gap-3'>
          <img src={product.image} className='h-[50px] w-fit' alt="" />
          <div className=''>
            <h1>{product.name}</h1>
            <p className='items-center'>${product.price}</p>
          </div>

        </div>
        <button className='btn text-red-500'>Remove</button>
      </div>

    </div>
  )
}
