import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

const Navbar = () => {
  const [objectVisible, setObjectVisible] = useState(true);

  const handleResize = () => {
    setObjectVisible(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuMoblie = () => {
    setObjectVisible(!objectVisible);
  };

  return (
    <header className="relative z-50 h-24">
      <div className="fixed z-50 mx-auto h-9 w-full bg-primary px-7 text-gray-100">
        <div className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-screen-2xl items-center justify-between bg-primary px-12 pt-2 text-sm leading-3">
          <nav>
            <ul className="flex gap-2 divide-x-2 divide-slate-300 text-xs font-medium leading-3">
              <li>
                <Link href={""} className="hover:brightness-90">
                  Sobre o Tavares
                </Link>
              </li>
              <li className="px-2 hover:brightness-90">
                <Link href={""}>Formas de Pagamento</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4 text-secondary">
            <Link href={"/"} className="hover:scale-105 hover:brightness-90">
              <InstagramLogo width={22} height={22} className="shadow-lg" />
            </Link>
            <Link href={"/"} className="hover:scale-105 hover:brightness-90">
              <FacebookLogo width={22} height={22} className=" shadow-lg" />
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed left-0 right-0 h-28 w-full bg-white shadow-lg">
        <div className="fixed left-0 right-0 top-8 z-40 mx-auto max-w-screen-2xl px-4 py-2">
          <span className="absolute right-0 top-1/2 hidden h-12 w-full max-w-2xl -translate-y-1/2 transform rounded-bl-full rounded-tl-full bg-primary lg:block" />
          <div className="mx-12 flex items-center justify-between py-2">
            <Image
              src="/logo.png"
              alt="Logo do Tavares Supermercado"
              width={180}
              height={60}
            />
            <button
              onClick={handleMenuMoblie}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-primary hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`${
                objectVisible ? "opacity-100" : "hidden opacity-0"
              } absolute w-full items-center justify-between transition-all lg:static lg:order-1 lg:flex lg:w-auto`}
            >
              <span className="absolute right-36 top-[2rem] h-4 w-4 rounded-t-full bg-primary lg:hidden" />
              <ul className="group absolute right-32 top-6 z-10 mt-4 flex flex-col justify-center divide-y-2 divide-gray-200 rounded-lg bg-primary px-6 py-4 text-lg font-medium text-white shadow-2xl lg:static lg:mt-0 lg:flex lg:flex-row lg:space-x-8 lg:divide-y-0 lg:bg-inherit lg:py-0 lg:text-base">
                <li>
                  <Link
                    href="/tabloide"
                    className="block rounded py-2 pl-3 pr-4 text-white transition-colors hover:text-secondary"
                  >
                    Ofertas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="block rounded py-2 pl-3 pr-4 text-white transition-colors hover:text-secondary"
                  >
                    Lojas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block rounded py-2 pl-3 pr-4 text-white transition-colors hover:text-secondary"
                  >
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block rounded py-2 pl-3 pr-4 text-white transition-colors hover:text-secondary"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
