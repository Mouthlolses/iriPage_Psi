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

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">10+</h3>
                <p className="text-slate-600">Anos de experiência</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-slate-600">Pessoas atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
