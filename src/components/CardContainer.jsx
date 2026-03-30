import React, { use, useState } from 'react'
import Card from './Cards'
import Cards from './Cards'

export default function CardContainer({items}) {
    const data = use(items)
    // console.log(datas)
    const [isSelected, setIsSelected] = useState('products')
    return (
        <div className='my-10'>
            <div className='text-center max-w-[500px] mx-auto space-y-2'>
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div>

                    <button onClick={() => setIsSelected('products')} className={`btn ${isSelected === 'products' ? "bg-linear-to-r from-blue-600 to-purple-500 text-white" : 'bg-white'} text-black rounded-2xl`}>Products</button>
                    <button onClick={() => setIsSelected('cart')} className={`btn ${isSelected === 'cart' ? "bg-linear-to-r from-blue-600 to-purple-500 text-white" : 'bg-white'} text-black rounded-2xl`}>Cart (0)</button>
                </div>
            </div>

            <div>
                {
                    data.map(card=> <Cards key={card.id} card={card}></Cards>)
                }
                
            </div>
        </div>
    )
}
