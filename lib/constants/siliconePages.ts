import type { CollectionPageData, ProductPageData } from "./collectionPages";

const CT1_CARD_IMAGE =
  "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg";
const STIXALL_WHITE = "/images/silicone/stixall-white.jpg";
const STIXALL_BLACK = "/images/silicone/stixall-black.jpg";
const STIXALL_CLEAR = "/images/silicone/stixall-clear.jpg";

const STIXALL_DESCRIPTION =
  "Everbuild Stixall is a hybrid adhesive and sealant. It bonds and seals most building surfaces, including wet ones. 290ml cartridge. Use it indoors as a sealant or adhesive, and outdoors as an adhesive. Skin time around 10 minutes. Service temperature -40°C to +100°C once cured.";

const STIXALL_FEATURES = [
  "Hybrid polymer: grab like a grab adhesive, seals like a silicone",
  "Works on wet surfaces and can be used for emergency underwater repairs",
  "Waterproof once cured, solvent free",
  "Overpaintable with water-based paints after a test patch",
  "Bonds metals, most plastics, glass, concrete, plaster, wood and painted surfaces",
  "290ml cartridge, gun applied",
];

const STIXALL_COLOURS = [
  { value: "white", label: "White", image: STIXALL_WHITE },
  { value: "black", label: "Black", image: STIXALL_BLACK },
  { value: "crystal-clear", label: "Crystal Clear", image: STIXALL_CLEAR },
  { value: "grey", label: "Grey", image: STIXALL_WHITE },
  { value: "brown", label: "Brown", image: STIXALL_BLACK },
  { value: "anthracite", label: "Anthracite", image: STIXALL_BLACK },
];

export const SILICONE_CATEGORY = {
  slug: "silicone",
  title: "Silicone",
  description:
    "CT1 and Stixall hybrid sealants and adhesives. Cartridges, bathroom grades, fillers and guns as listed on each range.",
  heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
  collectionHeading: "View Our Range",
  collectionAspect: "square" as const,
  collections: [
    {
      id: "ct1",
      label: "CT1",
      image: CT1_CARD_IMAGE,
      href: "/silicone/ct1",
    },
    {
      id: "stixall",
      label: "Stixall",
      image: STIXALL_WHITE,
      href: "/silicone/stixall",
    },
  ],
};

export const SILICONE_COLLECTIONS: Record<string, CollectionPageData> = {
  "silicone/ct1": {
    key: "silicone/ct1",
    categorySlug: "silicone",
    slug: "ct1",
    title: "CT1",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "ct1-white",
        label: "CT1 White",
        image:
          "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
        href: "/silicone/ct1/ct1-white",
      },
      {
        id: "ct1-black",
        label: "CT1 Black",
        image: "https://www.ct1.com/wp-content/uploads/CT1-Black-1.png",
        href: "/silicone/ct1/ct1-black",
      },
      {
        id: "ct1-grey",
        label: "CT1 Grey",
        image: "https://www.ct1.com/wp-content/uploads/CT1-Grey-1.png",
        href: "/silicone/ct1/ct1-grey",
      },
      {
        id: "ct1-clear",
        label: "CT1 Clear",
        image:
          "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
        href: "/silicone/ct1/ct1-clear",
      },
      {
        id: "ct1-anthracite",
        label: "CT1 Anthracite",
        image:
          "https://www.ct1.com/wp-content/uploads/CT1-Anthracite-RAL-Updated-Aug19-1.png",
        href: "/silicone/ct1/ct1-anthracite",
      },
      {
        id: "ct1-beige",
        label: "CT1 Beige",
        image: "https://www.ct1.com/wp-content/uploads/CT1-Beige-1-1.png",
        href: "/silicone/ct1/ct1-beige",
      },
      {
        id: "ct1-brown",
        label: "CT1 Brown",
        image: "https://www.ct1.com/wp-content/uploads/CT1-Brown-1.png",
        href: "/silicone/ct1/ct1-brown",
      },
      {
        id: "ct1-oak",
        label: "CT1 Oak",
        image: "https://www.ct1.com/wp-content/uploads/CT1-Oak-1.png",
        href: "/silicone/ct1/ct1-oak",
      },
      {
        id: "ct1-silver",
        label: "CT1 Silver",
        image: "https://www.ct1.com/wp-content/uploads/CT1-Silver-1.png",
        href: "/silicone/ct1/ct1-silver",
      },
      {
        id: "ct1-green",
        label: "CT1 Green",
        image:
          "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
        href: "/silicone/ct1/ct1-green",
      },
    ],
  },
  "silicone/bt1": {
    key: "silicone/bt1",
    categorySlug: "silicone",
    slug: "bt1",
    title: "BT1",
    description:
      "BT1 is based on our revolutionary TRIBRID® Technology! We have created a unique product upon which bacteria/microbes cannot survive, making it easier to maintain a more hygienic surface which is free of solvents and isocyanates. No more mould and fungal growth! Excellent sanitaryware product for use in all public Health institutions including hospitals and clinics. Tested under MOD IOS 22196:2011, BT1 has proven to reduce bacteria by up to 99.99% and effective against a broad spectrum of microbes including MRSA, E. coli and Campylobacter. EC1 Plus Certified – Very Low Emissions. ETAG approved for bonding shower Panels without mechanical fixings. BT1 will form a unique durable compound with high elasticity. BT1 will successfully bond: Woods Metals Brickwork Concrete Fiberglass Glass Ceramics uPVC And most plastics (except PP, PE and PTFE), even in wet conditions. Call your local building merchant to find out if they are stocking our revolutionary TRIBRID® Technology. BT1 the Ultimate Bathroom Sealant & Adhesive The Healthiest Option!",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "bt1-white",
        label: "BT1 White",
        image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
        href: "/silicone/bt1/bt1-white",
      },
      {
        id: "bt1-pale-grey",
        label: "BT1 Pale Grey",
        image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
        href: "/silicone/bt1/bt1-pale-grey",
      },
      {
        id: "bt1-transparent",
        label: "BT1 Transparent",
        image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
        href: "/silicone/bt1/bt1-transparent",
      },
    ],
  },
  "silicone/bw1": {
    key: "silicone/bw1",
    categorySlug: "silicone",
    slug: "bw1",
    title: "BW1",
    description:
      "BW1 the Ultimate Tanking Solution for bathrooms, showers and wet rooms. BW1 is a game changing waterproofing solution based on TRIBRID® Technology with an advanced polymer formulation, that offers unparalleled bonding strength, flexibility and ease of use. The Ultimate Anti-Bacterial One Part Waterproofing System BW1 is the ultimate time and cost saving solution for professional trades. It’s incredible performance totally negates the need for joint tapes and fiddly corner pieces. Suitable for both commercial and domestic projects, BW1 is compatible with multiple substrates commonly used in the construction of bathrooms, showers and wet room installations including Concrete, Brick, Wood, Plasterboard, Fibre Cement Board and Foam Backer Board. Advanced polymer formulation with unparalleled bonding strength • No substrate priming required • Ready to use – no mixing or dilution • Low consumption – up to 2m per litre • VOC and solvent free • Use on multiple substrates • Incredibly easy to install",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/BW1-Ultimate-Tanking-Solution-1024x811-1-1.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "bw1",
        label: "BW1",
        image:
          "https://www.ct1.com/wp-content/uploads/BW1-Ultimate-Tanking-Solution-1024x811-1-1.png",
        href: "/silicone/bw1/bw1",
      },
    ],
  },
  "silicone/fc1": {
    key: "silicone/fc1",
    categorySlug: "silicone",
    slug: "fc1",
    title: "FC1",
    description:
      "FC1 Product Description FC1 is the ultimate versatile acrylic based premium grade filler and caulk. FC1 is designed specifically for professional users and utilises scientific advancements in elastomer technology. With its unique blend of acrylic polymers and selected fillers made to the very highest specification, FC1 bonds and seals gaps between wood, metal, brick, stone, plaster and plastics. FC1 is quick drying with an ultra smooth finish that's ideal for filling and sealing in skirtings, architraves, door frames, coving and window sills in preparation for painting and papering. FC1 successfully fills and caulks ensuring: Ultra smooth finish - no sanding required Fill up to 25mm in one application Acrylic based with maximum flexibility Contains no solvents Will not crack Superior colour stability",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/FC1-1024x1024-1-1-1.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "fc1",
        label: "FC1",
        image: "https://www.ct1.com/wp-content/uploads/FC1-1024x1024-1-1-1.png",
        href: "/silicone/fc1/fc1",
      },
    ],
  },
  "silicone/fc1-patch-and-fill": {
    key: "silicone/fc1-patch-and-fill",
    categorySlug: "silicone",
    slug: "fc1-patch-and-fill",
    title: "FC1 Patch & Fill Compound",
    description:
      "FC1 Ultimate Patch & Fill Compound with revolutionary high strength microspheres is a unique, high performance, ultra-lightweight and multipurpose repair solution for professional decorators. Ready mixed and easy to use internally or externally for filling and repairing large gaps, deep depressions up to 75mm, surface scratches or joints in preparation for painting and papering.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/patch-fill.jpeg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "fc1-patch-and-fill",
        label: "FC1 Patch & Fill Compound",
        image: "https://www.ct1.com/wp-content/uploads/patch-fill.jpeg",
        href: "/silicone/fc1-patch-and-fill/fc1-patch-and-fill",
      },
    ],
  },
  "silicone/miracle-seal": {
    key: "silicone/miracle-seal",
    categorySlug: "silicone",
    slug: "miracle-seal",
    title: "Miracle Seal",
    description:
      "Permanently seals small leaks anywhere in the cooling system. Seals leaks in radiators, hose pipes and water pumps. Can even SEAL HAIRLINE CRACKS IN ENGINE BLOCK. Guaranteed; Will NOT clog the system due to a revolutionary new formula. Is compatible with all types of water based coolants. Is not affected by Anti-Freeze and will continue to seal the leak. Miracle Seal: Can be used to prevent leaks Contains lubrication additives Contains anti-corrosion additives",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Miracle-Seal-Thumb-October-2019-222x237-1-1.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "miracle-seal",
        label: "Miracle Seal",
        image:
          "https://www.ct1.com/wp-content/uploads/Miracle-Seal-Thumb-October-2019-222x237-1-1.png",
        href: "/silicone/miracle-seal/miracle-seal",
      },
    ],
  },
  "silicone/multisolve": {
    key: "silicone/multisolve",
    categorySlug: "silicone",
    slug: "multisolve",
    title: "MultiSolve 500ml",
    description:
      "MultiSolve is a complete new multi-purpose solvent; for the safe removal of adhesives and sealants. Application: Just spray C-TEC MULTISOLVE onto the desired surface then within seconds it gets to work leaving the surface ready for treatment. Available in handy 200ml and 500ml aerosol. Ideal as preliminary treatment for paints or adhesives. The safest and cheapest solution for your paintwork. Removes adhesives, sealants, oil, grease, silicon, wax, tar, paraffin, printing ink etc. Leaves no oil film. Fast, thorough and safe degreasing and cleaning. Can be used on painted surfaces, vinyl, glass,rubber and plastics. Fast drying. Very economical. Recommended to be used with all C-TEC adhesives and sealants. MultiSolve is ideal for all trades such as: Plumbers Shopfitters Tilers Upholsterers Joiners Builders Signmakers Stonemasons Electricians And many more… MultiSolve removes Wax Paraffin Printing ink And much much more… Adhesives Sealants Oil Grease Silicone",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Multisolve-500ml-Made-in-Britain-Thumbnail-image-420x315-Copy-1-1024x768.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "multisolve",
        label: "MultiSolve 500ml",
        image:
          "https://www.ct1.com/wp-content/uploads/Multisolve-500ml-Made-in-Britain-Thumbnail-image-420x315-Copy-1-1024x768.png",
        href: "/silicone/multisolve/multisolve",
      },
    ],
  },
  "silicone/peel-tec": {
    key: "silicone/peel-tec",
    categorySlug: "silicone",
    slug: "peel-tec",
    title: "Peel Tec 500ml",
    description:
      "Say goodbye to tedious and unsafe methods of removing paint such as heat, harsh solvents and mechanical methods. Peel Tec lets paint simply peel away.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Peel-Tec-Made-in-Britain-Thumbnail-image-420x315-Copy-1024x768.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "peel-tec",
        label: "Peel Tec 500ml",
        image:
          "https://www.ct1.com/wp-content/uploads/Peel-Tec-Made-in-Britain-Thumbnail-image-420x315-Copy-1024x768.png",
        href: "/silicone/peel-tec/peel-tec",
      },
    ],
  },
  "silicone/power-grab-n-bond": {
    key: "silicone/power-grab-n-bond",
    categorySlug: "silicone",
    slug: "power-grab-n-bond",
    title: "Power Grab n Bond",
    description:
      "Power Grab n Bond – Phenomenal Grab – Eliminate Fixings – Reduce labour by 50% Power Grab n Bond is a revolutionary product in the field of heavy-duty versatile bonding. Its formulation is based on our new CT1 product using our unique TRIBRID® polymer Technology. The density of Power Grab n Bond is far greater allowing phenomenal results in initial grab. Coupled with the rapid curing will in most applications reduce labour time by at least 50%. With Power Grab n Bond there is absolutely no need for any additional fixings as it was initially developed for facade bonding. In addition, Power Grab n Bond has a capacity to adhere to endless materials such as stone, granite, ytong, marble, concrete, wood, MDF, fibreglass, all metals (including alloys), glass, polystyrene, mirrors and most plastics (except PP, PE and PTFE). Power Grab n Bond’s ability to bond combined materials such as wood to concrete or stainless steel to stone is incredible. As already outlined Power Grab n Bond was initially developed for façade applications, conventional methods relied on two component epoxy mix to adhere the marble or granite slab to the block wall. Depending on the weight of the slab each one would",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Adhesivo-fuerte-Adhesivo-Power-Grab-n-Bond.jpg",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "power-grab-n-bond",
        label: "Power Grab n Bond",
        image:
          "https://www.ct1.com/wp-content/uploads/Adhesivo-fuerte-Adhesivo-Power-Grab-n-Bond.jpg",
        href: "/silicone/power-grab-n-bond/power-grab-n-bond",
      },
    ],
  },
  "silicone/super-fast-plus-50ml": {
    key: "silicone/super-fast-plus-50ml",
    categorySlug: "silicone",
    slug: "super-fast-plus-50ml",
    title: "Superfast Plus 50ml",
    description:
      "A new concept in superglues, Superfast is almost a pure cyanacrylate with an amazing ability to bond and in many cases fuse base materials together. SUPERFAST PLUS is an adhesive which bonds in seconds and has a special formula based on Cyanacrylate. SUPERFAST PLUS is a one component adhesive which does not contain solvent and consists mainly of Athyl Cyanacrylate Monomer. SUPERFAST PLUS is temperature resistant in the range from 30°C up to 100°C. SUPERFAST PLUS is resistant to solvents, oils, benzene, temperature fluctuations and atmospheric conditions.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "super-fast-plus-50ml",
        label: "Superfast Plus 50ml",
        image:
          "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
        href: "/silicone/super-fast-plus-50ml/super-fast-plus-50ml",
      },
    ],
  },
  "silicone/superfast-plus-20ml": {
    key: "silicone/superfast-plus-20ml",
    categorySlug: "silicone",
    slug: "superfast-plus-20ml",
    title: "Superfast Plus 20ml",
    description:
      "A new concept in superglues, Superfast is almost a pure cyanacrylate with an amazing ability to bond and in many cases fuse base materials together. SUPERFAST PLUS is an adhesive which bonds in seconds and has a special formula based on Cyanacrylate. SUPERFAST PLUS is a one component adhesive which does not contain solvent and consists mainly of Athyl Cyanacrylate Monomer. SUPERFAST PLUS is temperature resistant in the range from 30°C up to 100°C. SUPERFAST PLUS is resistant to solvents, oils, benzene, temperature fluctuations and atmospheric conditions.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "superfast-plus-20ml",
        label: "Superfast Plus 20ml",
        image:
          "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
        href: "/silicone/superfast-plus-20ml/superfast-plus-20ml",
      },
    ],
  },
  "silicone/super-fast-plus-activator": {
    key: "silicone/super-fast-plus-activator",
    categorySlug: "silicone",
    slug: "super-fast-plus-activator",
    title: "Superfast Plus Activator",
    description:
      "Superfast Activator is developed to seal porous materials in order to create incredible bonding with our Superfast Plus Cyanacrylate Adhesive. Superfast Activator is specifically developed to seal porous materials such as wood, leather, stone etc in order to create incredible bonding with our Superfast Plus cyanacrylate adhesive.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/NEW-Superfast-Plus-Activator-DMPT-Free-1024x856.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "super-fast-plus-activator",
        label: "Superfast Plus Activator",
        image:
          "https://www.ct1.com/wp-content/uploads/NEW-Superfast-Plus-Activator-DMPT-Free-1024x856.png",
        href: "/silicone/super-fast-plus-activator/super-fast-plus-activator",
      },
    ],
  },
  "silicone/ct1-caulking-gun": {
    key: "silicone/ct1-caulking-gun",
    categorySlug: "silicone",
    slug: "ct1-caulking-gun",
    title: "CT1 Caulking Gun",
    description:
      "CT1 Professional Sealant & Caulking Gun Designed for professionals who demand power, accuracy, and long-lasting reliability, the CT1 Professional Sealant & Caulking Gun is the ultimate tool for applying sealants and adhesives with ease. Crafted from premium-grade Sheffield steel, the gun’s heavy-duty frame delivers unmatched durability and corrosion resistance, making it a trusted companion on both indoor and outdoor projects. The 360° rotating carriage ensures you can work seamlessly around edges and corners, while the ergonomic soft-grip handles keep you comfortable even during extended use. With a 3.5kN force output and an optimal 18:1 thrust ratio, this applicator strikes the perfect balance between dispensing strength and smooth control. It’s engineered for thicker products like Power Grab ‘n’ Bond, yet precise enough to deliver flawless, even beads when using FC1 All-in-One Filler & Caulk. Unlike standard caulking guns that bend, wear out, or struggle with high-viscosity products, the CT1 Caulking Gun is built to outperform, ensuring consistent results, reduced product waste, and exceptional service life. Key Features & Benefits • Engineered Power & Control – 18:1 thrust rati",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Image-of-CT1-Gun-2048x1640.png",
    itemsHeading: "View Our Range",
    items: [
      {
        id: "ct1-caulking-gun",
        label: "CT1 Caulking Gun",
        image:
          "https://www.ct1.com/wp-content/uploads/Image-of-CT1-Gun-2048x1640.png",
        href: "/silicone/ct1-caulking-gun/ct1-caulking-gun",
      },
    ],
  },
  "silicone/stixall": {
    key: "silicone/stixall",
    categorySlug: "silicone",
    slug: "stixall",
    title: "Stixall",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_WHITE,
    itemsHeading: "View Our Range",
    items: [
      {
        id: "stixall-white",
        label: "Stixall White 290ml",
        image: STIXALL_WHITE,
        href: "/silicone/stixall/stixall-white",
      },
      {
        id: "stixall-black",
        label: "Stixall Black 290ml",
        image: STIXALL_BLACK,
        href: "/silicone/stixall/stixall-black",
      },
      {
        id: "stixall-crystal-clear",
        label: "Stixall Crystal Clear 290ml",
        image: STIXALL_CLEAR,
        href: "/silicone/stixall/stixall-crystal-clear",
      },
      {
        id: "stixall-grey",
        label: "Stixall Grey 290ml",
        image: STIXALL_WHITE,
        href: "/silicone/stixall/stixall-grey",
      },
      {
        id: "stixall-brown",
        label: "Stixall Brown 290ml",
        image: STIXALL_BLACK,
        href: "/silicone/stixall/stixall-brown",
      },
      {
        id: "stixall-anthracite",
        label: "Stixall Anthracite 290ml",
        image: STIXALL_BLACK,
        href: "/silicone/stixall/stixall-anthracite",
      },
    ],
  },
};

const ct1Range = SILICONE_COLLECTIONS["silicone/ct1"];
if (ct1Range) {
  const extra = Object.values(SILICONE_COLLECTIONS)
    .filter((page) => page.slug !== "ct1" && page.slug !== "stixall")
    .map((page) => ({
      id: page.slug,
      label: page.title,
      image: page.image,
      href: `/silicone/${page.slug}`,
      isSubcategory: true,
    }));
  const seen = new Set(ct1Range.items.map((item) => item.id));
  ct1Range.items = [
    ...ct1Range.items,
    ...extra.filter((item) => !seen.has(item.id)),
  ];
}

export const SILICONE_PRODUCTS: Record<string, ProductPageData> = {
  "silicone/ct1/ct1-white": {
    key: "silicone/ct1/ct1-white",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-white",
    title: "CT1 White",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    images: [
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    ],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "White" },
      { label: "RAL", value: "RAL 9003" },
    ],
  },
  "silicone/ct1/ct1-black": {
    key: "silicone/ct1/ct1-black",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-black",
    title: "CT1 Black",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/CT1-Black-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/CT1-Black-1.png"],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Black" },
      { label: "RAL", value: "RAL 9004" },
    ],
  },
  "silicone/ct1/ct1-grey": {
    key: "silicone/ct1/ct1-grey",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-grey",
    title: "CT1 Grey",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/CT1-Grey-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/CT1-Grey-1.png"],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Grey" },
      { label: "RAL", value: "RAL 7040" },
    ],
  },
  "silicone/ct1/ct1-clear": {
    key: "silicone/ct1/ct1-clear",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-clear",
    title: "CT1 Clear",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    images: [
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    ],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Clear" },
    ],
  },
  "silicone/ct1/ct1-anthracite": {
    key: "silicone/ct1/ct1-anthracite",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-anthracite",
    title: "CT1 Anthracite",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/CT1-Anthracite-RAL-Updated-Aug19-1.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/CT1-Anthracite-RAL-Updated-Aug19-1.png",
    ],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Anthracite" },
      { label: "RAL", value: "RAL 7016" },
    ],
  },
  "silicone/ct1/ct1-beige": {
    key: "silicone/ct1/ct1-beige",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-beige",
    title: "CT1 Beige",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/CT1-Beige-1-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/CT1-Beige-1-1.png"],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Beige" },
      { label: "RAL", value: "RAL 1013" },
    ],
  },
  "silicone/ct1/ct1-brown": {
    key: "silicone/ct1/ct1-brown",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-brown",
    title: "CT1 Brown",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/CT1-Brown-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/CT1-Brown-1.png"],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Brown" },
      { label: "RAL", value: "RAL 8011" },
    ],
  },
  "silicone/ct1/ct1-oak": {
    key: "silicone/ct1/ct1-oak",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-oak",
    title: "CT1 Oak",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/CT1-Oak-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/CT1-Oak-1.png"],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Oak" },
      { label: "RAL", value: "RAL 8001" },
    ],
  },
  "silicone/ct1/ct1-silver": {
    key: "silicone/ct1/ct1-silver",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-silver",
    title: "CT1 Silver",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. Environmentally compliant. Approved by NAAF – Norwegian Asthma and Allergy Association. EC1 Plus Certified A+ Indoor Air Comfort GOLD®. ISEGA Certified – Conforms to Food Preparation Standards. Excellent resistance to chemicals. Excellent resistance to fungal and bacteria growth. UV resistant. Excellent resistance to vibration. Works in wet or dry conditions, even under water. Perfect for marine and boating maintenance, accident and emergency repairs. Can be used in all salt-water environments.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/CT1-Silver-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/CT1-Silver-1.png"],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Silver" },
      { label: "RAL", value: "RAL 9022" },
    ],
  },
  "silicone/ct1/ct1-green": {
    key: "silicone/ct1/ct1-green",
    categorySlug: "silicone",
    collectionSlug: "ct1",
    slug: "ct1-green",
    title: "CT1 Green",
    description:
      "CT1 with revolutionary TRIBRID® Technology! CT1 is the only product in the market with TRIBRID® Technology, making it 360% stronger than a traditional Hybrid Polymer. With TRIBRID® Technology, it is scientifically proven to have excellent colour retention – white stays white and clear stays clear. CT1 will successfully bond: All metals (including lead) Glass Mirrors All woods MDF Polystyrene Fibreglass Tiles Concrete Most stones (without staining) Most synthetic materials Plastics (excluding PP, PE and PTFE) Unique adhesion on virtually any material in most applications without the need for additional fixings. CT1 is the ultimate solution for sealing and bonding. Excellent colour retention. <p&gt",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    images: [
      "https://www.ct1.com/wp-content/uploads/CT1-Large-TRIBRID-MIB-e1618395842929-2.jpg",
    ],
    colours: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "clear", label: "Clear" },
      { value: "anthracite", label: "Anthracite" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "oak", label: "Oak" },
      { value: "silver", label: "Silver" },
      { value: "green", label: "Green" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
      "Excellent colour retention – white stays white and clear stays clear",
      "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
      "Works in wet or dry conditions, even underwater",
      "Approved by NAAF and EC1 Plus certified",
      "ISEGA certified for food preparation standards",
      "UV resistant with excellent vibration resistance",
    ],
    specs: [
      { label: "Type", value: "Sealant & adhesive" },
      { label: "Colour", value: "Green" },
    ],
  },
  "silicone/bt1/bt1-white": {
    key: "silicone/bt1/bt1-white",
    categorySlug: "silicone",
    collectionSlug: "bt1",
    slug: "bt1-white",
    title: "BT1 White",
    description:
      "BT1 is based on our revolutionary TRIBRID® Technology! We have created a unique product upon which bacteria/microbes cannot survive, making it easier to maintain a more hygienic surface which is free of solvents and isocyanates. No more mould and fungal growth! Excellent sanitaryware product for use in all public Health institutions including hospitals and clinics. Tested under MOD IOS 22196:2011, BT1 has proven to reduce bacteria by up to 99.99% and effective against a broad spectrum of microbes including MRSA, E. coli and Campylobacter. EC1 Plus Certified – Very Low Emissions. ETAG approved for bonding shower Panels without mechanical fixings. BT1 will form a unique durable compound with high elasticity. BT1 will successfully bond: Woods Metals Brickwork Concrete Fiberglass Glass Ceramics uPVC And most plastics (except PP, PE and PTFE), even in wet conditions. Call your local building merchant to find out if they are stocking our revolutionary TRIBRID® Technology. BT1 the Ultimate Bathroom Sealant & Adhesive The Healthiest Option!",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
    images: ["https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg"],
    colours: [
      { value: "white", label: "White" },
      { value: "pale-grey", label: "Pale Grey" },
      { value: "transparent", label: "Transparent" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology bathroom sealant and adhesive",
      "Bacteria and microbes cannot survive on the surface",
      "Reduces bacteria by up to 99.99%",
      "EC1 Plus certified – very low emissions",
      "ETAG approved for bonding shower panels without mechanical fixings",
    ],
    specs: [
      { label: "Type", value: "Bathroom sealant & adhesive" },
      { label: "Colour", value: "White" },
    ],
  },
  "silicone/bt1/bt1-pale-grey": {
    key: "silicone/bt1/bt1-pale-grey",
    categorySlug: "silicone",
    collectionSlug: "bt1",
    slug: "bt1-pale-grey",
    title: "BT1 Pale Grey",
    description:
      "BT1 Pale Grey – The Ultimate Bathroom Sealant & Adhesive BT1 Pale Grey is created using our breakthrough TRIBRID® Technology, delivering a high-performance sealant and adhesive designed to actively resist bacteria and microbes. This ensures a cleaner, safer, and more hygienic environment – completely free from solvents and isocyanates. Long-Lasting Protection Against Mould Specially formulated for bathrooms, kitchens, and sanitary applications, BT1 Pale Grey prevents mould and fungal growth, making it the go-to choice for hospitals, clinics, and domestic bathrooms. Independently Proven Tested to MOD IOS 22196:2011, BT1 Pale Grey reduces bacteria by up to 99.99% and is effective against a wide spectrum of harmful microbes including MRSA, E. coli, and Campylobacter. Professional Standards, Certified Quality EC1 Plus Certified – ultra-low emissions for a healthier indoor climate. ETAG Approved – suitable for bonding shower panels without screws or fixings. High Elasticity – forms a strong yet flexible seal to absorb movement. Bonds Reliably With: • Wood • Metal • Brickwork • Concrete • Fibreglass • Glass • Ceramics • uPVC • Most plastics (except PP, PE, PTFE), even in damp or wet area",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
    images: ["https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg"],
    colours: [
      { value: "white", label: "White" },
      { value: "pale-grey", label: "Pale Grey" },
      { value: "transparent", label: "Transparent" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology bathroom sealant and adhesive",
      "Bacteria and microbes cannot survive on the surface",
      "Reduces bacteria by up to 99.99%",
      "EC1 Plus certified – very low emissions",
      "ETAG approved for bonding shower panels without mechanical fixings",
    ],
    specs: [
      { label: "Type", value: "Bathroom sealant & adhesive" },
      { label: "Colour", value: "Pale Grey" },
    ],
  },
  "silicone/bt1/bt1-transparent": {
    key: "silicone/bt1/bt1-transparent",
    categorySlug: "silicone",
    collectionSlug: "bt1",
    slug: "bt1-transparent",
    title: "BT1 Transparent",
    description:
      "BT1 Transparent - The Ultimate Bathroom Sealant & Adhesive BT1 Transparent is powered by our advanced TRIBRID® Technology, delivering a next-generation sealant and adhesive that actively resists bacteria and microbes. This ensures cleaner, more hygienic surfaces while remaining completely free from solvents and isocyanates. Say goodbye to mould and mildew! Specially formulated for bathrooms, kitchens, and sanitaryware, BT1 Transparent provides long-lasting protection against fungal growth, making it the ideal solution for healthcare settings, public washrooms, and residential projects. Clinically Tested for Hygiene Excellence Independently tested to MOD IOS 22196:2011, BT1 Transparent reduces bacteria by up to 99.99% and is proven effective against common microbes, including MRSA, E. coli, and Campylobacter. Certified Performance You Can Trust EC1 Plus Certified - ultra-low emissions for a healthier environment. ETAG Approved - suitable for bonding shower panels without mechanical fixings. Durable Elasticity - forms a strong, flexible bond that adapts to movement. Bonds With: • Wood • Metal • Brickwork • Concrete • Fibreglass • Glass • Ceramics • uPVC • Most plastics (excluding PP,",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg",
    images: ["https://www.ct1.com/wp-content/uploads/BT1-Large-Nov19-1-1.jpg"],
    colours: [
      { value: "white", label: "White" },
      { value: "pale-grey", label: "Pale Grey" },
      { value: "transparent", label: "Transparent" },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology bathroom sealant and adhesive",
      "Bacteria and microbes cannot survive on the surface",
      "Reduces bacteria by up to 99.99%",
      "EC1 Plus certified – very low emissions",
      "ETAG approved for bonding shower panels without mechanical fixings",
    ],
    specs: [
      { label: "Type", value: "Bathroom sealant & adhesive" },
      { label: "Colour", value: "Transparent" },
    ],
  },
  "silicone/bw1/bw1": {
    key: "silicone/bw1/bw1",
    categorySlug: "silicone",
    collectionSlug: "bw1",
    slug: "bw1",
    title: "BW1",
    description:
      "BW1 the Ultimate Tanking Solution for bathrooms, showers and wet rooms. BW1 is a game changing waterproofing solution based on TRIBRID® Technology with an advanced polymer formulation, that offers unparalleled bonding strength, flexibility and ease of use. The Ultimate Anti-Bacterial One Part Waterproofing System BW1 is the ultimate time and cost saving solution for professional trades. It’s incredible performance totally negates the need for joint tapes and fiddly corner pieces. Suitable for both commercial and domestic projects, BW1 is compatible with multiple substrates commonly used in the construction of bathrooms, showers and wet room installations including Concrete, Brick, Wood, Plasterboard, Fibre Cement Board and Foam Backer Board. Advanced polymer formulation with unparalleled bonding strength • No substrate priming required • Ready to use – no mixing or dilution • Low consumption – up to 2m per litre • VOC and solvent free • Use on multiple substrates • Incredibly easy to install",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/BW1-Ultimate-Tanking-Solution-1024x811-1-1.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/BW1-Ultimate-Tanking-Solution-1024x811-1-1.png",
    ],
    colours: [],
    sizes: [],
    features: [
      "No substrate priming required",
      "Ready to use – no mixing or dilution",
      "Low consumption – up to 2m per litre",
      "Use on multiple substrates",
      "Incredibly easy to install",
    ],
    specs: [{ label: "Type", value: "Waterproof tanking" }],
  },
  "silicone/fc1/fc1": {
    key: "silicone/fc1/fc1",
    categorySlug: "silicone",
    collectionSlug: "fc1",
    slug: "fc1",
    title: "FC1",
    description:
      "FC1 Product Description FC1 is the ultimate versatile acrylic based premium grade filler and caulk. FC1 is designed specifically for professional users and utilises scientific advancements in elastomer technology. With its unique blend of acrylic polymers and selected fillers made to the very highest specification, FC1 bonds and seals gaps between wood, metal, brick, stone, plaster and plastics. FC1 is quick drying with an ultra smooth finish that's ideal for filling and sealing in skirtings, architraves, door frames, coving and window sills in preparation for painting and papering. FC1 successfully fills and caulks ensuring: Ultra smooth finish - no sanding required Fill up to 25mm in one application Acrylic based with maximum flexibility Contains no solvents Will not crack Superior colour stability",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/FC1-1024x1024-1-1-1.png",
    images: ["https://www.ct1.com/wp-content/uploads/FC1-1024x1024-1-1-1.png"],
    colours: [],
    sizes: [],
    features: [
      "Ultra smooth finish - no sanding required",
      "Fill up to 25mm in one application",
      "Acrylic based with maximum flexibility",
      "Contains no solvents",
      "Will not crack",
      "Superior colour stability",
    ],
    specs: [{ label: "Type", value: "Filler & caulk" }],
  },
  "silicone/fc1-patch-and-fill/fc1-patch-and-fill": {
    key: "silicone/fc1-patch-and-fill/fc1-patch-and-fill",
    categorySlug: "silicone",
    collectionSlug: "fc1-patch-and-fill",
    slug: "fc1-patch-and-fill",
    title: "FC1 Patch & Fill Compound",
    description:
      "FC1 Ultimate Patch & Fill Compound with revolutionary high strength microspheres is a unique, high performance, ultra-lightweight and multipurpose repair solution for professional decorators. Ready mixed and easy to use internally or externally for filling and repairing large gaps, deep depressions up to 75mm, surface scratches or joints in preparation for painting and papering.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image: "https://www.ct1.com/wp-content/uploads/patch-fill.jpeg",
    images: ["https://www.ct1.com/wp-content/uploads/patch-fill.jpeg"],
    colours: [],
    sizes: [],
    features: [
      "Ultra-lightweight multipurpose repair compound",
      "Fills deep depressions up to 75mm",
      "Ready mixed for internal and external use",
      "No slumping, sagging or shrinking",
    ],
    specs: [{ label: "Type", value: "Patch & fill compound" }],
  },
  "silicone/miracle-seal/miracle-seal": {
    key: "silicone/miracle-seal/miracle-seal",
    categorySlug: "silicone",
    collectionSlug: "miracle-seal",
    slug: "miracle-seal",
    title: "Miracle Seal",
    description:
      "Permanently seals small leaks anywhere in the cooling system. Seals leaks in radiators, hose pipes and water pumps. Can even SEAL HAIRLINE CRACKS IN ENGINE BLOCK. Guaranteed; Will NOT clog the system due to a revolutionary new formula. Is compatible with all types of water based coolants. Is not affected by Anti-Freeze and will continue to seal the leak. Miracle Seal: Can be used to prevent leaks Contains lubrication additives Contains anti-corrosion additives",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Miracle-Seal-Thumb-October-2019-222x237-1-1.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/Miracle-Seal-Thumb-October-2019-222x237-1-1.png",
    ],
    colours: [],
    sizes: [],
    features: [
      "Permanently seals small cooling system leaks",
      "Seals radiators, hose pipes and water pumps",
      "Can seal hairline cracks in an engine block",
      "Will not clog the system",
    ],
    specs: [{ label: "Type", value: "Cooling system sealer" }],
  },
  "silicone/multisolve/multisolve": {
    key: "silicone/multisolve/multisolve",
    categorySlug: "silicone",
    collectionSlug: "multisolve",
    slug: "multisolve",
    title: "MultiSolve 500ml",
    description:
      "MultiSolve is a complete new multi-purpose solvent; for the safe removal of adhesives and sealants. Application: Just spray C-TEC MULTISOLVE onto the desired surface then within seconds it gets to work leaving the surface ready for treatment. Available in handy 200ml and 500ml aerosol. Ideal as preliminary treatment for paints or adhesives. The safest and cheapest solution for your paintwork. Removes adhesives, sealants, oil, grease, silicon, wax, tar, paraffin, printing ink etc. Leaves no oil film. Fast, thorough and safe degreasing and cleaning. Can be used on painted surfaces, vinyl, glass,rubber and plastics. Fast drying. Very economical. Recommended to be used with all C-TEC adhesives and sealants. MultiSolve is ideal for all trades such as: Plumbers Shopfitters Tilers Upholsterers Joiners Builders Signmakers Stonemasons Electricians And many more… MultiSolve removes Wax Paraffin Printing ink And much much more… Adhesives Sealants Oil Grease Silicone",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Multisolve-500ml-Made-in-Britain-Thumbnail-image-420x315-Copy-1-1024x768.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/Multisolve-500ml-Made-in-Britain-Thumbnail-image-420x315-Copy-1-1024x768.png",
    ],
    colours: [],
    sizes: [{ value: "500ml", label: "500ml" }],
    features: [
      "Removes adhesives, sealants, oil, grease and silicone",
      "Removes wax, tar, paraffin and printing ink",
      "Leaves no oil film",
      "Can be used on painted surfaces, vinyl, glass, rubber and plastics",
    ],
    specs: [{ label: "Type", value: "Solvent cleaner" }],
  },
  "silicone/peel-tec/peel-tec": {
    key: "silicone/peel-tec/peel-tec",
    categorySlug: "silicone",
    collectionSlug: "peel-tec",
    slug: "peel-tec",
    title: "Peel Tec 500ml",
    description:
      "Say goodbye to tedious and unsafe methods of removing paint such as heat, harsh solvents and mechanical methods. Peel Tec lets paint simply peel away.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Peel-Tec-Made-in-Britain-Thumbnail-image-420x315-Copy-1024x768.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/Peel-Tec-Made-in-Britain-Thumbnail-image-420x315-Copy-1024x768.png",
    ],
    colours: [],
    sizes: [{ value: "500ml", label: "500ml" }],
    features: [
      "Paint simply peels away",
      "Avoids heat, harsh solvents and mechanical stripping",
      "500ml pack",
    ],
    specs: [{ label: "Type", value: "Paint remover" }],
  },
  "silicone/power-grab-n-bond/power-grab-n-bond": {
    key: "silicone/power-grab-n-bond/power-grab-n-bond",
    categorySlug: "silicone",
    collectionSlug: "power-grab-n-bond",
    slug: "power-grab-n-bond",
    title: "Power Grab n Bond",
    description:
      "Power Grab n Bond – Phenomenal Grab – Eliminate Fixings – Reduce labour by 50% Power Grab n Bond is a revolutionary product in the field of heavy-duty versatile bonding. Its formulation is based on our new CT1 product using our unique TRIBRID® polymer Technology. The density of Power Grab n Bond is far greater allowing phenomenal results in initial grab. Coupled with the rapid curing will in most applications reduce labour time by at least 50%. With Power Grab n Bond there is absolutely no need for any additional fixings as it was initially developed for facade bonding. In addition, Power Grab n Bond has a capacity to adhere to endless materials such as stone, granite, ytong, marble, concrete, wood, MDF, fibreglass, all metals (including alloys), glass, polystyrene, mirrors and most plastics (except PP, PE and PTFE). Power Grab n Bond’s ability to bond combined materials such as wood to concrete or stainless steel to stone is incredible. As already outlined Power Grab n Bond was initially developed for façade applications, conventional methods relied on two component epoxy mix to adhere the marble or granite slab to the block wall. Depending on the weight of the slab each one would",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Adhesivo-fuerte-Adhesivo-Power-Grab-n-Bond.jpg",
    images: [
      "https://www.ct1.com/wp-content/uploads/Adhesivo-fuerte-Adhesivo-Power-Grab-n-Bond.jpg",
    ],
    colours: [],
    sizes: [],
    features: [
      "Phenomenal grab – eliminate fixings",
      "Can reduce labour by 50%",
      "TRIBRID polymer technology",
      "Developed for facade bonding",
    ],
    specs: [{ label: "Type", value: "Construction adhesive" }],
  },
  "silicone/super-fast-plus-50ml/super-fast-plus-50ml": {
    key: "silicone/super-fast-plus-50ml/super-fast-plus-50ml",
    categorySlug: "silicone",
    collectionSlug: "super-fast-plus-50ml",
    slug: "super-fast-plus-50ml",
    title: "Superfast Plus 50ml",
    description:
      "A new concept in superglues, Superfast is almost a pure cyanacrylate with an amazing ability to bond and in many cases fuse base materials together. SUPERFAST PLUS is an adhesive which bonds in seconds and has a special formula based on Cyanacrylate. SUPERFAST PLUS is a one component adhesive which does not contain solvent and consists mainly of Athyl Cyanacrylate Monomer. SUPERFAST PLUS is temperature resistant in the range from 30°C up to 100°C. SUPERFAST PLUS is resistant to solvents, oils, benzene, temperature fluctuations and atmospheric conditions.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
    ],
    colours: [],
    sizes: [{ value: "50ml", label: "50ml" }],
    features: [
      "Almost pure cyanoacrylate adhesive",
      "Bonds in seconds",
      "Solvent free one-component adhesive",
      "Temperature resistant from 30°C up to 100°C",
    ],
    specs: [{ label: "Type", value: "Cyanoacrylate adhesive" }],
  },
  "silicone/superfast-plus-20ml/superfast-plus-20ml": {
    key: "silicone/superfast-plus-20ml/superfast-plus-20ml",
    categorySlug: "silicone",
    collectionSlug: "superfast-plus-20ml",
    slug: "superfast-plus-20ml",
    title: "Superfast Plus 20ml",
    description:
      "A new concept in superglues, Superfast is almost a pure cyanacrylate with an amazing ability to bond and in many cases fuse base materials together. SUPERFAST PLUS is an adhesive which bonds in seconds and has a special formula based on Cyanacrylate. SUPERFAST PLUS is a one component adhesive which does not contain solvent and consists mainly of Athyl Cyanacrylate Monomer. SUPERFAST PLUS is temperature resistant in the range from 30°C up to 100°C. SUPERFAST PLUS is resistant to solvents, oils, benzene, temperature fluctuations and atmospheric conditions.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/Superfast-50ml-Updated-222x237-1-1.png",
    ],
    colours: [],
    sizes: [{ value: "20ml", label: "20ml" }],
    features: [
      "Almost pure cyanoacrylate adhesive",
      "Bonds in seconds",
      "Professional 20ml pack",
    ],
    specs: [{ label: "Type", value: "Cyanoacrylate adhesive" }],
  },
  "silicone/super-fast-plus-activator/super-fast-plus-activator": {
    key: "silicone/super-fast-plus-activator/super-fast-plus-activator",
    categorySlug: "silicone",
    collectionSlug: "super-fast-plus-activator",
    slug: "super-fast-plus-activator",
    title: "Superfast Plus Activator",
    description:
      "Superfast Activator is developed to seal porous materials in order to create incredible bonding with our Superfast Plus Cyanacrylate Adhesive. Superfast Activator is specifically developed to seal porous materials such as wood, leather, stone etc in order to create incredible bonding with our Superfast Plus cyanacrylate adhesive.",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/NEW-Superfast-Plus-Activator-DMPT-Free-1024x856.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/NEW-Superfast-Plus-Activator-DMPT-Free-1024x856.png",
    ],
    colours: [],
    sizes: [],
    features: [
      "Seals porous materials before bonding",
      "Designed for use with Superfast Plus adhesive",
      "Improves bonding on wood, leather and stone",
    ],
    specs: [{ label: "Type", value: "Adhesive activator" }],
  },
  "silicone/ct1-caulking-gun/ct1-caulking-gun": {
    key: "silicone/ct1-caulking-gun/ct1-caulking-gun",
    categorySlug: "silicone",
    collectionSlug: "ct1-caulking-gun",
    slug: "ct1-caulking-gun",
    title: "CT1 Caulking Gun",
    description:
      "CT1 Professional Sealant & Caulking Gun Designed for professionals who demand power, accuracy, and long-lasting reliability, the CT1 Professional Sealant & Caulking Gun is the ultimate tool for applying sealants and adhesives with ease. Crafted from premium-grade Sheffield steel, the gun’s heavy-duty frame delivers unmatched durability and corrosion resistance, making it a trusted companion on both indoor and outdoor projects. The 360° rotating carriage ensures you can work seamlessly around edges and corners, while the ergonomic soft-grip handles keep you comfortable even during extended use. With a 3.5kN force output and an optimal 18:1 thrust ratio, this applicator strikes the perfect balance between dispensing strength and smooth control. It’s engineered for thicker products like Power Grab ‘n’ Bond, yet precise enough to deliver flawless, even beads when using FC1 All-in-One Filler & Caulk. Unlike standard caulking guns that bend, wear out, or struggle with high-viscosity products, the CT1 Caulking Gun is built to outperform, ensuring consistent results, reduced product waste, and exceptional service life. Key Features & Benefits • Engineered Power & Control – 18:1 thrust rati",
    heroImage: "https://www.ct1.com/wp-content/uploads/banner-img-2.jpg",
    image:
      "https://www.ct1.com/wp-content/uploads/Image-of-CT1-Gun-2048x1640.png",
    images: [
      "https://www.ct1.com/wp-content/uploads/Image-of-CT1-Gun-2048x1640.png",
    ],
    colours: [],
    sizes: [],
    features: [
      "Engineered Power & Control – 18:1 thrust ratio delivering up to 3.5kN force for smooth application.",
      "Durable Construction – Manufactured from reinforced British steel for superior strength and longevity.",
      "Comfort in Use – Ergonomic rubber grips minimise strain during prolonged work.",
      "Rotating Frame – 360° rotation for improved manoeuvrability in awkward spaces.",
      "Built for Versatility – Accepts 290ml, 310ml, and 400ml cartridges.",
      "Ideal for High-Viscosity Products – Handles thick adhesives and sealants with ease.",
      "Professional Finish – Precision trigger mechanism ensures clean, consistent beads.",
      "Corrosion Resistant – Withstands outdoor and moisture-prone environments.",
    ],
    specs: [{ label: "Type", value: "Sealant gun" }],
  },
  "silicone/stixall/stixall-white": {
    key: "silicone/stixall/stixall-white",
    categorySlug: "silicone",
    collectionSlug: "stixall",
    slug: "stixall-white",
    title: "Stixall White 290ml",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_WHITE,
    images: [STIXALL_WHITE, STIXALL_BLACK, STIXALL_CLEAR],
    colours: STIXALL_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: STIXALL_FEATURES,
    specs: [
      { label: "Type", value: "Hybrid adhesive & sealant" },
      { label: "Brand", value: "Everbuild / Sika" },
      { label: "Colour", value: "White" },
      { label: "Pack", value: "290ml cartridge" },
    ],
  },
  "silicone/stixall/stixall-black": {
    key: "silicone/stixall/stixall-black",
    categorySlug: "silicone",
    collectionSlug: "stixall",
    slug: "stixall-black",
    title: "Stixall Black 290ml",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_BLACK,
    images: [STIXALL_BLACK, STIXALL_WHITE, STIXALL_CLEAR],
    colours: STIXALL_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: STIXALL_FEATURES,
    specs: [
      { label: "Type", value: "Hybrid adhesive & sealant" },
      { label: "Brand", value: "Everbuild / Sika" },
      { label: "Colour", value: "Black" },
      { label: "Pack", value: "290ml cartridge" },
    ],
  },
  "silicone/stixall/stixall-crystal-clear": {
    key: "silicone/stixall/stixall-crystal-clear",
    categorySlug: "silicone",
    collectionSlug: "stixall",
    slug: "stixall-crystal-clear",
    title: "Stixall Crystal Clear 290ml",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_CLEAR,
    images: [STIXALL_CLEAR, STIXALL_WHITE, STIXALL_BLACK],
    colours: STIXALL_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: STIXALL_FEATURES,
    specs: [
      { label: "Type", value: "Hybrid adhesive & sealant" },
      { label: "Brand", value: "Everbuild / Sika" },
      { label: "Colour", value: "Crystal Clear" },
      { label: "Pack", value: "290ml cartridge" },
    ],
  },
  "silicone/stixall/stixall-grey": {
    key: "silicone/stixall/stixall-grey",
    categorySlug: "silicone",
    collectionSlug: "stixall",
    slug: "stixall-grey",
    title: "Stixall Grey 290ml",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_WHITE,
    images: [STIXALL_WHITE, STIXALL_BLACK, STIXALL_CLEAR],
    colours: STIXALL_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: STIXALL_FEATURES,
    specs: [
      { label: "Type", value: "Hybrid adhesive & sealant" },
      { label: "Brand", value: "Everbuild / Sika" },
      { label: "Colour", value: "Grey" },
      { label: "Pack", value: "290ml cartridge" },
    ],
  },
  "silicone/stixall/stixall-brown": {
    key: "silicone/stixall/stixall-brown",
    categorySlug: "silicone",
    collectionSlug: "stixall",
    slug: "stixall-brown",
    title: "Stixall Brown 290ml",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_BLACK,
    images: [STIXALL_BLACK, STIXALL_WHITE, STIXALL_CLEAR],
    colours: STIXALL_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: STIXALL_FEATURES,
    specs: [
      { label: "Type", value: "Hybrid adhesive & sealant" },
      { label: "Brand", value: "Everbuild / Sika" },
      { label: "Colour", value: "Brown" },
      { label: "Pack", value: "290ml cartridge" },
    ],
  },
  "silicone/stixall/stixall-anthracite": {
    key: "silicone/stixall/stixall-anthracite",
    categorySlug: "silicone",
    collectionSlug: "stixall",
    slug: "stixall-anthracite",
    title: "Stixall Anthracite 290ml",
    description: STIXALL_DESCRIPTION,
    image: STIXALL_BLACK,
    images: [STIXALL_BLACK, STIXALL_WHITE, STIXALL_CLEAR],
    colours: STIXALL_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: STIXALL_FEATURES,
    specs: [
      { label: "Type", value: "Hybrid adhesive & sealant" },
      { label: "Brand", value: "Everbuild / Sika" },
      { label: "Colour", value: "Anthracite" },
      { label: "Pack", value: "290ml cartridge" },
    ],
  },
};
