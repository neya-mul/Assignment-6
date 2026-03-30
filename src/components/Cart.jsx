import React from 'react'
import CartCom from './CartCom'

export default function Cart({ isBuyed, setIsBuyed }) {


    return (
        <div className='w-full max-w-[1400px] mx-auto col-span-full space-y-2'>
            <h1 className='text-3xl'>Your Cart</h1>
            <div className='cards space-y-3'>

                {
                    isBuyed.map(product => <CartCom product={product}></CartCom>)
                }
            </div>

        </div>
    )
}
