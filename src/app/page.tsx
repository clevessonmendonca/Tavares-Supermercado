"use client";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import { Offers } from "../components/Offers";
import { Stores } from "../components/Stores";
import { Footer } from "../components/Footer";
import { AdOffers } from "../components/AdOffers";
import { Contact } from "../components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Hero />
          <Offers />
          <section className="bg- bg-work-with-us bg-cover px-32 py-8 text-white">
            <div className="mx-auto flex flex-col text-center max-w-screen-2xl md:text-start gap-2 md:flex-row items-center justify-around">
              <h1 className="max-w-md text-4xl font-bold">
                Trabalhe Conosco e Faça parte da Equipe{" "}
                <span className="text-secondary">Tavares</span>
              </h1>
              <p className="my-5 max-w-md text-sm leading-5 text-gray-100 shadow-black drop-shadow-2xl">
                Estamos em busca da melhor equipe para fazer parte do Tavares
                Supermercados. Venha fazer parte do nosso time e contribuir para
                o sucesso do nosso negócio.
              </p>
            </div>
            <button className="mx-auto mt-8 flex rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-blue-600 shadow-lg shadow-primary/90">
              <Link href={""}>Clique Aqui e Faça parte da Equipe Tavares</Link>
            </button>
          </section>
          <Stores />
          <AdOffers />

          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
