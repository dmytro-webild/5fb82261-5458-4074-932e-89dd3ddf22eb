export type Language = "en" | "fr" | "ar";

export interface Translations {
  brand: string;
  nav: {
    circuits: string;
    approach: string;
    gallery: string;
    about: string;
    faq: string;
    contact: string;
  };
  cta: {
    bookNow: string;
    viewCircuits: string;
    exploreCircuits: string;
    quoteWhatsapp: string;
    askQuestion: string;
    sendInquiry: string;
    backToTop: string;
  };
  menu: {
    menu: string;
    close: string;
  };
  hero: {
    title: string;
    script: string;
    labelLeft: string;
    labelRight: string;
    marquee: string[];
  };
  services: {
    items: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    script: string;
    specsLabels: {
      duration: string;
      difficulty: string;
      highlights: string;
    };
    items: {
      name: string;
      description: string;
      specs: { duration: string; difficulty: string; highlights: string };
      waMessage: string;
    }[];
    table: {
      title: string;
      subtitle: string;
      peopleHeader: string;
      priceHeader: string;
      perPersonLabel: string;
      rows: {
        people: string;
        price: string;
      }[];
      bookNow: string;
      waMessage: string;
      note: string;
    };
  };
  gallery: {
    word: string;
    quote: string;
    credit: string;
    items: string[];
  };
  testimonials: {
    items: { quote: string; name: string; role: string }[];
  };
  faq: {
    title: string;
    script: string;
    items: { title: string; description: string }[];
  };
  contact: {
    title: string;
    script: string;
    options: string[];
    labels: {
      name: string;
      email: string;
      enquiry: string;
      message: string;
      sending: string;
      sent: string;
      thanks: string;
    };
    map: {
      location: string;
      directions: string;
      mapsUrl: string;
      embedUrl: string;
    };
  };
  footer: {
    columns: {
      title: string;
      links: { text: string; href: string }[];
    }[];
    address: string[];
    legal: string;
    poweredBy: string;
    studioName: string;
    studioUrl: string;
  };
  whatsapp: {
    message: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    brand: "Nkoub Saghro Adventures",
    nav: {
      circuits: "Circuits",
      approach: "Why Us",
      gallery: "Gallery",
      about: "About Us",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: {
      bookNow: "Book Now",
      viewCircuits: "View circuits",
      exploreCircuits: "Explore circuits",
      quoteWhatsapp: "Quote on WhatsApp",
      askQuestion: "Ask a Question",
      sendInquiry: "Send Inquiry",
      backToTop: "Back to top",
    },
    menu: {
      menu: "Menu",
      close: "Close",
    },
    hero: {
      title: "Nkoub Saghro Adventures",
      script: "Morocco",
      labelLeft: "Berber guided",
      labelRight: "mountain treks",
      marquee: ["Volcanic peaks", "Desert valleys", "Berber bivouac"],
    },
    services: {
      items: [
        {
          title: "Local Berber guides",
          description: "Experienced native guides leading custom treks through Jebel Saghro with full trail safety.",
        },
        {
          title: "Small trek groups",
          description: "Intimate groups limited to eight guests ensure authentic personal Berber hospitality.",
        },
        {
          title: "Camel bivouacs",
          description: "Overnight starry camps in comfortable desert tents with local traditional meals.",
        },
        {
          title: "Mule support teams",
          description: "Friendly muleteers transport camp gear, freeing you to trek light each day.",
        },
        {
          title: "Custom trek circuits",
          description: "Flexible multi-day itineraries designed specifically around your fitness level.",
        },
      ],
    },
    pricing: {
      title: "Request a quote",
      script: "circuits",
      specsLabels: {
        duration: "Duration",
        difficulty: "Difficulty",
        highlights: "Highlights",
      },
      items: [
        {
          name: "2-3 Days Saghro Circuit",
          description: "A short mountain trek featuring iconic volcanic rock spires, Bab n Ali towers, and traditional Berber villages.",
          specs: {
            duration: "2 - 3 Days",
            difficulty: "Moderate",
            highlights: "Bab n Ali & Valleys",
          },
          waMessage: "Hello Nkoub Saghro Adventures, I would like a quote for the 2-3 Days Circuit.",
        },
        {
          name: "4-5 Days Saghro Traverse",
          description: "Explore high mountain passes, dramatic canyons, lush palm oases, and bivouac nights under starry desert skies.",
          specs: {
            duration: "4 - 5 Days",
            difficulty: "Moderate to Challenging",
            highlights: "Gorges & Oasis Camps",
          },
          waMessage: "Hello Nkoub Saghro Adventures, I would like a quote for the 4-5 Days Circuit.",
        },
        {
          name: "5-7 Days Grand Saghro Expedition",
          description: "Comprehensive high-country expedition connecting volcanic peaks, remote nomadic settlements, and valley trails.",
          specs: {
            duration: "5 - 7 Days",
            difficulty: "Challenging",
            highlights: "Full Expedition & Peaks",
          },
          waMessage: "Hello Nkoub Saghro Adventures, I would like a quote for the 5-7 Days Circuit.",
        },
      ],
      table: {
        title: "Official Pricing Table",
        subtitle: "Pricing per person (in Euros)",
        peopleHeader: "Number of people",
        priceHeader: "Price per person",
        perPersonLabel: "/ person",
        rows: [
          { people: "2 people", price: "589 €" },
          { people: "3 people", price: "549 €" },
          { people: "4 people or more", price: "499 €" },
        ],
        bookNow: "Book Now",
        waMessage: "Hello Nkoub Saghro Adventures, I would like to book a trek with your official rates.",
        note: "Prices per person in Euros (€). Displayed exactly as provided with no hidden fees.",
      },
    },
    gallery: {
      word: "SAGHRO",
      quote: "Guiding mountain travelers safely through Southern Morocco for two decades.",
      credit: "Mouhamed, Lead Berber Guide",
      items: [
        "Volcanic rock peaks",
        "Desert bivouac camp",
        "Bab n Ali towers",
        "Desert canyon palms",
        "High mountain trail",
        "Nkob clay kasbahs",
      ],
    },
    testimonials: {
      items: [
        {
          quote: "The 3-day circuit with Nkoub Saghro Adventures was incredible. Our local Berber guide was warm and the star camp was magic.",
          name: "Natalie Webb",
          role: "Trekker from UK",
        },
        {
          quote: "Traversing Jebel Saghro with authentic Berber hospitality made our Moroccan adventure truly special.",
          name: "Liam Murphy",
          role: "Trekker from Ireland",
        },
      ],
    },
    faq: {
      title: "Before You Trek",
      script: "TREK PREPARATION",
      items: [
        {
          title: "WHAT IS THE BEST SEASON?",
          description: "October to April offers mild day temperatures and clear skies across Jebel Saghro.",
        },
        {
          title: "HOW FIT DO I NEED TO BE?",
          description: "We match routes to your background, from gentle 4-hour walks to 7-hour mountain days.",
        },
        {
          title: "WHAT GEAR SHOULD I BRING?",
          description: "Sturdy hiking boots, warm night layers, sunscreen, and a warm sleeping bag for camp nights.",
        },
        {
          title: "WHERE WILL WE SLEEP?",
          description: "Nights are spent in traditional village gîtes or private bivouac tents under the stars.",
        },
        {
          title: "IS TRANSPORT INCLUDED?",
          description: "We arrange private transfers to Nkob from Marrakech, Ouarzazate, or Errachidia.",
        },
        {
          title: "ARE THE GROUPS LARGE?",
          description: "No. Groups remain small, usually between 2 and 8 trekkers for an authentic trail experience.",
        },
      ],
    },
    contact: {
      title: "Plan Your Trek",
      script: "Inquire",
      options: [
        "2-3 Days Saghro Circuit",
        "4-5 Days Saghro Traverse",
        "5-7 Days Grand Expedition",
        "Custom Trek Inquiry",
      ],
      labels: {
        name: "Your Name",
        email: "Email Address",
        enquiry: "Trip Interest",
        message: "Group Size & Dates",
        sending: "Sending...",
        sent: "Sent!",
        thanks: "Thank you, we will reply shortly.",
      },
      map: {
        location: "Nkob, Jebel Saghro, Morocco",
        directions: "Directions on Google Maps",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nkob,+Jebel+Saghro,+Morocco",
        embedUrl: "https://maps.google.com/maps?q=Nkob,+Jebel+Saghro,+Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed",
      },
    },
    footer: {
      columns: [
        {
          title: "Treks",
          links: [
            { text: "Saghro Circuits", href: "#pricing" },
            { text: "Our Approach", href: "#services" },
            { text: "Trail Gallery", href: "#gallery" },
          ],
        },
        {
          title: "Guide",
          links: [
            { text: "About Us", href: "#about" },
            { text: "Trek FAQ", href: "#faq-plus-accordion" },
            { text: "Traveler Reviews", href: "#testimonial" },
            { text: "Inquire & Book", href: "#contact-plum-form" },
          ],
        },
        {
          title: "Connect",
          links: [
            { text: "Instagram", href: "#" },
            { text: "WhatsApp Direct", href: "https://wa.me/212650850571" },
          ],
        },
      ],
      address: ["Avenue Principal", "Nkob, Morocco"],
      legal: "© 2026 Nkoub Saghro Adventures | All rights reserved",
      poweredBy: "Powered by",
      studioName: "webourguiba.com",
      studioUrl: "https://webourguiba.com",
    },
    whatsapp: {
      message: "Hello! I am interested in booking a trek with Nkoub Saghro Adventures.",
    },
    about: {
      title: "ABOUT US",
      subtitle: "Discover Nkob, the heart of Jbel Saghro adventures.",
      paragraph1:
        "My name is Mohamed. I am a young native of Nkob, a rural locality situated in Zagora province, within the Drâa-Tafilalet region of Morocco. Nkob is located near the Jbel Saghro massif and is nicknamed the \"capital of kasbahs\", because it houses over 45 kasbahs, all surrounded by palm groves. The town is highly popular with tourists who enjoy mountain hiking and camping. That is why, as local youth, we work towards developing mountain tourism; as native locals, we know our land inside out.",
      paragraph2:
        "Travel is our passion. This website is dedicated to guiding everyone who wishes to explore this country, renowned for its great hospitality and warm welcome. I am here to guide you in discovering Morocco's nature, history, and geography. I also manage hotel bookings and organize all types of excursions — particularly to the mountains and the desert — along with many other activities.",
    },
  },
  fr: {
    brand: "Nkoub Saghro Adventures",
    nav: {
      circuits: "Circuits",
      approach: "Notre Approche",
      gallery: "Galerie",
      about: "À Propos",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: {
      bookNow: "Réserver",
      viewCircuits: "Voir les circuits",
      exploreCircuits: "Explorer les circuits",
      quoteWhatsapp: "Devis sur WhatsApp",
      askQuestion: "Poser une question",
      sendInquiry: "Envoyer la demande",
      backToTop: "Haut de page",
    },
    menu: {
      menu: "Menu",
      close: "Fermer",
    },
    hero: {
      title: "Nkoub Saghro Adventures",
      script: "Maroc",
      labelLeft: "Guidé par des Berbères",
      labelRight: "randonnées en montagne",
      marquee: ["Sommets volcaniques", "Vallées du désert", "Bivouac berbère"],
    },
    services: {
      items: [
        {
          title: "Guides berbères locaux",
          description: "Guides locaux expérimentés menant des randonnées sur mesure dans le Jebel Saghro en toute sécurité.",
        },
        {
          title: "Petits groupes de rando",
          description: "Groupes intimes limités à huit personnes garantissant une hospitalité berbère authentique.",
        },
        {
          title: "Bivouacs à dromadaire",
          description: "Camps sous les étoiles dans des tentes confortables du désert avec repas traditionnels locaux.",
        },
        {
          title: "Équipes de muletiers",
          description: "Des muletiers chaleureux transportent le matériel de camp, vous permettant de randonner léger.",
        },
        {
          title: "Circuits sur mesure",
          description: "Itinéraires flexibles sur plusieurs jours conçus selon votre niveau physique.",
        },
      ],
    },
    pricing: {
      title: "Demander un devis",
      script: "circuits",
      specsLabels: {
        duration: "Durée",
        difficulty: "Difficulté",
        highlights: "Points forts",
      },
      items: [
        {
          name: "Circuit Saghro 2-3 Jours",
          description: "Une randonnée de montagne courte présentant les aiguilles volcaniques emblématiques de Bab n Ali et des villages berbères traditionnels.",
          specs: {
            duration: "2 - 3 Jours",
            difficulty: "Modéré",
            highlights: "Bab n Ali & Vallées",
          },
          waMessage: "Bonjour Nkoub Saghro Adventures, je souhaite un devis pour le circuit 2-3 jours.",
        },
        {
          name: "Traversée du Saghro 4-5 Jours",
          description: "Explorez des cols de montagne, des canyons spectaculaires, des oasis verdoyantes et des nuits en bivouac sous les étoiles.",
          specs: {
            duration: "4 - 5 Jours",
            difficulty: "Modéré à Soutenu",
            highlights: "Gorges & Camps Oasis",
          },
          waMessage: "Bonjour Nkoub Saghro Adventures, je souhaite un devis pour le circuit 4-5 jours.",
        },
        {
          name: "Grande Expédition Saghro 5-7 Jours",
          description: "Expédition complète en haute montagne reliant les sommets volcaniques, les campements nomades reculés et les sentiers des vallées.",
          specs: {
            duration: "5 - 7 Jours",
            difficulty: "Soutenu",
            highlights: "Grande Expédition & Sommets",
          },
          waMessage: "Bonjour Nkoub Saghro Adventures, je souhaite un devis pour le circuit 5-7 jours.",
        },
      ],
      table: {
        title: "Grille Tarifaire Officielle",
        subtitle: "Tarifs par personne (en Euros)",
        peopleHeader: "Nombre de personnes",
        priceHeader: "Prix par personne",
        perPersonLabel: "/ personne",
        rows: [
          { people: "2 personnes", price: "589 €" },
          { people: "3 personnes", price: "549 €" },
          { people: "4 personnes ou plus", price: "499 €" },
        ],
        bookNow: "Réserver maintenant",
        waMessage: "Bonjour Nkoub Saghro Adventures, je souhaite réserver un circuit aux tarifs officiels.",
        note: "Prix par personne en Euros (€). Affichés exactement comme indiqués sans frais cachés.",
      },
    },
    gallery: {
      word: "SAGHRO",
      quote: "Guider les voyageurs en montagne en toute sécurité dans le Sud marocain depuis deux décennies.",
      credit: "Mouhamed, Guide Berbère Principal",
      items: [
        "Sommets rocheux volcaniques",
        "Camp bivouac dans le désert",
        "Tours de Bab n Ali",
        "Palmiers du canyon",
        "Sentier de haute montagne",
        "Kasbahs en terre de Nkob",
      ],
    },
    testimonials: {
      items: [
        {
          quote: "Le circuit de 3 jours avec Nkoub Saghro Adventures était incroyable. Notre guide berbère local était chaleureux et le camp sous les étoiles était magique.",
          name: "Natalie Webb",
          role: "Randonneuse du Royaume-Uni",
        },
        {
          quote: "Traverser le Jebel Saghro avec une authentique hospitalité berbère a rendu notre séjour au Maroc vraiment spécial.",
          name: "Liam Murphy",
          role: "Randonneur d'Irlande",
        },
      ],
    },
    faq: {
      title: "Avant votre randonnée",
      script: "PRÉPARATION",
      items: [
        {
          title: "QUELLE EST LA MEILLEURE SAISON ?",
          description: "D'octobre à avril, les températures sont douces la journée et le ciel est dégagé sur le Jebel Saghro.",
        },
        {
          title: "QUEL NIVEAU PHYSIQUE EST REQUIS ?",
          description: "Nous adaptons les itinéraires à votre niveau, de la marche douce de 4 heures aux journées de 7 heures en montagne.",
        },
        {
          title: "QUEL ÉQUIPEMENT APPORTER ?",
          description: "Des chaussures de rando solides, des vêtements chauds pour la nuit, de la crème solaire et un sac de couchage chaud.",
        },
        {
          title: "OÙ DORMONS-NOUS ?",
          description: "Les nuits se passent dans des gîtes villageois traditionnels ou des tentes de bivouac privées sous les étoiles.",
        },
        {
          title: "LE TRANSPORT EST-IL INCLUS ?",
          description: "Nous organisons des transferts privés vers Nkob depuis Marrakech, Ouarzazate ou Errachidia.",
        },
        {
          title: "LES GROUPES SONT-ILS GRANDS ?",
          description: "Non. Les groupes restent réduits, généralement de 2 à 8 randonneurs pour une expérience authentique.",
        },
      ],
    },
    contact: {
      title: "Planifiez votre rando",
      script: "Demande",
      options: [
        "Circuit Saghro 2-3 Jours",
        "Traversée Saghro 4-5 Jours",
        "Grande Expédition 5-7 Jours",
        "Demande de circuit sur mesure",
      ],
      labels: {
        name: "Votre nom",
        email: "Adresse e-mail",
        enquiry: "Circuit souhaité",
        message: "Taille du groupe & dates",
        sending: "Envoi en cours...",
        sent: "Envoyé !",
        thanks: "Merci, nous vous répondrons rapidement.",
      },
      map: {
        location: "Nkob, Jebel Saghro, Maroc",
        directions: "Itinéraire sur Google Maps",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nkob,+Jebel+Saghro,+Morocco",
        embedUrl: "https://maps.google.com/maps?q=Nkob,+Jebel+Saghro,+Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed",
      },
    },
    footer: {
      columns: [
        {
          title: "Circuits",
          links: [
            { text: "Circuits Saghro", href: "#pricing" },
            { text: "Notre approche", href: "#services" },
            { text: "Galerie photos", href: "#gallery" },
          ],
        },
        {
          title: "Guide",
          links: [
            { text: "À Propos", href: "#about" },
            { text: "FAQ Randonnée", href: "#faq-plus-accordion" },
            { text: "Avis des voyageurs", href: "#testimonial" },
            { text: "Demande & Réservation", href: "#contact-plum-form" },
          ],
        },
        {
          title: "Contact",
          links: [
            { text: "Instagram", href: "#" },
            { text: "WhatsApp Direct", href: "https://wa.me/212650850571" },
          ],
        },
      ],
      address: ["Avenue Principale", "Nkob, Maroc"],
      legal: "© 2026 Nkoub Saghro Adventures | Tous droits réservés",
      poweredBy: "Conçu par",
      studioName: "webourguiba.com",
      studioUrl: "https://webourguiba.com",
    },
    whatsapp: {
      message: "Bonjour! Je souhaite réserver un circuit avec Nkoub Saghro Adventures.",
    },
    about: {
      title: "À PROPOS DE NOUS",
      subtitle: "Découvrez Nkob, le cœur des aventures du Jbel Saghro.",
      paragraph1:
        "Je m'appelle Mohamed. Je suis un jeune originaire de Nkob, une localité rurale située dans la province de Zagora, au sein de la région de Drâa-Tafilalet, au Maroc. Nkob se trouve à proximité du massif du Jbel Saghro et est surnommée la « capitale des kasbahs », car elle en abrite plus de 45, le tout entouré de palmeraies. La ville est très prisée des touristes amateurs de randonnée en montagne et de camping. C'est pourquoi, en tant que jeunes de la région, nous œuvrons au développement du tourisme de montagne ; étant natifs des lieux, nous connaissons notre territoire sur le bout des doigts.",
      paragraph2:
        "Le voyage est notre passion. Ce site a pour vocation d'accompagner tous ceux qui souhaitent explorer ce pays, réputé pour sa grande hospitalité et la chaleur de son accueil. Je suis là pour vous guider dans votre découverte de la nature, de l'histoire et de la géographie du Maroc. Je m'occupe également de la réservation d'hôtels et de l'organisation de tous types d'excursions — notamment vers les montagnes et le désert — ainsi que de nombreuses autres activités.",
    },
  },
  ar: {
    brand: "Nkoub Saghro Adventures",
    nav: {
      circuits: "المسارات",
      approach: "لماذا نحن",
      gallery: "المعرض",
      about: "من نحن",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
    },
    cta: {
      bookNow: "احجز الآن",
      viewCircuits: "استكشف المسارات",
      exploreCircuits: "تصفح الرحلات",
      quoteWhatsapp: "طلب سعر عبر واتساب",
      askQuestion: "طرح سؤال",
      sendInquiry: "إرسال الاستفسار",
      backToTop: "العودة إلى الأعلى",
    },
    menu: {
      menu: "القائمة",
      close: "إغلاق",
    },
    hero: {
      title: "Nkoub Saghro Adventures",
      script: "المغرب",
      labelLeft: "رحلات بإرشاد بربري",
      labelRight: "في أعالي الجبال",
      marquee: ["قمم بركانية", "وديان صحراوية", "مخيمات بربرية"],
    },
    services: {
      items: [
        {
          title: "مرشدون بربر محليون",
          description: "مرشدون محليون ذوو خبرة يقودون رحلات مخصصة عبر جبل صغرو مع أمان تام على المسار.",
        },
        {
          title: "مجموعات صغيرة",
          description: "مجموعات صغيرة تقتصر على 8 ضيوف تضمن ضيافة بربرية أصيلة وشخصية.",
        },
        {
          title: "مخيمات بالجمال",
          description: "مخيمات تحت النجوم في خيام صحراوية مريحة مع وجبات تقليدية محلية.",
        },
        {
          title: "فرق دعم بالبغال",
          description: "حمالون محليون مع البغال ينقلون أمتعة المخيم، لتستمتع بالمسار بحرية.",
        },
        {
          title: "مسارات مخصصة",
          description: "مسارات متعددة الأيام مرنة مصممة خصيصًا لتناسب مستواك البدني.",
        },
      ],
    },
    pricing: {
      title: "طلب عرض سعر",
      script: "المسارات",
      specsLabels: {
        duration: "المدة",
        difficulty: "الصعوبة",
        highlights: "أبرز المعالم",
      },
      items: [
        {
          name: "مسار صغرو (2-3 أيام)",
          description: "رحلة جبلية قصيرة تتميز بأبراج باب ن علي البركانية والقرى البربرية التقليدية.",
          specs: {
            duration: "2 - 3 أيام",
            difficulty: "متوسط",
            highlights: "باب ن علي والوديان",
          },
          waMessage: "مرحبا نكوب صغرو أدڤنتشرز، أرغب في الحصول على عرض سعر لمسار 2-3 أيام.",
        },
        {
          name: "عبور صغرو (4-5 أيام)",
          description: "استكشف الممرات الجبلية العالية، والمضايق الساحرة، والواحات الخضراء، وليالي المخيم تحت النجوم.",
          specs: {
            duration: "4 - 5 أيام",
            difficulty: "متوسط إلى صعب",
            highlights: "المضايق ومخيمات الواحات",
          },
          waMessage: "مرحبا نكوب صغرو أدڤنتشرز، أرغب في الحصول على عرض سعر لمسار 4-5 أيام.",
        },
        {
          name: "رحلة صغرو الكبرى (5-7 أيام)",
          description: "استكشاف شامل للأعالي الجبلية يربط بين القمم البركانية والمستوطنات البدوية والمسارات الجبلية.",
          specs: {
            duration: "5 - 7 أيام",
            difficulty: "صعب",
            highlights: "رحلة شاملة والقمم",
          },
          waMessage: "مرحبا نكوب صغرو أدڤنتشرز، أرغب في الحصول على عرض سعر لمسار 5-7 أيام.",
        },
      ],
      table: {
        title: "جدول الأسعار الرسمي",
        subtitle: "الأسعار للشخص الواحد (باليورو)",
        peopleHeader: "عدد الأشخاص",
        priceHeader: "السعر للشخص",
        perPersonLabel: "/ للشخص",
        rows: [
          { people: "شخصان (2)", price: "589 €" },
          { people: "3 أشخاص", price: "549 €" },
          { people: "4 أشخاص أو أكثر", price: "499 €" },
        ],
        bookNow: "احجز الآن",
        waMessage: "مرحبا نكوب صغرو أدڤنتشرز، أرغب في حجز رحلة بالأسعار الرسمية.",
        note: "الأسعار للشخص الواحد باليورو (€) معروضة تماماً كما هي محددة بدون أي رسوم خفية.",
      },
    },
    gallery: {
      word: "صغرو",
      quote: "نرافق رحالة الجبال بأمان في جنوب المغرب منذ عقدين من الزمن.",
      credit: "موحامد، المرشد البربري الرئيسي",
      items: [
        "قمم صخرية بركانية",
        "مخيم صحراوي",
        "أبراج باب ن علي",
        "واحات النخيل في المضايق",
        "مسار جبلي مرتفع",
        "قصبات نكوب الطينية",
      ],
    },
    testimonials: {
      items: [
        {
          quote: "كانت رحلة الـ3 أيام مع نكوب صغرو أدڤنتشرز رائعة حقًا. كان مرشدنا البربري دافئًا وكان المخيم تحت النجوم ساحرًا.",
          name: "Natalie Webb",
          role: "رحالة من المملكة المتحدة",
        },
        {
          quote: "جعل عبور جبل صغرو مع الضيافة البربرية الأصيلة مغامرتنا في المغرب مميزة للغاية.",
          name: "Liam Murphy",
          role: "رحالة من أيرلندا",
        },
      ],
    },
    faq: {
      title: "قبل انطلاق الرحلة",
      script: "إرشادات الرحلة",
      items: [
        {
          title: "ما هي أفضل فترة للرحلات؟",
          description: "تعد الفترة من أكتوبر إلى أبريل الأفضل بفضل درجات الحرارة المعتدلة والسماء الصافية في جبل صغرو.",
        },
        {
          title: "ما هو المستوى البدني المطلوب؟",
          description: "نقوم بتكييف المسارات حسب لياقتك البدنية، من مشي خفيف لمدة 4 ساعات إلى أيام جبلية مدتها 7 ساعات.",
        },
        {
          title: "ما هي المعدات الواجب إحضارها؟",
          description: "أحذية جبلية قوية، ملابس دافئة لليالي، واقي شمس، وكيس نوم دافئ للمخيمات.",
        },
        {
          title: "أين ستكون الإقامة والمنام؟",
          description: "تقضى الليالي في دور ضيافة قروية تقليدية أو في خيام مخيم خاصة تحت النجوم.",
        },
        {
          title: "هل المواصلات مشمولة؟",
          description: "نوفر مواصلات خاصة إلى نكوب من مراكش أو ورزازات أو الرشيدية.",
        },
        {
          title: "هل المجموعات كبيرة؟",
          description: "لا، تبقى المجموعات صغيرة عادة بين 2 و8 مشاركين لضمان تجربة شخصية وأصيلة.",
        },
      ],
    },
    contact: {
      title: "خطط لرحلتك",
      script: "استفسار",
      options: [
        "مسار صغرو (2-3 أيام)",
        "عبور صغرو (4-5 أيام)",
        "رحلة صغرو الكبرى (5-7 أيام)",
        "استفسار عن رحلة مخصصة",
      ],
      labels: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        enquiry: "نوع الرحلة",
        message: "عدد الأشخاص والتواريخ",
        sending: "جاري الإرسال...",
        sent: "تم الإرسال!",
        thanks: "شكراً لك، سنرد عليك في أقرب وقت.",
      },
      map: {
        location: "نكوب، جبل صغرو، المغرب",
        directions: "الاتجاهات على خرائط جوجل",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nkob,+Jebel+Saghro,+Morocco",
        embedUrl: "https://maps.google.com/maps?q=Nkob,+Jebel+Saghro,+Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed",
      },
    },
    footer: {
      columns: [
        {
          title: "الرحلات",
          links: [
            { text: "مسارات صغرو", href: "#pricing" },
            { text: "أسلوبنا", href: "#services" },
            { text: "معرض الصور", href: "#gallery" },
          ],
        },
        {
          title: "دليل المسافر",
          links: [
            { text: "عن الشركة", href: "#about" },
            { text: "الأسئلة الشائعة", href: "#faq-plus-accordion" },
            { text: "آراء الرحالة", href: "#testimonial" },
            { text: "الاستفسار والحجز", href: "#contact-plum-form" },
          ],
        },
        {
          title: "التواصل",
          links: [
            { text: "إنستغرام", href: "#" },
            { text: "واتساب مباشر", href: "https://wa.me/212650850571" },
          ],
        },
      ],
      address: ["الشارع الرئيسي", "نكوب، المغرب"],
      legal: "© 2026 Nkoub Saghro Adventures | جميع الحقوق محفوظة",
      poweredBy: "تصميم بواسطة",
      studioName: "webourguiba.com",
      studioUrl: "https://webourguiba.com",
    },
    whatsapp: {
      message: "مرحباً! أنا مهتم بحجز رحلة مع نكوب صغرو أدڤنتشرز.",
    },
    about: {
      title: "عن الشركة",
      subtitle: "اكتشف نقوب، قلب مغامرات جبل صغرو.",
      paragraph1:
        "اسمي محمد. أنا شاب من أبناء مدينة نقوب، وهي جماعة قروية تقع في إقليم زاكورة ضمن جهة درعة تافيلالت بالمغرب. تقع نقوب بالقرب من سلسلة جبال صغرو وتُلقب بـ «عاصمة القصبات»، حيث تضم أكثر من 45 قصبة تحيط بها واحات النخيل. تحظى المدينة بإقبال كبير من السياح هواة المشي الجبلي والتخييم. ولهذا السبب، كشباب من المنطقة، نعمل على تطوير السياحة الجبلية، وباعتبارنا من أبناء المنطقة الأصليين، فنحن نعرف أرضنا عن ظهر قلب.",
      paragraph2:
        "السفر هو شغفنا. يهدف هذا الموقع إلى مرافقة كل من يرغب في استكشاف هذا البلد المشهور بكرم ضيافته ودفء استقباله. أنا هنا لإرشادكم في اكتشاف طبيعة المغرب وتاريخه وجغرافيته. كما أتولى حجز الفنادق وتنظيم جميع أنواع الرحلات — خاصة إلى الجبال والصحراء — بالإضافة إلى العديد من الأنشطة الأخرى.",
    },
  },
};
