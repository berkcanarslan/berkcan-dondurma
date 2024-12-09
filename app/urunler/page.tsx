'use client'

import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Çilekli Dondurma',
    description: 'Taze çileklerle hazırlanan enfes dondurma',
    ingredients: 'Süt, krema, çilek, şeker',
    allergens: 'Süt',
    image: '/cilekli-dondurma.jpg',
    category: 'Meyveli'
  },
  {
    id: 2,
    name: 'Çikolatalı Dondurma',
    description: 'Yoğun çikolata lezzeti ile hazırlanan kremsi dondurma',
    ingredients: 'Süt, krema, kakao, şeker',
    allergens: 'Süt',
    image: '/cikolatali-dondurma.jpg',
    category: 'Klasik'
  },
  {
    id: 3,
    name: 'Fıstıklı Dondurma',
    description: 'Antep fıstığı ile hazırlanan geleneksel lezzet',
    ingredients: 'Süt, krema, Antep fıstığı, şeker',
    allergens: 'Süt, fıstık',
    image: '/fistikli-dondurma.jpg',
    category: 'Kuruyemişli'
  },
  {
    id: 4,
    name: 'Vanilyalı Dondurma',
    description: 'Klasik vanilya aroması ile hazırlanan kremsi dondurma',
    ingredients: 'Süt, krema, vanilya, şeker',
    allergens: 'Süt',
    image: '/vanilyali-dondurma.jpg',
    category: 'Klasik'
  },
  {
    id: 5,
    name: 'Karamelli Dondurma',
    description: 'Tatlı karamel lezzeti ile hazırlanan özel dondurma',
    ingredients: 'Süt, krema, karamel, şeker',
    allergens: 'Süt',
    image: '/karamelli-dondurma.jpg',
    category: 'Özel'
  },
  {
    id: 6,
    name: 'Muzlu Dondurma',
    description: 'Taze muzlarla hazırlanan enfes dondurma',
    ingredients: 'Süt, krema, muz, şeker',
    allergens: 'Süt',
    image: '/muzlu-dondurma.jpg',
    category: 'Meyveli'
  },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const categories = ['Tümü', ...Array.from(new Set(products.map(product => product.category)))]

  const filteredProducts = selectedCategory === 'Tümü'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Ürünlerimiz</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-pink-600 hover:bg-pink-100'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold">İçindekiler:</h3>
                  <p className="text-gray-600">{product.ingredients}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Alerjenler:</h3>
                  <p className="text-gray-600">{product.allergens}</p>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

