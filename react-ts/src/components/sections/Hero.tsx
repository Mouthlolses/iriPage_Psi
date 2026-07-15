// A primeira tela.

// Contém:

// Foto grande do psicólogo
// Nome
// CRP
// Frase de impacto
// Botão Agendar
// Fundo com animação

import Container from "../ui/Container";
import Button from "../ui/Button";
import { handleScheduleClick } from "../../lib/utils";
import projectIrineu from "../../assets/images/project_irineu_2.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[700px] items-center overflow-hidden bg-stone-50 md:min-h-screen"
    >
      {/* Imagem Desktop */}
      <div className="absolute right-0 top-0 hidden h-full w-[55%] md:block">
        <img
          src={projectIrineu}
          alt="Psicólogo em atendimento"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/60 to-transparent" />
      </div>

      {/* Imagem Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={projectIrineu}
          className="h-full w-full object-cover opacity-10"
        />
      </div>

      {/* Conteúdo */}
      <Container>
      <div className="relative z-10 max-w-3xl py-20 md:py-0">
          {/* CRP */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700 md:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Psicólogo Clínico • CRP 11/25743
          </span>

          {/* Nome */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-emerald-500" />
            <p className="text-base font-medium tracking-wide text-neutral-500 md:text-lg">
              José Irineu
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Um espaço seguro para cuidar da{" "}
            <span className="text-emerald-700">sua saúde emocional</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 md:mt-8 md:text-xl">
            Escuta qualificada e acolhimento profissional para{" "}
            <span className="font-medium text-slate-800">
              adolescentes, adultos, idosos e casais
            </span>
            , de forma{" "}
            <span className="font-medium text-slate-800">
              presencial ou online
            </span>
            .
          </p>

          <div className="mt-10 md:mt-12">
            <Button
              onClick={() =>
                handleScheduleClick(
                  "+5584999851617",
                  "Olá, gostaria de agendar uma consulta.",
                )
              }
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8">
        <svg
          className="h-6 w-6 animate-bounce text-neutral-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
