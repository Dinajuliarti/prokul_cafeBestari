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
                    src="/image/Hot Coffe Latte.jpg"
                    alt="Hot Coffee Latte"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Hot Coffee Latte</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Berry Tea.jpg"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Berry Tea</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 15.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Coffe Aren.jpg"
                    alt="Coffe Aren"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Coffe Aren</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 17.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Coffe Latte.jpg"
                    alt="Coffe Latte"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Coffe Latte</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Coffe Pandan.jpg"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Coffe Pandan</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 16.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Coffe Susu.jpg"
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
                    src="/image/Peach Coffe.jpg"
                    alt="Peach Coffe"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Peach Coffe</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 17.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Strawberry Fields.jpg"
                    alt="Strawberry Fields"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Strawberry Fields</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 20.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Yakult Berry.jpg"
                    alt="Yakult Berry"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Yakult Berry</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 15.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Espresso.jpg"
                    alt="Espresso"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Espresso</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 12.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/Peach Tea.jpg"
                    alt="Peach Tea"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Peach Tea</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 15.000</p>
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
                    src="/image/pisang.jpg"
                    alt="Banana Coklat"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Banana Coklat</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 5.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/sempol.jpg"
                    alt="Sempol"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Sempol</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 5.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/donat.jpg"
                    alt="Donat"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Donat</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 6.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/tahu.jpg"
                    alt="Tahu Crisbby"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Tahu Crisbby</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 5.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/mieroket.jpg"
                    alt="Indomie Roket"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Indomie Roket</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/bronis.jpg"
                    alt="Brownis"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Brownis</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 6.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/miekare.jpg"
                    alt="Indomie Kare"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Indomie Kare</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 10.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/otak-otak.jpg"
                    alt="Otak-otak"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Otak-otak</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 5.000</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                  <Image
                    src="/image/bolu.jpg"
                    alt="bolu"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 rounded-full border-2 border-gray-300"
                  />
                  <h4 className="font-semibold text-lg text-center">Bolu</h4>
                  <p className="text-gray-500 text-center mt-1">Rp 5.000</p>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* Kunjungi Kami */}
      <section className="my-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Kunjungi Kami</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4">
            <div className="border rounded-lg p-4 shadow min-w-[300px]">
            <Image
                src="/image/marchandise.jpg"
                alt="Marchandise Bestari"
                width={300}
                height={200}
                className="mx-auto object-cover h-[320px] w-[300px]"
              />
              <p className="font-semibold text-lg text-center">Marchandise Bestari</p>
              </div>
            <div className="border rounded-lg p-4 shadow min-w-[300px]">
              <Image
                src="/image/lesehan.jpg"
                alt="Lesehan"
                width={300}
                height={200}
                className="mx-auto object-cover h-[320px] w-[300px]"
              />
              <p className="font-semibold text-lg text-center">Lesehan Sanati Bestari</p>
            </div>
            <div className="border rounded-lg p-4 shadow min-w-[300px]">
              <Image
                src="/image/momen.jpg"
                alt="Moment"
                width={300}
                height={200}
                className="mx-auto object-cover h-[320px] w-[300px]"
              />
              <p className="font-semibold text-lg text-center">Abadikan Moment Kalian</p>
            </div>
            <div className="border rounded-lg p-4 shadow min-w-[300px]">
              <Image
                src="/image/outdor.jpg"
                alt="outdor"
                width={300}
                height={200}
                className="mx-auto object-cover h-[320px] w-[300px]"
              />
              <p className="font-semibold text-lg text-center">Outdoor Kece</p>
            </div>
            <div className="border rounded-lg p-4 shadow min-w-[300px]">
              <Image
                src="/image/indoor.jpg"
                alt="indoor"
                width={300}
                height={200}
                className="mx-auto object-cover h-[320px] w-[300px]"
              />
              <p className="font-semibold text-lg text-center">Indoor Aesthetics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#a05a2c] text-white p-4 flex flex-col justify-center items-center text-center">
        <h4 className="text-lg font-semibold">Hubungi Kami</h4>
        <p className="text-gray-300 mt-2">Alamat: Jl. Milono | Gn. Pasi</p>

        <p className="text-white-600 mt-1">
           Email: <a href="mailto:bestarii@coffee.com" className="text-blue-500">bestarii@gmail.com</a>
        </p>

        <p className="text-white-600 mt-1">
          Telepon: <a href="tel:+621234567890" className="text-blue-500">+62 878 4875 2584</a>
        </p>
      </footer>
    </div>
  );
}
