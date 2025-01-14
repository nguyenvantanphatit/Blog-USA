import React from 'react'
export default function Hero() {
    return (
        <>
            <section className="py-12 relative w-full max-w-screen-2xl mx-auto px-4 md:px-8">
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
                <section className='py-24'>
                    <div className='flex items-center justify-between gap-4 flex-col md:flex-row'>
                        <div>
                            <h2 className="text-center font-manrope font-bold text-2xl sm:text-4xl mb-2">Services Offered</h2>
                            <p className='text-center mb-12'>Get the support you need</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                </div>
                            </div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-24'>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center w-full max-w-4xl py-10">
                            <h1 className="text-4xl font-bold mb-6">Your Custom Layout</h1>
                            <p className="text-lg text-gray-400">
                                This is a sample UI built with Tailwind CSS and Next.js.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-between w-full max-w-4xl px-4 py-6">
                            <div className="text-xl font-bold flex items-center">
                                🏠 <span className="ml-2">Home</span>
                            </div>
                            <div className="text-xl font-bold flex items-center">
                                🔧 <span className="ml-2">Tools</span>
                            </div>
                        </div>


                    </div>
                </section>
            </section>

        </>
    )
}
