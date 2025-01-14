'use client'
import React, { useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { RetroGrid } from './magicui/retro-grid'
const SEGMENT_ANGLE = 360 / 8
const discountOptions = [
    { discount: '35', color: '#FF4D4F', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '30', color: '#40A9FF', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '25', color: '#FAAD14', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '20', color: '#52C41A', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '15', color: '#722ED1', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '10', color: '#FA8C16', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '5', color: '#EB2F96', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
    { discount: '40', color: '#13C2C2', image: 'https://pagedone.io/asset/uploads/1696229969.png' },
]

export default function LuckyWheel() {
    const [discountCode, setDiscountCode] = useState<string | null>(null)
    const [isSpinning, setIsSpinning] = useState(false)
    const controls = useAnimation()
    const currentRotation = useRef(0)

    const generateDiscountCode = (discount: string) => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase()
        return `${discount}OFF${code}`
    }

    const calculateWinningSegment = (finalRotation: number) => {
        const normalizedRotation = finalRotation % 360
        const segmentIndex = 7 - Math.floor(normalizedRotation / SEGMENT_ANGLE)
        return segmentIndex % 8
    }

    const handleSpin = async () => {
        if (!isSpinning) {
            setIsSpinning(true)
            setDiscountCode(null)

            const minSpins = 5
            const maxSpins = 8
            const spinCount = Math.floor(Math.random() * (maxSpins - minSpins + 1) + minSpins)
            const extraAngle = Math.floor(Math.random() * 360)
            const finalRotation = currentRotation.current + (spinCount * 360) + extraAngle

            await controls.start({
                rotate: finalRotation,
                transition: {
                    duration: 5,
                    ease: [0.25, 0.1, 0.25, 1],
                },
            })

            currentRotation.current = finalRotation % 360

            const winningIndex = calculateWinningSegment(finalRotation)
            const winningDiscount = discountOptions[winningIndex].discount
            setDiscountCode(generateDiscountCode(winningDiscount))
            setIsSpinning(false)
        }
    }

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center overflow-hidden py-8">
                <div className="z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center leading-none tracking-tighter text-transparent">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold text-red-800 text-center mb-12">Quay số trúng thưởng!</h1>
                        <div className="relative w-80 h-80">
                            <motion.div
                                className="w-full h-full"
                                style={{ transformOrigin: 'center' }}
                                animate={controls}
                                initial={{ rotate: 0 }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    {discountOptions.map((option, index) => (
                                        <g key={index} transform={`rotate(${index * SEGMENT_ANGLE} 50 50)`}>
                                            <path
                                                d="M50 50 L50 0 A50 50 0 0 1 85.36 14.64 Z"
                                                fill={option.color}
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <g transform={`rotate(${SEGMENT_ANGLE / 2} 50 70)`}>
                                                {/* <image
                                        href={option.image}
                                        x="35"
                                        y="5"
                                        width="15"
                                        height="15"
                                        style={{
                                            transformBox: 'fill-box',
                                            transformOrigin: 'center',
                                        }}
                                    /> */}
                                                <text
                                                    x="42"
                                                    y="30"
                                                    textAnchor="middle"
                                                    fill="white"
                                                    fontSize="6"
                                                    fontWeight="bold"
                                                >
                                                    {option.discount}
                                                </text>
                                            </g>
                                        </g>
                                    ))}
                                </svg>
                            </motion.div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-red-500"></div>
                            </div>
                        </div>
                        <button
                            onClick={handleSpin}
                            disabled={isSpinning}
                            className="mt-8 px-6 py-3 bg-red-800 text-white font-semibold rounded-full shadow-lg hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-950 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {isSpinning ? 'Đang quay...' : 'Quay ngay!'}
                        </button>
                        {discountCode && (
                            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                                <p className="text-lg font-semibold text-gray-600">Mã giảm giá của bạn:</p>
                                <p className="text-3xl font-bold text-green-600 mt-2">{discountCode}</p>
                            </div>
                        )}
                    </div>
                </div>
                <RetroGrid />
            </div>
        </>
    )
}

