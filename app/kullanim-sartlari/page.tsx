export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kullanım Şartları</h1>
        
        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Kabul Edilen Şartlar</h2>
            <p className="text-gray-600 mb-4">
              Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş olursunuz. 
              Bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hizmet Kullanımı</h2>
            <p className="text-gray-600 mb-4">
              Berkcan Dondurma web sitesini kullanırken:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Doğru ve güncel bilgiler sağlamayı</li>
              <li>Hesap güvenliğinizi korumayı</li>
              <li>Yasalara uygun davranmayı</li>
              <li>Başkalarının haklarına saygı göstermeyi</li>
              <li>Sitemizi kötüye kullanmamayı kabul edersiniz</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Ürün ve Hizmetler</h2>
            <p className="text-gray-600 mb-4">
              Tüm ürünlerimiz, Türk Gıda Kodeksi standartlarına uygun olarak üretilmektedir. 
              Ürün görselleri temsilidir ve gerçek ürünler farklılık gösterebilir.
            </p>
            <p className="text-gray-600 mb-4">
              Fiyatlar ve promosyonlar önceden haber verilmeksizin değiştirilebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Fikri Mülkiyet Hakları</h2>
            <p className="text-gray-600 mb-4">
              Site içeriğindeki tüm metinler, görseller, logolar ve diğer materyaller 
              Berkcan Dondurma'nın fikri mülkiyetidir. Bu içeriklerin izinsiz kullanımı yasaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sorumluluk Reddi</h2>
            <p className="text-gray-600 mb-4">
              Web sitemizi kesintisiz ve hatasız sunmak için çaba göstermekle birlikte, 
              zaman zaman teknik sorunlar yaşanabilir. Bu durumlardan kaynaklanan 
              zararlardan sorumlu tutulamayız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. İptal ve İade Koşulları</h2>
            <p className="text-gray-600 mb-4">
              Ürünlerimizle ilgili herhangi bir memnuniyetsizlik durumunda, 
              satın alma tarihinden itibaren 24 saat içinde iade ve değişim yapılabilir.
            </p>
            <p className="text-gray-600 mb-4">
              İade ve değişim için ürünün açılmamış ve orijinal ambalajında olması gerekmektedir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Değişiklikler</h2>
            <p className="text-gray-600 mb-4">
              Bu kullanım şartları, önceden haber verilmeksizin değiştirilebilir. 
              Değişiklikler, sitemizde yayınlandığı andan itibaren geçerli olur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. İletişim</h2>
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