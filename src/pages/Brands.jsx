import React from 'react'

const Brands = () => {
    
    return <div className=''>
        <div className=' grid grid-cols-12 gap-5 mx-8 py-10 ' >
            <div className='hover:bg-yellow-400  transition duration-200 group border-dotted border border-orange-300  col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl'>
                <div className='justify-center  transition duration-200 text-3xl m-8 flex  text-white group-hover:text-black'>
                    <i class="bi me-3 bi-stack-overflow"></i>
                    <p>overflow</p>
                </div>
            </div>
            <div className='hover:bg-yellow-400 transition duration-200 group border-dotted border border-orange-300  col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl'>
                <div className='justify-center transition duration-200 text-3xl m-8 flex text-white group-hover:text-black'>
                    <i class="bi me-3 bi-github"></i>
                    <p>Github</p>
                </div>
            </div>
            <div className='hover:bg-yellow-400 transition duration-200 group border-dotted border border-orange-300  col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl'>
                <div className='justify-center transition duration-200 text-3xl m-8 flex text-white group-hover:text-black'>
                    <i class="bi me-3 bi-medium"></i>
                    <p>Medium</p>
                </div>
            </div>
            <div className='hover:bg-yellow-400 transition duration-200 group border-dotted border border-orange-300  col-span-12  sm:col-span-6 md:col-span-12 lg:col-span-3 rounded-xl'>
                <div className='justify-center transition duration-200 text-3xl m-8 flex text-white group-hover:text-black'>
                    <i class="bi me-3 bi-linkedin"></i>
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
    </div>
}

export default Brands