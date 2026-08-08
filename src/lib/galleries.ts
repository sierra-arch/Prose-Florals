// Real per-wedding gallery data, mirrored from proseflorals.com
// Photos self-hosted in /public/images/galleries/<slug>/

export type Vendor = { role: string; name: string; url?: string };

export type Gallery = {
  slug: string;
  couple: string;        // e.g. "TAYLOR & ETHAN"
  subtitle: string;      // e.g. "A DREAMY CAPE WEDDING"
  venueLabel: string;    // index label, e.g. "CHASE YOUNG GALLERY"
  tagline: string;       // index couple tagline
  coverAlt: string;
  about: string[];       // paragraphs of "About the Event"
  vendors: Vendor[];
  photos: string[];      // gallery photo paths, in order
};

const G = "/images/galleries";

const range = (dir: string, prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `${G}/${dir}/${prefix}_${String(i + 1).padStart(2, "0")}.jpg`);

export const GALLERIES: Gallery[] = [
  {
    slug: "taylor-ethan",
    couple: "TAYLOR & ETHAN",
    subtitle: "SOFT & ROMANTIC UNDERSTATED ELEGANCE",
    venueLabel: "CHASE YOUNG GALLERY",
    tagline: "Taylor + Ethan \u2013 Soft & Romantic Understated Elegance",
    coverAlt: "Taylor and Ethan wedding florals by Prose Florals",
    about: [
      "From the elegant ivory palette to the warm candlelight, Taylor and Ethan created an exquisite day of love and warmth. For a couple that brings calm, kindness, and warmth to everyone they meet, it is only fitting that their style reflects that.",
      "With the ethereal beauty of Playa Blanca roses accented with white anemones whose dark centers add just the right touch of contrast \u2014 to the bride's cascading bouquet and the intimate tablescapes \u2014 every arrangement was designed to honor the couple's vision of understated sophistication. There's something truly special about creating florals for friends, and designing the flowers for Taylor and Ethan's wedding was such a joy!",
    ],
    vendors: [
      { role: "Photography", name: "Chais Renea Photography", url: "https://www.chaisrenea.com/" },
      { role: "Venue", name: "Chase Young Gallery", url: "https://www.chaseyounggallery.com/" },
      { role: "Catering & Table Settings", name: "Noire Chef Boston", url: "https://www.noirechefboston.com/" },
      { role: "Rental", name: "Peak Event Services", url: "https://www.peakeventservices.com/" },
    ],
    photos: range("taylor-ethan", "te", 22),
  },
  {
    slug: "emily-chris",
    couple: "EMILY & CHRIS",
    subtitle: "A DREAMY CAPE WEDDING",
    venueLabel: "THE DENNIS INN",
    tagline: "Emily + Chris \u2013 Soft, Dreamy Pastels and Floral Patterns.",
    coverAlt: "Emily and Chris Cape Cod wedding florals by Prose Florals",
    about: [
      "Bright and cheerful, this wedding brings together the beautiful Cape weather and soft pastel florals of spring like a dream.",
    ],
    vendors: [
      { role: "Photography", name: "Kelly Stevens Photo", url: "https://www.kellystevensphoto.com/" },
      { role: "Venue", name: "The Dennis Inn", url: "https://www.thedennisinn.com/" },
      { role: "Beauty", name: "Salty Mane Hair Bar" },
    ],
    photos: range("emily-chris", "ec", 28),
  },
  {
    slug: "maggie-billy",
    couple: "MAGGIE & BILLY",
    subtitle: "BREAKING TRADITION",
    venueLabel: "ROCKPORT ART MUSEUM",
    tagline: "Maggie + Billy \u2013 A Vibrant Palette for a Coastal Wedding.",
    coverAlt: "Maggie and Billy coastal wedding florals by Prose Florals",
    about: [
      "Bold, beautiful, and visionary, the stunning September wedding in the charming seaside town of Rockport was adorned with vibrant, colorful florals. Embracing creativity and breaking tradition, this celebration showcased a palette as unique as the bride herself.",
    ],
    vendors: [
      { role: "Photography", name: "Caroline Giuliano Photography" },
      { role: "Venue", name: "Rockport Art Museum", url: "https://rockportartassn.org/" },
      { role: "Video", name: "Caleb Jordan Lee" },
    ],
    photos: range("maggie-billy", "mb", 17),
  },
];

export const getGallery = (slug: string) => GALLERIES.find((g) => g.slug === slug);

// Cover thumbnails for the portfolio index (first photo of each gallery)
export const GALLERY_COVERS: Record<string, string> = {
  "taylor-ethan": `${G}/taylor-ethan/te_04.jpg`,
  "emily-chris": `${G}/emily-chris/ec_02.jpg`,
  "maggie-billy": `${G}/maggie-billy/mb_04.jpg`,
};

// Portfolio hero carousel images — curated to 6 of the original 10. The
// dropped frames (very dark moody interior, two highly-saturated bold shots)
// read as jarring cuts against the calmer, soft-neutral majority as the
// carousel auto-advances; this keeps the mood consistent slide to slide.
const heroAll = range("portfolio-hero", "ph", 10);
export const PORTFOLIO_HERO: string[] = [heroAll[0], heroAll[3], heroAll[5], heroAll[6], heroAll[8], heroAll[9]];
