import { AWS_CATEGORY_PAGES } from "./awsPages";
import { SILICONE_CATEGORY } from "./siliconePages";
import { KITCHENS_CATEGORY } from "./kitchenPages";
import { STRING_SPC_CATEGORY_CARD } from "./stringSpcFlooringPages";
import { CORNERS_CATEGORY } from "./cornerTrimPages";
import { STRING_ACCESSORY_CATEGORY_CARDS } from "./stringAccessoriesPages";
import { normalizeDimensionText } from "@/lib/utils/normalizeDimensions";

export type CategoryCollection = {
  id: string;
  label: string;
  image: string;
  href: string;
};

export type CategoryPageData = {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  bannerImage?: string;
  /** Build the page header from collection card images. */
  heroMosaic?: boolean;
  /** Section title above the grid. Defaults to "View Our Collection". */
  collectionHeading?: string;
  /** Card image ratio. Accessories uses portrait like the reference site. */
  collectionAspect?: "square" | "portrait";
  collections: CategoryCollection[];
};

export const CATEGORY_PAGES: Record<string, CategoryPageData> = {
  accessories: {
    slug: "accessories",
    title: "Accessories",
    description:
      "Finishing products, tiling tools and site accessories from Haris Building Solutions. From bathroom fittings and lighting to tile trims, drill bits, levelling systems and protection film.",
    collectionHeading: "View Our Range",
    collectionAspect: "portrait",
    collections: [
      {
        id: "sanitaryware-accessories",
        label: "Sanitaryware Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/gf-768x1024.jpg",
        href: "/accessories/sanitaryware-accessories",
      },
      {
        id: "taps-accessories",
        label: "Taps Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/2-768x1024.jpg",
        href: "/accessories/taps-accessories",
      },
      {
        id: "showers-accessories",
        label: "Shower Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/jp-768x1024.jpg",
        href: "/accessories/showers-accessories",
      },
      {
        id: "enclosures-tray-accessories",
        label: "Enclosures/Trays Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/222-768x1024.jpg",
        href: "/accessories/enclosures-tray-accessories",
      },
      {
        id: "underfloor-heating",
        label: "Underfloor Heating",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/underfloor.jpg",
        href: "/accessories/underfloor-heating",
      },
      {
        id: "radiator-accessories",
        label: "Radiator Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/radiator.jpg",
        href: "/accessories/radiator-accessories",
      },

      {
        id: "extractor-fan",
        label: "Extractor Fan",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Turbo-Extractor-Fan-with-Timer.jpg",
        href: "/accessories/extractor-fan",
      },

      {
        id: "ip65-lighting",
        label: "IP65 Lighting",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/ip65-.jpg",
        href: "/accessories/ip65-lighting",
      },
      {
        id: "furniture-accessories",
        label: "Furniture Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/furniture-2.jpg",
        href: "/accessories/furniture-accessories",
      },
      {
        id: "niche",
        label: "Niche",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Bronze.jpg",
        href: "/accessories/niche",
      },
      ...STRING_ACCESSORY_CATEGORY_CARDS,
    ],
  },
  "bath-screens": {
    slug: "bath-screens",
    title: "Bath Screens",
    description:
      "Combining functionality with form, Haris Building Solutions bath screens easily transform a bathtub into a stylish showering area. With left or right hand options and 8mm glass they are sturdy, versatile and simple to install.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header5.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/intro-round-bath-screen",
        label: "ROUND SCREEN",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/TUMBNAIL.jpg",
        href: "/bath-screens/intro-round-bath-screen",
      },
      {
        id: "product/intro-square-bath-screen",
        label: "SQUARE SCREEN",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/TUMBNAIL-1.jpg",
        href: "/bath-screens/intro-square-bath-screen",
      },
      {
        id: "product/intro-black-grid-bath-screen",
        label: "GRID SCREEN",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-4.jpg",
        href: "/bath-screens/intro-black-grid-bath-screen",
      },
    ],
  },
  baths: {
    slug: "baths",
    title: "Baths",
    description:
      "Usually the largest item in the bathroom, the bath pulls attention and brings the overall styling of a bathroom together. Choose between free standing, built in or corner fitted baths with extras such as handles, twin grip, L-shape or double ended configurations. Multiple sizes are offered in our ranges of panel baths and all come double skinned encapsulated, keeping your water warmer for longer, elongating your relaxation.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header4.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "edge-baths",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500x500.jpg",
        href: "/baths/edge-baths",
      },
      {
        id: "product/kyoto-freestanding-bath",
        label: "KYOTO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500.jpg",
        href: "/baths/kyoto-freestanding-bath",
      },
      {
        id: "product/sapporo-freestanding-bath",
        label: "SAPPORO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/500-so.jpg",
        href: "/baths/sapporo-freestanding-bath",
      },
      {
        id: "product/tokyo-freestanding-bath",
        label: "TOKYO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-1.jpg",
        href: "/baths/tokyo-freestanding-bath",
      },
      {
        id: "product/single-ended-intro-bath",
        label: "INTRO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/INTRO-500.png",
        href: "/baths/single-ended-intro-bath",
      },
      {
        id: "product/nova-double-ended-bath",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Nova.jpg",
        href: "/baths/nova-double-ended-bath",
      },
      {
        id: "product/l-shape-shower-bath",
        label: "L-SHAPE",
        image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/l.jpg",
        href: "/baths/l-shape-shower-bath",
      },
      {
        id: "product/key-hole-bath",
        label: "KEY HOLE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-16.jpg",
        href: "/baths/key-hole-bath",
      },
      {
        id: "product/twin-grip-bath",
        label: "TWIN GRIP",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-17.jpg",
        href: "/baths/twin-grip-bath",
      },
      {
        id: "product/bath-panels",
        label: "BATH PANELS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-18.jpg",
        href: "/baths/bath-panels",
      },
    ],
  },
  flooring: {
    slug: "flooring",
    title: "Flooring & Tiles",
    description:
      "Revamp your living space or bathroom floor with the amazing SPC wall and floors. This material has taken the industry by storm and is the future for all living spaces. Easier to clean and maintain, long wearing and beautiful finishes. It is the flooring and wall solution you have been waiting for! The Tongue & Groove system together with the mineral structure makes the product adapt perfectly to any surface for a professional finish. The Composite Panel provides superior rigidity and high resistance making the product more durable and hard wearing than a ceramic tile.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header13.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/flooring-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [STRING_SPC_CATEGORY_CARD],
  },
  furniture: {
    slug: "furniture",
    title: "Furniture",
    description:
      "We offer a concise but stylish array of bathroom furniture, with basin units, L-shape furniture kits and wall hung vanity’s amongst more. Our new Como and Sienna ranges feature the latest in contemporary bathroom design. With natural and calming colour ways and intricate details. All our vanity units feature a high quality basin, ready to be paired with one of our beautiful taps.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header8.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/furniture-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "luna-furniture",
        label: "LUNA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/e500.jpg",
        href: "/furniture/luna-furniture",
      },
      {
        id: "edge-furniture",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-7.jpg",
        href: "/furniture/edge-furniture",
      },
      {
        id: "como-furniture",
        label: "COMO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-Unit_800_wall_oak_03-copy-3.jpg-3.jpg",
        href: "/furniture/como-furniture",
      },
      {
        id: "sienna-furniture",
        label: "SIENNA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_wll_cream_full-lifestyle_01.jpg",
        href: "/furniture/sienna-furniture",
      },
      {
        id: "niche",
        label: "NICHE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-24.jpg",
        href: "/furniture/niche",
      },
    ],
  },
  heating: {
    slug: "heating",
    title: "Heating",
    description:
      "Our extensive range of bathroom heating products are made to last and come with a 20 year guarantee. The range consists of ladder rails in multiple finishes and designer rails with single and double formats. The new Leo and Libra range have a huge range of configurations from horizontal to vertical, single and double and many, many sizes. With the bitter cold mornings that we so frequently experience, take off the edge with a stylish Haris Building Solutions radiator. Available with many styles of valves.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header10.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/heating-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/intro-anthracite-ladder-rails-22mm",
        label: "ANTHRACITE LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-8.jpg",
        href: "/heating/intro-anthracite-ladder-rails-22mm",
      },
      {
        id: "product/black-ladder-rails-22mm",
        label: "BLACK LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/BL500.jpg",
        href: "/heating/black-ladder-rails-22mm",
      },
      {
        id: "product/chrome-ladder-rails-22mm",
        label: "CHROME LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/cl500.jpg",
        href: "/heating/chrome-ladder-rails-22mm",
      },
      {
        id: "product/brushed-brass-ladder-rails-22mm",
        label: "BRUSHED BRASS LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-22.jpg",
        href: "/heating/brushed-brass-ladder-rails-22mm",
      },
      {
        id: "product/branch-anthracite-heated-towel-rail",
        label: "BRANCH",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-19.jpg",
        href: "/heating/branch-anthracite-heated-towel-rail",
      },
      {
        id: "product/nova-anthracite-heated-towel-rail",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Ne500-1.jpg",
        href: "/heating/nova-anthracite-heated-towel-rail",
      },
      {
        id: "product/edge-anthracite-heated-towel-rail",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ed500.jpg",
        href: "/heating/edge-anthracite-heated-towel-rail",
      },
      {
        id: "product/hermes-anthracite-heated-towel-rail",
        label: "HERMES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/her500.jpg",
        href: "/heating/hermes-anthracite-heated-towel-rail",
      },
      {
        id: "product/aries-anthracite-heated-towel-rail",
        label: "ARIES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-9.jpg",
        href: "/heating/aries-anthracite-heated-towel-rail",
      },
      {
        id: "product/leo-radiator",
        label: "LEO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-20.jpg",
        href: "/heating/leo-radiator",
      },
      {
        id: "product/libra-radiators",
        label: "LIBRA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-21.jpg",
        href: "/heating/libra-radiators",
      },
      {
        id: "underfloor-heating",
        label: "UNDERFLOOR HEATING",
        image: "https://giavanibathrooms.com/wp-content/uploads/2024/01/uf.jpg",
        href: "/heating/underfloor-heating",
      },
      {
        id: "radiator-accessories",
        label: "RADIATOR ACCESSORIES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/eqfqefqef.png",
        href: "/heating/radiator-accessories",
      },
    ],
  },
  "mirrors-cabinets": {
    slug: "mirrors-cabinets",
    title: "Mirrors/Cabinets",
    description:
      "We offer a unique mix of mirrors and cabinets that can suit a range of bathroom design styles. From simple squares to abstract shapes and designs. Your reflection should looks its best, so all of our mirrors come with a touch-button light system, with many also featuring colour changing modes and automatic steam-free heated modes.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header11.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/como-mirror",
        label: "COMO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-23.jpg",
        href: "/mirrors-cabinets/como-mirror",
      },
      {
        id: "product/halo-mirror",
        label: "HALO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-28.jpg",
        href: "/mirrors-cabinets/halo-mirror",
      },
      {
        id: "product/sienna-mirror",
        label: "SIENNA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-27.jpg",
        href: "/mirrors-cabinets/sienna-mirror",
      },
      {
        id: "product/kai-mirror",
        label: "KAI",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-26.jpg",
        href: "/mirrors-cabinets/kai-mirror",
      },
      {
        id: "product/branch-steam-free-mirror-colour-changing",
        label: "BRANCH",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/branch500.jpg",
        href: "/mirrors-cabinets/branch-steam-free-mirror-colour-changing",
      },
      {
        id: "product/hermes-steam-free-mirror-colour-changing",
        label: "HERMES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/her1.jpg",
        href: "/mirrors-cabinets/hermes-steam-free-mirror-colour-changing",
      },
      {
        id: "product/edge-steam-free-mirror-colour-changing",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/edge.jpg",
        href: "/mirrors-cabinets/edge-steam-free-mirror-colour-changing",
      },
      {
        id: "product/elyse-steam-free-mirror-colour-changing",
        label: "ELYSE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Eylse500.jpg",
        href: "/mirrors-cabinets/elyse-steam-free-mirror-colour-changing",
      },
      {
        id: "product/kia-steam-free-mirror-colour-changing",
        label: "KIA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/kia500.jpg",
        href: "/mirrors-cabinets/kia-steam-free-mirror-colour-changing",
      },
      {
        id: "product/eclipse-steam-free-mirror-colour-changing",
        label: "ECLIPSE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Eclipse.jpg",
        href: "/mirrors-cabinets/eclipse-steam-free-mirror-colour-changing",
      },
      {
        id: "product/rico-steam-free-mirror-colour-changing",
        label: "RICO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Rico500.jpg",
        href: "/mirrors-cabinets/rico-steam-free-mirror-colour-changing",
      },
      {
        id: "product/luna-steam-free-mirror-colour-changing",
        label: "LUNA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Luna500.jpg",
        href: "/mirrors-cabinets/luna-steam-free-mirror-colour-changing",
      },
      {
        id: "product/venus-steam-free-mirror-colour-changing",
        label: "VENUS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Venus500.jpg",
        href: "/mirrors-cabinets/venus-steam-free-mirror-colour-changing",
      },
      {
        id: "product/nova-steam-free-mirror-colour-changing",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Nova500.jpg",
        href: "/mirrors-cabinets/nova-steam-free-mirror-colour-changing",
      },
      {
        id: "product/intro-cabinet",
        label: "INTRO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-25.jpg",
        href: "/mirrors-cabinets/intro-cabinet",
      },
    ],
  },
  panels: {
    slug: "panels",
    title: "Wall & Ceiling Panels",
    description:
      "Our specialist range of wall panels offers so many different finishes such as chevron, tiles, marble, wood and many more. You will be spoilt for choice for both living space and bathroom space. Haris Building Solutions panels are 100% waterproof and therefore are perfect for showers and bathrooms. Each of our PVC panels are extremely durable and made to the highest quality.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header12.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/panels-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "classic-10mm",
        label: "PVC Wall Panels 1000mm * 2400mm * 10mm",
        image:
          "https://cdn.shopify.com/s/files/1/0797/2519/9645/files/02_Z247.jpg?v=1770370608",
        href: "/panels/classic-10mm",
      },
      {
        id: "panels/aqua-panels",
        label: "60 cm PVC Panels",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/05A_7dad8fac-0000-4a63-86a3-89b9c43acd43.png",
        href: "/panels/aqua-panels",
      },
      {
        id: "classic-8mm",
        label: "Ceiling panels 250mm * 2700mm * 8mm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-50.jpg",
        href: "/panels/classic-8mm",
      },
      {
        id: "classic-9mm",
        label: "Ceiling panels 250mm * 2700mm * 9.5mm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-51.jpg",
        href: "/panels/classic-9mm",
      },
      {
        id: "acoustic-panels",
        label: "ACOUSTIC PANELS",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP010G-GREY_03fd921c-186b-41f7-835a-401aabc29ae0.png",
        href: "/panels/acoustic-panels",
      },
      {
        id: "bosco-panels",
        label: "Solid WPC 2400mm * 300mm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/main1.jpg",
        href: "/panels/bosco-panels",
      },
      {
        id: "panels/wall-panel-62-series",
        label: "PVC 30cm * 240cm ",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_04_54_27PM_eadabc79-a0ad-4454-abb7-e95c16223d15.png",
        href: "/panels/wall-panel-62-series",
      },
      {
        id: "decorative-panel",
        label: "PVC wall panels 1000 mm * 2400 mm * 8mm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-49.jpg",
        href: "/panels/decorative-panel",
      },
      {
        id: "odyssey-collection",
        label: "ODYSSEY COLLECTION",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-53.jpg",
        href: "/panels/odyssey-collection",
      },
      {
        id: "panels/cover-slips",
        label: "COVER SLIPS",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/9CC7C152-F46F-4339-AB3F-9F1C8F3AC000.jpg",
        href: "/panels/cover-slips",
      },
      {
        id: "panels/panel-lighting",
        label: "PANEL LIGHTING",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED01.png",
        href: "/panels/panel-lighting",
      },
    ],
  },
  sanitaryware: {
    slug: "sanitaryware",
    title: "Sanitaryware",
    description:
      "High quality sanitaryware is essential for any contemporary bathroom. Haris Building Solutions offers a wide range of WCs to suit any project. Whether it’s wall hung, back to wall, comfort height, short projection.. anything is possible! Our range of sanitaryware is complemented by flush plates, cisterns, and basin units. All of our sanitaryware is designed to last and comes with a lifetime guarantee.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2026/05/1.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/sanitaryware-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "smart-wc",
        label: "Smart WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/06/THUMBNAIL-7.jpg",
        href: "/sanitaryware/smart-wc",
      },
      {
        id: "rico",
        label: "RICO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/500-ri.jpg",
        href: "/sanitaryware/rico",
      },
      {
        id: "branch",
        label: "BRANCH",
        image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/n.jpg",
        href: "/sanitaryware/branch",
      },
      {
        id: "luna",
        label: "LUNA",
        image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/li.jpg",
        href: "/sanitaryware/luna",
      },
      {
        id: "ruby",
        label: "RUBY",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-4.jpg",
        href: "/sanitaryware/ruby",
      },
      {
        id: "azzura",
        label: "AZZURA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL.jpg",
        href: "/sanitaryware/azzura",
      },
      {
        id: "comet",
        label: "COMET",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-1.jpg",
        href: "/sanitaryware/comet",
      },
      {
        id: "juniper",
        label: "JUNIPER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-2.jpg",
        href: "/sanitaryware/juniper",
      },
      {
        id: "project-550",
        label: "PROJECT 550",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-3.jpg",
        href: "/sanitaryware/project-550",
      },
      {
        id: "select-550",
        label: "SELECT 550",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-5.jpg",
        href: "/sanitaryware/select-550",
      },
      {
        id: "select-600",
        label: "SELECT 600",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-6.jpg",
        href: "/sanitaryware/select-600",
      },
      {
        id: "basin-pedestal",
        label: "BASIN AND PEDESTAL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-7.jpg",
        href: "/sanitaryware/basin-pedestal",
      },
      {
        id: "douche-kits",
        label: "DOUCHE KITS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-16.jpg",
        href: "/sanitaryware/douche-kits",
      },
    ],
  },
  "shower-enclosures": {
    slug: "shower-enclosures",
    title: "Shower Enclosures",
    description:
      "Transform the look of your bathroom with a walk-in shower enclosure. With countless sizes and shapes, our enclosures can accommodate a bathroom of any size. They are all designed to work with our slate and stone resin shower trays. Explore space saving quadrant enclosures or long sliding door enclosures that give you your own shower room! All supplied with 6mm glass and designer handling.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header6.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/enclosures-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/double-door-quadrant-6mm-shower-enclosures",
        label: "DOUBLE DOOR QUADRANT",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-2.jpg",
        href: "/shower-enclosures/double-door-quadrant-6mm-shower-enclosures",
      },
      {
        id: "product/single-door-quadrant-6mm-shower-enclosures",
        label: "SINGLE DOOR QUADRANT",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-3.jpg",
        href: "/shower-enclosures/single-door-quadrant-6mm-shower-enclosures",
      },
      {
        id: "product/pivot-door-6mm-shower-enclosures-with-side-panel",
        label: "PIVOT DOOR",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-4.jpg",
        href: "/shower-enclosures/pivot-door-6mm-shower-enclosures-with-side-panel",
      },
      {
        id: "product/bi-fold-door-6mm-shower-enclosures-with-side-panel",
        label: "BI-FOLD DOOR",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-5.jpg",
        href: "/shower-enclosures/bi-fold-door-6mm-shower-enclosures-with-side-panel",
      },
      {
        id: "product/sliding-door-6mm-shower-enclosures-with-side-panel",
        label: "SLIDING DOOR",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-6.jpg",
        href: "/shower-enclosures/sliding-door-6mm-shower-enclosures-with-side-panel",
      },
      {
        id: "product/enclosure-side-panel",
        label: "SIDE PANEL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-7.jpg",
        href: "/shower-enclosures/enclosure-side-panel",
      },
      {
        id: "niche",
        label: "NICHE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-24.jpg",
        href: "/shower-enclosures/niche",
      },
    ],
  },
  "shower-trays": {
    slug: "shower-trays",
    title: "Shower Trays",
    description:
      "The right shower tray can elevate your showering experience tenfold. Pick from our standard stone resin shower trays or go for a more natural look with our new slate trays with matching colour grate. Double skinned for extra strength and available in square, quadrant and rectangle configurations, all our trays pair perfectly with Haris Building Solutions shower enclosures and wetroom screens.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header9.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Untitled-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/quadrant-shower-trays",
        label: "QUADRANT SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Untitled-1.jpg",
        href: "/shower-trays/quadrant-shower-trays",
      },
      {
        id: "product/rectangular-shower-trays",
        label: "RECTANGULAR SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/SQ-6.jpg",
        href: "/shower-trays/rectangular-shower-trays",
      },
      {
        id: "product/square-shower-trays",
        label: "SQUARE SHOWER TRAYS",
        image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/SS.jpg",
        href: "/shower-trays/square-shower-trays",
      },
      {
        id: "product/slate-quadrant-shower-tray",
        label: "SLATE QUADRANT SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-29.jpg",
        href: "/shower-trays/slate-quadrant-shower-tray",
      },
      {
        id: "product/rectangular-slate-shower-tray",
        label: "SLATE RECTANGULAR SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-30.jpg",
        href: "/shower-trays/rectangular-slate-shower-tray",
      },
      {
        id: "product/slate-square-shower-tray",
        label: "SLATE SQUARE SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-31.jpg",
        href: "/shower-trays/slate-square-shower-tray",
      },
      {
        id: "product/easy-plumb-kits",
        label: "EASY PLUMB KITS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-19.jpg",
        href: "/shower-trays/easy-plumb-kits",
      },
      {
        id: "enclosures-tray-accessories",
        label: "Trays Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-copy.jpg",
        href: "/shower-trays/enclosures-tray-accessories",
      },
      {
        id: "product/wetroom-kits",
        label: "WETROOM KITS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
        href: "/shower-trays/wetroom-kits",
      },
    ],
  },
  showers: {
    slug: "showers",
    title: "Showers",
    description:
      "Showers have a multitude of purposes, whether that’s making use of a small alcove, or being the centerpiece of an extravagant bathroom. Its important to know which shower is right for you. Many of our showers are available in black, chrome or brushed brass and come with round or square shower heads. These options allow for a seamless design language across your entire bathroom, suiting the finishes and shapes of your bathroom furniture to create a calming and harmonious atmosphere.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header-shower.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/07/showers-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/bliss-twin-head-shower-with-bath-filler",
        label: "BLISS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/bliss.jpg",
        href: "/showers/bliss-twin-head-shower-with-bath-filler",
      },
      {
        id: "product/hampton-twin-head-shower-with-bath-filler",
        label: "HAMPTON",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Hampton.jpg",
        href: "/showers/hampton-twin-head-shower-with-bath-filler",
      },
      {
        id: "matrix-showers",
        label: "MATRIX",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/MATRIX.jpg",
        href: "/showers/matrix-showers",
      },
      {
        id: "product/nova-showers",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-8.jpg",
        href: "/showers/nova-showers",
      },
      {
        id: "product/edge-showers",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-9.jpg",
        href: "/showers/edge-showers",
      },
      {
        id: "product/halo-shower",
        label: "HALO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-10.jpg",
        href: "/showers/halo-shower",
      },
      {
        id: "product/soho-plus-round-shower-head",
        label: "SOHO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-20.jpg",
        href: "/showers/soho-plus-round-shower-head",
      },
      {
        id: "showers-accessories",
        label: "Shower Accessories",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/jp-768x1024.jpg",
        href: "/showers/showers-accessories",
      },
    ],
  },
  taps: {
    slug: "taps",
    title: "Taps",
    description:
      "The delivery of water in a bathroom should be hassle-free and elegant. That is what we strive to achieve at Haris Building Solutions. All of our taps come with a basin waste included. Don’t compromise your beautiful bathroom with a basin tap that doesn’t fit… Pick from our extensive range of styles that suit the bathroom of your dreams. With mono mixers, bath fillers and shower mixers available in black, chrome and brushed brass, they not only look great but they perform even better.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header-taps.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/06/taps-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "nova-taps",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/ddvv.jpg",
        href: "/taps/nova-taps",
      },
      {
        id: "edge-taps",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/efdr.jpg",
        href: "/taps/edge-taps",
      },
      {
        id: "slope-taps",
        label: "SLOPE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-1.jpg",
        href: "/taps/slope-taps",
      },
      {
        id: "storm-taps",
        label: "STORM",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/storm-ma9n-homepage.png",
        href: "/taps/storm-taps",
      },
      {
        id: "rico-taps",
        label: "RICO",
        image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq.jpg",
        href: "/taps/rico-taps",
      },
      {
        id: "amoura-taps",
        label: "AMOURA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-1.jpg",
        href: "/taps/amoura-taps",
      },
      {
        id: "california-taps",
        label: "CALIFORNIA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-2.jpg",
        href: "/taps/california-taps",
      },
      {
        id: "new-york-taps",
        label: "NEW YORK",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/new-yrk.jpg",
        href: "/taps/new-york-taps",
      },
      {
        id: "halo-taps",
        label: "HALO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-11.jpg",
        href: "/taps/halo-taps",
      },
      {
        id: "boston-taps",
        label: "BOSTON",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/m-1.jpg",
        href: "/taps/boston-taps",
      },
      {
        id: "amethyst-taps",
        label: "AMETHYST",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-1.jpg",
        href: "/taps/amethyst-taps",
      },
      {
        id: "niccolo-taps",
        label: "NICCOLO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-5.jpg",
        href: "/taps/niccolo-taps",
      },
      {
        id: "block-taps",
        label: "BLOCK",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-6.jpg",
        href: "/taps/block-taps",
      },
      {
        id: "branch-taps",
        label: "BRANCH",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-7.jpg",
        href: "/taps/branch-taps",
      },
      {
        id: "aries-taps",
        label: "ARIES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar-main.jpg",
        href: "/taps/aries-taps",
      },
      {
        id: "kyoto-taps",
        label: "KYOTO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-21.jpg",
        href: "/taps/kyoto-taps",
      },
      {
        id: "laton-taps",
        label: "LATON",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-22.jpg",
        href: "/taps/laton-taps",
      },
      {
        id: "oro-taps",
        label: "ORO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-23.jpg",
        href: "/taps/oro-taps",
      },
      {
        id: "freestanding-bath-taps",
        label: "FREESTANDING BATH TAPS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-4.jpg",
        href: "/taps/freestanding-bath-taps",
      },
    ],
  },
  "wall-tiles": {
    slug: "wall-tiles",
    title: "Wall Tiles",
    description:
      "Explore our SPC wall tiles range and find the style that suits your room. They are made to be used in humid spaces, handling steam, splashes and daily cleaning with ease. Pick from our range of calming neutral tones and introduce a new level of luxury serenity into your bathroom.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header14.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/wall-tiles-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/brushed-grey-spc-wall-tiles",
        label: "Brushed Grey SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-42.jpg",
        href: "/wall-tiles/brushed-grey-spc-wall-tiles",
      },
      {
        id: "product/selene-spc-wall-tiles",
        label: "Selene SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-43.jpg",
        href: "/wall-tiles/selene-spc-wall-tiles",
      },
      {
        id: "product/carrera-spc-wall-tiles",
        label: "Carrera SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-44.jpg",
        href: "/wall-tiles/carrera-spc-wall-tiles",
      },
      {
        id: "product/juno-grey-spc-wall-tiles",
        label: "Juno Grey SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-45.jpg",
        href: "/wall-tiles/juno-grey-spc-wall-tiles",
      },
      {
        id: "product/dynasty-black-spc-wall-tiles",
        label: "Dynasty Black SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/04/wall.jpg",
        href: "/wall-tiles/dynasty-black-spc-wall-tiles",
      },
      {
        id: "product/olympus-beige-spc-wall-tiles",
        label: "Olympus Beige SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-47.jpg",
        href: "/wall-tiles/olympus-beige-spc-wall-tiles",
      },
    ],
  },
  "wetroom-screens": {
    slug: "wetroom-screens",
    title: "Wetroom Screens",
    description:
      "Upgrade your bathroom into a spacious, contemporary sanctuary with our range of wet room shower screens. Encapsulating the essence of abundance and allowing for a showering experience without the hassle of enclosures, doors or frames. These large glass panels paired with our wall panels provide a serene minimalism that you can enjoy every day. Available with black, chrome or brushed brass features as well as options for towel rails and shelves, they can streamline the look of your entire bathroom.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header7.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/8mm-wetroom-panels",
        label: "WETROOM PANELS",
        image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/WP.jpg",
        href: "/wetroom-screens/8mm-wetroom-panels",
      },
      {
        id: "product/8mm-black-grid-wetroom-panel",
        label: "GRID WETROOM PANEL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/GRSQ.jpg",
        href: "/wetroom-screens/8mm-black-grid-wetroom-panel",
      },
      {
        id: "product/arched-wetroom-screen",
        label: "ARCHED WETROOM PANEL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-14.jpg",
        href: "/wetroom-screens/arched-wetroom-screen",
      },
      {
        id: "product/wetroom-panel-shelf",
        label: "WETROOM PANEL SHELF",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-15.jpg",
        href: "/wetroom-screens/wetroom-panel-shelf",
      },
      {
        id: "product/wetroom-kits",
        label: "WETROOM KITS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
        href: "/wetroom-screens/wetroom-kits",
      },
    ],
  },

  bathrooms: {
    slug: "bathrooms",
    title: "Bathrooms",
    description:
      "Explore our full bathrooms range — sanitaryware, taps, showers, baths, bath screens, shower enclosures, wetroom screens, shower trays, bath furniture, heating and mirrors — selected for performance, style and lasting value.",
    heroMosaic: true,
    collectionHeading: "Bathroom Categories",
    collections: [
      {
        id: "sanitaryware",
        label: "Sanitaryware",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/05/sanitaryware.jpg",
        href: "/sanitaryware",
      },
      {
        id: "taps",
        label: "Taps",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/taps.jpg",
        href: "/taps",
      },
      {
        id: "showers",
        label: "Showers",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/showers.jpg",
        href: "/showers",
      },
      {
        id: "baths",
        label: "Baths",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg",
        href: "/baths",
      },
      {
        id: "bath-screens",
        label: "Bath Screens",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/bath-screens.jpg",
        href: "/bath-screens",
      },
      {
        id: "shower-enclosures",
        label: "Shower Enclosures",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Enclosures.jpg",
        href: "/shower-enclosures",
      },
      {
        id: "wetroom-screens",
        label: "Wetroom Screens",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/wetroom-screens.jpg",
        href: "/wetroom-screens",
      },
      {
        id: "shower-trays",
        label: "Shower Trays",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/trays.jpg",
        href: "/shower-trays",
      },
      {
        id: "furniture",
        label: "Bath Furniture",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Furniture.jpg",
        href: "/furniture",
      },
      {
        id: "heating",
        label: "Heating",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/heating.jpg",
        href: "/heating",
      },
      {
        id: "mirrors-cabinets",
        label: "Mirrors",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/mirrors.jpg",
        href: "/mirrors-cabinets",
      },
    ],
  },
  kitchens: KITCHENS_CATEGORY,
  "artificial-grass": {
    slug: "artificial-grass",
    title: "Artificial Grass",
    description:
      "Discover our Artificial Grass range from Haris Building Solutions. Quality products selected for performance, style and lasting value.",
    heroImage: "/images/artificial-grass.jpg",
    collectionHeading: "View Our Collection",
    collections: [],
  },
  silicone: SILICONE_CATEGORY,
  corners: CORNERS_CATEGORY,

  "ceiling-tiles": {
    slug: "ceiling-tiles",
    title: "Ceiling Tiles",
    description:
      "Discover our Ceiling Tiles range from Haris Building Solutions. Quality products selected for performance, style and lasting value.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header14.jpg",
    bannerImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/wall-tiles-1.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "product/brushed-grey-spc-wall-tiles",
        label: "Brushed Grey SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-42.jpg",
        href: "/wall-tiles/brushed-grey-spc-wall-tiles",
      },
      {
        id: "product/selene-spc-wall-tiles",
        label: "Selene SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-43.jpg",
        href: "/wall-tiles/selene-spc-wall-tiles",
      },
      {
        id: "product/carrera-spc-wall-tiles",
        label: "Carrera SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-44.jpg",
        href: "/wall-tiles/carrera-spc-wall-tiles",
      },
      {
        id: "product/juno-grey-spc-wall-tiles",
        label: "Juno Grey SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-45.jpg",
        href: "/wall-tiles/juno-grey-spc-wall-tiles",
      },
      {
        id: "product/dynasty-black-spc-wall-tiles",
        label: "Dynasty Black SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/04/wall.jpg",
        href: "/wall-tiles/dynasty-black-spc-wall-tiles",
      },
      {
        id: "product/olympus-beige-spc-wall-tiles",
        label: "Olympus Beige SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-47.jpg",
        href: "/wall-tiles/olympus-beige-spc-wall-tiles",
      },
      {
        id: "tiles-trims-accessories",
        label: "SPC Tile Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/acces.jpg",
        href: "/wall-tiles/tiles-trims-accessories",
      },
    ],
  },

  verandas: {
    slug: "verandas",
    title: "Verandas",
    description:
      "Enjoy the outdoors throughout the year with indoor-style comfort. Our verandas range includes aluminium verandas, glass sliding doors, louvered roofs and folding roofs — durable, low-maintenance outdoor living products selected for performance, style and lasting value.",
    heroImage:
      "https://www.deponti.com/storage/app/resources/resize/1500_400_0_0_crop/img_2361753701d7d87df6507e24a69cc134.jpg",
    collectionHeading: "View Our Collection",
    collections: [
      {
        id: "aluminium-verandas",
        label: "Aluminium Verandas",
        image:
          "https://www.deponti.com/storage/app/resources/resize/510_320_0_0_crop/img_a68a9b7552a23cd079464b3a4202f79a.jpg",
        href: "/verandas/aluminium-verandas",
      },
      {
        id: "glass-sliding-doors",
        label: "Glass Sliding Doors",
        image:
          "https://www.deponti.com/storage/app/resources/resize/510_320_0_0_crop/img_4df8ea1c1fa9f2953c938eb624bd5649.jpg",
        href: "/verandas/glass-sliding-doors",
      },
      {
        id: "louvered-roofs",
        label: "Louvered Roofs",
        image:
          "https://www.deponti.com/storage/app/resources/resize/510_320_0_0_crop/img_7214b6eacf4515ebb616634d44936c5b.png",
        href: "/verandas/louvered-roofs",
      },
      {
        id: "folding-roofs",
        label: "Folding Roofs",
        image:
          "https://www.deponti.com/storage/app/resources/resize/510_320_0_0_crop/img_9b6f1b0dd07cf2206144f447a5f54c7c.png",
        href: "/verandas/folding-roofs",
      },
    ],
  },
};

Object.assign(
  CATEGORY_PAGES,
  AWS_CATEGORY_PAGES as Record<string, CategoryPageData>,
);
Object.assign(CATEGORY_PAGES, { kitchens: KITCHENS_CATEGORY });

for (const page of Object.values(CATEGORY_PAGES)) {
  page.title = normalizeDimensionText(page.title);
  page.description = normalizeDimensionText(page.description);
  for (const collection of page.collections) {
    collection.label = normalizeDimensionText(collection.label);
  }
}

export function getCategoryPage(slug: string): CategoryPageData | null {
  return CATEGORY_PAGES[slug] ?? null;
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(CATEGORY_PAGES);
}
