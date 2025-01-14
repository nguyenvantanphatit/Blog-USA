import Image from 'next/image'

export default function Traditions() {
  const traditions = [
    { title: 'Truyền thống 1', image: '/placeholder.svg' },
    { title: 'Truyền thống 2', image: '/placeholder.svg' },
    { title: 'Truyền thống 3', image: '/placeholder.svg' },
  ]

  return (
    <section className="py-16 bg-red-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          QUÀ TẾT - TRUYỀN THỐNG NGƯỜI VIỆT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => (
            <div key={index} className="bg-red-800 rounded-lg overflow-hidden">
              <Image
                src={tradition.image}
                alt={tradition.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{tradition.title}</h3>
                <p className="text-yellow-100">Mô tả ngắn về truyền thống này</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

