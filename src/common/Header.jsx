import React, { useState, useEffect } from 'react'
import { HEADER_LINK } from '../utils/helper'
import { SearchIcon } from '../utils/icons'
const Header = () => {
    const [open, setOpen] = useState()

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 770) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <section className='bg-blue'>
            <div className='max-w-[1215px] px-4 mx-auto max-lg:pl-8 max-md:px-4'>
                <div className='flex items-center justify-between pt-[27px] pb-4 max-md:py-6 max-sm:py-3'>
                    <a href="/" className='md:hidden'>
                        <img src="/assets/images/webp/nav-logo.webp" alt="nav-logo" className='md:hidden h-[15px]' />
                    </a>
                    <ul className='flex items-center gap-6 md:-mb-4 max-md:hidden'>
                        {HEADER_LINK.map((obj, i) => (
                            <li key={i}><a href={obj.link} className='text-white text-[13px] font-notoSans leading-[15px] relative flex after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-[0.2px] after:bg-white '>{obj.title}</a></li>
                        ))}
                    </ul>
                    <form action="" className='max-w-[257px] border border-white rounded-[5px] flex items-center justify-between overflow-hidden max-md:hidden pr-3'>
                        <input required type="text" placeholder='Search by Keyword' className='text-white text-[13px] placeholder-white font-notoSans leading-[15px] pl-[14px]  py-2 outline-none bg-transparent' />
                        <button> <SearchIcon /> </button>
                    </form>
                    <div
                        className={`md:hidden z-30 cursor-pointer`}
                        onClick={() => setOpen(!open)}
                    >
                        <div className={`flex flex-col gap-[3px] items-center`}>
                            <div className={`h-[2px] bg-white w-5 transition-all duration-300 ${open ? "rotate-[33deg] origin-left" : ""} `}></div>
                            <div className={`h-[2px] bg-white w-5 transition-all duration-300 ${open ? "opacity-0" : ""} `}></div>
                            <div className={`h-[2px] bg-white w-5 transition-all duration-300 ${open ? "-rotate-[30deg] origin-left" : ""} `}></div>
                            <p className='text-white text-xs text-center -mt-1 font-notoSans'>MENU</p>
                        </div>
                    </div>
                    <div className={`w-full h-full transition-all duration-500 left-0 lg:-top-full z-20 fixed flex flex-col bg-blue justify-center items-center ${open ? "top-0 left-0" : "-top-full"
                        }`}>
                        <ul className='flex items-center flex-col gap-6 md:hidden'>
                            {HEADER_LINK.map((obj, i) => (
                                <li key={i}><a href={obj.link} className='text-white text-[13px] font-notoSans leading-[15px]'>{obj.title}</a></li>
                            ))}
                            <form action="" className='max-w-[257px] border border-white rounded-[5px] flex items-center justify-between overflow-hidden pr-3'>
                                <input required type="text" placeholder='Search by Keyword' className='text-white text-[13px] placeholder-white font-notoSans leading-[15px] pl-[14px]  py-2 outline-none bg-transparent' />
                                <button> <SearchIcon /> </button>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header