import Image from "next/image";
import React from "react";

export const Offers = () => {
  return (
    <section className="mx-auto py-10 my-11">
      <div>
        <h1 className="relative text-3xl font-bold text-center">
          Confira as Melhores Ofertas
          <span className="h-[2px] rounded-full w-40 bg-yellow-400 absolute left-1/2 transform -translate-x-1/2 top-10" />
          <span />
        </h1>
      </div>
      <div>
        <div>
          <Image alt="" src="" />
        </div>
      </div>
    </section>
  );
};
