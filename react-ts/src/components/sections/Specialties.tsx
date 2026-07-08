// Cards com:

import Container from "../ui/Container";

// Ansiedade
// Depressão
// Autoconhecimento
// Relacionamentos
// Burnout

export default function Specialties() {
  const specialties = [
    {
      title: "Ansiedade",
      description:
        "Apoio no gerenciamento dos pensamentos, emoções e sintomas relacionados à ansiedade.",
    },
    {
      title: "Depressão",
      description:
        "Um espaço seguro para compreender sentimentos, recuperar energia e construir novos caminhos.",
    },
    {
      title: "Autoconhecimento",
      description:
        "Processo de reflexão e desenvolvimento pessoal para entender melhor suas emoções e escolhas.",
    },
    {
      title: "Relacionamentos",
      description:
        "Auxílio para lidar com conflitos, comunicação e construção de relações mais saudáveis.",
    },
    {
      title: "Burnout",
      description:
        "Acolhimento para pessoas enfrentando exaustão emocional e sobrecarga profissional.",
    },
  ];

  return (
    <section id="specialties" className="bg-white py-24">
      <Container>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Especialidades
          </span>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Como posso ajudar você
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A psicoterapia oferece um espaço de acolhimento e reflexão para
            diferentes momentos e desafios da vida.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-neutral-200 bg-stone-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <span className="text-xl font-bold">+</span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
