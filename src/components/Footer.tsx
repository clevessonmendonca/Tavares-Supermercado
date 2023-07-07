import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-xl p-4 py-6">
        <div className="flex items-center justify-between py-2">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo do Tavares Supermercado"
              width={180}
              height={60}
            />
          </Link>
          <div className="flex items-center">
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Formas de Pagamentos
            </h2>
            <div></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Central de Ajuda
            </h2>
            <ul className="flex flex-col gap-2 font-medium text-gray-50">
              <li className="hover:underline">
                <Link href={""}>Fale Conosco</Link>
              </li>
              <li className="hover:underline">
                <Link href={""}>Contato</Link>
              </li>
              <li className="hover:underline">
                <Link href={""}>Política de Privacidade</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Institucional
            </h2>
            <ul className="flex flex-col gap-2 font-medium text-gray-100">
              <li className="hover:underline">
                <Link href={""}>O Tavares</Link>
              </li>
              <li className="hover:underline">
                <Link href={""}>Nossas Lojas</Link>
              </li>
              <li className="hover:underline">
                <Link href={""}>Trabalhe Conosco</Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Atendimento
            </h2>
            <h3>Horário de Atendimento:</h3>
            <p>De Segunda a Sábado das 07h às 22h</p>
            <p>Domingo das 07h às 20h</p>
          </div>
        </div>
      </div>
      <div className=" border-t-2 border-secondary p-4">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <span className="text-sm text-gray-100 sm:text-center">
            @ 2023{" "}
            <Link href={"/"} className="hover:underline">
              Tavares Supermercado™
            </Link>
            . Todos os Direitos Reservados.
          </span>

          <div className="flex gap-4 text-white">
            <Link
              className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
              href={"/"}
            >
              <InstagramLogo width={24} height={24} className="text-black" />
            </Link>
            <Link
              className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
              href={"/"}
            >
              <FacebookLogo width={24} height={24} className="text-black" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
