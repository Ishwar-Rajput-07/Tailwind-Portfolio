import React from 'react'
import ResumeImg from "../assets/images/about/male.png"
// import imgIcon from "../assets/images/logo/logo-dev-f.svg"
// import imgIcon from "../assets/images/shape/line-lw.svg"
// import imgIcon from "../assets/images/shape/line-t.svg"
import ImgIcon1 from "../assets/images/clients/f-c-1.png"
import ImgIcon2 from "../assets/images/clients/f-c-2.png"
import ImgIcon3 from "../assets/images/clients/f-c-3.png"
import ImgIcon4 from "../assets/images/clients/f-c-4.png"
import ImgIcon5 from "../assets/images/clients/f-c-5.png"

const Resume = () => {

    const arr = ["HTML", "CSS", "Back-end", "PHP", "Front-end", "Java Script", "C++", "Figma", "Tailwind"]
    const icon = ["bi-filetype-html", "bi-filetype-css", "bi-filetype-sass", "bi-filetype-php", "bi-filetype-js", "bi-filetype-java", "bi-diagram-3-fill", "bi-bootstrap"]

    const imgBrand = [ImgIcon1, ImgIcon2, ImgIcon3, ImgIcon4, ImgIcon5, ImgIcon2]

    return <>

        <div className='mx-8 border bg-slate-900 py-12 px-10 rounded-xl'>
            <p className='text-5xl text-white'>Resume</p>
            <div className='grid grid-cols-12 text-white mt-16 gap-4'>
                <div className='col-span-12 lg:col-span-4 '>
                    <div className=' flex justify-between border-b pb-5 border-yellow-400'>
                        <div className=''>
                            <p className='text-2xl py-2 font-bold'>Richard Lord</p>
                            <p className='text-lg'>Web developer</p>
                        </div>
                        <div className='flex'>
                            <span className='text-7xl text-yellow-400 font-bold mx-3'>5</span>
                            <div className='text-lg font-bold mt-3'>
                                <p> Years</p>
                                <p>Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className=' pt-5'>
                        <p className='text-lg'>Hi there! My name is Richard lord, and I'm a web developer based in Dhaka, Bangladesh. I have a passion .
                        </p>
                        <p className='text-lg'> I've been working in the web development field for 5 years, and during that time, I've gained experience</p>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4 flex justify-center'>
                    <img src={ResumeImg} alt="" />
                </div>

                <div className='col-span-12 lg:col-span-4 '>
                    <div className=' flex justify-between items-center border-b pb-5 border-yellow-400'>
                        <div className=''>
                            <p className='text-xl py-2 font-bold'>Sr. Web Developer</p>
                            <p className='text-lg'><i class="bi bi-microsoft text-yellow-400"></i> Microsoft</p>
                        </div>
                        <div>
                            <button className='bg-yellow-400 text-black px-4 py-2  rounded'>
                                Current
                            </button>
                        </div>
                    </div>
                    <div className=' flex justify-between items-center border-b py-5 border-yellow-400'>
                        <div className=''>
                            <p className='text-xl py-2 font-bold'>Lead Web Developer</p>
                            <p className='text-lg'> Uber</p>
                        </div>
                        <div>
                            <button className='border text-yellow-400 border-yellow-400  px-4 py-2  rounded'>
                                2018-2020
                            </button>
                        </div>
                    </div>
                    <div className=' flex justify-between items-center py-5 '>
                        <div className=''>
                            <p className='text-xl py-2 font-bold'>Web Developer</p>
                            <p className='text-lg'>Linkedin <i class="bi text-blue-400 bi-linkedin"></i></p>
                        </div>
                        <div>
                            <button className='border text-yellow-400 border-yellow-400  px-4 py-2  rounded'>
                                2020-2022
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-12 text-white lg:gap-8 '>
                <div className='col-span-12 lg:col-span-6 pt-16 lg:me-12'>
                    <div className=' border-b py-2 mb-4 border-yellow-400'>
                        <p className='text-3xl'> Skills</p>
                    </div>
                    <div className=''>
                        {
                            arr.map(item => <button className='bg-slate-800 p-3 m-2 px-5 text-xl rounded-lg hover:text-black hover:bg-yellow-400'>
                                {item}
                            </button>)
                        }
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6 pt-5 lg:ms-12 mb-10 lg:pt-16'>
                    <div className=' border-b py-2  mb-4 border-yellow-400'>
                        <p className='text-3xl'> Tools I use every day</p>
                    </div>
                    <div className='text-6xl'>
                        {
                            icon.map(item => <button className='my-5 px-5'><i className={`bi ${item}  text-gray-500
                            hover:text-yellow-400`}></i></button>)
                        }
                    </div>

                </div>


            </div>
            <div className='grid grid-cols-12 '>
                <div className='col-span-12'>
                    <div className=' border-b py-2  mb-4 border-yellow-400'>
                        <p className='text-3xl text-white'> Freelance Clients</p>
                    </div>
                </div>
                {
                    imgBrand.map(item => <div className='col-span-6  md:col-span-4 lg:col-span-2'>
                        <img src={item} alt="" className='my-4 text-black hover:bg-gray-800' />
                    </div>)
                }
            </div>
        </div>



    </>
}

export default Resume