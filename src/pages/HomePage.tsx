import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import ServicesNightList from "@/components/sections/features/ServicesNightList";
import PricingFramedSlider from "@/components/sections/pricing/PricingFramedSlider";
import GalleryWindowMerge from "@/components/sections/gallery/GalleryWindowMerge";
import TestimonialPhotoQuote from "@/components/sections/testimonial/TestimonialPhotoQuote";
import FaqPlusAccordion from "@/components/sections/faq/FaqPlusAccordion";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";
import { useLanguage } from "@/utils/useLanguage";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title={t.hero.title}
          script={t.hero.script}
          labelLeft={t.hero.labelLeft}
          labelRight={t.hero.labelRight}
          marquee={t.hero.marquee}
          imageSrc="https://img.b2bpic.net/free-photo/wide-shot-cliff-desert-with-clear-blue_181624-11825.jpg?_wi=1"
          imageAlt="wide desert cliff landscape"
          cta={{
            text: t.cta.viewCircuits,
            href: "#pricing"
          }}
        />
      </div>

      <div id="services" data-webild-section="ServicesNightList" data-webild-section-id="ServicesNightList-1" data-section="services" data-scene>
        <ServicesNightList
          items={[
            {
              title: t.services.items[0].title,
              description: t.services.items[0].description,
              imageSrc: "https://img.b2bpic.net/free-photo/landscape-rocks-greenery-smith-rock-state-park-blue-sky-terrebonne-us_181624-11663.jpg",
              imageAlt: "man pointing at mountain landscape"
            },
            {
              title: t.services.items[1].title,
              description: t.services.items[1].description,
              imageSrc: "https://img.b2bpic.net/free-photo/men-trekking-nature_23-2148106694.jpg",
              imageAlt: "three friends sitting on rock"
            },
            {
              title: t.services.items[2].title,
              description: t.services.items[2].description,
              imageSrc: "https://img.b2bpic.net/free-photo/wide-shot-cliff-desert-with-clear-blue_181624-11825.jpg?_wi=2",
              imageAlt: "wide desert cliff landscape"
            },
            {
              title: t.services.items[3].title,
              description: t.services.items[3].description,
              imageSrc: "https://img.b2bpic.net/free-photo/dreamy-cheerful-woman-dressed-active-wear-uses-tourist-map-finding-right-route-wears-backpack_273609-26965.jpg",
              imageAlt: "man on horse in desert"
            },
            {
              title: t.services.items[4].title,
              description: t.services.items[4].description,
              imageSrc: "https://img.b2bpic.net/free-photo/camel-desert_23-2148129787.jpg",
              imageAlt: "woman looking at map outdoors"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/beautiful-landscape_8327-146.jpg"
          imageAlt="wide view of rocky desert landscape"
          cta={{
            text: t.cta.exploreCircuits,
            href: "#pricing"
          }}
        />
      </div>

      <div id="pricing" data-webild-section="PricingFramedSlider" data-webild-section-id="PricingFramedSlider-1" data-section="pricing">
        <PricingFramedSlider
          title={t.pricing.title}
          script={t.pricing.script}
          items={[
            {
              name: t.pricing.items[0].name,
              description: t.pricing.items[0].description,
              specs: [
                {
                  label: t.pricing.specsLabels.duration,
                  value: t.pricing.items[0].specs.duration
                },
                {
                  label: t.pricing.specsLabels.difficulty,
                  value: t.pricing.items[0].specs.difficulty
                },
                {
                  label: t.pricing.specsLabels.highlights,
                  value: t.pricing.items[0].specs.highlights
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-rocky-cliffs-desert-captured-sunny-day_181624-22248.jpg",
              imageAlt: "Beautiful rocky cliffs on the desert captured on a sunny day",
              cta: {
                text: t.cta.quoteWhatsapp,
                href: `https://wa.me/212629152743?text=${encodeURIComponent(t.pricing.items[0].waMessage)}`
              }
            },
            {
              name: t.pricing.items[1].name,
              description: t.pricing.items[1].description,
              specs: [
                {
                  label: t.pricing.specsLabels.duration,
                  value: t.pricing.items[1].specs.duration
                },
                {
                  label: t.pricing.specsLabels.difficulty,
                  value: t.pricing.items[1].specs.difficulty
                },
                {
                  label: t.pricing.specsLabels.highlights,
                  value: t.pricing.items[1].specs.highlights
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-scenery-rocky-canyons-surrounded-by-bushes-breathtaking-cloudy-sky_181624-4838.jpg",
              imageAlt: "red rock mountain landscape",
              cta: {
                text: t.cta.quoteWhatsapp,
                href: `https://wa.me/212629152743?text=${encodeURIComponent(t.pricing.items[1].waMessage)}`
              }
            },
            {
              name: t.pricing.items[2].name,
              description: t.pricing.items[2].description,
              specs: [
                {
                  label: t.pricing.specsLabels.duration,
                  value: t.pricing.items[2].specs.duration
                },
                {
                  label: t.pricing.specsLabels.difficulty,
                  value: t.pricing.items[2].specs.difficulty
                },
                {
                  label: t.pricing.specsLabels.highlights,
                  value: t.pricing.items[2].specs.highlights
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-shot-rocky-hills-mountains-blue-cloudy-sky-daytime_181624-4537.jpg",
              imageAlt: "Beautiful shot of rocky hills and mountains under a blue cloudy sky at daytime",
              cta: {
                text: t.cta.quoteWhatsapp,
                href: `https://wa.me/212629152743?text=${encodeURIComponent(t.pricing.items[2].waMessage)}`
              }
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery" data-scene data-gallery>
        <GalleryWindowMerge
          word={t.gallery.word}
          quote={t.gallery.quote}
          credit={t.gallery.credit}
          imageSrc="https://img.b2bpic.net/free-photo/landscape-mountain-cliff-by-beach-coast-nature-scenic_53876-47062.jpg"
          imageAlt="Landscape of mountain cliff by the beach coast nature scenic"
          items={[
            {
              title: t.gallery.items[0],
              imageSrc: "https://img.b2bpic.net/free-photo/landscape-red-rock-canyon-nevada-usa_1268-14378.jpg",
              imageAlt: "Landscape in Red Rock Canyon"
            },
            {
              title: t.gallery.items[1],
              imageSrc: "https://img.b2bpic.net/free-photo/view-nature-landscape-with-dry-ground-parched-soil_23-2151813146.jpg",
              imageAlt: "View of nature landscape with dry ground"
            },
            {
              title: t.gallery.items[2],
              imageSrc: "https://img.b2bpic.net/free-photo/landscape-badlands-bryce-canyon-national-park-utah-us_181624-37042.jpg",
              imageAlt: "Landscape of badlands"
            },
            {
              title: t.gallery.items[3],
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-woman-top-mountain-practice_23-2148343527.jpg",
              imageAlt: "High angle woman on top of mountain"
            },
            {
              title: t.gallery.items[4],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-view-pathway-side-mountain-with-hills-blue-sky-background_181624-8487.jpg",
              imageAlt: "Beautiful view of pathway"
            },
            {
              title: t.gallery.items[5],
              imageSrc: "https://img.b2bpic.net/free-photo/rocky-desert-with-clear-blue-sky_23-2148249149.jpg",
              imageAlt: "rocky desert landscape"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPhotoQuote" data-webild-section-id="TestimonialPhotoQuote-1" data-section="testimonial" data-scene>
        <TestimonialPhotoQuote
          items={[
            {
              quote: t.testimonials.items[0].quote,
              name: t.testimonials.items[0].name,
              role: t.testimonials.items[0].role
            },
            {
              quote: t.testimonials.items[1].quote,
              name: t.testimonials.items[1].name,
              role: t.testimonials.items[1].role
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/majestic-sandstone-cliffs-tranquil-coastline-generated-by-ai_188544-33346.jpg"
          imageAlt="Majestic sandstone cliffs a tranquil coastline"
        />
      </div>

      <div id="faq-plus-accordion" data-webild-section="FaqPlusAccordion" data-webild-section-id="FaqPlusAccordion-1" data-section="faq-plus-accordion">
        <FaqPlusAccordion
          title={t.faq.title}
          script={t.faq.script}
          items={t.faq.items}
          cta={{
            text: t.cta.askQuestion,
            href: "#contact-plum-form"
          }}
          ariaLabel="Frequently asked questions"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title={t.contact.title}
          script={t.contact.script}
          options={t.contact.options}
          submitText={t.cta.sendInquiry}
          labels={t.contact.labels}
        />
      </div>
    </>
  );
}
