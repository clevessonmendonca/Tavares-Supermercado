import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { offersImages } from "./OffersImage";
import { usePathname } from "next/navigation";

export const Offers = () => {
  const pathname = usePathname();

  return (
    <section className="mx-auto my-4 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <h1 className="relative text-center text-3xl font-bold">
          Confira as Melhores Ofertas
          <span className="absolute bottom-2 left-1/2 h-[2px] w-40 -translate-x-1/2 translate-y-4 transform rounded-full bg-secondary" />
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4 p-10 py-8"
      >
        {offersImages.map((offerImage, i) => {
          if (i >= 3 && pathname != "/ofertas") return;

          return (
            <div key={offerImage.src}>
              <Image
                alt={offerImage.alt}
                src={offerImage.src}
                width={350}
                height={350}
              />
            </div>
          );
        })}
      </motion.div>

      <div className="flex items-center justify-center gap-6">
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <Link
            href={"/"}
            className="rounded-md bg-radial-tavares px-6 py-2 text-white shadow-md font-medium transition-all hover:brightness-125"
          >
            Receber Todas as Ofertas
          </Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={"/ofertas"}
            className="rounded-md border-[1px] border-primary px-6 py-2 shadow-md transition-all hover:brightness-125"
          >
            Ver mais
          </Link>
        </motion.span>
      </div>
    </section>
  );
};
