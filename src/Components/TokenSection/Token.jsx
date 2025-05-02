import React from 'react'
import Register from '../RegisterBtn/Register'

const Token = () => {
    return (
        <div className='bg-[#0B0E12] w-full h-[480px]'>
            <h1 className=' text-white text-center justify-center'>
                <h2 className='text-[28px] sm:text-[56px] text-[#FFFFFF] font-medium lg:leading-[56px]'>With XV Token The</h2>
                <h2 className='text-[28px] sm:text-[56px] text-[#FFFFFF] font-medium lg:leading-[56px]'>Possibilities Are Limitless</h2>
            </h1>
            <div className='text-center mt-[30px] w-full'>
                <p className='text-[18px] lg:text-[22px] font-normal text-[#E2E6E7]'>One token for everything. $XV is the utility token for an ecosystem that has <span className='flex justify-center font-normal text-[#E2E6E7]'>gotten bigger than ever before and is now fully community-oriented.</span></p>
            </div>
            <div className='flex justify-center mt-[50px]'>
                <Register />
            </div>
        </div>
    )
}

export default Token
