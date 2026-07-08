// Direitos autorais
// CRP
// Redes sociais

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-10 text-neutral-300">

      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Direitos autorais */}
          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Dr. Irineu. Todos os direitos
            reservados.
          </div>

          {/* CRP */}
          <div className="text-sm">Psicólogo Clínico • CRP 11/25743</div>

          {/* Redes sociais */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/irineu.psico/"
              target="_blank"
              className="transition hover:text-emerald-400"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/irineu-psico/"
              target="_blank"
              className="transition hover:text-emerald-400"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/5584999851617"
              target="_blank"
              className="transition hover:text-emerald-400"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
