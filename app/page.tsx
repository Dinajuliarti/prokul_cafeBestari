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
    </div>
  );
}
