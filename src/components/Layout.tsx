import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";
import FloatingWhatsApp from "@/components/kit/FloatingWhatsApp";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="solid" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="Nkoub Saghro Adventures"
          logoImageSrc="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795004999169-ivq2qx3d.png"
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
          brand="Nkoub Saghro Adventures"
          logoImageSrc="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795004999169-ivq2qx3d.png"
          phone="+212 629-152743"
          email="guideberbretoursmoroco@gmail.com"
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
                  text: "About Us",
                  href: "#about"
                },
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
                  href: "https://wa.me/212650850571"
                }
              ]
            }
          ]}
          toTopText="Back to top"
        />
      </footer>
      <FloatingWhatsApp phone="212650850571" />
    </div>
  );
}
