import Image from 'next/image'

const categories = [
  { name: 'Quà Tặng', image: '/placeholder.svg' },
  { name: 'Đồ Trang Trí', image: '/placeholder.svg' },
  { name: 'Thực Phẩm Tết', image: '/placeholder.svg' },
  { name: 'Áo Quần', image: '/placeholder.svg' },
]

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-12">Khám Phá Danh Mục</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent opacity-0 group-hover:opacity-70 transition duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-2 transform translate-y-8 group-hover:translate-y-0 transition duration-300">
                  {category.name}
                </h3>
                <button className="bg-yellow-400 text-red-800 px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                  Xem thêm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

