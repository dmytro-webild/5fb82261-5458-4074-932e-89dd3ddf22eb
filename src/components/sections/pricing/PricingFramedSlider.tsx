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

type PricingFramedSliderProps = {
  title?: string;
  script?: string;
  items?: Plan[];
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingFramedSlider;
