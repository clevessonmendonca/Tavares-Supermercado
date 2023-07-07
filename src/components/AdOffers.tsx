import Image from "next/image";
import React from "react";

export const AdOffers = () => {
  return (
    <section className="bg-offers-background bg-cover py-6">
      <div className="mx-auto max-w-screen-xl p-4 py-10">
        <h1 className="max-w-sm text-5xl font-bold text-white">
          Não Perca nossas <span className="text-secondary">Ofertas</span>{" "}
          especiais!
        </h1>
        <p className="my-5 text-sm text-gray-200">
          Descubra um mar de oportunidades com nossas ofertas irresistíveis!
        </p>
        <p className="my-5 max-w-sm text-sm leading-5 text-gray-200">
          Venha para o nosso supermercado e encha o carrinho com os melhores
          preços da cidade!
        </p>
        <button className="rounded-lg text-lg bg-secondary px-6 py-2 font-medium hover:scale-105 hover:brightness-90">
          Receber as Melhores Ofertas
        </button>
      </div>
    </section>
  );
};