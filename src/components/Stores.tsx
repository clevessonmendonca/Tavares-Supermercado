import Link from "next/link";
import { ArrowBendUpRight, Clock, MapPin, Phone } from "phosphor-react";
import React from "react";

export const Stores = () => {
  return (
    <section className="mx-auto my-4 py-10">
      <h1 className="relative mx-auto max-w-md items-center justify-center text-center text-3xl font-bold">
        Tem Sempre uma Loja{" "}
        <span className="text-primary">Pertinho de Você!</span>
        <span className="absolute bottom-2 left-1/2 h-[2px] w-60 -translate-x-1/2 translate-y-5 transform rounded-full bg-secondary" />
        <span />
      </h1>

      <div className="mx-auto flex flex-col justify-center items-center gap-6 px-4 py-10 md:flex-row md:gap-6 ">
        <div className="max-w-[400px] overflow-hidden rounded-lg bg-primary pb-2 text-white">
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
              <span className="mt-1 pr-2 text-secondary">
                <MapPin width={22} height={22} />
              </span>
              Qd. 24, Lotes 18/19, S.Leste - Gama, Brasília - DF, 72460-240
            </p>
            <p className="leading-2 mt-3 flex text-sm">
              <span className="-mt-1 pr-2 text-secondary">
                <Phone width={22} height={22} />
              </span>
              (61) 998707768
            </p>
            <p className="leading-2 mt-4 flex text-sm">
              <span className="-mt-1 pr-2 text-secondary">
                <Clock width={22} height={22} />
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
              <ArrowBendUpRight />
            </span>
            Traçar Rota
          </Link>
        </div>
        <div className="max-w-[400px] overflow-hidden rounded-lg bg-primary pb-2 text-white">
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
              <span className="-mt-1 pr-2 text-secondary">
                <MapPin width={22} height={22} />
              </span>
              Conj. F, SSU Q 4 - Gama, Brasília - DF
            </p>
            <p className="leading-2 mt-3 flex text-sm">
              <span className="-mt-1 pr-2 text-secondary">
                <Phone width={22} height={22} />
              </span>
              (61) 3970-0988
            </p>
            <p className="leading-2 mt-4 flex text-sm">
              <span className="-mt-1 pr-2 text-secondary">
                <Clock width={22} height={22} />
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
              <ArrowBendUpRight />
            </span>
            Traçar Rota
          </Link>
        </div>
      </div>
    </section>
  );
};
