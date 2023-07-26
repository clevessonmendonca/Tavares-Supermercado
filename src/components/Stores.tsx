import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Stores = () => {
  return (
    <section className="mx-auto my-4 py-10">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-md items-center justify-center text-center text-3xl font-bold"
      >
        Tem Sempre uma Loja{" "}
        <span className="text-primary">Pertinho de Você!</span>
        <span className="absolute bottom-2 left-1/2 h-[2px] w-60 -translate-x-1/2 translate-y-5 transform rounded-full bg-secondary" />
        <span />
      </motion.h1>

      <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-10 md:flex-row md:gap-6 ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[400px] overflow-hidden rounded-lg bg-primary pb-2 text-white"
        >
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15339.262790340263!2d-48.065346948498565!3d-16.023106830209716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935981166cf09075%3A0xdd4ad6327f505027!2sTavares%20Supermercado!5e0!3m2!1spt-BR!2sbr!4v1687868650994!5m2!1spt-BR!2sbr"
              width="400"
              height="250"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="py-4 text-center text-3xl font-bold text-secondary">
            Gama Leste
          </h1>
          <div className="flex flex-col px-4">
            <p className="leading-2 flex text-sm">
              <span className="mt-1 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="yellow"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </span>
              Qd. 24, Lotes 18/19, S.Leste - Gama, Brasília - DF, 72460-240
            </p>
            <p className="leading-2 mt-3 flex text-sm">
              <span className="-mt-1 pr-2 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="yellow"
                  viewBox="0 0 256 256"
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </span>
              (61) 998707768
            </p>
            <p className="leading-2 mt-4 flex text-sm">
              <span className="-mt-1 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="yellow"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </span>
              Todos os Dias, 08:00–22:00H
            </p>
          </div>
          <Link
            href="https://www.google.com/maps/dir//Tavares+Supermercado+-+Qd.+24,+Lotes+18%2F19,+S.Leste+-+Gama,+Bras%C3%ADlia+-+DF,+72460-240/@-16.023128,-48.055047,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935981166cf09075:0xdd4ad6327f505027!2m2!1d-48.0550472!2d-16.0231277?hl=pt-BR&entry=ttu"
            target="_blank"
            className="mx-auto my-4 flex w-48 items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-2 font-medium text-black hover:scale-105 hover:border-b-[3px] hover:border-r-[3px] hover:border-black hover:brightness-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"></path>
              </svg>
            </span>
            Traçar Rota
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[400px] overflow-hidden rounded-lg bg-primary pb-2 text-white"
        >
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1917.4287533060024!2d-48.07783773015697!3d-16.020931526699233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359819159a8918b%3A0xbb614188e42928d8!2sTavares%20Supermercado!5e0!3m2!1spt-BR!2sbr!4v1687883117809!5m2!1spt-BR!2sbr"
              width="400"
              height="250"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="py-4 text-center text-3xl font-bold text-secondary">
            Gama Sul
          </h1>
          <div className="flex flex-col px-4">
            <p className="leading-2 flex text-sm">
              <span className="mt-1 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="yellow"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </span>
              Conj. F, SSU Q 4 - Gama, Brasília - DF
            </p>
            <p className="leading-2 mt-3 flex text-sm">
              <span className="-mt-1 pr-2 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="yellow"
                  viewBox="0 0 256 256"
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </span>
              (61) 3970-0988
            </p>
            <p className="leading-2 mt-4 flex text-sm">
              <span className="-mt-1 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="yellow"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </span>
              Todos os Dias, 08:00–22:00H
            </p>
          </div>
          <Link
            href="https://www.google.com/maps/dir//Tavares+Supermercado+-+Qd.+24,+Lotes+18%2F19,+S.Leste+-+Gama,+Bras%C3%ADlia+-+DF,+72460-240/@-16.023128,-48.055047,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935981166cf09075:0xdd4ad6327f505027!2m2!1d-48.0550472!2d-16.0231277?hl=pt-BR&entry=ttu"
            target="_blank"
            className="mx-auto my-4 mt-8 flex w-48 items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-2 font-medium text-black hover:scale-105 hover:border-b-[3px] hover:border-r-[3px] hover:border-black hover:brightness-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"></path>
              </svg>
            </span>
            Traçar Rota
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
