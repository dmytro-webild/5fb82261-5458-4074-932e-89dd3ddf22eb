import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import ServicesNightList from "@/components/sections/features/ServicesNightList";
import PricingFramedSlider from "@/components/sections/pricing/PricingFramedSlider";
import GalleryWindowMerge from "@/components/sections/gallery/GalleryWindowMerge";
import TestimonialPhotoQuote from "@/components/sections/testimonial/TestimonialPhotoQuote";
import FaqPlusAccordion from "@/components/sections/faq/FaqPlusAccordion";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title="Nkob Trek"
          script="Morocco"
          labelLeft="Berber guided"
          labelRight="mountain treks"
          marquee={[
            "Volcanic peaks",
            "Desert valleys",
            "Berber bivouac"
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/wide-shot-cliff-desert-with-clear-blue_181624-11825.jpg"
          imageAlt="wide desert cliff landscape"
          cta={{
            text: "View circuits",
            href: "#pricing"
          }}
        />
      </div>

      <div id="services" data-webild-section="ServicesNightList" data-webild-section-id="ServicesNightList-1" data-section="services" data-scene>
        <ServicesNightList
          items={[
            {
              title: "Local Berber guides",
              description: "Experienced native guides leading custom treks through Jebel Saghro with full trail safety.",
              imageSrc: "https://img.b2bpic.net/free-photo/landscape-rocks-greenery-smith-rock-state-park-blue-sky-terrebonne-us_181624-11663.jpg",
              imageAlt: "man pointing at mountain landscape"
            },
            {
              title: "Small trek groups",
              description: "Intimate groups limited to eight guests ensure authentic personal Berber hospitality.",
              imageSrc: "https://img.b2bpic.net/free-photo/men-trekking-nature_23-2148106694.jpg",
              imageAlt: "three friends sitting on rock"
            },
            {
              title: "Camel bivouacs",
              description: "Overnight starry camps in comfortable desert tents with local traditional meals.",
              imageSrc: "https://img.b2bpic.net/free-photo/wide-shot-cliff-desert-with-clear-blue_181624-11825.jpg",
              imageAlt: "wide desert cliff landscape"
            },
            {
              title: "Mule support teams",
              description: "Friendly muleteers transport camp gear, freeing you to trek light each day.",
              imageSrc: "https://img.b2bpic.net/free-photo/dreamy-cheerful-woman-dressed-active-wear-uses-tourist-map-finding-right-route-wears-backpack_273609-26965.jpg",
              imageAlt: "man on horse in desert"
            },
            {
              title: "Custom trek circuits",
              description: "Flexible multi-day itineraries designed specifically around your fitness level.",
              imageSrc: "https://img.b2bpic.net/free-photo/camel-desert_23-2148129787.jpg",
              imageAlt: "woman looking at map outdoors"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/beautiful-landscape_8327-146.jpg"
          imageAlt="wide view of rocky desert landscape"
          cta={{
            text: "Explore circuits",
            href: "#pricing"
          }}
        />
      </div>

      <div id="pricing" data-webild-section="PricingFramedSlider" data-webild-section-id="PricingFramedSlider-1" data-section="pricing">
        <PricingFramedSlider
          title="Featured circuits"
          script="circuits"
          items={[
            {
              name: "Saghro 3-Day Trek",
              price: "€180",
              period: "per person",
              description: "Explore volcanic rock peaks, deep gorges, and traditional Berber villages with local guides.",
              specs: [
                {
                  label: "Duration",
                  value: "3 Days"
                },
                {
                  label: "Difficulty",
                  value: "Moderate"
                },
                {
                  label: "Group Size",
                  value: "2 to 8"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-rocky-cliffs-desert-captured-sunny-day_181624-22248.jpg",
              imageAlt: "Beautiful rocky cliffs on the desert captured on a sunny day",
              cta: {
                text: "Inquire now",
                href: "#contact-plum-form"
              }
            },
            {
              name: "Saghro to Mgoun",
              price: "€350",
              period: "per person",
              description: "High-altitude traverse connecting volcanic peaks to lush valley oasis and mountain passes.",
              specs: [
                {
                  label: "Duration",
                  value: "5 Days"
                },
                {
                  label: "Difficulty",
                  value: "Challenging"
                },
                {
                  label: "Group Size",
                  value: "2 to 6"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-scenery-rocky-canyons-surrounded-by-bushes-breathtaking-cloudy-sky_181624-4838.jpg",
              imageAlt: "red rock mountain landscape",
              cta: {
                text: "Inquire now",
                href: "#contact-plum-form"
              }
            },
            {
              name: "4x4 Desert Trek",
              price: "€290",
              period: "per person",
              description: "Experience desert canyons, camel bivouacs under starry skies, and off-road trails.",
              specs: [
                {
                  label: "Duration",
                  value: "4 Days"
                },
                {
                  label: "Difficulty",
                  value: "Easy"
                },
                {
                  label: "Group Size",
                  value: "2 to 8"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-shot-rocky-hills-mountains-blue-cloudy-sky-daytime_181624-4537.jpg",
              imageAlt: "Beautiful shot of rocky hills and mountains under a blue cloudy sky at daytime",
              cta: {
                text: "Inquire now",
                href: "#contact-plum-form"
              }
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery" data-scene data-gallery>
        <GalleryWindowMerge
          word="SAGHRO"
          quote="Guiding mountain travelers safely through Southern Morocco for two decades."
          credit="Brahim, Lead Berber Guide"
          imageSrc="https://img.b2bpic.net/free-photo/landscape-mountain-cliff-by-beach-coast-nature-scenic_53876-47062.jpg"
          imageAlt="Landscape of mountain cliff by the beach coast nature scenic"
          items={[
            {
              title: "Volcanic rock peaks",
              imageSrc: "https://img.b2bpic.net/free-photo/landscape-red-rock-canyon-nevada-usa_1268-14378.jpg",
              imageAlt: "Landscape in Red Rock Canyon, Nevada, USA"
            },
            {
              title: "Desert bivouac camp",
              imageSrc: "https://img.b2bpic.net/free-photo/view-nature-landscape-with-dry-ground-parched-soil_23-2151813146.jpg",
              imageAlt: "View of nature landscape with dry ground and parched soil"
            },
            {
              title: "Bab n Ali towers",
              imageSrc: "https://img.b2bpic.net/free-photo/landscape-badlands-bryce-canyon-national-park-utah-us_181624-37042.jpg",
              imageAlt: "Landscape of the badlands at the Bryce Canyon National Park in Utah, the US"
            },
            {
              title: "Desert canyon palms",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-woman-top-mountain-practice_23-2148343527.jpg",
              imageAlt: "High angle woman on top of mountain practice"
            },
            {
              title: "High mountain trail",
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-view-pathway-side-mountain-with-hills-blue-sky-background_181624-8487.jpg",
              imageAlt: "Beautiful view of a pathway on the side of the mountain with hills and a blue sky in background"
            },
            {
              title: "Nkob clay kasbahs",
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
              quote: "The 3-day circuit with NkobTrek was incredible. Our local Berber guide was warm and the star camp was magic.",
              name: "Natalie Webb",
              role: "Trekker from UK"
            },
            {
              quote: "Traversing Jebel Saghro with authentic Berber hospitality made our Moroccan adventure truly special.",
              name: "Liam Murphy",
              role: "Trekker from Ireland"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/majestic-sandstone-cliffs-tranquil-coastline-generated-by-ai_188544-33346.jpg"
          imageAlt="Majestic sandstone cliffs a tranquil coastline generated by AI"
        />
      </div>

      <div id="faq-plus-accordion" data-webild-section="FaqPlusAccordion" data-webild-section-id="FaqPlusAccordion-1" data-section="faq-plus-accordion">
        <FaqPlusAccordion
          title="Before You Trek"
          script="TREK PREPARATION"
          items={[
            {
              title: "WHAT IS THE BEST SEASON?",
              description: "October to April offers mild day temperatures and clear skies across Jebel Saghro."
            },
            {
              title: "HOW FIT DO I NEED TO BE?",
              description: "We match routes to your background, from gentle 4-hour walks to 7-hour mountain days."
            },
            {
              title: "WHAT GEAR SHOULD I BRING?",
              description: "Sturdy hiking boots, warm night layers, sunscreen, and a warm sleeping bag for camp nights."
            },
            {
              title: "WHERE WILL WE SLEEP?",
              description: "Nights are spent in traditional village gîtes or private bivouac tents under the stars."
            },
            {
              title: "IS TRANSPORT INCLUDED?",
              description: "We arrange private transfers to Nkob from Marrakech, Ouarzazate, or Errachidia."
            },
            {
              title: "ARE THE GROUPS LARGE?",
              description: "No. Groups remain small, usually between 2 and 8 trekkers for an authentic trail experience."
            }
          ]}
          cta={{
            text: "Ask a Question",
            href: "#contact-plum-form"
          }}
          ariaLabel="Frequently asked questions about trekking in Jebel Saghro"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="Plan Your Trek"
          script="Inquire"
          options={[
            "3-Day Saghro Circuit",
            "5-Day Saghro to Mgoun",
            "Camel Bivouac Tour",
            "Custom Trek Inquiry"
          ]}
          submitText="Send Inquiry"
          labels={{
            name: "Your Name",
            email: "Email Address",
            enquiry: "Trip Interest",
            message: "Group Size & Dates",
            sending: "Sending...",
            sent: "Sent!",
            thanks: "Thank you, we will reply shortly."
          }}
        />
      </div>
    </>
  );
}
