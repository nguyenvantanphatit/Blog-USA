import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FoodCombo() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-yellow-400">
          COMBO QUÀ TẾT 4 LÁ
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg"
              alt="Food combo"
              width={1920}
        height={520}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 text-yellow-100">
            <ul className="space-y-4">
              <li>• Bánh trung thu</li>
              <li>• Trà thảo mộc</li>
              <li>• Kẹo dừa truyền thống</li>
              <li>• Hạt điều rang muối</li>
            </ul>
            <div className="text-2xl font-bold text-yellow-400">
              1.500.000 VND
            </div>
            <Button
              size="lg"
              className="w-full bg-yellow-400 text-red-900 hover:bg-yellow-500 md:w-auto"
            >
              Đặt hàng ngay
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

