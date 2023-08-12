import React from 'react'
import CustomerImg from "../assets/images/avatar/axs-2.png"
import CustomerImg1 from "../assets/images/avatar/axs-4.png"

const Customer = () => {
    const arr = [1, 2, 3, 4, 5]
    return <>
        <div className='p-8 mt-20 bg-slate-900'>
            <div className=' text-center flex-col flex items-center mt-20'>
                <p className='text-yellow-400 font-semibold text-xl my-1'>CUSTOMER REVIEWS</p>
                <div className=' lg:pb-5 text-5xl text-white font-bold'>
                    What’s Our Customer Say
                </div>
            </div>
            <div className='grid grid-cols-12  gap-8 my-10'>
                <div className='rounded-xl col-span-12 md:col-span-6 lg:col-span-6 px-8  bg-slate-800'>
                    <div className='py-6'>
                        {
                            arr.map(item => <i className='bi bi-star-fill text-xl text-yellow-400 mx-1'></i>)
                        }
                    </div>
                    <p className='text-slate-400 text-xl italic'>" Pellentesque non nibh sapien a to a find rutrrnec into a fidn to end make it wow yes to maidn in avestibulu to mollis ".
                    </p>
                    <div className='flex mt-8 pb-8 gap-3'>
                        <img src={CustomerImg} alt="" />
                        <div>
                            <p className='text-white text-2xl font-bold'>John Boss</p>
                            <p className='text-slate-400'>Travel Agent</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl col-span-12 md:col-span-6 lg:col-span-6 px-8  bg-slate-800'>
                    <div className='py-6'>
                        {
                            arr.map(item => <i className='bi bi-star-fill text-xl text-yellow-400 mx-1'></i>)
                        }
                    </div>
                    <p className='text-slate-400 text-xl italic'>" Pellentesque non nibh sapien a to a find rutrrnec into a fidn to end make it wow yes to maidn in avestibulu to mollis ".
                    </p>
                    <div className='flex mt-8 pb-8 gap-3'>
                        <img src={CustomerImg1} alt="" />
                        <div>
                            <p className='text-white text-2xl font-bold'>Jue Jila</p>
                            <p className='text-slate-400'>Travel Agent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Customer