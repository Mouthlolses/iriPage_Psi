// Perguntas comuns.

import Container from "../ui/Container";

// Exemplo:

// Quanto dura a sessão?
// É online?
// Aceita convênio?

export default function FAQ() {
  const questions = [
    {
      question: "Quanto dura uma sessão de terapia?",
      answer:
        "As sessões geralmente têm duração média de 50 minutos, podendo variar conforme a necessidade do atendimento.",
    },
    {
      question: "O atendimento pode ser online?",
      answer:
        "Sim. Os atendimentos podem ser realizados de forma online, oferecendo praticidade e conforto para você.",
    },
    {
      question: "Aceita convênio?",
      answer:
        "Os atendimentos podem ser realizados de forma particular. Caso necessário, é possível verificar a possibilidade de reembolso junto ao seu convênio.",
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        "Você pode entrar em contato através do WhatsApp ou redes sociais. Vamos conversar sobre sua necessidade e encontrar o melhor horário.",
    },
    {
      question: "A terapia é indicada para qualquer pessoa?",
      answer:
        "A psicoterapia pode ajudar pessoas em diferentes momentos da vida, seja para lidar com dificuldades emocionais ou para desenvolver autoconhecimento.",
    },
  ];
  return (
    <section id="faq" className="bg-white py-24">
      <Container>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Dúvidas frequentes
          </span>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Perguntas comuns
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Encontre respostas para as principais dúvidas antes de iniciar seu
            acompanhamento.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-neutral-200 bg-stone-50 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-neutral-900">
                {item.question}

                <span className="ml-4 text-2xl text-emerald-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-neutral-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
