import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="solid" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="NkobTrek"
          cta={{
            text: "Book Now",
            href: "#contact-plum-form"
          }}
        />
      </header>
      <main className="flex-grow" data-button="solid" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="NkobTrek"
          phone="+212 6 61 00 11 22"
          email="contact@nkobtrek.ma"
          address={[
            "Avenue Principal",
            "Nkob, Morocco"
          ]}
          columns={[
            {
              title: "Treks",
              links: [
                {
                  text: "Saghro Circuits",
                  href: "#pricing"
                },
                {
                  text: "Our Approach",
                  href: "#services"
                },
                {
                  text: "Trail Gallery",
                  href: "#gallery"
                }
              ]
            },
            {
              title: "Guide",
              links: [
                {
                  text: "Trek FAQ",
                  href: "#faq-plus-accordion"
                },
                {
                  text: "Traveler Reviews",
                  href: "#testimonial"
                },
                {
                  text: "Inquire & Book",
                  href: "#contact-plum-form"
                }
              ]
            },
            {
              title: "Connect",
              links: [
                {
                  text: "Instagram",
                  href: "#"
                },
                {
                  text: "WhatsApp Direct",
                  href: "#contact-plum-form"
                }
              ]
            }
          ]}
          legal="NkobTrek 2026. All rights reserved."
          toTopText="Back to top"
        />
      </footer>
    </div>
  );
}
