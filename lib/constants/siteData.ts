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

export const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "bathrooms",
    label: "Bathrooms",
    href: "/bathrooms",
    children: [
      { id: "sanitaryware", label: "Sanitaryware", href: "/sanitaryware" },
      { id: "taps", label: "Taps", href: "/taps" },
      { id: "showers", label: "Showers", href: "/showers" },
      { id: "baths", label: "Baths", href: "/baths" },
      { id: "bath-screens", label: "Bath Screens", href: "/bath-screens" },
      { id: "shower-enclosures", label: "Shower Enclosures", href: "/shower-enclosures" },
      { id: "wetroom-screens", label: "Wetroom Screens", href: "/wetroom-screens" },
      { id: "shower-trays", label: "Shower Trays", href: "/shower-trays" },
      { id: "furniture", label: "Bath Furniture", href: "/furniture" },
      { id: "heating", label: "Heating", href: "/heating" },
      { id: "mirrors-cabinets", label: "Mirrors", href: "/mirrors-cabinets" },
    ],
  },
  {
    id: "panels",
    label: "Panels",
    href: "/panels",
    children: [
      { id: "panels", label: "Panels", href: "/panels" },
      { id: "wpc-panels", label: "WPC Panels", href: "/wpc-panels" },
      { id: "acoustic-panels", label: "Acoustic Panels", href: "/acoustic-panels" },
      { id: "solid-panels", label: "Solid Panels", href: "/solid-panels" },
      { id: "ceiling-panels", label: "Ceiling Panels", href: "/ceiling-panels" },
    ],
  },
  {
    id: "ceiling",
    label: "Ceiling",
    href: "/ceiling-tiles",
    children: [
      { id: "ceiling-panels", label: "Ceiling Panels", href: "/ceiling-panels" },
      { id: "ceiling-tiles", label: "Ceiling Tiles", href: "/ceiling-tiles" },
    ],
  },
  { id: "flooring", label: "Flooring", href: "/flooring" },
  { id: "wall-tiles", label: "Wall Tiles", href: "/wall-tiles" },
  { id: "kitchens", label: "Kitchens", href: "/kitchens" },
  { id: "artificial-grass", label: "Artificial Grass", href: "/artificial-grass" },
  { id: "silicone", label: "Silicone", href: "/silicone" },
  { id: "accessories", label: "Accessories", href: "/accessories" },
  {
    id: "corners",
    label: "Corners",
    href: "/corners",
    children: [
      { id: "angle-trims", label: "Angle Trims / L Shape", href: "/angle-trims" },
      { id: "end-cap", label: "End Cap", href: "/end-cap" },
      { id: "internal-corner", label: "Internal Corner", href: "/internal-corner" },
      { id: "external-corner", label: "External Corner", href: "/external-corner" },
      { id: "fascia", label: "Fascia", href: "/fascia" },
    ],
  },
];


export const HERO_SLIDES = [
  {
    id: 1,
    title: "Quality Building Materials for Every Project",
    description:
      "Haris Building Solutions supplies a comprehensive range of building and finishing materials — from WPC panels, shower panels and flooring to bathrooms, kitchens, artificial grass, silicone, acoustic panels, ceiling panels, ceiling tiles, trims, corners and fascia.",
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
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/panels.jpg",
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
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  { id: "bathrooms", label: "Bathrooms", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg" },
  { id: "panels", label: "Panels", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/panels.jpg" },
  { id: "flooring", label: "Flooring", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/flooring.jpg" },
  { id: "wall-tiles", label: "Wall Tiles", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/wall-tiles.jpg" },
  { id: "kitchens", label: "Kitchens", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/furniture-1.jpg" },
  { id: "artificial-grass", label: "Artificial Grass", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/flooring-1.jpg" },
  { id: "silicone", label: "Silicone", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/accessories.jpg" },
  { id: "accessories", label: "Accessories", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/accessories.jpg" },
  { id: "corners", label: "Corners", image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/accessories.jpg" },
] as const;

export const EXPERIENCE_SECTION = {
  title: "Your Partner in Building Materials",
  paragraphs: [
    "Haris Building Solutions is dedicated to supplying high-quality building materials for residential, commercial and trade projects. From panel systems and flooring to bathrooms, kitchens and finishing products, we help customers find the right materials for every stage of a build.",
    "Our range includes WPC panels, shower panels, acoustic and solid panels, ceiling panels and tiles, silicone, artificial grass, and a full selection of trims including angle trims, end caps, internal corners, external corners and fascia — all chosen for durability, value and ease of installation.",
  ],
} as const;

export const DESIGN_SECTION = {
  title: "Plan, Build & Finish",
  paragraphs: [
    "We stock robust, practical materials designed to meet the demands of modern construction and renovation. Whether you need panels for wet areas, ceiling systems for interior spaces, or finishing trims to complete a professional install, Haris Building Solutions provides reliable products backed by knowledgeable support.",
  ],
} as const;

export const CONTACT_INFO = {
  phone: "07770 116177",
  phone2: "07957 100647",
  phoneHref: "tel:07770116177",
  phone2Href: "tel:07957100647",
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
