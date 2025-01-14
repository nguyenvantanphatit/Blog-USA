'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VirtualFirecracker() {
  const [isExploding, setIsExploding] = useState(false)

  const triggerFirecracker = () => {
    setIsExploding(true)
    setTimeout(() => setIsExploding(false), 1000)
  }

  return (
    <section className="py-16 bg-red-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Đốt Pháo Chúc Mừng Năm Mới</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 cursor-pointer" onClick={triggerFirecracker}>
            {isExploding ? (
              <Image
                src="/phao-hoa-troi-tay.jpg"
                alt="Exploding Firecracker"
                width={1920}
        height={520}
                className="animate-pulse rounded-full"
              />
            ) : (
              <Image
                src="/phao-hoa-troi-tay.jpg"
                alt="Firecracker"
                width={1920}
        height={520}
                className='rounded-full'
              />
            )}
          </div>
          <p className="mt-4 text-lg text-yellow-100">
            {isExploding ? "Chúc Mừng Năm Mới!" : "Nhấp để đốt pháo"}
          </p>
        </div>
      </div>
    </section>
  )
}

