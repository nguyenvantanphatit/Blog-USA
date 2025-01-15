import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Hero() {
    return (
        <>
            <section className="py-12 relative w-full max-w-screen-2xl mx-auto px-4 md:px-16">
                <div className="grid grid-cols-12 gap-y-4">
                    <div className="col-span-12 lg:col-span-7 md:py-12 pb-8 lg:px-11">
                        <h2 className="font-manrope font-bold text-2xl sm:text-4xl mb-2">Empowering Communities <br /> Affected by Wildfires</h2>
                        <p className='mb-8'>Bringing immediate relief and long-term recovery support</p>
                        <div className='flex items-center gap-4 md:gap-8'>
                            <a href="/" className="flex items-center rounded-full py-3 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-[#0d99ff]">
                                <span className="px-2 md:px-10 font-medium text-sm md:text-base text-white">Recovery Services</span>
                            </a>
                            <a href="/" className="flex items-center rounded-full py-3 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-[#0d99ff]">
                                <span className="px-2 md:px-20 font-medium text-sm md:text-base text-white">Get Help</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto">
                        <img src="/Banner/Empowering-Communities-Affected-by-Wildfires.jpg" alt="Warehouse image" className="w-full h-full rounded-lg object-cover" />
                    </div>
                </div>
               
                <section className="py-24">
                    <section className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left bg-[#E5F4FF] md:ml-24 p-8 ">
                            <h2 className="font-manrope font-bold text-2xl sm:text-4xl mb-2">Who we are</h2>
                            <p className='mb-8'>We are individuals from diverse backgrounds, united by a common goal: to help Southern California recover and thrive. Through partnerships with local governments, private companies, and community organizations, we leverage collective expertise and resources to deliver impactful results.</p>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <Image
                                src="/Banner/who-we-are.png"
                                width={520}
                                height={400}
                                alt="Group of people collaborating"
                                className="rounded-lg"
                            />
                        </div>
                    </section>
                </section>
                <section className='py-24'>
                    <div className='flex items-center justify-around gap-4 flex-col md:flex-row'>
                        <div>
                            <h2 className="text-center font-manrope font-bold text-2xl sm:text-4xl mb-2">Services Offered</h2>
                            <p className='text-center mb-12'>Get the support you need</p>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full" src="/Banner/service-offer-1.png" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Relief Support</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description of Relief Support</p>
                                </div>
                            </div>
                            <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg  w-full" src="/Banner/service-offer-2.png" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recovery Services</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description of Recovery Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center">News</h2>
                        <p className='text-center mb-12 mt-2'>Bringing immediate relief and long-term recovery support</p>
                        <div className="flex justify-center gap-y-4 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-4">
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-1.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-2.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-3.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-4.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24">
                    <section className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <Image
                                src="/Banner/join-us.png"
                                width={588}
                                height={397}
                                alt="Group of people collaborating"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="font-manrope font-bold text-2xl sm:text-4xl mb-2">Join Us</h2>
                            <p className='mb-8'>The road to recovery is long, but it’s one we don’t have to walk alone. Whether you’ve been affected by the fires, are looking to offer help, or want to be part of rebuilding a stronger future, the SoCal Rise Project is here. </p>
                            <Link href="" className='text-blue-300'>Let’s rise, rebuild, and create a new chapter of hope.</Link>
                            <button className='mt-4 text-white block rounded-full w-full py-3 shadow-sm shadow-transparent bg-[#0d99ff]'>Get Involved</button>
                        </div>
                    </section>
                </section>
                <section className="py-24">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center">Media Coverage</h2>
                        <p className='text-center mb-12 mt-2'>Description</p>
                        <div className="flex justify-center gap-y-4 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-4">
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-1.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-2.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-3.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src="/Blog/new-4.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                    <span className="text-indigo-600 font-medium block">Jan 01, 2025</span>
                                    <h4 className="text-xl text-gray-900 font-medium leading-8">Clever ways to invest in product to organize your portfolio</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
