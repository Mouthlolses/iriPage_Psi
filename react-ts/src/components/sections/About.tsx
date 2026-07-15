// Quem é ele.

// Foto
// Formação
// Experiência
// Missão

import projectIrineu from "../../assets/images/project_irineu.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-stone-50"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Foto */}
          <div className="flex justify-center">
            <div className="h-[350px] w-full max-w-sm overflow-hidden rounded-3xl bg-stone-200 shadow-xl md:h-[450px] md:w-[380px]">
              {" "}
              <img
                src={projectIrineu}
                alt="Psicólogo em atendimento"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Sobre mim - Conheça meu trabalho
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Cuidando da sua saúde emocional com acolhimento e escuta
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Sou psicólogo e meu trabalho é oferecer um espaço seguro,
              acolhedor e livre de julgamentos para que você possa compreender
              melhor suas emoções e desenvolver novas formas de lidar com os
              desafios da vida.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Através da psicoterapia, auxilio pessoas que buscam mais
              autoconhecimento, equilíbrio emocional e qualidade de vida.
            </p>

           <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <svg
                  className="h-6 w-6 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-bold text-slate-900">
                  Experiência comprovada
                </h3>
              </div>

              <p className="mb-4 text-sm font-medium text-slate-500">
                Pós-graduações:
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Psicologia Organizacional e do Trabalho",
                  "Avaliação Psicológica",
                  "Psicologia Jurídica",
                  "Neuropsicologia",
                ].map((formacao) => (
                  <span
                    key={formacao}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                  >
                    {formacao}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
