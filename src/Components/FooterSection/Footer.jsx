import React from 'react'
import FooterLogo from "../../assets/Images/Logo.png"

const Footer = () => {
    return (
        <div className='bg-[#0B0E12] w-full px-5 py-10 lg:px-[150px] lg:py-[60px]'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
                
                {/* Left Side */}
                <div className='lg:col-span-7 space-y-4'>
                    <img src={FooterLogo} alt="footer logo" className='w-[150px]' />
                    <p className='text-[#A7B5C3] text-[16px] lg:text-[20px]'>
                        A SocialFi platform for Web3.0 projects to connect with users.
                    </p>
                    <p className='text-[#A7B5C3]'>
                        WebXV is a decentralized social platform for Web3.0 users to meet and connect with one another
                    </p>
                </div>

                {/* Right Side */}
                <div className='lg:col-span-5 flex flex-col sm:flex-row gap-10'>
                    {/* Company Section */}
                    <div>
                        <h1 className='text-white text-[18px] lg:text-[20px] font-semibold mb-2'>Company</h1>
                        <ul className='space-y-2'>
                            <li className='text-[#A7B5C3]'>About us</li>
                            <li className='text-[#A7B5C3]'>Projects</li>
                            <li className='text-[#A7B5C3]'>Community</li>
                            <li className='text-[#A7B5C3]'>Privacy Policy</li>
                            <li className='text-[#A7B5C3]'>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h1 className='text-white text-[18px] lg:text-[20px] font-semibold mb-2'>Social</h1>
                        <ul className='space-y-2'>
                            <li className='text-[#A7B5C3]'>TikTok</li>
                            <li className='text-[#A7B5C3]'>Twitter</li>
                            <li className='text-[#A7B5C3]'>YouTube</li>
                            <li className='text-[#A7B5C3]'>Telegram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
