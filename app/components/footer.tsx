'use client'

import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-600 mt-2">
              Ankara'nın en lezzetli el yapımı dondurmalarını sizlerle buluşturuyoruz.
              Taze malzemeler ve geleneksel yöntemlerle hazırlanan dondurmalarımızı
              denemeyi unutmayın.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Adres: Kızılay, Ankara</li>
              <li>Telefon: (0312) 123 45 67</li>
              <li>E-posta: info@berkcandondurma.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Berkcan Dondurma. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/gizlilik-politikasi" className="text-gray-600 hover:text-pink-600 text-sm transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="text-gray-600 hover:text-pink-600 text-sm transition-colors duration-200">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

