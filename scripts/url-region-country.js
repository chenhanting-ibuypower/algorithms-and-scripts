const urls = [
  "https://feature.hyte.com/ja",
  "https://feature.hyte.com/ja/us",
  "https://feature.hyte.com/ja/tw",
  "https://feature.hyte.com/ja/checkout?step=delivery",
  "https://feature.hyte.com/ja/cn/checkout?step=delivery",
  "https://feature.hyte.com/ja/checkout?step=payment",
  "https://feature.hyte.com/ja/cart",
  "https://feature.hyte.com/checkout",
  "https://feature.hyte.com/ja/tw/checkout",
  "https://feature.hyte.com/tw/ja/checkout",
  "https://feature.hyte.com/store/y60?v=118",
  "https://feature.hyte.com/ja/store/y60?v=118",
  "https://feature.hyte.com/tw/ja/store/y60?v=118",
  "https://feature.hyte.com/ja/press/hyte-announces-a-series-of-powered-by-nexus-components-including-keeb-tkl",
  "https://feature.hyte.com/ja/tw/press/hyte-announces-a-series-of-powered-by-nexus-components-including-keeb-tkl",
  "/ja",
  "/ja/us",
  "/ja/tw",
  "/ja/checkout?step=delivery",
  "/ja/cn/checkout?step=delivery",
  "/ja/checkout?step=payment",
  "/ja/cart",
  "/checkout",
  "/ja/tw/checkout",
  "/tw/ja/checkout",
  "/store/y60?v=118",
  "/ja/store/y60?v=118",
  "/tw/ja/store/y60?v=118",
  "/ja/press/hyte-announces-a-series-of-powered-by-nexus-components-including-keeb-tkl",
  "/ja/tw/press/hyte-announces-a-series-of-powered-by-nexus-components-including-keeb-tkl",
  "http://localhost:3000/ja/us/store/y60?v=118",
  "/us/store/y60"
];

const i18n = {
  "locales": [
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
    "zh-CN"
  ],
  "defaultLocale": "en-US"
}

function getLang(url) {
  const possibleLangs = [
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
  ];

  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split("/").filter((part) => part);

    if (pathParts.length >= 1 && possibleLangs.includes(pathParts[0])) {
      return pathParts[0];
    }
  } catch (error) {
    console.error(`Error parsing URL ${url}:`, error);
  }

  return null;
}

const regions = [
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
]

const countryCodes = regions.map(region => region.value.toLowerCase());
console.log("country codes", countryCodes);

function getCountry(url) {
  let parsedPathname = "";

  try {
    parsedPathname = (new URL(url)).pathname;
  } catch (e) {
    console.log("error parsing url", url);
    parsedPathname = url;
  }

  const pathParts = parsedPathname.split("/").filter((part) => part);

  let countryCode = null;
  let language = null;
  let rewriteUrl = url;

  if (pathParts.length >= 2) {
    // Checking the second part of the path
    const possibleCountryCode = pathParts[0].toLowerCase();
    const secondPossibleCountryCode= pathParts[1].toLowerCase();
    // You can maintain a list of valid country codes if necessary
    if (countryCodes.includes(possibleCountryCode)) {
      countryCode = possibleCountryCode;
      rewriteUrl = url.replace(`/${countryCode}`, "");
    }

    if (countryCodes.includes(secondPossibleCountryCode)) {
      countryCode = secondPossibleCountryCode;
      rewriteUrl = url.replace(`/${countryCode}`, "");
    }

    // You can maintain a list of valid country codes if necessary
    if (i18n.locales.includes(possibleCountryCode)) {
      language = possibleCountryCode;
    }

    if (i18n.locales.includes(secondPossibleCountryCode)) {
      language = secondPossibleCountryCode;
    }
  }

  return { countryCode, rewriteUrl, language };
}

for (const url of urls) {
  console.log(
    `🌸 URL: ${url}, \nCountry Code: ${JSON.stringify(getCountry(url))}`
  );
}

const removeEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj.filter((value) => value !== null && value !== undefined && value !== '');
  } else {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
};

console.log(removeEmpty({
  cartId: 1,
  customerId: null,
  line_items: undefined,
  e: "",
  a: [1, 2, 4],
  b: { c: "", d: undefined }
}))

const nextUrl = {
  href: 'http://localhost:3000/ja/blog',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/blog',
  search: '',
}

const countrycode = "US";


const urlWithRegionLang = [
  {newRegion: 'CH', currentPath: '/us/ja/blog'},
  {newRegion: 'CH', currentPath: '/ja/blog'},
  {newRegion: 'CH', currentPath: '/blog'},
]

/**
 * 🌸 The previous Country code and Language is: { prevCountry: 'jp', prevLang: null }
 * 🌸 The current Country code and Language is: { currCountry: 'jp', currLang: 'nl' }
 * 🍪 The current link should be: http://localhost:3000/store/y40?region=jp
 * 🚗 URL: {
 *   href: 'http://localhost:3000/nl/store/y40?region=jp&product=y40',
 *   origin: 'http://localhost:3000',
 *   protocol: 'http:',
 *   username: '',
 *   password: '',
 *   host: 'localhost:3000',
 *   hostname: 'localhost',
 *   port: '3000',
 *   pathname: '/store/y40',
 *   search: '?region=jp&product=y40',
 *   searchParams: URLSearchParams {  },
 *   hash: ''
 * }
 *
 * @param nextUrl
 * @param countryCode
 * @param languageCode
 * @returns {string}
 */
function mutateUrl(nextUrl, countryCode, languageCode) {
  const { pathname } = nextUrl;
  const modifiedPath = [
    languageCode?.replace("/", ""),
    pathname?.replace("/", ""),
  ].filter(Boolean);

  const modifiedUrl = new URL(modifiedPath.join("/"), nextUrl.origin);
  // Check if the region parameter is provided and is non-empty
  if(countryCode) {
    // Add the region query parameter to the URL
    modifiedUrl.searchParams.set('region', countryCode);
  }

  // Return the modified URL as a string
  return modifiedUrl.href;
}

const array1 = [1, 2, 3, 3];
const array2 = [1, 2, 3];

function difference(array1, array2) {
  return array1.filter((item) => {
    const index = array2.indexOf(item);
    if (index !== -1) {
      array2.splice(index, 1); // remove the item from array2
      return false; // do not include in the difference
    }
    return true; // include in the difference
  });
}
console.log(difference(array1, array2)); // Output: [3]

const _url = 'http://localhost:3000/store/revolt-3?v=87'

const addRegionLanguage = (url, region, language) => {
  const _r = countryCodes.find(country => url.toLowerCase().indexOf("region=" + country.toLowerCase()) !== -1);
  const _l = i18n.locales.find(locale => url.toLowerCase().indexOf("/" + locale.toLowerCase()) !== -1);

  let formattedUrl = url;

  if(_r) {
    formattedUrl = formattedUrl.replace(new RegExp(`/${region}`, 'g'), "");
  }

  if (_l) {
    formattedUrl = formattedUrl.replace(new RegExp(`/${language}`, 'g'), "");
  }

  let parsedPathname = "";

  try {
    // @ts-ignore
    formattedUrl = new URL(formattedUrl)
    // @ts-ignore
    parsedPathname = formattedUrl.pathname;
  } catch (e) {
    parsedPathname = url;
  }

  const pathParts = parsedPathname.split("/").filter((part) => part);

  const newUrl = "/" + [
    language?.replace("/", ""),
    pathParts.join("/")
  ].filter(Boolean).join("/");

  // @ts-ignore
  return [newUrl, (formattedUrl?.origin || "") + newUrl]
}

console.log(addRegionLanguage(_url, undefined, undefined));
console.log(addRegionLanguage(_url, "US", "ja"));
console.log(addRegionLanguage("http://localhost:3000/ja/store/revolt-3?v=87", "US", "ja"));
console.log(addRegionLanguage("http://localhost:3000/ja/ja/ja/store/revolt-3?v=87&region=tw", "US", "ja"));

const serverSideData = { locale: 'en-US', params: { region: 'us', locale: 'ja' } }

const languages = i18n.locales;

console.log({ regions, languages })

/**
 * 
 * @param {*} serverSideData 
 * @returns 
 */
function getRegionLanguageFromServerSideData(serverSideData) {
  let { locale, params } = serverSideData;
  let { region, locale: lang } = params;

  let language = locale;

  if (languages.includes(lang)) {
    language = lang;
  }

  if (!countryCodes.includes(region)) {
    region = undefined;
  }

  return { region, language };
}

console.log(getRegionLanguageFromServerSideData(serverSideData));
console.log(getRegionLanguageFromServerSideData({ locale: 'en-US', params: { region: 'us', locale: 'kkkk' } }));
console.log(getRegionLanguageFromServerSideData({ locale: 'en-US', params: { region: 'us', locale: 'ko' } }));

function containsBracketsPair(str) {
  const regex = /\[([^\]]+)\]/;
  return regex.test(str);
}

console.log(containsBracketsPair("http://localhost:3000/[region]/[locale]/store/[product]?product=y60&v=193"));

const data = {
  "locales": [
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
    "zh-CN"
  ],
  "defaultLocale": "en-US"
};

// Convert the locales to a regex pattern
const pattern = data.locales
  .map(locale => locale.toLowerCase().replace('-', '-?')) // account for optional hyphen
  .join('|');

const regex = new RegExp(`/[^/]+/(${pattern})/checkout\\.json`, 'i'); // i flag for case-insensitive matching
const regexquerystring = new RegExp(`/[^/]+/(${pattern})/checkout\\.json`, 'i'); // i flag for case-insensitive matching


const wrongUrls = [
    "https://feature.hyte.com/l7ok3i43jf8t2e3r7l6uo/en-us/checkout.json?step=delivery",
    "https://feature.hyte.com/l7ok3i43jf8t2e3r7l6uo/ja/checkout.json",
    "https://checkout.hyte.com/22223i43jf8t2e3r7l6uo/ko/checkout.json",
    "https://hyte.com/22223i43rr8t2e3r7l6uo/zh-tw/checkout.json",
    "http://localhost:3000/development/zh-cn/checkout.json?step=delivery&region=en-us&locale=checkout"
];

const navigableUrls = wrongUrls.map(url => url.replace(regex, '/checkout'));

console.log(navigableUrls);