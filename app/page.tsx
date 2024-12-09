import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-pink-200">
        <Image
          src="/hero-image.jpg"
          alt="Lezzetli dondurma çeşitleri"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Berkcan Dondurma</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn">Ankara'nın en lezzetli dondurmacısı</p>
            <Link href="/urunler" className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300 animate-slideInFromBottom">
              Ürünlerimizi Keşfedin
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Öne Çıkan Lezzetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <div className="bg-pink-100 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
              <Image
                src="/cilekli-dondurma.jpg"
                alt="Çilekli Dondurma"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Çilekli Dondurma</h3>
                <p className="text-gray-600">Taze çileklerle hazırlanan enfes dondurma</p>
              </div>
            </div>
            {/* Featured Product 2 */}
            <div className="bg-pink-100 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
              <Image
                src="/cikolatali-dondurma.jpg"
                alt="Çikolatalı Dondurma"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Çikolatalı Dondurma</h3>
                <p className="text-gray-600">Yoğun çikolata lezzeti ile hazırlanan kremsi dondurma</p>
              </div>
            </div>
            {/* Featured Product 3 */}
            <div className="bg-pink-100 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
              <Image
                src="/fistikli-dondurma.jpg"
                alt="Fıstıklı Dondurma"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fıstıklı Dondurma</h3>
                <p className="text-gray-600">Antep fıstığı ile hazırlanan geleneksel lezzet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/about-us.jpg"
                alt="Berkcan Dondurma Ekibi"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Hakkımızda</h2>
              <p className="text-gray-600 mb-6">
                1985'ten beri Ankara'da geleneksel lezzetleri modern tariflerle buluşturuyoruz. Kaliteli malzemeler ve özenli üretim sürecimizle, her kepçe dondurmamızda eşsiz bir tat deneyimi sunuyoruz.
              </p>
              <Link href="/hakkimizda" className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Bizi Ziyaret Edin</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/store-front.jpg"
                alt="Berkcan Dondurma Mağazası"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Ankara'daki Mağazamız</h3>
              <p className="text-gray-600 mb-4">
                Kızılay Mahallesi, Atatürk Bulvarı No: 123, 06420 Çankaya/Ankara
              </p>
              <p className="text-gray-600 mb-6">
                Pazartesi - Cumartesi: 10:00 - 22:00<br />
                Pazar: 11:00 - 21:00
              </p>
              <Link href="/iletisim" className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
                Yol Tarifi Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

