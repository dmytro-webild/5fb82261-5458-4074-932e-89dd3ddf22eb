import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/utils/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = { text: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

type FooterPlumPhoneProps = {
  phone?: string;
  email?: string;
  address?: string[];
  columns?: FooterColumn[];
  legal?: string;
  brand?: string;
  toTopText?: string;
  poweredByText?: string;
  studioName?: string;
  studioUrl?: string;
  ariaLabel?: string;
  className?: string;
};

const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];

const FooterPlumPhone = ({
  phone = "+212 629-152743",
  email = "guideberbretoursmoroco@gmail.com",
  address,
  columns,
  legal,
  brand = "Nkoub Saghro Adventures",
  toTopText,
  poweredByText,
  studioName,
  studioUrl,
  ariaLabel,
  className,
}: FooterPlumPhoneProps) => {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  const finalColumns = columns ?? t.footer.columns;
  const finalAddress = address ?? t.footer.address;
  const finalLegal = legal ?? t.footer.legal;
  const finalToTop = toTopText ?? t.cta.backToTop;
  const finalPoweredBy = poweredByText ?? t.footer.poweredBy;
  const finalStudioName = studioName ?? t.footer.studioName;
  const finalStudioUrl = studioUrl ?? t.footer.studioUrl;

  return (
    <footer
      aria-label={ariaLabel ?? `${brand} contact`}
      className={cn("relative z-10 bg-deep pt-[var(--section-space)] pb-[clamp(1.5rem,3vw,2.5rem)] text-deep-foreground", className)}
    >
      <div className="mx-auto flex w-[var(--container)] flex-col items-center text-center">
        <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 text-current">
          <path d="M20 4 V36 M4 20 H36 M8.7 8.7 L31.3 31.3 M31.3 8.7 L8.7 31.3" stroke="currentColor" strokeWidth={1} strokeLinecap="round" fill="none" />
          <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth={1} fill="none" />
        </svg>
        <p className="mt-6 text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-70">{brand}</p>
        <motion.div initial={reduce ? false : "hidden"} whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-[clamp(2rem,5vw,4rem)] overflow-hidden pb-[0.06em]">
          <motion.a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1.2, ease: EASE_OUT } } }}
            className="block text-balance text-[length:min(var(--text-display),11vw)] uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
          >
            {phone}
          </motion.a>
        </motion.div>
        {email && (
          <a href={`mailto:${email}`} className="btn-link mt-[clamp(1.5rem,3vw,2.5rem)] [overflow-wrap:anywhere]">
            {email}
          </a>
        )}
        {finalAddress.length > 0 && (
          <div className="mt-6 flex flex-col gap-1">
            {finalAddress.map((line, index) => (
              <p key={index} className="text-[length:var(--text-small)] leading-[1.5] opacity-80">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto mt-[var(--section-space)] w-[var(--container)] border-t border-deep-foreground/20 pt-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {finalColumns.length > 0 && (
            <div className="grid grid-cols-2 gap-x-[var(--gap)] gap-y-8 lg:flex lg:gap-[clamp(2rem,5vw,5rem)]">
              {finalColumns.map((column, index) => (
                <nav key={index} aria-label={column.title} className="flex min-w-0 flex-col gap-3">
                  <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-60">{column.title}</p>
                  {column.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.href} className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] [overflow-wrap:anywhere]">
                      {link.text}
                    </a>
                  ))}
                </nav>
              ))}
            </div>
          )}
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <button type="button" onClick={toTop} className="btn-link">
              {finalToTop}
            </button>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-60">
              {finalLegal && <span>{finalLegal}</span>}
              {finalLegal && finalPoweredBy && <span aria-hidden="true" className="opacity-50">|</span>}
              {finalPoweredBy && (
                <span>
                  {finalPoweredBy}{" "}
                  <a
                    href={finalStudioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-100 transition-opacity"
                  >
                    {finalStudioName}
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPlumPhone;
