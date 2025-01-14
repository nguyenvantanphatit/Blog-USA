import Image from 'next/image'
import CountdownTimer from './CountdownTimer'

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <Image
        src="/Banner/banner-1.avif"
        alt="Tet Promotion"
        width={1920}
        height={520}
        quality={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 mt-16 flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-2xl md:text-5xl font-bold text-yellow-400 animate-fade-in-up">
            Chào Đón Tết Nguyên Đán 2025
          </h1>
          <p className="md:text-2xl text-xl text-yellow-100 animate-fade-in-up animation-delay-300">
            Khám phá bộ sưu tập quà tặng và đồ trang trí độc đáo cho năm mới
          </p>
          <div className='flex items-center justify-center'>
            <button className='group relative flex h-12 w-[170px]  items-center justify-between border-2 dark:border-[#656fe2] border-[#394481] rounded-full  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black'>
              <span className='pl-4'>Mua sắm ngay</span>
              <div className='relative h-9 w-9 overflow-hidden  dark:bg-white bg-black rounded-full mr-1'>
                <div className='absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4 '>
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 dark:fill-black fill-white '
                  >
                    <path
                      d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mb-1 -translate-x-4 dark:fill-black fill-white'
                  >
                    <path
                      d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <CountdownTimer />
      </div>
    </section>
  )
}

