import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between py-2">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo do Tavares Supermercado"
              width={177}
              height={51}
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
                <Link href={"/contato"}>Fale Conosco</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/contato"}>Contato</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/privacypolicy"}>Política de Privacidade</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Institucional
            </h2>
            <ul className="flex flex-col gap-2 font-medium text-gray-100">
              <li className="hover:underline">
                <Link href={"/sobre"}>O Tavares</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/lojas"}>Nossas Lojas</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/trabalheconosco"}>Trabalhe Conosco</Link>
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
            © {new Date().getFullYear()}{" "}
            <Link href={"/"} className="hover:underline">
              Tavares Supermercado
            </Link>
            . Todos os Direitos Reservados.
          </span>

          <div className="flex gap-4 text-white">
            <Link
              className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
              target="_blank"
              href={"https://www.instagram.com/tavaressupermercado/"}
            >
              <svg
                className="text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </Link>
            <Link
              className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
              target="_blank"
              href={"https://www.facebook.com/tavaressupermercadoo/"}
            >
              <svg
                className="text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
