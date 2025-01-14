import Image from 'next/image'

export default function DecorativeSection() {
  return (
    <section className="py-16 bg-red-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-red-900 border-2 border-yellow-400 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ý nghĩa của quà Tết</h2>
          <ul className="text-yellow-100 space-y-2">
            <li>• Thể hiện lòng biết ơn</li>
            <li>• Mang lại may mắn</li>
            <li>• Kết nối tình thân</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32">
        <Image
          src="/placeholder.svg"
          alt="Decorative element"
          width={1920}
        height={520}
          className="opacity-20"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <Image
          src="/placeholder.svg"
          alt="Decorative element"
          width={1920}
        height={520}
          className="opacity-20"
        />
      </div>
    </section>
  )
}

