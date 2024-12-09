import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Hakkımızda</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about-us-image.jpg"
              alt="Berkcan Dondurma Ekibi"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hikayemiz</h2>
            <p className="text-gray-600 mb-6">
              Berkcan Dondurma, 1985 yılında Ankara'da küçük bir aile işletmesi olarak kuruldu. Kurucumuz Berkcan Bey'in geleneksel dondurma tariflerini modern lezzetlerle birleştirme tutkusu, bizi bugünkü konumumuza getirdi.
            </p>
            <p className="text-gray-600 mb-6">
              35 yılı aşkın süredir, en kaliteli malzemeleri kullanarak ve sürekli yenilikçi tarifler geliştirerek, Ankara'nın en sevilen dondurmacılarından biri olmayı başardık.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
            <p className="text-gray-600 mb-6">
              Müşterilerimize en lezzetli ve kaliteli dondurmaları sunmak, geleneksel tatları korurken yenilikçi lezzetler yaratmak ve her ziyaretçimize unutulmaz bir deneyim yaşatmak.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Kalite Taahhüdümüz</h2>
          <p className="text-gray-600 text-center mb-8">
            Berkcan Dondurma olarak, her aşamada en yüksek kalite standartlarını korumayı taahhüt ediyoruz. Taze ve doğal malzemeler kullanıyor, yapay katkı maddelerinden kaçınıyor ve her parti dondurmanın mükemmel lezzette olduğundan emin oluyoruz.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Dondurma Yapım Sürecimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">1. Malzeme Seçimi</h3>
              <p className="text-gray-600">
                En taze ve kaliteli malzemeleri özenle seçiyoruz. Yerel çiftçilerle işbirliği yaparak, mevsiminde en iyi meyveleri ve en taze sütü temin ediyoruz.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">2. Hazırlık ve Karıştırma</h3>
              <p className="text-gray-600">
                Geleneksel yöntemlerle malzemeleri hazırlıyor ve özel tariflerimize göre karıştırıyoruz. Her aşamada lezzet ve kıvamı kontrol ediyoruz.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">3. Dondurma ve Sunum</h3>
              <p className="text-gray-600">
                Özel dondurma makinelerimizde mükemmel kıvama gelene kadar donduruyor ve taze olarak servis ediyoruz. Her kepçe dondurma, bir sanat eseri gibi özenle hazırlanıyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

