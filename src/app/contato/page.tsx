"use client";

import { AdOffers } from "@/components/AdOffers";
import { Head } from "./Head";
import { Contact } from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <>
      <Head />

      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          {/* <Image src={"/images/offers-mobile.png"} alt="" width={500} height={200} className="absolute top-0 -z-10 w-full left-0"/> */}
          <h1 className="text-center text-8xl font-extrabold text-white">
            Contato
          </h1>
          <p className="mt-2 text-center text-sm leading-3 text-gray-200">
            Entre em contato Conosco!
          </p>
          <span className="mt-8 flex animate-bounce justify-center text-3xl text-secondary">
            <svg
              fill="yellow"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </span>
        </div>
        <div className="py-16">
          <h1 className="relative text-center text-xl font-bold">
            Confira todos os nossos contatos e dúvidas
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <div className="flex h-80 max-w-sm flex-col items-center justify-center gap-2 rounded bg-gray-100 px-4 py-8 pb-12 text-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="blue"
                viewBox="0 0 256 256"
              >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
              </svg>
              <h1 className="text-lg font-bold">Horario de Funcionamento</h1>

              <div>
                <p>De Segunda a Sábado das 07h às 22h</p>
                <p>Domingo das 07h às 20h</p>
              </div>
            </div>
            <div className="flex h-80 max-w-sm flex-col items-center justify-center gap-2 rounded bg-gray-100 px-4 py-8 pb-12 text-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="blue"
                viewBox="0 0 256 256"
              >
                <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path>
              </svg>
              <h1 className="text-lg font-bold">Formas de Pagamentos</h1>

              <p>Confira todos as nossas formas de pagamentos aqui:</p>

              <Link
                className="mx-auto rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-blue-600 shadow-lg shadow-primary/10 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                href={"/"}
              >
                Confira
              </Link>
            </div>
            <div className="flex h-80 max-w-sm flex-col items-center justify-center gap-2 rounded bg-gray-100 px-4 py-8 pb-12 text-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="blue"
                viewBox="0 0 256 256"
              >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
              </svg>
              <h1 className="text-lg font-bold">Central de Atendimento</h1>

              <p>Alguma dúvida, sugestão? Entre em contato.</p>

              <Link
                className="mx-auto rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-blue-600 shadow-lg shadow-primary/10 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                href={"/"}
              >
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
        <div>
          <AdOffers />
          <Contact />
        </div>
      </main>
    </>
  );
}
