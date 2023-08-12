import React from 'react'
import Img1 from "../assets/images/blogs/th-9.jpg"
import Img2 from "../assets/images/blogs/th-7.jpg"
// import BgImg from "../assets/images/bg/cta-pm-1.jpg"

const NewsData = () => {
    return <>
        <div className='mx-8 mt-10 '>
            <div className=' text-center flex-col flex items-center mt-20'>
                <div className=' lg:pb-5 text-5xl text-white font-bold'>
                    What’s Our Customer Say
                </div>
            </div>
            <div className='grid grid-cols-12  gap-10 my-10'>
                <div className='rounded-xl col-span-12 md:col-span-6 lg:col-span-6 p-6  bg-slate-900'>
                    <img className='w-full rounded' src={Img1} alt="" />
                    <div className='mt-8 text-white '>
                        <span className='p-2 me-2 bg-slate-700 rounded-lg'>Digital</span>
                        <span className='p-2 bg-slate-700 rounded-lg'>Marketing</span>
                        <p className='text-2xl py-6 font-bold'>The Highly Creative UI/UX Workflow from a Silicon Valley.</p>
                        <p className='text-slate-400'>3 Days read</p>
                    </div>
                </div>
                <div className='rounded-xl col-span-12 md:col-span-6 lg:col-span-6 p-6  bg-slate-900'>
                    <img className='w-full rounded' src={Img2} alt="" />
                    <div className='mt-8 text-white '>
                        <span className='p-2 me-2 bg-slate-700 rounded-lg'>Digital</span>
                        <span className='p-2 bg-slate-700 rounded-lg'>Marketing</span>
                        <p className='text-2xl py-6 font-bold'>Organic Food Isn’t Much Better For Your Future Health.</p>
                        <p className='text-slate-400'>5 Days read</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[url('assets/images/bg/cta-pm-1.jpg')] px-8 text-white lg:h-[18rem]">
            <div className='grid grid-cols-12 mt-20 py-20 px-5 gap-5'>
                <div className='col-span-12 lg:col-span-7 text-5xl  '>
                    <p>Have a project in mind?</p>
                    <p className='py-2'>Let’s get to work.👋📫</p>
                </div>
                <div className='col-span-12 lg:col-span-5'>
                    <p className='text-2xl'>I am product designer,
                        who are excited about unique ideas and help.
                    </p>
                    <button className='bg-yellow-400 text-center text-black group mt-8 p-3 px-5  pe-10 text-xl  rounded-xl'>Download CV <i class="bi ps-1 group-hover:pt-3 absolute bi-arrow-down"></i>
                    </button>
                </div>

            </div>

        </div>



    </>
}

export default NewsData