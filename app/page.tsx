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

    </div>
  );
}
