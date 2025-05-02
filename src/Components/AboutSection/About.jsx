import React from 'react'
import AboutImages from "../../assets/Images/aboutImages.png"

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0B0E12] w-full h-auto py-[50px]'>
            {/* Left Section */}
            <div className='lg:col-span-6 px-6 sm:px-10 md:px-20 lg:px-[100px] text-[16px] sm:text-[18px] font-normal'>
                <p className='text-[#335DD2] mb-4'>
                    About Us
                </p>
                <div>
                    <h5 className='text-[#FFFFFF] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold'>
                        Who we are
                    </h5>
                </div>
                <div className='space-y-4'>
                    <p className='text-[#828493] text-[14px] sm:text-[16px] md:text-[18px]'>
                        XV is a community-focused project led by a highly experienced team of Web3 builders and traders. Our founder A On made his name in the industry moderating for several early crypto projects before the 2021 bull run.
                    </p>
                    <p className='text-[#828493] text-[14px] sm:text-[16px] md:text-[18px]'>
                        XV is also supported by several team members that are actively involved in the day-to-day running of the community. Join us on Telegram and Twitter.
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className='lg:col-span-6 text-white flex justify-center items-center px-6'>
                <img src={AboutImages} alt="About" className='w-full h-auto max-w-[500px]' />
            </div>
        </div>
    )
}

export default About
