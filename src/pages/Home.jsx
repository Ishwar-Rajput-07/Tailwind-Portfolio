import React from 'react'
import HomepageHero from "../assets/images/hero/hero-three/model.png"
// assets\images\hero\hero-three\model.png

const Home = () => {
    return <>
        <div className='grid lg:grid-cols-12 mx-8'>
            <div className='col-span-6  text-white 
                  py-14 md:py-12 lg:py-16 '>
                <div className=''>
                    <div className='text-4xl sm:text-5xl md:text-[4rem] lg:text-[4rem] font-bold md:w-[70%]  lg:w-full'>
                        <p className='py-1 md:py-6 lg:py-6'>Hey, I am</p>
                        <p className='py-1 md:py-6 lg:py-6'>Richard Lord</p>
                        <p className='py-1 md:py-6 lg:py-6'>Web Developer</p>
                    </div>
                    <p className='text-xl lg:text-2xl md:w-[60%]  lg:w-full my-3 text-gray-100'>
                        Agency work with top rated talented people provide qulaity services.
                    </p>

                    <div className=' my-8 md:my-12 lg:my-14 flex'>
                        <button className='bg-yellow-400 group text-center p-3 px-5  pe-10 text-xl text-black rounded-xl'>Let's Talk <i class="bi ps-1 group-hover:ps-3 absolute bi-arrow-right"></i>
                        </button>
                        <a className='mx-5 inline-flex' href="https://www.youtube.com/watch?v=XNhiqQJ01hQ">
                            <i class="bi text-5xl mx-2 animate-bounce bi-play-circle text-yellow-400"></i>
                            <div>
                                <p className='font-bold'> WATCH</p>
                                <p className='text-gray-400'>Intro Video</p>
                            </div>
                        </a>
                    </div>
                    <p>
                        Over <b className='text-yellow-400  '>50,000+ client</b> all over the world.
                    </p>
                </div>
            </div>
            <div className='col-span-6 lg:py-16 w-full '>
                <img src={HomepageHero} alt="" />
            </div>
        </div>
    </>
}

export default Home