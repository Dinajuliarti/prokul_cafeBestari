import Image from "next/image";

export default function Home() {
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
          <img
            src="image/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300"
          />
        </div>
        <h4 className="text-lg font-bold mt-2">Rendi Saputra</h4>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          "Selamat datang di Cafe Bestarii! Temukan kemudahan memesan makanan dan minuman favorit Sobat melalui aplikasi Bestarii Online. Kami berkomitmen untuk menyajikan pengalaman cafe yang tak terlupakan secara online. Selamat menikmati!”
        </p>
      </section>

      {/* Menu */}
<section className="my-8 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {/* Menu 1 */}
    <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
      <img
        src="/icon-drink.png"
        alt="Menu 1"
        className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-300"
      />
      <h4 className="font-semibold text-lg text-center">Hot Coffee Latte</h4>
      <p className="text-gray-500 text-center mt-1">Rp 20.000</p>
    </div>
    {/* Menu 2*/}
    <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform ">
      <img
        src="/icon-drink.png"
        alt="Menu 2"
        className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-300"
      />
      <h4 className="font-semibold text-lg text-center">Peach Tea</h4>
      <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
    </div>
    {/* Menu 3 */}
    <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
      <img
        src="/icon-drink.png"
        alt="Menu 3"
        className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-300"
      />
      <h4 className="font-semibold text-lg text-center">Strowbary Fields</h4>
      <p className="text-gray-500 text-center mt-1">Rp 22.000</p>
    </div>
    {/* Menu 4 */}
    <div className="border p-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
      <img
        src="/icon-food.png"
        alt="Menu 4"
        className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-300"
      />
      <h4 className="font-semibold text-lg text-center">Coffee Pandan</h4>
      <p className="text-gray-500 text-center mt-1">Rp 18.000</p>
    </div>
    </div>
    </section>

    </div>
  );
}
