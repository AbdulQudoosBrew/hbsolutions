import { CATEGORY_PAGES } from "./categoryPages";

export const COMPANY = {
  name: "Haris Building Solutions",
  shortName: "HBS",
  email: "haris@hbsolutions.uk",
  emailHref: "mailto:haris@hbsolutions.uk",
} as const;

export type NavChild = {
  id: string;
  label: string;
  href: string;
};

export type NavCategory = {
  id: string;
  label: string;
  href: string;
  children?: NavChild[];
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Building Materials in Manchester for Every Project",
    description:
      "Haris Building Solutions in Cheetham Hill supplies waterproof bathroom wall panels, WPC and acoustic slat panels, SPC flooring, bathrooms, kitchens, aluminium roofing and trade finishing products across Greater Manchester.",
    ctaLabel: "Discover our product range",
    ctaHref: "#products",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/05/web-header-scaled.jpg",
  },
] as const;

export const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "Bathrooms Built to Last",
    description:
      "Sanitaryware, taps and furniture chosen for everyday performance and lasting style.",
    ctaLabel: "View range",
    ctaHref: "/sanitaryware",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/05/web-header-scaled.jpg",
  },
  {
    id: 2,
    title: "Showers & Wetrooms",
    description:
      "Enclosures, trays and screens designed for a clean, contemporary finish.",
    ctaLabel: "View range",
    ctaHref: "/showers",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/showers.jpg",
  },
  {
    id: 3,
    title: "Panels & Flooring",
    description:
      "Waterproof panels, SPC flooring and wall tiles for spaces that work hard.",
    ctaLabel: "View range",
    ctaHref: "/panels",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/panels.jpg",
  },
  {
    id: 4,
    title: "Heating & Finishing",
    description:
      "Radiators, mirrors, cabinets and accessories to complete every project.",
    ctaLabel: "View range",
    ctaHref: "/heating",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/heating.jpg",
  },
  {
    id: 5,
    title: "Baths & Furniture",
    description:
      "Statement baths and vanity ranges that pull a bathroom scheme together.",
    ctaLabel: "View range",
    ctaHref: "/baths",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    id: "featured-products",
    label: "Featured Products",
    image: "/images/panels-banner.jpg",
  },
  {
    id: "available-on-delivery",
    label: "Available on Delivery",
    image:
      "https://gretagrove.co.uk/wp-content/uploads/2026/03/Graphite-Marble-Wall-Panel-LS.jpg",
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg",
  },
  {
    id: "panels",
    label: "Panels",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/panels.jpg",
  },
  {
    id: "aluminium",
    label: "Aluminium",
    image: "/images/aliminium/2.jpeg",
  },
  {
    id: "flooring",
    label: "Flooring",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/flooring.jpg",
  },
  {
    id: "wall-tiles",
    label: "Wall Tiles",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/wall-tiles.jpg",
  },
  {
    id: "kitchens",
    label: "Kitchens",
    image:
      "https://static.wixstatic.com/media/9b37ef_718352d3b597426a9d6c34265306f376~mv2.jpg",
  },
  {
    id: "artificial-grass",
    label: "Artificial Grass",
    image: "/images/artificial-grass.jpg",
  },
  {
    id: "silicone",
    label: "Silicone",
    image: "https://shop.ct1.com/pub/media/catalog/product/c/t/ct1_white.jpg",
  },
  {
    id: "accessories",
    label: "Accessories",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/accessories.jpg",
  },
  {
    id: "verandas",
    label: "Verandas",
    image:
      "https://www.deponti.com/storage/app/resources/resize/510_320_0_0_crop/img_a68a9b7552a23cd079464b3a4202f79a.jpg",
  },
  {
    id: "home-furniture",
    label: "Furniture",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/4066109F-C183-4DB5-B7A0-0EBC2F096574.png",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/87AOak03.png",
  },
  {
    id: "corners",
    label: "Corners",
    image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/81A.png",
  },
] as const;

export const NAV_CATEGORIES: NavCategory[] = PRODUCT_CATEGORIES.map((cat) => {
  const collections = CATEGORY_PAGES[cat.id]?.collections ?? [];
  const children: NavChild[] = collections
    .filter((item) => !item.label.toLowerCase().includes("german kitchen"))
    .map((item) => ({
      id: item.id,
      label: item.label.replace(/\s+/g, " ").trim(),
      href: item.href,
    }));

  return {
    id: cat.id,
    label: cat.label,
    href: `/${cat.id}`,
    ...(children.length ? { children } : {}),
  };
});

export const EXPERIENCE_SECTION = {
  title: "Manchester Building Materials for Trade & Home",
  paragraphs: [
    "Based in Cheetham Hill, Haris Building Solutions supplies building materials to homeowners, contractors and trade customers across Manchester and Greater Manchester. From waterproof bathroom wall panels and SPC flooring to bathrooms, kitchens and aluminium roofing, we help you specify the right products for each job.",
    "Popular searches we stock include PVC wall panels, WPC fluted panels, acoustic slat wall panels, click-fit SPC flooring, CT1 silicone, artificial grass and aluminium roofing sheets. Collection is available from M8 8XA, with delivery across the North West.",
  ],
} as const;

export const DESIGN_SECTION = {
  title: "Plan, Build & Finish in Manchester",
  paragraphs: [
    "Visit us in Cheetham Hill or get in touch for trade pricing on waterproof wall panels, SPC flooring, bathroom suites and aluminium roofing. We help Manchester installers and homeowners choose durable, easy-to-fit materials with clear specifications and dependable supply.",
  ],
} as const;

export const CONTACT_INFO = {
  phone: "07770 116177",
  phone2: "07957 100647",
  phoneHref: "tel:07770116177",
  phone2Href: "tel:07957100647",
  /** UK mobile without leading 0, for wa.me links */
  whatsappNumber: "447770116177",
  whatsappHref:
    "https://wa.me/447770116177?text=Hi%20Haris%20Building%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.",
  email: COMPANY.email,
  emailHref: COMPANY.emailHref,
  address: {
    company: COMPANY.name,
    street: "5 Appleford Drive",
    city: "Cheetham Hill, Manchester",
    postcode: "M8 8XA",
  },
} as const;

export const FOOTER_LINKS = {
  primary: [
    { label: "NEWS / PR", href: "#" },
    { label: "CATALOGUE", href: "/#catalogue" },
    { label: "RETURNS POLICY", href: "#" },
    { label: "TERMS & CONDITIONS", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
  ],
  secondary: [
    { label: "CONTACT US", href: "/#contact" },
    { label: "ABOUT US", href: "/#about" },
  ],
  mobile: [
    { label: "ABOUT US", href: "/#about" },
    { label: "CATALOGUE", href: "/#catalogue" },
    { label: "CONTACT US", href: "/#contact" },
    { label: "MEET THE TEAM", href: "#" },
  ],
} as const;

export const CATALOGUE = {
  year: "2026",
  title: "View our",
  subtitle: "Product Catalogue",
  pdfUrl: "#",
} as const;
