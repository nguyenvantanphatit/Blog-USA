import Image from 'next/image'

export default function TetCombo() {
  return (
    <section className="py-16 bg-red-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          COMBO QUÀ TẾT 4 LÁ
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Tet Combo"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <ul className="text-yellow-100 space-y-2">
              <li>• Bánh trung thu</li>
              <li>• Trà thảo mộc</li>
              <li>• Kẹo dừa truyền thống</li>
              <li>• Hạt điều rang muối</li>
            </ul>
            <p className="text-2xl font-bold text-yellow-400">1.500.000 VND</p>
            <button className="bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
              Đặt hàng ngay
            </button>
          </div>
        </div>
      </div>
    </section>
    
  )
}

