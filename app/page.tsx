'use client';

import { useState } from "react";
import Image from "next/image"; // Next.js Image component

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Minuman");

  return (
    <div>
      {/* Navbar */}
      <header className="bg-[#a05a2c] text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bestarii</h1>
        <nav>
          <a href="#" className="text-lg">Produk</a>
        </nav>
      </header>

      {/* Profil Owner */}
      <section className="text-center my-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Salam Hangat Coffe Dari Saya</h3>
        <div className="flex justify-center">
          <Image
            src="/image/profile.jpg" // Gambar di folder public
            alt="Profile"
            width={96} // ukuran width
            height={96} // ukuran height
            className="rounded-full border-4 border-gray-300"
          />
        </div>
        <h4 className="text-lg font-bold mt-2">Rendi Saputra</h4>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          "Selamat datang di Cafe Bestarii! Temukan kemudahan memesan makanan dan minuman favorit Sobat melalui aplikasi Bestarii Online. Kami berkomitmen untuk menyajikan pengalaman cafe yang tak terlupakan secara online. Selamat menikmati!”
        </p>
      </section>

      {/* Kategori Menu */}
      <section className="text-center my-8">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "Minuman" ? "bg-[#a05a2c] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory("Minuman")}
          >
            Minuman
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "Makanan" ? "bg-[#a05a2c] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory("Makanan")}
          >
            Makanan
          </button>
        </div>
      </section>

      {/* Menu */}
      <section className="my-8 px-4">
        <div className="max-w-6xl mx-auto">
          {selectedCategory === "Minuman" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Minuman</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Menu Minuman */}
                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Hot Coffee Latte"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Hot Coffee Latte</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 20.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Peach Tea</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Strawberry Fields</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 22.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Coffe Pandan</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Coffe Susu</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 15.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Coffe Aren</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 17.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Peach Coffe</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 17.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Hot Redvalvet</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 20.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Yakult Berry</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 15.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-drink.png"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Espresso</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 12.000</p>
                </div>
                
              </div>
            </div>
          )}

          {selectedCategory === "Makanan" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Makanan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Menu Makanan */}
                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-food.png"
                    alt="Nasi Goreng"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Nasi Goreng</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 25.000</p>
                </div>
                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/icon-food.png"
                    alt="Mie Ayam"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Mie Ayam</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 15.000</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
