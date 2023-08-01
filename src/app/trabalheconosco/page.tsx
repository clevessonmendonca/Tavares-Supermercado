"use client";

import { AdOffers } from "@/components/AdOffers";
import { Head } from "./Head";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contato() {
  const [submited, setSubmited] = useState(false);
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    setTimeout(() => {
      setSubmited(false);
    }, 5000);
  }, [submited]);

  const onSubmit = (data: ContactFormData) => {
    console.log(data);

    const corpoDoEmail = `
    Nome: ${data.name}
    Email: ${data.email}
    Mensagem: ${data.message}
  `;

    const linkParaEmail = `mailto:clevesson.contato@gmail.com?subject=Trabalhe Conosco&body=${encodeURIComponent(
      corpoDoEmail
    )}`;

    window.location.href = linkParaEmail;

    setSubmited(true);
  };

  return (
    <>
      <Head />

      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          <h1 className="text-center text-8xl font-extrabold text-white">
            Trabalhe Conosco
          </h1>
          <p className="mt-2 text-center text-sm leading-3 text-gray-200">
            Venha fazer parte da melhor equipe de supermercado!
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
          <div className="px-4 py-8">
            <h3 className="pb-4 text-center text-2xl font-bold text-primary">
              Formulário
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto flex w-full max-w-2xl flex-col gap-4"
            >
              <input
                {...register("name")}
                placeholder="Nome"
                required
                className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                required={false}
                className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
              />
              <textarea
                {...register("message")}
                placeholder="Mensagem"
                required={false}
                className="h-32 w-full resize-none rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="mx-auto rounded-lg border-b-4 border-r-4 border-black bg-secondary px-12 py-3 text-xl font-medium uppercase shadow-md focus:ring-4"
              >
                Enviar
              </motion.button>
            </form>
          </div>

          <AdOffers />
        </div>
      </main>
    </>
  );
}
