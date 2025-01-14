import Image from 'next/image'

export default function GiftShowcase() {
  const gifts = [
    { title: 'Quà tặng 1', price: '500.000 VND', image: '/placeholder.svg' },
    { title: 'Quà tặng 2', price: '750.000 VND', image: '/placeholder.svg' },
    { title: 'Quà tặng 3', price: '1.000.000 VND', image: '/placeholder.svg' },
    { title: 'Quà tặng 4', price: '1.250.000 VND', image: '/placeholder.svg' },
    { title: 'Quà tặng 5', price: '1.500.000 VND', image: '/placeholder.svg' },
    { title: 'Quà tặng 6', price: '2.000.000 VND', image: '/placeholder.svg' },
  ]

  return (
    <section className="py-16 bg-red-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          QUÀ TẶNG SANG TRỌNG, Ý NGHĨA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <div key={index} className="bg-red-800 rounded-lg overflow-hidden">
              <Image
                src={gift.image}
                alt={gift.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{gift.title}</h3>
                <p className="text-yellow-100 mb-4">{gift.price}</p>
                <button className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition duration-300 w-full">
                  Đặt hàng ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

