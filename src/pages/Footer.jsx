import React from 'react'
import Icon from "../assets/images/logo/logo-dev-f.svg"


const Footer = () => {
    return <>
        <div className="bg-[url('assets\images\bg\dev-ft-bg.jpg')] ">
            <div className='grid grid-cols-12 text-white mx-8 mt-20 pb-24 gap-8'>
                <div className='col-span-12 pb-10 md:col-span-6 lg:col-span-3 border-b md:border-b-0 lg:border-b-0'>
                    <img src={Icon} alt="" />
                    <p className='my-8'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 me-1 bi-facebook'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 m-1 bi-instagram'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 m-1 bi-google'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 m-1 bi-twitter'></i>
                </div>

                <div className='col-span-12 md:col-span-3 lg:col-span-2  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-3xl font-bold'>Links</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>Home</p>
                    <p className='text-lg my-3'>Service</p>
                    <p className='text-lg my-3'>Blog</p>
                    <p className='text-lg my-3 mb-6'>Contact Us</p>
                </div>

                <div className='col-span-12 md:col-span-3 lg:col-span-3  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-3xl font-bold'>Services</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>Contact & Faq</p>
                    <p className='text-lg my-3'>Track Your Order</p>
                    <p className='text-lg my-3'>Shipping</p>
                    <p className='text-lg my-3 mb-6'>Trade Program</p>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <p className='text-3xl font-bold'>Official Info:</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'><i class="bi bi-geo-alt-fill text-yellow-400"></i> 30 Commercial Road Fratton, Australia</p>
                    <p className='text-lg my-3'><i className='bi bi-telephone-fill text-yellow-400'></i> 1-888-452-1505</p>
                    <p className='text-2xl font-bold mt-8 '>Subscribe Newsletter</p>
                    <div className='flex'>
                        <input type="text" className='mt-8 bg-slate-700 w-[50%] p-3 px-5  pe-10 text-xl  rounded-l-lg' placeholder='Email address' />
                        <button className='bg-yellow-400 text-center text-black  mt-8 p-3 px-6  text-xl  rounded-r-lg'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center text-white border-t text-xl  p-5'>
            Copyright © 2023 – All Rights Reserved. Made by Rajput Ishwar
        </div>
    </>
}

export default Footer