import React from 'react'

export default function Rating() {
    return (
        <div className='bg-linear-to-r from-blue-500 to-purple-500  '>
            <div className='flex max-w-[1200px] mx-auto'>
                <div className='mx-auto p-4'>
                    <h1 className='text-5xl text-white font-bold'>50K+</h1>
                    <p className='text-white'>Active Users</p>
                </div>
                <div className="divider divider-horizontal divider-end"></div>
                <div className='mx-auto p-4'>
                    <h1 className='text-5xl text-white font-bold'>200+</h1>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal divider-end"></div>
                <div className='mx-auto p-4'>
                    <h1 className='text-5xl text-white font-bold'>4.9</h1>
                    <p className='text-white'>Rating</p>
                </div>
            </div>

        </div>
    )
}
