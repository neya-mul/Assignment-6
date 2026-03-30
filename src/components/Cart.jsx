import React from 'react'
import CartCom from './CartCom'

export default function Cart({ isBuyed, setIsBuyed }) {
    let totalPrice = isBuyed.reduce((sum, item) => sum + item.price, 0)

// console.log(totalPrice)
    return (
        <div className='w-full max-w-[1400px] mx-auto col-span-full space-y-2 border p-5 border-gray-400 rounded-2xl'>
            <h1 className='text-3xl'>Your Cart</h1>
            <div className='cards space-y-3'>

                {
                    isBuyed.map(product => <CartCom product={product}></CartCom>)
                }
            </div>

            <div className='flex justify-between'>
                <span>Price</span>
                <span>{totalPrice}</span>
            </div>

        </div>
    )
}
