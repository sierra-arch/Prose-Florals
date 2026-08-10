// Curated map of the real Prose Florals photography (self-hosted in /public/images).
// Filenames preserved from the original site; grouped by role for clean page code.

const P = "/images/";
const L = "/images/live/";

// Pulled directly from the live proseflorals.com (Showit) site, at full
// resolution — the exact photos, not approximations from the general pool.
export const LIVE = {
  aboutHeroLeft: `${L}c030dc-zc-634.jpg`, // colorful bridal party group hug
  aboutHeroMiddle: `${L}b01519-20240907-wilczynski-mees-012709.jpg`, // B&W box hug
  aboutHeroRight: `${L}414529-frances-clayton-22-websize.jpg`, // bride arranging bouquet on shelf
  collageA: `${L}7ce446-bettiswedding-184.jpg`,
  collageB: `${L}960c60-frances-clayton-23-websize.jpg`,
  collageC: `${L}b84804-img-5295.jpg`,
  collageD: `${L}2b6911-img-1948.jpg`,

  ourStyleBouquet: `${L}1dcbb4-abigailschaefferwedding-220.jpg`,
  ourStoryCouple: `${L}52d3fd-bettiswedding-324.jpg`,

  sierraChildhood: `${L}73febe-3490923c-944b-45f8-91a1-cd0c345c6dbf.jpg`,
  sierraCoupleChair: `${L}0fedf1-bride-and-groom-bouquets-boston-florist-prose-florals.jpg`,
  sierraBridesHug: `${L}403ef6-bettiswedding-337.jpg`,

  kattiePianoCouple: `${L}fcbb34-wedding-431-original.jpg`,
  kattieMomBride: `${L}451cd9-wedding-343-original.jpg`,
  kattieMakeup: `${L}17b03c-0018-original.jpg`,
  kattieBeach: `${L}c3e1dc-img-2992.jpg`,

  teamCart1: `${L}90f412-img-8930.jpg`,
  teamArrange: `${L}53f40d-img-8931.jpg`,
  teamArch: `${L}722718-img-8936.jpg`,
  teamCart2: `${L}53fbbf-img-2958.jpg`,

  favoriteCat: `${L}f613b7-castillohollidayphoto2bfilm-gabby26ianwedding-editor27schoice-006-2048x1358.jpg`,
  favoriteStyle: `${L}1b7500-zc-13.jpg`,
  favoriteQuiet: `${L}14c985-img-1972.jpg`,

  closingExchangeA: `${L}2e514f-frances-clayton-27-websize.jpg`,
  closingExchangeB: `${L}60da25-frances-clayton-35-websize.jpg`,

  // Services page
  servicesHero: `${L}47b290-img-5131.jpg`, // B&W couple walking city street
  knownPlayful: `${L}9d02cf-img-1953.jpg`, // pastel arrangement on mantel
  knownSentimental: `${L}da07b0-zc-335.jpg`, // sunglasses couple, vibrant bouquet
  knownHandsOn: `${L}8cf824-eawedding-1803.jpg`, // bride in garden
  weddingsBand: `${L}003b01-film-abigailschaeffer-6.jpg`, // dusty-blue bridesmaids
  corporateBand: `${L}f5c009-zc-377.jpg`, // wine + flower still life
  testimonialBg1: `${L}6218ad-23-10-05-maggiore-0433.jpg`, // Dominique & Frank
  testimonialBg2: `${L}e5b9e1-img-0835.jpg`, // Adi & Shuham
  testimonialBg3: `${L}cac6b4-img-5293.jpg`, // Anneke & Matt
  testimonialBg4: `${L}ecd8d1-bono-cocktail-hour-5-websize.jpg`, // Megan & Nico
  offeringDiy: `${L}54a7d6-2c8488f6-2ed8-45e5-9ef1-5dd677dc8e7e-1-105-c.jpg`, // hands cutting rose
  offeringEditorial: `${L}935a99-zo61fgta.jpg`, // bride embracing herself
  offeringNonprofit: `${L}8b4fc3-img-0107.jpg`, // pink/white centerpiece
  inspirationDress: `${L}ea53f1-frances-clayton-1274-websize.jpg`, // purple embroidered dress
  inspirationCastle: `${L}2aced8-308.jpg`,
  inspirationOcean: `${L}4d0570-136.jpg`,

  // Experience page
  experienceHero: `${L}ea0f5d-img-5291.jpg`, // couple at stone arch, orange bouquet
  romanceClose: `${L}b72330-img-1950.jpg`, // veil flowing, blush bouquet
  tailoredProcess: `${L}a32b59-bono-newlyweds-53-websize.jpg`, // bride, deep-V bouquet, monogram
  methodVision: `${L}2dc648-zc-250.jpg`, // tablescape, pink/orange candles
  methodColor: `${L}f92ddc-maggie-and-billywedding-preceremony0435.jpg`, // flower macro
  methodIngredients: `${L}9cadf1-fc-film-18-websize.jpg`, // purple dress, wrist corsage
  experienceTestimonialPhoto: `${L}83b455-laura-alix-bridal-party-bouquets.jpg`, // Laura + Ben
  howItWorksBg: `${L}bfd5da-lecollectif-141.jpg`, // blurred parallax bg
  journeyInquiry: `${L}002c5d-bride-bouquet-bridal-wedding-boston-florist-prose-florals.jpg`,
  journeyProposal: `${L}39bcaf-050722-kim-cj-wedding-152.jpg`,
  journeyPlanning: `${L}a8a1f0-maggie-and-billywedding-preceremony0468.jpg`,
  journeyDelivery: `${L}b97090-0l4a7693.jpg`,
  bigQuoteBg: `${L}6583eb-frances-clayton-1609-websize.jpg`, // Laurel & Ty, pergola
  faqMarigolds: `${L}91d269-zc-217.jpg`,
  faqCastle: `${L}2aced8-308.jpg`,
  experienceClosingCta: `${L}46695e-fc-film-13-websize.jpg`, // bridesmaids, floral pattern

  // Portfolio index — named wedding covers
  samTerrieFeature: `${L}97c666-img-1951.jpg`,
  zoeChapman: `${L}9a8a79-zc-398.jpg`,
  francesClayton: `${L}8de8d8-frances-clayton-398-websize.jpg`,
  annekeMatt: `${L}f66afd-img-5294.jpg`,
  abigailSchaeffer: `${L}9a1185-img-6270.jpg`,
  kalilaDavid: `${L}466036-kalila-and-amp-david-493.jpg`,
  meganNico: `${L}cc4a55-bono-family-and-friends-81-websize.jpg`,
  emmaTyler: `${L}585623-img-1084.jpg`,
  laurelTy: `${L}82a04d-img-2051.jpg`,
  karaShane: `${L}5a3934-dscf3856.jpg`,
  meaghanAbel: `${L}63aebb-delgado-17.jpg`,
  editorialFizzyOrange: `${L}d70409-beach-wedding-bridesmaids-bright-bold-romantic-boston-prose-florals.jpg`,
  editorialForestRomance: `${L}b91312-deep-moody-forest-bridal-bouquet-boston-florist-prose-florals-.jpg`,

  // Homepage "Flowers for Your Story" rotator — pulled from the live
  // homepage's actual rotating set, matched pair-by-pair against the
  // user's screenshots and verified same-wedding by filename/venue.
  maggieBillyMain: `${L}8615e0-maggie-and-billywedding-preceremony0481.jpg`,
  maggieBillyDetail: `${L}f92ddc-maggie-and-billywedding-preceremony0435.jpg`,
  hydrangeaArchMain: `${L}849560-img-6269.jpg`,
  hydrangeaArchDetail: `${L}b2d3dd-0l4a8276.jpg`,
  industrialToastMain: `${L}a3c5da-dsc-7409.jpg`,
  industrialToastDetail: `${L}b9907c-2024-09-28-thegoods-387.jpg`,
  charlesRiverMain: `${L}069348-img-8228.jpg`,
  charlesRiverDetail: `${L}253f93-kalila-and-amp-david-430.jpg`,
  zoeChapmanMain2: `${L}d4629e-zc-495.jpg`,
  zoeChapmanDetail2: `${L}2dc648-zc-250.jpg`,

  // User-picked from the full photo library, via the grouped photo picker.
  emilyChrisMain: `${P}galleries/emily-chris/ec_12.jpg`,
  emilyChrisDetail: `${P}galleries/emily-chris/ec_20.jpg`,
  taylorEthanMain: `${P}galleries/taylor-ethan/te_16.jpg`,

  // New weddings (Rachel + Alex, Sarah, Ellen) — user-picked from the
  // "New Weddings" picker, resized down from full-res originals.
  rachelAlexMain: `${L}ffc3d5-rachelalex-349.jpg`,
  rachelAlexDetail: `${L}a9131c-rachelalex-372.jpg`,
  sarahMain: `${L}969642-1-1234.jpg`,
  sarahDetail: `${L}943064-1-664.jpg`,
  ellenMain: `${L}e8aeaf-eawedding-3508.jpg`,
  ellenDetail: `${L}d1bdf7-eawedding-2828.jpg`,
  rachelAlexPanel: `${L}3a0663-rachelalex-217.jpg`,

  // Homepage Services/Florist/Portfolio nav panels — user-picked.
  navFlorist: `${P}636bde-2024_09_28_thegoods-76.jpg`,
  navPortfolio: `${P}b9907c-2024_09_28_thegoods-387.jpg`,
  bonoMain: `${L}402443-bono-newlyweds-43-websize.jpg`,
  bonoDetail: `${L}a32b59-bono-newlyweds-53-websize.jpg`,
  windowSeatMain: `${L}14c985-img-1972.jpg`,
  windowSeatDetail: `${L}080afe-img-1954.jpg`,
};

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

  // Illustrated / composed pieces (AI-generated decorative art, not documentary
  // wedding photography) — used sparingly per the archival-atelier direction.
  botanicalPlate: `${P}illustrations/botanical-plate.jpg`,
  flatLay: `${P}illustrations/flat-lay.jpg`,
};

// Freshly-tapped photography — 87 of the library's 118 photos had never been
// referenced anywhere on the site. These power the scrapbook/collage
// extensions below. "TheGoods" (Sept 28, 2024) and "Wilczynski/Mees"
// (Sept 7, 2024) are the most recently dated weddings by filename, so they
// lead; the rest is a broad, varied scrapbook pull from the remaining pool.
export const FRESH = {
  goods1: `${P}e1d12e-2024_09_28_thegoods-225.jpg`,
  goods2: `${P}682d99-2024_09_28_thegoods-462.jpg`,
  goods3: `${P}52a1ba-2024_09_28_thegoods-169.jpg`,
  goods4: `${P}f7ee46-2024_09_28_thegoods-224.jpg`,
  goods5: `${P}636bde-2024_09_28_thegoods-76.jpg`,
  goods6: `${P}b9907c-2024_09_28_thegoods-387.jpg`,
  wilczynski1: `${P}b01519-20240907_wilczynski_mees_012709.jpg`,
  wilczynski2: `${P}036ebb-20240907_wilczynski_mees_013290.jpg`,
  scrap1: `${P}2b6911-img_1948.jpg`,
  scrap2: `${P}1dcbb4-abigailschaefferwedding-220.jpg`,
  scrap3: `${P}52d3fd-bettiswedding-324.jpg`,
  scrap4: `${P}7bf80d-bettiswedding-363.jpg`,
  scrap5: `${P}3d3630-img_1961_copy.jpg`,
  scrap6: `${P}19a867-425811293_18414625309027946_6623878183257840776_n.jpg`,
  scrap7: `${P}82a04d-img_2051.jpg`,
  scrap8: `${P}6218ad-23-10-05_maggiore_0433.jpg`,
  scrap9: `${P}424570-lecollectif-141.jpg`,
  scrap10: `${P}63aebb-delgado--17.jpg`,
  scrap11: `${P}28e3a2-kalila_and_david-28.jpg`,
  scrap12: `${P}466036-kalila_and_amp_david-493.jpg`,
};

// Curated, tonally-grouped clusters for the Portfolio "More Weddings" grid —
// replaces one dense 30-photo wall with paced groupings that each read as
// their own consistent mood (a deliberate B&W novelty shot and a couple of
// outlier-saturated frames were dropped rather than forced into a group).
export const PORTFOLIO_GROUPS: { label: string; images: string[] }[] = [
  {
    label: "Most Recent — The Goods",
    images: [FRESH.goods1, FRESH.goods2, FRESH.goods3, FRESH.goods4, FRESH.goods5],
  },
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
