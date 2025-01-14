'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PromotionSection() {
  return (
    <section className="py-16 bg-gradient-to-t from-[#242424] to-[#050505] hover:from-[#182135] hover:to-[#080808]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-yellow-400 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Ưu Đãi Đặc Biệt Tết
            </motion.h2>

            <motion.p
              className="text-xl text-yellow-100 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Mua sắm ngay để nhận ưu đãi lên đến 50% cho các sản phẩm Tết. Số lượng có hạn!
            </motion.p>

            <motion.ul
              className="text-yellow-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <li className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Giảm 30% cho đơn hàng trên 1 triệu
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Tặng voucher 200k cho đơn hàng đầu tiên
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Freeship cho đơn hàng từ 500k
              </li>
            </motion.ul>
            <motion.button
              className="bg-yellow-400 text-red-800 px-8 py-3 rounded-full text-xl font-bold hover:bg-yellow-300 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mua Sắm Ngay
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Gift/19.webp"
              alt="Tet Promotion"
              width={520}
              height={500}
              className="relative z-10 md:-left-20"
            />

            <Image
              src="/Gift/20.webp"
              alt="Tet Promotion"
              width={520}
              height={500}
              className="absolute z-0 -bottom-10 -right-20 hidden md:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
