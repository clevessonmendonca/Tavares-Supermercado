"use client";
import Hero from "../components/Hero";
import { Offers } from "../components/Offers";
import { Stores } from "../components/Stores";
import { AdOffers } from "../components/AdOffers";
import { Contact } from "../components/Contact";
import Link from "next/link";
import { motion } from "framer-motion";
import { Head } from "./Head";

export default function Home() {
  return (
    <>
      <Head />

      <main>
        <div>
          <Hero />
          <Offers />
          <section className="bg- bg-work-with-us bg-cover px-32 py-10 text-white">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-screen-2xl flex-col items-center justify-around gap-2 text-center md:flex-row md:text-start"
            >
              <h1 className="max-w-md text-4xl font-bold">
                Trabalhe Conosco e Faça parte da Equipe{" "}
                <span className="text-secondary">Tavares</span>
              </h1>
              <p className="my-5 max-w-md text-sm leading-5 text-gray-100 shadow-black drop-shadow-2xl">
                Estamos em busca da melhor equipe para fazer parte do Tavares
                Supermercados. Venha fazer parte do nosso time e contribuir para
                o sucesso do nosso negócio.
              </p>
            </motion.div>
            <motion.button
              className="mx-auto mt-8 flex rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-blue-600 shadow-lg shadow-primary/90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/contato">
                Clique Aqui e Faça parte da Equipe Tavares
              </Link>
            </motion.button>
          </section>
          <Stores />
          <AdOffers />
          <Contact />
        </div>
      </main>
    </>
  );
}
