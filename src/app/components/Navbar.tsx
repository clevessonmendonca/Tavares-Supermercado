import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative h-24">
      <div className="max-w-screen-2xl mx-auto fixed py-2 px-7 top-0 left-0 right-0 z-50 bg-white">
        <div className="absolute hidden lg:block max-w-xl top-1/2 -translate-y-1/2 right-0 transform w-full h-16 bg-blue-600 rounded-tl-full rounded-bl-full"></div>
        <nav className="flex justify-between items-center mx-12 py-2">
          <Image
            src="/logo.png"
            alt="Logo do Tavares Supermercado"
            width={180}
            height={60}
          />
          <ul className="hidden lg:flex justify-center space-x-8 text-white z-10 group">
            <li className="hover:text-yellow-400">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link className="" href="/tabloide">
                Tabloide
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link className="" href="/">
                Trabalhe Conosco
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link className="" href="/contact">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
