import React from 'react'
import BgImg from "../assets/images/bg/ac-ph.png"

const Service = () => {
    return <>
        <div className="grid grid-cols-12 mx-8 gap-6 py-14 ">
            <div className='col-span-12 group md:col-span-6 lg:col-span-5 md:pb-10 lg:pb-12 text-5xl text-white font-bold'>Expertise Service! Let’s Check It Out.</div>
            <div className='col-span-12 group md:col-span-6 lg:col-span-7 pb-10 md:pb-10 lg:pb-12 text-xl text-gray-300 pt-2'>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers. We’ve expert team to solve your problems.
            </div>
            <div className='col-span-12 group md:col-span-6 lg:col-span-4 relative bg-gray-900 p-7 border-yellow-400 hover:border rounded-xl overflow-hidden'>
                <div className='h-20 w-20 rounded-full bg-gray-600 opacity-90'>
                    <i class="bi bi-megaphone text-yellow-400 top-[3rem] left-[4rem] absolute text-5xl"></i>
                </div>
                <p className='text-2xl pt-5 pb-1 text-white'>
                    Website/ App Design UX/ UI Design &
                </p>
                <div className='text-gray-300'>
                    <p className='py-5'>
                        Creating a higher spacing for people through a unique campaigns Creating a higher people through.
                    </p>
                </div>

                <a href="" className='group-hover:text-yellow-400 text-xl pb-1 border-b-2 group-hover:border-yellow-400 text-gray-100'> Learn more<i className='bi rounded-lg ms-3 text-gray-100 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" />

            </div>

            <div className='col-span-12 overflow-hidden group md:col-span-6 lg:col-span-4 relative bg-gray-900 p-7 border-yellow-400 hover:border rounded-xl'>
                <div className='h-20 w-20 rounded-full bg-gray-600 opacity-90'>
                    <i class="bi bi-collection-play-fill text-yellow-400 top-[3rem] left-[4rem] absolute text-5xl"></i>
                </div>
                <p className='text-2xl pt-5 pb-1 text-white'>
                    Website/ App Design UX/ UI Design &
                </p>
                <div className='text-gray-300'>
                    <p className='py-5'>
                        Creating a higher spacing for people through a unique campaigns Creating a higher people through.
                    </p>
                </div>

                <a href="" className='group-hover:text-yellow-400 text-xl pb-1 border-b-2 group-hover:border-yellow-400 text-gray-100'> Learn more<i className='bi rounded-lg ms-3 text-gray-100 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" />
            </div>

            <div className='col-span-12 overflow-hidden group md:col-start-4 md:col-span-6 lg:col-span-4 relative bg-gray-900 p-7 border-yellow-400 hover:border rounded-xl'>
                <div className='h-20 w-20 rounded-full bg-gray-600 opacity-90'>
                    <i class="bi bi-palette-fill text-yellow-400 top-[3rem] left-[4rem] absolute text-5xl"></i>
                </div>
                <p className='text-2xl pt-5 pb-1 text-white'>
                    Website/ App Design UX/ UI Design &
                </p>
                <div className='text-gray-300'>
                    <p className='py-5'>
                        Creating a higher spacing for people through a unique campaigns Creating a higher people through.
                    </p>
                </div>

                <a href="" className='group-hover:text-yellow-400 text-xl pb-1 border-b-2 group-hover:border-yellow-400 text-gray-100'> Learn more<i className='bi rounded-lg ms-3 text-gray-100 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" />
            </div>


        </div>
    </>
}

export default Service