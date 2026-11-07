import type { CategoryPageData } from "./categoryPages";
import type { CollectionPageData, ProductPageData } from "./collectionPages";

const ALUMINIUM_IMAGES = [
  "/images/aliminium/2.jpeg",
  "/images/aliminium/3.jpeg",
  "/images/aliminium/4.jpeg",
  "/images/aliminium/5.jpeg",
  "/images/aliminium/6.jpeg",
  "/images/aliminium/7.jpeg",
  "/images/aliminium/8.jpeg",
  "/images/aliminium/9.jpeg",
  "/images/aliminium/10.jpeg",
  "/images/aliminium/11.jpeg",
  "/images/aliminium/12.jpeg",
  "/images/aliminium/13.jpeg",
  "/images/aliminium/14.jpeg",
  "/images/aliminium/15.jpeg",
  "/images/aliminium/16.jpeg",
  "/images/aliminium/17.jpeg",
  `/images/aliminium/${encodeURIComponent("WhatsApp Image 2026-10-22 at 21.36.04.jpeg")}`,
];

const HERO_IMAGE = ALUMINIUM_IMAGES[0];

export const ALUMINIUM_CATEGORY: CategoryPageData = {
  slug: "aluminium",
  title: "Aluminium",
  description:
    "Premium aluminium alloy roofing panels from Haris Building Solutions. A durable, lightweight and low-maintenance solution for residential and commercial applications, available in insulated and non-insulated options with customisable lengths.",
  heroImage: HERO_IMAGE,
  collectionHeading: "Aluminium Alloy Roofing Panels",
  collections: [
    {
      id: "aluminium-alloy-roofing-panels",
      label: "Aluminium Alloy Roofing Panels",
      image: HERO_IMAGE,
      href: "/aluminium/aluminium-alloy-roofing-panels",
    },
  ],
};

export const ALUMINIUM_COLLECTIONS: Record<string, CollectionPageData> = {
  "aluminium/aluminium-alloy-roofing-panels": {
    key: "aluminium/aluminium-alloy-roofing-panels",
    categorySlug: "aluminium",
    slug: "aluminium-alloy-roofing-panels",
    title: "Aluminium Alloy Roofing Panels",
    description:
      "Our premium aluminium alloy roofing panels offer a durable, lightweight and low-maintenance solution for residential and commercial applications. Designed to withstand outdoor conditions, these panels combine weather resistance, strength and a sleek, modern finish. Available in both insulated and non-insulated options, with customisable lengths to suit different project requirements.",
    image: HERO_IMAGE,
    itemsHeading: "View Our Range",
    items: [
      {
        id: "aluminium-alloy-roofing-panels",
        label: "Aluminium Alloy Roofing Panels",
        image: HERO_IMAGE,
        href: "/aluminium/aluminium-alloy-roofing-panels",
      },
    ],
  },
};

export const ALUMINIUM_PRODUCTS: Record<string, ProductPageData> = {
  "aluminium/aluminium-alloy-roofing-panels": {
    key: "aluminium/aluminium-alloy-roofing-panels",
    categorySlug: "aluminium",
    collectionSlug: "aluminium-alloy-roofing-panels",
    slug: "aluminium-alloy-roofing-panels",
    title: "Aluminium Alloy Roofing Panels",
    description:
      "Our premium aluminium alloy roofing panels offer a durable, lightweight and low-maintenance solution for residential and commercial applications. Designed to withstand outdoor conditions, these panels combine weather resistance, strength and a sleek, modern finish. Available in both insulated and non-insulated options, with customisable lengths to suit different project requirements.",
    image: HERO_IMAGE,
    images: ALUMINIUM_IMAGES,
    colours: [],
    sizes: [
      { value: "insulated", label: "Insulated" },
      { value: "non-insulated", label: "Non-insulated" },
    ],
    features: [
      "Weather Resistant – Designed to provide reliable protection against rain, wind and changing weather conditions when correctly installed.",
      "Rust & Corrosion Resistant – Manufactured from aluminium alloy, offering excellent resistance to rust and corrosion for long-lasting outdoor performance.",
      "Lightweight & Durable – Strong yet lightweight construction, making the panels easier to handle and install compared with heavier traditional roofing materials.",
      "Optional Thermal & Acoustic Insulation – Available with polyurethane insulation to help reduce heat transfer and dampen noise from rainfall, improving comfort beneath covered areas.",
      "Interlocking Design – Overlapping panel profiles allow for neat, secure connections and straightforward installation.",
      "Effective Water Drainage – The grooved profile helps channel rainwater away, reducing water accumulation.",
      "Low Maintenance – Designed for long-term use with minimal maintenance requirements.",
      "Customisable Lengths – Available in different lengths to accommodate various project requirements.",
      "Contemporary Finish – A clean, modern appearance suitable for traditional and contemporary buildings.",
    ],
    specs: [
      {
        label: "Insulated option",
        value:
          "Featuring a polyurethane insulating core, these panels provide additional thermal and acoustic insulation. Ideal for garden rooms, outdoor seating areas and other covered spaces where improved temperature control and noise reduction are desirable.",
      },
      {
        label: "Non-insulated option",
        value:
          "A lightweight and durable roofing solution offering the same modern appearance and corrosion resistance without the additional insulating layer. Ideal for canopies, pergolas, carports and general outdoor roofing applications.",
      },
      {
        label: "Suitable applications",
        value:
          "Residential and commercial roofing, verandas and pergolas, carports and garages, garden rooms and outbuildings, patio covers and canopies, gazebos and outdoor seating areas, sheds and storage buildings, exterior wall cladding and architectural features.",
      },
      {
        label: "Supply",
        value:
          "Available from Haris Building Solutions in both insulated and non-insulated options, with customisable lengths to suit your project requirements. Contact us for further information, pricing and availability.",
      },
    ],
  },
};
