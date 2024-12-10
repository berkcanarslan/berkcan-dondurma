export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kullanım Şartları</h1>
        
        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Hizmet Kullanımı</h2>
            <p className="text-gray-600 mb-4">
              Berkcan Dondurma web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş olursunuz.
              Bu şartlar, web sitemizi nasıl kullanabileceğinizi ve hizmetlerimizden nasıl yararlanabileceğinizi belirler.
            </p>
            <p className="text-gray-600 mb-4">
              Web sitemizi kullanırken:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Yasalara uygun hareket etmelisiniz</li>
              <li>Diğer kullanıcıların haklarına saygı göstermelisiniz</li>
              <li>Doğru ve güncel bilgiler sağlamalısınız</li>
              <li>Hesap güvenliğinizi korumalısınız</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Ürün ve Hizmetler</h2>
            <p className="text-gray-600 mb-4">
              Ürünlerimiz ve hizmetlerimiz hakkında:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Tüm ürün görselleri temsilidir</li>
              <li>Fiyatlar önceden haber verilmeksizin değiştirilebilir</li>
              <li>Stok durumu değişkenlik gösterebilir</li>
              <li>Ürün içerikleri değişebilir</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Fikri Mülkiyet Hakları</h2>
            <p className="text-gray-600 mb-4">
              Web sitemizdeki tüm içerik (logolar, metinler, görseller, vb.) Berkcan Dondurma'nın fikri mülkiyetidir.
              Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sorumluluk Reddi</h2>
            <p className="text-gray-600 mb-4">
              Web sitemizi kullanımınızdan doğabilecek herhangi bir sorun veya zarardan sorumlu değiliz:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Teknik arızalar</li>
              <li>Bilgi güncelliği</li>
              <li>Üçüncü taraf bağlantıları</li>
              <li>Kullanıcı hataları</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Değişiklikler</h2>
            <p className="text-gray-600 mb-4">
              Bu kullanım şartlarını herhangi bir zamanda değiştirme hakkını saklı tutarız.
              Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. İletişim</h2>
            <p className="text-gray-600 mb-4">
              Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <p className="text-gray-600">
              Email: info@berkcandondurma.com<br />
              Telefon: (0312) 123 45 67<br />
              Adres: Kızılay, Ankara
            </p>
          </section>

          <section>
            <p className="text-gray-600 italic">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 