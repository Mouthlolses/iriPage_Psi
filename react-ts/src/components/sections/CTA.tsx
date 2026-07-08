// Uma seção chamativa antes do final.

import { handleScheduleClick } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";

// Pronto para iniciar sua jornada?

// [ Agendar Consulta ]

export default function CTA() {
  return (
    <section id="cta" className="bg-emerald-500 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Pronto para iniciar sua jornada?
          </h2>

          <p className="mt-6 text-lg leading-8 text-emerald-50">
            Cuidar da sua saúde emocional é um passo importante. Encontre um
            espaço seguro para falar, compreender e transformar.
          </p>

          <div className="mt-10">
            <Button
              onClick={() => {
                handleScheduleClick(
                  "+5584999851617",
                  "Olá, gostaria de agendar uma consulta."
                );
              }}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
