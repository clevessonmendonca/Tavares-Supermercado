import { motion } from "framer-motion";

export const AdOffers = () => {
  return (
    <section className="bg-offers-background-mobile w-full lg:bg-offers-background lg:bg-center bg-cover max-w-screen-2xl mx-auto py-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-screen-xl p-4 py-8"
      >
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg bg-secondary px-8 py-3 text-lg font-medium hover:scale-105 hover:brightness-90"
        >
          Receber as Melhores Ofertas
        </motion.button>
      </motion.div>
    </section>
  );
};
