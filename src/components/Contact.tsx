import { Linkedin, MapPin, Phone, Send } from "lucide-react";
import profile from "@/assets/Profile-Pro.jfif";
import { useTranslation } from 'react-i18next';

const EMAIL = "danielalejandroarmasrobles@gmail.com";
const PHONE = "+593967909623";
const LINKEDIN_URL = "https://www.linkedin.com/in/alejo88/";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      className="bg-contact py-20 text-contact-foreground sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado */}
        <div className="flex items-center justify-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-[0_0_20px_-4px_var(--color-brand)]">
            <Send className="size-5" strokeWidth={2} />
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t('contact.title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-contact-card-border shadow-[0_10px_40px_-25px_oklch(0_0_0/0.4)] lg:aspect-auto">
            <img
              src={profile}
              alt="Daniel Armas"
              loading="lazy"
              className="size-full object-cover object-center"
            />
          </div>

          <article className="flex flex-col items-center justify-center rounded-2xl border border-contact-card-border bg-contact-card p-8 text-center shadow-[0_10px_40px_-25px_oklch(0_0_0/0.4)] sm:p-12">
            <h3 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
              {t('contact.subtitle')}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-contact-foreground/70">
              {t('contact.description')}
            </p>

            {/* Botones */}
            <div className="mt-8 flex w-full max-w-md flex-col gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
              >
                <Linkedin className="size-4.5" strokeWidth={2} />
                {t('contact.linkedin')}
              </a>

              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-available px-6 py-3.5 text-sm font-semibold text-available-foreground transition-colors hover:opacity-90"
              >
                <WhatsAppIcon className="size-4.5" />
                {t('contact.whatsapp')}
              </a>
            </div>

            {/* Pill de email */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm shadow-[0_6px_20px_-12px_oklch(0_0_0/0.35)] ring-1 ring-inset ring-contact-card-border">
              <span className="font-semibold text-brand">{t('contact.emailLabel')}</span>
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-contact-foreground/80 transition-colors hover:text-contact-foreground"
              >
                {EMAIL}
              </a>
            </div>

            {/* Info adicional */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-contact-foreground/60">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" strokeWidth={1.75} />
                Quito, Ecuador
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-3.5" strokeWidth={1.75} />
                +593 967909623
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}