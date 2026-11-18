import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import EraTitle from "@/components/kit/EraTitle";
import { useImageReady, usePreloadImages } from "@/components/kit/kitMotion";
import Media, { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Spec = { label: string; value: string };

type Plan = {
  name: string;
  price?: string;
  period?: string;
  description?: string;
  specs?: Spec[];
  imageSrc?: string;
  imageAlt?: string;
  cta?: { text: string; href: string };
};

type PricingTableData = {
  title: string;
  subtitle: string;
  peopleHeader: string;
  priceHeader: string;
  perPersonLabel: string;
  rows: { people: string; price: string }[];
  bookNow: string;
  waMessage: string;
  note?: string;
};

type PricingFramedSliderProps = {
  title?: string;
  script?: string;
  items?: Plan[];
  table?: PricingTableData;
  imageSrc?: string;
  imageAlt?: string;
  ariaLabel?: string;
  className?: string;
};

const PricingFramedSlider = ({
  title = "Rooms and suites",
  script = "stay",
  items = [
    { name: "Garden Room", price: "€240", period: "per night", description: "A quiet room that opens onto the lemon garden.", specs: [{ label: "Guests", value: "2" }], cta: { text: "Book", href: "#contact" } },
  ],
  table,
  imageSrc,
  imageAlt = "",
  ariaLabel,
  className,
}: PricingFramedSliderProps) => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "200%");
  const revealRef = useRef<HTMLDivElement>(null);
  const revealIn = useInView(revealRef, { once: true, margin: "0px 0px -10% 0px" });
  const revealReady = useImageReady(revealRef, revealIn);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const leadY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const count = items.length;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: count > 1, align: "center" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => setActive(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused || reduce || count < 2) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 6000);
    return () => window.clearInterval(id);
  }, [emblaApi, paused, reduce, count]);

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative z-10 text-secondary-foreground", !imageSrc && "-mt-16", className)}>
      {imageSrc && (
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          <MotionMedia
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            style={reduce ? undefined : { y: leadY }}
            className="absolute inset-x-0 top-0 h-[106%] w-full object-cover"
          />
        </div>
      )}
      <div className="relative z-10 bg-secondary py-[var(--section-space)] [clip-path:polygon(4rem_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%,0_4rem)]">
        <div className="mx-auto w-[var(--container)]">
          <EraTitle text={title} script={script} rule className="max-w-[4.05em]" />

          <motion.div
            ref={revealRef}
            initial={reduce ? false : "hidden"}
            animate={reduce || (revealIn && revealReady) ? "show" : "hidden"}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="mt-[clamp(2.5rem,5vw,4rem)]"
          >
            <motion.div variants={{ hidden: { clipPath: "inset(100% 0% 0% 0%)" }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.9, ease: [0.75, 0, 0.25, 1] } } }}>
            <div ref={emblaRef} className="overflow-hidden">
              <ul className="flex">
                {items.map((item, i) => (
                  <li key={`${i}-${item.name}`} aria-roledescription="slide" aria-label={`${i + 1} of ${count}`} className="min-w-0 shrink-0 grow-0 basis-full">
                    <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-[1fr_minmax(0,22rem)_1fr] lg:items-end xl:grid-cols-[1fr_minmax(0,26rem)_1fr]">
                      {item.imageSrc && (
                        <div className="order-1 mx-auto flex aspect-[4/5] w-full max-w-[26rem] flex-col overflow-hidden rounded-[var(--radius-image)] lg:order-2">
                          <Media src={item.imageSrc} alt={item.imageAlt ?? ""} loading="lazy" decoding="async" className="min-h-0 w-full flex-1 object-cover" />
                        </div>
                      )}
                      <h3 className="order-2 text-center text-[length:var(--text-h1)] [overflow-wrap:anywhere] lg:order-4 lg:col-span-3">{item.name}</h3>
                      {item.specs && item.specs.length > 0 && (
                        <dl className="order-3 grid grid-cols-2 gap-x-[var(--gap)] gap-y-6 lg:order-1 lg:grid-cols-1 lg:justify-items-end lg:text-right">
                          {item.specs.map((spec, s) => (
                            <div key={s} className="flex flex-col gap-1.5">
                              <dt className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground">{spec.label}</dt>
                              <dd className="text-[length:var(--text-h3)] leading-none [font-family:var(--font-heading)]">{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <div className="order-4 flex flex-col items-start gap-4 lg:order-3">
                        {item.price && (
                          <div className="flex items-baseline gap-3">
                            <p className="text-[length:var(--text-h1)] leading-none [font-family:var(--font-heading)]">{item.price}</p>
                            {item.period && <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground">{item.period}</p>}
                          </div>
                        )}
                        {item.description && <p className="max-w-[22rem] text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">{item.description}</p>}
                        {item.cta && (
                          <a
                            href={item.cta.href}
                            target={item.cta.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="btn-secondary flex items-center gap-2"
                          >
                            {item.cta.text}
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            </motion.div>

            {count > 1 && (
              <div className="mt-[clamp(2rem,4vw,3rem)] flex items-center justify-center gap-6">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth={1} />
                  </svg>
                </button>
                <div className="flex items-center gap-4">
                  <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">{active + 1}</p>
                  <div aria-hidden="true" className="h-px w-16 bg-current" />
                  <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">{count}</p>
                </div>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => emblaApi?.scrollNext()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth={1} />
                  </svg>
                </button>
              </div>
            )}

            {table && (
              <div className="mt-14 md:mt-20 mx-auto max-w-4xl rounded-[1.5rem] border border-emerald-500/30 bg-background/80 p-6 md:p-8 backdrop-blur-md shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider mb-2">
                      <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                      </svg>
                      {table.title}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground">{table.subtitle}</h4>
                  </div>
                  <a
                    href={`https://wa.me/212650850571?text=${encodeURIComponent(table.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-emerald-600/30 shrink-0 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.586-1.052 3.841 3.931-.968.865.207z" />
                    </svg>
                    {table.bookNow}
                  </a>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border/50 text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                        <th className="py-3.5 px-4">{table.peopleHeader}</th>
                        <th className="py-3.5 px-4 text-right">{table.priceHeader}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      {table.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-emerald-500/5 transition-colors">
                          <td className="py-4 px-4 font-semibold text-foreground text-base md:text-lg">
                            {row.people}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 tracking-tight">
                              {row.price}
                            </span>
                            <span className="ml-1.5 text-xs md:text-sm font-semibold uppercase text-muted-foreground">
                              {table.perPersonLabel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {table.note && (
                  <div className="mt-6 pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
                    <p className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {table.note}
                    </p>
                    <a
                      href="https://wa.me/212650850571"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 hover:underline font-semibold flex items-center gap-1 transition-colors"
                    >
                      WhatsApp: +212 650850571
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingFramedSlider;
