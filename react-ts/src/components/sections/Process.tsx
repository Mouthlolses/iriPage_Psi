// 1️⃣ Primeiro contato

import Container from "../ui/Container";

// ↓

// 2️⃣ Agendamento

// ↓

// 3️⃣ Atendimento

// ↓

// 4️⃣ Acompanhamento

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Primeiro contato",
      description:
        "Você entra em contato para compartilhar suas necessidades, tirar dúvidas e entender como funciona o processo terapêutico.",
    },
    {
      number: "02",
      title: "Agendamento",
      description:
        "Definimos o melhor horário para a consulta e alinhamos todas as informações necessárias para o início do acompanhamento.",
    },
    {
      number: "03",
      title: "Atendimento",
      description:
        "Durante a sessão, você encontrará um espaço seguro de escuta, acolhimento e reflexão sobre suas experiências.",
    },
    {
      number: "04",
      title: "Acompanhamento",
      description:
        "Construímos juntos um processo contínuo de desenvolvimento emocional e cuidado com sua saúde mental.",
    },
  ];

  return (
    <section id="process" className="bg-stone-50 py-24">
      <Container>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Como funciona
          </span>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Seu caminho até a terapia
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Um processo simples e acolhedor para que você possa iniciar sua
            jornada de cuidado emocional.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-3xl">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="flex gap-6">
                {/* Número */}
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="h-20 w-px bg-emerald-200" />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="pb-12">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
