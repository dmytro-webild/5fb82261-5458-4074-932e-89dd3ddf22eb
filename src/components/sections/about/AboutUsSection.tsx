"use client";

import { motion, useReducedMotion } from "motion/react";
import Media from "@/components/kit/Media";
import { Compass, MapPin, Mountain, Tent, Award, HeartHandshake } from "lucide-react";

export type AboutUsSectionProps = {
  title?: string;
  subtitle?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
};

const DEFAULT_TITLE = "À PROPOS DE NOUS";
const DEFAULT_SUBTITLE = "Découvrez Nkob, le cœur des aventures du Jbel Saghro.";
const DEFAULT_P1 =
  "Je m'appelle Mohamed. Je suis un jeune originaire de Nkob, une localité rurale située dans la province de Zagora, au sein de la région de Drâa-Tafilalet, au Maroc. Nkob se trouve à proximité du massif du Jbel Saghro et est surnommée la « capitale des kasbahs », car elle en abrite plus de 45, le tout entouré de palmeraies. La ville est très prisée des touristes amateurs de randonnée en montagne et de camping. C'est pourquoi, en tant que jeunes de la région, nous œuvrons au développement du tourisme de montagne ; étant natifs des lieux, nous connaissons notre territoire sur le bout des doigts.";
const DEFAULT_P2 =
  "Le voyage est notre passion. Ce site a pour vocation d'accompagner tous ceux qui souhaitent explorer ce pays, réputé pour sa grande hospitalité et la chaleur de son accueil. Je suis là pour vous guider dans votre découverte de la nature, de l'histoire et de la géographie du Maroc. Je m'occupe également de la réservation d'hôtels et de l'organisation de tous types d'excursions — notamment vers les montagnes et le désert — ainsi que de nombreuses autres activités.";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795006634442-r7ncvxln.jpg";

const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];

/**
 * Highlights key terms ("Nkob", "Jbel Saghro", "Le voyage est notre passion", etc.) in text
 */
function renderHighlightedText(text: string) {
  // Replace key terms with highlighted markup elements safely
  const parts = text.split(/(Nkob|Jbel Saghro|Le voyage est notre passion|capital of kasbahs|capitale des kasbahs|Travel is our passion|السفر هو شغفنا|نقوب|جبل صغرو)/g);

  return parts.map((part, index) => {
    if (part === "Nkob" || part === "نقوب") {
      return (
        <span
          key={index}
          className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 decoration-2"
        >
          {part}
        </span>
      );
    }
    if (part === "Jbel Saghro" || part === "جبل صغرو") {
      return (
        <span
          key={index}
          className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 decoration-2"
        >
          {part}
        </span>
      );
    }
    if (
      part === "Le voyage est notre passion" ||
      part === "Travel is our passion" ||
      part === "السفر هو شغفنا"
    ) {
      return (
        <strong
          key={index}
          className="font-semibold text-primary font-[family-name:var(--font-heading)] italic"
        >
          {part}
        </strong>
      );
    }
    if (part === "capitale des kasbahs" || part === "capital of kasbahs") {
      return (
        <span key={index} className="font-medium text-foreground">
          « {part} »
        </span>
      );
    }
    return part;
  });
}

export default function AboutUsSection({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  paragraph1 = DEFAULT_P1,
  paragraph2 = DEFAULT_P2,
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "Kasbahs et massif du Jbel Saghro à Nkob, Maroc",
  ctaText = "Contactez Mohamed sur WhatsApp",
  ctaHref = "https://wa.me/212650850571",
}: AboutUsSectionProps) {
  const reduce = useReducedMotion();

  const animationProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: EASE_OUT },
      };

  return (
    <section
      aria-labelledby="about-us-title"
      className="relative overflow-hidden py-[var(--section-space)] bg-background text-foreground"
    >
      {/* Background Subtle Warm Accent Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_20%,var(--primary-cta)_0%,transparent_60%)]"
      />

      <div className="relative mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left / Top Text Column */}
          <motion.div {...animationProps} className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-primary mb-4">
              <Compass className="size-3.5" />
              <span>Guide Natif & Expeditions</span>
            </div>

            {/* Title */}
            <h2
              id="about-us-title"
              className="font-[family-name:var(--font-heading)] text-[length:var(--text-h1)] lg:text-[length:min(var(--text-display),var(--text-h1))] font-normal leading-[0.9] tracking-[var(--heading-tracking)] text-foreground uppercase text-balance"
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[length:var(--text-h3)] font-medium text-primary leading-snug">
              {subtitle}
            </p>

            <div aria-hidden="true" className="my-6 h-px w-20 bg-primary/40" />

            {/* Main Paragraph 1 */}
            <div className="text-[length:var(--text-body-lg)] leading-relaxed text-foreground/90 space-y-4">
              <p className="text-pretty">{renderHighlightedText(paragraph1)}</p>
            </div>

            {/* Signature Highlight Card for "Le voyage est notre passion" */}
            <div className="my-6 rounded-[1rem] bg-card border border-primary/20 p-5 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
              <div className="flex items-start gap-3">
                <HeartHandshake className="size-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-[length:var(--text-h3)] font-[family-name:var(--font-heading)] italic text-primary leading-snug">
                    « Le voyage est notre passion. »
                  </p>
                  <p className="text-[length:var(--text-small)] text-foreground/75 mt-1 font-medium">
                    Mohamed & l'équipe de Nkoub Saghro Adventures
                  </p>
                </div>
              </div>
            </div>

            {/* Main Paragraph 2 */}
            <div className="text-[length:var(--text-body-lg)] leading-relaxed text-foreground/90 space-y-4">
              <p className="text-pretty">{renderHighlightedText(paragraph2)}</p>
            </div>

            {/* Feature Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 rounded-[0.75rem] border border-border bg-card/60 p-3">
                <MapPin className="size-4 text-primary shrink-0" />
                <span className="text-[length:var(--text-small)] font-semibold text-foreground">
                  45+ Kasbahs & Palmeraies
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-[0.75rem] border border-border bg-card/60 p-3">
                <Mountain className="size-4 text-primary shrink-0" />
                <span className="text-[length:var(--text-small)] font-semibold text-foreground">
                  Massif Jbel Saghro
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-[0.75rem] border border-border bg-card/60 p-3 col-span-2 sm:col-span-1">
                <Tent className="size-4 text-primary shrink-0" />
                <span className="text-[length:var(--text-small)] font-semibold text-foreground">
                  Rando & Bivouac
                </span>
              </div>
            </div>

            {/* CTA Button */}
            {ctaText && (
              <div className="mt-8">
                <a
                  href={ctaHref}
                  target={ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-full bg-primary px-7 text-[length:var(--text-body)] font-semibold uppercase tracking-[var(--label-tracking)] text-primary-foreground shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Award className="size-4" />
                  <span>{ctaText}</span>
                </a>
              </div>
            )}
          </motion.div>

          {/* Right / Bottom Image Column */}
          <motion.div
            {...animationProps}
            transition={reduce ? {} : { duration: 0.8, delay: 0.2, ease: EASE_OUT }}
            className="lg:col-span-5 relative"
          >
            {/* Evocative Image Card Container */}
            <div className="relative rounded-[1.5rem] border border-primary/20 bg-card p-3 shadow-xl overflow-hidden group">
              <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-[1.125rem] relative">
                <Media
                  src={imageSrc}
                  alt={imageAlt}
                  className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
                />

                {/* Top Badge on Image */}
                <div className="absolute top-4 start-4 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-white">
                  <MapPin className="size-3.5 text-secondary" />
                  <span className="text-[length:var(--text-label)] font-semibold tracking-wider uppercase">
                    Nkob · Zagora, Maroc
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-5 inset-x-5 text-white">
                  <p className="text-[length:var(--text-label)] font-medium uppercase tracking-widest text-secondary mb-1">
                    Capitale des Kasbahs
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] leading-none text-white">
                    Mohamed & Jbel Saghro
                  </h3>
                  <p className="text-[length:var(--text-small)] opacity-90 mt-1 font-light">
                    Guide local natif de Nkob — Randonnées, désert et hébergements.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Accent Card */}
            <div className="hidden sm:flex absolute -bottom-6 -start-6 items-center gap-4 rounded-[1.25rem] border border-primary/30 bg-background/95 backdrop-blur-md p-4 shadow-2xl max-w-xs">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                <Compass className="size-6" />
              </div>
              <div>
                <p className="text-[length:var(--text-body)] font-bold text-foreground">
                  45+ Kasbahs
                </p>
                <p className="text-[length:var(--text-small)] text-muted-foreground">
                  Au cœur des palmeraies et montagnes
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
