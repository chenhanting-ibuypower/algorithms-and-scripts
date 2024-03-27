const i18n = {
  locales: [
    "en-US",
    "en-GB",
    "es",
    "de",
    "fr",
    "pl",
    "it",
    "nl",
    "ko",
    "ja",
    "zh-TW",
    "zh-CN",
  ],
  defaultLocale: "en-US",
};

const countryToLanguageMap = {
  US: ["en"],
  ES: ["es"],
  MX: ["es"],
  AR: ["es"],
  CO: ["es"],
  CL: ["es"],
  PE: ["es"],
  DE: ["de"],
  AT: ["de"],
  CH: ["de", "fr", "it", "rm"], // Switzerland has multiple official languages
  FR: ["fr"],
  BE: ["nl", "fr", "de"], // Belgium has multiple official languages
  CA: ["en", "fr"],
  PL: ["pl"],
  IT: ["it"],
  NL: ["nl"],
  KR: ["ko"],
  JP: ["ja"],
  TW: ["zh-TW"],
  CN: ["zh-CN"],
  SG: ["en", "ms", "ta", "zh"], // Singapore has multiple official languages
  /**
   * The official language is Malay (also referred to as Malaysian), but due to its multicultural society,
   * various languages are spoken across the country. English is widely spoken and is the second most-spoken language.
   * Additionally, various Chinese dialects (like Mandarin), Tamil, and indigenous languages are spoken by different communities.
   *
   * ms is the ISO 639-1 code for the Malay language.
   * ta is the ISO 639-1 code for the Tamil language.
   */
  MY: ["ms", "en", "zh", "ta"],
  // ... add more mappings as needed
};

const regions = [
  { text: "United States", value: "US" },
  // Spanish-speaking countries
  { text: "Spain", value: "ES" },
  { text: "Mexico", value: "MX" },
  { text: "Argentina", value: "AR" },
  { text: "Colombia", value: "CO" },
  { text: "Chile", value: "CL" },
  { text: "Peru", value: "PE" },
  // and others; there are 21 countries where Spanish is the official language

  // German-speaking countries
  { text: "Germany", value: "DE" },
  { text: "Austria", value: "AT" },
  { text: "Switzerland", value: "CH" }, // Note: Switzerland has multiple official languages, including German, French, Italian, and Romansh

  // French-speaking countries
  { text: "France", value: "FR" },
  { text: "Belgium", value: "BE" },
  { text: "Canada", value: "CA" },
  { text: "United States", value: "US" },
  { text: "Switzerland", value: "CH" }, // See note above

  // Polish-speaking country
  { text: "Poland", value: "PL" },

  // Italian-speaking countries
  { text: "Italy", value: "IT" },
  { text: "Switzerland", value: "CH" }, // See note above

  // Dutch-speaking countries
  { text: "Netherlands", value: "NL" },
  { text: "Belgium", value: "BE" }, // Dutch, known locally as Flemish, is one of the official languages of Belgium

  // Korean-speaking country
  { text: "South Korea", value: "KR" },

  // Japanese-speaking country
  { text: "Japan", value: "JP" },

  // Chinese-speaking countries/regions
  { text: "Taiwan", value: "TW" },
  { text: "China", value: "CN" },
  { text: "Singapore", value: "SG" }, // Note: Singapore has multiple official languages, including English and Mandarin Chinese
];

const countryCodes = Object.keys(countryToLanguageMap);
const languages = i18n.locales;

function generatePaths() {
  const paths = [];

  countryCodes.forEach((code) => {
    languages.forEach((lang) => {
      paths.push({
        params: {
          region: code.toLowerCase(),
          locale: lang,
        },
      });
    });
  });

  return paths;
}

const paths = generatePaths();
console.log(paths);
