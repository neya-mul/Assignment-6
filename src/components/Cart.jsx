import React from 'react'
import CartCom from './CartCom'

export default function Cart({ isBuyed, setIsBuyed }) {
    let totalPrice = isBuyed.reduce((sum, item) => sum + item.price, 0)
    const proceed = ()=>{
        setIsBuyed([])
    }

    // console.log(totalPrice)
    return (
        <div className='w-full max-w-[1400px] mx-auto col-span-full space-y-2 border p-5 border-gray-400 rounded-2xl'>
            <h1 className='text-3xl'>Your Cart</h1>

         {isBuyed.length > 0?   <div className='cards space-y-3'>

                {
                    isBuyed.map(product => <CartCom product={product}></CartCom>)
                }
            </div>
            : <div className='text-center'>
                <h1 className='text-2xl'>Your cart is empty</h1>
                <p>Please select any item</p>
            </div>
            }

            <div className='flex justify-between'>
                <span>Price</span>
                <span>{totalPrice}</span>
            </div>
            <div>
                <button onClick={proceed} className='btn w-full'>Proceed to Checkout</button>
            </div>
        </div>
    )
}
