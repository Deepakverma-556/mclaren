import React from 'react'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div className='bg-hero bg-cover bg-center bg-no-repeat overflow-hidden'>
            <div className='bg-darkBlue max-md:hidden'>
                <div className='max-w-[1215px] max-lg:pl-8 mx-auto px-4 flex items-center justify-between'>
                    <img src="/assets/images/webp/tdk-logo.webp" alt="top-bar" className='h-[19px] object-cover' />
                    <img src="/assets/images/webp/language-img.webp" alt="language-img" className='h-[42px] max-lg:-mr-[60px]' />
                </div>
            </div>
            <Header />
            <div className='max-w-[1215px] mx-auto px-4 pt-[68px] pb-[512px] max-lg:pb-[657px] max-lg:pt-[71px] max-md:pt-[39px] max-md:pb-[380px]'>
                <h1 className='font-notoSans font-bold text-[61px] leading-[83px] text-white max-w-[1072px] text-center pb-[15px] max-lg:pb-[53px] max-md:text-3xl max-md:leading-[40.86px] max-md:pb-[15px] max-lg:max-w-[753px] max-md:max-w-[374px] mx-auto'>Driving Transformation for Performance and Passion Within</h1>
                <p className='font-notoSans text-[22px] leading-[29.96px] text-white max-w-[960px] text-center max-md:text-base max-md:leading-[21.79px] max-lg:max-w-[400px] max-md:max-w-[300px] mx-auto'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
            </div>
        </div>
    )
}

export default Hero