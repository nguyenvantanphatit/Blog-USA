'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const categories = [
  { id: 1, name: 'Quà Tặng Tết', image: '/Categories/qua-1.jpg', link: '#' },
  { id: 2, name: 'Đồ Trang Trí', image: '/Categories/qua-2.webp', link: '#' },
  { id: 3, name: 'Bánh Kẹo', image: '/Categories/qua-3.jpg', link: '#' },
  { id: 4, name: 'Rượu & Trà', image: '/Categories/qua-4.jpg', link: '#' },
  { id: 5, name: 'Hoa Đào & Mai', image: '/Categories/qua-5.jpg', link: '#' },
  { id: 6, name: 'Lì Xì', image: '/Categories/qua-6.jpg', link: '#' },
];

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function FeaturedCategories() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-4">Danh Mục Nổi Bật</h2>
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {categories.map((category) => (
                <CarouselItem key={category.id} className="basis-1/2">
                  <Link href={category.link} className="group block">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="rounded-lg p-4"
                    >
                      <div className="relative w-full h-20 mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={320}
                          height={320}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-center text-red-800 font-semibold group-hover:text-red-600 transition duration-300">
                        {category.name}
                      </h3>
                    </motion.div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Grid for desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="group">
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-lg p-4 transition duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              >
                <div className="relative w-full h-20 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-center text-red-800 font-semibold group-hover:text-red-600 transition duration-300">
                  {category.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
