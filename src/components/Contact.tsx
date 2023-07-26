import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  tel: z.string().min(7),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [submited, setSubmited] = useState(false);
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    setTimeout(() => {
      setSubmited(false);
    }, 5000);
    console.log("Contact");
  }, [submited]);

  const onSubmit = (data: ContactFormData) => {
    console.log(data);

    setSubmited(true);
  };

  return (
    <section
      id="contato"
      className="flex items-center justify-center bg-gray-100 bg-background px-6 py-16 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative text-center text-4xl font-bold">
          Melhores Preços para Você!
        </h1>

        <form
          className="mt-12 flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name")}
            placeholder="Nome"
            required
            className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
          />
          <InputMask
            {...register("tel")}
            mask="(99) 99999-9999"
            placeholder="Número"
            pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
            required
            className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
          />
          <input
            {...register("email", { required: false })}
            type="email"
            placeholder="Email"
            required={false}
            className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mx-auto rounded-lg border-b-4 border-r-4 border-black bg-secondary px-6 py-2 font-medium shadow-md"
          >
            Garantir Ofertas
          </motion.button>
        </form>
      </motion.div>

      {submited && <div>Enviado</div>}
    </section>
  );
};
