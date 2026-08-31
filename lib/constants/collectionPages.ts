import { VERANDA_COLLECTIONS, VERANDA_PRODUCTS } from "./verandaPages";
import { AWS_COLLECTIONS, AWS_PRODUCTS } from "./awsPages";
import { SILICONE_COLLECTIONS, SILICONE_PRODUCTS } from "./siliconePages";
import { KITCHENS_COLLECTIONS, KITCHENS_PRODUCTS } from "./kitchenPages";
import {
  STRING_CLADDING_ITEMS,
  STRING_CLADDING_PRODUCTS,
  STRING_SHOWER_ITEMS,
  STRING_SHOWER_PRODUCTS,
} from "./stringPanelPages";
import {
  STRING_SPC_COLLECTIONS,
  STRING_SPC_PRODUCTS,
} from "./stringSpcFlooringPages";
import {
  STRING_ACOUSTIC_ITEMS,
  STRING_ACOUSTIC_PRODUCTS,
} from "./stringAcousticPages";
import { CORNER_COLLECTIONS, CORNER_PRODUCTS } from "./cornerTrimPages";

export type CollectionItem = {
  id: string;
  label: string;
  image: string;
  href: string;
};

export type ProductOption = {
  value: string;
  label: string;
  image?: string;
  href?: string;
};

export type CollectionPageData = {
  key: string;
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  image: string;
  itemsHeading?: string;
  items: CollectionItem[];
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductPageData = {
  key: string;
  categorySlug: string;
  collectionSlug: string;
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  image: string;
  images: string[];
  colours: ProductOption[];
  sizes: ProductOption[];
  features?: string[];
  specs?: ProductSpec[];
};

export const COLLECTION_PAGES: Record<string, CollectionPageData> = {
  "sanitaryware/smart-wc": {
    key: "sanitaryware/smart-wc",
    categorySlug: "sanitaryware",
    slug: "smart-wc",
    title: "Smart WC",
    description: "Explore the Smart WC range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/06/THUMBNAIL-7.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "smart-wc-floorstanding",
        label: "Smart WC Floorstanding",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/06/FLOOR-STANDING.jpg",
        href: "/sanitaryware/smart-wc/smart-wc-floorstanding",
      },
      {
        id: "smart-wc-wall-hung",
        label: "Smart WC Wall Hung",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/06/WALL-HUNG.jpg",
        href: "/sanitaryware/smart-wc/smart-wc-wall-hung",
      },
    ],
  },
  "sanitaryware/rico": {
    key: "sanitaryware/rico",
    categorySlug: "sanitaryware",
    slug: "rico",
    title: "Rico",
    description: "Explore the RICO range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/500-ri.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "rico-comfort-height-fully-back-to-wall-including-soft-close-and-cistern-with-fittings",
        label:
          "Rico Comfort Height Fully Back To Wall Including Soft Close And Cistern With Fittings",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/10/p-3-768x1024.jpg",
        href: "/sanitaryware/rico/rico-comfort-height-fully-back-to-wall-including-soft-close-and-cistern-with-fittings",
      },
    ],
  },
  "sanitaryware/branch": {
    key: "sanitaryware/branch",
    categorySlug: "sanitaryware",
    slug: "branch",
    title: "Branch",
    description: "Explore the BRANCH range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/n.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "branch-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
        label:
          "Branch Rimless Fully Back To Wall Pan With Cistern And Soft Close Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/10/Branch-fully-back-to-wall-1-768x1024.jpg",
        href: "/sanitaryware/branch/branch-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
      },
      {
        id: "branch-back-to-wall-pan-including-soft-close-seat",
        label: "Branch Back To Wall Pan Including Soft Close Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/10/branch-back-to-wall-1-768x1024.jpg",
        href: "/sanitaryware/branch/branch-back-to-wall-pan-including-soft-close-seat",
      },
    ],
  },
  "sanitaryware/luna": {
    key: "sanitaryware/luna",
    categorySlug: "sanitaryware",
    slug: "luna",
    title: "Luna",
    description: "Explore the LUNA range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/li.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "luna-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
        label:
          "Luna Rimless Fully Back To Wall Pan With Cistern And Soft Close Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/04/fully-back-to-wall.jpg",
        href: "/sanitaryware/luna/luna-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
      },
      {
        id: "luna-back-to-wall-pan-including-soft-close-seat",
        label: "Luna Back To Wall Pan Including Soft Close Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/04/back-to-wall.jpg",
        href: "/sanitaryware/luna/luna-back-to-wall-pan-including-soft-close-seat",
      },
    ],
  },
  "sanitaryware/ruby": {
    key: "sanitaryware/ruby",
    categorySlug: "sanitaryware",
    slug: "ruby",
    title: "Ruby",
    description: "Explore the RUBY range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-4.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-4.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "ruby-open-back-close-coupled-wc",
        label: "Ruby Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/ruby/ruby-open-back-close-coupled-wc",
      },
      {
        id: "ruby-fully-back-to-wall-close-coupled-wc",
        label: "Ruby Fully Back To Wall Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Fully-Back-To-Wall-Close-Coupled-WC.jpg",
        href: "/sanitaryware/ruby/ruby-fully-back-to-wall-close-coupled-wc",
      },
      {
        id: "ruby-comfort-height-open-back-close-coupled-wc",
        label: "Ruby Comfort Height Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Comfort-Height-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/ruby/ruby-comfort-height-open-back-close-coupled-wc",
      },
      {
        id: "ruby-comfort-height-fully-enclosed-close-coupled-wc",
        label: "Ruby Comfort Height Fully Enclosed Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Comfort-Height-Fully-Enclosed-Close-Coupled-WC.jpg",
        href: "/sanitaryware/ruby/ruby-comfort-height-fully-enclosed-close-coupled-wc",
      },
      {
        id: "ruby-back-to-wall-wc-and-slimline-seat",
        label: "Ruby Back To Wall WC and Slimline Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Back-To-Wall-WC-and-Slimline-Seat.jpg",
        href: "/sanitaryware/ruby/ruby-back-to-wall-wc-and-slimline-seat",
      },
      {
        id: "ruby-wall-hung-wc",
        label: "Ruby Wall Hung WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Wall-Hung-WC.jpg",
        href: "/sanitaryware/ruby/ruby-wall-hung-wc",
      },
    ],
  },
  "sanitaryware/azzura": {
    key: "sanitaryware/azzura",
    categorySlug: "sanitaryware",
    slug: "azzura",
    title: "Azzurra",
    description: "Explore the AZZURA range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "azzurra-open-back-close-coupled-wc",
        label: "Azzurra Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/azzura/azzurra-open-back-close-coupled-wc",
      },
      {
        id: "azzurra-fully-back-to-wall-close-coupled-wc",
        label: "Azzurra Fully Back To Wall Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Fully-Back-To-Wall-Close-Coupled-WC.jpg",
        href: "/sanitaryware/azzura/azzurra-fully-back-to-wall-close-coupled-wc",
      },
      {
        id: "azzurra-comfort-height-open-back-close-coupled-wc",
        label: "Azzurra Comfort Height Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Comfort-Height-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/azzura/azzurra-comfort-height-open-back-close-coupled-wc",
      },
      {
        id: "azzurra-comfort-height-fully-back-to-wall-close-coupled-wc",
        label: "Azzurra Comfort Height Fully Back To Wall Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Comfort-Height-Fully-Back-To-Wall-Close-Coupled-WC.jpg",
        href: "/sanitaryware/azzura/azzurra-comfort-height-fully-back-to-wall-close-coupled-wc",
      },
      {
        id: "azzurra-back-to-wall-wc",
        label: "Azzurra Back To Wall WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Back-To-Wall-WC.jpg",
        href: "/sanitaryware/azzura/azzurra-back-to-wall-wc",
      },
      {
        id: "azzurra-wall-hung-wc",
        label: "Azzurra Wall Hung WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Wall-Hung-WC.jpg",
        href: "/sanitaryware/azzura/azzurra-wall-hung-wc",
      },
    ],
  },
  "sanitaryware/comet": {
    key: "sanitaryware/comet",
    categorySlug: "sanitaryware",
    slug: "comet",
    title: "Comet",
    description: "Explore the COMET range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-1.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "comet-open-back-close-coupled-wc",
        label: "Comet Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/comet/comet-open-back-close-coupled-wc",
      },
      {
        id: "comet-comfort-height-open-back-close-coupled-wc",
        label: "Comet Comfort Height Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Comfort-Height-Open-Back-Close-Coupled-WC-1.jpg",
        href: "/sanitaryware/comet/comet-comfort-height-open-back-close-coupled-wc",
      },
      {
        id: "comet-comfort-height-back-to-wall-wc",
        label: "Comet Comfort Height Back to Wall WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Comfort-Height-Back-to-Wall-WC.jpg",
        href: "/sanitaryware/comet/comet-comfort-height-back-to-wall-wc",
      },
    ],
  },
  "sanitaryware/juniper": {
    key: "sanitaryware/juniper",
    categorySlug: "sanitaryware",
    slug: "juniper",
    title: "Juniper",
    description: "Explore the JUNIPER range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-2.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "juniper-open-back-close-coupled-wc",
        label: "Juniper Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/juniper/juniper-open-back-close-coupled-wc",
      },
      {
        id: "juniper-comfort-height-open-back-close-coupled-wc",
        label: "Juniper Comfort Height Open Back Close Coupled WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Comfort-Height-Open-Back-Close-Coupled-WC.jpg",
        href: "/sanitaryware/juniper/juniper-comfort-height-open-back-close-coupled-wc",
      },
      {
        id: "juniper-back-to-wall-wc",
        label: "Juniper Back To Wall WC",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Back-To-Wall-WC.jpg",
        href: "/sanitaryware/juniper/juniper-back-to-wall-wc",
      },
    ],
  },
  "sanitaryware/project-550": {
    key: "sanitaryware/project-550",
    categorySlug: "sanitaryware",
    slug: "project-550",
    title: "Project 550",
    description: "Explore the PROJECT 550 range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-3.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-3.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "project-550-open-back-close-coupled-wc-cistern-seat",
        label: "Project 550 Open Back Close Coupled WC Cistern & Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Project-550-Open-Back-Close-Coupled-WC-Cistern-Seat-.jpg",
        href: "/sanitaryware/project-550/project-550-open-back-close-coupled-wc-cistern-seat",
      },
    ],
  },
  "sanitaryware/select-550": {
    key: "sanitaryware/select-550",
    categorySlug: "sanitaryware",
    slug: "select-550",
    title: "Select 550",
    description: "Explore the SELECT 550 range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-5.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-5.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "select-550-open-back-close-coupled-wc-cistern-seat",
        label: "Select 550 Open Back Close Coupled WC Cistern & Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-1.jpg",
        href: "/sanitaryware/select-550/select-550-open-back-close-coupled-wc-cistern-seat",
      },
    ],
  },
  "sanitaryware/select-600": {
    key: "sanitaryware/select-600",
    categorySlug: "sanitaryware",
    slug: "select-600",
    title: "Select 600",
    description: "Explore the SELECT 600 range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-6.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-6.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "select-600-open-back-close-coupled-wc-cistern-seat",
        label: "Select 600 Open Back Close Coupled WC Cistern & Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Select-600-Open-Back-Close-Coupled-WC-Cistern-Seat-.jpg",
        href: "/sanitaryware/select-600/select-600-open-back-close-coupled-wc-cistern-seat",
      },
    ],
  },
  "sanitaryware/basin-pedestal": {
    key: "sanitaryware/basin-pedestal",
    categorySlug: "sanitaryware",
    slug: "basin-pedestal",
    title: "Basin & Pedestal",
    description:
      "Explore the BASIN AND PEDESTAL range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-7.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-7.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "square-basin-pedestal",
        label: "Square Basin & Pedestal",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/SQUARE.jpg",
        href: "/sanitaryware/basin-pedestal/square-basin-pedestal",
      },
      {
        id: "round-basin-pedestal",
        label: "Round Basin & Pedestal",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/ROUND.jpg",
        href: "/sanitaryware/basin-pedestal/round-basin-pedestal",
      },
    ],
  },
  "sanitaryware/douche-kits": {
    key: "sanitaryware/douche-kits",
    categorySlug: "sanitaryware",
    slug: "douche-kits",
    title: "Douche Kits",
    description: "Explore the DOUCHE KITS range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-16.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-16.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "chrome-thermostatic-douche-kit",
        label: "Chrome Thermostatic Douche Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/07/chrome.jpg",
        href: "/sanitaryware/douche-kits/chrome-thermostatic-douche-kit",
      },
      {
        id: "black-douche-with-wall-bracket-flexible-hose-and-vertical-thermostatic-valve",
        label:
          "Black Douche With Wall Bracket, Flexible Hose and Vertical Thermostatic Valve",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-16.jpg",
        href: "/sanitaryware/douche-kits/black-douche-with-wall-bracket-flexible-hose-and-vertical-thermostatic-valve",
      },
    ],
  },
  "taps/nova-taps": {
    key: "taps/nova-taps",
    categorySlug: "taps",
    slug: "nova-taps",
    title: "Nova Taps",
    description: "Explore the NOVA range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/ddvv.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "nova-mono-basin-mixer",
        label: "Nova Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/branch-back-to-wall-1-768x1024.jpg",
        href: "/taps/nova-taps/nova-mono-basin-mixer",
      },
      {
        id: "nova-bath-filler",
        label: "Nova Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2l-768x1024.jpg",
        href: "/taps/nova-taps/nova-bath-filler",
      },
      {
        id: "nova-bath-shower-mixer",
        label: "Nova Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-1-768x1024.jpg",
        href: "/taps/nova-taps/nova-bath-shower-mixer",
      },
    ],
  },
  "taps/edge-taps": {
    key: "taps/edge-taps",
    categorySlug: "taps",
    slug: "edge-taps",
    title: "Edge Taps",
    description: "Explore the EDGE range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/efdr.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-mono-basin-mixer",
        label: "Edge Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/edge-single-1.jpg",
        href: "/taps/edge-taps/edge-mono-basin-mixer",
      },
      {
        id: "edge-bath-filler",
        label: "Edge Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/edge-single-11.jpg",
        href: "/taps/edge-taps/edge-bath-filler",
      },
      {
        id: "edge-bath-shower-mixer",
        label: "Edge Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/wr-768x1024.jpg",
        href: "/taps/edge-taps/edge-bath-shower-mixer",
      },
    ],
  },
  "taps/slope-taps": {
    key: "taps/slope-taps",
    categorySlug: "taps",
    slug: "slope-taps",
    title: "Slope Taps",
    description: "Explore the SLOPE range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "slope-mono-basin-mixer",
        label: "Slope Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/12-768x1024.jpg",
        href: "/taps/slope-taps/slope-mono-basin-mixer",
      },
      {
        id: "slope-bath-filler",
        label: "Slope Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ew-768x1024.jpg",
        href: "/taps/slope-taps/slope-bath-filler",
      },
      {
        id: "slope-bath-shower-mixer",
        label: "Slope Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/23-768x1024.jpg",
        href: "/taps/slope-taps/slope-bath-shower-mixer",
      },
      {
        id: "mini-slope-mono-basin-mixer",
        label: "Slope Mini Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-9.jpg",
        href: "/taps/slope-taps/mini-slope-mono-basin-mixer",
      },
    ],
  },
  "taps/storm-taps": {
    key: "taps/storm-taps",
    categorySlug: "taps",
    slug: "storm-taps",
    title: "Storm Taps",
    description: "Explore the STORM range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/storm-ma9n-homepage.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "storm-mono-basin-mixer",
        label: "Storm Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/m-2-768x1024.jpg",
        href: "/taps/storm-taps/storm-mono-basin-mixer",
      },
      {
        id: "storm-bath-filler",
        label: "Storm Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-5-768x1024.jpg",
        href: "/taps/storm-taps/storm-bath-filler",
      },
      {
        id: "storm-bath-shower-mixer",
        label: "Storm Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-1-768x1024.jpg",
        href: "/taps/storm-taps/storm-bath-shower-mixer",
      },
      {
        id: "storm-mini-mono-basin",
        label: "Storm Mini Mono Basin",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/mini-768x1024.jpg",
        href: "/taps/storm-taps/storm-mini-mono-basin",
      },
    ],
  },
  "taps/rico-taps": {
    key: "taps/rico-taps",
    categorySlug: "taps",
    slug: "rico-taps",
    title: "Rico Taps",
    description: "Explore the RICO range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "rico-mono-basin-mixer",
        label: "Rico Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-2-768x1024.jpg",
        href: "/taps/rico-taps/rico-mono-basin-mixer",
      },
      {
        id: "rico-bath-filler",
        label: "Rico Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-6-768x1024.jpg",
        href: "/taps/rico-taps/rico-bath-filler",
      },
      {
        id: "rico-bath-shower-mixer",
        label: "Rico Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-2-768x1024.jpg",
        href: "/taps/rico-taps/rico-bath-shower-mixer",
      },
    ],
  },
  "taps/amoura-taps": {
    key: "taps/amoura-taps",
    categorySlug: "taps",
    slug: "amoura-taps",
    title: "Amoura Taps",
    description: "Explore the AMOURA range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "amoura-mono-basin-mixer",
        label: "Amoura Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-3-768x1024.jpg",
        href: "/taps/amoura-taps/amoura-mono-basin-mixer",
      },
      {
        id: "amoura-bath-filler",
        label: "Amoura Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-7-768x1024.jpg",
        href: "/taps/amoura-taps/amoura-bath-filler",
      },
      {
        id: "amoura-bath-shower-mixer",
        label: "Amoura Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-3-768x1024.jpg",
        href: "/taps/amoura-taps/amoura-bath-shower-mixer",
      },
      {
        id: "amoura-mini-mono-basin-mixer",
        label: "Amoura Mini Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/amoura-mini.jpg",
        href: "/taps/amoura-taps/amoura-mini-mono-basin-mixer",
      },
    ],
  },
  "taps/california-taps": {
    key: "taps/california-taps",
    categorySlug: "taps",
    slug: "california-taps",
    title: "California Taps",
    description: "Explore the CALIFORNIA range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-2.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "california-mono-basin-mixer",
        label: "California Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/33-768x1024.jpg",
        href: "/taps/california-taps/california-mono-basin-mixer",
      },
      {
        id: "california-bath-filler",
        label: "California Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-8-768x1024.jpg",
        href: "/taps/california-taps/california-bath-filler",
      },
      {
        id: "california-bath-shower-mixer",
        label: "California Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-4-768x1024.jpg",
        href: "/taps/california-taps/california-bath-shower-mixer",
      },
    ],
  },
  "taps/new-york-taps": {
    key: "taps/new-york-taps",
    categorySlug: "taps",
    slug: "new-york-taps",
    title: "New York Taps",
    description: "Explore the NEW YORK range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/new-yrk.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "new-york-mono-basin-mixer",
        label: "New York Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-9-768x1024.jpg",
        href: "/taps/new-york-taps/new-york-mono-basin-mixer",
      },
      {
        id: "new-york-bath-filler",
        label: "New York Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-5-768x1024.jpg",
        href: "/taps/new-york-taps/new-york-bath-filler",
      },
      {
        id: "new-york-bath-shower-mixer",
        label: "New York Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-5-768x1024.jpg",
        href: "/taps/new-york-taps/new-york-bath-shower-mixer",
      },
    ],
  },
  "taps/halo-taps": {
    key: "taps/halo-taps",
    categorySlug: "taps",
    slug: "halo-taps",
    title: "Halo Taps",
    description: "Explore the HALO range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-11.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "halo-mono-mixer",
        label: "Halo Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-4.jpg",
        href: "/taps/halo-taps/halo-mono-mixer",
      },
      {
        id: "halo-bath-filler",
        label: "Halo Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-5.jpg",
        href: "/taps/halo-taps/halo-bath-filler",
      },
      {
        id: "halo-bath-shower-mixer",
        label: "Halo Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-6.jpg",
        href: "/taps/halo-taps/halo-bath-shower-mixer",
      },
    ],
  },
  "taps/boston-taps": {
    key: "taps/boston-taps",
    categorySlug: "taps",
    slug: "boston-taps",
    title: "Boston Taps",
    description: "Explore the BOSTON range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/m-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "boston-mono-basin-mixer",
        label: "Boston Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-11-768x1024.jpg",
        href: "/taps/boston-taps/boston-mono-basin-mixer",
      },
      {
        id: "boston-bath-filler",
        label: "Boston Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-7-768x1024.jpg",
        href: "/taps/boston-taps/boston-bath-filler",
      },
      {
        id: "boston-bath-shower-mixer",
        label: "Boston Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/frfr.jpg",
        href: "/taps/boston-taps/boston-bath-shower-mixer",
      },
    ],
  },
  "taps/amethyst-taps": {
    key: "taps/amethyst-taps",
    categorySlug: "taps",
    slug: "amethyst-taps",
    title: "Amethyst Taps",
    description: "Explore the AMETHYST range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "amethyst-mono-basin-mixer",
        label: "Amethyst Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-12-768x1024.jpg",
        href: "/taps/amethyst-taps/amethyst-mono-basin-mixer",
      },
      {
        id: "amethyst-bath-filler",
        label: "Amethyst Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-8-768x1024.jpg",
        href: "/taps/amethyst-taps/amethyst-bath-filler",
      },
      {
        id: "amethyst-bath-shower-mixer",
        label: "Amethyst Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/01/amthyst-shwer.jpg",
        href: "/taps/amethyst-taps/amethyst-bath-shower-mixer",
      },
    ],
  },
  "taps/niccolo-taps": {
    key: "taps/niccolo-taps",
    categorySlug: "taps",
    slug: "niccolo-taps",
    title: "Niccolo Taps",
    description: "Explore the NICCOLO range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-5.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "niccolo-basin-mixer",
        label: "Niccolo Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-13-768x1024.jpg",
        href: "/taps/niccolo-taps/niccolo-basin-mixer",
      },
      {
        id: "niccolo-bath-filler",
        label: "Niccolo Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-9-768x1024.jpg",
        href: "/taps/niccolo-taps/niccolo-bath-filler",
      },
      {
        id: "niccolo-bath-shower-mixer",
        label: "Niccolo Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/2-9-768x1024-1.jpg",
        href: "/taps/niccolo-taps/niccolo-bath-shower-mixer",
      },
    ],
  },
  "taps/block-taps": {
    key: "taps/block-taps",
    categorySlug: "taps",
    slug: "block-taps",
    title: "Block Taps",
    description: "Explore the BLOCK range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-6.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "block-mono-basin-mixer",
        label: "Block Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-10-768x1024.jpg",
        href: "/taps/block-taps/block-mono-basin-mixer",
      },
      {
        id: "block-bath-filler",
        label: "Block Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-14-768x1024.jpg",
        href: "/taps/block-taps/block-bath-filler",
      },
      {
        id: "block-bath-shower-mixer",
        label: "Block Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-10-768x1024.jpg",
        href: "/taps/block-taps/block-bath-shower-mixer",
      },
      {
        id: "block-mini-basin-mixer",
        label: "Block Mini Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/block-mini.jpg",
        href: "/taps/block-taps/block-mini-basin-mixer",
      },
    ],
  },
  "taps/branch-taps": {
    key: "taps/branch-taps",
    categorySlug: "taps",
    slug: "branch-taps",
    title: "Branch Taps",
    description: "Explore the BRANCH range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/s-7.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "branch-mono-basin-mixer",
        label: "Branch Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-15-768x1024.jpg",
        href: "/taps/branch-taps/branch-mono-basin-mixer",
      },
      {
        id: "branch-bath-filler",
        label: "Branch Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11-768x1024.jpg",
        href: "/taps/branch-taps/branch-bath-filler",
      },
      {
        id: "branch-bath-shower-mixer",
        label: "Branch Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-11-768x1024.jpg",
        href: "/taps/branch-taps/branch-bath-shower-mixer",
      },
    ],
  },
  "taps/aries-taps": {
    key: "taps/aries-taps",
    categorySlug: "taps",
    slug: "aries-taps",
    title: "Aries Taps",
    description: "Explore the ARIES range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar-main.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "aries-mono-basin-mixer",
        label: "Aries Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar1.jpg",
        href: "/taps/aries-taps/aries-mono-basin-mixer",
      },
      {
        id: "aries-bath-filler",
        label: "Aries Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar-3.jpg",
        href: "/taps/aries-taps/aries-bath-filler",
      },
      {
        id: "aries-bath-shower-mixer",
        label: "Aries Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar2.jpg",
        href: "/taps/aries-taps/aries-bath-shower-mixer",
      },
    ],
  },
  "taps/kyoto-taps": {
    key: "taps/kyoto-taps",
    categorySlug: "taps",
    slug: "kyoto-taps",
    title: "Kyoto Taps",
    description: "Explore the KYOTO range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-21.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "kyoto-black-basin-monobloc-mixer",
        label: "Kyoto Black Basin Monobloc Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-12-768x1024.jpg",
        href: "/taps/kyoto-taps/kyoto-black-basin-monobloc-mixer",
      },
      {
        id: "kyoto-black-bath-filler",
        label: "Kyoto Black Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-1-768x1024.jpg",
        href: "/taps/kyoto-taps/kyoto-black-bath-filler",
      },
      {
        id: "kyoto-black-bath-shower-mixer",
        label: "Kyoto Black Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-3-768x1024.jpg",
        href: "/taps/kyoto-taps/kyoto-black-bath-shower-mixer",
      },
      {
        id: "kyoto-chrome-square",
        label: "Kyoto Chrome Square",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-17-768x1024.jpg",
        href: "/taps/kyoto-taps/kyoto-chrome-square",
      },
      {
        id: "kyoto-black-square",
        label: "Kyoto Black Square",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-13-768x1024.jpg",
        href: "/taps/kyoto-taps/kyoto-black-square",
      },
    ],
  },
  "taps/laton-taps": {
    key: "taps/laton-taps",
    categorySlug: "taps",
    slug: "laton-taps",
    title: "Laton Taps",
    description: "Explore the LATON range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-22.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "laton-mono-basin-mixer",
        label: "Laton Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Mono-Basin-Mixer.jpg",
        href: "/taps/laton-taps/laton-mono-basin-mixer",
      },
      {
        id: "laton-bath-filler",
        label: "Laton Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Bath-Filler.jpg",
        href: "/taps/laton-taps/laton-bath-filler",
      },
      {
        id: "laton-bath-shower-mixer",
        label: "Laton Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Bath-Shower-Mixer.jpg",
        href: "/taps/laton-taps/laton-bath-shower-mixer",
      },
    ],
  },
  "taps/oro-taps": {
    key: "taps/oro-taps",
    categorySlug: "taps",
    slug: "oro-taps",
    title: "Oro Taps",
    description: "Explore the ORO range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-23.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "oro-mono-basin-mixer",
        label: "Oro Mono Basin Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Mono-Basin-Mixer.jpg",
        href: "/taps/oro-taps/oro-mono-basin-mixer",
      },
      {
        id: "oro-bath-filler",
        label: "Oro Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Bath-Filler.jpg",
        href: "/taps/oro-taps/oro-bath-filler",
      },
      {
        id: "oro-bath-shower-mixer",
        label: "Oro Bath Shower Mixer",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Bath-Shower-Mixer.jpg",
        href: "/taps/oro-taps/oro-bath-shower-mixer",
      },
    ],
  },
  "taps/freestanding-bath-taps": {
    key: "taps/freestanding-bath-taps",
    categorySlug: "taps",
    slug: "freestanding-bath-taps",
    title: "Freestanding Bath Taps",
    description:
      "A unique way to add a stunning focal point to your bathroom, stand alone taps can be installed next to baths and basins.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/bb-2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-4.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "kyoto-taps",
        label: "KYOTO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-3.jpg",
        href: "/taps/freestanding-bath-taps/kyoto-taps",
      },
      {
        id: "tokyo-taps",
        label: "TOKYO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-4.jpg",
        href: "/taps/freestanding-bath-taps/tokyo-taps",
      },
    ],
  },
  "showers/bliss-twin-head-shower-with-bath-filler": {
    key: "showers/bliss-twin-head-shower-with-bath-filler",
    categorySlug: "showers",
    slug: "bliss-twin-head-shower-with-bath-filler",
    title: "Bliss Twin Head Shower With Bath Filler",
    description: "Explore the BLISS range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bath-filler.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/bliss.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "soho-twin-round-shower-head",
        label: "Soho Twin Round Shower Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20-300x300.jpg",
        href: "/showers/bliss-twin-head-shower-with-bath-filler/soho-twin-round-shower-head",
      },
      {
        id: "soho-plus-round-shower-head",
        label: "Soho Plus Round Shower Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome-300x300.jpg",
        href: "/showers/bliss-twin-head-shower-with-bath-filler/soho-plus-round-shower-head",
      },
    ],
  },
  "showers/hampton-twin-head-shower-with-bath-filler": {
    key: "showers/hampton-twin-head-shower-with-bath-filler",
    categorySlug: "showers",
    slug: "hampton-twin-head-shower-with-bath-filler",
    title: "Hampton Twin Head Shower With Bath Filler",
    description: "Explore the HAMPTON range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/p.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Hampton.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "soho-twin-round-shower-head",
        label: "Soho Twin Round Shower Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20-300x300.jpg",
        href: "/showers/hampton-twin-head-shower-with-bath-filler/soho-twin-round-shower-head",
      },
      {
        id: "soho-plus-round-shower-head",
        label: "Soho Plus Round Shower Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome-300x300.jpg",
        href: "/showers/hampton-twin-head-shower-with-bath-filler/soho-plus-round-shower-head",
      },
    ],
  },
  "showers/matrix-showers": {
    key: "showers/matrix-showers",
    categorySlug: "showers",
    slug: "matrix-showers",
    title: "Matrix Showers",
    description: "Explore the MATRIX range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-4.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/02/MATRIX.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "matrix-plus-square-shower-head",
        label: "Matrix Plus Square Shower Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/m2-768x1024.jpg",
        href: "/showers/matrix-showers/matrix-plus-square-shower-head",
      },
    ],
  },
  "showers/nova-showers": {
    key: "showers/nova-showers",
    categorySlug: "showers",
    slug: "nova-showers",
    title: "Nova Showers",
    description: "Explore the NOVA range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-8.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "nova-showers",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-13.jpg",
        href: "/showers/nova-showers/nova-showers",
      },
    ],
  },
  "showers/edge-showers": {
    key: "showers/edge-showers",
    categorySlug: "showers",
    slug: "edge-showers",
    title: "Edge Showers",
    description: "Explore the EDGE range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-9.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-showers",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome-2.jpg",
        href: "/showers/edge-showers/edge-showers",
      },
    ],
  },
  "showers/halo-shower": {
    key: "showers/halo-shower",
    categorySlug: "showers",
    slug: "halo-shower",
    title: "Halo Shower",
    description: "Explore the HALO range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-10.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "halo-shower",
        label: "HALO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome.jpg",
        href: "/showers/halo-shower/halo-shower",
      },
    ],
  },
  "showers/soho-plus-round-shower-head": {
    key: "showers/soho-plus-round-shower-head",
    categorySlug: "showers",
    slug: "soho-plus-round-shower-head",
    title: "Soho Plus Round Shower Head",
    description: "Explore the SOHO range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-20.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "soho-twin-round-shower-head",
        label: "Soho Twin Round Shower Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20-300x300.jpg",
        href: "/showers/soho-plus-round-shower-head/soho-twin-round-shower-head",
      },
      {
        id: "soho-black-round-twin-shower-head-anthracite",
        label: "Soho Black Round Twin Shower Head Anthracite",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-16-300x300.jpg",
        href: "/showers/soho-plus-round-shower-head/soho-black-round-twin-shower-head-anthracite",
      },
    ],
  },
  "showers/showers-accessories": {
    key: "showers/showers-accessories",
    categorySlug: "showers",
    slug: "showers-accessories",
    title: "Showers Accessories",
    description:
      "Explore the Shower Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/jp-768x1024.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/jp-768x1024.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "identity-dual-control-shower-valve-1-outlet",
        label: "Identity Dual Control Shower Valve (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-21-768x1024.jpg",
        href: "/showers/showers-accessories/identity-dual-control-shower-valve-1-outlet",
      },
      {
        id: "identity-round-push-shower-valve-2-outlet",
        label: "Identity Round Push Shower Valve (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/8-768x1024.jpg",
        href: "/showers/showers-accessories/identity-round-push-shower-valve-2-outlet",
      },
      {
        id: "block-push-shower-valve-square-1-outlet",
        label: "Block Push Shower Valve Square (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-3-768x1024.jpg",
        href: "/showers/showers-accessories/block-push-shower-valve-square-1-outlet",
      },
      {
        id: "block-push-shower-valve-square-2-outlet",
        label: "Block Push Shower Valve Square (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/7-1-768x1024.jpg",
        href: "/showers/showers-accessories/block-push-shower-valve-square-2-outlet",
      },
      {
        id: "black-dual-control-round-shower-valve-1-outlet",
        label: "Black Dual Control Round Shower Valve (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Round.jpg",
        href: "/showers/showers-accessories/black-dual-control-round-shower-valve-1-outlet",
      },
      {
        id: "black-triple-control-round-shower-valve-2-outlet",
        label: "Black Triple Control Round Shower Valve (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Round.jpg",
        href: "/showers/showers-accessories/black-triple-control-round-shower-valve-2-outlet",
      },
      {
        id: "black-dual-control-square-shower-valve-1-outlet",
        label: "Black Dual Control Square Shower Valve (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Square.jpg",
        href: "/showers/showers-accessories/black-dual-control-square-shower-valve-1-outlet",
      },
      {
        id: "black-triple-control-square-shower-valve-2-outlet",
        label: "Black Triple Control Square Shower Valve (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Square.jpg",
        href: "/showers/showers-accessories/black-triple-control-square-shower-valve-2-outlet",
      },
      {
        id: "300mm-round-fixed-head",
        label: "300mm Round Fixed Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/r-2-768x1024.jpg",
        href: "/showers/showers-accessories/300mm-round-fixed-head",
      },
      {
        id: "300mm-square-fixed-head",
        label: "300mm Square Fixed Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-768x1024.jpg",
        href: "/showers/showers-accessories/300mm-square-fixed-head",
      },
      {
        id: "identity-round-arm",
        label: "Identity Ceiling Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/round-shower-arm-768x1024.jpg",
        href: "/showers/showers-accessories/identity-round-arm",
      },
      {
        id: "block-ceiling-arm",
        label: "Block Ceiling Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/yj-768x1024.jpg",
        href: "/showers/showers-accessories/block-ceiling-arm",
      },
      {
        id: "ceiling-arm-round",
        label: "Ceiling Arm Round",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/vi-768x1024.jpg",
        href: "/showers/showers-accessories/ceiling-arm-round",
      },
      {
        id: "ceiling-arm-square",
        label: "Ceiling Arm Square",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/g-768x1024.jpg",
        href: "/showers/showers-accessories/ceiling-arm-square",
      },
      {
        id: "identity-sliding-rail-kit",
        label: "Identity Sliding Rail Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/jp-768x1024.jpg",
        href: "/showers/showers-accessories/identity-sliding-rail-kit",
      },
      {
        id: "square-sliding-rail-kit",
        label: "Square Sliding Rail Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/syeh-768x1024.jpg",
        href: "/showers/showers-accessories/square-sliding-rail-kit",
      },
      {
        id: "identity-wall-outlet-and-holder",
        label: "Identity Wall Outlet and Holder",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/thr-768x1024.jpg",
        href: "/showers/showers-accessories/identity-wall-outlet-and-holder",
      },
      {
        id: "block-wall-outlet-and-holder",
        label: "Block Wall Outlet and Holder",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/j-768x1024.jpg",
        href: "/showers/showers-accessories/block-wall-outlet-and-holder",
      },
      {
        id: "chrome-round-elbow-outlet",
        label: "Chrome Round Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/cu-768x1024.jpg",
        href: "/showers/showers-accessories/chrome-round-elbow-outlet",
      },
      {
        id: "chrome-block-elbow-outlet",
        label: "Chrome Block Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/tt-768x1024.jpg",
        href: "/showers/showers-accessories/chrome-block-elbow-outlet",
      },
      {
        id: "easy-fix-kit",
        label: "Easy Fix Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/d-3-768x1024.jpg",
        href: "/showers/showers-accessories/easy-fix-kit",
      },
      {
        id: "round-fixed-head",
        label: "Round Fixed Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/rt-1-768x1024.jpg",
        href: "/showers/showers-accessories/round-fixed-head",
      },
      {
        id: "fixed-square-head",
        label: "Fixed Square Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-768x1024.jpg",
        href: "/showers/showers-accessories/fixed-square-head",
      },
      {
        id: "black-round-arm",
        label: "Black Round Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewf-768x1024.jpg",
        href: "/showers/showers-accessories/black-round-arm",
      },
      {
        id: "black-square-arm",
        label: "Black Square Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/t-768x1024.jpg",
        href: "/showers/showers-accessories/black-square-arm",
      },
      {
        id: "ceiling-arm-round-black",
        label: "Ceiling Arm Round Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-1-768x1024.jpg",
        href: "/showers/showers-accessories/ceiling-arm-round-black",
      },
      {
        id: "ceiling-arm-square-black",
        label: "Ceiling Arm Square Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewq-768x1024.jpg",
        href: "/showers/showers-accessories/ceiling-arm-square-black",
      },
      {
        id: "round-sliding-rail-kit-black",
        label: "Round Sliding Rail Kit Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/rg-768x1024.jpg",
        href: "/showers/showers-accessories/round-sliding-rail-kit-black",
      },
      {
        id: "square-sliding-rail-kit-black",
        label: "Square Sliding Rail Kit Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/44-768x1024.jpg",
        href: "/showers/showers-accessories/square-sliding-rail-kit-black",
      },
      {
        id: "round-wall-outlet-black",
        label: "Round Wall Outlet Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ey-768x1024.jpg",
        href: "/showers/showers-accessories/round-wall-outlet-black",
      },
      {
        id: "square-wall-outlet-black",
        label: "Square Wall Outlet Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/erw-768x1024.jpg",
        href: "/showers/showers-accessories/square-wall-outlet-black",
      },
      {
        id: "black-round-elbow-outlet",
        label: "Black Round Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/55-768x1024.jpg",
        href: "/showers/showers-accessories/black-round-elbow-outlet",
      },
      {
        id: "black-square-elbow-outlet",
        label: "Black Square Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/e-1-768x1024.jpg",
        href: "/showers/showers-accessories/black-square-elbow-outlet",
      },
    ],
  },
  "baths/edge-baths": {
    key: "baths/edge-baths",
    categorySlug: "baths",
    slug: "edge-baths",
    title: "Edge Baths",
    description: "Explore the EDGE range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-4.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/500x500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-single-ended-bath",
        label: "Edge Single Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-768x1024.jpg",
        href: "/baths/edge-baths/edge-single-ended-bath",
      },
      {
        id: "edge-double-ended-bath",
        label: "Edge Double Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-768x1024.jpg",
        href: "/baths/edge-baths/edge-double-ended-bath",
      },
    ],
  },
  "baths/kyoto-freestanding-bath": {
    key: "baths/kyoto-freestanding-bath",
    categorySlug: "baths",
    slug: "kyoto-freestanding-bath",
    title: "Kyoto Freestanding Bath",
    description: "Explore the KYOTO range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-25.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "tokyo-freestanding-bath",
        label: "Tokyo Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
        href: "/baths/kyoto-freestanding-bath/tokyo-freestanding-bath",
      },
      {
        id: "edge-single-ended-bath",
        label: "Edge Single Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
        href: "/baths/kyoto-freestanding-bath/edge-single-ended-bath",
      },
    ],
  },
  "baths/sapporo-freestanding-bath": {
    key: "baths/sapporo-freestanding-bath",
    categorySlug: "baths",
    slug: "sapporo-freestanding-bath",
    title: "Sapporo Freestanding Bath",
    description: "Explore the SAPPORO range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/img-sop.png",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/500-so.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "tokyo-freestanding-bath",
        label: "Tokyo Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
        href: "/baths/sapporo-freestanding-bath/tokyo-freestanding-bath",
      },
      {
        id: "edge-single-ended-bath",
        label: "Edge Single Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
        href: "/baths/sapporo-freestanding-bath/edge-single-ended-bath",
      },
    ],
  },
  "baths/tokyo-freestanding-bath": {
    key: "baths/tokyo-freestanding-bath",
    categorySlug: "baths",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description: "Explore the TOKYO range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-single-ended-bath",
        label: "Edge Single Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
        href: "/baths/tokyo-freestanding-bath/edge-single-ended-bath",
      },
      {
        id: "edge-double-ended-bath",
        label: "Edge Double Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
        href: "/baths/tokyo-freestanding-bath/edge-double-ended-bath",
      },
    ],
  },
  "baths/single-ended-intro-bath": {
    key: "baths/single-ended-intro-bath",
    categorySlug: "baths",
    slug: "single-ended-intro-bath",
    title: "Single Ended Intro Bath",
    description: "Explore the INTRO range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/INTRO-NEW.png",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/INTRO-500.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "tokyo-freestanding-bath",
        label: "Tokyo Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
        href: "/baths/single-ended-intro-bath/tokyo-freestanding-bath",
      },
      {
        id: "edge-double-ended-bath",
        label: "Edge Double Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
        href: "/baths/single-ended-intro-bath/edge-double-ended-bath",
      },
    ],
  },
  "baths/nova-double-ended-bath": {
    key: "baths/nova-double-ended-bath",
    categorySlug: "baths",
    slug: "nova-double-ended-bath",
    title: "Nova Double Ended Bath",
    description: "Explore the NOVA range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-24.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/Nova.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "branch-bath-filler",
        label: "Branch Bath Filler",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11-300x300.jpg",
        href: "/baths/nova-double-ended-bath/branch-bath-filler",
      },
      {
        id: "kyoto-freestanding-bath",
        label: "Kyoto Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-25-300x300.jpg",
        href: "/baths/nova-double-ended-bath/kyoto-freestanding-bath",
      },
    ],
  },
  "baths/l-shape-shower-bath": {
    key: "baths/l-shape-shower-bath",
    categorySlug: "baths",
    slug: "l-shape-shower-bath",
    title: "L-Shape Shower Bath",
    description: "Explore the L-SHAPE range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-26.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/l.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "tokyo-freestanding-bath",
        label: "Tokyo Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
        href: "/baths/l-shape-shower-bath/tokyo-freestanding-bath",
      },
      {
        id: "nova-double-ended-bath",
        label: "Nova Double Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-24-300x300.jpg",
        href: "/baths/l-shape-shower-bath/nova-double-ended-bath",
      },
    ],
  },
  "baths/key-hole-bath": {
    key: "baths/key-hole-bath",
    categorySlug: "baths",
    slug: "key-hole-bath",
    title: "Key Hole Bath",
    description: "Explore the KEY HOLE range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-16.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "key-hole-bath",
        label: "KEY HOLE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/KEY-HOLE.jpg",
        href: "/baths/key-hole-bath/key-hole-bath",
      },
    ],
  },
  "baths/twin-grip-bath": {
    key: "baths/twin-grip-bath",
    categorySlug: "baths",
    slug: "twin-grip-bath",
    title: "Twin Grip Bath",
    description: "Explore the TWIN GRIP range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-17.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "twin-grip-bath",
        label: "TWIN GRIP",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/TWIN-GRIP.jpg",
        href: "/baths/twin-grip-bath/twin-grip-bath",
      },
    ],
  },
  "baths/bath-panels": {
    key: "baths/bath-panels",
    categorySlug: "baths",
    slug: "bath-panels",
    title: "Bath Panels",
    description: "Explore the BATH PANELS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-18.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "bath-panels",
        label: "BATH PANELS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/PANELS.jpg",
        href: "/baths/bath-panels/bath-panels",
      },
    ],
  },
  "bath-screens/intro-round-bath-screen": {
    key: "bath-screens/intro-round-bath-screen",
    categorySlug: "bath-screens",
    slug: "intro-round-bath-screen",
    title: "Intro Round Bath Screen",
    description:
      "Explore the ROUND SCREEN range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-1.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/TUMBNAIL.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "intro-black-grid-bath-screen",
        label: "Intro Black Grid Bath Screen",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1-300x300.jpg",
        href: "/bath-screens/intro-round-bath-screen/intro-black-grid-bath-screen",
      },
      {
        id: "intro-black-square-bath-screen",
        label: "Intro Black Square Bath Screen",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1-300x300.jpg",
        href: "/bath-screens/intro-round-bath-screen/intro-black-square-bath-screen",
      },
    ],
  },
  "bath-screens/intro-square-bath-screen": {
    key: "bath-screens/intro-square-bath-screen",
    categorySlug: "bath-screens",
    slug: "intro-square-bath-screen",
    title: "Intro Square Bath Screen",
    description:
      "Explore the SQUARE SCREEN range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/TUMBNAIL-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "intro-black-grid-bath-screen",
        label: "Intro Black Grid Bath Screen",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1-300x300.jpg",
        href: "/bath-screens/intro-square-bath-screen/intro-black-grid-bath-screen",
      },
      {
        id: "intro-black-square-bath-screen",
        label: "Intro Black Square Bath Screen",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1-300x300.jpg",
        href: "/bath-screens/intro-square-bath-screen/intro-black-square-bath-screen",
      },
    ],
  },
  "bath-screens/intro-black-grid-bath-screen": {
    key: "bath-screens/intro-black-grid-bath-screen",
    categorySlug: "bath-screens",
    slug: "intro-black-grid-bath-screen",
    title: "Intro Black Grid Bath Screen",
    description: "Explore the GRID SCREEN range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-4.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "intro-round-bath-screen",
        label: "Intro Round Bath Screen",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-1-300x300.jpg",
        href: "/bath-screens/intro-black-grid-bath-screen/intro-round-bath-screen",
      },
      {
        id: "intro-square-bath-screen",
        label: "Intro Square Bath Screen",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-2-300x300.jpg",
        href: "/bath-screens/intro-black-grid-bath-screen/intro-square-bath-screen",
      },
    ],
  },
  "shower-enclosures/double-door-quadrant-6mm-shower-enclosures": {
    key: "shower-enclosures/double-door-quadrant-6mm-shower-enclosures",
    categorySlug: "shower-enclosures",
    slug: "double-door-quadrant-6mm-shower-enclosures",
    title: "Double Door Quadrant 6mm Shower Enclosures",
    description:
      "Explore the DOUBLE DOOR QUADRANT range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-2.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "double-door-quadrant-6mm-shower-enclosures",
        label: "DOUBLE DOOR QUADRANT",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-DOUBLE-DOOR.jpg",
        href: "/shower-enclosures/double-door-quadrant-6mm-shower-enclosures/double-door-quadrant-6mm-shower-enclosures",
      },
    ],
  },
  "shower-enclosures/single-door-quadrant-6mm-shower-enclosures": {
    key: "shower-enclosures/single-door-quadrant-6mm-shower-enclosures",
    categorySlug: "shower-enclosures",
    slug: "single-door-quadrant-6mm-shower-enclosures",
    title: "Single Door Quadrant 6mm Shower Enclosures",
    description:
      "Explore the SINGLE DOOR QUADRANT range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-3.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "single-door-quadrant-6mm-shower-enclosures",
        label: "SINGLE DOOR QUADRANT",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/CHROME-SINGLE-DOOR.jpg",
        href: "/shower-enclosures/single-door-quadrant-6mm-shower-enclosures/single-door-quadrant-6mm-shower-enclosures",
      },
    ],
  },
  "shower-enclosures/pivot-door-6mm-shower-enclosures-with-side-panel": {
    key: "shower-enclosures/pivot-door-6mm-shower-enclosures-with-side-panel",
    categorySlug: "shower-enclosures",
    slug: "pivot-door-6mm-shower-enclosures-with-side-panel",
    title: "Pivot Door 6mm Shower Enclosures",
    description: "Explore the PIVOT DOOR range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-4.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "pivot-door-6mm-shower-enclosures-with-side-panel",
        label: "PIVOT DOOR",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-PIVOT-DOOR.jpg",
        href: "/shower-enclosures/pivot-door-6mm-shower-enclosures-with-side-panel/pivot-door-6mm-shower-enclosures-with-side-panel",
      },
    ],
  },
  "shower-enclosures/bi-fold-door-6mm-shower-enclosures-with-side-panel": {
    key: "shower-enclosures/bi-fold-door-6mm-shower-enclosures-with-side-panel",
    categorySlug: "shower-enclosures",
    slug: "bi-fold-door-6mm-shower-enclosures-with-side-panel",
    title: "Bi-Fold Door 6mm Shower Enclosures",
    description:
      "Explore the BI-FOLD DOOR range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-5.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "bi-fold-door-6mm-shower-enclosures-with-side-panel",
        label: "BI-FOLD DOOR",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-BI-FOLD-DOOR.jpg",
        href: "/shower-enclosures/bi-fold-door-6mm-shower-enclosures-with-side-panel/bi-fold-door-6mm-shower-enclosures-with-side-panel",
      },
    ],
  },
  "shower-enclosures/sliding-door-6mm-shower-enclosures-with-side-panel": {
    key: "shower-enclosures/sliding-door-6mm-shower-enclosures-with-side-panel",
    categorySlug: "shower-enclosures",
    slug: "sliding-door-6mm-shower-enclosures-with-side-panel",
    title: "Sliding Door 6mm Shower Enclosures",
    description:
      "Explore the SLIDING DOOR range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-6.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "sliding-door-6mm-shower-enclosures-with-side-panel",
        label: "SLIDING DOOR",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-SLIDING-DOOR.jpg",
        href: "/shower-enclosures/sliding-door-6mm-shower-enclosures-with-side-panel/sliding-door-6mm-shower-enclosures-with-side-panel",
      },
    ],
  },
  "shower-enclosures/enclosure-side-panel": {
    key: "shower-enclosures/enclosure-side-panel",
    categorySlug: "shower-enclosures",
    slug: "enclosure-side-panel",
    title: "Enclosure Side Panel",
    description: "Explore the SIDE PANEL range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-7.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "enclosure-side-panel",
        label: "SIDE PANEL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/CHROME-SIDE-PANEL.jpg",
        href: "/shower-enclosures/enclosure-side-panel/enclosure-side-panel",
      },
    ],
  },
  "shower-enclosures/niche": {
    key: "shower-enclosures/niche",
    categorySlug: "shower-enclosures",
    slug: "niche",
    title: "Niche",
    description: "Explore the NICHE range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-24.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-24.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "niche-with-shelf",
        label: "Niche with shelf",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
        href: "/shower-enclosures/niche/niche-with-shelf",
      },
      {
        id: "niche-with-led",
        label: "Niche with LED",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600.jpg",
        href: "/shower-enclosures/niche/niche-with-led",
      },
    ],
  },
  "wetroom-screens/8mm-wetroom-panels": {
    key: "wetroom-screens/8mm-wetroom-panels",
    categorySlug: "wetroom-screens",
    slug: "8mm-wetroom-panels",
    title: "8mm Wetroom Panels",
    description:
      "Explore the WETROOM PANELS range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/WP.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "8mm-wetroom-panels",
        label: "WETROOM PANELS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome2.jpg",
        href: "/wetroom-screens/8mm-wetroom-panels/8mm-wetroom-panels",
      },
    ],
  },
  "wetroom-screens/8mm-black-grid-wetroom-panel": {
    key: "wetroom-screens/8mm-black-grid-wetroom-panel",
    categorySlug: "wetroom-screens",
    slug: "8mm-black-grid-wetroom-panel",
    title: "8mm Black Grid Wetroom Panel",
    description:
      "Explore the GRID WETROOM PANEL range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/GRSQ.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "8mm-black-grid-wetroom-panel",
        label: "GRID WETROOM PANEL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/GR1.png",
        href: "/wetroom-screens/8mm-black-grid-wetroom-panel/8mm-black-grid-wetroom-panel",
      },
    ],
  },
  "wetroom-screens/arched-wetroom-screen": {
    key: "wetroom-screens/arched-wetroom-screen",
    categorySlug: "wetroom-screens",
    slug: "arched-wetroom-screen",
    title: "Arched Wetroom Screen",
    description:
      "Explore the ARCHED WETROOM PANEL range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-14.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "arched-wetroom-screen",
        label: "ARCHED WETROOM PANEL",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome-14.jpg",
        href: "/wetroom-screens/arched-wetroom-screen/arched-wetroom-screen",
      },
    ],
  },
  "wetroom-screens/wetroom-panel-shelf": {
    key: "wetroom-screens/wetroom-panel-shelf",
    categorySlug: "wetroom-screens",
    slug: "wetroom-panel-shelf",
    title: "Wetroom Panel Shelf",
    description:
      "Explore the WETROOM PANEL SHELF range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-15.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wetroom-panel-shelf",
        label: "WETROOM PANEL SHELF",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-23.jpg",
        href: "/wetroom-screens/wetroom-panel-shelf/wetroom-panel-shelf",
      },
    ],
  },
  "wetroom-screens/wetroom-kits": {
    key: "wetroom-screens/wetroom-kits",
    categorySlug: "wetroom-screens",
    slug: "wetroom-kits",
    title: "Wetroom Kits",
    description:
      "Explore the WETROOM KITS range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "tokyo-freestanding-bath",
        label: "Tokyo Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
        href: "/wetroom-screens/wetroom-kits/tokyo-freestanding-bath",
      },
      {
        id: "edge-double-ended-bath",
        label: "Edge Double Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
        href: "/wetroom-screens/wetroom-kits/edge-double-ended-bath",
      },
    ],
  },
  "shower-trays/quadrant-shower-trays": {
    key: "shower-trays/quadrant-shower-trays",
    categorySlug: "shower-trays",
    slug: "quadrant-shower-trays",
    title: "Quadrant Shower Trays",
    description:
      "Explore the QUADRANT SHOWER TRAYS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Untitled-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "quadrant-shower-trays",
        label: "QUADRANT SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-28.jpg",
        href: "/shower-trays/quadrant-shower-trays/quadrant-shower-trays",
      },
    ],
  },
  "shower-trays/rectangular-shower-trays": {
    key: "shower-trays/rectangular-shower-trays",
    categorySlug: "shower-trays",
    slug: "rectangular-shower-trays",
    title: "Rectangular Shower Trays",
    description:
      "Explore the RECTANGULAR SHOWER TRAYS range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/SQ-6.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "rectangular-shower-trays",
        label: "RECTANGULAR SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-21.jpg",
        href: "/shower-trays/rectangular-shower-trays/rectangular-shower-trays",
      },
    ],
  },
  "shower-trays/square-shower-trays": {
    key: "shower-trays/square-shower-trays",
    categorySlug: "shower-trays",
    slug: "square-shower-trays",
    title: "Square Shower Trays",
    description:
      "Explore the SQUARE SHOWER TRAYS range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/SS.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "square-shower-trays",
        label: "SQUARE SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/SQ-5.jpg",
        href: "/shower-trays/square-shower-trays/square-shower-trays",
      },
    ],
  },
  "shower-trays/slate-quadrant-shower-tray": {
    key: "shower-trays/slate-quadrant-shower-tray",
    categorySlug: "shower-trays",
    slug: "slate-quadrant-shower-tray",
    title: "Slate Quadrant Shower Tray",
    description:
      "Explore the SLATE QUADRANT SHOWER TRAYS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-29.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "slate-quadrant-shower-tray",
        label: "SLATE QUADRANT SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-14.jpg",
        href: "/shower-trays/slate-quadrant-shower-tray/slate-quadrant-shower-tray",
      },
    ],
  },
  "shower-trays/rectangular-slate-shower-tray": {
    key: "shower-trays/rectangular-slate-shower-tray",
    categorySlug: "shower-trays",
    slug: "rectangular-slate-shower-tray",
    title: "Rectangular Slate Shower Tray",
    description:
      "Explore the SLATE RECTANGULAR SHOWER TRAYS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-30.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "rectangular-slate-shower-tray",
        label: "SLATE RECTANGULAR SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-16.jpg",
        href: "/shower-trays/rectangular-slate-shower-tray/rectangular-slate-shower-tray",
      },
    ],
  },
  "shower-trays/slate-square-shower-tray": {
    key: "shower-trays/slate-square-shower-tray",
    categorySlug: "shower-trays",
    slug: "slate-square-shower-tray",
    title: "Slate Square Shower Tray",
    description:
      "Explore the SLATE SQUARE SHOWER TRAYS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-31.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "slate-square-shower-tray",
        label: "SLATE SQUARE SHOWER TRAYS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-15.jpg",
        href: "/shower-trays/slate-square-shower-tray/slate-square-shower-tray",
      },
    ],
  },
  "shower-trays/easy-plumb-kits": {
    key: "shower-trays/easy-plumb-kits",
    categorySlug: "shower-trays",
    slug: "easy-plumb-kits",
    title: "Easy Plumb Kits",
    description:
      "Explore the EASY PLUMB KITS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-19.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "easy-plumb-kits",
        label: "EASY PLUMB KITS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/For-Square-Rectangle-Trays.jpg",
        href: "/shower-trays/easy-plumb-kits/easy-plumb-kits",
      },
    ],
  },
  "shower-trays/enclosures-tray-accessories": {
    key: "shower-trays/enclosures-tray-accessories",
    categorySlug: "shower-trays",
    slug: "enclosures-tray-accessories",
    title: "Enclosures Tray Accessories",
    description:
      "Explore the Trays Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-copy.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-copy.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "90mm-fast-flow-waste-black",
        label: "90mm Fast Flow Waste Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-3-768x1024.jpg",
        href: "/shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-black",
      },
      {
        id: "90mm-fast-flow-waste-chrome",
        label: "90mm Fast Flow Waste Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/222-768x1024.jpg",
        href: "/shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-chrome",
      },
      {
        id: "90mm-fast-flow-waste-brushed-brass",
        label: "90mm Fast Flow Waste Brushed Brass",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-6.jpg",
        href: "/shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-brushed-brass",
      },
      {
        id: "shower-waste-for-slate-trays",
        label: "90mm Fast Flow Waste (For slate trays)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/04/slate-waste-2.jpg",
        href: "/shower-trays/enclosures-tray-accessories/shower-waste-for-slate-trays",
      },
    ],
  },
  "shower-trays/wetroom-kits": {
    key: "shower-trays/wetroom-kits",
    categorySlug: "shower-trays",
    slug: "wetroom-kits",
    title: "Wetroom Kits",
    description:
      "Explore the WETROOM KITS range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/Untitled-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "tokyo-freestanding-bath",
        label: "Tokyo Freestanding Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
        href: "/shower-trays/wetroom-kits/tokyo-freestanding-bath",
      },
      {
        id: "edge-double-ended-bath",
        label: "Edge Double Ended Bath",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
        href: "/shower-trays/wetroom-kits/edge-double-ended-bath",
      },
    ],
  },
  "furniture/luna-furniture": {
    key: "furniture/luna-furniture",
    categorySlug: "furniture",
    slug: "luna-furniture",
    title: "Luna Furniture",
    description:
      "The Luna collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Luna collection to give your bathroom a stunning finish. Handleless features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/em2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/e500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "luna-500mm-floor-vanity",
        label: "Luna 500mm Floor Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/dwe-1-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-500mm-floor-vanity",
      },
      {
        id: "luna-600mm-floor-vanity",
        label: "Luna 600mm Floor Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/tr-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-600mm-floor-vanity",
      },
      {
        id: "luna-600mm-wall-hung-vanity",
        label: "Luna 600mm Wall Hung Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/g0-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-600mm-wall-hung-vanity",
      },
      {
        id: "luna-500mm-wc-unit",
        label: "Luna 500mm WC Unit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/xri-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-500mm-wc-unit",
      },
      {
        id: "luna-tall-unit",
        label: "Luna Tall Unit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/h0kyh-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-tall-unit",
      },
      {
        id: "luna-1100mm-l-shape-furniture-pack",
        label: "Luna 1100mm L-shape Furniture Pack",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjo-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-1100mm-l-shape-furniture-pack",
      },
      {
        id: "luna-900mm-l-shape-sets-compact",
        label: "Luna 900mm L-Shape Sets Compact",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjj-768x1024.jpg",
        href: "/furniture/luna-furniture/luna-900mm-l-shape-sets-compact",
      },
      {
        id: "luna-450mm-cloakroom-floorstanding-unit",
        label: "Luna 400mm Cloakroom Floorstanding Unit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/dove-grey-1.jpg",
        href: "/furniture/luna-furniture/luna-450mm-cloakroom-floorstanding-unit",
      },
    ],
  },
  "furniture/edge-furniture": {
    key: "furniture/edge-furniture",
    categorySlug: "furniture",
    slug: "edge-furniture",
    title: "Edge Furniture",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/m1-1.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-7.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-500mm-floor-vanity-high-gloss",
        label: "Edge 500mm Floor Vanity High Gloss",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/FA-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-500mm-floor-vanity-high-gloss",
      },
      {
        id: "edge-600mm-floor-vanity-high-gloss",
        label: "Edge 600mm Floor Vanity High Gloss",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-gr-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-600mm-floor-vanity-high-gloss",
      },
      {
        id: "edge-600mm-wall-hung-vanity",
        label: "Edge 600mm Wall Hung Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-1-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-600mm-wall-hung-vanity",
      },
      {
        id: "edge-500mm-wc-unit",
        label: "Edge 500mm WC Unit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/wc-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-500mm-wc-unit",
      },
      {
        id: "edge-tall-unit",
        label: "Edge Tall Unit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/efe-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-tall-unit",
      },
      {
        id: "edge-1100mm-l-shape-furniture-pack",
        label: "Edge 1100mm L-shape Furniture Pack",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/efr-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-1100mm-l-shape-furniture-pack",
      },
      {
        id: "edge-900mm-l-shape-sets-compact",
        label: "Edge 900MM L-Shape Sets Compact",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/wrw-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-900mm-l-shape-sets-compact",
      },
      {
        id: "edge-400mm-cloakroom-floorstanding-unit",
        label: "Edge 400mm Cloakroom Floorstanding Unit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/anthracite-2.jpg",
        href: "/furniture/edge-furniture/edge-400mm-cloakroom-floorstanding-unit",
      },
      {
        id: "edge-handles-320mm-black",
        label: "Edge Handles 320mm Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/wf-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-handles-320mm-black",
      },
      {
        id: "edge-handles-320mm-chrome",
        label: "Edge Handles 320mm Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/wfwf-768x1024.jpg",
        href: "/furniture/edge-furniture/edge-handles-320mm-chrome",
      },
      {
        id: "edge-handles-320mm-brushed-brass",
        label: "Edge Handles 320mm Brushed Brass",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-handles-1.jpg",
        href: "/furniture/edge-furniture/edge-handles-320mm-brushed-brass",
      },
      {
        id: "black-basin-overflow-cover",
        label: "Black Basin Overflow Cover",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/et-768x1024.jpg",
        href: "/furniture/edge-furniture/black-basin-overflow-cover",
      },
      {
        id: "brushed-brass-basin-overflow-cover",
        label: "Brushed Brass Basin Overflow Cover",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-overflow-2.jpg",
        href: "/furniture/edge-furniture/brushed-brass-basin-overflow-cover",
      },
    ],
  },
  "furniture/como-furniture": {
    key: "furniture/como-furniture",
    categorySlug: "furniture",
    slug: "como-furniture",
    title: "Como Furniture",
    description:
      "The Como collection offers three different trend finishes: Matt Grey, Matt Black and Natural Oak. Make a statement with our Como collection to give your bathroom an elegant finish. Handleless features, soft closing doors and high quality counters will add the finishing touches to your beautiful bathroom.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308H-D590-Door-open-view.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-Unit_800_wall_oak_03-copy-3.jpg-3.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "como-600mm-wall-hung-unit",
        label: "Como 600mm Wall Hung Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-600mm.jpg",
        href: "/furniture/como-furniture/como-600mm-wall-hung-unit",
      },
      {
        id: "como-800mm-wall-hung-unit",
        label: "Como 800mm Wall Hung Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-800mm.jpg",
        href: "/furniture/como-furniture/como-800mm-wall-hung-unit",
      },
      {
        id: "como-450mm-floorstanding-vanity",
        label: "Como 450mm Floorstanding Vanity",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como450.jpg",
        href: "/furniture/como-furniture/como-450mm-floorstanding-vanity",
      },
    ],
  },
  "furniture/sienna-furniture": {
    key: "furniture/sienna-furniture",
    categorySlug: "furniture",
    slug: "sienna-furniture",
    title: "Sienna Furniture",
    description:
      "The Sienna collection offers three different trend finishes: Matt White, Matt Black and Matt Cashmere. Make a statement with our Sienna collection to give your bathroom an elegant, minamalist finish. Handleless features, soft closing doors and high quality counters will add the finishing touches to your beautiful bathroom.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_800_black_close-up_side_01-High-Res-cgi-2x.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_wll_cream_full-lifestyle_01.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "sienna-600mm-wall-hung-unit",
        label: "Sienna 600mm Wall Hung",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/600-wall-hung.jpg",
        href: "/furniture/sienna-furniture/sienna-600mm-wall-hung-unit",
      },
      {
        id: "sienna-800mm-wall-hung-unit",
        label: "Sienna 800mm Wall Hung",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-wall-hung.jpg",
        href: "/furniture/sienna-furniture/sienna-800mm-wall-hung-unit",
      },
      {
        id: "sienna-600mm-floor-standing-unit",
        label: "Sienna 600mm Floor Standing",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/600-floor-standing-1.jpg",
        href: "/furniture/sienna-furniture/sienna-600mm-floor-standing-unit",
      },
      {
        id: "sienna-800mm-floor-standing-unit",
        label: "Sienna 800mm Floor Standing",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-floor-standing-1.jpg",
        href: "/furniture/sienna-furniture/sienna-800mm-floor-standing-unit",
      },
    ],
  },
  "furniture/niche": {
    key: "furniture/niche",
    categorySlug: "furniture",
    slug: "niche",
    title: "Niche",
    description: "Explore the NICHE range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-24.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-24.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "niche-with-shelf",
        label: "Niche with shelf",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
        href: "/furniture/niche/niche-with-shelf",
      },
      {
        id: "niche-with-led",
        label: "Niche with LED",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600.jpg",
        href: "/furniture/niche/niche-with-led",
      },
    ],
  },
  "heating/intro-anthracite-ladder-rails-22mm": {
    key: "heating/intro-anthracite-ladder-rails-22mm",
    categorySlug: "heating",
    slug: "intro-anthracite-ladder-rails-22mm",
    title: "Intro Anthracite Ladder Rails 22mm",
    description:
      "Explore the ANTHRACITE LADDER range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-8.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "intro-anthracite-ladder-rails-22mm",
        label: "ANTHRACITE LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/anp1.jpg",
        href: "/heating/intro-anthracite-ladder-rails-22mm/intro-anthracite-ladder-rails-22mm",
      },
    ],
  },
  "heating/black-ladder-rails-22mm": {
    key: "heating/black-ladder-rails-22mm",
    categorySlug: "heating",
    slug: "black-ladder-rails-22mm",
    title: "Black Ladder Rails 22mm",
    description:
      "Explore the BLACK LADDER range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/BL500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "black-ladder-rails-22mm",
        label: "BLACK LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/bl1.jpg",
        href: "/heating/black-ladder-rails-22mm/black-ladder-rails-22mm",
      },
    ],
  },
  "heating/chrome-ladder-rails-22mm": {
    key: "heating/chrome-ladder-rails-22mm",
    categorySlug: "heating",
    slug: "chrome-ladder-rails-22mm",
    title: "Chrome Ladder Rails 22mm",
    description:
      "Explore the CHROME LADDER range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/cl500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "chrome-ladder-rails-22mm",
        label: "CHROME LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/cp1.jpg",
        href: "/heating/chrome-ladder-rails-22mm/chrome-ladder-rails-22mm",
      },
    ],
  },
  "heating/brushed-brass-ladder-rails-22mm": {
    key: "heating/brushed-brass-ladder-rails-22mm",
    categorySlug: "heating",
    slug: "brushed-brass-ladder-rails-22mm",
    title: "Brushed Brass Ladder Rails 22mm",
    description:
      "Explore the BRUSHED BRASS LADDER range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-22.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "brushed-brass-ladder-rails-22mm",
        label: "BRUSHED BRASS LADDER",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image.jpg",
        href: "/heating/brushed-brass-ladder-rails-22mm/brushed-brass-ladder-rails-22mm",
      },
    ],
  },
  "heating/branch-anthracite-heated-towel-rail": {
    key: "heating/branch-anthracite-heated-towel-rail",
    categorySlug: "heating",
    slug: "branch-anthracite-heated-towel-rail",
    title: "Branch Anthracite Heated Towel Rail",
    description: "Explore the BRANCH range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-19.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "branch-anthracite-heated-towel-rail",
        label: "BRANCH",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/pro1.jpg",
        href: "/heating/branch-anthracite-heated-towel-rail/branch-anthracite-heated-towel-rail",
      },
    ],
  },
  "heating/nova-anthracite-heated-towel-rail": {
    key: "heating/nova-anthracite-heated-towel-rail",
    categorySlug: "heating",
    slug: "nova-anthracite-heated-towel-rail",
    title: "Nova Heated Towel Rail",
    description: "Explore the NOVA range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Ne500-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "nova-anthracite-heated-towel-rail",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/nop11.jpg",
        href: "/heating/nova-anthracite-heated-towel-rail/nova-anthracite-heated-towel-rail",
      },
    ],
  },
  "heating/edge-anthracite-heated-towel-rail": {
    key: "heating/edge-anthracite-heated-towel-rail",
    categorySlug: "heating",
    slug: "edge-anthracite-heated-towel-rail",
    title: "Edge Anthracite Heated Towel Rail",
    description: "Explore the EDGE range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/ed500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-anthracite-heated-towel-rail",
        label: "EDGE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/edp1.jpg",
        href: "/heating/edge-anthracite-heated-towel-rail/edge-anthracite-heated-towel-rail",
      },
    ],
  },
  "heating/hermes-anthracite-heated-towel-rail": {
    key: "heating/hermes-anthracite-heated-towel-rail",
    categorySlug: "heating",
    slug: "hermes-anthracite-heated-towel-rail",
    title: "Hermes Anthracite Heated Towel Rail",
    description: "Explore the HERMES range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/her500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "hermes-anthracite-heated-towel-rail",
        label: "HERMES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/hrp1.jpg",
        href: "/heating/hermes-anthracite-heated-towel-rail/hermes-anthracite-heated-towel-rail",
      },
    ],
  },
  "heating/aries-anthracite-heated-towel-rail": {
    key: "heating/aries-anthracite-heated-towel-rail",
    categorySlug: "heating",
    slug: "aries-anthracite-heated-towel-rail",
    title: "Aries Anthracite Heated Towel Rail",
    description: "Explore the ARIES range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/500-9.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "aries-anthracite-heated-towel-rail",
        label: "ARIES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/arip1.jpg",
        href: "/heating/aries-anthracite-heated-towel-rail/aries-anthracite-heated-towel-rail",
      },
    ],
  },
  "heating/leo-radiator": {
    key: "heating/leo-radiator",
    categorySlug: "heating",
    slug: "leo-radiator",
    title: "Leo Radiator",
    description: "Explore the LEO range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-20.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "leo-radiator",
        label: "LEO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-12.jpg",
        href: "/heating/leo-radiator/leo-radiator",
      },
    ],
  },
  "heating/libra-radiators": {
    key: "heating/libra-radiators",
    categorySlug: "heating",
    slug: "libra-radiators",
    title: "Libra Radiator",
    description: "Explore the LIBRA range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-21.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "libra-radiators",
        label: "LIBRA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-13.jpg",
        href: "/heating/libra-radiators/libra-radiators",
      },
    ],
  },
  "heating/underfloor-heating": {
    key: "heating/underfloor-heating",
    categorySlug: "heating",
    slug: "underfloor-heating",
    title: "Underfloor Heating",
    description:
      "Explore the UNDERFLOOR HEATING range from Haris Building Solutions.",
    heroImage: "https://giavanibathrooms.com/wp-content/uploads/2024/01/uf.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/01/uf.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "7-day-programmable-thermostat-wifi-control",
        label: "Thermostats",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-3.jpg",
        href: "/heating/underfloor-heating/7-day-programmable-thermostat-wifi-control",
      },
    ],
  },
  "heating/radiator-accessories": {
    key: "heating/radiator-accessories",
    categorySlug: "heating",
    slug: "radiator-accessories",
    title: "Radiator Accessories",
    description:
      "Explore the RADIATOR ACCESSORIES range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/eqfqefqef.png",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/eqfqefqef.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "straight-radiator-valves",
        label: "Straight Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite.jpg",
        href: "/heating/radiator-accessories/straight-radiator-valves",
      },
      {
        id: "angled-radiator-valves",
        label: "Angled Valves (pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-1.jpg",
        href: "/heating/radiator-accessories/angled-radiator-valves",
      },
      {
        id: "corner-radiator-valves",
        label: "Corner Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-2.jpg",
        href: "/heating/radiator-accessories/corner-radiator-valves",
      },
      {
        id: "straight-square-radiator-valves",
        label: "Straight Square Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/black.jpg",
        href: "/heating/radiator-accessories/straight-square-radiator-valves",
      },
      {
        id: "angled-square-radiator-valves",
        label: "Angled Square Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-1.jpg",
        href: "/heating/radiator-accessories/angled-square-radiator-valves",
      },
      {
        id: "straight-thermostatic-radiator-valves",
        label: "Straight Thermostatic Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-3.jpg",
        href: "/heating/radiator-accessories/straight-thermostatic-radiator-valves",
      },
      {
        id: "angled-thermostatic-radiator-valves",
        label: "Angled Thermostatic Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-4.jpg",
        href: "/heating/radiator-accessories/angled-thermostatic-radiator-valves",
      },
      {
        id: "corner-thermostatic-radiator-valves",
        label: "Corner Thermostatic Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-5.jpg",
        href: "/heating/radiator-accessories/corner-thermostatic-radiator-valves",
      },
      {
        id: "heating-element-chrome",
        label: "Heating Element Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/rr-1-768x1024.jpg",
        href: "/heating/radiator-accessories/heating-element-chrome",
      },
    ],
  },
  "mirrors-cabinets/como-mirror": {
    key: "mirrors-cabinets/como-mirror",
    categorySlug: "mirrors-cabinets",
    slug: "como-mirror",
    title: "Como Mirror",
    description: "Explore the COMO range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-23.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "como-mirror",
        label: "COMO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-27.jpg",
        href: "/mirrors-cabinets/como-mirror/como-mirror",
      },
    ],
  },
  "mirrors-cabinets/halo-mirror": {
    key: "mirrors-cabinets/halo-mirror",
    categorySlug: "mirrors-cabinets",
    slug: "halo-mirror",
    title: "Halo Mirror",
    description: "Explore the HALO range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-28.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "halo-mirror",
        label: "HALO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/600mm.jpg",
        href: "/mirrors-cabinets/halo-mirror/halo-mirror",
      },
    ],
  },
  "mirrors-cabinets/sienna-mirror": {
    key: "mirrors-cabinets/sienna-mirror",
    categorySlug: "mirrors-cabinets",
    slug: "sienna-mirror",
    title: "Sienna Mirror",
    description: "Explore the SIENNA range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-27.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "sienna-mirror",
        label: "SIENNA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-28.jpg",
        href: "/mirrors-cabinets/sienna-mirror/sienna-mirror",
      },
    ],
  },
  "mirrors-cabinets/kai-mirror": {
    key: "mirrors-cabinets/kai-mirror",
    categorySlug: "mirrors-cabinets",
    slug: "kai-mirror",
    title: "Kai Mirror",
    description: "Explore the KAI range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-26.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "kai-mirror",
        label: "KAI",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Kai.jpg",
        href: "/mirrors-cabinets/kai-mirror/kai-mirror",
      },
    ],
  },
  "mirrors-cabinets/branch-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/branch-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "branch-steam-free-mirror-colour-changing",
    title: "Branch Steam Free Mirror/Colour Changing",
    description: "Explore the BRANCH range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/branch500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "branch-steam-free-mirror-colour-changing",
        label: "BRANCH",
        image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/b1.jpg",
        href: "/mirrors-cabinets/branch-steam-free-mirror-colour-changing/branch-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/hermes-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/hermes-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "hermes-steam-free-mirror-colour-changing",
    title: "Hermes Steam Free Mirror/Colour Changing",
    description: "Explore the HERMES range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/her1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "hermes-steam-free-mirror-colour-changing",
        label: "HERMES",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Hermes500.jpg",
        href: "/mirrors-cabinets/hermes-steam-free-mirror-colour-changing/hermes-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/edge-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/edge-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "edge-steam-free-mirror-colour-changing",
    title: "Edge Steam Free Mirror/Colour Changing",
    description: "Explore the EDGE range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/edge.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-steam-free-mirror-colour-changing",
        label: "EDGE",
        image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/e1.jpg",
        href: "/mirrors-cabinets/edge-steam-free-mirror-colour-changing/edge-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/elyse-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/elyse-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "elyse-steam-free-mirror-colour-changing",
    title: "Elyse Steam Free Mirror/Colour Changing",
    description: "Explore the ELYSE range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Eylse500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "elyse-steam-free-mirror-colour-changing",
        label: "ELYSE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/eyl1.jpg",
        href: "/mirrors-cabinets/elyse-steam-free-mirror-colour-changing/elyse-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/kia-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/kia-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "kia-steam-free-mirror-colour-changing",
    title: "Kia Steam Free Mirror/Colour Changing",
    description: "Explore the KIA range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/kia500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "kia-steam-free-mirror-colour-changing",
        label: "KIA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/ki1.jpg",
        href: "/mirrors-cabinets/kia-steam-free-mirror-colour-changing/kia-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/eclipse-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/eclipse-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "eclipse-steam-free-mirror-colour-changing",
    title: "Eclipse Steam Free Mirror/Colour Changing",
    description: "Explore the ECLIPSE range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Eclipse.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "eclipse-steam-free-mirror-colour-changing",
        label: "ECLIPSE",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/e1-1.jpg",
        href: "/mirrors-cabinets/eclipse-steam-free-mirror-colour-changing/eclipse-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/rico-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/rico-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "rico-steam-free-mirror-colour-changing",
    title: "Rico Steam Free Mirror/Colour Changing",
    description: "Explore the RICO range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Rico500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "rico-steam-free-mirror-colour-changing",
        label: "RICO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Ri1.jpg",
        href: "/mirrors-cabinets/rico-steam-free-mirror-colour-changing/rico-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/luna-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/luna-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "luna-steam-free-mirror-colour-changing",
    title: "Luna Steam Free Mirror/Colour Changing",
    description: "Explore the LUNA range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Luna500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "luna-steam-free-mirror-colour-changing",
        label: "LUNA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Lu1.jpg",
        href: "/mirrors-cabinets/luna-steam-free-mirror-colour-changing/luna-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/venus-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/venus-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "venus-steam-free-mirror-colour-changing",
    title: "Venus Steam Free Mirror/Colour Changing",
    description: "Explore the VENUS range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Venus500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "venus-steam-free-mirror-colour-changing",
        label: "VENUS",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/ve1.jpg",
        href: "/mirrors-cabinets/venus-steam-free-mirror-colour-changing/venus-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/nova-steam-free-mirror-colour-changing": {
    key: "mirrors-cabinets/nova-steam-free-mirror-colour-changing",
    categorySlug: "mirrors-cabinets",
    slug: "nova-steam-free-mirror-colour-changing",
    title: "Nova Steam Free Mirror/Colour Changing",
    description: "Explore the NOVA range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Nova500.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "nova-steam-free-mirror-colour-changing",
        label: "NOVA",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/No1.jpg",
        href: "/mirrors-cabinets/nova-steam-free-mirror-colour-changing/nova-steam-free-mirror-colour-changing",
      },
    ],
  },
  "mirrors-cabinets/intro-cabinet": {
    key: "mirrors-cabinets/intro-cabinet",
    categorySlug: "mirrors-cabinets",
    slug: "intro-cabinet",
    title: "Intro Cabinet",
    description: "Explore the INTRO range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-25.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "intro-cabinet",
        label: "INTRO",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-13.jpg",
        href: "/mirrors-cabinets/intro-cabinet/intro-cabinet",
      },
    ],
  },
  "panels/bosco-panels": {
    key: "panels/bosco-panels",
    categorySlug: "panels",
    slug: "bosco-panels",
    title: "Bosco Panels",
    description: "Explore the BOSCO range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/wall2.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/main1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "bosco-beech-panels-122mm-x-12mm-x-2600mm",
        label: "Beech",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Beech-768x1024.jpg",
        href: "/panels/bosco-panels/bosco-beech-panels-122mm-x-12mm-x-2600mm",
      },
      {
        id: "bosco-charcoal-panels-122mm-x-12mm-x-2600mm",
        label: "Charcoal",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Charcoal-768x1024.jpg",
        href: "/panels/bosco-panels/bosco-charcoal-panels-122mm-x-12mm-x-2600mm",
      },
      {
        id: "bosco-grey-oak-panels-122mm-x-12mm-x-2600mm",
        label: "Grey Oak",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Grey-Oak-768x1024.jpg",
        href: "/panels/bosco-panels/bosco-grey-oak-panels-122mm-x-12mm-x-2600mm",
      },
      {
        id: "bosco-walnut-panels-122mm-x-12mm-x-2600mm",
        label: "Walnut",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Walnut-768x1024.jpg",
        href: "/panels/bosco-panels/bosco-walnut-panels-122mm-x-12mm-x-2600mm",
      },
      {
        id: "bosco-natural-oak-panels-122mm-x-12mm-x-2600mm",
        label: "Natural Oak",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/Natural-Oak-768x1024.jpg",
        href: "/panels/bosco-panels/bosco-natural-oak-panels-122mm-x-12mm-x-2600mm",
      },
    ],
  },
  "panels/acoustic-panels": {
    key: "panels/acoustic-panels",
    categorySlug: "panels",
    slug: "acoustic-panels",
    title: "Acoustic Panels",
    description:
      "Explore the Acoustic Panels range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP010G-GREY_03fd921c-186b-41f7-835a-401aabc29ae0.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-010-a-antique-m-grey-1-pack4pcs",
        label:
          "Wall Panel - Antique Metallic Grey - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP010G-GREY_03fd921c-186b-41f7-835a-401aabc29ae0.png",
        href: "/panels/acoustic-panels/wall-panel-010-a-antique-m-grey-1-pack4pcs",
      },
      {
        id: "wall-panel-010-c-antique-m-brown-1-pack4pcs",
        label:
          "Wall Panel - Antique Metallic Gold - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP010G-BROWN_5cd83073-9c51-4cca-ade2-d93e9a30f868.png",
        href: "/panels/acoustic-panels/wall-panel-010-c-antique-m-brown-1-pack4pcs",
      },
      {
        id: "wall-panel-010-b-antique-m-gold-1-pack4pcs",
        label:
          "Wall Panel - Antique Metallic Brown - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP010G_af3a7615-93df-4d3d-9ba4-38c4bee5b8d4.png",
        href: "/panels/acoustic-panels/wall-panel-010-b-antique-m-gold-1-pack4pcs",
      },
      {
        id: "wall-panel-013a-ps-g-grey-acoustic-1-pack4pcs",
        label:
          "Wall Panel - PS Gold and Grey - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP013B.png",
        href: "/panels/acoustic-panels/wall-panel-013a-ps-g-grey-acoustic-1-pack4pcs",
      },
      {
        id: "wall-panel-013b-ps-g-brown-acoustic-1-pack4pcs",
        label:
          "Wall Panel - PS Gold and Brown - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP013A.png",
        href: "/panels/acoustic-panels/wall-panel-013b-ps-g-brown-acoustic-1-pack4pcs",
      },
      {
        id: "pack-a-natural-oak",
        label:
          "Wall Panel - Natural Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/03_64c706af-4068-4642-aaae-186bd6d5b828.jpg",
        href: "/panels/acoustic-panels/pack-a-natural-oak",
      },
      {
        id: "pack-b-light-grey",
        label:
          "Wall Panel - Light Grey - Acoustic - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01B.jpg",
        href: "/panels/acoustic-panels/pack-b-light-grey",
      },
      {
        id: "pack-c-dark-grey",
        label:
          "Wall Panel - Dark Grey - Acoustic - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01C.jpg",
        href: "/panels/acoustic-panels/pack-c-dark-grey",
      },
      {
        id: "pack-d-dark-oak",
        label: "Wall Panel - Dark Oak - Acoustic - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01D.jpg",
        href: "/panels/acoustic-panels/pack-d-dark-oak",
      },
      {
        id: "pack-04e-black-bendable-wall-panel-copy",
        label: "Wall Panel - Black - Acoustic - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01E.jpg",
        href: "/panels/acoustic-panels/pack-04e-black-bendable-wall-panel-copy",
      },
      {
        id: "wall-panel-01-g-gold-acoustic-1-pack4pcs",
        label:
          "Wall Panel - Shiny Gold - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/Image_20250829105426_68_12.png",
        href: "/panels/acoustic-panels/wall-panel-01-g-gold-acoustic-1-pack4pcs",
      },
      {
        id: "wall-panel-01p-teak-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Teak Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01PTeakOak_6055c751-790d-4789-9dc0-152999903a95.png",
        href: "/panels/acoustic-panels/wall-panel-01p-teak-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-01q-smoked-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Smoked Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01QSmokedOak.png",
        href: "/panels/acoustic-panels/wall-panel-01q-smoked-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-01r-concrete-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Concrete - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01RConcrete.png",
        href: "/panels/acoustic-panels/wall-panel-01r-concrete-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-01-s-silver-acoustic-1-pack4pcs-copy",
        label:
          "Wall Panel - Shiny Silver - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/Image_20250829105426_67_12.png",
        href: "/panels/acoustic-panels/wall-panel-01-s-silver-acoustic-1-pack4pcs-copy",
      },
      {
        id: "pack-01t-walnut-acoustic",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01T.jpg",
        href: "/panels/acoustic-panels/pack-01t-walnut-acoustic",
      },
      {
        id: "pack-01wp-metallic-brown-acoustic",
        label:
          "Wall Panel - Metallic Brown - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WF_1bb3cfe4-780d-4856-8200-53f855310152.png",
        href: "/panels/acoustic-panels/pack-01wp-metallic-brown-acoustic",
      },
      {
        id: "pack-01wg-metallic-gold-acoustic",
        label:
          "Wall Panel - Metallic Gold - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WG_b607843a-702e-4040-809a-d1446ff2ed04.png",
        href: "/panels/acoustic-panels/pack-01wg-metallic-gold-acoustic",
      },
      {
        id: "pack-01wh-metallic-light-grey-acoustic",
        label:
          "Wall Panel - Metallic Light Grey - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WH_4a863433-d052-48d2-85d0-33afdc9418ef.png",
        href: "/panels/acoustic-panels/pack-01wh-metallic-light-grey-acoustic",
      },
      {
        id: "pack-01wj-metallic-dark-grey-acoustic",
        label:
          "Wall Panel - Metallic Dark Grey - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WJ_2ee952b4-4a0a-4272-ab56-1a0a322767eb.png",
        href: "/panels/acoustic-panels/pack-01wj-metallic-dark-grey-acoustic",
      },
      {
        id: "wall-panel-01-wk-mb-white-acoustic-1-pack4pcs",
        label:
          "Wall Panel - White Marble - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WK_c873f015-3ac0-4a66-a3e2-224c22b00464.png",
        href: "/panels/acoustic-panels/wall-panel-01-wk-mb-white-acoustic-1-pack4pcs",
      },
      {
        id: "wall-panel-01-wn-marble-gold-black-acoustic-1-pack4pcs",
        label:
          "Wall Panel - Gold and Black Marble - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WN_dcb5e1ef-3ecb-47cd-a81c-c44d49e68d54.png",
        href: "/panels/acoustic-panels/wall-panel-01-wn-marble-gold-black-acoustic-1-pack4pcs",
      },
      {
        id: "wall-panel-01-wo-marble-grey-acoustic-1-pack4pcs",
        label:
          "Wall Panel - Grey Marble - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WO2.jpg",
        href: "/panels/acoustic-panels/wall-panel-01-wo-marble-grey-acoustic-1-pack4pcs",
      },
      {
        id: "wall-panel-01ww-white-acoustic-1-pack-4pcs",
        label: "Wall Panel - White - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_12_09_36PM.png",
        href: "/panels/acoustic-panels/wall-panel-01ww-white-acoustic-1-pack-4pcs",
      },
      {
        id: "wall-panel-01wx-gold-and-white-marble-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Gold and White Marble - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WXGoldandWhite-Copy.jpg",
        href: "/panels/acoustic-panels/wall-panel-01wx-gold-and-white-marble-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-02-wa-oak-acoustic-1-pack3pcs",
        label: "Wall Panel - Oak - Acoustic - 280cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/02WA_da313921-f6fa-447f-aec1-0dca95de4f31.png",
        href: "/panels/acoustic-panels/wall-panel-02-wa-oak-acoustic-1-pack3pcs",
      },
      {
        id: "wall-panel-02-wb-grey-280cm-acoustic-1-pack3pcs",
        label: "Wall Panel - Grey - Acoustic - 280cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/02WB_a5e408eb-85fb-4021-8d82-cbf046fbc5ed.png",
        href: "/panels/acoustic-panels/wall-panel-02-wb-grey-280cm-acoustic-1-pack3pcs",
      },
      {
        id: "wall-panel-02-wk-mb-white-280cm-acoustic-1-pack3pcs",
        label:
          "Wall Panel - White Marble - Acoustic - 280cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/02WK2.jpg",
        href: "/panels/acoustic-panels/wall-panel-02-wk-mb-white-280cm-acoustic-1-pack3pcs",
      },
      {
        id: "wall-panel-02-wn-marble-gold-black-280cm-acoustic-1-pack3pcs",
        label:
          "Wall Panel - Gold and Black Marble - Acoustic - 280cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/02_WN_3_ec6c1bba-2fbf-439a-82a6-c41fe05a1c6d.jpg",
        href: "/panels/acoustic-panels/wall-panel-02-wn-marble-gold-black-280cm-acoustic-1-pack3pcs",
      },
      {
        id: "wall-panel-02wo-grey-marble-acoustic-1-pack-3pcs",
        label:
          "Wall Panel - Grey Marble - Acoustic - 280cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01WO2_70203fa3-f168-4c35-af4e-860da2c18842.jpg",
        href: "/panels/acoustic-panels/wall-panel-02wo-grey-marble-acoustic-1-pack-3pcs",
      },
      {
        id: "wall-panel-02-wt-walnut-280cm-acoustic-1-pack3pcs",
        label: "Wall Panel - Walnut - Acoustic - 280cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/01TWalnut.jpg",
        href: "/panels/acoustic-panels/wall-panel-02-wt-walnut-280cm-acoustic-1-pack3pcs",
      },
      {
        id: "pack-03a-oak-acoustic",
        label: "Wall Panel - Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/03A-1.png",
        href: "/panels/acoustic-panels/pack-03a-oak-acoustic",
      },
      {
        id: "pack-03c-dark-grey",
        label:
          "Wall Panel - Dark Grey - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/03C_d15f0e89-e03e-4d69-87be-5a72d687b753.png",
        href: "/panels/acoustic-panels/pack-03c-dark-grey",
      },
      {
        id: "wp-03d-acoustic",
        label: "Wall Panel - Dark Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/03D_3ef549dd-310c-4388-ae7e-6ecbd9482d9e.png",
        href: "/panels/acoustic-panels/wp-03d-acoustic",
      },
      {
        id: "wp-03t-acoustic-1",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/03T_685a886e-0b2d-4c92-af3b-76a4e4a06b2f.png",
        href: "/panels/acoustic-panels/wp-03t-acoustic-1",
      },
      {
        id: "wall-panel-04a-natural-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/04AOak1.png",
        href: "/panels/acoustic-panels/wall-panel-04a-natural-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-04b-light-grey-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Light Grey - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb12_2026_03_28_47PM.png",
        href: "/panels/acoustic-panels/wall-panel-04b-light-grey-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-04d-dark-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Dark Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/04DDarkOak.png",
        href: "/panels/acoustic-panels/wall-panel-04d-dark-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-04t-walnut-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb12_2026_03_28_04PM.png",
        href: "/panels/acoustic-panels/wall-panel-04t-walnut-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "pack-06a-natural-oak",
        label: "Wall Panel - Oak - Vertical - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/06A.jpg",
        href: "/panels/acoustic-panels/pack-06a-natural-oak",
      },
      {
        id: "pack-08a-natural-oak-copy",
        label: "Wall Panel - Oak - Blocks - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/08A_3ca92f2e-6dbc-442a-9e5e-dafca29b1949.png",
        href: "/panels/acoustic-panels/pack-08a-natural-oak-copy",
      },
      {
        id: "wall-panel-08d-dark-oak-blocks-240cm-1-pack-4pcs",
        label: "Wall Panel - Dark Oak - Blocks - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/08DDarkOak.png",
        href: "/panels/acoustic-panels/wall-panel-08d-dark-oak-blocks-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-08b-grey-blocks-240cm-1-pack-4pcs",
        label: "Wall Panel - Grey - Blocks - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageMar2_2026_03_13_25PM.png",
        href: "/panels/acoustic-panels/wall-panel-08b-grey-blocks-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-08-t-blocks-wall-panel-walnut-1-pack4pcs",
        label: "Wall Panel - Walnut - Blocks - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/08T_6ecfedca-475f-40a8-89ed-5df86bc7534f.png",
        href: "/panels/acoustic-panels/wall-panel-08-t-blocks-wall-panel-walnut-1-pack4pcs",
      },
      {
        id: "wall-panel-31d-dark-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Dark Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/31DDarkOak1.png",
        href: "/panels/acoustic-panels/wall-panel-31d-dark-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-31f-grey-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Grey Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/31FGreyOak1.png",
        href: "/panels/acoustic-panels/wall-panel-31f-grey-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-31h-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/31HOak021.png",
        href: "/panels/acoustic-panels/wall-panel-31h-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-31t-walnut-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Walnut - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/31TWalnut1.png",
        href: "/panels/acoustic-panels/wall-panel-31t-walnut-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-32f-grey-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Grey Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/32FGreyOak-Copy.png",
        href: "/panels/acoustic-panels/wall-panel-32f-grey-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-32h-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/32HOak-Copy.png",
        href: "/panels/acoustic-panels/wall-panel-32h-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-32k-shadow-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Shadow Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/32KShadowOak-Copy.png",
        href: "/panels/acoustic-panels/wall-panel-32k-shadow-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-32r-concrete-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Concrete - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/32RConcrete-Copy.png",
        href: "/panels/acoustic-panels/wall-panel-32r-concrete-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-32w-light-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Light Oak - Premium Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/32WLightOak-Copy.png",
        href: "/panels/acoustic-panels/wall-panel-32w-light-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-36f-grey-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Grey Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/36FGreyOak.png",
        href: "/panels/acoustic-panels/wall-panel-36f-grey-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-36h-oak-02-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Oak 02 - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/36HOak02.png",
        href: "/panels/acoustic-panels/wall-panel-36h-oak-02-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-36wt-walnut-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/36WTWalnut.png",
        href: "/panels/acoustic-panels/wall-panel-36wt-walnut-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-37f-grey-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Grey Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/37FGreyOak.png",
        href: "/panels/acoustic-panels/wall-panel-37f-grey-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-37h-oak-02-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Oak 02 - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/37HOak02.png",
        href: "/panels/acoustic-panels/wall-panel-37h-oak-02-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-37wt-walnut-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/37WTWalnut.png",
        href: "/panels/acoustic-panels/wall-panel-37wt-walnut-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-41f-grey-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Grey Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/41FGreyOak.png",
        href: "/panels/acoustic-panels/wall-panel-41f-grey-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-41h-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/41HOak.png",
        href: "/panels/acoustic-panels/wall-panel-41h-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-41k-shadow-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Shadow Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/41KShadowOak.png",
        href: "/panels/acoustic-panels/wall-panel-41k-shadow-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-41wt-walnut-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/41WTWalnut.png",
        href: "/panels/acoustic-panels/wall-panel-41wt-walnut-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-42f-grey-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Grey Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/42FGreyOak.png",
        href: "/panels/acoustic-panels/wall-panel-42f-grey-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-42h-oak-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/42HOak.png",
        href: "/panels/acoustic-panels/wall-panel-42h-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-42k-shadow-oak-acoustic-240cm-1-pack-4pcs",
        label:
          "Wall Panel - Shadow Oak - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/42KShadowOak.png",
        href: "/panels/acoustic-panels/wall-panel-42k-shadow-oak-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-42wt-walnut-acoustic-240cm-1-pack-4pcs",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/42WTWalnut.png",
        href: "/panels/acoustic-panels/wall-panel-42wt-walnut-acoustic-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-trim-a-a-oak-wp-01-02-03-04-06-08-240cm-1-pack-10pcs",
        label:
          "Wall Panel PVC Trim Acoustic - A Oak - WP 01/02/03/04/08 - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/TrimAA.jpg",
        href: "/panels/acoustic-panels/wall-panel-trim-a-a-oak-wp-01-02-03-04-06-08-240cm-1-pack-10pcs",
      },
    ],
  },
  "panels/aqua-panels": {
    key: "panels/aqua-panels",
    categorySlug: "panels",
    slug: "aqua-panels",
    title: "60 cm PVC Panels",
    description:
      "Explore the 60 cm PVC Panels range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/05A.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "aluminium-corner-strip-black-wp-07-11-61-62-300cm-1-pack-10pcs",
        label:
          "Aluminium Corner Strip - WP 05/07/11 - 300cm - (1 pack / 10pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/AlumCornerStripBlack_c0a2ae50-aa1e-4d75-8e31-99f03b319f59.jpg",
        href: "/panels/aqua-panels/aluminium-corner-strip-black-wp-07-11-61-62-300cm-1-pack-10pcs",
      },
      {
        id: "aluminium-end-strip-black-wp-05-07-11-61-62-300cm-1-pack-10pcs",
        label: "Aluminium End Strip - WP 05/07/11 - 300cm - (1 pack / 10pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/AlumEndStripGold_15e56f44-bd62-408e-a298-694d2b83b0ff.jpg",
        href: "/panels/aqua-panels/aluminium-end-strip-black-wp-05-07-11-61-62-300cm-1-pack-10pcs",
      },
      {
        id: "aluminium-i-strip-black-wp-05-07-11-61-62-300cm-1-pack-10pcs",
        label: "Aluminium I Strip - WP 05/07/11 - 300cm - (1 pack / 10pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/AlumIStripSilver_892b1fc2-ae94-493c-953a-92b0414bb66b.jpg",
        href: "/panels/aqua-panels/aluminium-i-strip-black-wp-05-07-11-61-62-300cm-1-pack-10pcs",
      },
      {
        id: "pvc-corner-strip-a-white-marble-wp-07-11-240cm-1-pack-10pcs",
        label: "Corner Strip - WP 07/11 - 240cm - (1 pack / 4pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/Photoroom_20260317_124137.jpg",
        href: "/panels/aqua-panels/pvc-corner-strip-a-white-marble-wp-07-11-240cm-1-pack-10pcs",
      },
      {
        id: "wall-panel-pvc-strip-a-wp-05-240cm-1-pack-10pcs",
        label: "Strip A - WP 05/61/62 - 240cm - (1 pack / 10pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/Photoroom_20260319_104749.jpg",
        href: "/panels/aqua-panels/wall-panel-pvc-strip-a-wp-05-240cm-1-pack-10pcs",
      },
      {
        id: "pvc-strip-b-a-white-marble-wp-0711-240cm-1-pack-10pcs",
        label: "Strip B - WP 07/11 - 240cm - (1 pack / 10pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/Photoroom_20260319_105453.jpg",
        href: "/panels/aqua-panels/pvc-strip-b-a-white-marble-wp-0711-240cm-1-pack-10pcs",
      },
      {
        id: "wall-panel-011a-m-white-wall-board-1-pack2pcs",
        label:
          "Wall Panel - White Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/04WP011A4.png",
        href: "/panels/aqua-panels/wall-panel-011a-m-white-wall-board-1-pack2pcs",
      },
      {
        id: "wall-panel-011a-m-black-wall-board-1-pack2pcs",
        label:
          "Wall Panel - Grey Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP011B.jpg",
        href: "/panels/aqua-panels/wall-panel-011a-m-black-wall-board-1-pack2pcs",
      },
      {
        id: "wall-panel-011c-m-g-black-wall-board-1-pack2pcs",
        label:
          "Wall Panel - Gold and Black Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP011C7.jpg",
        href: "/panels/aqua-panels/wall-panel-011c-m-g-black-wall-board-1-pack2pcs",
      },
      {
        id: "wall-panel-011d-m-g-white-wall-board-1-pack2pcs",
        label:
          "Wall Panel - Gold and White Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP011D_17854d36-3a9a-4806-9ff5-d0af7a016919.jpg",
        href: "/panels/aqua-panels/wall-panel-011d-m-g-white-wall-board-1-pack2pcs",
      },
      {
        id: "pack-05a-oak-wall-covering",
        label: "Wall Panel - Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/05A_acaa6c33-09ea-48c4-b8a5-c56a71f5eaac.png",
        href: "/panels/aqua-panels/pack-05a-oak-wall-covering",
      },
      {
        id: "pack-05b-oak-wall-covering",
        label: "Wall Panel - Dark Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/05B_f69faa9a-9640-43b2-a2aa-5e4ae96cde8f.png",
        href: "/panels/aqua-panels/pack-05b-oak-wall-covering",
      },
      {
        id: "pack-05c-grey",
        label: "Wall Panel - Grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/05CGrey-Copy.png",
        href: "/panels/aqua-panels/pack-05c-grey",
      },
      {
        id: "pack-05d-grey",
        label: "Wall Panel - Dark grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/05D_10a2c6ab-47b0-4abc-ac1a-9bd8da82a1cc.png",
        href: "/panels/aqua-panels/pack-05d-grey",
      },
      {
        id: "wall-covering-white",
        label:
          "Wall Panel - White Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07A_26a63a0f-cc30-4432-95fb-9f61a9c9d0f5.png",
        href: "/panels/aqua-panels/wall-covering-white",
      },
      {
        id: "wall-covering-grey",
        label:
          "Wall Panel - Grey Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07B_8c313175-2a4b-45da-9ab7-c6ebfd72aa81.png",
        href: "/panels/aqua-panels/wall-covering-grey",
      },
      {
        id: "wp-07c",
        label:
          "Wall Panel - Gold and Black Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07C_c14142e2-5a0d-4981-b755-5cdbb2bd917a.png",
        href: "/panels/aqua-panels/wp-07c",
      },
      {
        id: "pack-07d-white-wall-board",
        label:
          "Wall Panel - Gold and White Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07D_d28c6748-f9d5-466f-8742-6de25414f027.png",
        href: "/panels/aqua-panels/pack-07d-white-wall-board",
      },
      {
        id: "pack-o7e-m-mix-grey-wall-board",
        label:
          "Wall Panel - Mix Grey Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07E_6a95cb40-f60d-4d9d-97b1-426ab082782c.png",
        href: "/panels/aqua-panels/pack-o7e-m-mix-grey-wall-board",
      },
      {
        id: "pack-o7f-m-g-grey-wall-board",
        label:
          "Wall Panel - Gold and Grey Marble - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07F_fab74acc-59dd-4ef6-a9ed-071fca3bf96d.png",
        href: "/panels/aqua-panels/pack-o7f-m-g-grey-wall-board",
      },
      {
        id: "wall-panel-07m-cream-wall-board-240cm-1-pack-4pcs",
        label: "Wall Panel - Cream - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb11_2026_02_40_46PM.png",
        href: "/panels/aqua-panels/wall-panel-07m-cream-wall-board-240cm-1-pack-4pcs",
      },
      {
        id: "wall-panel-07w-walnut-wall-board-1-pack4pcs",
        label: "Wall Panel - Walnut - Wall Board - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/07W_a03e87bb-3f15-44c0-b106-ba83d8349488.png",
        href: "/panels/aqua-panels/wall-panel-07w-walnut-wall-board-1-pack4pcs",
      },
    ],
  },
  "panels/brackets-and-fixings": {
    key: "panels/brackets-and-fixings",
    categorySlug: "panels",
    slug: "brackets-and-fixings",
    title: "Brackets and Fixings",
    description:
      "Explore the Brackets and Fixings range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/4EF711EE-C2E1-47EF-9710-578B2CD8FF37.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "adhesive-for-wall-panels-1-pack-24pcs",
        label: "Adhesive for Wall Panels (1 Pack / 24pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/4EF711EE-C2E1-47EF-9710-578B2CD8FF37.jpg",
        href: "/panels/brackets-and-fixings/adhesive-for-wall-panels-1-pack-24pcs",
      },
      {
        id: "ma-001-buckle-for-wp-board-100pcs-pack",
        label: "Bracket For PVC Wall Panels 05/07/11/81/82 (1 Pack / 100pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/MA001_1_043a65b8-eb67-4862-ae28-22990d6e4644.jpg",
        href: "/panels/brackets-and-fixings/ma-001-buckle-for-wp-board-100pcs-pack",
      },
    ],
  },
  "panels/ceilings": {
    key: "panels/ceilings",
    categorySlug: "panels",
    slug: "ceilings",
    title: "Ceilings",
    description:
      "Explore the Ceilings range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/120AWhite-Copy.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "ceiling-120a-white",
        label: "Ceiling 120A - White - 290cm - (1 Pack / 8pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/120AWhite-Copy.jpg",
        href: "/panels/ceilings/ceiling-120a-white",
      },
      {
        id: "ceiling-120b-light-grey",
        label: "Ceiling 120B - Light Grey - 290cm - (1 Pack / 8pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/120BLightGrey-Copy.jpg",
        href: "/panels/ceilings/ceiling-120b-light-grey",
      },
      {
        id: "ceiling-120c-cream",
        label: "Ceiling 120C - Cream - 290cm - (1 Pack / 8pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/120CCream-Copy.jpg",
        href: "/panels/ceilings/ceiling-120c-cream",
      },
      {
        id: "ceiling-connect-strip-a-white",
        label: "Ceiling Connect Strip",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/120A_Connect.png",
        href: "/panels/ceilings/ceiling-connect-strip-a-white",
      },
      {
        id: "ceiling-end-strip-a-white",
        label: "Ceiling End Strip",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/120A_End.png",
        href: "/panels/ceilings/ceiling-end-strip-a-white",
      },
    ],
  },
  "panels/cover-slips": {
    key: "panels/cover-slips",
    categorySlug: "panels",
    slug: "cover-slips",
    title: "Cover Slips",
    description:
      "Explore the Cover Slips range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/9CC7C152-F46F-4339-AB3F-9F1C8F3AC000.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "cover-slip-silver",
        label: "Cover Slips (3pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/9CC7C152-F46F-4339-AB3F-9F1C8F3AC000.jpg",
        href: "/panels/cover-slips/cover-slip-silver",
      },
    ],
  },
  "panels/panel-lighting": {
    key: "panels/panel-lighting",
    categorySlug: "panels",
    slug: "panel-lighting",
    title: "Panel Lighting",
    description:
      "Explore the Panel Lighting range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED01.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-led-lighting-01",
        label: "Wall Panel LED Lighting 01 (6pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED01.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-01",
      },
      {
        id: "wall-panel-led-lighting-02",
        label: "Wall Panel LED Lighting 02 (6pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED02_2ab28cb9-8572-461a-9cd4-3880217e2561.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-02",
      },
      {
        id: "wall-panel-led-lighting-03",
        label: "Wall Panel LED Lighting 03 (6pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/B7C1AC39-2E6F-49C7-8F11-30B142D0ECE9.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-03",
      },
      {
        id: "wall-panel-led-lighting-04",
        label: "Wall Panel LED Lighting 04 (6pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED04_dfec626c-99ed-4be5-abca-bcfead45d053.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-04",
      },
      {
        id: "wall-panel-lighting-1",
        label: "Wall Panel LED Lighting 05 (6pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED05_d9fd84dd-8310-436d-ab38-db855fe26ad4.png",
        href: "/panels/panel-lighting/wall-panel-lighting-1",
      },
      {
        id: "wall-panel-led-lighting-06",
        label: "Wall Panel LED Lighting 06 (6pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED06_63ff7b71-a70b-4473-b1f6-547cf969588b.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-06",
      },
      {
        id: "wall-panel-led-lighting-07-flexible",
        label: "Wall Panel LED Lighting 07 - Flexible (4pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED07.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-07-flexible",
      },
      {
        id: "wall-panel-led-lighting-08-flexible",
        label: "Wall Panel LED Lighting 08 - Flexible (4pcs)",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/LED08.png",
        href: "/panels/panel-lighting/wall-panel-led-lighting-08-flexible",
      },
    ],
  },
  "panels/trims": {
    key: "panels/trims",
    categorySlug: "panels",
    slug: "trims",
    title: "Trims",
    description:
      "Explore the Trims range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/81A.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-81a-trim-oak-240cm-1-pack-10pcs",
        label: "Wall Panel Trim - 240cm",
        image: "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/81A.png",
        href: "/panels/trims/wall-panel-81a-trim-oak-240cm-1-pack-10pcs",
      },
    ],
  },
  "panels/wall-panel-21-series": {
    key: "panels/wall-panel-21-series",
    categorySlug: "panels",
    slug: "wall-panel-21-series",
    title: "Wall Panel Series",
    description:
      "Explore the Wall Panel 21 Series range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21AOak1-Copy.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-21a-oak-seamless-240cm-1-pack-8pcs",
        label: "Wall Panel - Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21AOak1-Copy.jpg",
        href: "/panels/wall-panel-21-series/wall-panel-21a-oak-seamless-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-21b-grey-seamless-240cm-1-pack-8pcs",
        label: "Wall Panel - Grey - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21BGrey4-Copy.jpg",
        href: "/panels/wall-panel-21-series/wall-panel-21b-grey-seamless-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-21c-white-oak-seamless-240cm-1-pack-8pcs",
        label:
          "Wall Panel - White Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21CWhiteOak2-Copy.jpg",
        href: "/panels/wall-panel-21-series/wall-panel-21c-white-oak-seamless-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-21d-dark-oak-seamless-240cm-1-pack-8pcs",
        label: "Wall Panel - Dark Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21DDarkOak1-Copy.jpg",
        href: "/panels/wall-panel-21-series/wall-panel-21d-dark-oak-seamless-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-21e-black-seamless-240cm-1-pack-8pcs",
        label: "Wall Panel - Black - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21EBlack1-Copy.jpg",
        href: "/panels/wall-panel-21-series/wall-panel-21e-black-seamless-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-21t-walnut-seamless-240cm-1-pack-8pcs",
        label: "Wall Panel - Walnut - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/21TWalnut2-Copy.jpg",
        href: "/panels/wall-panel-21-series/wall-panel-21t-walnut-seamless-240cm-1-pack-8pcs",
      },
    ],
  },
  "panels/wall-panel-61-series": {
    key: "panels/wall-panel-61-series",
    categorySlug: "panels",
    slug: "wall-panel-61-series",
    title: "Wall Panel Series",
    description:
      "Explore the Wall Panel 61 Series range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_01_14_43PM.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-61a-oak-acoustic-240cm-1-pack-8pcs",
        label: "Wall Panel - Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_01_14_43PM.png",
        href: "/panels/wall-panel-61-series/wall-panel-61a-oak-acoustic-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-61b-light-grey-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Light Grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_01_15_52PM.png",
        href: "/panels/wall-panel-61-series/wall-panel-61b-light-grey-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-61d-dark-oak-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Dark Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_03_21_44PM.png",
        href: "/panels/wall-panel-61-series/wall-panel-61d-dark-oak-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-61t-walnut-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Walnut - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_03_20_34PM.png",
        href: "/panels/wall-panel-61-series/wall-panel-61t-walnut-pvc-240cm-1-pack-8pcs",
      },
    ],
  },

  "panels/wall-panel-62-series": {
    key: "panels/wall-panel-62-series",
    categorySlug: "panels",
    slug: "wall-panel-62-series",
    title: "PVC 30cm * 240cm ",
    description:
      "Explore the PVC 30cm * 240cm  range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_04_54_27PM_eadabc79-a0ad-4454-abb7-e95c16223d15.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-62a-oak-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_04_54_27PM_eadabc79-a0ad-4454-abb7-e95c16223d15.png",
        href: "/panels/wall-panel-62-series/wall-panel-62a-oak-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-62b-light-grey-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Light Grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb3_2026_09_54_45AM.png",
        href: "/panels/wall-panel-62-series/wall-panel-62b-light-grey-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-62c-dark-grey-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Dark Grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_04_02_16PM.png",
        href: "/panels/wall-panel-62-series/wall-panel-62c-dark-grey-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-62d-dark-oak-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Dark Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb2_2026_04_09_04PM.png",
        href: "/panels/wall-panel-62-series/wall-panel-62d-dark-oak-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-62t-walnut-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Walnut - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/ChatGPTImageFeb3_2026_09_45_07AM.png",
        href: "/panels/wall-panel-62-series/wall-panel-62t-walnut-pvc-240cm-1-pack-8pcs",
      },
    ],
  },
  "panels/wall-panel-63-series": {
    key: "panels/wall-panel-63-series",
    categorySlug: "panels",
    slug: "wall-panel-63-series",
    title: "PVC 30cm * 240cm cladding",
    description:
      "Explore the PVC 30cm * 240cm cladding range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/63ACorner.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-63a-corner-strip-oak-pvc-240cm-1-pack-10pcs",
        label: "Wall Panel Corner Strip - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/63ACorner.png",
        href: "/panels/wall-panel-63-series/wall-panel-63a-corner-strip-oak-pvc-240cm-1-pack-10pcs",
      },
      {
        id: "wall-panel-63a-trim-oak-pvc-240cm-1-pack-10pcs",
        label: "Wall Panel Trim - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/IMG-1161.png",
        href: "/panels/wall-panel-63-series/wall-panel-63a-trim-oak-pvc-240cm-1-pack-10pcs",
      },
      {
        id: "wall-panel-63a-oak-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP63-A_2_bfe7526e-939d-4f3d-a015-68d218f0789b.jpg",
        href: "/panels/wall-panel-63-series/wall-panel-63a-oak-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-63b-grey-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP63-B_2.jpg",
        href: "/panels/wall-panel-63-series/wall-panel-63b-grey-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-63t-walnut-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Walnut - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/WP63-T_2_01b1972a-4dbd-4ae4-88b8-47c4823f46ca.jpg",
        href: "/panels/wall-panel-63-series/wall-panel-63t-walnut-pvc-240cm-1-pack-8pcs",
      },
    ],
  },
  "panels/wall-panel-64-series": {
    key: "panels/wall-panel-64-series",
    categorySlug: "panels",
    slug: "wall-panel-64-series",
    title: "PVC 30cm * 240cm with black line",
    description:
      "Explore the PVC 30cm * 240cm with black line range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/64AOak-Copy_1072efe6-c8e4-4001-b71e-86f5908472a1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-64a-oak-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/64AOak-Copy_1072efe6-c8e4-4001-b71e-86f5908472a1.jpg",
        href: "/panels/wall-panel-64-series/wall-panel-64a-oak-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-64b-grey-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Grey - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/64BGrey-Copy.jpg",
        href: "/panels/wall-panel-64-series/wall-panel-64b-grey-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-64d-dark-oak-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Dark Oak - PVC - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/64DDarkOak-Copy.jpg",
        href: "/panels/wall-panel-64-series/wall-panel-64d-dark-oak-pvc-240cm-1-pack-8pcs",
      },
      {
        id: "wall-panel-64t-walnut-pvc-240cm-1-pack-8pcs",
        label: "Wall Panel - Walnut - Acoustic - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/64TWalnut-Copy.jpg",
        href: "/panels/wall-panel-64-series/wall-panel-64t-walnut-pvc-240cm-1-pack-8pcs",
      },
    ],
  },
  "panels/wall-panels": {
    key: "panels/wall-panels",
    categorySlug: "panels",
    slug: "wall-panels",
    title: "Wall Panels",
    description:
      "Explore the Wall Panels range from Haris Building Solutions. Quality wall panelling selected for performance, style and lasting value.",
    image:
      "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/80AOak-Copy.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wall-panel-80a-oak-seamless-240cm-1-pack-12pcs",
        label: "Wall Panel - Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/80AOak-Copy.jpg",
        href: "/panels/wall-panels/wall-panel-80a-oak-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "wall-panel-80b-grey-02-seamless-240cm-1-pack-12pcs",
        label:
          "Wall Panel - Light Grey - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/80BLightGrey-Copy.jpg",
        href: "/panels/wall-panels/wall-panel-80b-grey-02-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "wall-panel-80d-black-seamless-240cm-1-pack-12pcs",
        label:
          "Wall Panel - Mid Grey - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/80DMidGrey-Copy.jpg",
        href: "/panels/wall-panels/wall-panel-80d-black-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "wall-panel-80c-dark-brown-seamless-240cm-1-pack-12pcs",
        label:
          "Wall Panel - Dark Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/80CDarkOak-Copy.jpg",
        href: "/panels/wall-panels/wall-panel-80c-dark-brown-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "pack-81a-oak",
        label: "Wall Panel - Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/SC-WP81_OAK.jpg",
        href: "/panels/wall-panels/pack-81a-oak",
      },
      {
        id: "pack-81b-dark-oak",
        label: "Wall Panel - Walnut - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/SC-WP81_DARK_OAK.jpg",
        href: "/panels/wall-panels/pack-81b-dark-oak",
      },
      {
        id: "pack-81c-light-grey",
        label:
          "Wall Panel - Light Grey - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/SC-WP81_LIGHT_GREY.jpg",
        href: "/panels/wall-panels/pack-81c-light-grey",
      },
      {
        id: "pack-81d-dark-grey",
        label:
          "Wall Panel - Dark Grey - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/SC-WP81_DARK_GREY.jpg",
        href: "/panels/wall-panels/pack-81d-dark-grey",
      },
      {
        id: "pack-81e-black",
        label: "Wall Panel - Black - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/SC-WP81_BLACK.jpg",
        href: "/panels/wall-panels/pack-81e-black",
      },
      {
        id: "wall-panel-82a-oak-seamless-240cm-1-pack-12pcs",
        label: "Wall Panel - Oak - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/82AOak.jpg",
        href: "/panels/wall-panels/wall-panel-82a-oak-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "wall-panel-82b-grey-seamless-240cm-1-pack-12pcs",
        label: "Wall Panel - Grey - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/82BGrey.jpg",
        href: "/panels/wall-panels/wall-panel-82b-grey-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "wall-panel-82e-black-seamless-240cm-1-pack-12pcs",
        label: "Wall Panel - Black - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/82EBlack.png",
        href: "/panels/wall-panels/wall-panel-82e-black-seamless-240cm-1-pack-12pcs",
      },
      {
        id: "wall-panel-82t-walnut-seamless-240cm-1-pack-12pcs",
        label: "Wall Panel - Walnut - Seamless - 240cm",
        image:
          "https://cdn.shopify.com/s/files/1/0247/8846/7766/files/82TWalnut_087de175-5d63-41d9-81ed-fed36551f8bf.png",
        href: "/panels/wall-panels/wall-panel-82t-walnut-seamless-240cm-1-pack-12pcs",
      },
    ],
  },
  "panels/classic-8mm": {
    key: "panels/classic-8mm",
    categorySlug: "panels",
    slug: "classic-8mm",
    title: "Ceiling panels 250mm * 2700mm * 8mm",
    description:
      "Explore the Ceiling panels 250mm * 2700mm * 8mm range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-50.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-50.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "black-sparkle",
        label: "Black Sparkle",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle.jpg",
        href: "/panels/classic-8mm/black-sparkle",
      },
      {
        id: "calcutta-white",
        label: "Calcutta White",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Calcutta-white.jpg",
        href: "/panels/classic-8mm/calcutta-white",
      },
      {
        id: "carrera-marble-grey",
        label: "Carrera Marble Grey",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-marble-grey.jpg",
        href: "/panels/classic-8mm/carrera-marble-grey",
      },
      {
        id: "concrete-beige",
        label: "Concrete Beige",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-beige.jpg",
        href: "/panels/classic-8mm/concrete-beige",
      },
      {
        id: "concrete-grey",
        label: "Concrete Grey",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-grey-1.jpg",
        href: "/panels/classic-8mm/concrete-grey",
      },
      {
        id: "cutline-marble",
        label: "Cutline Marble",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Cutline-Marble.jpg",
        href: "/panels/classic-8mm/cutline-marble",
      },
      {
        id: "flat-white-gloss",
        label: "Flat White (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-White-Gloss.jpg",
        href: "/panels/classic-8mm/flat-white-gloss",
      },
      {
        id: "grey-marble",
        label: "Grey Marble",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble.jpg",
        href: "/panels/classic-8mm/grey-marble",
      },
      {
        id: "grey-sparkle",
        label: "Grey Sparkle",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-sparkle.jpg",
        href: "/panels/classic-8mm/grey-sparkle",
      },
      {
        id: "grey-stone",
        label: "Grey Stone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-stone.jpg",
        href: "/panels/classic-8mm/grey-stone",
      },
      {
        id: "white-sparkle",
        label: "White Sparkle",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle.jpg",
        href: "/panels/classic-8mm/white-sparkle",
      },
      {
        id: "white-chrome-gloss",
        label: "White Chrome (gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Chrome-gloss.jpg",
        href: "/panels/classic-8mm/white-chrome-gloss",
      },
      {
        id: "matt-white-4m",
        label: "Matt White 4m",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Matt-White-4m.jpg",
        href: "/panels/classic-8mm/matt-white-4m",
      },
      {
        id: "matt-white",
        label: "Matt White",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Matt-White-1.jpg",
        href: "/panels/classic-8mm/matt-white",
      },
    ],
  },
  "panels/classic-9mm": {
    key: "panels/classic-9mm",
    categorySlug: "panels",
    slug: "classic-9mm",
    title: "Ceiling panels 250mm * 2700mm * 9.5mm",
    description:
      "Explore the Ceiling panels 250mm * 2700mm * 9.5mm range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-51.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-51.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "black-sparkle-chrome-gloss",
        label: "Black Sparkle Chrome (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle-Chrome-Gloss.jpg",
        href: "/panels/classic-9mm/black-sparkle-chrome-gloss",
      },
      {
        id: "flat-white-gloss",
        label: "Flat White (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-White-Gloss-available-in-4-metres.jpg",
        href: "/panels/classic-9mm/flat-white-gloss",
      },
      {
        id: "grey-marble-gloss",
        label: "Grey Marble (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble-Gloss.jpg",
        href: "/panels/classic-9mm/grey-marble-gloss",
      },
      {
        id: "grey-marble-chrome-gloss",
        label: "Grey Marble Chrome (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble-Chrome-Gloss.jpg",
        href: "/panels/classic-9mm/grey-marble-chrome-gloss",
      },
      {
        id: "white-ash-gloss",
        label: "White Ash (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Ash-Gloss.jpg",
        href: "/panels/classic-9mm/white-ash-gloss",
      },
      {
        id: "white-ash-chrome-gloss",
        label: "White Ash & Chrome (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Ash-Chrome-Gloss.jpg",
        href: "/panels/classic-9mm/white-ash-chrome-gloss",
      },
      {
        id: "white-chrome-gloss",
        label: "White Chrome (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Chrome-Gloss-1.jpg",
        href: "/panels/classic-9mm/white-chrome-gloss",
      },
      {
        id: "white-sparkle-gloss",
        label: "White Sparkle (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Gloss.jpg",
        href: "/panels/classic-9mm/white-sparkle-gloss",
      },
      {
        id: "white-sparkle-chrome-gloss",
        label: "White Sparkle Chrome (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Chrome-Gloss.jpg",
        href: "/panels/classic-9mm/white-sparkle-chrome-gloss",
      },
    ],
  },
  "panels/classic-10mm": {
    key: "panels/classic-10mm",
    categorySlug: "panels",
    slug: "classic-10mm",
    title: "PVC Wall Panels 1000mm * 2400mm * 10mm",
    description:
      "Explore the PVC Wall Panels 1000mm * 2400mm * 10mm range from Haris Building Solutions.",
    heroImage:
      "https://cdn.shopify.com/s/files/1/0797/2519/9645/files/02_Z247.jpg?v=1770370608",
    image:
      "https://cdn.shopify.com/s/files/1/0797/2519/9645/files/02_Z247.jpg?v=1770370608",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "black-sparkle-gloss",
        label: "Black Sparkle (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle-Gloss.jpg",
        href: "/panels/classic-10mm/black-sparkle-gloss",
      },
      {
        id: "blue-gloss-onyx",
        label: "Blue Gloss Onyx",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blue-Gloss-Onyx.jpg",
        href: "/panels/classic-10mm/blue-gloss-onyx",
      },
      {
        id: "calcutta-gloss",
        label: "Calcutta (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Calcutta-Gloss.jpg",
        href: "/panels/classic-10mm/calcutta-gloss",
      },
      {
        id: "carrera-marble-gloss",
        label: "Carrera Marble (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-Marble-Gloss.jpg",
        href: "/panels/classic-10mm/carrera-marble-gloss",
      },
      {
        id: "carrera-marble-matt",
        label: "Carrera Marble (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-Marble-Matt.jpg",
        href: "/panels/classic-10mm/carrera-marble-matt",
      },
      {
        id: "concrete-beige",
        label: "Concrete Beige",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-Beige-1.jpg",
        href: "/panels/classic-10mm/concrete-beige",
      },
      {
        id: "concrete-grey",
        label: "Concrete Grey",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-Grey-2.jpg",
        href: "/panels/classic-10mm/concrete-grey",
      },
      {
        id: "eclipse-marble",
        label: "Eclipse Marble",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Eclipse-Marble.jpg",
        href: "/panels/classic-10mm/eclipse-marble",
      },
      {
        id: "emperor-marble",
        label: "Emperor Marble",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Emperor-Marble.jpg",
        href: "/panels/classic-10mm/emperor-marble",
      },
      {
        id: "gloss-white",
        label: "Gloss White",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Gloss-White.jpg",
        href: "/panels/classic-10mm/gloss-white",
      },
      {
        id: "grey-onyx-matt",
        label: "Grey Onyx (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Onyx-Matt.jpg",
        href: "/panels/classic-10mm/grey-onyx-matt",
      },
      {
        id: "grey-sparkle-gloss",
        label: "Grey Sparkle (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Sparkle-Gloss.jpg",
        href: "/panels/classic-10mm/grey-sparkle-gloss",
      },
      {
        id: "grey-stone",
        label: "Grey Stone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Stone-1.jpg",
        href: "/panels/classic-10mm/grey-stone",
      },
      {
        id: "grey-stone-gloss",
        label: "Grey Stone (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Stone-Gloss.jpg",
        href: "/panels/classic-10mm/grey-stone-gloss",
      },
      {
        id: "light-grey-marble-matt",
        label: "Light Grey Marble (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Light-Grey-Marble-Matt.jpg",
        href: "/panels/classic-10mm/light-grey-marble-matt",
      },
      {
        id: "light-grey-marble-gloss",
        label: "Light Grey Marble (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Light-Grey-Marble-Gloss-1.jpg",
        href: "/panels/classic-10mm/light-grey-marble-gloss",
      },
      {
        id: "orion-marble",
        label: "Orion Marble",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Orion-Marble.jpg",
        href: "/panels/classic-10mm/orion-marble",
      },
      {
        id: "pergamon-marble-gloss",
        label: "Pergamon Marble Gloss",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Pergamon-Marble-Gloss.jpg",
        href: "/panels/classic-10mm/pergamon-marble-gloss",
      },
      {
        id: "travertine-marble-gloss",
        label: "Travertine Marble (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Travertine-Marble-Gloss.jpg",
        href: "/panels/classic-10mm/travertine-marble-gloss",
      },
      {
        id: "white-sparkle-gloss",
        label: "White Sparkle (Gloss)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Gloss-1.jpg",
        href: "/panels/classic-10mm/white-sparkle-gloss",
      },
      {
        id: "white-stone",
        label: "White Stone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Stone.jpg",
        href: "/panels/classic-10mm/white-stone",
      },
      {
        id: "1m-x-2-4m-chevron-grey-matt-deluxe-panel",
        label: "Chevron Grey (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-che.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-chevron-grey-matt-deluxe-panel",
      },
      {
        id: "1m-x-2-4m-hoeycomb-grey-deluxe-panel",
        label: "HoneyCombe Grey",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500honey.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-hoeycomb-grey-deluxe-panel",
      },
      {
        id: "1m-x-2-4m-chevron-white-deluxe-panel",
        label: "Chevron White (White)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/400-ch-whi.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-chevron-white-deluxe-panel",
      },
      {
        id: "1m-x-2-4m-milano-matt-deluxe-panel",
        label: "Milano (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-milano.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-milano-matt-deluxe-panel",
      },
      {
        id: "1m-x-2-4m-moccaccino-matt-deluxe-panel",
        label: "Moccaccino (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500mocc.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-moccaccino-matt-deluxe-panel",
      },
      {
        id: "1m-x-2-4m-london-tile-deluxe-panel",
        label: "London Tile",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-2.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-london-tile-deluxe-panel",
      },
      {
        id: "1m-x-2-4m-chevron-marble-deluxe-panel",
        label: "Chevron Marble",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500cm.jpg",
        href: "/panels/classic-10mm/1m-x-2-4m-chevron-marble-deluxe-panel",
      },
    ],
  },
  "panels/decorative-panel": {
    key: "panels/decorative-panel",
    categorySlug: "panels",
    slug: "decorative-panel",
    title: "PVC wall panels 1000 mm * 2400 mm * 8mm",
    description: "Explore the DECORATIVE range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/decoff.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-49.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "8mm-london-white-matt-decorative-panel",
        label: "8mm London White (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-2.jpg",
        href: "/panels/decorative-panel/8mm-london-white-matt-decorative-panel",
      },
      {
        id: "8mm-chevron-white-decorative-panel",
        label: "8mm Chevron White",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/400-ch-whi.jpg",
        href: "/panels/decorative-panel/8mm-chevron-white-decorative-panel",
      },
      {
        id: "8mm-chevron-grey-decorative-panel",
        label: "8mm Chevron Grey",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-che.jpg",
        href: "/panels/decorative-panel/8mm-chevron-grey-decorative-panel",
      },
      {
        id: "natural-stone-graphite-natural-panel",
        label: "Natural Stone Graphite",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500gr.jpg",
        href: "/panels/decorative-panel/natural-stone-graphite-natural-panel",
      },
      {
        id: "natural-stone-anthracite-natural-panel",
        label: "Natural Stone Anthracite",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500hgh.jpg",
        href: "/panels/decorative-panel/natural-stone-anthracite-natural-panel",
      },
      {
        id: "8mm-natural-stone-light-grey-decorative-panel",
        label: "8mm Natural Stone Light Grey",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-naj.jpg",
        href: "/panels/decorative-panel/8mm-natural-stone-light-grey-decorative-panel",
      },
    ],
  },
  "panels/odyssey-collection": {
    key: "panels/odyssey-collection",
    categorySlug: "panels",
    slug: "odyssey-collection",
    title: "Odyssey Collection",
    description:
      "Explore the ODYSSEY COLLECTION range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-53.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/THUMBNAIL-53.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "autumn-ice-matt",
        label: "Autumn Ice (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Autumn-Ice-Matt.jpg",
        href: "/panels/odyssey-collection/autumn-ice-matt",
      },
      {
        id: "dark-grey-ice-matt",
        label: "Dark Grey Ice (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Dark-Grey-Ice-Matt.jpg",
        href: "/panels/odyssey-collection/dark-grey-ice-matt",
      },
      {
        id: "grey-ice-matt",
        label: "Grey Ice (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Ice-Matt.jpg",
        href: "/panels/odyssey-collection/grey-ice-matt",
      },
      {
        id: "sandstorm-ice-matt",
        label: "Sandstorm Ice (Matt)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Sandstorm-Ice-Matt.jpg",
        href: "/panels/odyssey-collection/sandstorm-ice-matt",
      },
    ],
  },
  "panels/trims-sealant": {
    key: "panels/trims-sealant",
    categorySlug: "panels",
    slug: "trims-sealant",
    title: "Trims & Sealant",
    description:
      "Explore the TRIMS & SEALANT range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/trim-ceiling.png",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/trim-ceiling.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "black-trims",
        label: "Black Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-b.jpg",
        href: "/panels/trims-sealant/black-trims",
      },
      {
        id: "chrome-trims",
        label: "Chrome Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-c.jpg",
        href: "/panels/trims-sealant/chrome-trims",
      },
      {
        id: "white-trims",
        label: "White Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-w-1.jpg",
        href: "/panels/trims-sealant/white-trims",
      },
      {
        id: "brushed-brass-trims",
        label: "Brushed Brass Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-bb.jpg",
        href: "/panels/trims-sealant/brushed-brass-trims",
      },
      {
        id: "pvc-panel-adhesive-sealant",
        label: "PVC Adhesive Sealant",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
        href: "/panels/trims-sealant/pvc-panel-adhesive-sealant",
      },
      {
        id: "grey-silicone",
        label: "Grey Silicone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
        href: "/panels/trims-sealant/grey-silicone",
      },
      {
        id: "white-silicone",
        label: "White Silicone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
        href: "/panels/trims-sealant/white-silicone",
      },
    ],
  },
  "flooring/7524": {
    key: "flooring/7524",
    categorySlug: "flooring",
    slug: "7524",
    title: "Cairo Oak SPC Flooring",
    description:
      "Explore the Cairo SPC Flooring range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-32.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "7524",
        label: "Cairo SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-1.jpg",
        href: "/flooring/7524/7524",
      },
    ],
  },
  "flooring/clawson-oak-spc-flooring": {
    key: "flooring/clawson-oak-spc-flooring",
    categorySlug: "flooring",
    slug: "clawson-oak-spc-flooring",
    title: "Clawson Oak SPC Flooring",
    description:
      "Explore the Clawson SPC Flooring range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-33.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "clawson-oak-spc-flooring",
        label: "Clawson SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-2.jpg",
        href: "/flooring/clawson-oak-spc-flooring/clawson-oak-spc-flooring",
      },
    ],
  },
  "flooring/dynasty-black-spc-flooring": {
    key: "flooring/dynasty-black-spc-flooring",
    categorySlug: "flooring",
    slug: "dynasty-black-spc-flooring",
    title: "Dynasty Black SPC Flooring",
    description:
      "Explore the Dynasty Black SPC Flooring range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/04/floor.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "dynasty-black-spc-flooring",
        label: "Dynasty Black SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-54.jpg",
        href: "/flooring/dynasty-black-spc-flooring/dynasty-black-spc-flooring",
      },
    ],
  },
  "flooring/olympus-beige-spc-flooring": {
    key: "flooring/olympus-beige-spc-flooring",
    categorySlug: "flooring",
    slug: "olympus-beige-spc-flooring",
    title: "Olympus Beige SPC Flooring",
    description:
      "Explore the Olympus Beige SPC Flooring range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-35.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "olympus-beige-spc-flooring",
        label: "Olympus Beige SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-4.jpg",
        href: "/flooring/olympus-beige-spc-flooring/olympus-beige-spc-flooring",
      },
    ],
  },
  "flooring/juno-grey-spc-flooring": {
    key: "flooring/juno-grey-spc-flooring",
    categorySlug: "flooring",
    slug: "juno-grey-spc-flooring",
    title: "Juno Grey SPC Flooring",
    description:
      "Explore the Juno Grey SPC Flooring range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/rgrg.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "juno-grey-spc-flooring",
        label: "Juno Grey SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/pooo.jpg",
        href: "/flooring/juno-grey-spc-flooring/juno-grey-spc-flooring",
      },
    ],
  },
  "flooring/athena-noir-spc-flooring": {
    key: "flooring/athena-noir-spc-flooring",
    categorySlug: "flooring",
    slug: "athena-noir-spc-flooring",
    title: "Athena Noir SPC Flooring",
    description:
      "Explore the Athena Noir SPC Flooring range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/ytyur.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "athena-noir-spc-flooring",
        label: "Athena Noir SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/poy.jpg",
        href: "/flooring/athena-noir-spc-flooring/athena-noir-spc-flooring",
      },
    ],
  },
  "flooring/hera-marble-spc-flooring": {
    key: "flooring/hera-marble-spc-flooring",
    categorySlug: "flooring",
    slug: "hera-marble-spc-flooring",
    title: "Hera Marble SPC Flooring",
    description:
      "Explore the Hera Marble SPC Flooring range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/hrh.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "hera-marble-spc-flooring",
        label: "Hera Marble SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/fwfe.jpg",
        href: "/flooring/hera-marble-spc-flooring/hera-marble-spc-flooring",
      },
    ],
  },
  "flooring/ares-carrera-spc-flooring": {
    key: "flooring/ares-carrera-spc-flooring",
    categorySlug: "flooring",
    slug: "ares-carrera-spc-flooring",
    title: "Ares Carrera SPC Flooring",
    description:
      "Explore the Ares Carrera SPC Flooring range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/t5y.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "ares-carrera-spc-flooring",
        label: "Ares Carrera SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/poiu.jpg",
        href: "/flooring/ares-carrera-spc-flooring/ares-carrera-spc-flooring",
      },
    ],
  },
  "flooring/reve-pearl-spc-flooring": {
    key: "flooring/reve-pearl-spc-flooring",
    categorySlug: "flooring",
    slug: "reve-pearl-spc-flooring",
    title: "Reve Pearl SPC Flooring",
    description:
      "Explore the Reve Pearl SPC Flooring range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/syjryjr.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "reve-pearl-spc-flooring",
        label: "Reve Pearl SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/poou.jpg",
        href: "/flooring/reve-pearl-spc-flooring/reve-pearl-spc-flooring",
      },
    ],
  },
  "flooring/reve-dark-grey-spc-flooring": {
    key: "flooring/reve-dark-grey-spc-flooring",
    categorySlug: "flooring",
    slug: "reve-dark-grey-spc-flooring",
    title: "Reve Dark Grey SPC Flooring",
    description:
      "Explore the Reve Dark Grey SPC Flooring range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/yujyrsj.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "reve-dark-grey-spc-flooring",
        label: "Reve Dark Grey SPC Flooring",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/poo.jpg",
        href: "/flooring/reve-dark-grey-spc-flooring/reve-dark-grey-spc-flooring",
      },
    ],
  },
  "flooring/tiles-trims-accessories": {
    key: "flooring/tiles-trims-accessories",
    categorySlug: "flooring",
    slug: "tiles-trims-accessories",
    title: "SPC Tile Trims",
    description:
      "Explore the SPC Tile Trims range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/acces.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/acces.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "brushed-grey-trim",
        label: "Brushed Grey Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim.jpg",
        href: "/flooring/tiles-trims-accessories/brushed-grey-trim",
      },
      {
        id: "carrera-trim",
        label: "Carrera Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim.jpg",
        href: "/flooring/tiles-trims-accessories/carrera-trim",
      },
      {
        id: "juno-grey-trim",
        label: "Juno Grey Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim.jpg",
        href: "/flooring/tiles-trims-accessories/juno-grey-trim",
      },
      {
        id: "dynasty-black",
        label: "Dynasty Black Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black.jpg",
        href: "/flooring/tiles-trims-accessories/dynasty-black",
      },
      {
        id: "olympus-beige",
        label: "Olympus Beige Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige.jpg",
        href: "/flooring/tiles-trims-accessories/olympus-beige",
      },
      {
        id: "selene-white-trim",
        label: "Selene White Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim.jpg",
        href: "/flooring/tiles-trims-accessories/selene-white-trim",
      },
    ],
  },
  "wall-tiles/brushed-grey-spc-wall-tiles": {
    key: "wall-tiles/brushed-grey-spc-wall-tiles",
    categorySlug: "wall-tiles",
    slug: "brushed-grey-spc-wall-tiles",
    title: "Brushed Grey SPC Wall Tiles",
    description:
      "Explore the Brushed Grey SPC Wall Tiles range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-42.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "brushed-grey-spc-wall-tiles",
        label: "Brushed Grey SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/poio.jpg",
        href: "/wall-tiles/brushed-grey-spc-wall-tiles/brushed-grey-spc-wall-tiles",
      },
    ],
  },
  "wall-tiles/selene-spc-wall-tiles": {
    key: "wall-tiles/selene-spc-wall-tiles",
    categorySlug: "wall-tiles",
    slug: "selene-spc-wall-tiles",
    title: "Selene SPC Wall Tiles",
    description:
      "Explore the Selene SPC Wall Tiles range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-43.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "selene-spc-wall-tiles",
        label: "Selene SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup.jpg",
        href: "/wall-tiles/selene-spc-wall-tiles/selene-spc-wall-tiles",
      },
    ],
  },
  "wall-tiles/carrera-spc-wall-tiles": {
    key: "wall-tiles/carrera-spc-wall-tiles",
    categorySlug: "wall-tiles",
    slug: "carrera-spc-wall-tiles",
    title: "Carrera SPC Wall Tiles",
    description:
      "Explore the Carrera SPC Wall Tiles range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-44.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "carrera-spc-wall-tiles",
        label: "Carrera SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-1.jpg",
        href: "/wall-tiles/carrera-spc-wall-tiles/carrera-spc-wall-tiles",
      },
    ],
  },
  "wall-tiles/juno-grey-spc-wall-tiles": {
    key: "wall-tiles/juno-grey-spc-wall-tiles",
    categorySlug: "wall-tiles",
    slug: "juno-grey-spc-wall-tiles",
    title: "Juno Grey SPC Wall Tiles",
    description:
      "Explore the Juno Grey SPC Wall Tiles range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-45.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "juno-grey-spc-wall-tiles",
        label: "Juno Grey SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-2.jpg",
        href: "/wall-tiles/juno-grey-spc-wall-tiles/juno-grey-spc-wall-tiles",
      },
    ],
  },
  "wall-tiles/dynasty-black-spc-wall-tiles": {
    key: "wall-tiles/dynasty-black-spc-wall-tiles",
    categorySlug: "wall-tiles",
    slug: "dynasty-black-spc-wall-tiles",
    title: "Dynasty Black SPC Wall Tiles",
    description:
      "Explore the Dynasty Black SPC Wall Tiles range from Haris Building Solutions.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/04/wall.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "dynasty-black-spc-wall-tiles",
        label: "Dynasty Black SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-55.jpg",
        href: "/wall-tiles/dynasty-black-spc-wall-tiles/dynasty-black-spc-wall-tiles",
      },
    ],
  },
  "wall-tiles/olympus-beige-spc-wall-tiles": {
    key: "wall-tiles/olympus-beige-spc-wall-tiles",
    categorySlug: "wall-tiles",
    slug: "olympus-beige-spc-wall-tiles",
    title: "Olympus Beige SPC Wall Tiles",
    description:
      "Explore the Olympus Beige SPC Wall Tiles range from Haris Building Solutions.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-47.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "olympus-beige-spc-wall-tiles",
        label: "Olympus Beige SPC Wall Tiles",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-4.jpg",
        href: "/wall-tiles/olympus-beige-spc-wall-tiles/olympus-beige-spc-wall-tiles",
      },
    ],
  },
  "wall-tiles/tiles-trims-accessories": {
    key: "wall-tiles/tiles-trims-accessories",
    categorySlug: "wall-tiles",
    slug: "tiles-trims-accessories",
    title: "SPC Tile Trims",
    description:
      "Explore the SPC Tile Trims range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/acces.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/acces.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "brushed-grey-trim",
        label: "Brushed Grey Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim.jpg",
        href: "/wall-tiles/tiles-trims-accessories/brushed-grey-trim",
      },
      {
        id: "carrera-trim",
        label: "Carrera Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim.jpg",
        href: "/wall-tiles/tiles-trims-accessories/carrera-trim",
      },
      {
        id: "juno-grey-trim",
        label: "Juno Grey Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim.jpg",
        href: "/wall-tiles/tiles-trims-accessories/juno-grey-trim",
      },
      {
        id: "dynasty-black",
        label: "Dynasty Black Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black.jpg",
        href: "/wall-tiles/tiles-trims-accessories/dynasty-black",
      },
      {
        id: "olympus-beige",
        label: "Olympus Beige Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige.jpg",
        href: "/wall-tiles/tiles-trims-accessories/olympus-beige",
      },
      {
        id: "selene-white-trim",
        label: "Selene White Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim.jpg",
        href: "/wall-tiles/tiles-trims-accessories/selene-white-trim",
      },
    ],
  },
  "accessories/sanitaryware-accessories": {
    key: "accessories/sanitaryware-accessories",
    categorySlug: "accessories",
    slug: "sanitaryware-accessories",
    title: "Sanitaryware Accessories",
    description:
      "Explore the Sanitaryware Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/gf-768x1024.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/gf-768x1024.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "wc-frame-cistern-with-chrome-flush-plate",
        label: "WC Frame & Cistern With Chrome Flush Plate",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/wc-frame.jpg",
        href: "/accessories/sanitaryware-accessories/wc-frame-cistern-with-chrome-flush-plate",
      },
      {
        id: "black-flush-plate",
        label: "Flush Plates",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Chrome-Square.jpg",
        href: "/accessories/sanitaryware-accessories/black-flush-plate",
      },
      {
        id: "soft-close-d-shaped-wc-seat",
        label: "Soft Close D Shaped WC Seat",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/gf-768x1024.jpg",
        href: "/accessories/sanitaryware-accessories/soft-close-d-shaped-wc-seat",
      },
      {
        id: "concealed-cistern",
        label: "Concealed Cistern",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ci-768x1024.jpg",
        href: "/accessories/sanitaryware-accessories/concealed-cistern",
      },
      {
        id: "concealed-cistern-push-button",
        label: "Concealed Cistern Push Buttons",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-13.jpg",
        href: "/accessories/sanitaryware-accessories/concealed-cistern-push-button",
      },
      {
        id: "white-bush-button-hinge-covers",
        label: "Push Button and Hinge Covers",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image.jpg",
        href: "/accessories/sanitaryware-accessories/white-bush-button-hinge-covers",
      },
    ],
  },
  "accessories/taps-accessories": {
    key: "accessories/taps-accessories",
    categorySlug: "accessories",
    slug: "taps-accessories",
    title: "Taps Accessories",
    description:
      "Explore the Taps Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2-768x1024.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2-768x1024.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "click-clack-chrome-basin-waste",
        label: "Click Clack Chrome Basin Waste",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-18-768x1024.jpg",
        href: "/accessories/taps-accessories/click-clack-chrome-basin-waste",
      },
      {
        id: "universal-click-clack-basin-waste-black",
        label: "Universal Click Clack Basin Waste Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-13-768x1024.jpg",
        href: "/accessories/taps-accessories/universal-click-clack-basin-waste-black",
      },
      {
        id: "universal-click-clack-basin-waste-chrome",
        label: "Universal Click Clack Basin Waste Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-14-768x1024.jpg",
        href: "/accessories/taps-accessories/universal-click-clack-basin-waste-chrome",
      },
      {
        id: "concealed-cistern",
        label: "Chrome Click Waste and Overflow",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-chrome-click-waste-and-overflow-768x1024.jpg",
        href: "/accessories/taps-accessories/concealed-cistern",
      },
      {
        id: "bath-black-click-waste-and-overflow",
        label: "Black Click Waste and Overflow",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-blackclick-waste-and-overflow-768x1024.jpg",
        href: "/accessories/taps-accessories/bath-black-click-waste-and-overflow",
      },
      {
        id: "bath-brushed-brass-click-waste-and-overflow",
        label: "Brushed Brass Click Waste and Overflow",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-12.jpg",
        href: "/accessories/taps-accessories/bath-brushed-brass-click-waste-and-overflow",
      },
      {
        id: "bath-chrome-pop-up-waste-and-overflow",
        label: "Bath Chrome Pop-Up Waste and Overflow",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-chrome-pop-up-waste-and-overflow-768x1024.jpg",
        href: "/accessories/taps-accessories/bath-chrome-pop-up-waste-and-overflow",
      },
      {
        id: "bath-black-pop-up-waste-and-overflow",
        label: "Bath Black Pop-Up Waste and Overflow",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-black-pop-up-waste-and-overflow-768x1024.jpg",
        href: "/accessories/taps-accessories/bath-black-pop-up-waste-and-overflow",
      },
    ],
  },
  "accessories/showers-accessories": {
    key: "accessories/showers-accessories",
    categorySlug: "accessories",
    slug: "showers-accessories",
    title: "Showers Accessories",
    description:
      "Explore the Shower Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/jp-768x1024.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/jp-768x1024.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "identity-dual-control-shower-valve-1-outlet",
        label: "Identity Dual Control Shower Valve (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-21-768x1024.jpg",
        href: "/accessories/showers-accessories/identity-dual-control-shower-valve-1-outlet",
      },
      {
        id: "identity-round-push-shower-valve-2-outlet",
        label: "Identity Round Push Shower Valve (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/8-768x1024.jpg",
        href: "/accessories/showers-accessories/identity-round-push-shower-valve-2-outlet",
      },
      {
        id: "block-push-shower-valve-square-1-outlet",
        label: "Block Push Shower Valve Square (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-3-768x1024.jpg",
        href: "/accessories/showers-accessories/block-push-shower-valve-square-1-outlet",
      },
      {
        id: "block-push-shower-valve-square-2-outlet",
        label: "Block Push Shower Valve Square (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/7-1-768x1024.jpg",
        href: "/accessories/showers-accessories/block-push-shower-valve-square-2-outlet",
      },
      {
        id: "black-dual-control-round-shower-valve-1-outlet",
        label: "Black Dual Control Round Shower Valve (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Round.jpg",
        href: "/accessories/showers-accessories/black-dual-control-round-shower-valve-1-outlet",
      },
      {
        id: "black-triple-control-round-shower-valve-2-outlet",
        label: "Black Triple Control Round Shower Valve (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Round.jpg",
        href: "/accessories/showers-accessories/black-triple-control-round-shower-valve-2-outlet",
      },
      {
        id: "black-dual-control-square-shower-valve-1-outlet",
        label: "Black Dual Control Square Shower Valve (1 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Square.jpg",
        href: "/accessories/showers-accessories/black-dual-control-square-shower-valve-1-outlet",
      },
      {
        id: "black-triple-control-square-shower-valve-2-outlet",
        label: "Black Triple Control Square Shower Valve (2 Outlet)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Square.jpg",
        href: "/accessories/showers-accessories/black-triple-control-square-shower-valve-2-outlet",
      },
      {
        id: "300mm-round-fixed-head",
        label: "300mm Round Fixed Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/r-2-768x1024.jpg",
        href: "/accessories/showers-accessories/300mm-round-fixed-head",
      },
      {
        id: "300mm-square-fixed-head",
        label: "300mm Square Fixed Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-768x1024.jpg",
        href: "/accessories/showers-accessories/300mm-square-fixed-head",
      },
      {
        id: "identity-round-arm",
        label: "Identity Ceiling Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/round-shower-arm-768x1024.jpg",
        href: "/accessories/showers-accessories/identity-round-arm",
      },
      {
        id: "block-ceiling-arm",
        label: "Block Ceiling Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/yj-768x1024.jpg",
        href: "/accessories/showers-accessories/block-ceiling-arm",
      },
      {
        id: "ceiling-arm-round",
        label: "Ceiling Arm Round",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/vi-768x1024.jpg",
        href: "/accessories/showers-accessories/ceiling-arm-round",
      },
      {
        id: "ceiling-arm-square",
        label: "Ceiling Arm Square",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/g-768x1024.jpg",
        href: "/accessories/showers-accessories/ceiling-arm-square",
      },
      {
        id: "identity-sliding-rail-kit",
        label: "Identity Sliding Rail Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/jp-768x1024.jpg",
        href: "/accessories/showers-accessories/identity-sliding-rail-kit",
      },
      {
        id: "square-sliding-rail-kit",
        label: "Square Sliding Rail Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/syeh-768x1024.jpg",
        href: "/accessories/showers-accessories/square-sliding-rail-kit",
      },
      {
        id: "identity-wall-outlet-and-holder",
        label: "Identity Wall Outlet and Holder",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/thr-768x1024.jpg",
        href: "/accessories/showers-accessories/identity-wall-outlet-and-holder",
      },
      {
        id: "block-wall-outlet-and-holder",
        label: "Block Wall Outlet and Holder",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/j-768x1024.jpg",
        href: "/accessories/showers-accessories/block-wall-outlet-and-holder",
      },
      {
        id: "chrome-round-elbow-outlet",
        label: "Chrome Round Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/cu-768x1024.jpg",
        href: "/accessories/showers-accessories/chrome-round-elbow-outlet",
      },
      {
        id: "chrome-block-elbow-outlet",
        label: "Chrome Block Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/tt-768x1024.jpg",
        href: "/accessories/showers-accessories/chrome-block-elbow-outlet",
      },
      {
        id: "easy-fix-kit",
        label: "Easy Fix Kit",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/d-3-768x1024.jpg",
        href: "/accessories/showers-accessories/easy-fix-kit",
      },
      {
        id: "round-fixed-head",
        label: "Round Fixed Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/rt-1-768x1024.jpg",
        href: "/accessories/showers-accessories/round-fixed-head",
      },
      {
        id: "fixed-square-head",
        label: "Fixed Square Head",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-768x1024.jpg",
        href: "/accessories/showers-accessories/fixed-square-head",
      },
      {
        id: "black-round-arm",
        label: "Black Round Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewf-768x1024.jpg",
        href: "/accessories/showers-accessories/black-round-arm",
      },
      {
        id: "black-square-arm",
        label: "Black Square Arm",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/t-768x1024.jpg",
        href: "/accessories/showers-accessories/black-square-arm",
      },
      {
        id: "ceiling-arm-round-black",
        label: "Ceiling Arm Round Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-1-768x1024.jpg",
        href: "/accessories/showers-accessories/ceiling-arm-round-black",
      },
      {
        id: "ceiling-arm-square-black",
        label: "Ceiling Arm Square Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewq-768x1024.jpg",
        href: "/accessories/showers-accessories/ceiling-arm-square-black",
      },
      {
        id: "round-sliding-rail-kit-black",
        label: "Round Sliding Rail Kit Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/rg-768x1024.jpg",
        href: "/accessories/showers-accessories/round-sliding-rail-kit-black",
      },
      {
        id: "square-sliding-rail-kit-black",
        label: "Square Sliding Rail Kit Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/44-768x1024.jpg",
        href: "/accessories/showers-accessories/square-sliding-rail-kit-black",
      },
      {
        id: "round-wall-outlet-black",
        label: "Round Wall Outlet Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/ey-768x1024.jpg",
        href: "/accessories/showers-accessories/round-wall-outlet-black",
      },
      {
        id: "square-wall-outlet-black",
        label: "Square Wall Outlet Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/erw-768x1024.jpg",
        href: "/accessories/showers-accessories/square-wall-outlet-black",
      },
      {
        id: "black-round-elbow-outlet",
        label: "Black Round Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/55-768x1024.jpg",
        href: "/accessories/showers-accessories/black-round-elbow-outlet",
      },
      {
        id: "black-square-elbow-outlet",
        label: "Black Square Elbow Outlet",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/e-1-768x1024.jpg",
        href: "/accessories/showers-accessories/black-square-elbow-outlet",
      },
    ],
  },
  "accessories/enclosures-tray-accessories": {
    key: "accessories/enclosures-tray-accessories",
    categorySlug: "accessories",
    slug: "enclosures-tray-accessories",
    title: "Enclosures Tray Accessories",
    description:
      "Explore the Enclosures/Trays Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/222-768x1024.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/222-768x1024.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "90mm-fast-flow-waste-black",
        label: "90mm Fast Flow Waste Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-3-768x1024.jpg",
        href: "/accessories/enclosures-tray-accessories/90mm-fast-flow-waste-black",
      },
      {
        id: "90mm-fast-flow-waste-chrome",
        label: "90mm Fast Flow Waste Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/222-768x1024.jpg",
        href: "/accessories/enclosures-tray-accessories/90mm-fast-flow-waste-chrome",
      },
      {
        id: "90mm-fast-flow-waste-brushed-brass",
        label: "90mm Fast Flow Waste Brushed Brass",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-6.jpg",
        href: "/accessories/enclosures-tray-accessories/90mm-fast-flow-waste-brushed-brass",
      },
      {
        id: "shower-waste-for-slate-trays",
        label: "90mm Fast Flow Waste (For slate trays)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/04/slate-waste-2.jpg",
        href: "/accessories/enclosures-tray-accessories/shower-waste-for-slate-trays",
      },
    ],
  },
  "accessories/underfloor-heating": {
    key: "accessories/underfloor-heating",
    categorySlug: "accessories",
    slug: "underfloor-heating",
    title: "Underfloor Heating",
    description:
      "Explore the Underfloor Heating range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/underfloor.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/underfloor.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "7-day-programmable-thermostat-wifi-control",
        label: "Thermostats",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-3.jpg",
        href: "/accessories/underfloor-heating/7-day-programmable-thermostat-wifi-control",
      },
    ],
  },
  "accessories/radiator-accessories": {
    key: "accessories/radiator-accessories",
    categorySlug: "accessories",
    slug: "radiator-accessories",
    title: "Radiator Accessories",
    description:
      "Explore the Radiator Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/radiator.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/radiator.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "straight-radiator-valves",
        label: "Straight Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite.jpg",
        href: "/accessories/radiator-accessories/straight-radiator-valves",
      },
      {
        id: "angled-radiator-valves",
        label: "Angled Valves (pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-1.jpg",
        href: "/accessories/radiator-accessories/angled-radiator-valves",
      },
      {
        id: "corner-radiator-valves",
        label: "Corner Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-2.jpg",
        href: "/accessories/radiator-accessories/corner-radiator-valves",
      },
      {
        id: "straight-square-radiator-valves",
        label: "Straight Square Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/black.jpg",
        href: "/accessories/radiator-accessories/straight-square-radiator-valves",
      },
      {
        id: "angled-square-radiator-valves",
        label: "Angled Square Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-1.jpg",
        href: "/accessories/radiator-accessories/angled-square-radiator-valves",
      },
      {
        id: "straight-thermostatic-radiator-valves",
        label: "Straight Thermostatic Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-3.jpg",
        href: "/accessories/radiator-accessories/straight-thermostatic-radiator-valves",
      },
      {
        id: "angled-thermostatic-radiator-valves",
        label: "Angled Thermostatic Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-4.jpg",
        href: "/accessories/radiator-accessories/angled-thermostatic-radiator-valves",
      },
      {
        id: "corner-thermostatic-radiator-valves",
        label: "Corner Thermostatic Valves (Pair)",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-5.jpg",
        href: "/accessories/radiator-accessories/corner-thermostatic-radiator-valves",
      },
      {
        id: "heating-element-chrome",
        label: "Heating Element Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/11/rr-1-768x1024.jpg",
        href: "/accessories/radiator-accessories/heating-element-chrome",
      },
    ],
  },
  "accessories/trims-sealant": {
    key: "accessories/trims-sealant",
    categorySlug: "accessories",
    slug: "trims-sealant",
    title: "Trims & Sealant",
    description:
      "Explore the Trims & Sealant range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/trims-and-sealant.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/trims-and-sealant.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "black-trims",
        label: "Black Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-b.jpg",
        href: "/accessories/trims-sealant/black-trims",
      },
      {
        id: "chrome-trims",
        label: "Chrome Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-c.jpg",
        href: "/accessories/trims-sealant/chrome-trims",
      },
      {
        id: "white-trims",
        label: "White Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-w-1.jpg",
        href: "/accessories/trims-sealant/white-trims",
      },
      {
        id: "brushed-brass-trims",
        label: "Brushed Brass Trims",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-bb.jpg",
        href: "/accessories/trims-sealant/brushed-brass-trims",
      },
      {
        id: "pvc-panel-adhesive-sealant",
        label: "PVC Adhesive Sealant",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
        href: "/accessories/trims-sealant/pvc-panel-adhesive-sealant",
      },
      {
        id: "grey-silicone",
        label: "Grey Silicone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
        href: "/accessories/trims-sealant/grey-silicone",
      },
      {
        id: "white-silicone",
        label: "White Silicone",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
        href: "/accessories/trims-sealant/white-silicone",
      },
    ],
  },
  "accessories/extractor-fan": {
    key: "accessories/extractor-fan",
    categorySlug: "accessories",
    slug: "extractor-fan",
    title: "Extractor Fan",
    description:
      "Explore the Extractor Fan range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Turbo-Extractor-Fan-with-Timer.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Turbo-Extractor-Fan-with-Timer.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "concealed-extractor-fan",
        label: "Concealed Extractor Fan",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2023/12/sfd-768x1024.jpg",
        href: "/accessories/extractor-fan/concealed-extractor-fan",
      },
      {
        id: "extractor-fan-fascia",
        label: "Coloured Fascias",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-Extractor-Fascia.jpg",
        href: "/accessories/extractor-fan/extractor-fan-fascia",
      },
    ],
  },
  "accessories/tiles-trims-accessories": {
    key: "accessories/tiles-trims-accessories",
    categorySlug: "accessories",
    slug: "tiles-trims-accessories",
    title: "SPC Tile Trims",
    description:
      "Explore the SPC Tile Trims range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim-2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim-2.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "brushed-grey-trim",
        label: "Brushed Grey Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim.jpg",
        href: "/accessories/tiles-trims-accessories/brushed-grey-trim",
      },
      {
        id: "carrera-trim",
        label: "Carrera Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim.jpg",
        href: "/accessories/tiles-trims-accessories/carrera-trim",
      },
      {
        id: "juno-grey-trim",
        label: "Juno Grey Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim.jpg",
        href: "/accessories/tiles-trims-accessories/juno-grey-trim",
      },
      {
        id: "dynasty-black",
        label: "Dynasty Black Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black.jpg",
        href: "/accessories/tiles-trims-accessories/dynasty-black",
      },
      {
        id: "olympus-beige",
        label: "Olympus Beige Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige.jpg",
        href: "/accessories/tiles-trims-accessories/olympus-beige",
      },
      {
        id: "selene-white-trim",
        label: "Selene White Trim",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim.jpg",
        href: "/accessories/tiles-trims-accessories/selene-white-trim",
      },
    ],
  },
  "accessories/ip65-lighting": {
    key: "accessories/ip65-lighting",
    categorySlug: "accessories",
    slug: "ip65-lighting",
    title: "IP65 Lighting",
    description:
      "Explore the IP65 Lighting range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/ip65-.jpg",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/ip65-.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "spotlight-including-white-bezel",
        label: "Spotlight including White Bezel",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-including-White-Bezel.jpg",
        href: "/accessories/ip65-lighting/spotlight-including-white-bezel",
      },
      {
        id: "chrome-bezel-only",
        label: "Chrome Bezel only",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Chrome-Bezel-only.jpg",
        href: "/accessories/ip65-lighting/chrome-bezel-only",
      },
      {
        id: "black-bezel-only",
        label: "Black Bezel only",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Bezel-only.jpg",
        href: "/accessories/ip65-lighting/black-bezel-only",
      },
      {
        id: "brushed-brass-bezel-only",
        label: "Brushed Brass Bezel only",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-Bezel-only.jpg",
        href: "/accessories/ip65-lighting/brushed-brass-bezel-only",
      },
    ],
  },
  "accessories/furniture-accessories": {
    key: "accessories/furniture-accessories",
    categorySlug: "accessories",
    slug: "furniture-accessories",
    title: "Furniture Accessories",
    description:
      "Explore the Furniture Accessories range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/furniture-2.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/furniture-2.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "edge-handles-320mm-chrome",
        label: "Edge Handles 320mm Chrome",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/01/wfwf-768x10241-1.jpg",
        href: "/accessories/furniture-accessories/edge-handles-320mm-chrome",
      },
      {
        id: "edge-handles-320mm-black",
        label: "Edge Handles 320mm Black",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/01/wff-768x1024-1.jpg",
        href: "/accessories/furniture-accessories/edge-handles-320mm-black",
      },
      {
        id: "edge-handles-320mm-brushed-brass",
        label: "Edge Handles 320mm Brushed Brass",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-handles-1.jpg",
        href: "/accessories/furniture-accessories/edge-handles-320mm-brushed-brass",
      },
      {
        id: "black-basin-overflow-cover",
        label: "Black Basin Overflow Cover",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2024/01/det-768x1024-1.jpg",
        href: "/accessories/furniture-accessories/black-basin-overflow-cover",
      },
      {
        id: "brushed-brass-basin-overflow-cover",
        label: "Brushed Brass Basin Overflow Cover",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-overflow-2.jpg",
        href: "/accessories/furniture-accessories/brushed-brass-basin-overflow-cover",
      },
    ],
  },
  "accessories/niche": {
    key: "accessories/niche",
    categorySlug: "accessories",
    slug: "niche",
    title: "Niche",
    description: "Explore the Niche range from Haris Building Solutions.",
    heroImage:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Bronze.jpg",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Bronze.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "niche-with-shelf",
        label: "Niche with shelf",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
        href: "/accessories/niche/niche-with-shelf",
      },
      {
        id: "niche-with-led",
        label: "Niche with LED",
        image:
          "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600.jpg",
        href: "/accessories/niche/niche-with-led",
      },
    ],
  },
};

export function getCollectionPage(
  categorySlug: string,
  collectionSlug: string,
): CollectionPageData | null {
  return COLLECTION_PAGES[`${categorySlug}/${collectionSlug}`] ?? null;
}

export function getNestedCollectionPage(
  categorySlug: string,
  collectionSlug: string,
  nestedSlug: string,
): CollectionPageData | null {
  return (
    COLLECTION_PAGES[`${categorySlug}/${collectionSlug}/${nestedSlug}`] ?? null
  );
}

export function getAllCollectionParams(): {
  slug: string;
  collection: string;
}[] {
  return Object.values(COLLECTION_PAGES)
    .filter((page) => page.key.split("/").length === 2)
    .map((page) => ({
      slug: page.categorySlug,
      collection: page.slug,
    }));
}

export const PRODUCT_PAGES: Record<string, ProductPageData> = {
  "sanitaryware/smart-wc/smart-wc-floorstanding": {
    key: "sanitaryware/smart-wc/smart-wc-floorstanding",
    categorySlug: "sanitaryware",
    collectionSlug: "smart-wc",
    slug: "smart-wc-floorstanding",
    title: "Smart WC Floorstanding",
    description:
      "Introducing the Haris Building Solutions Smart Toilet – the first in its category to popularise a two-piece, back-to-wall smart WC in Europe. Combining premium quality, modern design, and exceptional value, it meets today’s highest hygiene standards and includes all essential smart features. Operated via remote control or the smart lid’s side panel, it offers top-tier performance and convenience. Backed by a comprehensive warranty: 10 years on ceramic components and 3 years on the smart lid and electronics &#8211; for innovation you can trust.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/06/FLOOR-STANDING.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/FLOOR-STANDING-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/floor-1-scaled.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "sanitaryware/smart-wc/smart-wc-wall-hung": {
    key: "sanitaryware/smart-wc/smart-wc-wall-hung",
    categorySlug: "sanitaryware",
    collectionSlug: "smart-wc",
    slug: "smart-wc-wall-hung",
    title: "Smart WC Wall Hung",
    description:
      "Introducing the Haris Building Solutions Smart Toilet – the first in its category to popularise a two-piece, back-to-wall smart WC in Europe. Combining premium quality, modern design, and exceptional value, it meets today’s highest hygiene standards and includes all essential smart features. Operated via remote control or the smart lid’s side panel, it offers top-tier performance and convenience. Backed by a comprehensive warranty: 10 years on ceramic components and 3 years on the smart lid and electronics &#8211; for innovation you can trust.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/06/WALL-HUNG.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/WALL-HUNG-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/wall-hung-4.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "sanitaryware/rico/rico-comfort-height-fully-back-to-wall-including-soft-close-and-cistern-with-fittings":
    {
      key: "sanitaryware/rico/rico-comfort-height-fully-back-to-wall-including-soft-close-and-cistern-with-fittings",
      categorySlug: "sanitaryware",
      collectionSlug: "rico",
      slug: "rico-comfort-height-fully-back-to-wall-including-soft-close-and-cistern-with-fittings",
      title:
        "Rico Comfort Height Fully Back To Wall Including Soft Close And Cistern With Fittings",
      description:
        "Comfort height WC for improved accessibility and ease of use Fully back-to-wall design for a seamless, concealed pipework finish Rimless bowl design for improved hygiene and easier cleaning Anti-bacterial ceramic construction Includes cistern, WC pan, soft-close seat, and fittings Dual flush system for water-saving performance Easy-clean glazed surface reduces dirt build-up Soft-close seat for quiet operation Modern white finish for contemporary bathrooms Floor-standing installation with concealed cistern compatibility Designed for durability and long-term performance Minimalist design suitable for modern bathroom suites",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/p-3-768x1024.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/p-3.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/w.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/kW29mj_i.jpeg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/LT-2125A-R-650.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "sanitaryware/branch/branch-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat":
    {
      key: "sanitaryware/branch/branch-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
      categorySlug: "sanitaryware",
      collectionSlug: "branch",
      slug: "branch-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
      title:
        "Branch Rimless Fully Back To Wall Pan With Cistern And Soft Close Seat",
      description:
        "810x340x620mm Rimless WC design for improved hygiene and easier cleaning Anti-bacterial ceramic construction Fully back-to-wall installation for a seamless, concealed pipework finish Includes WC pan, cistern, soft-close seat, and fittings Dual flush system for water-saving performance (3/6L equivalent system typical) Easy-clean glazed surface reduces dirt build-up Soft-close seat for quiet operation Modern white finish suitable for contemporary bathrooms Floor-standing installation with concealed cistern compatibility Durable ceramic construction for long-term reliability Space-efficient design ideal for modern bathroom layouts Smooth internal glazing for improved flush hygiene",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/Branch-fully-back-to-wall-1-768x1024.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/Branch-fully-back-to-wall-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/w.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2024/02/n.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/fully-back-to-wall.jpg",
      ],
      colours: [
        {
          value: "white",
          label: "White",
        },
      ],
      sizes: [],
    },
  "sanitaryware/branch/branch-back-to-wall-pan-including-soft-close-seat": {
    key: "sanitaryware/branch/branch-back-to-wall-pan-including-soft-close-seat",
    categorySlug: "sanitaryware",
    collectionSlug: "branch",
    slug: "branch-back-to-wall-pan-including-soft-close-seat",
    title: "Branch Back To Wall Pan Including Soft Close Seat",
    description:
      "410x360x570mm Rimless WC design for improved hygiene and easier cleaning Anti-bacterial ceramic construction Fully back-to-wall installation for a seamless, concealed pipework finish Includes WC pan, cistern, soft-close seat, and fittings Dual flush system for water-saving performance (3/6L equivalent system typical) Easy-clean glazed surface reduces dirt build-up Soft-close seat for quiet operation Modern white finish suitable for contemporary bathrooms Floor-standing installation with concealed cistern compatibility Durable ceramic construction for long-term reliability Space-efficient design ideal for modern bathroom layouts Smooth internal glazing for improved flush hygiene",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/branch-back-to-wall-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/branch-back-to-wall-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/w.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/wegu.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/back-to-wall.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "sanitaryware/luna/luna-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat":
    {
      key: "sanitaryware/luna/luna-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
      categorySlug: "sanitaryware",
      collectionSlug: "luna",
      slug: "luna-rimless-fully-back-to-wall-pan-with-cistern-and-soft-close-seat",
      title:
        "Luna Rimless Fully Back To Wall Pan With Cistern And Soft Close Seat",
      description:
        "Dimensions: 810 x 340 x 620mm Rimless WC design for improved hygiene and easier cleaning Anti-bacterial ceramic construction Fully back-to-wall installation for a seamless concealed finish Includes WC pan, cistern, soft-close seat, and fittings Dual flush system for water-saving performance Soft-close seat for quiet, controlled closure Durable ceramic construction for long-term reliability Easy-clean glazed surface reduces dirt build-up Modern white finish suitable for contemporary bathrooms Space-efficient design ideal for modern bathroom layouts Floor-standing back-to-wall installation",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/04/fully-back-to-wall.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/fully-back-to-wall-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/fully-back-to-wall-copy.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/1062.jpg",
      ],
      colours: [
        {
          value: "white",
          label: "White",
        },
      ],
      sizes: [],
    },
  "sanitaryware/luna/luna-back-to-wall-pan-including-soft-close-seat": {
    key: "sanitaryware/luna/luna-back-to-wall-pan-including-soft-close-seat",
    categorySlug: "sanitaryware",
    collectionSlug: "luna",
    slug: "luna-back-to-wall-pan-including-soft-close-seat",
    title: "Luna Back To Wall Pan Including Soft Close Seat",
    description:
      "Dimensions: 410 x 355 x 600mm Rimless WC design for improved hygiene and easier cleaning Anti-bacterial ceramic construction Back to wall installation for a seamless, concealed pipework finish Includes WC pan and soft-close seat Concealed cistern required (sold separately) Soft-close seat for quiet operation Durable ceramic construction for long-term reliability Easy-clean glazed surface reduces dirt build-up Modern white finish suitable for contemporary bathrooms Space-efficient design ideal for modern bathroom layouts Compatible with standard concealed cistern systems",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/04/back-to-wall.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/back-to-wall-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/back-to-wall-copy.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/1064.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "sanitaryware/ruby/ruby-open-back-close-coupled-wc": {
    key: "sanitaryware/ruby/ruby-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "ruby",
    slug: "ruby-open-back-close-coupled-wc",
    title: "Ruby Open Back Close Coupled WC",
    description:
      "Pan QC: 7206 &#8211; £189.00 Cistern QC: 7174 &#8211; £97.00 Seat QC: 7176 &#8211; £58.00 Wrap Over Seat QC: 7177 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-open-back-Toilet-Drawing.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/ruby/ruby-fully-back-to-wall-close-coupled-wc": {
    key: "sanitaryware/ruby/ruby-fully-back-to-wall-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "ruby",
    slug: "ruby-fully-back-to-wall-close-coupled-wc",
    title: "Ruby Fully Back To Wall Close Coupled WC",
    description:
      "Pan QC:7970 &#8211; £230.00 Cistern QC:7174 &#8211; £97.00 Seat QC:7176 &#8211; £58.00 Wrap Over Seat QC:7177 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Fully-Back-To-Wall-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Fully-Back-To-Wall-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Fully-back-to-wall-Toilet-Drawing.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/ruby/ruby-comfort-height-open-back-close-coupled-wc": {
    key: "sanitaryware/ruby/ruby-comfort-height-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "ruby",
    slug: "ruby-comfort-height-open-back-close-coupled-wc",
    title: "Ruby Comfort Height Open Back Close Coupled WC",
    description:
      "Pan QC: 7172 &#8211; £156.00 Cistern QC: 7174 &#8211; £97.00 Seat QC: 7176 &#8211; £58.00 Wrap Over Seat QC:7177 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Comfort-Height-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Comfort-Height-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Toilet-Comfort-Height-Drawing.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/ruby/ruby-comfort-height-fully-enclosed-close-coupled-wc": {
    key: "sanitaryware/ruby/ruby-comfort-height-fully-enclosed-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "ruby",
    slug: "ruby-comfort-height-fully-enclosed-close-coupled-wc",
    title: "Ruby Comfort Height Fully Enclosed Close Coupled WC",
    description:
      "Pan QC:7971 &#8211; £300.00 Cistern QC:7174 &#8211; £97.00 Seat QC:7176 &#8211; £58.00 Wrap Over Seat QC:7177 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Comfort-Height-Fully-Enclosed-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Comfort-Height-Fully-Enclosed-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Toilet-FBW-Comfort-Height-Drawing-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/ruby/ruby-back-to-wall-wc-and-slimline-seat": {
    key: "sanitaryware/ruby/ruby-back-to-wall-wc-and-slimline-seat",
    categorySlug: "sanitaryware",
    collectionSlug: "ruby",
    slug: "ruby-back-to-wall-wc-and-slimline-seat",
    title: "Ruby Back To Wall WC and Slimline Seat",
    description:
      "Pan QC:672 &#8211; £193.00 Seat QC:7176 &#8211; £58.00 Wrap Over Seat QC:7177 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Back-To-Wall-WC-and-Slimline-Seat.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Back-To-Wall-WC-and-Slimline-Seat-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/ruby/ruby-wall-hung-wc": {
    key: "sanitaryware/ruby/ruby-wall-hung-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "ruby",
    slug: "ruby-wall-hung-wc",
    title: "Ruby Wall Hung WC",
    description:
      "Pan QC: 676 &#8211; £271.00 Seat QC: 7176 &#8211; £58.00 Wrap Over Seat QC: 7177 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Wall-Hung-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Ruby-Wall-Hung-WC-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/azzura/azzurra-open-back-close-coupled-wc": {
    key: "sanitaryware/azzura/azzurra-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "azzura",
    slug: "azzurra-open-back-close-coupled-wc",
    title: "Azzurra Open Back Close Coupled WC",
    description:
      "Pan QC:7178 &#8211; £189.00 Cistern QC:7181 &#8211; £97.00 Seat QC:7182 &#8211; £58.00 Wrap Over Seat QC:7183 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/THUMBNAIL-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/azzura-short-projection.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/azzura/azzurra-fully-back-to-wall-close-coupled-wc": {
    key: "sanitaryware/azzura/azzurra-fully-back-to-wall-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "azzura",
    slug: "azzurra-fully-back-to-wall-close-coupled-wc",
    title: "Azzurra Fully Back To Wall Close Coupled WC",
    description:
      "Pan QC:7966 &#8211; £230.00 Cistern QC:7181 &#8211; £97.00 Seat QC:7182 &#8211; £58.00 Wrap Over Seat QC:7183 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Fully-Back-To-Wall-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Fully-Back-To-Wall-Close-Coupled-WC-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/azzura/azzurra-comfort-height-open-back-close-coupled-wc": {
    key: "sanitaryware/azzura/azzurra-comfort-height-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "azzura",
    slug: "azzurra-comfort-height-open-back-close-coupled-wc",
    title: "Azzurra Comfort Height Open Back Close Coupled WC",
    description:
      "Pan QC:7179 &#8211; £156.00 Cistern QC:7181 &#8211; £97.00 Seat QC:7182 &#8211; £58.00 Wrap Over Seat QC:7183 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Comfort-Height-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Comfort-Height-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-short-projection-comfort-toilet-Drawing.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/azzura/azzurra-comfort-height-fully-back-to-wall-close-coupled-wc":
    {
      key: "sanitaryware/azzura/azzurra-comfort-height-fully-back-to-wall-close-coupled-wc",
      categorySlug: "sanitaryware",
      collectionSlug: "azzura",
      slug: "azzurra-comfort-height-fully-back-to-wall-close-coupled-wc",
      title: "Azzurra Comfort Height Fully Back To Wall Close Coupled WC",
      description:
        "Pan QC:7968 &#8211; £300.00 Cistern QC:7181 &#8211; £97.00 Seat QC:7182 &#8211; £58.00 Wrap Over Seat QC:7183 &#8211; £58.00",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Comfort-Height-Fully-Back-To-Wall-Close-Coupled-WC.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Comfort-Height-Fully-Back-To-Wall-Close-Coupled-WC-1.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "sanitaryware/azzura/azzurra-back-to-wall-wc": {
    key: "sanitaryware/azzura/azzurra-back-to-wall-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "azzura",
    slug: "azzurra-back-to-wall-wc",
    title: "Azzurra Back To Wall WC",
    description:
      "Pan QC:7180 &#8211; £193.00 Seat QC:7182 &#8211; £58.00 Wrap Over Seat QC:7183 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Back-To-Wall-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Back-To-Wall-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurrra-Back-to-Wall-Pan-Drawing.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/azzura/azzurra-wall-hung-wc": {
    key: "sanitaryware/azzura/azzurra-wall-hung-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "azzura",
    slug: "azzurra-wall-hung-wc",
    title: "Azzurra Wall Hung WC",
    description:
      "Pan QC:674 &#8211; £271.00 Seat QC:7182 &#8211; £58.00 Wrap Over Seat QC:7183 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Wall-Hung-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Azzurra-Wall-Hung-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/azzura-wall-hung.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/comet/comet-open-back-close-coupled-wc": {
    key: "sanitaryware/comet/comet-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "comet",
    slug: "comet-open-back-close-coupled-wc",
    title: "Comet Open Back Close Coupled WC",
    description:
      "Pan QC:6779 &#8211; £171.00 Cistern QC:6780 &#8211; £85.00 Seat QC:6781 &#8211; £58.00 Wrap Over Seat QC:6782 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/open-back.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/comet/comet-comfort-height-open-back-close-coupled-wc": {
    key: "sanitaryware/comet/comet-comfort-height-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "comet",
    slug: "comet-comfort-height-open-back-close-coupled-wc",
    title: "Comet Comfort Height Open Back Close Coupled WC",
    description:
      "Pan QC:6783 &#8211; £235.00 Cistern QC:6780 &#8211; £85.00 Seat QC:6781 &#8211; £58.00 Wrap Over Seat QC:6782 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Comfort-Height-Open-Back-Close-Coupled-WC-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Comfort-Height-Open-Back-Close-Coupled-WC-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/comfort-height.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/comet/comet-comfort-height-back-to-wall-wc": {
    key: "sanitaryware/comet/comet-comfort-height-back-to-wall-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "comet",
    slug: "comet-comfort-height-back-to-wall-wc",
    title: "Comet Comfort Height Back to Wall WC",
    description:
      "Pan QC:6784 &#8211; £220.00 Seat QC: 6781 &#8211; £58.00 Wrap Over Seat QC:6782 &#8211; £58.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Comfort-Height-Back-to-Wall-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Comet-Comfort-Height-Back-to-Wall-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/back-to-wall.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/juniper/juniper-open-back-close-coupled-wc": {
    key: "sanitaryware/juniper/juniper-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "juniper",
    slug: "juniper-open-back-close-coupled-wc",
    title: "Juniper Open Back Close Coupled WC",
    description:
      "Pan QC:6787 &#8211; £181.00 Cistern QC:6788 &#8211; £136.00 Seat QC: 6789 &#8211; £74.00 Wrap Over Seat QC:6790 &#8211; £62.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/open-back-1-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/juniper/juniper-comfort-height-open-back-close-coupled-wc": {
    key: "sanitaryware/juniper/juniper-comfort-height-open-back-close-coupled-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "juniper",
    slug: "juniper-comfort-height-open-back-close-coupled-wc",
    title: "Juniper Comfort Height Open Back Close Coupled WC",
    description:
      "Pan QC: 6791 &#8211; £275.00 Cistern QC: 6788 &#8211; £136.00 Seat QC: 6789 &#8211; £74.00 Wrap Over Seat QC: 6790 &#8211; £62.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Comfort-Height-Open-Back-Close-Coupled-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Comfort-Height-Open-Back-Close-Coupled-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/comfort-height-1-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/juniper/juniper-back-to-wall-wc": {
    key: "sanitaryware/juniper/juniper-back-to-wall-wc",
    categorySlug: "sanitaryware",
    collectionSlug: "juniper",
    slug: "juniper-back-to-wall-wc",
    title: "Juniper Back To Wall WC",
    description:
      "Pan QC:7138 &#8211; £348.00 Seat QC:6789 &#8211; £74.00 Wrap Over Seat QC:6790 &#8211; £62.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Back-To-Wall-WC.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juniper-Back-To-Wall-WC-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/back-to-wall-1-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "sanitaryware/project-550/project-550-open-back-close-coupled-wc-cistern-seat":
    {
      key: "sanitaryware/project-550/project-550-open-back-close-coupled-wc-cistern-seat",
      categorySlug: "sanitaryware",
      collectionSlug: "project-550",
      slug: "project-550-open-back-close-coupled-wc-cistern-seat",
      title: "Project 550 Open Back Close Coupled WC Cistern & Seat",
      description:
        "Discover Project 550 Open Back Close Coupled WC Cistern & Seat from the Project 550 range at Haris Building Solutions. Quality sanitaryware selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Project-550-Open-Back-Close-Coupled-WC-Cistern-Seat-.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Project-550-Open-Back-Close-Coupled-WC-Cistern-Seat-1-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Project-Drawing.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "sanitaryware/select-550/select-550-open-back-close-coupled-wc-cistern-seat":
    {
      key: "sanitaryware/select-550/select-550-open-back-close-coupled-wc-cistern-seat",
      categorySlug: "sanitaryware",
      collectionSlug: "select-550",
      slug: "select-550-open-back-close-coupled-wc-cistern-seat",
      title: "Select 550 Open Back Close Coupled WC Cistern & Seat",
      description:
        "Discover Select 550 Open Back Close Coupled WC Cistern & Seat from the Select 550 range at Haris Building Solutions. Quality sanitaryware selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-2.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/550-drawing.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "sanitaryware/select-600/select-600-open-back-close-coupled-wc-cistern-seat":
    {
      key: "sanitaryware/select-600/select-600-open-back-close-coupled-wc-cistern-seat",
      categorySlug: "sanitaryware",
      collectionSlug: "select-600",
      slug: "select-600-open-back-close-coupled-wc-cistern-seat",
      title: "Select 600 Open Back Close Coupled WC Cistern & Seat",
      description:
        "Discover Select 600 Open Back Close Coupled WC Cistern & Seat from the Select 600 range at Haris Building Solutions. Quality sanitaryware selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Select-600-Open-Back-Close-Coupled-WC-Cistern-Seat-.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Select-600-Open-Back-Close-Coupled-WC-Cistern-Seat-1-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/600-drawing.jpg",
        // "https://giavanibathrooms.com/wp-content/uploads/2026/03/Select-600-Open-Back-Close-Coupled-WC-Cistern-Seat-.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "sanitaryware/basin-pedestal/square-basin-pedestal": {
    key: "sanitaryware/basin-pedestal/square-basin-pedestal",
    categorySlug: "sanitaryware",
    collectionSlug: "basin-pedestal",
    slug: "square-basin-pedestal",
    title: "Square Basin & Pedestal",
    description:
      "860 x 550 x 460mm Square basin & full pedestal set Gloss white ceramic finish Durable vitreous china construction Conceals pipework for a clean finish Easy-clean, low-maintenance surface Modern square design Suitable for bathrooms, en-suites and cloakrooms Stable full pedestal support Designed for everyday domestic use Space-efficient bathroom solution",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/SQUARE.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/SQUARE-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/58165818-Spec.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "sanitaryware/basin-pedestal/round-basin-pedestal": {
    key: "sanitaryware/basin-pedestal/round-basin-pedestal",
    categorySlug: "sanitaryware",
    collectionSlug: "basin-pedestal",
    slug: "round-basin-pedestal",
    title: "Round Basin & Pedestal",
    description:
      "850 x 550 x 475 mm Round basin & full pedestal set Gloss white ceramic finish Durable vitreous china construction Conceals pipework for a clean installation Easy-clean, low-maintenance surface Classic round design Suitable for bathrooms, en-suites and cloakrooms Stable full pedestal support Designed for everyday domestic use Space-efficient, versatile bathroom solution",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/ROUND.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/ROUND-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/6502-Spec.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "sanitaryware/douche-kits/chrome-thermostatic-douche-kit": {
    key: "sanitaryware/douche-kits/chrome-thermostatic-douche-kit",
    categorySlug: "sanitaryware",
    collectionSlug: "douche-kits",
    slug: "chrome-thermostatic-douche-kit",
    title: "Chrome Thermostatic Douche Kit",
    description:
      "The Haris Building Solutions Chrome Thermostatic Douche Kit is a modern wall-mounted hygiene spray system designed to provide safe, controlled water temperature and everyday convenience. Finished in polished chrome, it combines a minimalist aesthetic with durable, corrosion-resistant components, making it suitable for both contemporary and traditional bathroom designs. The integrated thermostatic valve ensures a consistent and safe water temperature, offering added comfort and protection during use. This complete kit is designed for straightforward installation and comes with all essential components for a fully functional setup. It is compatible with standard UK plumbing systems and is b...",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/07/chrome.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/07/chrome.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Screenshot-2026-07-06-at-14.45.36.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "sanitaryware/douche-kits/black-douche-with-wall-bracket-flexible-hose-and-vertical-thermostatic-valve":
    {
      key: "sanitaryware/douche-kits/black-douche-with-wall-bracket-flexible-hose-and-vertical-thermostatic-valve",
      categorySlug: "sanitaryware",
      collectionSlug: "douche-kits",
      slug: "black-douche-with-wall-bracket-flexible-hose-and-vertical-thermostatic-valve",
      title:
        "Black Douche With Wall Bracket, Flexible Hose and Vertical Thermostatic Valve",
      description:
        "The Haris Building Solutions Black Douche Kit is a sleek, wall-mounted hygiene solution designed to bring modern functionality and comfort to any contemporary bathroom or WC space. Finished in a bold matte black, it offers a premium aesthetic that pairs seamlessly with other black brassware while delivering reliable, thermostatically controlled performance for safe and consistent water temperature. Supplied as a complete set, the kit includes a durable spray handset, flexible hose, wall bracket, and vertical thermostatic valve. Built for everyday use, it provides a practical and hygienic alternative to toilet paper while maintaining a compact, space-saving profile ideal for en-suites and...",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-16.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-17.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Screenshot-2026-07-06-at-14.45.36-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "taps/nova-taps/nova-mono-basin-mixer": {
    key: "taps/nova-taps/nova-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "nova-taps",
    slug: "nova-mono-basin-mixer",
    title: "Nova Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH-QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/branch-back-to-wall-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/branch-back-to-wall-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/b-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/nova-mono-basin-mixer-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "taps/nova-taps/nova-bath-filler": {
    key: "taps/nova-taps/nova-bath-filler",
    categorySlug: "taps",
    collectionSlug: "nova-taps",
    slug: "nova-bath-filler",
    title: "Nova Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2l-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2l.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/nova-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/nova-taps/nova-bath-shower-mixer": {
    key: "taps/nova-taps/nova-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "nova-taps",
    slug: "nova-bath-shower-mixer",
    title: "Nova Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/shower-mixer.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/nova-shower-bath-mixer-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-1-768x1024.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/edge-taps/edge-mono-basin-mixer": {
    key: "taps/edge-taps/edge-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "edge-taps",
    slug: "edge-mono-basin-mixer",
    title: "Edge Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/edge-single-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/branch-back-to-wall-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-mono-basin-mixer.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/edge-single-1.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/edge-taps/edge-bath-filler": {
    key: "taps/edge-taps/edge-bath-filler",
    categorySlug: "taps",
    collectionSlug: "edge-taps",
    slug: "edge-bath-filler",
    title: "Edge Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/edge-single-11.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-bath-filler.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/edge-single-11.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/edge-taps/edge-bath-shower-mixer": {
    key: "taps/edge-taps/edge-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "edge-taps",
    slug: "edge-bath-shower-mixer",
    title: "Edge Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wr-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-bath-shower-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/slope-taps/slope-mono-basin-mixer": {
    key: "taps/slope-taps/slope-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "slope-taps",
    slug: "slope-mono-basin-mixer",
    title: "Slope Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/12-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/12.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/slope-mono-bsn-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/slope-taps/slope-bath-filler": {
    key: "taps/slope-taps/slope-bath-filler",
    categorySlug: "taps",
    collectionSlug: "slope-taps",
    slug: "slope-bath-filler",
    title: "Slope Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ew-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ew.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/slope-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/slope-taps/slope-bath-shower-mixer": {
    key: "taps/slope-taps/slope-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "slope-taps",
    slug: "slope-bath-shower-mixer",
    title: "Slope Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/23-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/slope-bth-shwr-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/slope-taps/mini-slope-mono-basin-mixer": {
    key: "taps/slope-taps/mini-slope-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "slope-taps",
    slug: "mini-slope-mono-basin-mixer",
    title: "Slope Mini Mono Basin Mixer",
    description:
      "The Mini Slope Mono Basin Mixer is the perfect solution for cloakrooms, en-suites, and smaller bathroom spaces where style and practicality are equally important. Featuring the same contemporary angular design as the rest of the Slope collection, this compact basin mixer tap delivers a sleek and sophisticated look without compromising on performance. Crafted from premium brass for long-lasting durability, it offers smooth single-lever control for effortless adjustment of water flow and temperature. Its space-saving design makes it ideal for smaller basins while maintaining the high-quality finish and modern aesthetic expected from the Slope range. Suitable for low-pressure systems from ju...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-9.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Mini-slope-mono-basin-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/storm-taps/storm-mono-basin-mixer": {
    key: "taps/storm-taps/storm-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "storm-taps",
    slug: "storm-mono-basin-mixer",
    title: "Storm Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/m-2-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/m-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/storm-mono-basin-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/storm-taps/storm-bath-filler": {
    key: "taps/storm-taps/storm-bath-filler",
    categorySlug: "taps",
    collectionSlug: "storm-taps",
    slug: "storm-bath-filler",
    title: "Storm Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-5-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/storm-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/storm-taps/storm-bath-shower-mixer": {
    key: "taps/storm-taps/storm-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "storm-taps",
    slug: "storm-bath-shower-mixer",
    title: "Storm Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/storm-bath-shower-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/storm-taps/storm-mini-mono-basin": {
    key: "taps/storm-taps/storm-mini-mono-basin",
    categorySlug: "taps",
    collectionSlug: "storm-taps",
    slug: "storm-mini-mono-basin",
    title: "Storm Mini Mono Basin",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/mini-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/mini.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/storm-mini-mono-basin-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/rico-taps/rico-mono-basin-mixer": {
    key: "taps/rico-taps/rico-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "rico-taps",
    slug: "rico-mono-basin-mixer",
    title: "Rico Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-2-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Rico-mono-basin-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/rico-taps/rico-bath-filler": {
    key: "taps/rico-taps/rico-bath-filler",
    categorySlug: "taps",
    collectionSlug: "rico-taps",
    slug: "rico-bath-filler",
    title: "Rico Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-6-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Rico-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/rico-taps/rico-bath-shower-mixer": {
    key: "taps/rico-taps/rico-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "rico-taps",
    slug: "rico-bath-shower-mixer",
    title: "Rico Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-2-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Rico-bath-shower-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amoura-taps/amoura-mono-basin-mixer": {
    key: "taps/amoura-taps/amoura-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "amoura-taps",
    slug: "amoura-mono-basin-mixer",
    title: "Amoura Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amoura-Mono-Basin-Mixer-1.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amoura-taps/amoura-bath-filler": {
    key: "taps/amoura-taps/amoura-bath-filler",
    categorySlug: "taps",
    collectionSlug: "amoura-taps",
    slug: "amoura-bath-filler",
    title: "Amoura Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-7-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amoura-Bath-Filler-1-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amoura-taps/amoura-bath-shower-mixer": {
    key: "taps/amoura-taps/amoura-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "amoura-taps",
    slug: "amoura-bath-shower-mixer",
    title: "Amoura Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amoura-Bath-Shower-Mixer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amoura-taps/amoura-mini-mono-basin-mixer": {
    key: "taps/amoura-taps/amoura-mini-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "amoura-taps",
    slug: "amoura-mini-mono-basin-mixer",
    title: "Amoura Mini Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/amoura-mini.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/amoura-mini.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amoura-mini-mono-basin-mixer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/california-taps/california-mono-basin-mixer": {
    key: "taps/california-taps/california-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "california-taps",
    slug: "california-mono-basin-mixer",
    title: "California Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/33-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/33.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/California-mono-basin-mixer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/california-taps/california-bath-filler": {
    key: "taps/california-taps/california-bath-filler",
    categorySlug: "taps",
    collectionSlug: "california-taps",
    slug: "california-bath-filler",
    title: "California Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-8-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bat-h-fillwre-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/california-taps/california-bath-shower-mixer": {
    key: "taps/california-taps/california-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "california-taps",
    slug: "california-bath-shower-mixer",
    title: "California Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-4-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/California-bath-shower-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/new-york-taps/new-york-mono-basin-mixer": {
    key: "taps/new-york-taps/new-york-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "new-york-taps",
    slug: "new-york-mono-basin-mixer",
    title: "New York Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-9-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-9.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/new-york-mono-basin-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/new-york-taps/new-york-bath-filler": {
    key: "taps/new-york-taps/new-york-bath-filler",
    categorySlug: "taps",
    collectionSlug: "new-york-taps",
    slug: "new-york-bath-filler",
    title: "New York Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-5-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/New-york-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/new-york-taps/new-york-bath-shower-mixer": {
    key: "taps/new-york-taps/new-york-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "new-york-taps",
    slug: "new-york-bath-shower-mixer",
    title: "New York Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-5-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/new-york-bath-shower-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/halo-taps/halo-mono-mixer": {
    key: "taps/halo-taps/halo-mono-mixer",
    categorySlug: "taps",
    collectionSlug: "halo-taps",
    slug: "halo-mono-mixer",
    title: "Halo Mono Basin Mixer",
    description:
      "The Halo Mono Basin Mixer is defined by its soft, flowing curves and smooth sculpted form, creating a gentle contrast to sharper, more angular tap designs. Its signature rounded spout and seamlessly arched body give it a distinctive silhouette that feels modern yet understated. Crafted from durable brass with a polished chrome finish, it combines elegant design with reliable everyday performance. The single-lever control allows precise adjustment of water flow and temperature. Designed for contemporary bathrooms, its curved profile makes it a subtle but striking feature at the basin.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-4.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/brushed-brass-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/MS-T-HAL-01.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/halo-taps/halo-bath-filler": {
    key: "taps/halo-taps/halo-bath-filler",
    categorySlug: "taps",
    collectionSlug: "halo-taps",
    slug: "halo-bath-filler",
    title: "Halo Bath Filler",
    description:
      "The Halo Bath Filler showcases a beautifully curved, sculptural design that softens the look of any bath setting. Its gently arched spout creates a smooth, continuous flow of water, enhancing the sense of fluidity and refinement in the bathroom. The rounded body and flowing lines give it a calm, balanced aesthetic that works particularly well in modern, minimalist interiors. Manufactured from high-quality brass and finished in polished chrome, it is built for durability and long-term performance while maintaining its distinctive curved styling.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-5.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-16.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/brushed-brass-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/MS-T-HAL-02-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/halo-taps/halo-bath-shower-mixer": {
    key: "taps/halo-taps/halo-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "halo-taps",
    slug: "halo-bath-shower-mixer",
    title: "Halo Bath Shower Mixer",
    description:
      "The Halo Bath Shower Mixer features the same signature rounded design language, with a softly curved spout and smooth contours that bring a more organic feel to the bathroom. The ergonomic shaping not only enhances visual appeal but also ensures comfortable and intuitive use when switching between bath and shower functions. Its sculpted form reduces harsh edges, creating a more cohesive and relaxed look around the bath area. Constructed from robust brass with a chrome finish, it delivers dependable performance while maintaining its elegant curved aesthetic.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-6.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-12.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/brushed-brass-12.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/MS-T-HAL-03-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/boston-taps/boston-mono-basin-mixer": {
    key: "taps/boston-taps/boston-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "boston-taps",
    slug: "boston-mono-basin-mixer",
    title: "Boston Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-11-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/boston-mono-basin-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/boston-taps/boston-bath-filler": {
    key: "taps/boston-taps/boston-bath-filler",
    categorySlug: "taps",
    collectionSlug: "boston-taps",
    slug: "boston-bath-filler",
    title: "Boston Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-7-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/boston-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/boston-taps/boston-bath-shower-mixer": {
    key: "taps/boston-taps/boston-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "boston-taps",
    slug: "boston-bath-shower-mixer",
    title: "Boston Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/frfr.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/frfr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/boston-bath-shwr-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amethyst-taps/amethyst-mono-basin-mixer": {
    key: "taps/amethyst-taps/amethyst-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "amethyst-taps",
    slug: "amethyst-mono-basin-mixer",
    title: "Amethyst Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-12-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-12.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amethyst-Mono-Basin-Mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amethyst-taps/amethyst-bath-filler": {
    key: "taps/amethyst-taps/amethyst-bath-filler",
    categorySlug: "taps",
    collectionSlug: "amethyst-taps",
    slug: "amethyst-bath-filler",
    title: "Amethyst Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-8-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amethyst-Bath-Filler-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/amethyst-taps/amethyst-bath-shower-mixer": {
    key: "taps/amethyst-taps/amethyst-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "amethyst-taps",
    slug: "amethyst-bath-shower-mixer",
    title: "Amethyst Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/amthyst-shwer.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/amthyst-shower-product-image.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Amethyst-Bath-Shower-Mixer-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/amthyst-shwer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/niccolo-taps/niccolo-basin-mixer": {
    key: "taps/niccolo-taps/niccolo-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "niccolo-taps",
    slug: "niccolo-basin-mixer",
    title: "Niccolo Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-13-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-13.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/nicolo-bsn-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/niccolo-taps/niccolo-bath-filler": {
    key: "taps/niccolo-taps/niccolo-bath-filler",
    categorySlug: "taps",
    collectionSlug: "niccolo-taps",
    slug: "niccolo-bath-filler",
    title: "Niccolo Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-9-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-9.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/nicolo-bth-fllr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/niccolo-taps/niccolo-bath-shower-mixer": {
    key: "taps/niccolo-taps/niccolo-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "niccolo-taps",
    slug: "niccolo-bath-shower-mixer",
    title: "Niccolo Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/2-9-768x1024-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-9-768x1024-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/nicolo-bth-shwr-mxr-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/block-taps/block-mono-basin-mixer": {
    key: "taps/block-taps/block-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "block-taps",
    slug: "block-mono-basin-mixer",
    title: "Block Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-10-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-Mono-Basin-Mixer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/block-taps/block-bath-filler": {
    key: "taps/block-taps/block-bath-filler",
    categorySlug: "taps",
    collectionSlug: "block-taps",
    slug: "block-bath-filler",
    title: "Block Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-14-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-Bath-Filler-1-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/block-taps/block-bath-shower-mixer": {
    key: "taps/block-taps/block-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "block-taps",
    slug: "block-bath-shower-mixer",
    title: "Block Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-10-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/block-shower-mixer.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-Bath-Filler-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-10-768x1024.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/block-taps/block-mini-basin-mixer": {
    key: "taps/block-taps/block-mini-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "block-taps",
    slug: "block-mini-basin-mixer",
    title: "Block Mini Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/block-mini.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/block-mini.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/mini-basin-mono-mixer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/branch-taps/branch-mono-basin-mixer": {
    key: "taps/branch-taps/branch-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "branch-taps",
    slug: "branch-mono-basin-mixer",
    title: "Branch Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-15-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-15.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/mono-basin-mixer.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/branch-taps/branch-bath-filler": {
    key: "taps/branch-taps/branch-bath-filler",
    categorySlug: "taps",
    collectionSlug: "branch-taps",
    slug: "branch-bath-filler",
    title: "Branch Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bath-filler-2.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/branch-taps/branch-bath-shower-mixer": {
    key: "taps/branch-taps/branch-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "branch-taps",
    slug: "branch-bath-shower-mixer",
    title: "Branch Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-11-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bath-shower-mixer-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-11-768x1024.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/aries-taps/aries-mono-basin-mixer": {
    key: "taps/aries-taps/aries-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "aries-taps",
    slug: "aries-mono-basin-mixer",
    title: "Aries Mono Basin Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Aries-Mono-Basin-Mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/aries-taps/aries-bath-filler": {
    key: "taps/aries-taps/aries-bath-filler",
    categorySlug: "taps",
    collectionSlug: "aries-taps",
    slug: "aries-bath-filler",
    title: "Aries Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar-3.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Aries-Bath-Filler-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "taps/aries-taps/aries-bath-shower-mixer": {
    key: "taps/aries-taps/aries-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "aries-taps",
    slug: "aries-bath-shower-mixer",
    title: "Aries Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image: "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/ar2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Aries-Bath-Shower-Mixer-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "taps/kyoto-taps/kyoto-black-basin-monobloc-mixer": {
    key: "taps/kyoto-taps/kyoto-black-basin-monobloc-mixer",
    categorySlug: "taps",
    collectionSlug: "kyoto-taps",
    slug: "kyoto-black-basin-monobloc-mixer",
    title: "Kyoto Black Basin Monobloc Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-12-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-12.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Kyoto-black-basin-monobloc-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/kyoto-taps/kyoto-black-bath-filler": {
    key: "taps/kyoto-taps/kyoto-black-bath-filler",
    categorySlug: "taps",
    collectionSlug: "kyoto-taps",
    slug: "kyoto-black-bath-filler",
    title: "Kyoto Black Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Kyoto-black-bath-filler-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/kyoto-taps/kyoto-black-bath-shower-mixer": {
    key: "taps/kyoto-taps/kyoto-black-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "kyoto-taps",
    slug: "kyoto-black-bath-shower-mixer",
    title: "Kyoto Black Bath Shower Mixer",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Kyoto-black-bath-shower-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/kyoto-taps/kyoto-chrome-square": {
    key: "taps/kyoto-taps/kyoto-chrome-square",
    categorySlug: "taps",
    collectionSlug: "kyoto-taps",
    slug: "kyoto-chrome-square",
    title: "Kyoto Chrome Square",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-17-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-17.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Kyoto-chrome-square-black-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "taps/kyoto-taps/kyoto-black-square": {
    key: "taps/kyoto-taps/kyoto-black-square",
    categorySlug: "taps",
    collectionSlug: "kyoto-taps",
    slug: "kyoto-black-square",
    title: "Kyoto Black Square",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-13-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-13.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Kyoto-chrome-square-black-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "taps/laton-taps/laton-mono-basin-mixer": {
    key: "taps/laton-taps/laton-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "laton-taps",
    slug: "laton-mono-basin-mixer",
    title: "Laton Mono Basin Mixer",
    description:
      "The Laton Mono Basin Mixer is a contemporary basin tap designed with clean lines and a refined, modern profile that suits a wide range of bathroom interiors. Its sleek, balanced form creates a subtle yet stylish presence at the basin, while the polished finish enhances its overall contemporary aesthetic. Crafted from high-quality solid brass, it is built for durability and long-term reliability in everyday use. The single-lever control allows smooth and precise adjustment of water flow and temperature, ensuring practical functionality alongside its modern design. Suitable for low-pressure systems from just 0.2 bar, it also includes a basin waste, offering a complete and dependable basin s...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Mono-Basin-Mixer.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Mono-Basin-Mixer-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-basin-mixer-scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "taps/laton-taps/laton-bath-filler": {
    key: "taps/laton-taps/laton-bath-filler",
    categorySlug: "taps",
    collectionSlug: "laton-taps",
    slug: "laton-bath-filler",
    title: "Laton Bath Filler",
    description:
      "The Laton Bath Filler features a simple, elegant design that brings a clean and modern look to the bath area without unnecessary detailing. Its streamlined form and polished finish make it a versatile choice that complements a wide range of bathroom styles. Manufactured from durable solid brass, it is engineered for strength and long-lasting performance. The design delivers a smooth and consistent flow of water, ensuring efficient bath filling while maintaining a refined appearance. Suitable for low-pressure systems from 0.2 bar , it offers reliable functionality with understated modern styling.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Bath-Filler.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Bath-Filler-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-bath-filler-2-scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "taps/laton-taps/laton-bath-shower-mixer": {
    key: "taps/laton-taps/laton-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "laton-taps",
    slug: "laton-bath-shower-mixer",
    title: "Laton Bath Shower Mixer",
    description:
      "The Laton Bath Shower Mixer combines practical versatility with a clean, contemporary design, offering both bath filling and shower functionality in one unified unit. Its smooth, modern profile and polished finish create a cohesive look that fits seamlessly into a variety of bathroom settings. Built from high-quality brass for durability, it is designed to provide dependable performance in everyday use. The intuitive controls allow easy switching between bath and shower modes, delivering flexibility without compromising its simple, refined aesthetic. Suitable for low-pressure systems from 0.2 bar, it provides reliable operation with a modern, understated finish.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Bath-Shower-Mixer.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-Bath-Shower-Mixer-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Laton-bath-shower-mixer-2-scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "taps/oro-taps/oro-mono-basin-mixer": {
    key: "taps/oro-taps/oro-mono-basin-mixer",
    categorySlug: "taps",
    collectionSlug: "oro-taps",
    slug: "oro-mono-basin-mixer",
    title: "Oro Mono Basin Mixer",
    description:
      "The Oro Mono Basin Mixer is a refined brushed brass basin tap designed to bring warmth and understated luxury to modern bathroom spaces. Its clean cylindrical form and soft edges create a balanced, contemporary silhouette that works well across a wide range of interior styles. Crafted from high-quality solid brass, it is built for durability and long-term performance while maintaining its elegant appearance. The single-lever control provides smooth and precise adjustment of water flow and temperature, ensuring effortless everyday use. Suitable for low-pressure systems from just 0.2 bar, it also includes a basin waste, offering a complete and practical basin solution with a premium brushed...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Mono-Basin-Mixer.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Mono-Basin-Mixer-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-basin-mixer--scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "taps/oro-taps/oro-bath-filler": {
    key: "taps/oro-taps/oro-bath-filler",
    categorySlug: "taps",
    collectionSlug: "oro-taps",
    slug: "oro-bath-filler",
    title: "Oro Bath Filler",
    description:
      "Discover Oro Bath Filler from the Oro Taps range at Haris Building Solutions. Quality taps selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Bath-Filler.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Bath-Filler-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-bath-filler--scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "taps/oro-taps/oro-bath-shower-mixer": {
    key: "taps/oro-taps/oro-bath-shower-mixer",
    categorySlug: "taps",
    collectionSlug: "oro-taps",
    slug: "oro-bath-shower-mixer",
    title: "Oro Bath Shower Mixer",
    description:
      "Discover Oro Bath Shower Mixer from the Oro Taps range at Haris Building Solutions. Quality taps selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Bath-Shower-Mixer.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-Bath-Shower-Mixer-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Oro-bath-shower-mixer--scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "taps/freestanding-bath-taps/kyoto-taps": {
    key: "taps/freestanding-bath-taps/kyoto-taps",
    categorySlug: "taps",
    collectionSlug: "freestanding-bath-taps",
    slug: "kyoto-taps",
    title: "KYOTO",
    description:
      "Discover KYOTO from the Freestanding Bath Taps range at Haris Building Solutions. Quality taps selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-3.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-3.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "taps/freestanding-bath-taps/tokyo-taps": {
    key: "taps/freestanding-bath-taps/tokyo-taps",
    categorySlug: "taps",
    collectionSlug: "freestanding-bath-taps",
    slug: "tokyo-taps",
    title: "TOKYO",
    description:
      "Discover TOKYO from the Freestanding Bath Taps range at Haris Building Solutions. Quality taps selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-4.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/sq-4.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "showers/bliss-twin-head-shower-with-bath-filler/soho-twin-round-shower-head":
    {
      key: "showers/bliss-twin-head-shower-with-bath-filler/soho-twin-round-shower-head",
      categorySlug: "showers",
      collectionSlug: "bliss-twin-head-shower-with-bath-filler",
      slug: "soho-twin-round-shower-head",
      title: "Soho Twin Round Shower Head",
      description:
        "Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20-300x300.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Soho-Twin-Round-Shower-Head.jpeg",
      ],
      colours: [
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "showers/bliss-twin-head-shower-with-bath-filler/soho-plus-round-shower-head":
    {
      key: "showers/bliss-twin-head-shower-with-bath-filler/soho-plus-round-shower-head",
      categorySlug: "showers",
      collectionSlug: "bliss-twin-head-shower-with-bath-filler",
      slug: "soho-plus-round-shower-head",
      title: "Soho Plus Round Shower Head",
      description:
        "Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome-300x300.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Soho-Twin-Shower-Head-Black.jpg",
      ],
      colours: [
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "showers/hampton-twin-head-shower-with-bath-filler/soho-twin-round-shower-head":
    {
      key: "showers/hampton-twin-head-shower-with-bath-filler/soho-twin-round-shower-head",
      categorySlug: "showers",
      collectionSlug: "hampton-twin-head-shower-with-bath-filler",
      slug: "soho-twin-round-shower-head",
      title: "Soho Twin Round Shower Head",
      description:
        "Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20-300x300.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Soho-Twin-Round-Shower-Head.jpeg",
      ],
      colours: [
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "showers/hampton-twin-head-shower-with-bath-filler/soho-plus-round-shower-head":
    {
      key: "showers/hampton-twin-head-shower-with-bath-filler/soho-plus-round-shower-head",
      categorySlug: "showers",
      collectionSlug: "hampton-twin-head-shower-with-bath-filler",
      slug: "soho-plus-round-shower-head",
      title: "Soho Plus Round Shower Head",
      description:
        "Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome-300x300.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/chrome.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Soho-Twin-Shower-Head-Black.jpg",
      ],
      colours: [
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "showers/matrix-showers/matrix-plus-square-shower-head": {
    key: "showers/matrix-showers/matrix-plus-square-shower-head",
    categorySlug: "showers",
    collectionSlug: "matrix-showers",
    slug: "matrix-plus-square-shower-head",
    title: "Matrix Plus Square Shower Head",
    description:
      "Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/m2-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/m2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Matrix-Twin-Shower-Head-Black.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/nova-showers/nova-showers": {
    key: "showers/nova-showers/nova-showers",
    categorySlug: "showers",
    collectionSlug: "nova-showers",
    slug: "nova-showers",
    title: "NOVA",
    description:
      "Deluxe handset and smooth hose Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-13.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-13.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Brushed-Brass-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-22.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/GIA-TP-SV001-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/edge-showers/edge-showers": {
    key: "showers/edge-showers/edge-showers",
    categorySlug: "showers",
    collectionSlug: "edge-showers",
    slug: "edge-showers",
    title: "EDGE",
    description:
      "Deluxe handset and smooth hose Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Brushed-Brass-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Screenshot-2026-03-26-at-13.21.03.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/halo-shower/halo-shower": {
    key: "showers/halo-shower/halo-shower",
    categorySlug: "showers",
    collectionSlug: "halo-shower",
    slug: "halo-shower",
    title: "HALO",
    description:
      "Enhance your everyday routine with the Halo Twin Head Shower, available in chrome, black, or brushed brass, crafted for dependable performance and a sleek, modern look. With a thermostatic bar valve, it keeps the water temperature steady for a safer and more comfortable shower experience. The push-button controls allow you to turn the shower on and off with ease, while the knurled handle provides accurate control over flow and temperature, even when your hands are wet. The twin head setup features a fixed overhead shower for full-body coverage alongside a riser rail for added flexibility. Designed for convenience, this shower is durable, simple to maintain, and an ideal choice for contemp...",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Brushed-Brass.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/GIA-SV005-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/soho-plus-round-shower-head/soho-twin-round-shower-head": {
    key: "showers/soho-plus-round-shower-head/soho-twin-round-shower-head",
    categorySlug: "showers",
    collectionSlug: "soho-plus-round-shower-head",
    slug: "soho-twin-round-shower-head",
    title: "Soho Twin Round Shower Head",
    description:
      "Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Includes diverter Easy clean rubber nozzles on shower head and handset Built-in 38 degrees anti-scald temperature control",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-20.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Soho-Twin-Round-Shower-Head.jpeg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/soho-plus-round-shower-head/soho-black-round-twin-shower-head-anthracite":
    {
      key: "showers/soho-plus-round-shower-head/soho-black-round-twin-shower-head-anthracite",
      categorySlug: "showers",
      collectionSlug: "soho-plus-round-shower-head",
      slug: "soho-black-round-twin-shower-head-anthracite",
      title: "Soho Black Round Twin Shower Head Anthracite",
      description:
        "Deluxe handset and smooth hose Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve Deluxe handset and smooth hose Adjustable handset holder 200mm ultra-thin solid metal fixed shower head Fully thermostatic valve",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-16-300x300.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-16.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-16-300x300.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "showers/showers-accessories/identity-dual-control-shower-valve-1-outlet": {
    key: "showers/showers-accessories/identity-dual-control-shower-valve-1-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "identity-dual-control-shower-valve-1-outlet",
    title: "Identity Dual Control Shower Valve (1 Outlet)",
    description:
      "Dual control shower valve for independent flow and temperature adjustment Designed for use with 1 shower outlet Concealed installation for a clean, minimalist appearance Contemporary design suitable for modern bathrooms Precise control for a personalised showering experience Smooth operation for effortless everyday use Compatible with a range of shower heads and showering accessories Ideal for shower enclosures and wet room installations Durable construction for long-lasting performance Easy-to-use controls for enhanced comfort Suitable for both residential and commercial bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-21-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-21.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-dual-control-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/identity-round-push-shower-valve-2-outlet": {
    key: "showers/showers-accessories/identity-round-push-shower-valve-2-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "identity-round-push-shower-valve-2-outlet",
    title: "Identity Round Push Shower Valve (2 Outlet)",
    description:
      "Push-button shower valve designed for 2 shower outlets Contemporary round control design Concealed installation for a sleek, minimalist appearance Allows control of two separate shower functions Precise temperature adjustment for enhanced comfort Ideal for use with fixed shower heads and handsets Modern design suitable for contemporary bathrooms and wet rooms Streamlined faceplate for a clean, uncluttered finish Durable construction for long-lasting reliability Easy-to-use controls for effortless operation Suitable for residential and luxury bathroom installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/8-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-round-push-valve-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/block-push-shower-valve-square-1-outlet": {
    key: "showers/showers-accessories/block-push-shower-valve-square-1-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "block-push-shower-valve-square-1-outlet",
    title: "Block Push Shower Valve Square (1 Outlet)",
    description:
      "Push-button shower valve designed for 1 shower outlet Contemporary square design for a modern bathroom aesthetic Concealed installation for a clean, minimalist finish Simple push-button operation for effortless use Suitable for use with fixed shower heads or shower handsets Streamlined faceplate enhances contemporary bathroom designs Ideal for shower enclosures and wet room installations Durable construction for long-lasting reliability Precise control for a comfortable showering experience Easy-to-use design for everyday convenience Perfect for modern residential and luxury bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-1-outlet-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/block-push-shower-valve-square-2-outlet": {
    key: "showers/showers-accessories/block-push-shower-valve-square-2-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "block-push-shower-valve-square-2-outlet",
    title: "Block Push Shower Valve Square (2 Outlet)",
    description:
      "Push-button shower valve designed for 2 shower outlets Contemporary square design for a sleek, modern appearance Concealed installation for a clean and uncluttered finish Allows control of two separate shower functions Ideal for use with a fixed shower head and shower handset Easy-to-use push-button operation Precise temperature control for enhanced comfort Suitable for modern shower enclosures and wet room installations Minimalist faceplate design complements contemporary bathrooms Durable construction for reliable long-term performance Perfect for residential and luxury bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/7-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/7-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-2-outlets-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/black-dual-control-round-shower-valve-1-outlet":
    {
      key: "showers/showers-accessories/black-dual-control-round-shower-valve-1-outlet",
      categorySlug: "showers",
      collectionSlug: "showers-accessories",
      slug: "black-dual-control-round-shower-valve-1-outlet",
      title: "Black Dual Control Round Shower Valve (1 Outlet)",
      description:
        "Dual control shower valve for independent flow and temperature adjustment Designed for use with 1 shower outlet Contemporary round control design Matt black finish for a striking modern appearance Concealed installation for a clean, streamlined look Suitable for modern shower enclosures and wet rooms Precise temperature control for a personalised showering experience Smooth operation for effortless everyday use Ideal for pairing with black shower heads, arms, and accessories Durable construction for long-lasting reliability Contemporary styling suited to modern bathroom designs",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Round.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Dual-Control-Round.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-dual-control-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "showers/showers-accessories/black-triple-control-round-shower-valve-2-outlet":
    {
      key: "showers/showers-accessories/black-triple-control-round-shower-valve-2-outlet",
      categorySlug: "showers",
      collectionSlug: "showers-accessories",
      slug: "black-triple-control-round-shower-valve-2-outlet",
      title: "Black Triple Control Round Shower Valve (2 Outlet)",
      description:
        "Triple control shower valve designed for 2 shower outlets Contemporary round control design Matt black finish for a bold, modern appearance Independent control of water flow and temperature Allows operation of two separate shower functions Ideal for fixed shower head and handset combinations Concealed installation for a clean, minimalist finish Suitable for modern shower enclosures and wet rooms Smooth and precise controls for a personalised showering experience Durable construction for reliable long-term performance Coordinates perfectly with black shower fittings and accessories",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Round.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Triple-Control-Round.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-round-push-valve-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "showers/showers-accessories/black-dual-control-square-shower-valve-1-outlet":
    {
      key: "showers/showers-accessories/black-dual-control-square-shower-valve-1-outlet",
      categorySlug: "showers",
      collectionSlug: "showers-accessories",
      slug: "black-dual-control-square-shower-valve-1-outlet",
      title: "Black Dual Control Square Shower Valve (1 Outlet)",
      description:
        "Dual control shower valve for independent flow and temperature adjustment Designed for use with 1 shower outlet Contemporary square control design Matt black finish for a bold, modern appearance Concealed installation for a clean and minimalist look Suitable for modern shower enclosures and wet rooms Precise temperature control for enhanced comfort Smooth operation for effortless everyday use Ideal for pairing with black shower heads, arms, and accessories Durable construction for long-lasting reliability Contemporary styling suited to modern bathroom designs",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Square.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Dual-Control-Square.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-1-outlet-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "showers/showers-accessories/black-triple-control-square-shower-valve-2-outlet":
    {
      key: "showers/showers-accessories/black-triple-control-square-shower-valve-2-outlet",
      categorySlug: "showers",
      collectionSlug: "showers-accessories",
      slug: "black-triple-control-square-shower-valve-2-outlet",
      title: "Black Triple Control Square Shower Valve (2 Outlet)",
      description:
        "Triple control shower valve designed for 2 shower outlets Contemporary square control design Matt black finish for a bold, modern appearance Independent control of water flow and temperature Integrated diverter for switching between two shower functions Ideal for fixed shower head and handset combinations Concealed installation for a clean, minimalist finish Suitable for modern shower enclosures and wet rooms Smooth and precise controls for a personalised showering experience Durable construction for long-lasting reliability Coordinates perfectly with black shower heads, arms, and accessories",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Square.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Triple-Control-Square.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-2-outlets-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "showers/showers-accessories/300mm-round-fixed-head": {
    key: "showers/showers-accessories/300mm-round-fixed-head",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "300mm-round-fixed-head",
    title: "300mm Round Fixed Head",
    description:
      "Discover 300mm Round Fixed Head from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/r-2-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/r-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gql2_1-3.jpeg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/OjLYegbl.jpeg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/300mm-square-fixed-head": {
    key: "showers/showers-accessories/300mm-square-fixed-head",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "300mm-square-fixed-head",
    title: "300mm Square Fixed Head",
    description:
      "Discover 300mm Square Fixed Head from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gql2_1-3.jpeg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/identity-round-arm": {
    key: "showers/showers-accessories/identity-round-arm",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "identity-round-arm",
    title: "Identity Ceiling Arm",
    description:
      "Discover Identity Ceiling Arm from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/round-shower-arm-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/round-shower-arm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-round-arm-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/block-ceiling-arm": {
    key: "showers/showers-accessories/block-ceiling-arm",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "block-ceiling-arm",
    title: "Block Ceiling Arm",
    description:
      "Discover Block Ceiling Arm from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/yj-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/yj.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-ceilling-arm-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/ceiling-arm-round": {
    key: "showers/showers-accessories/ceiling-arm-round",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-round",
    title: "Ceiling Arm Round",
    description:
      "Discover Ceiling Arm Round from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/vi-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/vi.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/ceiling-arm-square": {
    key: "showers/showers-accessories/ceiling-arm-square",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-square",
    title: "Ceiling Arm Square",
    description:
      "Discover Ceiling Arm Square from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/g-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/g.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/identity-sliding-rail-kit": {
    key: "showers/showers-accessories/identity-sliding-rail-kit",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "identity-sliding-rail-kit",
    title: "Identity Sliding Rail Kit",
    description:
      "Discover Identity Sliding Rail Kit from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jp-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jp.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-sliding-rail-kit-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/square-sliding-rail-kit": {
    key: "showers/showers-accessories/square-sliding-rail-kit",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "square-sliding-rail-kit",
    title: "Square Sliding Rail Kit",
    description:
      "Discover Square Sliding Rail Kit from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/syeh-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/syeh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Square-sliding-rail-kit-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/identity-wall-outlet-and-holder": {
    key: "showers/showers-accessories/identity-wall-outlet-and-holder",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "identity-wall-outlet-and-holder",
    title: "Identity Wall Outlet and Holder",
    description:
      "Discover Identity Wall Outlet and Holder from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/thr-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/thr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-wall-outlet-and-holder-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/block-wall-outlet-and-holder": {
    key: "showers/showers-accessories/block-wall-outlet-and-holder",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "block-wall-outlet-and-holder",
    title: "Block Wall Outlet and Holder",
    description:
      "Discover Block Wall Outlet and Holder from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/j-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/j.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-wall-outlet-and-holder-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/chrome-round-elbow-outlet": {
    key: "showers/showers-accessories/chrome-round-elbow-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "chrome-round-elbow-outlet",
    title: "Chrome Round Elbow Outlet",
    description:
      "Discover Chrome Round Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/cu-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/cu.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/chrome-block-elbow-outlet": {
    key: "showers/showers-accessories/chrome-block-elbow-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "chrome-block-elbow-outlet",
    title: "Chrome Block Elbow Outlet",
    description:
      "Discover Chrome Block Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/tt-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/tt.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/easy-fix-kit": {
    key: "showers/showers-accessories/easy-fix-kit",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "easy-fix-kit",
    title: "Easy Fix Kit",
    description:
      "Discover Easy Fix Kit from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/d-3-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/d-3.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/round-fixed-head": {
    key: "showers/showers-accessories/round-fixed-head",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "round-fixed-head",
    title: "Round Fixed Head",
    description:
      "Discover Round Fixed Head from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rt-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rt-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300mm-round-fixed-head-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/fixed-square-head": {
    key: "showers/showers-accessories/fixed-square-head",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "fixed-square-head",
    title: "Fixed Square Head",
    description:
      "Discover Fixed Square Head from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300mm-square-fixed-head-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/black-round-arm": {
    key: "showers/showers-accessories/black-round-arm",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "black-round-arm",
    title: "Black Round Arm",
    description:
      "Discover Black Round Arm from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewf-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/ewf.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/black-square-arm": {
    key: "showers/showers-accessories/black-square-arm",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "black-square-arm",
    title: "Black Square Arm",
    description:
      "Discover Black Square Arm from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/t-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/t.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/ceiling-arm-round-black": {
    key: "showers/showers-accessories/ceiling-arm-round-black",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-round-black",
    title: "Ceiling Arm Round Black",
    description:
      "Discover Ceiling Arm Round Black from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-1.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/ceiling-arm-square-black": {
    key: "showers/showers-accessories/ceiling-arm-square-black",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-square-black",
    title: "Ceiling Arm Square Black",
    description:
      "Discover Ceiling Arm Square Black from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewq-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/ewq.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/round-sliding-rail-kit-black": {
    key: "showers/showers-accessories/round-sliding-rail-kit-black",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "round-sliding-rail-kit-black",
    title: "Round Sliding Rail Kit Black",
    description:
      "Discover Round Sliding Rail Kit Black from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rg-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/rg.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/square-sliding-rail-kit-black": {
    key: "showers/showers-accessories/square-sliding-rail-kit-black",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "square-sliding-rail-kit-black",
    title: "Square Sliding Rail Kit Black",
    description:
      "Discover Square Sliding Rail Kit Black from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/44-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/44.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/0ELq3THL-scaled.jpeg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/round-wall-outlet-black": {
    key: "showers/showers-accessories/round-wall-outlet-black",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "round-wall-outlet-black",
    title: "Round Wall Outlet Black",
    description:
      "Discover Round Wall Outlet Black from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ey-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/ey.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/square-wall-outlet-black": {
    key: "showers/showers-accessories/square-wall-outlet-black",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "square-wall-outlet-black",
    title: "Square Wall Outlet Black",
    description:
      "Discover Square Wall Outlet Black from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/erw-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/erw.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/black-round-elbow-outlet": {
    key: "showers/showers-accessories/black-round-elbow-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "black-round-elbow-outlet",
    title: "Black Round Elbow Outlet",
    description:
      "Discover Black Round Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/55-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/55.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "showers/showers-accessories/black-square-elbow-outlet": {
    key: "showers/showers-accessories/black-square-elbow-outlet",
    categorySlug: "showers",
    collectionSlug: "showers-accessories",
    slug: "black-square-elbow-outlet",
    title: "Black Square Elbow Outlet",
    description:
      "Discover Black Square Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality showers selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/e-1-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/e-1.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "baths/edge-baths/edge-single-ended-bath": {
    key: "baths/edge-baths/edge-single-ended-bath",
    categorySlug: "baths",
    collectionSlug: "edge-baths",
    slug: "edge-single-ended-bath",
    title: "Edge Single Ended Bath",
    description:
      "Square bath, single ended CE compliant to Class 1 Bath panel and waste not included, sold separately Modern square single ended bath design Durable sanitary-grade acrylic construction Gloss white finish Comfortable reclining bathing area Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Single-Ended-Bath-1700x750mm.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/edge-baths/edge-double-ended-bath": {
    key: "baths/edge-baths/edge-double-ended-bath",
    categorySlug: "baths",
    collectionSlug: "edge-baths",
    slug: "edge-double-ended-bath",
    title: "Edge Double Ended Bath",
    description:
      "Square bath, double ended CE compliant to Class 1 Bath panel and waste not included, sold separately Comfortable bathing position at both ends Durable acrylic construction Gloss white finish Central waste and overflow positioning Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms Compatible with optional whirlpool systems Bath panel and waste sold separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Double-Ended-Bath.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/kyoto-freestanding-bath/tokyo-freestanding-bath": {
    key: "baths/kyoto-freestanding-bath/tokyo-freestanding-bath",
    categorySlug: "baths",
    collectionSlug: "kyoto-freestanding-bath",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description:
      "Contemporary freestanding bath design Compact 1670mm x 750mm x 580mm dimensions Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength and durability Smooth, easy-clean high gloss surface Space-saving design ideal for smaller bathrooms Freestanding installation for flexible layout options Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for modern and space-conscious bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Tokyo-Technical.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/kyoto-freestanding-bath/edge-single-ended-bath": {
    key: "baths/kyoto-freestanding-bath/edge-single-ended-bath",
    categorySlug: "baths",
    collectionSlug: "kyoto-freestanding-bath",
    slug: "edge-single-ended-bath",
    title: "Edge Single Ended Bath",
    description:
      "Square bath, single ended CE compliant to Class 1 Bath panel and waste not included, sold separately Modern square single ended bath design Durable sanitary-grade acrylic construction Gloss white finish Comfortable reclining bathing area Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Single-Ended-Bath-1700x750mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/sapporo-freestanding-bath/tokyo-freestanding-bath": {
    key: "baths/sapporo-freestanding-bath/tokyo-freestanding-bath",
    categorySlug: "baths",
    collectionSlug: "sapporo-freestanding-bath",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description:
      "Contemporary freestanding bath design Compact 1670mm x 750mm x 580mm dimensions Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength and durability Smooth, easy-clean high gloss surface Space-saving design ideal for smaller bathrooms Freestanding installation for flexible layout options Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for modern and space-conscious bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Tokyo-Technical.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/sapporo-freestanding-bath/edge-single-ended-bath": {
    key: "baths/sapporo-freestanding-bath/edge-single-ended-bath",
    categorySlug: "baths",
    collectionSlug: "sapporo-freestanding-bath",
    slug: "edge-single-ended-bath",
    title: "Edge Single Ended Bath",
    description:
      "Square bath, single ended CE compliant to Class 1 Bath panel and waste not included, sold separately Modern square single ended bath design Durable sanitary-grade acrylic construction Gloss white finish Comfortable reclining bathing area Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Single-Ended-Bath-1700x750mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/tokyo-freestanding-bath/edge-single-ended-bath": {
    key: "baths/tokyo-freestanding-bath/edge-single-ended-bath",
    categorySlug: "baths",
    collectionSlug: "tokyo-freestanding-bath",
    slug: "edge-single-ended-bath",
    title: "Edge Single Ended Bath",
    description:
      "Square bath, single ended CE compliant to Class 1 Bath panel and waste not included, sold separately Modern square single ended bath design Durable sanitary-grade acrylic construction Gloss white finish Comfortable reclining bathing area Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Single-Ended-Bath-1700x750mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/11-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/tokyo-freestanding-bath/edge-double-ended-bath": {
    key: "baths/tokyo-freestanding-bath/edge-double-ended-bath",
    categorySlug: "baths",
    collectionSlug: "tokyo-freestanding-bath",
    slug: "edge-double-ended-bath",
    title: "Edge Double Ended Bath",
    description:
      "Square bath, double ended CE compliant to Class 1 Bath panel and waste not included, sold separately Comfortable bathing position at both ends Durable acrylic construction Gloss white finish Central waste and overflow positioning Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms Compatible with optional whirlpool systems Bath panel and waste sold separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Double-Ended-Bath.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/single-ended-intro-bath/tokyo-freestanding-bath": {
    key: "baths/single-ended-intro-bath/tokyo-freestanding-bath",
    categorySlug: "baths",
    collectionSlug: "single-ended-intro-bath",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description:
      "Contemporary freestanding bath design Compact 1670mm x 750mm x 580mm dimensions Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength and durability Smooth, easy-clean high gloss surface Space-saving design ideal for smaller bathrooms Freestanding installation for flexible layout options Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for modern and space-conscious bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Tokyo-Technical.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/single-ended-intro-bath/edge-double-ended-bath": {
    key: "baths/single-ended-intro-bath/edge-double-ended-bath",
    categorySlug: "baths",
    collectionSlug: "single-ended-intro-bath",
    slug: "edge-double-ended-bath",
    title: "Edge Double Ended Bath",
    description:
      "Square bath, double ended CE compliant to Class 1 Bath panel and waste not included, sold separately Comfortable bathing position at both ends Durable acrylic construction Gloss white finish Central waste and overflow positioning Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms Compatible with optional whirlpool systems Bath panel and waste sold separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Double-Ended-Bath.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/nova-double-ended-bath/branch-bath-filler": {
    key: "baths/nova-double-ended-bath/branch-bath-filler",
    categorySlug: "baths",
    collectionSlug: "nova-double-ended-bath",
    slug: "branch-bath-filler",
    title: "Branch Bath Filler",
    description:
      "10 YEAR GUARANTEE HIGH QUALITY DESIGN AND BUILD MINIMUM PRESSURE: 0.2 BAR BRASS BODY BASIN WASTE INCLUDED",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bath-filler-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-11-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "baths/nova-double-ended-bath/kyoto-freestanding-bath": {
    key: "baths/nova-double-ended-bath/kyoto-freestanding-bath",
    categorySlug: "baths",
    collectionSlug: "nova-double-ended-bath",
    slug: "kyoto-freestanding-bath",
    title: "Kyoto Freestanding Bath",
    description:
      "Contemporary freestanding bath design Spacious 1720mm x 850mm bathing area Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength Smooth, easy-clean surface Luxurious centrepiece for modern bathrooms Freestanding installation for flexible bathroom layouts Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for contemporary and luxury bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-25-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-25.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/e-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-25-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/l-shape-shower-bath/tokyo-freestanding-bath": {
    key: "baths/l-shape-shower-bath/tokyo-freestanding-bath",
    categorySlug: "baths",
    collectionSlug: "l-shape-shower-bath",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description:
      "Contemporary freestanding bath design Compact 1670mm x 750mm x 580mm dimensions Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength and durability Smooth, easy-clean high gloss surface Space-saving design ideal for smaller bathrooms Freestanding installation for flexible layout options Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for modern and space-conscious bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Tokyo-Technical.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/l-shape-shower-bath/nova-double-ended-bath": {
    key: "baths/l-shape-shower-bath/nova-double-ended-bath",
    categorySlug: "baths",
    collectionSlug: "l-shape-shower-bath",
    slug: "nova-double-ended-bath",
    title: "Nova Double Ended Bath",
    description:
      "Modern double ended bath design Square, symmetrical profile for contemporary bathrooms Available in 1700mm x 700mm and 1700mm x 750mm sizes Manufactured from high-quality acrylic Smooth, easy-clean gloss white surface Fully encapsulated baseboard for added strength and rigidity Central waste position for balanced drainage CE Class 1 compliant construction Bath panels and waste not included (sold separately) Ideal for modern family bathrooms and renovations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-24-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-24.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Nova-Double-Ended-Bath-1700-x-700mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Nova-Double-Ended-Bath-1700-x-750mm-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "baths/key-hole-bath/key-hole-bath": {
    key: "baths/key-hole-bath/key-hole-bath",
    categorySlug: "baths",
    collectionSlug: "key-hole-bath",
    slug: "key-hole-bath",
    title: "KEY HOLE",
    description:
      "Contemporary keyhole bath design with extended showering space Spacious 1700mm x 750mm dimensions Manufactured from high-quality sanitary-grade acrylic Smooth, easy-clean gloss white surface Reinforced construction for added strength and durability Ideal for combined bath and shower installations Compatible with bath screens and overhead showers Space-efficient design for modern bathrooms Requires compatible waste and panels (not included) Perfect for family bathrooms and multifunctional spaces",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/KEY-HOLE.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/KEY-HOLE.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/key-hole-bath.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "1700mm",
        label: "1700mm",
      },
    ],
  },
  "baths/twin-grip-bath/twin-grip-bath": {
    key: "baths/twin-grip-bath/twin-grip-bath",
    categorySlug: "baths",
    collectionSlug: "twin-grip-bath",
    slug: "twin-grip-bath",
    title: "TWIN GRIP",
    description:
      "Integrated twin grip handles for added safety and support Contemporary single ended bath design Compact 1700mm x 700mm dimensions Manufactured from high-quality sanitary-grade acrylic Smooth, easy-clean gloss white finish Reinforced construction for everyday durability Ergonomically positioned grips for improved stability Ideal for accessible and family bathroom designs Requires compatible waste and panels (not included) Suitable for modern practical bathroom installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/TWIN-GRIP.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/TWIN-GRIP.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Barrow-1500x700-mm-Twin-Grip-Single-Ended-Bath.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "1700mm",
        label: "1700mm",
      },
    ],
  },
  "baths/bath-panels/bath-panels": {
    key: "baths/bath-panels/bath-panels",
    categorySlug: "baths",
    collectionSlug: "bath-panels",
    slug: "bath-panels",
    title: "BATH PANELS",
    description:
      "Available Colours: White, Anthracite, Dove Grey Materials: Acrylic, Mould Wood",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/02/PANELS.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/PANELS.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/panels.png",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [
      {
        value: "1700mm",
        label: "1700mm",
      },
      {
        value: "700mm",
        label: "700mm",
      },
    ],
  },
  "bath-screens/intro-round-bath-screen/intro-black-grid-bath-screen": {
    key: "bath-screens/intro-round-bath-screen/intro-black-grid-bath-screen",
    categorySlug: "bath-screens",
    collectionSlug: "intro-round-bath-screen",
    slug: "intro-black-grid-bath-screen",
    title: "Intro Black Grid Bath Screen",
    description:
      "Industrial-style black grid bath screen design 6mm toughened safety glass for strength and durability 1400mm height for effective splash protection 780–800mm adjustable width for flexible installation 20mm adjustment for easier fitting on uneven walls Matt black aluminium frame for a bold, modern finish Smooth pivot mechanism for easy access and use Reversible design for left or right-hand fitting Suitable for shower-over-bath installations Ideal for contemporary and industrial-style bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/All-bath-screens--scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "bath-screens/intro-round-bath-screen/intro-black-square-bath-screen": {
    key: "bath-screens/intro-round-bath-screen/intro-black-square-bath-screen",
    categorySlug: "bath-screens",
    collectionSlug: "intro-round-bath-screen",
    slug: "intro-black-square-bath-screen",
    title: "Intro Black Square Bath Screen",
    description:
      "6mm Tempered clear glass 1400mm height 800mm wide 780-800mm Adjustment 20mm Adjustment for easy installation Metal top and bottom pivot",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/All-bath-screens--scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "bath-screens/intro-square-bath-screen/intro-black-grid-bath-screen": {
    key: "bath-screens/intro-square-bath-screen/intro-black-grid-bath-screen",
    categorySlug: "bath-screens",
    collectionSlug: "intro-square-bath-screen",
    slug: "intro-black-grid-bath-screen",
    title: "Intro Black Grid Bath Screen",
    description:
      "Industrial-style black grid bath screen design 6mm toughened safety glass for strength and durability 1400mm height for effective splash protection 780–800mm adjustable width for flexible installation 20mm adjustment for easier fitting on uneven walls Matt black aluminium frame for a bold, modern finish Smooth pivot mechanism for easy access and use Reversible design for left or right-hand fitting Suitable for shower-over-bath installations Ideal for contemporary and industrial-style bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/All-bath-screens--scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/B1-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "bath-screens/intro-square-bath-screen/intro-black-square-bath-screen": {
    key: "bath-screens/intro-square-bath-screen/intro-black-square-bath-screen",
    categorySlug: "bath-screens",
    collectionSlug: "intro-square-bath-screen",
    slug: "intro-black-square-bath-screen",
    title: "Intro Black Square Bath Screen",
    description:
      "6mm Tempered clear glass 1400mm height 800mm wide 780-800mm Adjustment 20mm Adjustment for easy installation Metal top and bottom pivot",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/All-bath-screens--scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BS1-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "bath-screens/intro-black-grid-bath-screen/intro-round-bath-screen": {
    key: "bath-screens/intro-black-grid-bath-screen/intro-round-bath-screen",
    categorySlug: "bath-screens",
    collectionSlug: "intro-black-grid-bath-screen",
    slug: "intro-round-bath-screen",
    title: "Intro Round Bath Screen",
    description:
      "Curved round-top bath screen design for a modern look 6mm toughened safety glass for strength and durability 1400mm height for effective splash protection 780–800mm adjustable width for flexible installation Reversible design for left or right-hand fitting Metal top and bottom pivot system for smooth operation Suitable for shower-over-bath installations Minimalist frame for a clean, contemporary finish Easy installation with adjustable fitting range Ideal for modern family bathrooms and en-suites",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-1-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BRASS.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/All-bath-screens--scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-1-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "bath-screens/intro-black-grid-bath-screen/intro-square-bath-screen": {
    key: "bath-screens/intro-black-grid-bath-screen/intro-square-bath-screen",
    categorySlug: "bath-screens",
    collectionSlug: "intro-black-grid-bath-screen",
    slug: "intro-square-bath-screen",
    title: "Intro Square Bath Screen",
    description:
      "Square-top bath screen design for a modern, structured look 6mm toughened safety glass for strength and durability 1400mm height for effective splash protection 780–800mm adjustable width for flexible installation Available in Chrome, Black, and Brushed Brass frame finishes Reversible design for left or right-hand fitting Smooth pivot mechanism for easy operation Slim aluminium frame for a clean, minimalist finish Suitable for shower-over-bath installations Ideal for contemporary bathrooms and en-suites",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-2-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BRASS-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/All-bath-screens--scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-2-300x300.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "shower-enclosures/double-door-quadrant-6mm-shower-enclosures/double-door-quadrant-6mm-shower-enclosures":
    {
      key: "shower-enclosures/double-door-quadrant-6mm-shower-enclosures/double-door-quadrant-6mm-shower-enclosures",
      categorySlug: "shower-enclosures",
      collectionSlug: "double-door-quadrant-6mm-shower-enclosures",
      slug: "double-door-quadrant-6mm-shower-enclosures",
      title: "DOUBLE DOOR QUADRANT",
      description:
        "Space-saving double door quadrant design 6mm toughened safety glass for strength and durability Smooth sliding twin door system for easy access 1850mm height for effective splash protection Available in Chrome, Black, and Brushed Brass frame finishes Reversible design for left or right-hand installation Adjustable fitting for easier installation Slim aluminium frame for a modern, minimalist look Suitable for corner shower tray installations Ideal for compact and contemporary bathrooms",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-DOUBLE-DOOR.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-DOUBLE-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-DOUBLE-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BRUSHED-BRASS-DOUBLE-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Double-door-quadrant--scaled.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
        {
          value: "brushed-brass",
          label: "Brushed Brass",
        },
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "shower-enclosures/single-door-quadrant-6mm-shower-enclosures/single-door-quadrant-6mm-shower-enclosures":
    {
      key: "shower-enclosures/single-door-quadrant-6mm-shower-enclosures/single-door-quadrant-6mm-shower-enclosures",
      categorySlug: "shower-enclosures",
      collectionSlug: "single-door-quadrant-6mm-shower-enclosures",
      slug: "single-door-quadrant-6mm-shower-enclosures",
      title: "SINGLE DOOR QUADRANT",
      description:
        "Space-saving single door quadrant design 6mm toughened safety glass for strength and durability Smooth sliding door for easy access 1850mm height for effective splash protection Available in Chrome, Black, and Brushed Brass finishes Reversible design for left or right-hand installation Adjustable profile for easier fitting Slim aluminium frame for a modern, minimalist look Suitable for corner shower tray installations Ideal for compact and contemporary bathrooms",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/02/CHROME-SINGLE-DOOR.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/02/CHROME-SINGLE-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/02/BLACK-SINGLE-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/02/BRUSHED-BRASS-SINGLE-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/02/Single-door-quadrant.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
        {
          value: "brushed-brass",
          label: "Brushed Brass",
        },
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [
        {
          value: "1200x800mm",
          label: "1200x800mm",
        },
        {
          value: "1200x900mm",
          label: "1200x900mm",
        },
        {
          value: "800x800mm",
          label: "800x800mm",
        },
        {
          value: "900x900mm",
          label: "900x900mm",
        },
      ],
    },
  "shower-enclosures/pivot-door-6mm-shower-enclosures-with-side-panel/pivot-door-6mm-shower-enclosures-with-side-panel":
    {
      key: "shower-enclosures/pivot-door-6mm-shower-enclosures-with-side-panel/pivot-door-6mm-shower-enclosures-with-side-panel",
      categorySlug: "shower-enclosures",
      collectionSlug: "pivot-door-6mm-shower-enclosures-with-side-panel",
      slug: "pivot-door-6mm-shower-enclosures-with-side-panel",
      title: "PIVOT DOOR",
      description:
        "Classic pivot door shower enclosure design 6mm toughened safety glass for strength and durability Smooth pivot opening for easy access 1850mm height for effective splash protection Available in Chrome, Black, and Brushed Brass finishes Reversible design for left or right-hand installation Adjustable profile for easier fitting Wide entry opening for improved accessibility Durable aluminium frame for long-term stability Ideal for modern bathrooms and en-suites",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-PIVOT-DOOR.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-PIVOT-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-PIVOT-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BRUSHED-BRASS-PIVOT-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/pivot-door.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
        {
          value: "brushed-brass",
          label: "Brushed Brass",
        },
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "shower-enclosures/bi-fold-door-6mm-shower-enclosures-with-side-panel/bi-fold-door-6mm-shower-enclosures-with-side-panel":
    {
      key: "shower-enclosures/bi-fold-door-6mm-shower-enclosures-with-side-panel/bi-fold-door-6mm-shower-enclosures-with-side-panel",
      categorySlug: "shower-enclosures",
      collectionSlug: "bi-fold-door-6mm-shower-enclosures-with-side-panel",
      slug: "bi-fold-door-6mm-shower-enclosures-with-side-panel",
      title: "BI-FOLD DOOR",
      description:
        "Space-saving bi-fold door shower enclosure design 6mm toughened safety glass for strength and durability Door folds inwards for minimal outward clearance 1850mm height for effective splash protection Available in Chrome, Black, and Brushed Brass finishes Reversible design for left or right-hand installation Adjustable profile for easier fitting Smooth bi-fold mechanism for easy operation Durable aluminium frame for long-term stability Ideal for compact bathrooms and en-suites",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-BI-FOLD-DOOR.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-BI-FOLD-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bifold-door.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-BI-FOLD-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BRUSHED-BRASS-BI-FOLD-DOOR.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
        {
          value: "brushed-brass",
          label: "Brushed Brass",
        },
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "shower-enclosures/sliding-door-6mm-shower-enclosures-with-side-panel/sliding-door-6mm-shower-enclosures-with-side-panel":
    {
      key: "shower-enclosures/sliding-door-6mm-shower-enclosures-with-side-panel/sliding-door-6mm-shower-enclosures-with-side-panel",
      categorySlug: "shower-enclosures",
      collectionSlug: "sliding-door-6mm-shower-enclosures-with-side-panel",
      slug: "sliding-door-6mm-shower-enclosures-with-side-panel",
      title: "SLIDING DOOR",
      description:
        "Space-saving sliding door shower enclosure design 6mm toughened safety glass for strength and durability Smooth sliding door system for easy access 1850mm height for effective splash protection Available in Chrome, Black, and Brushed Brass finishes Reversible design for left or right-hand installation Adjustable profile for easier fitting Precision roller system for smooth operation Durable aluminium frame for long-term stability Ideal for modern bathrooms and en-suites",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-SLIDING-DOOR.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CHROME-SLIDING-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BLACK-SLIDING-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/BRUSHED-BRASS-SLIDING-DOOR.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Sliding-door--scaled.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
        {
          value: "brushed-brass",
          label: "Brushed Brass",
        },
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "shower-enclosures/enclosure-side-panel/enclosure-side-panel": {
    key: "shower-enclosures/enclosure-side-panel/enclosure-side-panel",
    categorySlug: "shower-enclosures",
    collectionSlug: "enclosure-side-panel",
    slug: "enclosure-side-panel",
    title: "SIDE PANEL",
    description:
      "6mm toughened safety glass for strength and durability Designed to extend and complete shower enclosure layouts Available in Chrome, Black, and Brushed Brass finishes Reversible design for left or right-hand installation Adjustable profile for easier fitting and alignment Slim aluminium frame for a modern, minimalist look Creates a fully enclosed, watertight showering space Suitable for a wide range of enclosure configurations Durable construction for long-term everyday use Ideal finishing component for modern bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/CHROME-SIDE-PANEL.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/CHROME-SIDE-PANEL.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/BRUSHED-BRASS-SIDE-PANEL.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/BLACK-SIDE-PANEL-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Glass-side-panel--scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [
      {
        value: "1000mm",
        label: "1000mm",
      },
      {
        value: "700mm",
        label: "700mm",
      },
      {
        value: "760mm",
        label: "760mm",
      },
      {
        value: "800mm",
        label: "800mm",
      },
      {
        value: "900mm",
        label: "900mm",
      },
    ],
  },
  "shower-enclosures/niche/niche-with-shelf": {
    key: "shower-enclosures/niche/niche-with-shelf",
    categorySlug: "shower-enclosures",
    collectionSlug: "niche",
    slug: "niche-with-shelf",
    title: "Niche with shelf",
    description:
      "Recessed shower niche with integrated centre shelf Creates two separate storage compartments for improved organisation Manufactured from high-quality stainless steel Corrosion-resistant construction for wet environments 300mm x 600mm dimensions Available in Stainless Steel, Black, Brushed Brass, and Brushed Bronze finishes Seamlessly integrates into tiled shower and bathroom walls Helps eliminate clutter and external shower storage accessories Durable, easy-clean design for everyday use Ideal for modern bathrooms, wet rooms, and walk-in showers",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-21.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Bronze-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-600T-DEEP-100MM-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "brushed-bronze",
        label: "Brushed Bronze",
      },
      {
        value: "stainless-steel",
        label: "Stainless Steel",
      },
    ],
    sizes: [],
  },
  "shower-enclosures/niche/niche-with-led": {
    key: "shower-enclosures/niche/niche-with-led",
    categorySlug: "shower-enclosures",
    collectionSlug: "niche",
    slug: "niche-with-led",
    title: "Niche with LED",
    description:
      "Recessed shower niche with integrated LED lighting Contemporary storage solution for modern bathrooms Manufactured from high-quality stainless steel Corrosion-resistant construction for wet environments Creates ambient feature lighting within tiled walls Available in Stainless Steel, Black, Brushed Brass, and Brushed Bronze finishes Helps maintain a clean, clutter-free showering space Durable construction designed for everyday use Seamlessly integrates into shower and bathroom walls Ideal for luxury bathrooms, wet rooms, and contemporary renovations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-300-DEEP-100MM-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-600T-DEEP-100MM-2-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "stainless-steel",
        label: "Stainless Steel",
      },
    ],
    sizes: [
      {
        value: "300x300mm",
        label: "300x300mm",
      },
      {
        value: "300x600mm",
        label: "300x600mm",
      },
    ],
  },
  "wetroom-screens/8mm-wetroom-panels/8mm-wetroom-panels": {
    key: "wetroom-screens/8mm-wetroom-panels/8mm-wetroom-panels",
    categorySlug: "wetroom-screens",
    collectionSlug: "8mm-wetroom-panels",
    slug: "8mm-wetroom-panels",
    title: "WETROOM PANELS",
    description:
      "Contemporary frameless Wetroom panel design 8mm toughened safety glass for superior strength and durability 2000mm height for a premium, spacious appearance Easy-clean glass treatment as standard Available with Chrome, Black, or Brushed Brass profile finishes Modern minimalist support arm included Suitable for installation on a shower tray or tiled Wetroom floor 20mm wall profile adjustment for easier installation Available in multiple widths from 700mm to 1200mm Lifetime guarantee for added peace of mind",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brass2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Wet-room-panel-scaled-1.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "1000mm",
        label: "1000mm",
      },
      {
        value: "1100mm",
        label: "1100mm",
      },
      {
        value: "1200mm",
        label: "1200mm",
      },
      {
        value: "700mm",
        label: "700mm",
      },
      {
        value: "800mm",
        label: "800mm",
      },
      {
        value: "900mm",
        label: "900mm",
      },
    ],
  },
  "wetroom-screens/8mm-black-grid-wetroom-panel/8mm-black-grid-wetroom-panel": {
    key: "wetroom-screens/8mm-black-grid-wetroom-panel/8mm-black-grid-wetroom-panel",
    categorySlug: "wetroom-screens",
    collectionSlug: "8mm-black-grid-wetroom-panel",
    slug: "8mm-black-grid-wetroom-panel",
    title: "GRID WETROOM PANEL",
    description:
      "Contemporary black grid design 2000mm height 8mm toughened safety glass Easy clean glass treatment as standard Modern minimalist support arm included Suitable for shower tray or tiled wetroom floor installation 20mm adjustment in-wall channel for out-of-true walls Two panels can be combined to create a walk-in design Supplied with profiles Lifetime guarantee",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/GR1.png",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/GR1.png",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/GR2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Grid-Wet-room-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "wetroom-screens/arched-wetroom-screen/arched-wetroom-screen": {
    key: "wetroom-screens/arched-wetroom-screen/arched-wetroom-screen",
    categorySlug: "wetroom-screens",
    collectionSlug: "arched-wetroom-screen",
    slug: "arched-wetroom-screen",
    title: "ARCHED WETROOM PANEL",
    description:
      "Elegant arched top design 8mm toughened safety glass Contemporary black profile finish 2000mm height for full wetroom coverage Easy clean glass treatment Minimalist support arm included Suitable for shower tray or tiled wetroom floor installation 20mm in-wall adjustment for easier fitting",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome-14.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Chrome-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-20.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/arched-screen-1.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [
      {
        value: "1000mm",
        label: "1000mm",
      },
      {
        value: "1200mm",
        label: "1200mm",
      },
    ],
  },
  "wetroom-screens/wetroom-panel-shelf/wetroom-panel-shelf": {
    key: "wetroom-screens/wetroom-panel-shelf/wetroom-panel-shelf",
    categorySlug: "wetroom-screens",
    collectionSlug: "wetroom-panel-shelf",
    slug: "wetroom-panel-shelf",
    title: "WETROOM PANEL SHELF",
    description:
      "Designed for use with Haris Building Solutions wetroom panels Integrated shelf for shower storage Available in matching profile finishes (including black) Slimline, space-saving design Ideal for shampoo and shower essentials Durable construction for everyday use Easy integration during installation Maintains clean, minimalist wetroom aesthetic",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-23.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/brushed-brass-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-17.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/dimensions.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "wetroom-screens/wetroom-kits/tokyo-freestanding-bath": {
    key: "wetroom-screens/wetroom-kits/tokyo-freestanding-bath",
    categorySlug: "wetroom-screens",
    collectionSlug: "wetroom-kits",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description:
      "Contemporary freestanding bath design Compact 1670mm x 750mm x 580mm dimensions Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength and durability Smooth, easy-clean high gloss surface Space-saving design ideal for smaller bathrooms Freestanding installation for flexible layout options Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for modern and space-conscious bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Tokyo-Technical.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "wetroom-screens/wetroom-kits/edge-double-ended-bath": {
    key: "wetroom-screens/wetroom-kits/edge-double-ended-bath",
    categorySlug: "wetroom-screens",
    collectionSlug: "wetroom-kits",
    slug: "edge-double-ended-bath",
    title: "Edge Double Ended Bath",
    description:
      "Square bath, double ended CE compliant to Class 1 Bath panel and waste not included, sold separately Comfortable bathing position at both ends Durable acrylic construction Gloss white finish Central waste and overflow positioning Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms Compatible with optional whirlpool systems Bath panel and waste sold separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Double-Ended-Bath.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "shower-trays/quadrant-shower-trays/quadrant-shower-trays": {
    key: "shower-trays/quadrant-shower-trays/quadrant-shower-trays",
    categorySlug: "shower-trays",
    collectionSlug: "quadrant-shower-trays",
    slug: "quadrant-shower-trays",
    title: "QUADRANT SHOWER TRAYS",
    description:
      "Low profile shower tray design Manufactured from 30mm stone resin Double-skinned construction for extra strength Designed for use with a 90mm waste 90mm waste included in the price Lifetime guarantee against manufacturing defects Complies with BS EN 14527 standards Easy-fit legs available for easier installation Space-saving quadrant shape for corner installations White finish suitable for contemporary bathrooms",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-28.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-28.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/g-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-20.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/5-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Installation-Instructions-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Installation-Instructions-2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1000x1000-quadrant-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/800x800-quadrant-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x900-offset-RH-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x900-offset-LH-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1000x800-offset-RH-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/900x760-offset-LH-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "shower-trays/rectangular-shower-trays/rectangular-shower-trays": {
    key: "shower-trays/rectangular-shower-trays/rectangular-shower-trays",
    categorySlug: "shower-trays",
    collectionSlug: "rectangular-shower-trays",
    slug: "rectangular-shower-trays",
    title: "RECTANGULAR SHOWER TRAYS",
    description:
      "Low profile shower tray design Manufactured from 30mm stone resin Double-skinned construction for extra strength Designed for use with a 90mm waste 90mm waste included in the price Lifetime guarantee against manufacturing defects Complies with BS EN 14527 standards Easy-fit legs available for easier installation Available in a wide range of rectangular sizes White finish suitable for all bathroom styles",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-21.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-21.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-29.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/M-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Installation-Instructions-2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Installation-Instructions-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1700x900mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x700mm-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "shower-trays/square-shower-trays/square-shower-trays": {
    key: "shower-trays/square-shower-trays/square-shower-trays",
    categorySlug: "shower-trays",
    collectionSlug: "square-shower-trays",
    slug: "square-shower-trays",
    title: "SQUARE SHOWER TRAYS",
    description:
      "Low profile shower tray design Manufactured from 30mm stone resin Double-skinned construction for extra strength Designed for use with a 90mm waste 90mm waste included in the price Lifetime guarantee against manufacturing defects Complies with BS EN 14527 standards Easy-fit legs available for easier installation White finish suitable for a wide range of bathroom styles",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/SQ-5.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/SQ-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/SST.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/F-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Installation-Instructions-2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Installation-Instructions-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1000x1000mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/760x760mm-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "shower-trays/slate-quadrant-shower-tray/slate-quadrant-shower-tray": {
    key: "shower-trays/slate-quadrant-shower-tray/slate-quadrant-shower-tray",
    categorySlug: "shower-trays",
    collectionSlug: "slate-quadrant-shower-tray",
    slug: "slate-quadrant-shower-tray",
    title: "SLATE QUADRANT SHOWER TRAYS",
    description:
      "Contemporary slate-effect shower tray design Space-saving quadrant shape ideal for corner installations Available in White, Sandstorm, Grey and Black finishes Matching colour-coordinated grate included Modern curved front profile Suitable for contemporary bathrooms and en-suites Complements a wide range of quadrant shower enclosures Durable construction for everyday use Stylish alternative to standard shower trays Available in multiple size options",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-14.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-30.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sandstorm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-800-R550-quad-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/900-900-R550-quad-1.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "grey",
        label: "Grey",
      },
      {
        value: "sandstorm",
        label: "Sandstorm",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [
      {
        value: "800x800mm",
        label: "800x800mm",
      },
      {
        value: "900x900mm",
        label: "900x900mm",
      },
    ],
  },
  "shower-trays/rectangular-slate-shower-tray/rectangular-slate-shower-tray": {
    key: "shower-trays/rectangular-slate-shower-tray/rectangular-slate-shower-tray",
    categorySlug: "shower-trays",
    collectionSlug: "rectangular-slate-shower-tray",
    slug: "rectangular-slate-shower-tray",
    title: "SLATE RECTANGULAR SHOWER TRAYS",
    description:
      "Contemporary slate-effect shower tray design Rectangular shape ideal for walk-in and enclosed shower installations Available in White, Sandstorm, Grey and Black finishes Matching colour-coordinated grate included Authentic stone-effect textured surface Suitable for modern bathrooms, en-suites and wet rooms Wide range of size options available Durable construction for everyday use Complements a variety of shower enclosures and screens Stylish low-profile appearance for a premium bathroom finish",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-16.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-16.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-32.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sandstorm-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/700-1000-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/700-1200-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/700-1400-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/700-1500.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/700-1600-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/700-1700-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-1000.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-1200.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-1400.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-1500.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-1600.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-1700-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "grey",
        label: "Grey",
      },
      {
        value: "sandstorm",
        label: "Sandstorm",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [
      {
        value: "1000x700mm",
        label: "1000x700mm",
      },
      {
        value: "1000x800mm",
        label: "1000x800mm",
      },
      {
        value: "1200x700mm",
        label: "1200x700mm",
      },
      {
        value: "1200x800mm",
        label: "1200x800mm",
      },
      {
        value: "1400x700mm",
        label: "1400x700mm",
      },
      {
        value: "1400x800mm",
        label: "1400x800mm",
      },
      {
        value: "1500x700mm",
        label: "1500x700mm",
      },
      {
        value: "1500x800mm",
        label: "1500x800mm",
      },
      {
        value: "1600x700mm",
        label: "1600x700mm",
      },
      {
        value: "1600x800mm",
        label: "1600x800mm",
      },
      {
        value: "1700x700mm",
        label: "1700x700mm",
      },
      {
        value: "1700x800mm",
        label: "1700x800mm",
      },
    ],
  },
  "shower-trays/slate-square-shower-tray/slate-square-shower-tray": {
    key: "shower-trays/slate-square-shower-tray/slate-square-shower-tray",
    categorySlug: "shower-trays",
    collectionSlug: "slate-square-shower-tray",
    slug: "slate-square-shower-tray",
    title: "SLATE SQUARE SHOWER TRAYS",
    description:
      "Contemporary slate-effect shower tray design Square shape suitable for a wide range of bathroom layouts Available in White, Sandstorm, Grey and Black finishes Matching colour-coordinated grate included Authentic stone-effect textured surface Ideal for modern bathrooms, en-suites and shower rooms Compatible with square shower enclosures and screens Durable construction for long-lasting performance Available in multiple size options Stylish low-profile appearance for a premium bathroom finish",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-15.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-15.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-31.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sandstorm-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-800-square-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/900-900-square.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "grey",
        label: "Grey",
      },
      {
        value: "sandstorm",
        label: "Sandstorm",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [
      {
        value: "800x800mm",
        label: "800x800mm",
      },
      {
        value: "900x900mm",
        label: "900x900mm",
      },
    ],
  },
  "shower-trays/easy-plumb-kits/easy-plumb-kits": {
    key: "shower-trays/easy-plumb-kits/easy-plumb-kits",
    categorySlug: "shower-trays",
    collectionSlug: "easy-plumb-kits",
    slug: "easy-plumb-kits",
    title: "EASY PLUMB KITS",
    description:
      "Raises shower trays to allow space for waste and pipework Ideal where floor access is restricted Simplifies shower tray installation Provides easier access for future maintenance Suitable for bathroom renovations and new installations Dedicated kit available for quadrant shower trays Suitable for square and rectangular trays under 1000mm Suitable for square and rectangular trays over 1000mm Designed to work with the Haris Building Solutions shower tray range Durable and stable support system",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/For-Square-Rectangle-Trays.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/For-Square-Rectangle-Trays.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/For-Quadrant-Trays.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/riser-kit-instructions.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/70×90-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/70×100-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/70×120-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/70×160-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/70×170-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/80×100-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/80×140-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/80×160-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/80×180-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/90×100-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/90×120-CM.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/90×180-CM.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "for-quadrant-trays",
        label: "For quadrant trays",
      },
      {
        value: "units-over-1000mm",
        label: "Units over 1000mm",
      },
      {
        value: "units-under-1000mm",
        label: "Units under 1000mm",
      },
    ],
  },
  "shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-black": {
    key: "shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-black",
    categorySlug: "shower-trays",
    collectionSlug: "enclosures-tray-accessories",
    slug: "90mm-fast-flow-waste-black",
    title: "90mm Fast Flow Waste Black",
    description:
      "90mm fast flow shower tray waste Matt black finish Flow rate of up to 32 litres per minute Suitable for most shower trays with a 90mm waste outlet Designed for rapid and efficient drainage Helps minimise water build-up within the shower tray Easy-clean design for simple maintenance Durable construction for long-lasting performance Universal fitting style Meets EN1329/1:2014 (Producer’s Self Declaration) ISO 9001 Management System Approval Ideal for contemporary bathroom and wet room installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wastes.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-chrome": {
    key: "shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-chrome",
    categorySlug: "shower-trays",
    collectionSlug: "enclosures-tray-accessories",
    slug: "90mm-fast-flow-waste-chrome",
    title: "90mm Fast Flow Waste Chrome",
    description:
      "90mm fast flow shower tray waste Polished chrome finish Flow rate of up to 32 litres per minute Suitable for most shower trays with a 90mm waste outlet Designed for rapid and efficient drainage Helps minimise water build-up within the shower tray Easy-clean design for simple maintenance Durable construction for long-lasting performance Universal fitting style Meets EN1329/1:2014 (Producer’s Self Declaration) ISO 9001 Management System Approval Ideal for contemporary bathroom and wet room installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/222-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/222.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wastes-1.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-brushed-brass":
    {
      key: "shower-trays/enclosures-tray-accessories/90mm-fast-flow-waste-brushed-brass",
      categorySlug: "shower-trays",
      collectionSlug: "enclosures-tray-accessories",
      slug: "90mm-fast-flow-waste-brushed-brass",
      title: "90mm Fast Flow Waste Brushed Brass",
      description:
        "90mm fast flow shower tray waste Brushed brass finish Flow rate of up to 32 litres per minute Suitable for most shower trays with a 90mm waste outlet Designed for rapid and efficient drainage Helps minimise water build-up within the shower tray Easy-clean design for simple maintenance Durable construction for long-lasting performance Universal fitting style Meets EN1329/1:2014 ISO 9001 Management System Approval Ideal for contemporary bathroom and wet room installations",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-6.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-7.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/wastes.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "shower-trays/enclosures-tray-accessories/shower-waste-for-slate-trays": {
    key: "shower-trays/enclosures-tray-accessories/shower-waste-for-slate-trays",
    categorySlug: "shower-trays",
    collectionSlug: "enclosures-tray-accessories",
    slug: "shower-waste-for-slate-trays",
    title: "90mm Fast Flow Waste (For slate trays)",
    description:
      "Fast-flow shower waste designed specifically for slate shower trays Suitable for use with Haris Building Solutions slate tray collections Designed to work with matching slate tray grates Promotes rapid and efficient water drainage Helps minimise water build-up within the shower tray Easy-clean design for straightforward maintenance Removable internal components for easy access and cleaning Suitable for standard 40mm (1½&#8221;) waste pipe connections Flexible design helps simplify installation Durable construction for long-lasting performance Ideal for contemporary bathroom and wet room installations Designed to provide a clean and discreet finish with slate trays",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/04/slate-waste-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/04/slate-waste.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "shower-trays/wetroom-kits/tokyo-freestanding-bath": {
    key: "shower-trays/wetroom-kits/tokyo-freestanding-bath",
    categorySlug: "shower-trays",
    collectionSlug: "wetroom-kits",
    slug: "tokyo-freestanding-bath",
    title: "Tokyo Freestanding Bath",
    description:
      "Contemporary freestanding bath design Compact 1670mm x 750mm x 580mm dimensions Manufactured from sanitary-grade acrylic Fibreglass laminate reinforced for added strength and durability Smooth, easy-clean high gloss surface Space-saving design ideal for smaller bathrooms Freestanding installation for flexible layout options Requires a 40mm waste (not included) Durable construction designed for everyday use Ideal for modern and space-conscious bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-23.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Tokyo-Technical.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-18-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "shower-trays/wetroom-kits/edge-double-ended-bath": {
    key: "shower-trays/wetroom-kits/edge-double-ended-bath",
    categorySlug: "shower-trays",
    collectionSlug: "wetroom-kits",
    slug: "edge-double-ended-bath",
    title: "Edge Double Ended Bath",
    description:
      "Square bath, double ended CE compliant to Class 1 Bath panel and waste not included, sold separately Comfortable bathing position at both ends Durable acrylic construction Gloss white finish Central waste and overflow positioning Available in multiple sizes Easy-clean surface Suitable for contemporary and family bathrooms Compatible with optional whirlpool systems Bath panel and waste sold separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-Double-Ended-Bath.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/double-end-300x300.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "furniture/luna-furniture/luna-500mm-floor-vanity": {
    key: "furniture/luna-furniture/luna-500mm-floor-vanity",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-500mm-floor-vanity",
    title: "Luna 500mm Floor Vanity",
    description:
      "500mm floor standing vanity unit Supplied as a unit only Basin sold separately Available in Anthracite Matt, Dove Grey Matt and White finishes Contemporary handleless design Soft-closing doors for smooth and quiet operation Modern floor standing installation Ideal for bathrooms, en-suites and cloakrooms Part of the Luna bathroom furniture collection Compatible with matching ceramic or resin basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/dwe-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/dwe-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jhh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fc6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Luna-500mm-floor-vanity-unit-1.jpg",
    ],
    colours: [
      {
        value: "anthracite-matt",
        label: "Anthracite Matt",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-600mm-floor-vanity": {
    key: "furniture/luna-furniture/luna-600mm-floor-vanity",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-600mm-floor-vanity",
    title: "Luna 600mm Floor Vanity",
    description:
      "600mm floor standing vanity unit Supplied as a unit only Basin sold separately Available in Anthracite Matt, Dove Grey Matt and White finishes Contemporary handleless design Soft-closing doors for smooth and quiet operation Modern floor standing installation Ideal for bathrooms, en-suites and cloakrooms Part of the Luna bathroom furniture collection Compatible with matching ceramic or resin basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/tr-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/tr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/tj.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/yv.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Luna-600mm-floor-vanity-unit-1.jpg",
    ],
    colours: [
      {
        value: "anthracite-matt",
        label: "Anthracite Matt",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-600mm-wall-hung-vanity": {
    key: "furniture/luna-furniture/luna-600mm-wall-hung-vanity",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-600mm-wall-hung-vanity",
    title: "Luna 600mm Wall Hung Vanity",
    description:
      "600mm wall hung vanity unit Supplied as unit only Basin sold separately Available in Anthracite Matt, Dove Grey Matt and White finishes Contemporary handleless design for a minimalist look Wall mounted installation creates a floating effect Soft-close doors for smooth and quiet operation Space-saving design ideal for modern bathrooms and en-suites Part of the Luna bathroom furniture collection Designed for use with compatible basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/g0-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/g0.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/hh-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/hop.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Luna-600mm-wall-hung-vanity-unit-1.jpg",
    ],
    colours: [
      {
        value: "anthracite-matt",
        label: "Anthracite Matt",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-500mm-wc-unit": {
    key: "furniture/luna-furniture/luna-500mm-wc-unit",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-500mm-wc-unit",
    title: "Luna 500mm WC Unit",
    description:
      "500mm WC unit Supplied as unit only Toilet pan sold separately Concealed cistern not included Available in Anthracite Matt, Dove Grey Matt and White finishes Designed for use with back-to-wall toilet pans Conceals pipework for a clean, modern finish Handleless contemporary design Durable bathroom furniture construction Part of the Luna furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/xri-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/xri.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/n0i.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Luna-500mm-WC-unit-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-tall-unit": {
    key: "furniture/luna-furniture/luna-tall-unit",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-tall-unit",
    title: "Luna Tall Unit",
    description:
      "Tall floor standing bathroom storage unit 350mm width (as per Luna range specification) Available in Anthracite Matt, Dove Grey Matt and White finishes Contemporary handleless design Space-saving vertical storage solution Ideal for bathrooms, en-suites and cloakrooms Floor standing construction for stability Part of the coordinated Luna furniture collection Designed for organised bathroom storage Complements other Luna bathroom furniture units",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/h0kyh-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/h0kyh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/hjh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Luna-tall-unit-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-1100mm-l-shape-furniture-pack": {
    key: "furniture/luna-furniture/luna-1100mm-l-shape-furniture-pack",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-1100mm-l-shape-furniture-pack",
    title: "Luna 1100mm L-shape Furniture Pack",
    description:
      "1100mm L-shape furniture pack Complete coordinated bathroom furniture solution Includes L-shape basin unit Includes L-shape WC unit Includes left hand solid surface basin Includes right hand solid surface basin Available in White, Anthracite Matt and Dove Grey Matt finishes Contemporary handleless design Soft-close doors for smooth, quiet operation Space-saving integrated bathroom layout Conceals WC cistern and pipework for a clean finish Designed for modern bathrooms, en-suites and cloakrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjo-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjo.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjj.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/h0k.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/L-Shape-Basin-1100MM-RH-and-LH.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-900mm-l-shape-sets-compact": {
    key: "furniture/luna-furniture/luna-900mm-l-shape-sets-compact",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-900mm-l-shape-sets-compact",
    title: "Luna 900mm L-Shape Sets Compact",
    description:
      "900mm L-shape furniture pack Complete integrated basin and WC furniture solution Includes L-shape basin unit Includes L-shape WC unit Includes right or left hand solid surface basin Available in White, Anthracite Matt and Dove Grey Matt finishes Contemporary handleless design for a modern look Soft-close doors for smooth and quiet operation Conceals WC cistern and pipework for a clean finish Space-saving compact L-shape configuration Designed for bathrooms, en-suites and cloakrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjj-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjj.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/h0k.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jjo.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/L-Shape-900MM-Basin-LH-and-RH-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/luna-furniture/luna-450mm-cloakroom-floorstanding-unit": {
    key: "furniture/luna-furniture/luna-450mm-cloakroom-floorstanding-unit",
    categorySlug: "furniture",
    collectionSlug: "luna-furniture",
    slug: "luna-450mm-cloakroom-floorstanding-unit",
    title: "Luna 400mm Cloakroom Floorstanding Unit",
    description:
      "450mm cloakroom floorstanding vanity unit Supplied as unit only Basin sold separately Available in Anthracite Matt, Dove Grey Matt and White finishes Contemporary handleless design for a minimalist look Soft-close door mechanism for smooth, quiet operation Compact space-saving design ideal for cloakrooms and en-suites Floorstanding installation for stability and traditional furniture feel Part of the coordinated Luna furniture collection Designed for use with compatible cloakroom basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/dove-grey-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/anthracite.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/dove-grey-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Luna-Line-Drawing-1-scaled.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-500mm-floor-vanity-high-gloss": {
    key: "furniture/edge-furniture/edge-500mm-floor-vanity-high-gloss",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-500mm-floor-vanity-high-gloss",
    title: "Edge 500mm Floor Vanity High Gloss",
    description:
      "500mm floor standing vanity unit High gloss finish for a modern, light-reflecting look Available in White Gloss, Anthracite Gloss and Dove Grey Gloss Handleless contemporary design Soft-close door mechanism for smooth, quiet operation Compact space-saving design ideal for cloakrooms and en-suites Floor standing installation for stability and traditional furniture feel Part of the Edge bathroom furniture collection Basin sold separately Designed for use with compatible 500mm basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/FA-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/FA.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ww.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/mf.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-500-Floor-Vanity-Unit-Data-Sheet-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-600mm-floor-vanity-high-gloss": {
    key: "furniture/edge-furniture/edge-600mm-floor-vanity-high-gloss",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-600mm-floor-vanity-high-gloss",
    title: "Edge 600mm Floor Vanity High Gloss",
    description:
      "600mm floor standing vanity unit High gloss finish for a modern, light-reflecting appearance Available in White Gloss, Anthracite Gloss and Dove Grey Gloss Handleless contemporary design Soft-close door mechanism for smooth and quiet operation Spacious storage for everyday bathroom essentials Floor standing installation for stability and traditional furniture feel Part of the Edge bathroom furniture collection Basin sold separately Designed for use with compatible 600mm basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-gr-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-gr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600b-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600we.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-600-Floor-Vanity-Unit-Data-Sheet-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-600mm-wall-hung-vanity": {
    key: "furniture/edge-furniture/edge-600mm-wall-hung-vanity",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-600mm-wall-hung-vanity",
    title: "Edge 600mm Wall Hung Vanity",
    description:
      "600mm wall hung vanity unit High gloss finish for a modern, light-reflecting appearance Available in White Gloss, Anthracite Gloss and Dove Grey Gloss Wall mounted floating design to maximise floor space Handleless contemporary styling Soft-close door mechanism for smooth and quiet operation Space-saving design ideal for bathrooms, en-suites and cloakrooms Part of the Edge bathroom furniture collection Basin sold separately Designed for use with compatible 600mm Edge basins (sold separately)",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wed.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wrr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-600m-wall-hung-vanity-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-500mm-wc-unit": {
    key: "furniture/edge-furniture/edge-500mm-wc-unit",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-500mm-wc-unit",
    title: "Edge 500mm WC Unit",
    description:
      "500mm WC unit Conceals cistern for a clean, modern finish Designed for use with back-to-wall toilet pans Concealed cistern and toilet pan sold separately Available in White Gloss, Anthracite Gloss and Dove Grey Gloss finishes High gloss finish for a bright, contemporary look Handleless modern design Space-saving solution for bathrooms, en-suites and cloakrooms Floor standing installation for stability Part of the Edge bathroom furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wc-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wc.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wcc.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wwc.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-WC-Unit-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-tall-unit": {
    key: "furniture/edge-furniture/edge-tall-unit",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-tall-unit",
    title: "Edge Tall Unit",
    description:
      "350mm floor standing tall storage unit Available in White Gloss, Anthracite Gloss and Dove Grey Matt finishes Contemporary handleless design Space-saving vertical storage solution Ideal for bathrooms, en-suites and cloakrooms Floor standing installation for stability Part of the Edge bathroom furniture collection Designed for coordinated bathroom layouts Compact footprint with tall storage capacity Matches Edge vanity and WC units",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/efe-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/efe.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ere.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rf.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Edge-tall-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey-matt",
        label: "Dove Grey Matt",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-1100mm-l-shape-furniture-pack": {
    key: "furniture/edge-furniture/edge-1100mm-l-shape-furniture-pack",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-1100mm-l-shape-furniture-pack",
    title: "Edge 1100mm L-shape Furniture Pack",
    description:
      "1100mm L-shape furniture pack Complete integrated basin and WC furniture solution Includes L-shape basin unit Includes L-shape WC unit Includes single solid surface basin (left hand OR right hand option) Available in White Gloss, Anthracite Gloss and Dove Grey Gloss finishes High gloss finish for a modern, light-reflecting look Handleless contemporary design Soft-close doors for smooth and quiet operation Conceals WC cistern and pipework for a clean finish Space-saving integrated bathroom layout Part of the Edge bathroom furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/efr-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/efr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wfww.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wrw.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/L-Shape-Basin-1100MM-RH-and-LH-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/wfww.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-900mm-l-shape-sets-compact": {
    key: "furniture/edge-furniture/edge-900mm-l-shape-sets-compact",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-900mm-l-shape-sets-compact",
    title: "Edge 900MM L-Shape Sets Compact",
    description:
      "900mm L-shape furniture pack Complete integrated basin and WC furniture solution Includes L-shape basin unit Includes L-shape WC unit Includes single solid surface basin (left hand OR right hand option) Available in White Gloss, Anthracite Gloss and Dove Grey Gloss finishes High gloss finish for a modern, light-reflecting look Handleless contemporary design Soft-close doors for smooth and quiet operation Conceals WC cistern and pipework for a clean finish Space-saving compact L-shaped configuration Designed for bathrooms, en-suites and cloakrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wrw-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wrw.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wfww.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/efr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/L-Shape-900MM-Basin-LH-and-RH-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/L-Shape-900mm-Vanity-Data-Sheet-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/wfww-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-400mm-cloakroom-floorstanding-unit": {
    key: "furniture/edge-furniture/edge-400mm-cloakroom-floorstanding-unit",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-400mm-cloakroom-floorstanding-unit",
    title: "Edge 400mm Cloakroom Floorstanding Unit",
    description:
      "400mm cloakroom floorstanding unit Supplied as unit only Basin sold separately Available in White Gloss, Anthracite Gloss and Dove Grey Matt finishes Contemporary handleless design for a modern look Compact space-saving design ideal for cloakrooms and en-suites Floorstanding installation for stability Part of the Edge bathroom furniture collection Designed for coordinated bathroom interiors Clean, minimalist styling for modern spaces",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/anthracite-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/anthracite-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/dove-grey-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Edge-Line-Drawing-scaled.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "dove-grey",
        label: "Dove Grey",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-handles-320mm-black": {
    key: "furniture/edge-furniture/edge-handles-320mm-black",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-handles-320mm-black",
    title: "Edge Handles 320mm Black",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom. Colours: 320mm Black",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wf-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/wf.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-handles-320mm-chrome": {
    key: "furniture/edge-furniture/edge-handles-320mm-chrome",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-handles-320mm-chrome",
    title: "Edge Handles 320mm Chrome",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom. Colours: 320mm Chrome",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wfwf-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wfwf.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/edge-handles-320mm-brushed-brass": {
    key: "furniture/edge-furniture/edge-handles-320mm-brushed-brass",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "edge-handles-320mm-brushed-brass",
    title: "Edge Handles 320mm Brushed Brass",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom. Colours: 320mm Brushed Brass",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-handles-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-handles.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/black-basin-overflow-cover": {
    key: "furniture/edge-furniture/black-basin-overflow-cover",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "black-basin-overflow-cover",
    title: "Black Basin Overflow Cover",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to your beautiful bathroom.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/et-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/et.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "furniture/edge-furniture/brushed-brass-basin-overflow-cover": {
    key: "furniture/edge-furniture/brushed-brass-basin-overflow-cover",
    categorySlug: "furniture",
    collectionSlug: "edge-furniture",
    slug: "brushed-brass-basin-overflow-cover",
    title: "Brushed Brass Basin Overflow Cover",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to your beautiful bathroom.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-overflow-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-overflow-1.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "furniture/como-furniture/como-600mm-wall-hung-unit": {
    key: "furniture/como-furniture/como-600mm-wall-hung-unit",
    categorySlug: "furniture",
    collectionSlug: "como-furniture",
    slug: "como-600mm-wall-hung-unit",
    title: "Como 600mm Wall Hung Vanity",
    description:
      "600mm wall hung vanity unit Unit only (basin sold separately where applicable to installation choice) Available in Matt Black, Matt Grey and Natural Oak finishes Contemporary minimalist design with clean lines Wall mounted installation for a floating, space-enhancing effect Integrated storage for everyday bathroom essentials Designed for modern bathrooms, en-suites and cloakrooms Smooth, streamlined aesthetic for a premium finish Part of the Como bathroom furniture collection Ideal for contemporary fitted bathroom designs",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-600mm.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-600mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-600mm-grey.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-600mm-natural-oak.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308D-D590-Door-open-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308H-D590-Side-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308K-D590-Front-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-Unit_02-High-Res-cgi-2x.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/como-600-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/como-600.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-grey",
        label: "Matt Grey",
      },
      {
        value: "natural-oak",
        label: "Natural Oak",
      },
    ],
    sizes: [],
  },
  "furniture/como-furniture/como-800mm-wall-hung-unit": {
    key: "furniture/como-furniture/como-800mm-wall-hung-unit",
    categorySlug: "furniture",
    collectionSlug: "como-furniture",
    slug: "como-800mm-wall-hung-unit",
    title: "Como 800mm Wall Hung Vanity",
    description:
      "800mm wall hung vanity unit Integrated basin included Contemporary wall mounted floating design Clean, minimalist styling for modern bathrooms Available in Natural Oak, Matt Grey and Matt Black finishes Space-enhancing design ideal for en-suites and main bathrooms Integrated storage for everyday bathroom essentials Smooth, refined surfaces with premium aesthetic appeal Designed for modern fitted bathroom installations Part of the Como bathroom furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-800mm.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-800mm-black.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308D-D790-Door-open-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308H-D790-Front-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308K-D790-Side-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/C308K-D790-Top-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/como-800-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/como-800-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-800mm-grey.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como-800mm-natural-oak.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-grey",
        label: "Matt Grey",
      },
      {
        value: "natural-oak",
        label: "Natural Oak",
      },
    ],
    sizes: [],
  },
  "furniture/como-furniture/como-450mm-floorstanding-vanity": {
    key: "furniture/como-furniture/como-450mm-floorstanding-vanity",
    categorySlug: "furniture",
    collectionSlug: "como-furniture",
    slug: "como-450mm-floorstanding-vanity",
    title: "Como 450mm Floorstanding Vanity",
    description:
      "450mm floorstanding vanity unit Integrated basin included Compact design ideal for cloakrooms and en-suites Single-door storage cabinet for everyday essentials Available in Matt Grey, Matt Black and Natural Oak finishes Contemporary minimalist design Space-efficient floorstanding installation Clean, modern aesthetic suited to premium interiors Part of the Como bathroom furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como450.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como450-black.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como450-grey.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Como450-natural-oak.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/M309D-L730-Front-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/M309D-L730-Top-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/M309H-L730-Door-open-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/M309K-L730-Side-view.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/como-cloakroom-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/como-cloakroom-2.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-grey",
        label: "Matt Grey",
      },
      {
        value: "natural-oak",
        label: "Natural Oak",
      },
    ],
    sizes: [],
  },
  "furniture/sienna-furniture/sienna-600mm-wall-hung-unit": {
    key: "furniture/sienna-furniture/sienna-600mm-wall-hung-unit",
    categorySlug: "furniture",
    collectionSlug: "sienna-furniture",
    slug: "sienna-600mm-wall-hung-unit",
    title: "Sienna 600mm Wall Hung",
    description:
      "600mm wall hung vanity unit Integrated basin included Contemporary floating wall mounted design Clean, minimalist aesthetic with refined proportions Available in Matt White, Matt Black and Matt Cashmere finishes Space-enhancing design ideal for en-suites and main bathrooms Integrated storage for everyday bathroom essentials Smooth, modern surfaces for a premium finish Designed for contemporary fitted bathroom interiors Part of the Sienna furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/600-wall-hung.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/cahsmere-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_wall-hung_black_close-up_01.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_wll_cream_full-lifestyle_01-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Sienna-600mm-Line-drawing-wall-scaled.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-cashmere",
        label: "Matt Cashmere",
      },
      {
        value: "matt-white",
        label: "Matt White",
      },
    ],
    sizes: [],
  },
  "furniture/sienna-furniture/sienna-800mm-wall-hung-unit": {
    key: "furniture/sienna-furniture/sienna-800mm-wall-hung-unit",
    categorySlug: "furniture",
    collectionSlug: "sienna-furniture",
    slug: "sienna-800mm-wall-hung-unit",
    title: "Sienna 800mm Wall Hung",
    description:
      "800mm wall hung vanity unit Integrated basin included Contemporary floating wall mounted design Clean, architectural styling with modern proportions Available in Matt White, Matt Black and Matt Cashmere finishes Space-enhancing design ideal for en-suites and main bathrooms Integrated storage for everyday bathroom essentials Smooth, minimalist surfaces for a premium finish Designed for modern fitted bathroom interiors Part of the Sienna furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-wall-hung.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/cashmere-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Interior-Lifestyle-.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_800_black_close-up_side_01-High-Res-cgi-2x-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800mm-siena-wall-hun-line-scaled.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-cashmere",
        label: "Matt Cashmere",
      },
      {
        value: "matt-white",
        label: "Matt White",
      },
    ],
    sizes: [],
  },
  "furniture/sienna-furniture/sienna-600mm-floor-standing-unit": {
    key: "furniture/sienna-furniture/sienna-600mm-floor-standing-unit",
    categorySlug: "furniture",
    collectionSlug: "sienna-furniture",
    slug: "sienna-600mm-floor-standing-unit",
    title: "Sienna 600mm Floor Standing",
    description:
      "600mm floor standing vanity unit Integrated basin included Contemporary floor standing furniture design Clean, minimalist aesthetic with refined proportions Available in Matt White, Matt Black and Matt Cashmere finishes Ideal for en-suites and main bathrooms Integrated storage for everyday bathroom essentials Smooth, modern surfaces for a premium finish Designed for contemporary fitted bathroom interiors Part of the Sienna furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/600-floor-standing-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/cashmere-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_floor_black_full-lifestyle_01.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_floor_cream_close-up_01.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-line-drawing-600mm-floor-scaled.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-cashmere",
        label: "Matt Cashmere",
      },
      {
        value: "matt-white",
        label: "Matt White",
      },
    ],
    sizes: [],
  },
  "furniture/sienna-furniture/sienna-800mm-floor-standing-unit": {
    key: "furniture/sienna-furniture/sienna-800mm-floor-standing-unit",
    categorySlug: "furniture",
    collectionSlug: "sienna-furniture",
    slug: "sienna-800mm-floor-standing-unit",
    title: "Sienna 800mm Floor Standing",
    description:
      "800mm floor standing vanity unit Integrated basin included Contemporary floor standing furniture design Clean, minimalist aesthetic with refined proportions Available in Matt White, Matt Black and Matt Cashmere finishes Ideal for main bathrooms and en-suites Integrated storage for everyday bathroom essentials Smooth, modern surfaces for a premium finish Designed for contemporary fitted bathroom interiors Part of the Sienna furniture collection",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800-floor-standing-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/cashmere-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_800_floor_cream_full-lifestyle.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Sienna-Floor-800mm-line-drawing-scaled.jpg",
    ],
    colours: [
      {
        value: "matt-black",
        label: "Matt Black",
      },
      {
        value: "matt-cashmere",
        label: "Matt Cashmere",
      },
      {
        value: "matt-white",
        label: "Matt White",
      },
    ],
    sizes: [],
  },
  "furniture/niche/niche-with-shelf": {
    key: "furniture/niche/niche-with-shelf",
    categorySlug: "furniture",
    collectionSlug: "niche",
    slug: "niche-with-shelf",
    title: "Niche with shelf",
    description:
      "Recessed shower niche with integrated centre shelf Creates two separate storage compartments for improved organisation Manufactured from high-quality stainless steel Corrosion-resistant construction for wet environments 300mm x 600mm dimensions Available in Stainless Steel, Black, Brushed Brass, and Brushed Bronze finishes Seamlessly integrates into tiled shower and bathroom walls Helps eliminate clutter and external shower storage accessories Durable, easy-clean design for everyday use Ideal for modern bathrooms, wet rooms, and walk-in showers",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-21.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Bronze-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-600T-DEEP-100MM-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "brushed-bronze",
        label: "Brushed Bronze",
      },
      {
        value: "stainless-steel",
        label: "Stainless Steel",
      },
    ],
    sizes: [],
  },
  "furniture/niche/niche-with-led": {
    key: "furniture/niche/niche-with-led",
    categorySlug: "furniture",
    collectionSlug: "niche",
    slug: "niche-with-led",
    title: "Niche with LED",
    description:
      "Recessed shower niche with integrated LED lighting Contemporary storage solution for modern bathrooms Manufactured from high-quality stainless steel Corrosion-resistant construction for wet environments Creates ambient feature lighting within tiled walls Available in Stainless Steel, Black, Brushed Brass, and Brushed Bronze finishes Helps maintain a clean, clutter-free showering space Durable construction designed for everyday use Seamlessly integrates into shower and bathroom walls Ideal for luxury bathrooms, wet rooms, and contemporary renovations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-300-DEEP-100MM-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-600T-DEEP-100MM-2-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "stainless-steel",
        label: "Stainless Steel",
      },
    ],
    sizes: [
      {
        value: "300x300mm",
        label: "300x300mm",
      },
      {
        value: "300x600mm",
        label: "300x600mm",
      },
    ],
  },
  "heating/intro-anthracite-ladder-rails-22mm/intro-anthracite-ladder-rails-22mm":
    {
      key: "heating/intro-anthracite-ladder-rails-22mm/intro-anthracite-ladder-rails-22mm",
      categorySlug: "heating",
      collectionSlug: "intro-anthracite-ladder-rails-22mm",
      slug: "intro-anthracite-ladder-rails-22mm",
      title: "ANTHRACITE LADDER",
      description:
        "22mm diameter ladder rail design Contemporary anthracite finish Available in multiple size options to suit different bathroom layouts Efficient towel warming and bathroom heating performance Wall mounted installation for space-saving design Multiple horizontal bars for practical towel storage Durable steel construction for everyday use Modern minimalist styling suitable for contemporary interiors Designed for bathrooms, en-suites and cloakrooms Part of the Intro Anthracite heating collection",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/anp1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/anp1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/rgh.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/300-x-1000mm-Towel-Rail-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x500-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Anthracite-ladder-rail-800x500mm.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-800x500-PVD拉丝-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x300-1-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x400-拉丝-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x600-拉丝-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x400-1-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x500-拉丝-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x600-1-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "heating/black-ladder-rails-22mm/black-ladder-rails-22mm": {
    key: "heating/black-ladder-rails-22mm/black-ladder-rails-22mm",
    categorySlug: "heating",
    collectionSlug: "black-ladder-rails-22mm",
    slug: "black-ladder-rails-22mm",
    title: "BLACK LADDER",
    description:
      "22mm diameter ladder rail design Contemporary matt black finish Available in multiple size options to suit different bathroom layouts Efficient towel warming and room heating performance Wall mounted installation for space-saving design Multiple horizontal bars for practical towel storage Durable steel construction for long-lasting use Modern minimalist styling suitable for contemporary interiors Designed for bathrooms, en-suites and cloakrooms Part of the Black Ladder Rail heating collection",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/bl1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bl1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/blackef.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300-x-1000mm-Towel-Rail-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x500-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Anthracite-ladder-rail-800x500mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-800x500-PVD拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x300-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x400-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x600-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x400-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x500-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x600-1-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "heating/chrome-ladder-rails-22mm/chrome-ladder-rails-22mm": {
    key: "heating/chrome-ladder-rails-22mm/chrome-ladder-rails-22mm",
    categorySlug: "heating",
    collectionSlug: "chrome-ladder-rails-22mm",
    slug: "chrome-ladder-rails-22mm",
    title: "CHROME LADDER",
    description:
      "22mm diameter ladder rail design Polished chrome finish for a clean, reflective look Available in multiple size options to suit different bathroom layouts Efficient towel warming and room heating performance Wall mounted installation for space-saving design Multiple horizontal bars for practical towel storage Durable steel construction for long-lasting use Classic ladder-style design with modern appeal Suitable for bathrooms, en-suites and cloakrooms Part of the Chrome Ladder Rail heating collection",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/cp1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/cp1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gw3g.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300-x-1000mm-Towel-Rail-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x500-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Anthracite-ladder-rail-800x500mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-800x500-PVD拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x300-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x400-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x400-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x600-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x500-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x600-1-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "heating/brushed-brass-ladder-rails-22mm/brushed-brass-ladder-rails-22mm": {
    key: "heating/brushed-brass-ladder-rails-22mm/brushed-brass-ladder-rails-22mm",
    categorySlug: "heating",
    collectionSlug: "brushed-brass-ladder-rails-22mm",
    slug: "brushed-brass-ladder-rails-22mm",
    title: "BRUSHED BRASS LADDER",
    description:
      "Contemporary brushed brass finish 22mm diameter ladder rail design High-quality designer towel rail High heat output performance Suitable for towel warming and room heating Compatible with UK heating systems Available in multiple size options EN442 standards compliant Durable steel construction 10-year warranty Ideal for bathrooms, en-suites and cloakrooms Radiator valves available separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300-x-1000mm-Towel-Rail-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x600-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x500-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1600x400-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x600-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x400-拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-1200x300-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/CN-800x500-PVD拉丝-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Anthracite-ladder-rail-800x500mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1200x500-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/600-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/400-x-800mm-Towel-Rail-Brushed-Brass-scaled.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "1200x400mm",
        label: "1200x400mm",
      },
      {
        value: "1200x500mm",
        label: "1200x500mm",
      },
      {
        value: "1200x600mm",
        label: "1200x600mm",
      },
      {
        value: "1600x500mm",
        label: "1600x500mm",
      },
      {
        value: "800x400mm",
        label: "800x400mm",
      },
      {
        value: "800x500mm",
        label: "800x500mm",
      },
      {
        value: "800x600mm",
        label: "800x600mm",
      },
    ],
  },
  "heating/branch-anthracite-heated-towel-rail/branch-anthracite-heated-towel-rail":
    {
      key: "heating/branch-anthracite-heated-towel-rail/branch-anthracite-heated-towel-rail",
      categorySlug: "heating",
      collectionSlug: "branch-anthracite-heated-towel-rail",
      slug: "branch-anthracite-heated-towel-rail",
      title: "BRANCH",
      description:
        "Distinctive branch-style designer heated towel rail Contemporary anthracite finish High-quality designer rail construction Compatible with all UK heating systems High heat output performance Suitable for towel warming and room heating EN442 standards compliant 10-year warranty Ideal for modern bathrooms, en-suites and cloakrooms Radiator valves available separately Contemporary statement design with architectural appeal Durable construction for long-lasting performance",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/pro1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/pro1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/R01379-line-drawing-1200x500--scaled.jpg",
      ],
      colours: [
        {
          value: "anthracite",
          label: "Anthracite",
        },
      ],
      sizes: [],
    },
  "heating/nova-anthracite-heated-towel-rail/nova-anthracite-heated-towel-rail":
    {
      key: "heating/nova-anthracite-heated-towel-rail/nova-anthracite-heated-towel-rail",
      categorySlug: "heating",
      collectionSlug: "nova-anthracite-heated-towel-rail",
      slug: "nova-anthracite-heated-towel-rail",
      title: "NOVA",
      description:
        "Contemporary designer heated towel rail Premium anthracite finish High-quality aluminium construction Compatible with all UK heating systems High heat output performance Suitable for towel warming and room heating Available in multiple size options Also available in Black, Brushed Brass and Chrome finishes EN442 standards compliant 10-year warranty Ideal for bathrooms, en-suites and cloakrooms Radiator valves available separately",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/nop11.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/nop11.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/tw4t-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/nova-black.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/nova-brushed-brass.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/nova-chrome.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/D2-1200x500mm.jpg",
      ],
      colours: [
        {
          value: "anthracite",
          label: "Anthracite",
        },
        {
          value: "black",
          label: "Black",
        },
        {
          value: "brushed-brass",
          label: "Brushed Brass",
        },
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "heating/edge-anthracite-heated-towel-rail/edge-anthracite-heated-towel-rail":
    {
      key: "heating/edge-anthracite-heated-towel-rail/edge-anthracite-heated-towel-rail",
      categorySlug: "heating",
      collectionSlug: "edge-anthracite-heated-towel-rail",
      slug: "edge-anthracite-heated-towel-rail",
      title: "EDGE",
      description:
        "Contemporary designer heated towel rail Premium anthracite finish High-quality aluminium construction Compatible with all UK heating systems High heat output performance Suitable for towel warming and room heating Available in multiple size options Distinctive geometric contemporary design EN442 standards compliant 10-year warranty Ideal for bathrooms, en-suites and cloakrooms Radiator valves available separately",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/edp1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/edp1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/gswr-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/D5-1080x550mm.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "heating/hermes-anthracite-heated-towel-rail/hermes-anthracite-heated-towel-rail":
    {
      key: "heating/hermes-anthracite-heated-towel-rail/hermes-anthracite-heated-towel-rail",
      categorySlug: "heating",
      collectionSlug: "hermes-anthracite-heated-towel-rail",
      slug: "hermes-anthracite-heated-towel-rail",
      title: "HERMES",
      description:
        "Contemporary designer heated towel rail Premium anthracite finish High-quality aluminium construction Compatible with all UK heating systems High heat output performance Suitable for towel warming and room heating Available in multiple size options Distinctive geometric contemporary design EN442 standards compliant 10-year warranty Ideal for bathrooms, en-suites and cloakrooms Radiator valves available separately",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/11/hrp1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/hrp1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/hwgh.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "heating/aries-anthracite-heated-towel-rail/aries-anthracite-heated-towel-rail":
    {
      key: "heating/aries-anthracite-heated-towel-rail/aries-anthracite-heated-towel-rail",
      categorySlug: "heating",
      collectionSlug: "aries-anthracite-heated-towel-rail",
      slug: "aries-anthracite-heated-towel-rail",
      title: "ARIES",
      description:
        "Contemporary designer heated towel rail Premium anthracite finish High-quality aluminium construction Compatible with all UK heating systems High heat output performance Suitable for towel warming and room heating EN442 standards compliant 10-year warranty Modern architectural design Ideal for bathrooms, en-suites and cloakrooms Radiator valves available separately Durable, lightweight aluminium design",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/arip1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/arip1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/ge.jpg",
      ],
      colours: [],
      sizes: [
        {
          value: "1200-x-500mm",
          label: "1200 x 500mm",
        },
      ],
    },
  "heating/leo-radiator/leo-radiator": {
    key: "heating/leo-radiator/leo-radiator",
    categorySlug: "heating",
    collectionSlug: "leo-radiator",
    slug: "leo-radiator",
    title: "LEO",
    description:
      "Contemporary designer radiator Available in vertical and horizontal configurations Modern minimalist styling High heat output performance Durable steel construction Suitable for living rooms, bedrooms, kitchens, hallways and bathrooms Wide range of size options available Space-saving vertical models available EN442 standards compliant Compatible with UK heating systems Contemporary architectural design Radiator valves available separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-12.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-12.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/anthracite-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-25.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-600-x-380-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-600-x-836-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-600-x-1064-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-600-x-1216-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-1200-x-456-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-1600-x-456-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-1800-x-304-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Double-1800-x-456-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-600-x-832-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-600x376-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-600x1060-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-600x1212-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-1200x452-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-1600x452-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-1800x300-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-Single-1800x452-1-scaled.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/libra-radiators/libra-radiators": {
    key: "heating/libra-radiators/libra-radiators",
    categorySlug: "heating",
    collectionSlug: "libra-radiators",
    slug: "libra-radiators",
    title: "LIBRA",
    description:
      "Contemporary designer radiator range Available in vertical and horizontal configurations Single and double panel options available Durable steel construction Finished in White High heat output performance Suitable for living rooms, bedrooms, kitchens and hallways Wide range of size options available Space-saving vertical models available Compatible with UK heating systems Clean, minimalist contemporary styling Radiator valves available separately",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-13.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/white-13.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/anthracite-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-26.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-600-x-420-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-600-x-780-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-600-x-960-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-600-x-1200-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-1200-x-480-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-1600-x-480-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-1800-x-300-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Double-1800-x-480-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-600-x-960-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-600x420-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-600x780-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-600x1200-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-1200x480-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-1600-x-480-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-1800-x-480-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Oval-Single-1800x300-1-scaled.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/underfloor-heating/7-day-programmable-thermostat-wifi-control": {
    key: "heating/underfloor-heating/7-day-programmable-thermostat-wifi-control",
    categorySlug: "heating",
    collectionSlug: "underfloor-heating",
    slug: "7-day-programmable-thermostat-wifi-control",
    title: "Thermostats",
    description:
      "7-Day Programmable Wifi Control Available Colours: White, Black",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-3.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-5.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/straight-radiator-valves": {
    key: "heating/radiator-accessories/straight-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "straight-radiator-valves",
    title: "Straight Valves (Pair)",
    description:
      "Discover Straight Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/angled-radiator-valves": {
    key: "heating/radiator-accessories/angled-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "angled-radiator-valves",
    title: "Angled Valves (pair)",
    description:
      "Discover Angled Valves (pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/corner-radiator-valves": {
    key: "heating/radiator-accessories/corner-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "corner-radiator-valves",
    title: "Corner Valves (Pair)",
    description:
      "Discover Corner Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/straight-square-radiator-valves": {
    key: "heating/radiator-accessories/straight-square-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "straight-square-radiator-valves",
    title: "Straight Square Valves (Pair)",
    description:
      "Discover Straight Square Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/black.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-3.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/angled-square-radiator-valves": {
    key: "heating/radiator-accessories/angled-square-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "angled-square-radiator-valves",
    title: "Angled Square Valves (Pair)",
    description:
      "Discover Angled Square Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-4.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/straight-thermostatic-radiator-valves": {
    key: "heating/radiator-accessories/straight-thermostatic-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "straight-thermostatic-radiator-valves",
    title: "Straight Thermostatic Valves (Pair)",
    description:
      "Discover Straight Thermostatic Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-3.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-9.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/angled-thermostatic-radiator-valves": {
    key: "heating/radiator-accessories/angled-thermostatic-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "angled-thermostatic-radiator-valves",
    title: "Angled Thermostatic Valves (Pair)",
    description:
      "Discover Angled Thermostatic Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-4.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white-2.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/corner-thermostatic-radiator-valves": {
    key: "heating/radiator-accessories/corner-thermostatic-radiator-valves",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "corner-thermostatic-radiator-valves",
    title: "Corner Thermostatic Valves (Pair)",
    description:
      "Discover Corner Thermostatic Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality heating selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-5.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white-3.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "heating/radiator-accessories/heating-element-chrome": {
    key: "heating/radiator-accessories/heating-element-chrome",
    categorySlug: "heating",
    collectionSlug: "radiator-accessories",
    slug: "heating-element-chrome",
    title: "Heating Element Chrome",
    description:
      "150mm &#8211; HE150 &#8211; Price: £85 300mm &#8211; HE300 &#8211; Price: £90 600mm &#8211; HE600 &#8211; Price: £95",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rr-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rr-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Heating-Elements-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "mirrors-cabinets/como-mirror/como-mirror": {
    key: "mirrors-cabinets/como-mirror/como-mirror",
    categorySlug: "mirrors-cabinets",
    collectionSlug: "como-mirror",
    slug: "como-mirror",
    title: "COMO",
    description:
      "Octagonal mirror design Integrated LED illumination Colour temperature changing lighting Built-in demister pad Touch sensor control Available in Chrome, Black and Brushed Brass finishes Contemporary framed design",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-27.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-27.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/brushed-brass-16.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-19.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/3060W-LC-6060-BR-BK-SL-2-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/3060W-LC-8080-BR-BK-SL-2-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [
      {
        value: "600mm",
        label: "600mm",
      },
      {
        value: "800mm",
        label: "800mm",
      },
    ],
  },
  "mirrors-cabinets/halo-mirror/halo-mirror": {
    key: "mirrors-cabinets/halo-mirror/halo-mirror",
    categorySlug: "mirrors-cabinets",
    collectionSlug: "halo-mirror",
    slug: "halo-mirror",
    title: "HALO",
    description:
      "Circular illuminated mirror design Ambient LED halo backlighting Colour temperature changing lighting Built-in demister pad Touch sensor control Available in multiple size options Suitable for bathroom installation Contemporary frameless design",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/02/600mm.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/600mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/800mm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/3050-L-6060-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/3050-L-8080-scaled.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "600mm",
        label: "600mm",
      },
      {
        value: "800mm",
        label: "800mm",
      },
    ],
  },
  "mirrors-cabinets/sienna-mirror/sienna-mirror": {
    key: "mirrors-cabinets/sienna-mirror/sienna-mirror",
    categorySlug: "mirrors-cabinets",
    collectionSlug: "sienna-mirror",
    slug: "sienna-mirror",
    title: "SIENNA",
    description:
      "Rectangular contemporary mirror design Integrated LED illumination Colour temperature changing lighting Built-in heated demister pad Touch switch control Available in Chrome, Black and Brushed Brass finishes Suitable for bathroom installation",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-28.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/black-28.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/brushed-brass-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/chrome-20.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/3009T-LC-5080-BR-BK-SL-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "mirrors-cabinets/kai-mirror/kai-mirror": {
    key: "mirrors-cabinets/kai-mirror/kai-mirror",
    categorySlug: "mirrors-cabinets",
    collectionSlug: "kai-mirror",
    slug: "kai-mirror",
    title: "KAI",
    description:
      "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch switch control Available in 600mm and 800mm sizes Suitable for bathroom installation",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/02/Kai.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Kai.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/GIA-MIR020-Technical-Drawing-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/GIA-MIR021-Technical-Drawing-scaled.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "600mm",
        label: "600mm",
      },
      {
        value: "800mm",
        label: "800mm",
      },
    ],
  },
  "mirrors-cabinets/branch-steam-free-mirror-colour-changing/branch-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/branch-steam-free-mirror-colour-changing/branch-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "branch-steam-free-mirror-colour-changing",
      slug: "branch-steam-free-mirror-colour-changing",
      title: "BRANCH",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch switch control Available in Chrome, Black and Brushed Brass finishes Suitable for bathroom installation",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/b1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/b1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR007-Technical-Drawing-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR008-Technical-Drawing-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/hermes-steam-free-mirror-colour-changing/hermes-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/hermes-steam-free-mirror-colour-changing/hermes-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "hermes-steam-free-mirror-colour-changing",
      slug: "hermes-steam-free-mirror-colour-changing",
      title: "HERMES",
      description:
        "Rectangular mirror design Colour temperature changing LED illumination Built-in heated demister pad Touch sensor control Energy-efficient LED lighting Available in Chrome, Black and Brushed Brass finishes Dimmable lighting functionality",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Hermes500.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Hermes500.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR011-Technical-Drawing-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/edge-steam-free-mirror-colour-changing/edge-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/edge-steam-free-mirror-colour-changing/edge-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "edge-steam-free-mirror-colour-changing",
      slug: "edge-steam-free-mirror-colour-changing",
      title: "EDGE",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch sensor control Can be hung landscape or portrait Available in multiple size options Suitable for bathroom installation",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/e1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/e1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Edge-500x700mm-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Edge-600x800mm-1.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/elyse-steam-free-mirror-colour-changing/elyse-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/elyse-steam-free-mirror-colour-changing/elyse-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "elyse-steam-free-mirror-colour-changing",
      slug: "elyse-steam-free-mirror-colour-changing",
      title: "ELYSE",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimming lighting Built-in heated demister pad Touch and motion sensor control Two-way hanging installation White and blue LED light output IP44 rated for bathroom zones",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/eyl1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/eyl1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR016-Technical-Drawing-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR017-Technical-Drawing-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/kia-steam-free-mirror-colour-changing/kia-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/kia-steam-free-mirror-colour-changing/kia-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "kia-steam-free-mirror-colour-changing",
      slug: "kia-steam-free-mirror-colour-changing",
      title: "KIA",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch sensor control Available in multiple size options Can be hung landscape or portrait IP44 rated for bathroom zones",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/ki1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/ki1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR014-Technical-Drawing-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR015-Technical-Drawing-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/eclipse-steam-free-mirror-colour-changing/eclipse-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/eclipse-steam-free-mirror-colour-changing/eclipse-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "eclipse-steam-free-mirror-colour-changing",
      slug: "eclipse-steam-free-mirror-colour-changing",
      title: "ECLIPSE",
      description:
        "Rectangular framed mirror design Integrated LED illumination Colour temperature changing lighting Built-in heated demister pad Touch sensor control Available in Chrome, Black and Brushed Brass finishes Dimmable lighting functionality",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/e1-1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/e1-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Eclipse-2-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Eclipse-500mm-1.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/rico-steam-free-mirror-colour-changing/rico-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/rico-steam-free-mirror-colour-changing/rico-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "rico-steam-free-mirror-colour-changing",
      slug: "rico-steam-free-mirror-colour-changing",
      title: "RICO",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Motion sensor control Can be hung landscape or portrait Available in multiple size options IP44 rated for bathroom zones",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/Ri1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Ri1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Rico-500mmx700mm-1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Rico-600x800mm-1.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/luna-steam-free-mirror-colour-changing/luna-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/luna-steam-free-mirror-colour-changing/luna-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "luna-steam-free-mirror-colour-changing",
      slug: "luna-steam-free-mirror-colour-changing",
      title: "LUNA",
      description:
        "Circular frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch switch control Available in 600mm and 800mm sizes IP44 rated for bathroom zones",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/Lu1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Lu1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR012-Technical-Drawing-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/GIA-MIR013-Technical-Drawing-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/venus-steam-free-mirror-colour-changing/venus-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/venus-steam-free-mirror-colour-changing/venus-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "venus-steam-free-mirror-colour-changing",
      slug: "venus-steam-free-mirror-colour-changing",
      title: "VENUS",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch sensor control Available in 600mm and 800mm sizes IP44 rated for bathroom zones",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/ve1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/ve1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Venus-600mm-2.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/nova-steam-free-mirror-colour-changing/nova-steam-free-mirror-colour-changing":
    {
      key: "mirrors-cabinets/nova-steam-free-mirror-colour-changing/nova-steam-free-mirror-colour-changing",
      categorySlug: "mirrors-cabinets",
      collectionSlug: "nova-steam-free-mirror-colour-changing",
      slug: "nova-steam-free-mirror-colour-changing",
      title: "NOVA",
      description:
        "Frameless mirror design Energy-efficient LED illumination Colour changing and dimmable lighting Built-in heated demister pad Touch sensor control Available in multiple size options IP44 rated for bathroom zones",
      image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/No1.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/No1.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Nova-700mm-scaled.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/12/Nova-800mm-scaled.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "mirrors-cabinets/intro-cabinet/intro-cabinet": {
    key: "mirrors-cabinets/intro-cabinet/intro-cabinet",
    categorySlug: "mirrors-cabinets",
    collectionSlug: "intro-cabinet",
    slug: "intro-cabinet",
    title: "INTRO",
    description:
      "Discover INTRO from the Intro Cabinet range at Haris Building Solutions. Quality mirrors cabinets selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-13.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-13.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Intro-Mirror-Cabinet-Technical-Drawing.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "500x700mm",
        label: "500x700mm",
      },
    ],
  },
  "panels/bosco-panels/bosco-beech-panels-122mm-x-12mm-x-2600mm": {
    key: "panels/bosco-panels/bosco-beech-panels-122mm-x-12mm-x-2600mm",
    categorySlug: "panels",
    collectionSlug: "bosco-panels",
    slug: "bosco-beech-panels-122mm-x-12mm-x-2600mm",
    title: "Beech",
    description:
      "All panels are sold as singles 8 pack price &#8211; £544 Left hand or Right hand matching trims &#8211; £32.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Beech-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Beech.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Beech-768x1024.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/bosco-panels/bosco-charcoal-panels-122mm-x-12mm-x-2600mm": {
    key: "panels/bosco-panels/bosco-charcoal-panels-122mm-x-12mm-x-2600mm",
    categorySlug: "panels",
    collectionSlug: "bosco-panels",
    slug: "bosco-charcoal-panels-122mm-x-12mm-x-2600mm",
    title: "Charcoal",
    description:
      "All panels are sold as singles 8 pack price &#8211; £544 Left hand or Right hand matching trims &#8211; £32.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Charcoal-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Charcoal.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/bosco-panels/bosco-grey-oak-panels-122mm-x-12mm-x-2600mm": {
    key: "panels/bosco-panels/bosco-grey-oak-panels-122mm-x-12mm-x-2600mm",
    categorySlug: "panels",
    collectionSlug: "bosco-panels",
    slug: "bosco-grey-oak-panels-122mm-x-12mm-x-2600mm",
    title: "Grey Oak",
    description:
      "All panels are sold as singles 8 pack price &#8211; £544 Left hand or Right hand matching trims &#8211; £32.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Grey-Oak-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Grey-Oak.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Grey-Oak-768x1024.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/bosco-panels/bosco-walnut-panels-122mm-x-12mm-x-2600mm": {
    key: "panels/bosco-panels/bosco-walnut-panels-122mm-x-12mm-x-2600mm",
    categorySlug: "panels",
    collectionSlug: "bosco-panels",
    slug: "bosco-walnut-panels-122mm-x-12mm-x-2600mm",
    title: "Walnut",
    description:
      "All panels are sold as singles 8 pack price &#8211; £544 Left hand or Right hand matching trims &#8211; £32.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Walnut-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Walnut.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Walnut-768x1024.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/bosco-panels/bosco-natural-oak-panels-122mm-x-12mm-x-2600mm": {
    key: "panels/bosco-panels/bosco-natural-oak-panels-122mm-x-12mm-x-2600mm",
    categorySlug: "panels",
    collectionSlug: "bosco-panels",
    slug: "bosco-natural-oak-panels-122mm-x-12mm-x-2600mm",
    title: "Natural Oak",
    description:
      "All panels are sold as singles 8 pack price &#8211; £544 Left hand or Right hand matching trims &#8211; £32.00",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Natural-Oak-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Natural-Oak.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Natural-Oak-768x1024.jpg",
    ],
    colours: [],
    sizes: [],
  },

  "panels/classic-8mm/black-sparkle": {
    key: "panels/classic-8mm/black-sparkle",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "black-sparkle",
    title: "Black Sparkle",
    description:
      "Discover Black Sparkle from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/calcutta-white": {
    key: "panels/classic-8mm/calcutta-white",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "calcutta-white",
    title: "Calcutta White",
    description:
      "Discover Calcutta White from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Calcutta-white.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Calcutta-white.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/carrera-marble-grey": {
    key: "panels/classic-8mm/carrera-marble-grey",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "carrera-marble-grey",
    title: "Carrera Marble Grey",
    description:
      "Discover Carrera Marble Grey from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-marble-grey.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-marble-grey.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/concrete-beige": {
    key: "panels/classic-8mm/concrete-beige",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "concrete-beige",
    title: "Concrete Beige",
    description:
      "Discover Concrete Beige from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-beige.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-beige.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/concrete-grey": {
    key: "panels/classic-8mm/concrete-grey",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "concrete-grey",
    title: "Concrete Grey",
    description:
      "Discover Concrete Grey from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-grey-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-grey-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/cutline-marble": {
    key: "panels/classic-8mm/cutline-marble",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "cutline-marble",
    title: "Cutline Marble",
    description:
      "Discover Cutline Marble from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Cutline-Marble.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Cutline-Marble.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/flat-white-gloss": {
    key: "panels/classic-8mm/flat-white-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "flat-white-gloss",
    title: "Flat White (Gloss)",
    description:
      "Discover Flat White (Gloss) from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-White-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-White-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/grey-marble": {
    key: "panels/classic-8mm/grey-marble",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "grey-marble",
    title: "Grey Marble",
    description:
      "Discover Grey Marble from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/grey-sparkle": {
    key: "panels/classic-8mm/grey-sparkle",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "grey-sparkle",
    title: "Grey Sparkle",
    description:
      "Discover Grey Sparkle from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-sparkle.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-sparkle.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/grey-stone": {
    key: "panels/classic-8mm/grey-stone",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "grey-stone",
    title: "Grey Stone",
    description:
      "Discover Grey Stone from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-stone.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-stone.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/white-sparkle": {
    key: "panels/classic-8mm/white-sparkle",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "white-sparkle",
    title: "White Sparkle",
    description:
      "Discover White Sparkle from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/white-chrome-gloss": {
    key: "panels/classic-8mm/white-chrome-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "white-chrome-gloss",
    title: "White Chrome (gloss)",
    description:
      "Discover White Chrome (gloss) from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Chrome-gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Chrome-gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/matt-white-4m": {
    key: "panels/classic-8mm/matt-white-4m",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "matt-white-4m",
    title: "Matt White 4m",
    description:
      "Discover Matt White 4m from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Matt-White-4m.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Matt-White-4m.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-8mm/matt-white": {
    key: "panels/classic-8mm/matt-white",
    categorySlug: "panels",
    collectionSlug: "classic-8mm",
    slug: "matt-white",
    title: "Matt White",
    description:
      "Discover Matt White from the Ceiling panels 250mm * 2700mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Matt-White-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Matt-White-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/black-sparkle-chrome-gloss": {
    key: "panels/classic-9mm/black-sparkle-chrome-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "black-sparkle-chrome-gloss",
    title: "Black Sparkle Chrome (Gloss)",
    description:
      "Discover Black Sparkle Chrome (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle-Chrome-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle-Chrome-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/flat-white-gloss": {
    key: "panels/classic-9mm/flat-white-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "flat-white-gloss",
    title: "Flat White (Gloss)",
    description:
      "Discover Flat White (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-White-Gloss-available-in-4-metres.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Flat-White-Gloss-available-in-4-metres.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/grey-marble-gloss": {
    key: "panels/classic-9mm/grey-marble-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "grey-marble-gloss",
    title: "Grey Marble (Gloss)",
    description:
      "Discover Grey Marble (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/grey-marble-chrome-gloss": {
    key: "panels/classic-9mm/grey-marble-chrome-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "grey-marble-chrome-gloss",
    title: "Grey Marble Chrome (Gloss)",
    description:
      "Discover Grey Marble Chrome (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble-Chrome-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Marble-Chrome-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/white-ash-gloss": {
    key: "panels/classic-9mm/white-ash-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "white-ash-gloss",
    title: "White Ash (Gloss)",
    description:
      "Discover White Ash (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Ash-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Ash-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/white-ash-chrome-gloss": {
    key: "panels/classic-9mm/white-ash-chrome-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "white-ash-chrome-gloss",
    title: "White Ash & Chrome (Gloss)",
    description:
      "Discover White Ash & Chrome (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Ash-Chrome-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Ash-Chrome-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/white-chrome-gloss": {
    key: "panels/classic-9mm/white-chrome-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "white-chrome-gloss",
    title: "White Chrome (Gloss)",
    description:
      "Discover White Chrome (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Chrome-Gloss-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Chrome-Gloss-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/white-sparkle-gloss": {
    key: "panels/classic-9mm/white-sparkle-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "white-sparkle-gloss",
    title: "White Sparkle (Gloss)",
    description:
      "Discover White Sparkle (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-9mm/white-sparkle-chrome-gloss": {
    key: "panels/classic-9mm/white-sparkle-chrome-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-9mm",
    slug: "white-sparkle-chrome-gloss",
    title: "White Sparkle Chrome (Gloss)",
    description:
      "Discover White Sparkle Chrome (Gloss) from the Ceiling panels 250mm * 2700mm * 9.5mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Chrome-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Chrome-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/black-sparkle-gloss": {
    key: "panels/classic-10mm/black-sparkle-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "black-sparkle-gloss",
    title: "Black Sparkle (Gloss)",
    description:
      "Discover Black Sparkle (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Black-Sparkle-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/blue-gloss-onyx": {
    key: "panels/classic-10mm/blue-gloss-onyx",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "blue-gloss-onyx",
    title: "Blue Gloss Onyx",
    description:
      "Discover Blue Gloss Onyx from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blue-Gloss-Onyx.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blue-Gloss-Onyx.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/calcutta-gloss": {
    key: "panels/classic-10mm/calcutta-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "calcutta-gloss",
    title: "Calcutta (Gloss)",
    description:
      "Discover Calcutta (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Calcutta-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Calcutta-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/carrera-marble-gloss": {
    key: "panels/classic-10mm/carrera-marble-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "carrera-marble-gloss",
    title: "Carrera Marble (Gloss)",
    description:
      "Discover Carrera Marble (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-Marble-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-Marble-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/carrera-marble-matt": {
    key: "panels/classic-10mm/carrera-marble-matt",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "carrera-marble-matt",
    title: "Carrera Marble (Matt)",
    description:
      "Discover Carrera Marble (Matt) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-Marble-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Carrera-Marble-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/concrete-beige": {
    key: "panels/classic-10mm/concrete-beige",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "concrete-beige",
    title: "Concrete Beige",
    description:
      "Discover Concrete Beige from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-Beige-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-Beige-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/concrete-grey": {
    key: "panels/classic-10mm/concrete-grey",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "concrete-grey",
    title: "Concrete Grey",
    description:
      "Discover Concrete Grey from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-Grey-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Concrete-Grey-2.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/eclipse-marble": {
    key: "panels/classic-10mm/eclipse-marble",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "eclipse-marble",
    title: "Eclipse Marble",
    description:
      "Discover Eclipse Marble from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Eclipse-Marble.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Eclipse-Marble.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/emperor-marble": {
    key: "panels/classic-10mm/emperor-marble",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "emperor-marble",
    title: "Emperor Marble",
    description:
      "Discover Emperor Marble from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Emperor-Marble.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Emperor-Marble.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/gloss-white": {
    key: "panels/classic-10mm/gloss-white",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "gloss-white",
    title: "Gloss White",
    description:
      "Discover Gloss White from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Gloss-White.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Gloss-White.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/grey-onyx-matt": {
    key: "panels/classic-10mm/grey-onyx-matt",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "grey-onyx-matt",
    title: "Grey Onyx (Matt)",
    description:
      "Discover Grey Onyx (Matt) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Onyx-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Onyx-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/grey-sparkle-gloss": {
    key: "panels/classic-10mm/grey-sparkle-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "grey-sparkle-gloss",
    title: "Grey Sparkle (Gloss)",
    description:
      "Discover Grey Sparkle (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Sparkle-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Sparkle-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/grey-stone": {
    key: "panels/classic-10mm/grey-stone",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "grey-stone",
    title: "Grey Stone",
    description:
      "Discover Grey Stone from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Stone-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Stone-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/grey-stone-gloss": {
    key: "panels/classic-10mm/grey-stone-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "grey-stone-gloss",
    title: "Grey Stone (Gloss)",
    description:
      "Discover Grey Stone (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Stone-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Stone-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/light-grey-marble-matt": {
    key: "panels/classic-10mm/light-grey-marble-matt",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "light-grey-marble-matt",
    title: "Light Grey Marble (Matt)",
    description:
      "Discover Light Grey Marble (Matt) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Light-Grey-Marble-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Light-Grey-Marble-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/light-grey-marble-gloss": {
    key: "panels/classic-10mm/light-grey-marble-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "light-grey-marble-gloss",
    title: "Light Grey Marble (Gloss)",
    description:
      "Discover Light Grey Marble (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Light-Grey-Marble-Gloss-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Light-Grey-Marble-Gloss-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/orion-marble": {
    key: "panels/classic-10mm/orion-marble",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "orion-marble",
    title: "Orion Marble",
    description:
      "Discover Orion Marble from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Orion-Marble.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Orion-Marble.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/pergamon-marble-gloss": {
    key: "panels/classic-10mm/pergamon-marble-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "pergamon-marble-gloss",
    title: "Pergamon Marble Gloss",
    description:
      "Discover Pergamon Marble Gloss from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Pergamon-Marble-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Pergamon-Marble-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/travertine-marble-gloss": {
    key: "panels/classic-10mm/travertine-marble-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "travertine-marble-gloss",
    title: "Travertine Marble (Gloss)",
    description:
      "Discover Travertine Marble (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Travertine-Marble-Gloss.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Travertine-Marble-Gloss.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/white-sparkle-gloss": {
    key: "panels/classic-10mm/white-sparkle-gloss",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "white-sparkle-gloss",
    title: "White Sparkle (Gloss)",
    description:
      "Discover White Sparkle (Gloss) from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Gloss-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Sparkle-Gloss-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/white-stone": {
    key: "panels/classic-10mm/white-stone",
    categorySlug: "panels",
    collectionSlug: "classic-10mm",
    slug: "white-stone",
    title: "White Stone",
    description:
      "Discover White Stone from the PVC Wall Panels 1000mm * 2400mm * 10mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Stone.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/White-Stone.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-chevron-grey-matt-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-chevron-grey-matt-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-chevron-grey-matt-deluxe-panel",
    title: "Chevron Grey (Matt)",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-che.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prri.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/gwrgg.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-che.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-hoeycomb-grey-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-hoeycomb-grey-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-hoeycomb-grey-deluxe-panel",
    title: "HoneyCombe Grey",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500honey.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prdd.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/eeghahah-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500honey.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-chevron-white-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-chevron-white-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-chevron-white-deluxe-panel",
    title: "Chevron White (White)",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/400-ch-whi.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prodgry-c.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/wggr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/400-ch-whi.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-milano-matt-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-milano-matt-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-milano-matt-deluxe-panel",
    title: "Milano (Matt)",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-milano.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/pofyuy.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-milano.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-moccaccino-matt-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-moccaccino-matt-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-moccaccino-matt-deluxe-panel",
    title: "Moccaccino (Matt)",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500mocc.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prkjhgf.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/trheadh-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500mocc.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-london-tile-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-london-tile-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-london-tile-deluxe-panel",
    title: "London Tile",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/pel.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/rghrw.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-2.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/classic-10mm/1m-x-2-4m-chevron-marble-deluxe-panel": {
    key: "panels/classic-10mm/1m-x-2-4m-chevron-marble-deluxe-panel",
    categorySlug: "panels",
    collectionSlug: "deluxe-panels",
    slug: "1m-x-2-4m-chevron-marble-deluxe-panel",
    title: "Chevron Marble",
    description:
      "5-year guarantee 10mm thickness 1000mm width 2400mm height Fire rated",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/500cm.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prtrd.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/heggfef-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2400x1000x10mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500cm.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/decorative-panel/8mm-london-white-matt-decorative-panel": {
    key: "panels/decorative-panel/8mm-london-white-matt-decorative-panel",
    categorySlug: "panels",
    collectionSlug: "decorative-panel",
    slug: "8mm-london-white-matt-decorative-panel",
    title: "8mm London White (Matt)",
    description:
      "Discover 8mm London White (Matt) from the PVC wall panels 1000 mm * 2400 mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/pel.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/rghrw.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2600x250x8mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-2.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/decorative-panel/8mm-chevron-white-decorative-panel": {
    key: "panels/decorative-panel/8mm-chevron-white-decorative-panel",
    categorySlug: "panels",
    collectionSlug: "decorative-panel",
    slug: "8mm-chevron-white-decorative-panel",
    title: "8mm Chevron White",
    description:
      "Discover 8mm Chevron White from the PVC wall panels 1000 mm * 2400 mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/400-ch-whi.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prodgry-c.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/wggr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2600x250x8mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/400-ch-whi.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/decorative-panel/8mm-chevron-grey-decorative-panel": {
    key: "panels/decorative-panel/8mm-chevron-grey-decorative-panel",
    categorySlug: "panels",
    collectionSlug: "decorative-panel",
    slug: "8mm-chevron-grey-decorative-panel",
    title: "8mm Chevron Grey",
    description:
      "Discover 8mm Chevron Grey from the PVC wall panels 1000 mm * 2400 mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-che.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/prri.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/gwrgg.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2600x250x8mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-che.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/decorative-panel/natural-stone-graphite-natural-panel": {
    key: "panels/decorative-panel/natural-stone-graphite-natural-panel",
    categorySlug: "panels",
    collectionSlug: "decorative-panel",
    slug: "natural-stone-graphite-natural-panel",
    title: "Natural Stone Graphite",
    description:
      "Discover Natural Stone Graphite from the PVC wall panels 1000 mm * 2400 mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/500gr.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/profef.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/teheat.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2700x250x8mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500gr.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/decorative-panel/natural-stone-anthracite-natural-panel": {
    key: "panels/decorative-panel/natural-stone-anthracite-natural-panel",
    categorySlug: "panels",
    collectionSlug: "decorative-panel",
    slug: "natural-stone-anthracite-natural-panel",
    title: "Natural Stone Anthracite",
    description:
      "Discover Natural Stone Anthracite from the PVC wall panels 1000 mm * 2400 mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/500hgh.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/pyu.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/ryjrhj.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2700x250x8mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500hgh.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/decorative-panel/8mm-natural-stone-light-grey-decorative-panel": {
    key: "panels/decorative-panel/8mm-natural-stone-light-grey-decorative-panel",
    categorySlug: "panels",
    collectionSlug: "decorative-panel",
    slug: "8mm-natural-stone-light-grey-decorative-panel",
    title: "8mm Natural Stone Light Grey",
    description:
      "Discover 8mm Natural Stone Light Grey from the PVC wall panels 1000 mm * 2400 mm * 8mm range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-naj.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/peoxghxtdh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/rgwrtg.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/2600x250x8mm-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/500-naj.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/odyssey-collection/autumn-ice-matt": {
    key: "panels/odyssey-collection/autumn-ice-matt",
    categorySlug: "panels",
    collectionSlug: "odyssey-collection",
    slug: "autumn-ice-matt",
    title: "Autumn Ice (Matt)",
    description:
      "Discover Autumn Ice (Matt) from the Odyssey Collection range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Autumn-Ice-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Autumn-Ice-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/odyssey-collection/dark-grey-ice-matt": {
    key: "panels/odyssey-collection/dark-grey-ice-matt",
    categorySlug: "panels",
    collectionSlug: "odyssey-collection",
    slug: "dark-grey-ice-matt",
    title: "Dark Grey Ice (Matt)",
    description:
      "Discover Dark Grey Ice (Matt) from the Odyssey Collection range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Dark-Grey-Ice-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Dark-Grey-Ice-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/odyssey-collection/grey-ice-matt": {
    key: "panels/odyssey-collection/grey-ice-matt",
    categorySlug: "panels",
    collectionSlug: "odyssey-collection",
    slug: "grey-ice-matt",
    title: "Grey Ice (Matt)",
    description:
      "Discover Grey Ice (Matt) from the Odyssey Collection range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Ice-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Grey-Ice-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/odyssey-collection/sandstorm-ice-matt": {
    key: "panels/odyssey-collection/sandstorm-ice-matt",
    categorySlug: "panels",
    collectionSlug: "odyssey-collection",
    slug: "sandstorm-ice-matt",
    title: "Sandstorm Ice (Matt)",
    description:
      "Discover Sandstorm Ice (Matt) from the Odyssey Collection range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Sandstorm-Ice-Matt.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Sandstorm-Ice-Matt.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/trims-sealant/black-trims": {
    key: "panels/trims-sealant/black-trims",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "black-trims",
    title: "Black Trims",
    description:
      "Discover Black Trims from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-b.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-b.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/trims-sealant/chrome-trims": {
    key: "panels/trims-sealant/chrome-trims",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "chrome-trims",
    title: "Chrome Trims",
    description:
      "Discover Chrome Trims from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-c.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-c.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/trims-sealant/white-trims": {
    key: "panels/trims-sealant/white-trims",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "white-trims",
    title: "White Trims",
    description:
      "Discover White Trims from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-w-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-w-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/trims-sealant/brushed-brass-trims": {
    key: "panels/trims-sealant/brushed-brass-trims",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "brushed-brass-trims",
    title: "Brushed Brass Trims",
    description:
      "Discover Brushed Brass Trims from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-bb.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-bb.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "panels/trims-sealant/pvc-panel-adhesive-sealant": {
    key: "panels/trims-sealant/pvc-panel-adhesive-sealant",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "pvc-panel-adhesive-sealant",
    title: "PVC Adhesive Sealant",
    description:
      "Discover PVC Adhesive Sealant from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant-1.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "310ml",
        label: "310ml",
      },
    ],
  },
  "panels/trims-sealant/grey-silicone": {
    key: "panels/trims-sealant/grey-silicone",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "grey-silicone",
    title: "Grey Silicone",
    description:
      "Discover Grey Silicone from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Grey-Silicone-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "310ml",
        label: "310ml",
      },
    ],
  },
  "panels/trims-sealant/white-silicone": {
    key: "panels/trims-sealant/white-silicone",
    categorySlug: "panels",
    collectionSlug: "trims-sealant",
    slug: "white-silicone",
    title: "White Silicone",
    description:
      "Discover White Silicone from the Trims & Sealant range at Haris Building Solutions. Quality panels selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/White-Silicone-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
    ],
    colours: [],
    sizes: [
      {
        value: "310ml",
        label: "310ml",
      },
    ],
  },
  "flooring/7524/7524": {
    key: "flooring/7524/7524",
    categorySlug: "flooring",
    collectionSlug: "7524",
    slug: "7524",
    title: "Cairo SPC Flooring",
    description:
      "Cairo Oak wood-effect SPC flooring Tile size: 1220 x 315 x 6mm 5 tiles per box Covers 1.89m² per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic PVC decorative layer Dense SPC board construction for added stability 100% waterproof core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Suitable for domestic and commercial applications Suitable for installation on water heating systems up to 32°C",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Cairo-oak-SPC-.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "1220-x-315-x-6mm-5-tiles-per-box",
        label: "1220 x 315 x 6mm - 5 tiles per box",
      },
    ],
  },
  "flooring/clawson-oak-spc-flooring/clawson-oak-spc-flooring": {
    key: "flooring/clawson-oak-spc-flooring/clawson-oak-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "clawson-oak-spc-flooring",
    slug: "clawson-oak-spc-flooring",
    title: "Clawson SPC Flooring",
    description:
      "Clawson Oak wood-effect SPC flooring Tile size: 1220 x 310 x 6mm 5 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic PVC decorative layer Dense SPC board construction for superior stability 100% waterproof core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Suitable for domestic and commercial applications Suitable for installation on water heating systems up to 32°C",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Clawson-Oak-SPC-flooring-1.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "1220-x-315mm-5-tiles-per-box",
        label: "1220 x 315mm - 5 tiles per box",
      },
    ],
  },
  "flooring/dynasty-black-spc-flooring/dynasty-black-spc-flooring": {
    key: "flooring/dynasty-black-spc-flooring/dynasty-black-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "dynasty-black-spc-flooring",
    slug: "dynasty-black-spc-flooring",
    title: "Dynasty Black SPC Flooring",
    description:
      "Dynasty Black SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic decorative surface layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Designed for long-lasting durability Suitable for residential and commercial interiors Suitable for installation on water heating systems up to 32°C",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-54.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-54.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Dynasty-Black-Flooring-scaled.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "615-x-315-x-6mm-9-tiles-per-box",
        label: "615 x 315 x 6mm - 9 tiles per box",
      },
    ],
  },
  "flooring/olympus-beige-spc-flooring/olympus-beige-spc-flooring": {
    key: "flooring/olympus-beige-spc-flooring/olympus-beige-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "olympus-beige-spc-flooring",
    slug: "olympus-beige-spc-flooring",
    title: "Olympus Beige SPC Flooring",
    description:
      "Olympus Beige SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic stone-effect decorative layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Designed for long-lasting durability Suitable for domestic and commercial applications Suitable for installation on water heating systems up to 32°C",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-4.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Blank-product-image-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Olympus-Beige-Floor-A4.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "615-x-315-x-6mm-9-tiles-per-box",
        label: "615 x 315 x 6mm - 9 tiles per box",
      },
    ],
  },
  "flooring/juno-grey-spc-flooring/juno-grey-spc-flooring": {
    key: "flooring/juno-grey-spc-flooring/juno-grey-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "juno-grey-spc-flooring",
    slug: "juno-grey-spc-flooring",
    title: "Juno Grey SPC Flooring",
    description:
      "Juno Grey SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic stone-effect decorative layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Designed for long-lasting durability Suitable for residential and commercial interiors Suitable for installation on water heating systems up to 32°C",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/pooo.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/pooo.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/gwrgrg-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "flooring/athena-noir-spc-flooring/athena-noir-spc-flooring": {
    key: "flooring/athena-noir-spc-flooring/athena-noir-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "athena-noir-spc-flooring",
    slug: "athena-noir-spc-flooring",
    title: "Athena Noir SPC Flooring",
    description:
      "Athena Noir SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic marble-effect decorative layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Suitable for commercial and domestic usage Easy-to-manage 6mm tile thickness Suitable for installation on water heating systems up to 32°C",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/poy.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/poy.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/mmm-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "flooring/hera-marble-spc-flooring/hera-marble-spc-flooring": {
    key: "flooring/hera-marble-spc-flooring/hera-marble-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "hera-marble-spc-flooring",
    slug: "hera-marble-spc-flooring",
    title: "Hera Marble SPC Flooring",
    description:
      "Hera Marble SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic marble-effect decorative layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Designed for long-lasting durability Suitable for residential and commercial interiors Suitable for installation on water heating systems up to 32°C",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/fwfe.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/fwfe.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/hrh-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "flooring/ares-carrera-spc-flooring/ares-carrera-spc-flooring": {
    key: "flooring/ares-carrera-spc-flooring/ares-carrera-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "ares-carrera-spc-flooring",
    slug: "ares-carrera-spc-flooring",
    title: "Ares Carrera SPC Flooring",
    description:
      "Ares Carrera SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic marble-effect decorative layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Designed for long-lasting durability Suitable for residential and commercial interiors Suitable for installation on water heating systems up to 32°C",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/poiu.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/poiu.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/ty4e.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "flooring/reve-pearl-spc-flooring/reve-pearl-spc-flooring": {
    key: "flooring/reve-pearl-spc-flooring/reve-pearl-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "reve-pearl-spc-flooring",
    slug: "reve-pearl-spc-flooring",
    title: "Reve Pearl SPC Flooring",
    description:
      "Reve Pearl SPC flooring Tile size: 620 x 310 x 6mm 9 tiles per box Durable UV coating for enhanced surface protection High-resistance PU protective layer Realistic stone-effect decorative layer Dense SPC board construction 100% waterproof SPC core Resistant to expansion and shrinkage EVA backing helps accommodate minor subfloor imperfections Designed for long-lasting durability Suitable for residential and commercial interiors Suitable for installation on water heating systems up to 32°C",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/poou.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/poou.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/gfjfj.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "flooring/reve-dark-grey-spc-flooring/reve-dark-grey-spc-flooring": {
    key: "flooring/reve-dark-grey-spc-flooring/reve-dark-grey-spc-flooring",
    categorySlug: "flooring",
    collectionSlug: "reve-dark-grey-spc-flooring",
    slug: "reve-dark-grey-spc-flooring",
    title: "Reve Dark Grey SPC Flooring",
    description:
      "Reve Dark Grey SPC flooring Tile size: 1220 x 310 x 6mm 5 tiles per box 6mm thickness 100% waterproof SPC core UV coating for enhanced surface protection High-resistance PU protective layer PVC decorative stone-effect layer Dense rigid SPC board construction EVA backing for minor subfloor imperfection tolerance Resistant to expansion and shrinkage Suitable for domestic and commercial use Suitable for installation on water heating systems up to 32°C",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/poo.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/poo.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/bseth-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "flooring/tiles-trims-accessories/brushed-grey-trim": {
    key: "flooring/tiles-trims-accessories/brushed-grey-trim",
    categorySlug: "flooring",
    collectionSlug: "tiles-trims-accessories",
    slug: "brushed-grey-trim",
    title: "Brushed Grey Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim-1.jpg",
    ],
    colours: [
      {
        value: "brushed-grey",
        label: "Brushed Grey",
      },
    ],
    sizes: [],
  },
  "flooring/tiles-trims-accessories/carrera-trim": {
    key: "flooring/tiles-trims-accessories/carrera-trim",
    categorySlug: "flooring",
    collectionSlug: "tiles-trims-accessories",
    slug: "carrera-trim",
    title: "Carrera Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim-1.jpg",
    ],
    colours: [
      {
        value: "carrera",
        label: "Carrera",
      },
    ],
    sizes: [],
  },
  "flooring/tiles-trims-accessories/juno-grey-trim": {
    key: "flooring/tiles-trims-accessories/juno-grey-trim",
    categorySlug: "flooring",
    collectionSlug: "tiles-trims-accessories",
    slug: "juno-grey-trim",
    title: "Juno Grey Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim-1.jpg",
    ],
    colours: [
      {
        value: "juno-grey",
        label: "Juno Grey",
      },
    ],
    sizes: [],
  },
  "flooring/tiles-trims-accessories/dynasty-black": {
    key: "flooring/tiles-trims-accessories/dynasty-black",
    categorySlug: "flooring",
    collectionSlug: "tiles-trims-accessories",
    slug: "dynasty-black",
    title: "Dynasty Black Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black-1.jpg",
    ],
    colours: [
      {
        value: "dynasty-black",
        label: "Dynasty Black",
      },
    ],
    sizes: [],
  },
  "flooring/tiles-trims-accessories/olympus-beige": {
    key: "flooring/tiles-trims-accessories/olympus-beige",
    categorySlug: "flooring",
    collectionSlug: "tiles-trims-accessories",
    slug: "olympus-beige",
    title: "Olympus Beige Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige-1.jpg",
    ],
    colours: [
      {
        value: "olympus-beige",
        label: "Olympus Beige",
      },
    ],
    sizes: [],
  },
  "flooring/tiles-trims-accessories/selene-white-trim": {
    key: "flooring/tiles-trims-accessories/selene-white-trim",
    categorySlug: "flooring",
    collectionSlug: "tiles-trims-accessories",
    slug: "selene-white-trim",
    title: "Selene White Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim-1.jpg",
    ],
    colours: [
      {
        value: "selene-white",
        label: "Selene White",
      },
    ],
    sizes: [],
  },
  "wall-tiles/brushed-grey-spc-wall-tiles/brushed-grey-spc-wall-tiles": {
    key: "wall-tiles/brushed-grey-spc-wall-tiles/brushed-grey-spc-wall-tiles",
    categorySlug: "wall-tiles",
    collectionSlug: "brushed-grey-spc-wall-tiles",
    slug: "brushed-grey-spc-wall-tiles",
    title: "Brushed Grey SPC Wall Tiles",
    description:
      "Brushed Grey SPC wall tiles Tile size: 800 x 400 x 4mm 5 tiles per box 4mm lightweight rigid panel construction Tongue and groove installation system 100% waterproof wall system Suitable for bathrooms, kitchens and wet rooms Durable SPC composite core Easy to install and handle Low maintenance, wipe-clean surface Contemporary brushed concrete-effect finish",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/poio.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/poio.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/arhyhwrh-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/atuu-scaled.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "wall-tiles/selene-spc-wall-tiles/selene-spc-wall-tiles": {
    key: "wall-tiles/selene-spc-wall-tiles/selene-spc-wall-tiles",
    categorySlug: "wall-tiles",
    collectionSlug: "selene-spc-wall-tiles",
    slug: "selene-spc-wall-tiles",
    title: "Selene SPC Wall Tiles",
    description:
      "Selene SPC wall tiles Tile size: 800 x 400 x 4mm 5 tiles per box 4mm rigid SPC composite panel construction Tongue and groove installation system 100% waterproof wall system Suitable for bathrooms, kitchens and wet rooms Lightweight and easy to install Durable SPC core for long-term stability Low-maintenance, wipe-clean surface Seam-reducing interlocking system",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle-4.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "800-x-400mm-5-tiles-per-box",
        label: "800 x 400mm - 5 tiles per box",
      },
    ],
  },
  "wall-tiles/carrera-spc-wall-tiles/carrera-spc-wall-tiles": {
    key: "wall-tiles/carrera-spc-wall-tiles/carrera-spc-wall-tiles",
    categorySlug: "wall-tiles",
    collectionSlug: "carrera-spc-wall-tiles",
    slug: "carrera-spc-wall-tiles",
    title: "Carrera SPC Wall Tiles",
    description:
      "Carrera SPC wall tiles Tile size: 800 x 400 x 4mm 5 tiles per box SPC composite panel construction Tongue and groove installation system 100% waterproof wall system Suitable for bathrooms, kitchens and wet rooms Lightweight and easy to install Durable rigid core construction Low maintenance, wipe-clean surface Seam-reducing interlocking system",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle-5.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "800-x-400mm-5-tiles-per-box",
        label: "800 x 400mm - 5 tiles per box",
      },
    ],
  },
  "wall-tiles/juno-grey-spc-wall-tiles/juno-grey-spc-wall-tiles": {
    key: "wall-tiles/juno-grey-spc-wall-tiles/juno-grey-spc-wall-tiles",
    categorySlug: "wall-tiles",
    collectionSlug: "juno-grey-spc-wall-tiles",
    slug: "juno-grey-spc-wall-tiles",
    title: "Juno Grey SPC Wall Tiles",
    description:
      "Juno Grey SPC wall tiles Tile size: 800 x 400 x 4mm 5 tiles per box 4mm rigid SPC composite panel construction Tongue and groove installation system 100% waterproof wall system Suitable for bathrooms, kitchens and wet rooms Lightweight and easy to install Durable SPC core for long-term stability Low-maintenance, wipe-clean surface Seam-reducing interlocking system",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle-6.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "800-x-400mm-5-tiles-per-box",
        label: "800 x 400mm - 5 tiles per box",
      },
    ],
  },
  "wall-tiles/dynasty-black-spc-wall-tiles/dynasty-black-spc-wall-tiles": {
    key: "wall-tiles/dynasty-black-spc-wall-tiles/dynasty-black-spc-wall-tiles",
    categorySlug: "wall-tiles",
    collectionSlug: "dynasty-black-spc-wall-tiles",
    slug: "dynasty-black-spc-wall-tiles",
    title: "Dynasty Black SPC Wall Tiles",
    description:
      "Dynasty Black SPC wall tiles Tile size: 800 x 400 x 4mm 5 tiles per box 4mm rigid SPC composite panel construction Tongue and groove installation system 100% waterproof wall system Suitable for bathrooms, kitchens and wet rooms Durable SPC core for long-term stability Lightweight and easy to install Low-maintenance, wipe-clean surface Seam-reducing interlocking system",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-55.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Thumbnail-55.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/Dynasty-Black-Wall-Panel-scaled.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "800-x-400mm-5-tiles-per-box",
        label: "800 x 400mm - 5 tiles per box",
      },
    ],
  },
  "wall-tiles/olympus-beige-spc-wall-tiles/olympus-beige-spc-wall-tiles": {
    key: "wall-tiles/olympus-beige-spc-wall-tiles/olympus-beige-spc-wall-tiles",
    categorySlug: "wall-tiles",
    collectionSlug: "olympus-beige-spc-wall-tiles",
    slug: "olympus-beige-spc-wall-tiles",
    title: "Olympus Beige SPC Wall Tiles",
    description:
      "Olympus Beige SPC wall tiles Tile size: 800 x 400 x 4mm 5 tiles per box 4mm rigid SPC composite panel construction Tongue and groove installation system 100% water resistant Thermal and sound insulation properties Class 1 fire rated Quick and easy installation Suitable for bathrooms, kitchens and wet rooms 15-year warranty Low-maintenance, wipe-clean surface",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-4.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/closeup-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/lifestyle-8.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "800-x-400mm-5-tiles-per-box",
        label: "800 x 400mm - 5 tiles per box",
      },
    ],
  },
  "wall-tiles/tiles-trims-accessories/brushed-grey-trim": {
    key: "wall-tiles/tiles-trims-accessories/brushed-grey-trim",
    categorySlug: "wall-tiles",
    collectionSlug: "tiles-trims-accessories",
    slug: "brushed-grey-trim",
    title: "Brushed Grey Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim-1.jpg",
    ],
    colours: [
      {
        value: "brushed-grey",
        label: "Brushed Grey",
      },
    ],
    sizes: [],
  },
  "wall-tiles/tiles-trims-accessories/carrera-trim": {
    key: "wall-tiles/tiles-trims-accessories/carrera-trim",
    categorySlug: "wall-tiles",
    collectionSlug: "tiles-trims-accessories",
    slug: "carrera-trim",
    title: "Carrera Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim-1.jpg",
    ],
    colours: [
      {
        value: "carrera",
        label: "Carrera",
      },
    ],
    sizes: [],
  },
  "wall-tiles/tiles-trims-accessories/juno-grey-trim": {
    key: "wall-tiles/tiles-trims-accessories/juno-grey-trim",
    categorySlug: "wall-tiles",
    collectionSlug: "tiles-trims-accessories",
    slug: "juno-grey-trim",
    title: "Juno Grey Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim-1.jpg",
    ],
    colours: [
      {
        value: "juno-grey",
        label: "Juno Grey",
      },
    ],
    sizes: [],
  },
  "wall-tiles/tiles-trims-accessories/dynasty-black": {
    key: "wall-tiles/tiles-trims-accessories/dynasty-black",
    categorySlug: "wall-tiles",
    collectionSlug: "tiles-trims-accessories",
    slug: "dynasty-black",
    title: "Dynasty Black Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black-1.jpg",
    ],
    colours: [
      {
        value: "dynasty-black",
        label: "Dynasty Black",
      },
    ],
    sizes: [],
  },
  "wall-tiles/tiles-trims-accessories/olympus-beige": {
    key: "wall-tiles/tiles-trims-accessories/olympus-beige",
    categorySlug: "wall-tiles",
    collectionSlug: "tiles-trims-accessories",
    slug: "olympus-beige",
    title: "Olympus Beige Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige-1.jpg",
    ],
    colours: [
      {
        value: "olympus-beige",
        label: "Olympus Beige",
      },
    ],
    sizes: [],
  },
  "wall-tiles/tiles-trims-accessories/selene-white-trim": {
    key: "wall-tiles/tiles-trims-accessories/selene-white-trim",
    categorySlug: "wall-tiles",
    collectionSlug: "tiles-trims-accessories",
    slug: "selene-white-trim",
    title: "Selene White Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim-1.jpg",
    ],
    colours: [
      {
        value: "selene-white",
        label: "Selene White",
      },
    ],
    sizes: [],
  },
  "accessories/sanitaryware-accessories/wc-frame-cistern-with-chrome-flush-plate":
    {
      key: "accessories/sanitaryware-accessories/wc-frame-cistern-with-chrome-flush-plate",
      categorySlug: "accessories",
      collectionSlug: "sanitaryware-accessories",
      slug: "wc-frame-cistern-with-chrome-flush-plate",
      title: "WC Frame & Cistern With Chrome Flush Plate",
      description:
        "The WC Frame & Cistern with Chrome Flush Plate is a premium concealed wall-hung toilet installation system designed to deliver a clean, modern, and space-efficient bathroom finish. By housing the cistern and support frame within the wall, it creates a streamlined aesthetic with only the flush plate visible, making it ideal for contemporary bathroom designs, en-suites, and minimalist interiors. This system features a heavy-duty steel frame engineered for in-wall installation and long-term structural stability, paired with a concealed cistern and chrome dual flush plate. It is designed for compatibility with wall-hung WC pans and is suitable for installation within stud walls or service box...",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/wc-frame.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/wc-frame.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/WC-Frame-1-scaled.jpg",
      ],
      colours: [
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "accessories/sanitaryware-accessories/black-flush-plate": {
    key: "accessories/sanitaryware-accessories/black-flush-plate",
    categorySlug: "accessories",
    collectionSlug: "sanitaryware-accessories",
    slug: "black-flush-plate",
    title: "Flush Plates",
    description:
      "(Only compatible with WC frame) The Haris Building Solutions Flush Plate is a premium wall-mounted actuator designed for use with Haris Building Solutions concealed WC frame and cistern systems, providing the essential interface for dual flush operation in modern bathroom installations. Installed on the finished wall surface, it operates the hidden cistern mechanism while maintaining a clean, minimalist aesthetic with no visible plumbing components. Available in Chrome, Black, and Brushed Brass finishes, it is designed to coordinate seamlessly with contemporary bathroom brassware and Haris Building Solutions concealed WC systems. Engineered for reliability and ease of use, the flush plate...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Chrome-Square.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Chrome-Square.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Round.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Square-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Brushed-Brass-Round.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Brushed-Brass-Square.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Chrome-Round.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/round.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/square.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/sanitaryware-accessories/soft-close-d-shaped-wc-seat": {
    key: "accessories/sanitaryware-accessories/soft-close-d-shaped-wc-seat",
    categorySlug: "accessories",
    collectionSlug: "sanitaryware-accessories",
    slug: "soft-close-d-shaped-wc-seat",
    title: "Soft Close D Shaped WC Seat",
    description:
      "The Haris Building Solutions Soft Close D-Shaped WC Seat is a premium toilet seat designed to deliver comfort, durability, and a refined modern finish for compatible D-shaped WC pans. Featuring a contemporary D-shaped profile, it is specifically engineered to provide a precise fit for modern bathroom suites, making it an ideal upgrade or replacement seat for stylish residential installations. Built for everyday use, this WC seat incorporates a soft-close hinge mechanism that ensures both the seat and lid close slowly and silently, preventing slamming and reducing wear over time. Its weighted, stable construction enhances durability and user comfort, while the smooth anti-bacterial surface...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gf-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/gf.jpg"],
    colours: [],
    sizes: [],
  },
  "accessories/sanitaryware-accessories/concealed-cistern": {
    key: "accessories/sanitaryware-accessories/concealed-cistern",
    categorySlug: "accessories",
    collectionSlug: "sanitaryware-accessories",
    slug: "concealed-cistern",
    title: "Concealed Cistern",
    description:
      "The Haris Building Solutions Concealed Cistern is a high-performance hidden flushing system designed for use with wall-hung or back-to-wall WC installations. Installed behind a stud wall, within boxing, or inside bathroom furniture, it conceals the water storage and flushing mechanism completely, leaving only the flush plate and toilet pan visible for a clean, modern finish. Engineered for reliability and everyday use, the cistern operates using a mechanical dual flush system, providing efficient water-saving performance with full and reduced flush options. It is designed to work as part of the Haris Building Solutions concealed WC system, ensuring compatibility with matching frames and f...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ci-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ci.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bottom-inlet-7610.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bottom-inlet.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/bottom-inlet.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/side-inlet.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/sanitaryware-accessories/concealed-cistern-push-button": {
    key: "accessories/sanitaryware-accessories/concealed-cistern-push-button",
    categorySlug: "accessories",
    collectionSlug: "sanitaryware-accessories",
    slug: "concealed-cistern-push-button",
    title: "Concealed Cistern Push Buttons",
    description:
      "The Haris Building Solutions Concealed Cistern Push Button is a modern mechanical flush actuator designed for use with Haris Building Solutions concealed WC cistern systems. Installed on the finished wall or furniture panel, it provides the visible control point for operating a hidden cistern, delivering reliable dual flush functionality while maintaining a clean, minimalist bathroom aesthetic. Engineered for smooth and consistent operation, the push button connects directly to the internal cistern mechanism, allowing the user to activate either a reduced or full flush with a simple press. Its compact, flush-fitting design ensures a seamless integration into tiled or panelled surfaces, ma...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-13.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brass-2-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/A46-00.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "accessories/sanitaryware-accessories/white-bush-button-hinge-covers": {
    key: "accessories/sanitaryware-accessories/white-bush-button-hinge-covers",
    categorySlug: "accessories",
    collectionSlug: "sanitaryware-accessories",
    slug: "white-bush-button-hinge-covers",
    title: "Push Button and Hinge Covers",
    description:
      "The Haris Building Solutions White Bush Button Hinge Covers are a simple finishing accessory designed to provide a clean, seamless appearance to compatible WC seat hinge systems. They are used to cover exposed hinge fittings, helping to create a more refined and uniform look once the toilet seat is installed. Designed as a push-fit decorative cap, these hinge covers are quick and easy to install without the need for tools. Once fitted, they conceal visible hinge components, improving the overall aesthetic of the WC seat while maintaining full functionality of the hinge mechanism beneath. Ideal for modern bathroom installations where attention to detail matters, the Haris Building Solution...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/push-button-and-hinge-covers.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/A46-01-scaled.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/taps-accessories/click-clack-chrome-basin-waste": {
    key: "accessories/taps-accessories/click-clack-chrome-basin-waste",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "click-clack-chrome-basin-waste",
    title: "Click Clack Chrome Basin Waste",
    description:
      "Polished chrome finish for a modern, coordinated bathroom look Click clack push-button operation for easy opening and closing Universal basin waste design Suitable for compatible basin installations (overflow compatibility not specified on product page) Designed for smooth water drainage control Simple installation Durable bathroom brassware accessory Compact, minimalist design Coordinates with Haris Building Solutions chrome brassware ranges Low-maintenance, easy-clean surface",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-18-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-18.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-18-768x1024.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/universal-click-clack-basin-waste-black": {
    key: "accessories/taps-accessories/universal-click-clack-basin-waste-black",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "universal-click-clack-basin-waste-black",
    title: "Universal Click Clack Basin Waste Black",
    description:
      "Universal design suitable for slotted and unslotted basins Matt black finish for a coordinated modern bathroom aesthetic Click-clack push mechanism for effortless operation Converts between free-flow and sealing functionality Durable construction designed for long-term reliability Easy installation with standard UK basin connections Ideal match for black taps, mixers, and accessories Low-maintenance surface for everyday use Compact, minimalist profile for a clean basin finish Suitable for cloakrooms, ensuites, and main bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-13-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/3-13.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/universal-click-clack-basin-waste-chrome": {
    key: "accessories/taps-accessories/universal-click-clack-basin-waste-chrome",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "universal-click-clack-basin-waste-chrome",
    title: "Universal Click Clack Basin Waste Chrome",
    description:
      "Universal design suitable for slotted and unslotted basins Polished chrome finish for a clean, reflective modern look Click-clack push mechanism for easy open/close operation Converts between sealing and free-flow functionality Durable construction designed for long-term reliability Compatible with standard UK basin waste fittings Easy installation for new and replacement applications Low-maintenance surface for everyday bathroom use Compact, minimalist design for a seamless basin finish Ideal for cloakrooms, ensuites, and main bathrooms",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-14-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/2-14.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/concealed-cistern": {
    key: "accessories/taps-accessories/concealed-cistern",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "concealed-cistern",
    title: "Chrome Click Waste and Overflow",
    description:
      "The Haris Building Solutions Concealed Cistern is a high-performance hidden flushing system designed for use with wall-hung or back-to-wall WC installations. Installed behind a stud wall, within boxing, or inside bathroom furniture, it conceals the water storage and flushing mechanism completely, leaving only the flush plate and toilet pan visible for a clean, modern finish. Engineered for reliability and everyday use, the cistern operates using a mechanical dual flush system, providing efficient water-saving performance with full and reduced flush options. It is designed to work as part of the Haris Building Solutions concealed WC system, ensuring compatibility with matching frames and f...",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-chrome-click-waste-and-overflow-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ci.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bottom-inlet-7610.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/bottom-inlet.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/bottom-inlet.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2024/02/side-inlet.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-chrome-click-waste-and-overflow-768x1024.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/bath-black-click-waste-and-overflow": {
    key: "accessories/taps-accessories/bath-black-click-waste-and-overflow",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "bath-black-click-waste-and-overflow",
    title: "Black Click Waste and Overflow",
    description:
      "Matt black finish for a bold, contemporary bathroom aesthetic Integrated bath waste and overflow system Click-clack push mechanism for easy operation Smooth open and close functionality Built-in overflow protection helps prevent overfilling Durable construction for long-lasting performance Suitable for standard UK bath installations Ideal for pairing with black taps and bathroom accessories Low-maintenance finish for everyday use Modern design to complement contemporary bathroom spaces",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-blackclick-waste-and-overflow-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-blackclick-waste-and-overflow.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/bath-brushed-brass-click-waste-and-overflow": {
    key: "accessories/taps-accessories/bath-brushed-brass-click-waste-and-overflow",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "bath-brushed-brass-click-waste-and-overflow",
    title: "Brushed Brass Click Waste and Overflow",
    description:
      "Brushed brass finish for a warm, luxurious appearance Integrated bath waste and overflow system Click-clack push mechanism for effortless operation Simple push-to-open and push-to-close functionality Built-in overflow protection helps prevent overfilling Ideal for pairing with brushed brass taps and accessories Durable construction for long-lasting performance Suitable for standard UK bath installations Contemporary design with a premium aesthetic Low-maintenance finish for everyday use",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-12.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-13.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/bath-chrome-pop-up-waste-and-overflow": {
    key: "accessories/taps-accessories/bath-chrome-pop-up-waste-and-overflow",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "bath-chrome-pop-up-waste-and-overflow",
    title: "Bath Chrome Pop-Up Waste and Overflow",
    description:
      "Polished chrome finish for a timeless bathroom aesthetic Integrated bath waste and overflow system Pop-up waste mechanism for convenient operation Control operated via the overflow unit Clean alternative to traditional plug and chain systems Built-in overflow protection helps prevent overfilling Suitable for standard UK bath installations Durable construction for reliable everyday use Complements chrome taps, fillers, and accessories Low-maintenance finish for easy cleaning",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-chrome-pop-up-waste-and-overflow-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-chrome-pop-up-waste-and-overflow.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/taps-accessories/bath-black-pop-up-waste-and-overflow": {
    key: "accessories/taps-accessories/bath-black-pop-up-waste-and-overflow",
    categorySlug: "accessories",
    collectionSlug: "taps-accessories",
    slug: "bath-black-pop-up-waste-and-overflow",
    title: "Bath Black Pop-Up Waste and Overflow",
    description:
      "Matt black finish for a bold, contemporary look Integrated bath waste and overflow system Pop-up waste mechanism operated via the overflow control Clean alternative to traditional plug and chain systems Built-in overflow protection helps prevent overfilling Suitable for standard UK bath installations Ideal for pairing with black taps and bathroom accessories Durable construction for long-lasting reliability Modern, minimalist design Low-maintenance finish for easy cleaning Perfect for contemporary bathroom schemes",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-black-pop-up-waste-and-overflow-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Bath-black-pop-up-waste-and-overflow.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/showers-accessories/identity-dual-control-shower-valve-1-outlet":
    {
      key: "accessories/showers-accessories/identity-dual-control-shower-valve-1-outlet",
      categorySlug: "accessories",
      collectionSlug: "showers-accessories",
      slug: "identity-dual-control-shower-valve-1-outlet",
      title: "Identity Dual Control Shower Valve (1 Outlet)",
      description:
        "Dual control shower valve for independent flow and temperature adjustment Designed for use with 1 shower outlet Concealed installation for a clean, minimalist appearance Contemporary design suitable for modern bathrooms Precise control for a personalised showering experience Smooth operation for effortless everyday use Compatible with a range of shower heads and showering accessories Ideal for shower enclosures and wet room installations Durable construction for long-lasting performance Easy-to-use controls for enhanced comfort Suitable for both residential and commercial bathroom projects",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-21-768x1024.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/1-21.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-dual-control-scaled.jpg",
      ],
      colours: [
        {
          value: "chrome",
          label: "Chrome",
        },
      ],
      sizes: [],
    },
  "accessories/showers-accessories/identity-round-push-shower-valve-2-outlet": {
    key: "accessories/showers-accessories/identity-round-push-shower-valve-2-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "identity-round-push-shower-valve-2-outlet",
    title: "Identity Round Push Shower Valve (2 Outlet)",
    description:
      "Push-button shower valve designed for 2 shower outlets Contemporary round control design Concealed installation for a sleek, minimalist appearance Allows control of two separate shower functions Precise temperature adjustment for enhanced comfort Ideal for use with fixed shower heads and handsets Modern design suitable for contemporary bathrooms and wet rooms Streamlined faceplate for a clean, uncluttered finish Durable construction for long-lasting reliability Easy-to-use controls for effortless operation Suitable for residential and luxury bathroom installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/8-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-round-push-valve-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/block-push-shower-valve-square-1-outlet": {
    key: "accessories/showers-accessories/block-push-shower-valve-square-1-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "block-push-shower-valve-square-1-outlet",
    title: "Block Push Shower Valve Square (1 Outlet)",
    description:
      "Push-button shower valve designed for 1 shower outlet Contemporary square design for a modern bathroom aesthetic Concealed installation for a clean, minimalist finish Simple push-button operation for effortless use Suitable for use with fixed shower heads or shower handsets Streamlined faceplate enhances contemporary bathroom designs Ideal for shower enclosures and wet room installations Durable construction for long-lasting reliability Precise control for a comfortable showering experience Easy-to-use design for everyday convenience Perfect for modern residential and luxury bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/4-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-1-outlet-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/block-push-shower-valve-square-2-outlet": {
    key: "accessories/showers-accessories/block-push-shower-valve-square-2-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "block-push-shower-valve-square-2-outlet",
    title: "Block Push Shower Valve Square (2 Outlet)",
    description:
      "Push-button shower valve designed for 2 shower outlets Contemporary square design for a sleek, modern appearance Concealed installation for a clean and uncluttered finish Allows control of two separate shower functions Ideal for use with a fixed shower head and shower handset Easy-to-use push-button operation Precise temperature control for enhanced comfort Suitable for modern shower enclosures and wet room installations Minimalist faceplate design complements contemporary bathrooms Durable construction for reliable long-term performance Perfect for residential and luxury bathroom projects",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/7-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/7-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-2-outlets-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/black-dual-control-round-shower-valve-1-outlet":
    {
      key: "accessories/showers-accessories/black-dual-control-round-shower-valve-1-outlet",
      categorySlug: "accessories",
      collectionSlug: "showers-accessories",
      slug: "black-dual-control-round-shower-valve-1-outlet",
      title: "Black Dual Control Round Shower Valve (1 Outlet)",
      description:
        "Dual control shower valve for independent flow and temperature adjustment Designed for use with 1 shower outlet Contemporary round control design Matt black finish for a striking modern appearance Concealed installation for a clean, streamlined look Suitable for modern shower enclosures and wet rooms Precise temperature control for a personalised showering experience Smooth operation for effortless everyday use Ideal for pairing with black shower heads, arms, and accessories Durable construction for long-lasting reliability Contemporary styling suited to modern bathroom designs",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Round.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Dual-Control-Round.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-dual-control-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "accessories/showers-accessories/black-triple-control-round-shower-valve-2-outlet":
    {
      key: "accessories/showers-accessories/black-triple-control-round-shower-valve-2-outlet",
      categorySlug: "accessories",
      collectionSlug: "showers-accessories",
      slug: "black-triple-control-round-shower-valve-2-outlet",
      title: "Black Triple Control Round Shower Valve (2 Outlet)",
      description:
        "Triple control shower valve designed for 2 shower outlets Contemporary round control design Matt black finish for a bold, modern appearance Independent control of water flow and temperature Allows operation of two separate shower functions Ideal for fixed shower head and handset combinations Concealed installation for a clean, minimalist finish Suitable for modern shower enclosures and wet rooms Smooth and precise controls for a personalised showering experience Durable construction for reliable long-term performance Coordinates perfectly with black shower fittings and accessories",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Round.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Triple-Control-Round.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-round-push-valve-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "accessories/showers-accessories/black-dual-control-square-shower-valve-1-outlet":
    {
      key: "accessories/showers-accessories/black-dual-control-square-shower-valve-1-outlet",
      categorySlug: "accessories",
      collectionSlug: "showers-accessories",
      slug: "black-dual-control-square-shower-valve-1-outlet",
      title: "Black Dual Control Square Shower Valve (1 Outlet)",
      description:
        "Dual control shower valve for independent flow and temperature adjustment Designed for use with 1 shower outlet Contemporary square control design Matt black finish for a bold, modern appearance Concealed installation for a clean and minimalist look Suitable for modern shower enclosures and wet rooms Precise temperature control for enhanced comfort Smooth operation for effortless everyday use Ideal for pairing with black shower heads, arms, and accessories Durable construction for long-lasting reliability Contemporary styling suited to modern bathroom designs",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Dual-Control-Square.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Dual-Control-Square.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-1-outlet-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "accessories/showers-accessories/black-triple-control-square-shower-valve-2-outlet":
    {
      key: "accessories/showers-accessories/black-triple-control-square-shower-valve-2-outlet",
      categorySlug: "accessories",
      collectionSlug: "showers-accessories",
      slug: "black-triple-control-square-shower-valve-2-outlet",
      title: "Black Triple Control Square Shower Valve (2 Outlet)",
      description:
        "Triple control shower valve designed for 2 shower outlets Contemporary square control design Matt black finish for a bold, modern appearance Independent control of water flow and temperature Integrated diverter for switching between two shower functions Ideal for fixed shower head and handset combinations Concealed installation for a clean, minimalist finish Suitable for modern shower enclosures and wet rooms Smooth and precise controls for a personalised showering experience Durable construction for long-lasting reliability Coordinates perfectly with black shower heads, arms, and accessories",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Triple-Control-Square.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Black-Triple-Control-Square.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-push-valve-2-outlets-scaled-1.jpg",
      ],
      colours: [
        {
          value: "black",
          label: "Black",
        },
      ],
      sizes: [],
    },
  "accessories/showers-accessories/300mm-round-fixed-head": {
    key: "accessories/showers-accessories/300mm-round-fixed-head",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "300mm-round-fixed-head",
    title: "300mm Round Fixed Head",
    description:
      "Discover 300mm Round Fixed Head from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/r-2-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/r-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gql2_1-3.jpeg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/OjLYegbl.jpeg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/300mm-square-fixed-head": {
    key: "accessories/showers-accessories/300mm-square-fixed-head",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "300mm-square-fixed-head",
    title: "300mm Square Fixed Head",
    description:
      "Discover 300mm Square Fixed Head from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/gql2_1-3.jpeg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/identity-round-arm": {
    key: "accessories/showers-accessories/identity-round-arm",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "identity-round-arm",
    title: "Identity Ceiling Arm",
    description:
      "Discover Identity Ceiling Arm from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/round-shower-arm-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/round-shower-arm.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-round-arm-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/block-ceiling-arm": {
    key: "accessories/showers-accessories/block-ceiling-arm",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "block-ceiling-arm",
    title: "Block Ceiling Arm",
    description:
      "Discover Block Ceiling Arm from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/yj-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/yj.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-ceilling-arm-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/ceiling-arm-round": {
    key: "accessories/showers-accessories/ceiling-arm-round",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-round",
    title: "Ceiling Arm Round",
    description:
      "Discover Ceiling Arm Round from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/vi-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/vi.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/ceiling-arm-square": {
    key: "accessories/showers-accessories/ceiling-arm-square",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-square",
    title: "Ceiling Arm Square",
    description:
      "Discover Ceiling Arm Square from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/g-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/g.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/identity-sliding-rail-kit": {
    key: "accessories/showers-accessories/identity-sliding-rail-kit",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "identity-sliding-rail-kit",
    title: "Identity Sliding Rail Kit",
    description:
      "Discover Identity Sliding Rail Kit from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jp-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/jp.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-sliding-rail-kit-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/square-sliding-rail-kit": {
    key: "accessories/showers-accessories/square-sliding-rail-kit",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "square-sliding-rail-kit",
    title: "Square Sliding Rail Kit",
    description:
      "Discover Square Sliding Rail Kit from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/syeh-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/syeh.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Square-sliding-rail-kit-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/identity-wall-outlet-and-holder": {
    key: "accessories/showers-accessories/identity-wall-outlet-and-holder",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "identity-wall-outlet-and-holder",
    title: "Identity Wall Outlet and Holder",
    description:
      "Discover Identity Wall Outlet and Holder from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/thr-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/thr.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Identity-wall-outlet-and-holder-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/block-wall-outlet-and-holder": {
    key: "accessories/showers-accessories/block-wall-outlet-and-holder",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "block-wall-outlet-and-holder",
    title: "Block Wall Outlet and Holder",
    description:
      "Discover Block Wall Outlet and Holder from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/j-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/j.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Block-wall-outlet-and-holder-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/chrome-round-elbow-outlet": {
    key: "accessories/showers-accessories/chrome-round-elbow-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "chrome-round-elbow-outlet",
    title: "Chrome Round Elbow Outlet",
    description:
      "Discover Chrome Round Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/cu-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/cu.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/chrome-block-elbow-outlet": {
    key: "accessories/showers-accessories/chrome-block-elbow-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "chrome-block-elbow-outlet",
    title: "Chrome Block Elbow Outlet",
    description:
      "Discover Chrome Block Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/tt-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/tt.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/easy-fix-kit": {
    key: "accessories/showers-accessories/easy-fix-kit",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "easy-fix-kit",
    title: "Easy Fix Kit",
    description:
      "Discover Easy Fix Kit from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/d-3-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/d-3.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/round-fixed-head": {
    key: "accessories/showers-accessories/round-fixed-head",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "round-fixed-head",
    title: "Round Fixed Head",
    description:
      "Discover Round Fixed Head from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rt-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rt-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300mm-round-fixed-head-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/fixed-square-head": {
    key: "accessories/showers-accessories/fixed-square-head",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "fixed-square-head",
    title: "Fixed Square Head",
    description:
      "Discover Fixed Square Head from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/fw.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/300mm-square-fixed-head-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/black-round-arm": {
    key: "accessories/showers-accessories/black-round-arm",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "black-round-arm",
    title: "Black Round Arm",
    description:
      "Discover Black Round Arm from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewf-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/ewf.jpg"],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/black-square-arm": {
    key: "accessories/showers-accessories/black-square-arm",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "black-square-arm",
    title: "Black Square Arm",
    description:
      "Discover Black Square Arm from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/t-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/t.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/ceiling-arm-round-black": {
    key: "accessories/showers-accessories/ceiling-arm-round-black",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-round-black",
    title: "Ceiling Arm Round Black",
    description:
      "Discover Ceiling Arm Round Black from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ee-1.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/ceiling-arm-square-black": {
    key: "accessories/showers-accessories/ceiling-arm-square-black",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "ceiling-arm-square-black",
    title: "Ceiling Arm Square Black",
    description:
      "Discover Ceiling Arm Square Black from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ewq-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/ewq.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/round-sliding-rail-kit-black": {
    key: "accessories/showers-accessories/round-sliding-rail-kit-black",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "round-sliding-rail-kit-black",
    title: "Round Sliding Rail Kit Black",
    description:
      "Discover Round Sliding Rail Kit Black from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rg-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/rg.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/square-sliding-rail-kit-black": {
    key: "accessories/showers-accessories/square-sliding-rail-kit-black",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "square-sliding-rail-kit-black",
    title: "Square Sliding Rail Kit Black",
    description:
      "Discover Square Sliding Rail Kit Black from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/44-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/44.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/0ELq3THL-scaled.jpeg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/round-wall-outlet-black": {
    key: "accessories/showers-accessories/round-wall-outlet-black",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "round-wall-outlet-black",
    title: "Round Wall Outlet Black",
    description:
      "Discover Round Wall Outlet Black from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/ey-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/ey.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/square-wall-outlet-black": {
    key: "accessories/showers-accessories/square-wall-outlet-black",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "square-wall-outlet-black",
    title: "Square Wall Outlet Black",
    description:
      "Discover Square Wall Outlet Black from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/erw-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/erw.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/black-round-elbow-outlet": {
    key: "accessories/showers-accessories/black-round-elbow-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "black-round-elbow-outlet",
    title: "Black Round Elbow Outlet",
    description:
      "Discover Black Round Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/55-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/55.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/showers-accessories/black-square-elbow-outlet": {
    key: "accessories/showers-accessories/black-square-elbow-outlet",
    categorySlug: "accessories",
    collectionSlug: "showers-accessories",
    slug: "black-square-elbow-outlet",
    title: "Black Square Elbow Outlet",
    description:
      "Discover Black Square Elbow Outlet from the Showers Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/e-1-768x1024.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/e-1.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/enclosures-tray-accessories/90mm-fast-flow-waste-black": {
    key: "accessories/enclosures-tray-accessories/90mm-fast-flow-waste-black",
    categorySlug: "accessories",
    collectionSlug: "enclosures-tray-accessories",
    slug: "90mm-fast-flow-waste-black",
    title: "90mm Fast Flow Waste Black",
    description:
      "90mm fast flow shower tray waste Matt black finish Flow rate of up to 32 litres per minute Suitable for most shower trays with a 90mm waste outlet Designed for rapid and efficient drainage Helps minimise water build-up within the shower tray Easy-clean design for simple maintenance Durable construction for long-lasting performance Universal fitting style Meets EN1329/1:2014 (Producer’s Self Declaration) ISO 9001 Management System Approval Ideal for contemporary bathroom and wet room installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-3-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/22-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wastes.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/enclosures-tray-accessories/90mm-fast-flow-waste-chrome": {
    key: "accessories/enclosures-tray-accessories/90mm-fast-flow-waste-chrome",
    categorySlug: "accessories",
    collectionSlug: "enclosures-tray-accessories",
    slug: "90mm-fast-flow-waste-chrome",
    title: "90mm Fast Flow Waste Chrome",
    description:
      "90mm fast flow shower tray waste Polished chrome finish Flow rate of up to 32 litres per minute Suitable for most shower trays with a 90mm waste outlet Designed for rapid and efficient drainage Helps minimise water build-up within the shower tray Easy-clean design for simple maintenance Durable construction for long-lasting performance Universal fitting style Meets EN1329/1:2014 (Producer’s Self Declaration) ISO 9001 Management System Approval Ideal for contemporary bathroom and wet room installations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/222-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/222.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wastes-1.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/enclosures-tray-accessories/90mm-fast-flow-waste-brushed-brass":
    {
      key: "accessories/enclosures-tray-accessories/90mm-fast-flow-waste-brushed-brass",
      categorySlug: "accessories",
      collectionSlug: "enclosures-tray-accessories",
      slug: "90mm-fast-flow-waste-brushed-brass",
      title: "90mm Fast Flow Waste Brushed Brass",
      description:
        "90mm fast flow shower tray waste Brushed brass finish Flow rate of up to 32 litres per minute Suitable for most shower trays with a 90mm waste outlet Designed for rapid and efficient drainage Helps minimise water build-up within the shower tray Easy-clean design for simple maintenance Durable construction for long-lasting performance Universal fitting style Meets EN1329/1:2014 ISO 9001 Management System Approval Ideal for contemporary bathroom and wet room installations",
      image:
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-6.jpg",
      images: [
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-7.jpg",
        "https://giavanibathrooms.com/wp-content/uploads/2026/03/wastes.jpg",
      ],
      colours: [],
      sizes: [],
    },
  "accessories/enclosures-tray-accessories/shower-waste-for-slate-trays": {
    key: "accessories/enclosures-tray-accessories/shower-waste-for-slate-trays",
    categorySlug: "accessories",
    collectionSlug: "enclosures-tray-accessories",
    slug: "shower-waste-for-slate-trays",
    title: "90mm Fast Flow Waste (For slate trays)",
    description:
      "Fast-flow shower waste designed specifically for slate shower trays Suitable for use with Haris Building Solutions slate tray collections Designed to work with matching slate tray grates Promotes rapid and efficient water drainage Helps minimise water build-up within the shower tray Easy-clean design for straightforward maintenance Removable internal components for easy access and cleaning Suitable for standard 40mm (1½&#8221;) waste pipe connections Flexible design helps simplify installation Durable construction for long-lasting performance Ideal for contemporary bathroom and wet room installations Designed to provide a clean and discreet finish with slate trays",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/04/slate-waste-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/04/slate-waste.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/underfloor-heating/7-day-programmable-thermostat-wifi-control": {
    key: "accessories/underfloor-heating/7-day-programmable-thermostat-wifi-control",
    categorySlug: "accessories",
    collectionSlug: "underfloor-heating",
    slug: "7-day-programmable-thermostat-wifi-control",
    title: "Thermostats",
    description:
      "7-Day Programmable Wifi Control Available Colours: White, Black",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-3.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Blank-product-image-5.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/straight-radiator-valves": {
    key: "accessories/radiator-accessories/straight-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "straight-radiator-valves",
    title: "Straight Valves (Pair)",
    description:
      "Discover Straight Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/angled-radiator-valves": {
    key: "accessories/radiator-accessories/angled-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "angled-radiator-valves",
    title: "Angled Valves (pair)",
    description:
      "Discover Angled Valves (pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/corner-radiator-valves": {
    key: "accessories/radiator-accessories/corner-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "corner-radiator-valves",
    title: "Corner Valves (Pair)",
    description:
      "Discover Corner Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-2.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/straight-square-radiator-valves": {
    key: "accessories/radiator-accessories/straight-square-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "straight-square-radiator-valves",
    title: "Straight Square Valves (Pair)",
    description:
      "Discover Straight Square Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/03/black.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-3.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-3.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/angled-square-radiator-valves": {
    key: "accessories/radiator-accessories/angled-square-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "angled-square-radiator-valves",
    title: "Angled Square Valves (Pair)",
    description:
      "Discover Angled Square Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-4.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/straight-thermostatic-radiator-valves": {
    key: "accessories/radiator-accessories/straight-thermostatic-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "straight-thermostatic-radiator-valves",
    title: "Straight Thermostatic Valves (Pair)",
    description:
      "Discover Straight Thermostatic Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-3.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-9.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white-1.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/angled-thermostatic-radiator-valves": {
    key: "accessories/radiator-accessories/angled-thermostatic-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "angled-thermostatic-radiator-valves",
    title: "Angled Thermostatic Valves (Pair)",
    description:
      "Discover Angled Thermostatic Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-4.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-10.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white-2.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/corner-thermostatic-radiator-valves": {
    key: "accessories/radiator-accessories/corner-thermostatic-radiator-valves",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "corner-thermostatic-radiator-valves",
    title: "Corner Thermostatic Valves (Pair)",
    description:
      "Discover Corner Thermostatic Valves (Pair) from the Radiator Accessories range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-5.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/anthracite-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/black-11.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/brushed-brass-8.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/chrome-7.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/white-3.jpg",
    ],
    colours: [
      {
        value: "anthracite",
        label: "Anthracite",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/radiator-accessories/heating-element-chrome": {
    key: "accessories/radiator-accessories/heating-element-chrome",
    categorySlug: "accessories",
    collectionSlug: "radiator-accessories",
    slug: "heating-element-chrome",
    title: "Heating Element Chrome",
    description:
      "150mm &#8211; HE150 &#8211; Price: £85 300mm &#8211; HE300 &#8211; Price: £90 600mm &#8211; HE600 &#8211; Price: £95",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rr-1-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/rr-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/Heating-Elements-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/trims-sealant/black-trims": {
    key: "accessories/trims-sealant/black-trims",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "black-trims",
    title: "Black Trims",
    description:
      "Discover Black Trims from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-b.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-b.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/trims-sealant/chrome-trims": {
    key: "accessories/trims-sealant/chrome-trims",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "chrome-trims",
    title: "Chrome Trims",
    description:
      "Discover Chrome Trims from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-c.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-c.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/trims-sealant/white-trims": {
    key: "accessories/trims-sealant/white-trims",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "white-trims",
    title: "White Trims",
    description:
      "Discover White Trims from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-w-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-w-1.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/trims-sealant/brushed-brass-trims": {
    key: "accessories/trims-sealant/brushed-brass-trims",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "brushed-brass-trims",
    title: "Brushed Brass Trims",
    description:
      "Discover Brushed Brass Trims from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-bb.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/thumbnail-bb.jpg",
    ],
    colours: [],
    sizes: [],
  },
  "accessories/trims-sealant/pvc-panel-adhesive-sealant": {
    key: "accessories/trims-sealant/pvc-panel-adhesive-sealant",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "pvc-panel-adhesive-sealant",
    title: "PVC Adhesive Sealant",
    description:
      "Discover PVC Adhesive Sealant from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant-1.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "310ml",
        label: "310ml",
      },
    ],
  },
  "accessories/trims-sealant/grey-silicone": {
    key: "accessories/trims-sealant/grey-silicone",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "grey-silicone",
    title: "Grey Silicone",
    description:
      "Discover Grey Silicone from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Grey-Silicone-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/PVC-Panel-Adhesive-Sealant.jpg",
    ],
    colours: [],
    sizes: [
      {
        value: "310ml",
        label: "310ml",
      },
    ],
  },
  "accessories/trims-sealant/white-silicone": {
    key: "accessories/trims-sealant/white-silicone",
    categorySlug: "accessories",
    collectionSlug: "trims-sealant",
    slug: "white-silicone",
    title: "White Silicone",
    description:
      "Discover White Silicone from the Trims & Sealant range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/White-Silicone-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
    ],
    colours: [],
    sizes: [
      {
        value: "310ml",
        label: "310ml",
      },
    ],
  },
  "accessories/extractor-fan/concealed-extractor-fan": {
    key: "accessories/extractor-fan/concealed-extractor-fan",
    categorySlug: "accessories",
    collectionSlug: "extractor-fan",
    slug: "concealed-extractor-fan",
    title: "Concealed Extractor Fan",
    description:
      "152mm x 152mm Construction material &#8211; plastic Colour/finish &#8211; white EN 55014 &#8211; Radio frequency disturbances EN 61000 &#8211; Electronic interference EN 60335 &#8211; Safety of household appliances",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/sfd-768x1024.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/sfd.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Turbo-Extractor-Fan-with-Timer.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Extractor-fan-technical-drawings.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2023/12/Extractor-fan-technical-specification.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/extractor-fan/extractor-fan-fascia": {
    key: "accessories/extractor-fan/extractor-fan-fascia",
    categorySlug: "accessories",
    collectionSlug: "extractor-fan",
    slug: "extractor-fan-fascia",
    title: "Coloured Fascias",
    description: "Available Colours: White, Black, Chrome, Brushed Brass",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-Extractor-Fascia.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-Extractor-Fascia-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Extractor-Fascia.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Chrome-Extractor-Fascia.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/White-Extractor-Fascia.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "chrome",
        label: "Chrome",
      },
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/tiles-trims-accessories/brushed-grey-trim": {
    key: "accessories/tiles-trims-accessories/brushed-grey-trim",
    categorySlug: "accessories",
    collectionSlug: "tiles-trims-accessories",
    slug: "brushed-grey-trim",
    title: "Brushed Grey Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Grey-Trim-1.jpg",
    ],
    colours: [
      {
        value: "brushed-grey",
        label: "Brushed Grey",
      },
    ],
    sizes: [],
  },
  "accessories/tiles-trims-accessories/carrera-trim": {
    key: "accessories/tiles-trims-accessories/carrera-trim",
    categorySlug: "accessories",
    collectionSlug: "tiles-trims-accessories",
    slug: "carrera-trim",
    title: "Carrera Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Carrera-Trim-1.jpg",
    ],
    colours: [
      {
        value: "carrera",
        label: "Carrera",
      },
    ],
    sizes: [],
  },
  "accessories/tiles-trims-accessories/juno-grey-trim": {
    key: "accessories/tiles-trims-accessories/juno-grey-trim",
    categorySlug: "accessories",
    collectionSlug: "tiles-trims-accessories",
    slug: "juno-grey-trim",
    title: "Juno Grey Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Juno-Grey-Trim-1.jpg",
    ],
    colours: [
      {
        value: "juno-grey",
        label: "Juno Grey",
      },
    ],
    sizes: [],
  },
  "accessories/tiles-trims-accessories/dynasty-black": {
    key: "accessories/tiles-trims-accessories/dynasty-black",
    categorySlug: "accessories",
    collectionSlug: "tiles-trims-accessories",
    slug: "dynasty-black",
    title: "Dynasty Black Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Dynasty-Black-1.jpg",
    ],
    colours: [
      {
        value: "dynasty-black",
        label: "Dynasty Black",
      },
    ],
    sizes: [],
  },
  "accessories/tiles-trims-accessories/olympus-beige": {
    key: "accessories/tiles-trims-accessories/olympus-beige",
    categorySlug: "accessories",
    collectionSlug: "tiles-trims-accessories",
    slug: "olympus-beige",
    title: "Olympus Beige Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Olympus-Beige-1.jpg",
    ],
    colours: [
      {
        value: "olympus-beige",
        label: "Olympus Beige",
      },
    ],
    sizes: [],
  },
  "accessories/tiles-trims-accessories/selene-white-trim": {
    key: "accessories/tiles-trims-accessories/selene-white-trim",
    categorySlug: "accessories",
    collectionSlug: "tiles-trims-accessories",
    slug: "selene-white-trim",
    title: "Selene White Trim",
    description:
      "Size: 20mm x 20mm x 2600mm Multifunctional Angle Aluminium coated with PVC film 100% damp resistant",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Selene-White-Trim-1.jpg",
    ],
    colours: [
      {
        value: "selene-white",
        label: "Selene White",
      },
    ],
    sizes: [],
  },
  "accessories/ip65-lighting/spotlight-including-white-bezel": {
    key: "accessories/ip65-lighting/spotlight-including-white-bezel",
    categorySlug: "accessories",
    collectionSlug: "ip65-lighting",
    slug: "spotlight-including-white-bezel",
    title: "Spotlight including White Bezel",
    description:
      "• Interchangeable Facial Bezel • Dimmable Lights • 50,000 Hours Lifespan • 5-Year Warranty • 6 Watts",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-including-White-Bezel.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-including-White-Bezel-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-Specifications-scaled.jpg",
    ],
    colours: [
      {
        value: "white",
        label: "White",
      },
    ],
    sizes: [],
  },
  "accessories/ip65-lighting/chrome-bezel-only": {
    key: "accessories/ip65-lighting/chrome-bezel-only",
    categorySlug: "accessories",
    collectionSlug: "ip65-lighting",
    slug: "chrome-bezel-only",
    title: "Chrome Bezel only",
    description:
      "Discover Chrome Bezel only from the IP65 Lighting range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Chrome-Bezel-only.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Chrome-Bezel-only-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-Specifications-scaled.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/ip65-lighting/black-bezel-only": {
    key: "accessories/ip65-lighting/black-bezel-only",
    categorySlug: "accessories",
    collectionSlug: "ip65-lighting",
    slug: "black-bezel-only",
    title: "Black Bezel only",
    description:
      "Discover Black Bezel only from the IP65 Lighting range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Bezel-only.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-Bezel-only-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-Specifications-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/ip65-lighting/brushed-brass-bezel-only": {
    key: "accessories/ip65-lighting/brushed-brass-bezel-only",
    categorySlug: "accessories",
    collectionSlug: "ip65-lighting",
    slug: "brushed-brass-bezel-only",
    title: "Brushed Brass Bezel only",
    description:
      "Discover Brushed Brass Bezel only from the IP65 Lighting range at Haris Building Solutions. Quality accessories selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-Bezel-only.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-Bezel-only-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Spotlight-Specifications-scaled.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "accessories/furniture-accessories/edge-handles-320mm-chrome": {
    key: "accessories/furniture-accessories/edge-handles-320mm-chrome",
    categorySlug: "accessories",
    collectionSlug: "furniture-accessories",
    slug: "edge-handles-320mm-chrome",
    title: "Edge Handles 320mm Chrome",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom. Colours: 320mm Chrome",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/wfwf-768x10241-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2023/11/wfwf.jpg",
    ],
    colours: [
      {
        value: "chrome",
        label: "Chrome",
      },
    ],
    sizes: [],
  },
  "accessories/furniture-accessories/edge-handles-320mm-black": {
    key: "accessories/furniture-accessories/edge-handles-320mm-black",
    categorySlug: "accessories",
    collectionSlug: "furniture-accessories",
    slug: "edge-handles-320mm-black",
    title: "Edge Handles 320mm Black",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom. Colours: 320mm Black",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/wff-768x1024-1.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/wf.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/furniture-accessories/edge-handles-320mm-brushed-brass": {
    key: "accessories/furniture-accessories/edge-handles-320mm-brushed-brass",
    categorySlug: "accessories",
    collectionSlug: "furniture-accessories",
    slug: "edge-handles-320mm-brushed-brass",
    title: "Edge Handles 320mm Brushed Brass",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to you beautiful bathroom. Colours: 320mm Brushed Brass",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-handles-1.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-handles.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "accessories/furniture-accessories/black-basin-overflow-cover": {
    key: "accessories/furniture-accessories/black-basin-overflow-cover",
    categorySlug: "accessories",
    collectionSlug: "furniture-accessories",
    slug: "black-basin-overflow-cover",
    title: "Black Basin Overflow Cover",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to your beautiful bathroom.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2024/01/det-768x1024-1.jpg",
    images: ["https://giavanibathrooms.com/wp-content/uploads/2023/11/et.jpg"],
    colours: [
      {
        value: "black",
        label: "Black",
      },
    ],
    sizes: [],
  },
  "accessories/furniture-accessories/brushed-brass-basin-overflow-cover": {
    key: "accessories/furniture-accessories/brushed-brass-basin-overflow-cover",
    categorySlug: "accessories",
    collectionSlug: "furniture-accessories",
    slug: "brushed-brass-basin-overflow-cover",
    title: "Brushed Brass Basin Overflow Cover",
    description:
      "The Edge collections offers three different trend finishes: Dove Grey Matt, Anthracite Gloss and White. Make a statement with our Edge collection to give your bathroom a stunning finish. Handle features, soft closing doors and high quality ceramic counters will add the finishing touches to your beautiful bathroom.",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-overflow-2.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/bb-overflow-1.jpg",
    ],
    colours: [
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
    ],
    sizes: [],
  },
  "accessories/niche/niche-with-shelf": {
    key: "accessories/niche/niche-with-shelf",
    categorySlug: "accessories",
    collectionSlug: "niche",
    slug: "niche-with-shelf",
    title: "Niche with shelf",
    description:
      "Recessed shower niche with integrated centre shelf Creates two separate storage compartments for improved organisation Manufactured from high-quality stainless steel Corrosion-resistant construction for wet environments 300mm x 600mm dimensions Available in Stainless Steel, Black, Brushed Brass, and Brushed Bronze finishes Seamlessly integrates into tiled shower and bathroom walls Helps eliminate clutter and external shower storage accessories Durable, easy-clean design for everyday use Ideal for modern bathrooms, wet rooms, and walk-in showers",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Black-21.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Brass-14.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Brushed-Bronze-1.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-600T-DEEP-100MM-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Stainless-Steel-copy.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "brushed-bronze",
        label: "Brushed Bronze",
      },
      {
        value: "stainless-steel",
        label: "Stainless Steel",
      },
    ],
    sizes: [],
  },
  "accessories/niche/niche-with-led": {
    key: "accessories/niche/niche-with-led",
    categorySlug: "accessories",
    collectionSlug: "niche",
    slug: "niche-with-led",
    title: "Niche with LED",
    description:
      "Recessed shower niche with integrated LED lighting Contemporary storage solution for modern bathrooms Manufactured from high-quality stainless steel Corrosion-resistant construction for wet environments Creates ambient feature lighting within tiled walls Available in Stainless Steel, Black, Brushed Brass, and Brushed Bronze finishes Helps maintain a clean, clutter-free showering space Durable construction designed for everyday use Seamlessly integrates into shower and bathroom walls Ideal for luxury bathrooms, wet rooms, and contemporary renovations",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600.jpg",
    images: [
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300-4.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x300-5.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300x600-6.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-300-DEEP-100MM-1-scaled.jpg",
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/300-600T-DEEP-100MM-2-scaled.jpg",
    ],
    colours: [
      {
        value: "black",
        label: "Black",
      },
      {
        value: "brushed-brass",
        label: "Brushed Brass",
      },
      {
        value: "stainless-steel",
        label: "Stainless Steel",
      },
    ],
    sizes: [
      {
        value: "300x300mm",
        label: "300x300mm",
      },
      {
        value: "300x600mm",
        label: "300x600mm",
      },
    ],
  },
};

Object.assign(COLLECTION_PAGES, VERANDA_COLLECTIONS);
Object.assign(PRODUCT_PAGES, VERANDA_PRODUCTS);
Object.assign(COLLECTION_PAGES, AWS_COLLECTIONS);
Object.assign(PRODUCT_PAGES, AWS_PRODUCTS);
Object.assign(COLLECTION_PAGES, SILICONE_COLLECTIONS);
Object.assign(PRODUCT_PAGES, SILICONE_PRODUCTS);
Object.assign(COLLECTION_PAGES, KITCHENS_COLLECTIONS);
Object.assign(PRODUCT_PAGES, KITCHENS_PRODUCTS);

function mergeCollectionItems(
  key: string,
  extras: CollectionItem[],
  prepend = false,
) {
  const page = COLLECTION_PAGES[key];
  if (!page) return;
  const existing = new Set(page.items.map((item) => item.id));
  const incoming = extras.filter((item) => !existing.has(item.id));
  page.items = prepend
    ? [...incoming, ...page.items]
    : [...page.items, ...incoming];
}

function classic10mmColourRank(item: CollectionItem): number {
  const text = `${item.label} ${item.id}`.toLowerCase();
  if (/\bgold\b|\boro\b/.test(text)) return 0;
  if (
    /\bwhite\b|\bgalaxy\b|\bcalacatta\b|\bcarrera\b|\bcalcutta\b|\bstutario\b|\bpergamon\b|\btimeless\b|invisible marble|gloss white/.test(
      text,
    ) &&
    !/\bnero\b/.test(text)
  ) {
    return 1;
  }
  if (
    /chevron|honeycomb|honeycombe|milano|moccaccino|london tile/.test(text)
  ) {
    return 3;
  }
  return 2;
}

function sortClassic10mmByColour() {
  const page = COLLECTION_PAGES["panels/classic-10mm"];
  if (!page) return;
  page.items = [...page.items].sort((a, b) => {
    const rank = classic10mmColourRank(a) - classic10mmColourRank(b);
    if (rank !== 0) return rank;
    return a.label.localeCompare(b.label);
  });
}

mergeCollectionItems("panels/classic-10mm", STRING_SHOWER_ITEMS);
sortClassic10mmByColour();
mergeCollectionItems("panels/classic-8mm", STRING_CLADDING_ITEMS);
mergeCollectionItems("panels/acoustic-panels", STRING_ACOUSTIC_ITEMS, true);
Object.assign(PRODUCT_PAGES, STRING_SHOWER_PRODUCTS);
Object.assign(PRODUCT_PAGES, STRING_CLADDING_PRODUCTS);
Object.assign(COLLECTION_PAGES, STRING_SPC_COLLECTIONS);
Object.assign(PRODUCT_PAGES, STRING_SPC_PRODUCTS);
Object.assign(PRODUCT_PAGES, STRING_ACOUSTIC_PRODUCTS);
Object.assign(COLLECTION_PAGES, CORNER_COLLECTIONS);
Object.assign(PRODUCT_PAGES, CORNER_PRODUCTS);

const GIAVANI_FLOORING_SPC_ITEMS: CollectionItem[] = [
  {
    id: "7524",
    label: "Cairo SPC Flooring",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-32.jpg",
    href: "/flooring/7524/7524",
  },
  {
    id: "clawson-oak-spc-flooring",
    label: "Clawson SPC Flooring",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-33.jpg",
    href: "/flooring/clawson-oak-spc-flooring/clawson-oak-spc-flooring",
  },
  {
    id: "dynasty-black-spc-flooring",
    label: "Dynasty Black SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2026/04/floor.jpg",
    href: "/flooring/dynasty-black-spc-flooring/dynasty-black-spc-flooring",
  },
  {
    id: "olympus-beige-spc-flooring",
    label: "Olympus Beige SPC Flooring",
    image:
      "https://giavanibathrooms.com/wp-content/uploads/2026/02/thumbnail-35.jpg",
    href: "/flooring/olympus-beige-spc-flooring/olympus-beige-spc-flooring",
  },
  {
    id: "juno-grey-spc-flooring",
    label: "Juno Grey SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/rgrg.jpg",
    href: "/flooring/juno-grey-spc-flooring/juno-grey-spc-flooring",
  },
  {
    id: "athena-noir-spc-flooring",
    label: "Athena Noir SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/ytyur.jpg",
    href: "/flooring/athena-noir-spc-flooring/athena-noir-spc-flooring",
  },
  {
    id: "hera-marble-spc-flooring",
    label: "Hera Marble SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/hrh.jpg",
    href: "/flooring/hera-marble-spc-flooring/hera-marble-spc-flooring",
  },
  {
    id: "ares-carrera-spc-flooring",
    label: "Ares Carrera SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/t5y.jpg",
    href: "/flooring/ares-carrera-spc-flooring/ares-carrera-spc-flooring",
  },
  {
    id: "reve-pearl-spc-flooring",
    label: "Reve Pearl SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/syjryjr.jpg",
    href: "/flooring/reve-pearl-spc-flooring/reve-pearl-spc-flooring",
  },
  {
    id: "reve-dark-grey-spc-flooring",
    label: "Reve Dark Grey SPC Flooring",
    image: "https://giavanibathrooms.com/wp-content/uploads/2023/12/yujyrsj.jpg",
    href: "/flooring/reve-dark-grey-spc-flooring/reve-dark-grey-spc-flooring",
  },
];

mergeCollectionItems("flooring/spc-flooring", GIAVANI_FLOORING_SPC_ITEMS);

const AQUA_TRIM_IDS = new Set([
  "aluminium-corner-strip-black-wp-07-11-61-62-300cm-1-pack-10pcs",
  "aluminium-end-strip-black-wp-05-07-11-61-62-300cm-1-pack-10pcs",
  "aluminium-i-strip-black-wp-05-07-11-61-62-300cm-1-pack-10pcs",
  "pvc-corner-strip-a-white-marble-wp-07-11-240cm-1-pack-10pcs",
  "wall-panel-pvc-strip-a-wp-05-240cm-1-pack-10pcs",
  "pvc-strip-b-a-white-marble-wp-0711-240cm-1-pack-10pcs",
]);

function moveAquaPanelTrims() {
  const page = COLLECTION_PAGES["panels/aqua-panels"];
  if (!page || COLLECTION_PAGES["panels/aqua-panels/trims"]) return;

  const trims = page.items.filter((item) => AQUA_TRIM_IDS.has(item.id));
  if (!trims.length) return;

  page.items = page.items.filter((item) => !AQUA_TRIM_IDS.has(item.id));
  page.items.push({
    id: "trims",
    label: "Trims",
    image: trims[0].image,
    href: "/panels/aqua-panels/trims",
  });

  COLLECTION_PAGES["panels/aqua-panels/trims"] = {
    key: "panels/aqua-panels/trims",
    categorySlug: "panels",
    slug: "trims",
    title: "Trims",
    description:
      "Corner, end and joining trims for the 60 cm PVC Panels range. Supplied by Haris Building Solutions.",
    image: trims[0].image,
    heroImage: trims[0].image,
    itemsHeading: "View Our Range",
    items: trims,
  };
}

moveAquaPanelTrims();

const ACOUSTIC_OAK_TRIM_ID = "wall-panel-81a-trim-oak-240cm-1-pack-10pcs";

function moveOakTrimToAcoustic() {
  const fromKey = `panels/trims/${ACOUSTIC_OAK_TRIM_ID}`;
  const toKey = "corners/acoustic-panels-trims";
  const product = PRODUCT_PAGES[fromKey];
  const from = COLLECTION_PAGES["panels/trims"];
  const to = COLLECTION_PAGES[toKey];
  if (!product || !to) return;

  if (from) {
    from.items = from.items.filter((item) => item.id !== ACOUSTIC_OAK_TRIM_ID);
    if (!from.items.length) {
      delete COLLECTION_PAGES["panels/trims"];
    }
  }

  to.items = to.items.filter((item) => item.id !== ACOUSTIC_OAK_TRIM_ID);
  to.image = product.image;
  to.heroImage = product.image;

  PRODUCT_PAGES[toKey] = {
    ...product,
    key: toKey,
    categorySlug: "corners",
    collectionSlug: "acoustic-panels-trims",
    slug: ACOUSTIC_OAK_TRIM_ID,
  };
  delete PRODUCT_PAGES[fromKey];
  delete PRODUCT_PAGES[`${toKey}/${ACOUSTIC_OAK_TRIM_ID}`];
}

moveOakTrimToAcoustic();

export function getProductPage(
  categorySlug: string,
  collectionSlug: string,
  productSlug: string,
): ProductPageData | null {
  return (
    PRODUCT_PAGES[`${categorySlug}/${collectionSlug}/${productSlug}`] ?? null
  );
}

export function getCollectionProductPage(
  categorySlug: string,
  collectionSlug: string,
): ProductPageData | null {
  return PRODUCT_PAGES[`${categorySlug}/${collectionSlug}`] ?? null;
}

export function getAllProductParams(): {
  slug: string;
  collection: string;
  product: string;
}[] {
  return Object.values(PRODUCT_PAGES)
    .filter((page) => page.key.split("/").length === 3)
    .map((page) => ({
    slug: page.categorySlug,
    collection: page.collectionSlug,
    product: page.slug,
  }));
}
