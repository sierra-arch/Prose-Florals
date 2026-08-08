// Curated map of the real Prose Florals photography (self-hosted in /public/images).
// Filenames preserved from the original site; grouped by role for clean page code.

const P = "/images/";

export const IMG = {
  // Brand
  monogram: `${P}97c237-prose_florals_initials.png`,
  monogramWhite: `${P}08c6ff-prose_florals_initials_white.png`,

  // Hero / couples
  heroTwoBrides: `${P}5ac7b3-frances_clayton-873_websize.jpg`,   // colorful two-brides garden (homepage hero)
  coupleSunset: `${P}0fedf1-bride-and-groom-bouquets-boston-florist-prose-florals.jpg`,
  coupleForest: `${P}b91312-deep-moody-forest-bridal-bouquet-boston-florist-prose-florals-.jpg`,
  coupleKiss: `${P}4bdb2e-castillo_holliday_photo_film_gabby_and_ian_wedding_previews_08_26_23-30.jpg`,
  coupleEmbrace: `${P}960c60-frances_clayton-23_websize.jpg`,   // florist hugging bride
  coupleWalk: `${P}ea53f1-frances_clayton-1274_websize.jpg`,
  coupleArch: `${P}9cadf1-fc_film-18_websize.jpg`,

  // Brides / portraits
  brideMoody: `${P}d5403d-bride-white-forest-moody-boston-florist-prose-florals.jpg`,
  brideBouquet: `${P}002c5d-bride-bouquet-bridal-wedding-boston-florist-prose-florals.jpg`,
  bridePortrait: `${P}1f6276-frances_clayton-474_websize.jpg`,   // bride at brick mansion, veil
  brideBrick: `${P}e44af1-frances_clayton-465_websize.jpg`,
  brideParty: `${P}83b455-laura_alix_bridal_party_bouquets.jpg`,
  meadowInstall: `${P}765ef7-frances_clayton-1583_websize.jpg`,   // ground floral meadow install

  // Bouquets / florals (detail)
  bouquetWhite: `${P}960c60-frances_clayton-23_websize.jpg`,
  bouquetLush: `${P}32c000-frances_clayton-34_websize.jpg`,
  bouquetBold: `${P}32d18b-beach-wedding-reception-bright-bold-warm-bouquet-boston-prose-florals.jpg`,
  bouquetClose: `${P}2e514f-frances_clayton-27_websize.jpg`,
  bouquetDetail2: `${P}414529-frances_clayton-22_websize.jpg`,
  bouquetDetail3: `${P}60da25-frances_clayton-35_websize.jpg`,

  // Installs / ceremony / venue
  ceremonyArch: `${P}9cadf1-fc_film-18_websize.jpg`,
  install1: `${P}889059-fc_film-13_websize.jpg`,
  centerpiece: `${P}8de8d8-frances_clayton-398_websize.jpg`,
  reception: `${P}691903-frances_clayton-502_websize.jpg`,

  // Bright/bold beach + bridesmaids
  beachBridesmaids: `${P}d70409-beach-wedding-bridesmaids-bright-bold-romantic-boston-prose-florals.jpg`,

  // Sierra & Kattie (team)
  sierra: `${P}1f6276-frances_clayton-474_websize.jpg`,
  kattie: `${P}960c60-frances_clayton-23_websize.jpg`,

  // Frames / decorative
  frameMark: `${P}5d1bb5-fp_mark_frame.svg`,
  frameFitz: `${P}cafc67-fitzgerald-frame-white.svg`,
};

// Curated, tonally-grouped clusters for the Portfolio "More Weddings" grid —
// replaces one dense 30-photo wall with paced groupings that each read as
// their own consistent mood (a deliberate B&W novelty shot and a couple of
// outlier-saturated frames were dropped rather than forced into a group).
export const PORTFOLIO_GROUPS: { label: string; images: string[] }[] = [
  {
    label: "Soft & Romantic",
    images: [
      `${P}691903-frances_clayton-502_websize.jpg`,
      `${P}5ac7b3-frances_clayton-873_websize.jpg`,
      `${P}1f6276-frances_clayton-474_websize.jpg`,
      `${P}0fedf1-bride-and-groom-bouquets-boston-florist-prose-florals.jpg`,
      `${P}002c5d-bride-bouquet-bridal-wedding-boston-florist-prose-florals.jpg`,
    ],
  },
  {
    label: "The Getting Ready",
    images: [
      `${P}32c000-frances_clayton-34_websize.jpg`,
      `${P}2e514f-frances_clayton-27_websize.jpg`,
      `${P}60da25-frances_clayton-35_websize.jpg`,
      `${P}9cadf1-fc_film-18_websize.jpg`,
      `${P}8de8d8-frances_clayton-398_websize.jpg`,
    ],
  },
  {
    label: "Bold & Vibrant",
    images: [
      `${P}765ef7-frances_clayton-1583_websize.jpg`,
      `${P}ea53f1-frances_clayton-1274_websize.jpg`,
      `${P}83b455-laura_alix_bridal_party_bouquets.jpg`,
      `${P}065560-maggie_and_billywedding_firstlook0172.jpg`,
      `${P}32d18b-beach-wedding-reception-bright-bold-warm-bouquet-boston-prose-florals.jpg`,
    ],
  },
  {
    label: "Golden Hour",
    images: [
      `${P}df88eb-bono_ceremony-192_websize.jpg`,
      `${P}ecd8d1-bono_cocktail_hour-5_websize.jpg`,
      `${P}5b8615-maggie_and_billywedding_maggie_and_billy_0801.jpg`,
      `${P}f80821-maggie_and_billywedding_maggie_and_billy_0795.jpg`,
      `${P}cc4a55-bono_family_and_friends-81_websize.jpg`,
    ],
  },
];

// Small, tonally-consistent set for the footer Instagram strip — deliberately
// pulled from the "Soft & Romantic" family so the strip reads as one calm
// closing note rather than another dense, mixed-tone grid.
export const FOOTER_STRIP: string[] = [
  `${P}e44af1-frances_clayton-465_websize.jpg`,
  `${P}691903-frances_clayton-502_websize.jpg`,
  `${P}1f6276-frances_clayton-474_websize.jpg`,
  `${P}0fedf1-bride-and-groom-bouquets-boston-florist-prose-florals.jpg`,
  `${P}002c5d-bride-bouquet-bridal-wedding-boston-florist-prose-florals.jpg`,
  `${P}a32b59-bono_newlyweds-53_websize.jpg`,
];

// Shared external links (already in the original repo)
export const INQUIRY = "https://proseflorals.hbportal.co/public/6525822feddaf700db0fc732/1-Enter_your_details";
export const GUIDE = "https://proseflorals.hbportal.co/public/697ca9d706dda90027660811";
export const INSTAGRAM = "https://www.instagram.com/proseflorals/";
export const PINTEREST = "https://www.pinterest.com/proseflorals/";
