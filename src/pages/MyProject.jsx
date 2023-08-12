import React from 'react'
import GridImg1 from "../assets/images/portfolio/ms-1.jpg"
import GridImg2 from "../assets/images/portfolio/ms-2.jpg"
import GridImg3 from "../assets/images/portfolio/ms-3.jpg"
import GridImg4 from "../assets/images/portfolio/ms-4.jpg"
import GridImg5 from "../assets/images/portfolio/ms-5.jpg"

const MyProject = () => {
    return <>
        <div className='mx-8'>
            <div className=' text-center flex-col flex items-center '>
                <div className='pt-28 lg:pb-5 text-5xl text-white font-bold'>Let’s Check my Projects</div>
                <div className='  pb-10 md:pb-10 lg:pb-12 text-xl md:w-[60%] lg:w-[50%] text-gray-300 pt-2'>
                    <p>Donec dignissim, metus sit amet suscipit mauris vul putate odio, quis cursus nunc urna Aliqum tell us. Quisque hendrerit ..</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-6 '>
                <div className='col-span-12 md:col-span-6 group relative lg:col-span-4 h-[22rem] '>
                    <div className='h-[22rem] absolute group-hover:block hidden opacity-70 bg-black w-full '>
                    </div>
                    <div className='left-[24%]  group-hover:block hidden absolute top-[35%]  flex-col items-center '>
                        <div className='text-3xl text-center  text-white font-'>
                            <p className=''> User Data Collects </p>
                            <p>for Movie App</p>
                        </div>
                        <div className='flex items-center justify-center text-white '>
                            <i class="bi text-yellow-400 text-3xl bi-dot"></i>
                            <span className='text-xl'> UI UX Project</span>
                        </div>
                        <div className='text-center'>
                            <button className='border text-yellow-400 border-yellow-400 px-4 py-2 my-5 rounded'>
                                View Project
                            </button>
                        </div>
                    </div>
                    <img className='w-full rounded-lg h-[22rem]' src={GridImg1} alt="" />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-8  group relative h-[22rem] overflow-hidden'>
                    <div className='h-[22rem] absolute group-hover:block hidden opacity-70 bg-black w-full '>
                    </div>
                    <div className='left-[24%] lg:left-[35%]  group-hover:block hidden absolute top-[35%]  flex-col items-center '>
                        <div className='text-3xl text-center  text-white font-'>
                            <p className=''> User Data Collects </p>
                            <p>for Movie App</p>
                        </div>
                        <div className='flex items-center justify-center text-white '>
                            <i class="bi text-yellow-400 text-3xl bi-dot"></i>
                            <span className='text-xl'> UI UX Project</span>
                        </div>
                        <div className='text-center'>
                            <button className='border text-yellow-400 border-yellow-400 px-4 py-2 my-5 rounded'>
                                View Project
                            </button>
                        </div>
                    </div>
                    <img className='w-full rounded-lg h-[22rem]' src={GridImg2} alt="" />
                </div>
                <div className='col-span-12 md:col-span-6 group relative lg:col-span-4 h-[22rem] '>
                    <div className='h-[22rem] absolute group-hover:block hidden opacity-70 bg-black w-full '>
                    </div>
                    <div className='left-[24%]  group-hover:block hidden absolute top-[35%]  flex-col items-center '>
                        <div className='text-3xl text-center  text-white font-'>
                            <p className=''> User Data Collects </p>
                            <p>for Movie App</p>
                        </div>
                        <div className='flex items-center justify-center text-white '>
                            <i class="bi text-yellow-400 text-3xl bi-dot"></i>
                            <span className='text-xl'> UI UX Project</span>
                        </div>
                        <div className='text-center'>
                            <button className='border text-yellow-400 border-yellow-400 px-4 py-2 my-5 rounded'>
                                View Project
                            </button>
                        </div>
                    </div>
                    <img className='w-full rounded-lg h-[22rem]' src={GridImg3} alt="" />
                </div>
                <div className='col-span-12 md:col-span-6 group relative lg:col-span-4 h-[22rem] '>
                    <div className='h-[22rem] absolute group-hover:block hidden opacity-70 bg-black w-full '>
                    </div>
                    <div className='left-[24%]  group-hover:block hidden absolute top-[35%]  flex-col items-center '>
                        <div className='text-3xl text-center  text-white font-'>
                            <p className=''> User Data Collects </p>
                            <p>for Movie App</p>
                        </div>
                        <div className='flex items-center justify-center text-white '>
                            <i class="bi text-yellow-400 text-3xl bi-dot"></i>
                            <span className='text-xl'> UI UX Project</span>
                        </div>
                        <div className='text-center'>
                            <button className='border text-yellow-400 border-yellow-400 px-4 py-2 my-5 rounded'>
                                View Project
                            </button>
                        </div>
                    </div>
                    <img className='w-full rounded-lg h-[22rem]' src={GridImg4} alt="" />
                </div>
                <div className='col-span-12 md:col-span-6 group relative lg:col-span-4 h-[22rem] '>
                    <div className='h-[22rem] absolute group-hover:block hidden opacity-70 bg-black w-full '>
                    </div>
                    <div className='left-[24%]  group-hover:block hidden absolute top-[35%]  flex-col items-center '>
                        <div className='text-3xl text-center  text-white font-'>
                            <p className=''> User Data Collects </p>
                            <p>for Movie App</p>
                        </div>
                        <div className='flex items-center justify-center text-white '>
                            <i class="bi text-yellow-400 text-3xl bi-dot"></i>
                            <span className='text-xl'> UI UX Project</span>
                        </div>
                        <div className='text-center'>
                            <button className='border text-yellow-400 border-yellow-400 px-4 py-2 my-5 rounded'>
                                View Project
                            </button>
                        </div>
                    </div>
                    <img className='w-full rounded-lg h-[22rem]' src={GridImg5} alt="" />
                </div>
            </div>
            <div className='mt-16 text-center flex-col flex items-center '>
                <button className='border text-2xl text-white border-whitw px-8 py-2 my-5 rounded'>See More
                </button>
            </div>
        </div>
    </>
}

export default MyProject