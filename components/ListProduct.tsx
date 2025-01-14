import { ChevronsRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ListProduct() {
    return (
        <>
            {/* <div className='flex items-center justify-between'>
                <div className='w-1/2'>
                    <div className='group-hover:bg-blue-400 bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1'>
                        stastic
                    </div>
                    <span className='text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                        Subscriber Reports
                    </span>
                    <span className='text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                        Subscriber Highlights
                    </span>
                    <p className='text-sm text-slate-500'>
                        Building truly great products is both art and science. It's part intuition and part data.
                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="922" height="922" viewBox="0 0 922 922"><g fill="none" fillRule="evenodd"><circle cx="461" cy="461" r="389.236" stroke="#D9D9D9" opacity=".535"></circle><circle cx="461" cy="461" r="460.5" stroke="#D9D9D9" opacity=".535"></circle><circle cx="230.7" cy="149.733" r="7.2" fill="#1D4169"></circle><circle cx="10.7" cy="367.533" r="7.2" fill="#244E9D"></circle><circle cx="276.2" cy="38.533" r="7.2" fill="#00BFD6"></circle></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="923" height="922" viewBox="0 0 923 922"><g fill="none" fillRule="evenodd" stroke="#D9D9D9" opacity=".535" transform="translate(.5)"><circle cx="461" cy="461" r="389.236"></circle><circle cx="461" cy="461" r="460.5"></circle></g></svg>
                <div className='w-1/2'>
                    <section
                        className="relative"
                        style={{
                            aspectRatio: '1213/667',
                            backgroundColor: 'tomato',
                            maskImage:
                                "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                            WebkitMaskImage:
                                "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                        }}
                    >
                        <img
                            src="/Gift/7.webp"
                            alt=""
                            className="w-full h-full object-cover aspect-auto hover:scale-105 transition-all duration-300"
                        />
                    </section>
                </div>
            </div> */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <section className='grid md:grid-cols-4 gap-6 max-md:max-w-xs mx-auto my-20'>
                        <div className="group bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:opacity-5 rounded-2xl border ">
                            <div className='relative '>
                                <div className='relative mt-4 h-[450px] overflow-hidden group mx-auto rounded-md flex flex-col'>
                                    <div className='flex items-end justify-end px-4'>
                                        <div className='group-hover:bg-blue-400 bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1'>
                                            SALE
                                        </div>
                                    </div>
                                    <div className='w-full h-full'>
                                        <Image
                                            className='group-hover:opacity-0 transition-opacity duration-500  object-cover h-full m-0 p-0'
                                            src='/Gift/1.webp'
                                            width={350}
                                            height={240}
                                            alt='Card image 01'
                                        />
                                        <Image
                                            className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300  h-full  m-0 p-0'
                                            src='/Gift/1.webp'
                                            width={350}
                                            height={240}
                                            alt='Card image 01 displaying on hover'
                                            aria-hidden='true'
                                        />

                                    </div>
                                    <div className='p-4 text-white w-full h-full overflow-hidden z-10  absolute top-0 flex flex-col justify-end rounded-md  opacity-0 group-hover:opacity-100  transition-all duration-300'>
                                        <div className='translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2'>
                                            <h1 className='md:text-2xl font-semibold'>Who We are</h1>
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="flex items-center gap-2 py-2 font-medium text-center text-base text-white rounded-full group">
                                                    Learn More
                                                    <div className='border border-white rounded-full p-1'>
                                                        <MoveUpRight className='hover:rotate-45' />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 py-2 font-medium text-center text-base text-white rounded-full group">
                                                    Learn More
                                                    <div className='border border-white rounded-full p-1'>
                                                        <MoveUpRight className='hover:rotate-45' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-4 text-white w-full h-[20%] flex flex-col justify-end overflow-hidden  absolute bottom-0 opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300'>
                                        <h1 className='md:text-2xl font-semibold'>Naymur Rahman</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </section>
        </>
    );
}

