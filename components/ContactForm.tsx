export default function ContactForm() {
  return (
    <section className="py-24 bg-[url('/Contact/web-2.avif')]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
            NHẬN TƯ VẤN QUÀ TẾT CHO DOANH NGHIỆP
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-4 py-2 rounded-md bg-red-800 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-red-800 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Nội dung"
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-red-800 text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

