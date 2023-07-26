"use client";

import { AdOffers } from "@/components/AdOffers";
import { Contact } from "@/components/Contact";
import { Offers } from "@/components/Offers";
import Image from "next/image";
import { ArrowDown, Link } from "phosphor-react";

export default function Ofertas() {
  return (
    <>
      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          <h1 className="text-center text-8xl font-extrabold text-white">
            Ofertas
          </h1>
          <p className="mt-2 text-center text-sm leading-3 text-gray-200">
            Confira as melhores ofertas aqui!
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
        <div>
          <Offers />

          <AdOffers />
          <Contact />
        </div>
      </main>
    </>
  );
}
