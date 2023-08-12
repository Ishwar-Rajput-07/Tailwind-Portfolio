import React, { useState } from 'react'
import NavbarImg from "../assets/images/logo/logo-dev-f.svg"


const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    return <>
        <div className=' sticky top-5  z-50'>
            <div className='mx-8'>
                <div className='w-full bg-slate-50 rounded-xl ' >
                    <div className='flex text-center justify-between p-3 mx-4'>
                        <div className='flex items-center '>
                            <img className='pe-4 md:h-12 lg:h-16' src="https://quomodothemes.website/fallow/assets/images/logo/logo-dev-m.svg" alt="" />

                            <div className='text-lg  text-center ms-[2rem] hidden lg:block '>
                                <a className='p-3 ' href="">Home</a>
                                <a className='p-3' href="">Service</a>
                                <a className='p-3' href="">Portfolio</a>
                                <a className='p-3' href="">Blog</a>
                                <a className='p-3' href="">Pages</a>
                                <a className='p-3' href="">About</a>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='hidden lg:block group '>
                                <button className='bg-yellow-400 text-center  p-3 px-5  pe-10 text-xl  rounded-xl'>Let's Talk <i class="bi ps-1 transition duration-[2000]  group-hover:ps-3 absolute bi-arrow-right"></i>
                                </button>
                            </div>

                            <button onClick={e => setToggle(!toggle)} className='text-center lg:hidden'><i class={toggle ? " bi text-3xl bi-list " : "text-3xl bi-x-lg"}></i>  </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative z-[61]'>
                <div className={!toggle ? " flex flex-col right-0 top-4 w-full bg-slate-50 text-2xl absolute lg:hidden text-center ms-[2rem]" : " hidden "}>
                    <a className='p-4 hover:bg-slate-200' href="">Home</a>
                    <a className='p-4 hover:bg-slate-200' href="">Service</a>
                    <a className='p-4 hover:bg-slate-200' href="">Portfolio</a>
                    <a className='p-4 hover:bg-slate-200' href="">Blog</a>
                    <a className='p-4 hover:bg-slate-200' href="">Pages</a>
                    <a className='p-4 hover:bg-slate-200' href="">About</a>
                </div>
            </div>
        </div >
    </>
}

export default Navbar