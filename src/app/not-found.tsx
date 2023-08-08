"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-screen -mt-8 flex-col items-center justify-center">
      <h1 className="max-w-lg text-4xl text-center font-bold">Oh! Parece que você acessou uma página desconhecida!</h1>
      <p className="text-sm mt-2">Tudo bem! Não se preocupe... Tente novamente clicando abaixo.</p>

      <Link
        href="/"
        className="mt-8 rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-blue-600 shadow-lg shadow-primary/90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
