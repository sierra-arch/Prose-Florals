// Real per-wedding gallery data, mirrored from proseflorals.com
// Photos self-hosted in /public/images/galleries/<slug>/

import { LIVE, IMG } from "./images";

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
const L = "/images/live/";

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
    venueLabel: "ROCKPORT ART ASSOCIATION",
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
  {
    slug: "zoe-chapman",
    couple: "ZOË & CHAPMAN",
    subtitle: "A VIBRANT WATERFRONT WEDDING IN NEWPORT, RI",
    venueLabel: "THE REGATTA PLACE",
    tagline: "Zoë + Chapman – Bright, Sculptural Summer Wedding with Mounds of Flavor.",
    coverAlt: "Zoë and Chapman embracing at their waterfront wedding in Newport, RI",
    about: [
      "Zoë and Chapman have artists souls and the biggest hearts! Their expertise and intentionality is deeply felt in every detail of their waterfront wedding in Newport, RI. Choosing to stay within the families of pinks, oranges, and greens— they created a palette as joyful as the couple themselves. Every bloom was hand-selected by Zoë and Chapman to create these incredibly vibrant, “whimsically sculptural” arrangements. It was an honor to bring their vision to life!",
      "This wedding was extra special for me (Sierra) as Chapman and Zoë are family! Enjoy these florals that highlight the warmth and happiness of this very special wedding day.",
    ],
    vendors: [
      { role: "Photography", name: "Alice Plati Photography" },
      { role: "Venue", name: "The Regatta Place" },
      { role: "Coordination", name: "The Ladybird Event Co" },
      { role: "Vinyl Set", name: "D. Peezy" },
      { role: "Live Music", name: "Marcus the Drummer Quintet" },
      { role: "Makeup", name: "Visage 1 Studios" },
      { role: "Hair", name: "Braided New York" },
      { role: "Wedding Gown", name: "Paulette Cleghorn & Yumi Katsura" },
      { role: "Cake", name: "Sin PVD" },
      { role: "Jello Shots", name: "Solid Wiggle" },
      { role: "Ice Cream", name: "Big Feeling PVD" },
    ],
    photos: [
      `${L}6f13ce-zc-153.jpg`,
      `${L}d4629e-zc-495.jpg`,
      `${L}019d79-zc-265.jpg`,
      `${L}2dc648-zc-250.jpg`,
      `${L}da07b0-zc-335.jpg`,
      `${L}1e0bf8-zc-270.jpg`,
      `${L}775c07-zc-232.jpg`,
      `${L}a2dea9-zc-166.jpg`,
      `${L}91d269-zc-217.jpg`,
      `${L}5c4ecc-zc-271.jpg`,
      `${L}c030dc-zc-634.jpg`,
      `${L}bfa0d2-zc-525.jpg`,
      `${L}3026b1-zc-246.jpg`,
      `${L}e7eab9-zc-277.jpg`,
      `${L}6e89fa-zc-230.jpg`,
      `${L}1b7500-zc-13.jpg`,
      `${L}f5c009-zc-377.jpg`,
      `${L}28a2e6-zc-173.jpg`,
    ],
  },
];

export const getGallery = (slug: string) => GALLERIES.find((g) => g.slug === slug);

// Cover thumbnails for the portfolio index (first photo of each gallery)
export const GALLERY_COVERS: Record<string, string> = {
  "taylor-ethan": `${G}/taylor-ethan/te_16.jpg`,
  "emily-chris": `${G}/emily-chris/ec_12.jpg`,
  "maggie-billy": `${G}/maggie-billy/mb_04.jpg`,
  "zoe-chapman": `${L}1b7500-zc-13.jpg`,
};

// Portfolio hero carousel images — curated to 6 of the original 10. The
// dropped frames (very dark moody interior, two highly-saturated bold shots)
// read as jarring cuts against the calmer, soft-neutral majority as the
// carousel auto-advances; this keeps the mood consistent slide to slide.
const heroAll = range("portfolio-hero", "ph", 10);
export const PORTFOLIO_HERO: string[] = [heroAll[0], heroAll[3], heroAll[5], heroAll[6], heroAll[8], heroAll[9]];

// Index-only cards for the Portfolio page's Featured/More Weddings rows —
// one real photo + real venue/couple copy per wedding, matching the live
// site exactly. Only the 3 in GALLERIES above have a full detail page; the
// rest link nowhere (no `slug`), same as the live site's non-clickable tiles.
export type PortfolioCard = { venueLabel: string; tagline: string; photo: string; slug?: string };

export const FEATURED_WEDDINGS: PortfolioCard[] = [
  { venueLabel: "THE REGATTA PLACE", tagline: "Zoë + Chapman - Bright, Sculptural Summer Wedding with Mounds of Flavor.", photo: `${L}1b7500-zc-13.jpg`, slug: "zoe-chapman" },
  { venueLabel: "COMMANDER'S MANSION", tagline: "Frances + Clayton - Muted Rainbow Hues paired with Historic Architecture.", photo: LIVE.francesClayton },
  { venueLabel: "CHASE YOUNG GALLERY", tagline: "Taylor + Ethan - Soft & Romantic Understated Elegance", photo: `${G}/taylor-ethan/te_16.jpg`, slug: "taylor-ethan" },
  { venueLabel: "THE DENNIS INN", tagline: "Emily + Chris - Soft, Dreamy Pastels and Floral Patterns.", photo: `${G}/emily-chris/ec_12.jpg`, slug: "emily-chris" },
  { venueLabel: "ROCKPORT ART ASSOCIATION", tagline: "Maggie + Billy - A Vibrant Palette for a Coastal Wedding.", photo: `${G}/maggie-billy/mb_04.jpg`, slug: "maggie-billy" },
  { venueLabel: "THE ESTATE AT MORAINE FARM", tagline: "Anneke + Matt - Warm Summer Wedding with Bright Wildflowers.", photo: LIVE.annekeMatt },
  { venueLabel: "THE CONNEMARA HOUSE", tagline: "Abigail + Schaeffer - Cottage Garden Charm with a Soft, Romantic palette.", photo: LIVE.abigailSchaeffer },
];

export const MORE_WEDDINGS: PortfolioCard[] = [
  { venueLabel: "THE CHARLES RIVER MUSEUM", tagline: "Kalila + David - Romantic and Warmth creating Timeless Elegance.", photo: LIVE.kalilaDavid },
  { venueLabel: "NORTHERN SPY", tagline: "Megan + Nico - Textured, Soft Pinks with a Delicate & Inviting Ambiance.", photo: LIVE.meganNico },
  { venueLabel: "WILLOWDALE ESTATE", tagline: "Emma + Tyler - Winter Blues with a Touch of Magic", photo: LIVE.emmaTyler },
  { venueLabel: "PIERCE HOUSE", tagline: "Laurel + Ty - Delicate, Blue & Lilac Wildflowers for a Forest Wedding.", photo: LIVE.laurelTy },
  { venueLabel: "LORING-GREENOUGH HOUSE", tagline: "Gabriela + Ian - Vintage Allure and Timeless Elegance Wedding.", photo: IMG.coupleKiss },
  { venueLabel: "ROGER WILLIAMS BOTANICAL GARDENS", tagline: "Kara + Shane - Winter Tropical Garden Wedding on NYE.", photo: LIVE.karaShane },
  { venueLabel: "LA BRASSA", tagline: "Meaghan + Abel - A Heartfelt Spring Wedding with a Soft, Natural Palette.", photo: LIVE.meaghanAbel },
];

export const PORTFOLIO_FEATURE = {
  couple: "SAM + TERRIE - SOFT ROMANCE",
  tagline: "A delicate approach for a white and peach bouquet.",
  photo: LIVE.samTerrieFeature,
};

export const EDITORIAL_PROJECTS = [
  { title: "Fizzy Orange - Sunshine & Flowers", photo: LIVE.editorialFizzyOrange },
  { title: "Forest Romance - A Dramatic Flair", photo: LIVE.editorialForestRomance },
];
