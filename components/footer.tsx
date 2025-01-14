import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Tết Việt</h3>
            <p className="mb-4">Mang Tết đến mọi nhà với những sản phẩm chất lượng và ý nghĩa.</p>
            <div className="flex space-x-4">
              <Link href="#">
                <Facebook size={24} />
              </Link>
              <Link href="#">
                <Instagram size={24} />
              </Link>
              <Link href="#">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><Link href="#">Trang chủ</Link></li>
              <li><Link href="#">Sản phẩm</Link></li>
              <li><Link href="#">Về chúng tôi</Link></li>
              <li><Link href="#">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Chính Sách</h3>
            <ul className="space-y-2">
              <li><Link href="#">Điều khoản sử dụng</Link></li>
              <li><Link href="#">Chính sách bảo mật</Link></li>
              <li><Link href="#">Chính sách đổi trả</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Liên Hệ</h3>
            <p>Quận Bình Thạnh</p>
            <p>TP. Hồ Chí Minh, Việt Nam</p>
            <p>Email: nguyenvantanphat.it@gmail.com</p>
            <p>Điện thoại: (84) 37-422-5294</p>
          </div>
        </div>
        <div className='absolute z-50 -bottom-96 -right-2/3 -translate-x-2/3'>
          <svg className='animate-spin-slow' xmlns="http://www.w3.org/2000/svg" width="922" height="922" viewBox="0 0 922 922"><g fill="none" fillRule="evenodd"><circle cx="461" cy="461" r="389.236" stroke="#D9D9D9" opacity=".535"></circle><circle cx="461" cy="461" r="460.5" stroke="#D9D9D9" opacity=".535"></circle><circle cx="230.7" cy="149.733" r="7.2" fill="#1D4169"></circle><circle cx="10.7" cy="367.533" r="7.2" fill="#244E9D"></circle><circle cx="276.2" cy="38.533" r="7.2" fill="#00BFD6"></circle></g></svg>
        </div>
        <div className="mt-8 pt-8 border-t border-yellow-400/20 text-center">
          <p>&copy; 2024 Tết Việt. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
