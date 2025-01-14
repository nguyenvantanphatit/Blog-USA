import Image from 'next/image'
export default function PromotionBanner() {
  return (
    <section className="bg-gradient-to-r from-red-700 to-red-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Ưu Đãi Đặc Biệt Tết</h2>
            <p className="text-xl text-yellow-100 mb-6">
              Giảm giá lên đến 30% cho tất cả sản phẩm Tết. Đừng bỏ lỡ cơ hội!
            </p>
            <button className="bg-yellow-400 text-red-800 px-8 py-3 rounded-full text-xl font-bold hover:bg-yellow-300 transition duration-300">
              Xem chi tiết
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/Gift/19.webp"
              alt="Promotion"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

