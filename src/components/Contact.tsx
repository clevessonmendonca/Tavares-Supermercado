import InputMask from "react-input-mask";

export const Contact = () => {
  return (
    <section className="flex items-center justify-center bg-gray-100 bg-background px-6 py-16 md:py-32">
      <div>
        <h1 className="relative text-center text-4xl font-bold">
          Melhores Preços para Você!
        </h1>

        <form className="mt-12 flex w-full flex-col gap-4">
          <input
            placeholder="Nome"
            required
            className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
          />
          <InputMask
            mask="(99) 99999-9999"
            placeholder="Número"
            pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
            required
            className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="Email"
            required={false}
            className="h-14 w-full rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2"
          />
          <button className="rounded-lg mx-auto shadow-md bg-secondary border-b-4 border-r-4 border-black px-6 py-2 font-medium hover:scale-105 hover:brightness-90">
            Garantir Ofertas
          </button>
        </form>
      </div>
    </section>
  );
};
