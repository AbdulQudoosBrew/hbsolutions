export const NAV_CATEGORIES = [
  { id: "sanitaryware", label: "Sanitaryware", href: "#sanitaryware" },
  { id: "taps", label: "Taps", href: "#taps" },
  { id: "showers", label: "Showers", href: "#showers" },
  { id: "baths", label: "Baths", href: "#baths" },
  { id: "bath-screens", label: "Bath Screens", href: "#bath-screens" },
  { id: "shower-enclosures", label: "Shower Enclosures", href: "#shower-enclosures" },
  { id: "wetroom-screens", label: "Wetroom Screens", href: "#wetroom-screens" },
  { id: "shower-trays", label: "Shower Trays", href: "#shower-trays" },
  { id: "furniture", label: "Furniture", href: "#furniture" },
  { id: "heating", label: "Heating", href: "#heating" },
  { id: "mirrors-cabinets", label: "Mirrors/Cabinets", href: "#mirrors-cabinets" },
  { id: "panels", label: "Panels", href: "#panels" },
  { id: "flooring", label: "Flooring", href: "#flooring" },
  { id: "wall-tiles", label: "Wall Tiles", href: "#wall-tiles" },
  { id: "accessories", label: "Accessories", href: "#accessories" },
] as const;

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Luxury Living with Minimalist Design",
    description:
      "Giavani bathrooms is one of the UK's largest distributors of luxury bathroom products. Discover our huge range of product offerings from stylish panels, tiles, designer rails, wetroom kits and much, much more…",
    ctaLabel: "Discover our product range",
    ctaHref: "#products",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
  },
  {
    id: 2,
    title: "Luxury Living with Minimalist Design",
    description:
      "Giavani bathrooms is one of the UK's largest distributors of luxury bathroom products. Discover our huge range of product offerings from stylish panels, tiles, designer rails, wetroom kits and much, much more…",
    ctaLabel: "Discover our product range",
    ctaHref: "#products",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/Giavani-Bathroom-Hero-2.jpg",
  },
  {
    id: 3,
    title: "Luxury Living with Minimalist Design",
    description:
      "Giavani bathrooms is one of the UK's largest distributors of luxury bathroom products. Discover our huge range of product offerings from stylish panels, tiles, designer rails, wetroom kits and much, much more…",
    ctaLabel: "Discover our product range",
    ctaHref: "#products",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/Giavani-Bathroom-Hero-3.jpg",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  { id: "sanitaryware", label: "Sanitaryware", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sanitaryware.jpg" },
  { id: "taps", label: "Taps", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/taps.jpg" },
  { id: "showers", label: "Showers", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/showers.jpg" },
  { id: "baths", label: "Baths", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/baths.jpg" },
  { id: "bath-screens", label: "Bath Screens", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/bath-screens.jpg" },
  { id: "shower-enclosures", label: "Shower Enclosures", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/enclosures.jpg" },
  { id: "wetroom-screens", label: "Wetroom Screens", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/wetroom-screens.jpg" },
  { id: "shower-trays", label: "Shower Trays", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/shower-trays.jpg" },
  { id: "furniture", label: "Furniture", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/furniture.jpg" },
  { id: "heating", label: "Heating", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/heating.jpg" },
  { id: "mirrors-cabinets", label: "Mirrors/Cabinets", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/mirrors.jpg" },
  { id: "panels", label: "Panels", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/panels.jpg" },
  { id: "flooring", label: "Flooring", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/flooring.jpg" },
  { id: "wall-tiles", label: "Wall Tiles", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/wall-tiles.jpg" },
  { id: "accessories", label: "Accessories", image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/accessories.jpg" },
] as const;

export const CONTACT_INFO = {
  phone: "01282 697717",
  phoneHref: "tel:01282697717",
  email: "sales@giavanibathrooms.com",
  emailHref: "mailto:sales@giavanibathrooms.com",
  address: {
    company: "Giavani Bathrooms Ltd",
    street: "Barrowford Road",
    city: "Colne",
    postcode: "BB8 9AJ",
  },
} as const;

export const FOOTER_LINKS = {
  primary: [
    { label: "NEWS / PR", href: "#" },
    { label: "CATALOGUE", href: "#catalogue" },
    { label: "RETURNS POLICY", href: "#" },
    { label: "TERMS & CONDITIONS", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
  ],
  secondary: [
    { label: "CONTACT US", href: "#contact" },
    { label: "ABOUT US", href: "#about" },
  ],
  mobile: [
    { label: "ABOUT US", href: "#about" },
    { label: "CATALOGUE", href: "#catalogue" },
    { label: "CONTACT US", href: "#contact" },
    { label: "MEET THE TEAM", href: "#" },
  ],
} as const;

export const CATALOGUE = {
  year: "2026",
  title: "View the 2026",
  subtitle: "Catalogue Here",
  pdfUrl: "#",
} as const;
