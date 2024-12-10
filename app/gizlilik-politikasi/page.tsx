export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Bilgi Toplama ve Kullanımı</h2>
            <p className="text-gray-600 mb-4">
              Berkcan Dondurma olarak, müşterilerimizin gizliliğini korumak önceliklerimiz arasındadır. 
              Bu politika, web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklar.
            </p>
            <p className="text-gray-600 mb-4">
              Topladığımız bilgiler şunları içerebilir:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Ad ve iletişim bilgileri</li>
              <li>Sipariş geçmişi</li>
              <li>Web sitesi kullanım bilgileri</li>
              <li>Çerezler aracılığıyla toplanan bilgiler</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Bilgilerin Korunması</h2>
            <p className="text-gray-600 mb-4">
              Müşterilerimizin kişisel bilgilerini korumak için çeşitli güvenlik önlemleri alıyoruz:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Güvenli SSL bağlantısı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Sınırlı personel erişimi</li>
              <li>Şifrelenmiş veri depolama</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Çerezler</h2>
            <p className="text-gray-600 mb-4">
              Web sitemiz, deneyiminizi geliştirmek için çerezler kullanmaktadır. 
              Bu çerezler, tercihlerinizi hatırlamak ve site kullanımı hakkında toplu veriler sağlamak için kullanılır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Üçüncü Taraflarla Bilgi Paylaşımı</h2>
            <p className="text-gray-600 mb-4">
              Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız, ancak aşağıdaki durumlar istisnadır:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Yasal zorunluluklar</li>
              <li>Hizmet sağlayıcılarımız (ödeme işlemcileri gibi)</li>
              <li>Açık izniniz olduğunda</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. İletişim</h2>
            <p className="text-gray-600 mb-4">
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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