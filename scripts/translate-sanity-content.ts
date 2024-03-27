type SanityData = { [key: string]: any };
type Locale =
  | "en-US"
  | "en-GB"
  | "es"
  | "de"
  | "fr"
  | "pl"
  | "it"
  | "nl"
  | "ko"
  | "ja"
  | "zh-TW"
  | "zh-CN";

export const sanityLangMap = {
  "en-US": "enUS",
  "en-GB": "enGB",
  ja: "ja",
  es: "es",
  de: "de",
  fr: "fr",
  pl: "pl",
  it: "it",
  nl: "nl",
  ko: "ko",
  "zh-TW": "zhTW",
  "zh-CN": "zhCN",
};

const homepageData = [
  {
    _key: "f71d0d49ba80",
    title: "The Last of Us",
    titleGlobal: {
      enGB: "The Last of Us",
      it: "L'ultimo di noi",
      nl: "De laatsten van ons",
      de: "Der Letzte von uns",
      pl: "Ostatni z nas",
      zhTW: "《最後生還者》",
      ko: "라스트 오브 어스",
      ja: "私たちの最後",
      es: "El último de nosotros",
      enUS: {
        current: "The Last of Us",
        _type: "slug",
      },
      fr: "Le dernier d’entre nous",
      zhCN: "《最后生还者》",
    },
    button: {
      _type: "carouselButtonSelect",
      selector: "option1",
      linkButton: {
        button_info: {
          button_url: "https://www.google.com/",
          _type: "document",
          button_content: "Google",
          button_style: "blue",
          button_contentGlobal: {
            enGB: "Google",
            fr: "Google (en anglais)",
            zhCN: "谷歌",
            ko: "구글(Google)",
            zhTW: "谷歌",
            de: "Googeln",
            nl: "Googelen",
            pl: "Wyszukiwarka Google",
            ja: "ググる",
            enUS: {
              current: "Google",
              _type: "slug",
            },
            it: "Google (Google)",
            es: "Google (en inglés)",
          },
        },
      },
    },
    image: {
      desktopImage:
        "https://cdn.sanity.io/images/mqc7p4g4/staging/988ce8917aec439b57e36ce92ce1a214ff8baf7f-3993x1743.png",
      mobileImage:
        "https://cdn.sanity.io/images/mqc7p4g4/staging/8459bdcdcdd323059c09204de0da5e4ccac90044-1140x1800.png",
    },
    subtitleGlobal: {
      enUS: {
        current: "Custom Y60 build by Blue Horse",
        _type: "slug",
      },
      nl: "Custom Y60 gebouwd door Blue Horse",
      ja: "ブルーホースによるカスタムY60ビルド",
      zhTW: "藍馬定製的Y60",
      it: "Y60 personalizzato costruito da Blue Horse",
      fr: "Y60 personnalisé construit par Blue Horse",
      pl: "Custom Y60 zbudowany przez Blue Horse",
      ko: "Blue Horse의 커스텀 Y60 빌드",
      de: "Custom Y60 gebaut von Blue Horse",
      enGB: "Custom Y60 build by Blue Horse",
      es: "Y60 personalizado construido por Blue Horse",
      zhCN: "蓝马定制的Y60",
    },
    subtitle: "Custom Y60 build by Blue Horse",
  },
  {
    titleGlobal: {
      zhCN: "瑞安·图尔克",
      ko: "라이언 터크",
      enGB: "Ryan Tuerk",
      es: "Ryan Tuerk",
      nl: "Ryan Tuerk",
      de: "Ryan Tuerk",
      fr: "Ryan Tuerk",
      pl: "Ryan Tuerk",
      it: "Ryan Tuerk",
      ja: "ライアン・トゥアーク",
      enUS: {
        current: "Ryan Tuerk",
        _type: "slug",
      },
      zhTW: "里安·圖爾克",
    },
    button: {
      _type: "carouselButtonSelect",
      selector: "option1",
      linkButton: {
        button_info: {
          button_content: "Rolling",
          button_contentGlobal: {
            zhCN: "轧制",
            de: "Walzen ",
            ko: "롤링 ",
            enGB: "Rolling ",
            fr: "Roulage ",
            pl: "Toczenia ",
            ja: "ローリング",
            it: "Rullatura ",
            es: "Rodante ",
            nl: "Rollend ",
            enUS: {
              current: "Rolling ",
              _type: "slug",
            },
            zhTW: "軋制",
          },
          _type: "document",
        },
      },
    },
    image: {
      desktopImage:
        "https://cdn.sanity.io/images/mqc7p4g4/staging/705ab50471ed701942c14f43eebec16785811eb9-3993x1743.png",
      mobileImage:
        "https://cdn.sanity.io/images/mqc7p4g4/staging/246b4fe9b4d9a484af25fd84020030036c28ed2e-1140x1800.png",
    },
    subtitleGlobal: {
      nl: "Custom Y60 gebouwd door Blue Horse",
      de: "Custom Y60 gebaut von Blue Horse",
      zhTW: "藍馬定製的Y60",
      ko: "Blue Horse의 커스텀 Y60 빌드",
      ja: "ブルーホースによるカスタムY60ビルド",
      enUS: {
        current: "Custom Y60 build by Blue Horse",
        _type: "slug",
      },
      it: "Y60 personalizzato costruito da Blue Horse",
      es: "Y60 personalizado construido por Blue Horse",
      enGB: "Custom Y60 build by Blue Horse",
      pl: "Custom Y60 zbudowany przez Blue Horse",
      fr: "Y60 personnalisé construit par Blue Horse",
      zhCN: "蓝马定制的Y60",
    },
    subtitle: "Custom Y60 build by Blue Horse",
    _key: "e85c870659e4",
    title: "Ryan Tuerk",
  },
  {
    subtitleGlobal: {
      zhCN: "来到台北国际电脑展",
      enUS: {
        current: "Come to Computex",
        _type: "slug",
      },
      fr: "Venez au Computex",
      de: "Kommen Sie zur Computex",
      it: "Vieni al Computex",
      nl: "Kom naar Computex",
      ja: "コンピューテックスに来てください",
      enGB: "Come to Computex",
      pl: "Przyjdź na Computex",
      es: "Ven a Computex",
      ko: "컴퓨텍스에 오세요",
      zhTW: "來到臺北國際電腦展",
    },
    subtitle: "Come to Computex",
    _key: "24c353a66f3f",
    title: "Computex",
    titleGlobal: {
      zhCN: "台北国际电脑展",
      nl: "Computex",
      it: "Computex",
      zhTW: "臺北國際電腦展",
      fr: "Calcul",
      ja: "コンピューテックス",
      enUS: {
        _type: "slug",
        current: "Computex",
      },
      enGB: "Computex",
      pl: "Computex",
      es: "Computex",
      de: "Computex",
      ko: "컴퓨텍스",
    },
    button: {
      selector: "option1",
      linkButton: {
        button_info: {
          button_url: "http://localhost:3000/events/computex",
          _type: "document",
          button_content: "Visit",
          button_style: "blue",
          button_contentGlobal: {
            es: "Visitar",
            nl: "Bezoeken",
            zhTW: "訪問",
            enGB: "Visit",
            it: "Visita",
            ja: "訪問",
            fr: "Visite",
            enUS: {
              current: "Visit",
              _type: "slug",
            },
            zhCN: "访问",
            de: "Besuch",
            ko: "방문",
            pl: "Odwiedzać",
          },
        },
      },
      _type: "carouselButtonSelect",
    },
    image: {
      desktopImage:
        "https://cdn.sanity.io/images/mqc7p4g4/staging/cb70ac20700992c66772ce75f9bb5b0e29f1175b-3993x1743.png",
      mobileImage:
        "https://cdn.sanity.io/images/mqc7p4g4/staging/8f4271c696b9a93e948ee6e9bbf3777387ca8aa6-1140x1800.png",
    },
  },
];

const productPageData = [
  {
    "productOverview": [
      {
        "richText": [
          {
            "_type": "block",
            "style": "normal",
            "_key": "bfd4e2680ad2",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "5.. 4.. 3.. 2.. 1.. PLAY DICE! Get your dose of infinite fun with the all-new HAKOS BAELZ Limited Edition HYTE Y60 Case and Desk Pad Bundle!",
                "_key": "b88fbddcd3ca0"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " ",
                "_key": "b88fbddcd3ca1"
              }
            ]
          },
          {
            "_key": "0edd6896bc88",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "03cbdb3ff24b",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "style": "normal",
            "_key": "bd38538e33b8",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Capture all the ratty details of Bae in a cross-collaboration between iBUYPOWER, HOLOLIVE, and HYTE in an all-out every-angle-customized PC case (even down to the power button die). Every Hakos Baelz PC case purchase comes bundled with a matching large format HAKOS BAELZ desk pad (800x380mm) that would make Mr. Squeaks proud. Collect yours today! Extremely limited pre-orders are now available on HYTE.com and select distributors worldwide.",
                "_key": "a5462f454f00"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "8dd2ba5feb3c",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Artist: Rosuuri",
                "_key": "0c37f385d2a00"
              },
              {
                "marks": [],
                "text": "\n\nI’m Rosuuri, an illustrator who draws for game and publishing companies! I specialize in character design and illustrations for games, light novels, and illustration books. I post various illustrations on Twitter & Pixiv!\n\nキャラデザイナとフリーイラスイラストレーター活動中。 色々イラストをPixiv＆Twitterに投稿していますので,ぜひチェックしてください！",
                "_key": "0c37f385d2a01",
                "_type": "span"
              }
            ]
          },
          {
            "_key": "72227b9c9c88",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "b7f9a8b565b10",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          }
        ],
        "image": {
          "alt": "Hakos Baelz Y60 + Deskpad Bundle",
          "caption": "Hakos Baelz Y60 + Deskpad Bundle",
          "asset": {
            "_ref": "image-b72d368e09a2879d53aaef62b413cc890c3183f8-1221x1254-png",
            "_type": "reference"
          },
          "_type": "customImage"
        },
        "_type": "introContent",
        "_key": "62f016b60418"
      },
      {
        "countries": [
          {
            "_key": "37b1ea5868d1",
            "distributors": [
              {
                "_type": "distributor",
                "name": "オリオスペック",
                "_key": "bcdc2cccfcb3",
                "url": "https://www.oliospec.com/shop/shopdetail.html?brandcode=000000012322&search=y60&sort="
              },
              {
                "name": " Amazon JP",
                "_key": "9da8e71babe9",
                "url": "https://www.amazon.co.jp/dp/B0B5PRZM2C?me=A2ACHPZEDGY5TL",
                "_type": "distributor"
              },
              {
                "_type": "distributor",
                "name": "TSUKUMO",
                "_key": "aaf42499ab70",
                "url": "https://shop.tsukumo.co.jp/goods/1220000350274/"
              },
              {
                "_key": "2c7b1c05cc1c",
                "url": "https://www.pc-koubou.jp/products/detail.php?product_id=910652",
                "_type": "distributor",
                "name": "パソコン工房"
              },
              {
                "_type": "distributor",
                "name": "ビックカメラグループ",
                "_key": "80c97cc5b553",
                "url": "https://shop.tsukumo.co.jp/goods/1220000350274/"
              },
              {
                "url": "https://shop.tsukumo.co.jp/goods/1220000350274/",
                "_type": "distributor",
                "name": "ソフマップ",
                "_key": "f100a9cf42ed"
              }
            ],
            "_type": "country",
            "countryName": "Japan:"
          },
          {
            "distributors": [
              {
                "_type": "distributor",
                "name": "Nano Komputer",
                "_key": "4223b811d72f",
                "url": "https://www.tokopedia.com/nanokomputer/hyte-hakos-baelz-y60-deskpad-bundle-modern-aesthetic-case"
              },
              {
                "name": " Nexcor Computer",
                "_key": "2bcc515e2427",
                "url": "https://www.tokopedia.com/nexcorcomputer/casing-hyte-y60-hakos-baelz-deskpad-bundle",
                "_type": "distributor"
              },
              {
                "_type": "distributor",
                "name": "Tonix Computer",
                "_key": "97aa9609d16d",
                "url": "https://tonixcomputer.co.id/product/hyte-y60-hakos-baelz-y60-free-mousepad/"
              }
            ],
            "_type": "country",
            "countryName": "Indonesia:",
            "_key": "c20c6534a1a1"
          },
          {
            "_key": "1cd294429275",
            "distributors": [
              {
                "_type": "distributor",
                "name": "Alternate",
                "_key": "8b3d5fde0667",
                "url": "https://www.alternate.de/HYTE/Y60-HAKOS-BAELZ-CASE-BUNDLE-Tower-Geh%C3%A4use/html/product/1854323"
              }
            ],
            "_type": "country",
            "countryName": "Germany:"
          },
          {
            "distributors": [
              {
                "_type": "distributor",
                "name": "Alternate",
                "_key": "a4ebe8487cdd",
                "url": "https://www.alternate.fr/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323"
              }
            ],
            "_type": "country",
            "countryName": "France:",
            "_key": "a44f4c57430e"
          },
          {
            "distributors": [
              {
                "_type": "distributor",
                "name": "Alternate",
                "_key": "f354fc34087f",
                "url": "https://www.alternate.es/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323"
              }
            ],
            "_type": "country",
            "countryName": "Spain:",
            "_key": "debfab65611c"
          },
          {
            "distributors": [
              {
                "_key": "25d6fade017f",
                "url": "https://www.alternate.it/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323",
                "_type": "distributor",
                "name": "Alternate"
              }
            ],
            "_type": "country",
            "countryName": "Italy:",
            "_key": "e917d7df4061"
          },
          {
            "distributors": [
              {
                "_type": "distributor",
                "name": "Alternate",
                "_key": "c7c9d0435824",
                "url": "https://www.alternate.dk/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323"
              }
            ],
            "_type": "country",
            "countryName": "Denmark:",
            "_key": "4ddeed513c17"
          },
          {
            "distributors": [
              {
                "url": "https://www.alternate.at/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323",
                "_type": "distributor",
                "name": "Alternate",
                "_key": "39bb2d0c7a08"
              }
            ],
            "_type": "country",
            "countryName": "Austria:",
            "_key": "567e0a6b7b18"
          },
          {
            "distributors": [
              {
                "_type": "distributor",
                "name": "Alternate",
                "_key": "91f0a0698609",
                "url": "https://www.alternate.ch/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323"
              }
            ],
            "_type": "country",
            "countryName": "Switzerland:",
            "_key": "8ef739c254ad"
          },
          {
            "distributors": [
              {
                "_key": "f9348a69cf35",
                "url": "https://www.alternate.nl/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323",
                "_type": "distributor",
                "name": "Alternate"
              }
            ],
            "_type": "country",
            "countryName": "The Netherlands:",
            "_key": "1ea1b66f6397"
          },
          {
            "_key": "978a1c4a9385",
            "distributors": [
              {
                "_key": "5b8809aec809",
                "url": "https://www.alternate.lu/HYTE/Y60-HAKOS-BAELZ-CASE-BUNDLE-Tower-Geh%C3%A4use/html/product/1854323",
                "_type": "distributor",
                "name": "Alternate"
              }
            ],
            "_type": "country",
            "countryName": "Luxembourg:"
          },
          {
            "distributors": [
              {
                "_type": "distributor",
                "name": "Alternate",
                "_key": "705f9d8f4537",
                "url": "https://www.alternate.be/HYTE/HYTE-Y60-HAKOS-BAELZ-CASE-BUNDLE-ATX-tower-behuizing/html/product/1854323"
              }
            ],
            "_type": "country",
            "countryName": "Belgium:",
            "_key": "4af4c1c3c1a6"
          },
          {
            "_type": "country",
            "countryName": "Australia:",
            "_key": "f04cf72ae4f7",
            "distributors": [
              {
                "_key": "4ea5437b6256",
                "url": "https://www.pccasegear.com/products/58798/hyte-y60-tempered-glass-mid-tower-case-hakos-baelz-bundle",
                "_type": "distributor",
                "name": "PC Case Gear"
              }
            ]
          }
        ],
        "_key": "c20cbc5249e3",
        "anchor": "hakos-y60-dist",
        "_type": "productDistributors",
        "header": "Available worldwide from select resellers"
      },
      {
        "_type": "youtubeVideo",
        "header": " ",
        "_key": "7e309e9ba279",
        "url": "https://www.youtube.com/watch?time_continue=6&v=4NyFEHw5okk&feature=emb_logo"
      },
      {
        "features": [
          {
            "_key": "9efd0f19f16a",
            "_type": "feature",
            "name": "Panoramic Views",
            "description": "No corner pillar. The Y60 features a 3-piece panoramic tempered glass design for the ultimate photo and display potential. See your build the way it was meant to be seen from the left or right side of your desk with a simple turn."
          },
          {
            "_type": "feature",
            "name": "Exclusively Vertical GPU Mounted",
            "description": "Why would you want to see your graphics card any other way?",
            "_key": "08b50090f302"
          },
          {
            "_type": "feature",
            "name": "Included PCIE 4.0 Riser Cable",
            "description": "A protective riser cable canopy integrates beautifully into the case, allowing for half-height PCIE cards behind the throne of the vertical graphics card. The protective shroud is the first of its kind, made specifically for the Y60.",
            "_key": "54dd456a4053"
          },
          {
            "_type": "feature",
            "name": "Antechamber Construction",
            "description": "Segment cables from thermal components and turn your PC into a work of art.",
            "_key": "6924b86d4a44"
          },
          {
            "_key": "1f8bfb477da9",
            "_type": "feature",
            "name": "Cold Floor Cooling",
            "description": "Eliminate hot spots with sweeping lateral vents from fans tastefully tucked into the basement of the Y60."
          },
          {
            "name": "Included Fans",
            "description": "The three pre-installed Flow FE12 fans with fluid-dynamic bearings provide whisper-quiet operation.",
            "_key": "68b937669079",
            "_type": "feature"
          }
        ],
        "_type": "productFeatures",
        "header": "Product Features",
        "_key": "344a9d350b20"
      }
    ],
    "isTimeFrame": false,
    "_type": "productPage",
    "productName": "Hakos Baelz Y60 + Desk Pad Bundle",
    "productThumbnail": {
      "_type": "image",
      "alt": "Hakos Baelz Y60 + Desk Pad Bundle",
      "asset": {
        "_ref": "image-3cf98a5c6e8d776d038a12506d7bc2d767ac3a52-386x386-jpg",
        "_type": "reference"
      }
    },
    "skuName": "CS-HYTE-Y60-HB",
    "visible": true,
    "productCategory": "HYTE X Series",
    "onSale": true,
    "subTitle": "Modern Aesthetic Case",
    "productUrl": "/store/hakos-baelz-y60-case-deskpad-bundle",
    "productId": 139,
    "productPrice": "280",
    "_id": "bffc244a-8540-4894-9d47-25fb52232d25",
    "_updatedAt": "2023-08-01T06:35:23Z",
    "salePrice": "250",
    "productTechSpecs": [
      {
        "template": "No Image",
        "pdf": {
          "_type": "file",
          "asset": {
            "_ref": "file-62fae2f9a98a86e36e5536efe690b458ff0c741f-pdf",
            "_type": "reference"
          }
        },
        "footer": "* When using an air cooler rather than liquid cooler, HYTE recommends the installation of 2 additional intake fans (not included) on the side mount of the Y60 for optimal airflow.",
        "_type": "techSpecs",
        "header": "Tech Specs",
        "_key": "4714e0a5d0fd",
        "sections": [
          {
            "specs": [
              {
                "_type": "spec",
                "description": "Dual Chamber Mid-Tower ATX Case",
                "_key": "5504f20dcbc5",
                "title": " Type"
              },
              {
                "_type": "spec",
                "description": "60L",
                "_key": "7eb9f434321e",
                "title": "Volume"
              },
              {
                "_type": "spec",
                "description": "456mm (L) x 285mm (W) x 462mm (H)",
                "_key": "d86c008605ff",
                "title": "Case Dimensions"
              },
              {
                "title": "Case Materials",
                "_type": "spec",
                "description": "Tempered Glass, Steel, ABS",
                "_key": "f39b1662b6e9"
              },
              {
                "_type": "spec",
                "description": "White/Black, Black/Black, Red/Black",
                "_key": "53897fb1e953",
                "title": "Color"
              },
              {
                "_type": "spec",
                "description": "EATX, ATX, mATX, ITX",
                "_key": "796066b3737a",
                "title": "Motherboard Support"
              },
              {
                "_type": "spec",
                "description": "ATX up to 235mm in length",
                "_key": "6160290ea28d",
                "title": "Power Supply"
              },
              {
                "_type": "spec",
                "description": "375mm length, 75mm thick (60mm or less recommended for best cooling)",
                "_key": "8093331e77dd",
                "title": "Video Card Max Dimensions"
              },
              {
                "_type": "spec",
                "description": "Side: 2x 120/140mm Top: 3x 120mm Rear: 1x 120mm (1x 120mm, 1300 RPM included) Bottom: 2x 120mm/140mm (2x 120mm, 1300 RPM included) ",
                "_key": "4434234e0589",
                "title": "Fan Support"
              },
              {
                "_type": "spec",
                "description": "\tSide: 120, 140, 240, 280mm up to 150mm thick Top: 120, 240, 360mm up to 30mm thick Rear: 120mm ",
                "_key": "6b1a3a6c1194",
                "title": "Radiator Support"
              },
              {
                "_key": "014b5eaf9be9",
                "title": "CPU Cooler Height",
                "_type": "spec",
                "description": "160 mm*"
              },
              {
                "_type": "spec",
                "description": "2x 3.5\" HDD or 4x 2.5\" SSD",
                "_key": "2cc18982d065",
                "title": "Storage"
              },
              {
                "_type": "spec",
                "description": "3 + 6 half-height",
                "_key": "7d96fc2e6cc4",
                "title": "Expansion Slots"
              },
              {
                "description": "4.0 x 16 (included)",
                "_key": "f85a3270aa79",
                "title": "PCI Express Riser",
                "_type": "spec"
              }
            ],
            "_type": "section",
            "_key": "6046fb24b1fc",
            "title": "Tech Specs"
          },
          {
            "_key": "cd57399c8247",
            "title": "INTERFACES",
            "specs": [
              {
                "_type": "spec",
                "description": "2",
                "_key": "a0a8a7b7c8d7",
                "title": "Front USB 3.0"
              },
              {
                "_type": "spec",
                "description": "1",
                "_key": "707ababce36b",
                "title": "Front USB 3.2 Gen 2 Type-C"
              },
              {
                "_type": "spec",
                "description": "1",
                "_key": "ec45c9923367",
                "title": "Audio/Mic Jack"
              },
              {
                "_type": "spec",
                "description": "Bottom, Side, Top",
                "_key": "38d161a8ae1d",
                "title": "Dust Filters"
              },
              {
                "_type": "spec",
                "description": "None",
                "_key": "61e306444151",
                "title": "RGB Lighting"
              }
            ],
            "_type": "section"
          }
        ]
      }
    ],
    "freeShipping": {
      "mainCopy": "Free ground shipping in the continental United States.",
      "subCopy": "<strong>For orders outside US and Canada</strong>, please <a href=\"#hakos-y60-dist\">click here to find a retailer.</a>"
    },
    "_createdAt": "2022-08-26T02:21:50Z",
    "variant": [
      {
        "variantCategory": "PC Cases",
        "onSale": false,
        "_id": "b6b7a6ea-8c3e-4b38-ae02-e6b3455292ca",
        "variantUrl": "/store/hakos-baelz-y60-case-deskpad-bundle?v=133",
        "subTitle": "Modern Aesthetic Case",
        "variantId": 133,
        "_updatedAt": "2023-07-12T02:22:03Z",
        "variantSku": "CS-HYTE-Y60-HB",
        "parentProduct": {
          "_ref": "bffc244a-8540-4894-9d47-25fb52232d25",
          "_type": "reference"
        },
        "productThumbnail": {
          "alt": "Hakos Baelz Y60 + Desk Pad Bundle",
          "asset": {
            "_ref": "image-3cf98a5c6e8d776d038a12506d7bc2d767ac3a52-386x386-jpg",
            "_type": "reference"
          },
          "_type": "image"
        },
        "_type": "variantPage",
        "productVariantName": "Hakos Baelz Y60 + Desk Pad Bundle",
        "_createdAt": "2023-07-10T08:15:05Z",
        "variantPrice": "280",
        "_rev": "rmPspB4ovin2pBFcq2BvHm"
      }
    ],
    "googleProductType": "Electronics > Electronics Accessories > Computer Components > Desktop Computer & Server Cases",
    "productGallery": [
      {
        "asset": {
          "_ref": "image-cc192279672ed39fa50acd608f9573af94d6389f-1837x780-jpg",
          "_type": "reference"
        },
        "isHero": false,
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "2a94bf022111"
      },
      {
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "96fade962a82",
        "asset": {
          "_ref": "image-3f5e6487700240ec88ea2c230846c3dc681bb5e3-1837x780-jpg",
          "_type": "reference"
        },
        "isHero": false
      },
      {
        "isHero": false,
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "3cace63098be",
        "asset": {
          "_ref": "image-6768ce77a62c0b5f1d3ba0b8eac89a8890f84339-1837x780-jpg",
          "_type": "reference"
        }
      },
      {
        "isHero": false,
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "29e4147a1dc6",
        "asset": {
          "_ref": "image-5b5897fb074d6a1dad119880275121a13d808401-1837x780-jpg",
          "_type": "reference"
        }
      },
      {
        "asset": {
          "_ref": "image-5a36f572b50e7978cb4e032adca7366df89f10de-1837x780-jpg",
          "_type": "reference"
        },
        "isHero": false,
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "0a8a76623ea2"
      },
      {
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "e789d47a6c6b",
        "asset": {
          "_ref": "image-19a8396e5a5d5fcfba014f4bb4bb1a17f0199a87-1837x780-jpg",
          "_type": "reference"
        },
        "isHero": false,
        "_type": "productImage"
      },
      {
        "isHero": false,
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "a94a99022be8",
        "asset": {
          "_ref": "image-6a8d855895ae4ca152b0f8a3a8715f579c48a5d8-1837x780-jpg",
          "_type": "reference"
        }
      },
      {
        "isHero": false,
        "_type": "productImage",
        "alt": "HYTE - Hakos Baelz Y60 Limited Edition Case",
        "_key": "8c4077833f8d",
        "asset": {
          "_ref": "image-606342f125ca58b616cfe336b4d69f53cff854aa-1837x780-jpg",
          "_type": "reference"
        }
      }
    ],
    "_rev": "Pp5cHWxuC2jFClUK8drtoZ"
  }
];

const simplePageData = [
  {
    "_type": "simplePages",
    "pageTitleGlobal": {
      "it": "Servizio di garanzia",
      "nl": "Garantieservice",
      "enGB": "Warranty Service",
      "ja": "保証サービス",
      "enUS": {
        "current": "Warranty Service",
        "_type": "slug"
      },
      "fr": "Service de garantie",
      "zhCN": "保修服务",
      "de": "Garantie-Service",
      "es": "Servicio de garantía",
      "pl": "Serwis gwarancyjny",
      "ko": "보증 서비스",
      "zhTW": "保修服務"
    },
    "_id": "f962e553-590c-469c-abe4-8619a2c08e19",
    "contentGlobal": {
      "zhTW": [
        {
          "_type": "block",
          "style": "h1",
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "保修服務",
              "_key": "0c69c836304a0"
            }
          ]
        },
        {
          "markDefs": [
            {
              "_type": "link",
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "我們保證每個HYTE產品在原始發票日期起的時間內不會出現材料或工藝缺陷。HYTE對運輸過程中發生的任何問題概不負責，例如損壞，丟失和盜竊。這些問題將由我們的合作夥伴Route負責。欲瞭解更多資訊，請訪問此處：",
              "_key": "7c1f777751ca0"
            },
            {
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1"
            },
            {
              "_key": "7c1f777751ca2",
              "_type": "span",
              "marks": [],
              "text": "要通過Route提出索賠，請點擊此處："
            },
            {
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1"
        },
        {
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "我們產品的保修期如下：",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "style": "normal",
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "_key": "28cf6dc241600",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "電腦機箱保修"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "： 3 年\n",
              "_key": "28cf6dc241601"
            },
            {
              "text": "電源：",
              "_key": "d7df22a23be40",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": "10年\n",
              "_key": "d7df22a23be41"
            },
            {
              "_key": "d27e2115dc2e",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "耳機"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "： 3 年\n",
              "_key": "ae6be04c2a59"
            },
            {
              "_key": "65db89c7f38c",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "電腦配件（FA12 風扇組、PCIE40 轉接卡電纜、CNVS）"
            },
            {
              "_key": "7a36388934a6",
              "_type": "span",
              "marks": [],
              "text": "： 3 年\n\n在此期間，HYTE將根據HYTE的選擇，用新的或翻新的零件維修或更換原裝HYTE有缺陷的零件，不向您收取任何費用。所有由HYTE或其授權服務中心更換的原裝零件均歸HYTE所有。您有責任按當前費率支付本有限保修範圍之外的任何服務或維修費用。如果您直接從HYTE購買了HYTE產品，請致電（833）GET-HYTE聯繫客戶服務以啟動保修流程。\n\n如果您從其他零售商處購買了HYTE產品，則通過原始購買點解決保修索賠可能會更快。由於保修或退貨期限可能因您購買產品的地點而異，因此我們建議您先查看零售商的退貨政策。"
            }
          ],
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "保修條件",
              "_key": "c2e5a805f70d0"
            }
          ]
        },
        {
          "_key": "50948518a083",
          "markDefs": [],
          "children": [
            {
              "text": "上述有限保修受以下條件的約束：",
              "_key": "05ca6dbead4f0",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "本保修僅適用於HYTE分銷的產品，僅在產品在美國購買和運營時才有效。（在美國境內，包括美國 48 個州、阿拉斯加和夏威夷。",
              "_key": "cdaaa24c99720",
              "_type": "span",
              "marks": []
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "本保修僅涵蓋機箱及其元件的正常使用。如果因以下原因導致任何損壞或缺陷，HYTE不承擔本保修責任：（i）誤用，濫用，疏忽，運輸或安裝不當;（ii） 火災、洪水、閃電或電流不當等災害;或 （iii） 由授權 HYTE 代表以外的任何人提供服務或更改。",
              "_key": "977e1f5d89970"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9",
          "listItem": "number"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "如果您的產品被退回HYTE進行維修 - 如果沒有發現材料或工藝缺陷，您將負責退貨運費和當前的人工費用。",
              "_key": "76503d2417500",
              "_type": "span",
              "marks": []
            }
          ]
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "您必須保留銷售單或其他購買憑證才能獲得保修服務。",
              "_key": "c9d7be39d3e50"
            }
          ]
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "您必須在帳戶頁面上註冊產品以獲得保修。",
              "_key": "9934a290b83a0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "產品的序列號必須未被篡改且清晰可辨。",
              "_key": "03107faa525c0",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a",
          "listItem": "number"
        },
        {
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "為履行本保修而提供給購買者的任何更換部件，將不授予保修延期。",
              "_key": "0ab15da65bd40"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "text": "獲得保修服務的程式",
              "_key": "333e95969fc00",
              "_type": "span",
              "marks": [
                "strong"
              ]
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94"
        },
        {
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_key": "2153de296bd30",
              "_type": "span",
              "marks": [],
              "text": "RMA（退貨授權）政策：如果需要維修，客戶必須獲得退貨ID並提供購買證明。退貨ID和服務僅由HYTE或授權服務中心提供。30 天后（從原始購買日期開始）退回維修的任何物品的任何運費均由客戶承擔。所有退回的部件必須在包裝外部清楚地寫有退貨 ID，以及詳細說明問題的信函和原始購買憑證的副本。不接受貨到付款包裹。如果沒有在包裹外部寫上退貨ID號，則不接受任何包裹。退貨編號自簽發之日起 30 天內有效。如果您的產品有任何問題，請按照以下程序獲取服務："
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "如果產品必須維修，將發出退貨號碼以運送到我們的維修站。請按照HYTE技術支持人員給出的說明運送您的產品。HYTE不接受任何沒有退貨ID號的貨件。",
              "_key": "9cbb6a25aa550",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "按照包裝說明中的說明，將商品包裝在原包裝盒或保護良好的包裝盒中。在包裝外清楚地寫下退貨ID非常重要。HYTE將不支付美國大陸以外的退貨運費，包括夏威夷，阿拉斯加，關島和波多黎各。將產品連同您的銷售單或其他購買證明的副本、您的姓名、位址、電話號碼、問題描述以及您獲得的退貨 ID 一起運送至：\n\n海特服務中心\nRMA#________ 529\nN.鮑德溫公園大道，工業城，CA 91746，美國",
              "_key": "d17e415985ff0",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "收到產品后，HYTE將維修或更換您的產品（由HYTE自行決定），並將在2周內通過FedEx / UPS將其寄回給您（取決於零件可用性）。",
              "_key": "3202ccca88820"
            }
          ]
        },
        {
          "style": "normal",
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "text": "\nHYTE不作任何明示或暗示的保證或陳述，包括但不限於對適銷性、特定用途的適用性或對任何製造商的產品或檔、其品質、性能、適銷性、特定用途的適用性或符合任何陳述或描述的符合性的保證。",
              "_key": "da45441387ed",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "價格、規格和條款如有更改，恕不另行通知。HYTE不對排版和/或攝影錯誤負責。",
              "_key": "dc08a7783489"
            }
          ],
          "_type": "block"
        }
      ],
      "unused": {
        "current": "translated!hwGEmpUxuqt4RcZW",
        "_type": "slug"
      },
      "es": [
        {
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Servicio de garantía",
              "_key": "0c69c836304a0"
            }
          ],
          "_type": "block",
          "style": "h1"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_key": "a0e0df0bfc06",
              "_type": "link",
              "href": "https://route.com/terms-and-conditions"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Garantizamos cada producto HYTE contra defectos en materiales o mano de obra en períodos a partir de la fecha original de la factura. HYTE no será responsable de ningún problema que ocurra durante el tránsito, como daños, pérdidas y robos. Estos temas serán cubiertos por nuestro socio, Route. Para obtener más información, vaya aquí: ",
              "_key": "7c1f777751ca0"
            },
            {
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1",
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": " Para presentar una reclamación a través de Route, vaya aquí: ",
              "_key": "7c1f777751ca2"
            },
            {
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3"
            }
          ]
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "El período de garantía de nuestros productos es el siguiente:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "85eb2dc52092",
          "markDefs": []
        },
        {
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "text": "Garantía de la caja de PC",
              "_key": "28cf6dc241600",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_key": "28cf6dc241601",
              "_type": "span",
              "marks": [],
              "text": ": 3 años\n"
            },
            {
              "_key": "d7df22a23be40",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Fuente de alimentación:"
            },
            {
              "_key": "d7df22a23be41",
              "_type": "span",
              "marks": [],
              "text": " 10 años\n"
            },
            {
              "_key": "d27e2115dc2e",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Auriculares"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " : 3 años\n",
              "_key": "ae6be04c2a59"
            },
            {
              "_key": "65db89c7f38c",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Accesorios para PC (FA12 Fan pack, cable elevador PCIE40, CNVS)"
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3 años\n\nDurante este período, HYTE reparará o reemplazará las piezas defectuosas originales de HYTE con piezas nuevas o reacondicionadas a opción de HYTE, sin cargo para usted. Todas las piezas originales reemplazadas por HYTE o sus centros de servicio autorizados, pasan a ser propiedad de HYTE. Usted es responsable del pago, a las tarifas actuales, de cualquier servicio o reparación fuera del alcance de esta garantía limitada. Si compró un producto HYTE directamente de HYTE, comuníquese con el servicio al cliente al (833) GET-HYTE para iniciar el proceso de garantía.\n\nSi compró un producto HYTE de otro minorista, puede ser más rápido resolver su reclamo de garantía a través de su punto de compra original. Debido a que la garantía o el período de devolución pueden variar según el lugar donde compró el producto, le recomendamos que primero consulte la política de devolución del minorista.",
              "_key": "7a36388934a6"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Condiciones de garantía",
              "_key": "c2e5a805f70d0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a"
        },
        {
          "children": [
            {
              "_key": "05ca6dbead4f0",
              "_type": "span",
              "marks": [],
              "text": "La Garantía Limitada anterior está sujeta a las siguientes condiciones:"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083",
          "markDefs": []
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Esta garantía se extiende solo a los productos distribuidos por HYTE y es efectiva solo si los productos se compran y operan en los EE. UU. (Dentro de los EE.UU., incluyendo los 48 estados de EE.UU., Alaska y Hawái.)",
              "_key": "cdaaa24c99720"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": []
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Esta garantía cubre solo el uso normal de la caja y sus componentes. HYTE no será responsable bajo esta garantía si cualquier daño o defecto resulta de (i) mal uso, abuso, negligencia, envío o instalación inadecuados; (ii) desastres tales como incendios, inundaciones, rayos o corriente eléctrica inadecuada; o (iii) servicio o alteración por parte de cualquier persona que no sea un representante autorizado de HYTE.",
              "_key": "977e1f5d89970"
            }
          ]
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "En el caso de que su producto sea devuelto a HYTE para su reparación, si no se encuentra ningún defecto en los materiales o la mano de obra, usted será responsable del envío de devolución y los cargos actuales de mano de obra.",
              "_key": "76503d2417500"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "Debe conservar su factura de venta u otro comprobante de compra para recibir el servicio de garantía.",
              "_key": "c9d7be39d3e50",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Debe registrar su producto para la garantía en la página de su cuenta.",
              "_key": "9934a290b83a0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": []
        },
        {
          "style": "normal",
          "_key": "504ccfe1332a",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "El número de serie del producto debe ser inalterado y claramente identificable.",
              "_key": "03107faa525c0"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "No se otorgará ninguna extensión de garantía para ninguna pieza de repuesto suministrada al comprador en cumplimiento de esta garantía.",
              "_key": "0ab15da65bd40"
            }
          ],
          "level": 1
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Procedimientos para obtener el servicio de garantía",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94",
          "markDefs": []
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Política de RMA (Autorización de devolución de mercancía): Si se requieren reparaciones, el cliente debe obtener una identificación de devolución y proporcionar un comprobante de compra. El ID de devolución y los servicios son prestados únicamente por HYTE o Centros de servicio autorizados. Cualquier costo de envío después de 30 días (a partir de la fecha original de compra) en cualquier artículo devuelto para su reparación es responsabilidad del cliente. Todas las piezas devueltas deben tener una identificación de devolución escrita claramente en el exterior del paquete junto con una carta que detalle los problemas y una copia del comprobante de compra original. No se aceptarán paquetes contra reembolso. No se aceptará ningún paquete sin un número de identificación de devolución escrito en el exterior del paquete. Los números de devolución solo son válidos durante 30 días a partir de la fecha de emisión. Si tiene algún problema con su producto, siga estos procedimientos para obtener el servicio:",
              "_key": "2153de296bd30"
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Si el producto debe ser reparado, se emitirá un número de devolución para su envío a nuestro depósito de reparación. Siga las instrucciones dadas por el personal de soporte técnico de HYTE para enviar su producto. HYTE no aceptará ningún envío sin un número de identificación de devolución.",
              "_key": "9cbb6a25aa550"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Empaque el producto en su caja original o en una caja bien protegida, como se describe en las Instrucciones de embalaje. Es muy importante que escriba el ID de devolución claramente fuera del paquete. HYTE no pagará los costos de envío de devolución fuera de los EE. UU. continentales, incluidos Hawái, Alaska, Guam y Puerto Rico. Envíe el producto con una copia de su factura de venta u otro comprobante de compra, su nombre, dirección, número de teléfono, descripción del problema (s) y la identificación de devolución que ha obtenido a:\n\nCentro de servicio HYTE \nRMA#___ 529 \nN. Baldwin Park Blvd, Ciudad de la Industria, CA 91746, Estados Unidos",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970"
        },
        {
          "children": [
            {
              "_key": "3202ccca88820",
              "_type": "span",
              "marks": [],
              "text": "Al recibir el producto, HYTE reparará o reemplazará su producto (a discreción de HYTE) y se lo enviará de vuelta dentro de las 2 semanas (dependiendo de la disponibilidad de piezas) a través de FedEx/UPS."
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": []
        },
        {
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE no ofrece ninguna garantía o representación, ya sea expresa o implícita, incluidas, entre otras, las garantías de comerciabilidad, idoneidad para un propósito particular o conformidad con cualquier representación o descripción con respecto al producto o documentación de cualquier fabricante, su calidad, rendimiento, comerciabilidad, idoneidad para un propósito particular o conformidad con cualquier representación o descripción.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "El precio, la especificación y los términos están sujetos a cambios sin previo aviso. HYTE no se hace responsable de errores en tipografía y/o fotografía.",
              "_key": "dc08a7783489"
            }
          ]
        }
      ],
      "nl": [
        {
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_key": "0c69c836304a0",
              "_type": "span",
              "marks": [],
              "text": "Garantieservice"
            }
          ],
          "_type": "block",
          "style": "h1"
        },
        {
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_key": "a0e0df0bfc06",
              "_type": "link",
              "href": "https://route.com/terms-and-conditions"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Wij garanderen elk HYTE-product tegen materiaal- of fabricagefouten in perioden vanaf de oorspronkelijke factuurdatum. HYTE is niet verantwoordelijk voor eventuele problemen die zich voordoen tijdens het transport, zoals schade, verlies en diefstal. Deze kwesties worden behandeld door onze partner, Route. Voor meer informatie kunt u hier terecht: ",
              "_key": "7c1f777751ca0"
            },
            {
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1",
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ]
            },
            {
              "_key": "7c1f777751ca2",
              "_type": "span",
              "marks": [],
              "text": " Om een claim in te dienen via Route, gaat u hierheen: "
            },
            {
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "style": "normal",
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "De garantieperiode voor onze producten is als volgt:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block"
        },
        {
          "markDefs": [],
          "children": [
            {
              "marks": [
                "strong"
              ],
              "text": "PC Case Garantie",
              "_key": "28cf6dc241600",
              "_type": "span"
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3 Jaar\n",
              "_key": "28cf6dc241601"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Voeding:",
              "_key": "d7df22a23be40"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " 10 jaar\n",
              "_key": "d7df22a23be41"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Headsets",
              "_key": "d27e2115dc2e"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " : 3 Jaar\n",
              "_key": "ae6be04c2a59"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC-accessoires (FA12 Fan pack, PCIE40 Riser kabel, CNVS)",
              "_key": "65db89c7f38c"
            },
            {
              "text": ": 3 Jaar\n\nGedurende deze periode zal HYTE originele hyte defecte onderdelen repareren of vervangen door nieuwe of gereviseerde onderdelen naar keuze van HYTE, zonder kosten voor u. Alle originele onderdelen die door HYTE of haar geautoriseerde servicecentra worden vervangen, worden eigendom van HYTE. U bent verantwoordelijk voor de betaling, tegen de huidige tarieven, voor elke service of reparatie buiten het bereik van deze beperkte garantie. Als u een HYTE-product rechtstreeks bij HYTE hebt gekocht, neemt u contact op met de klantenservice op (833) GET-HYTE om het garantieproces te starten.\n\nAls u een HYTE-product bij een andere winkel hebt gekocht, kan het sneller zijn om uw garantieclaim op te lossen via uw oorspronkelijke aankooppunt. Omdat de garantie of retourperiode kan variëren, afhankelijk van waar u het product hebt gekocht, raden we u aan eerst het retourbeleid van de winkelier te controleren.",
              "_key": "7a36388934a6",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "3312c409bf1a"
        },
        {
          "children": [
            {
              "marks": [
                "strong"
              ],
              "text": "Garantievoorwaarden",
              "_key": "c2e5a805f70d0",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "De bovenstaande beperkte garantie is onderworpen aan de volgende voorwaarden:",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083"
        },
        {
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Deze garantie geldt alleen voor producten die door HYTE worden gedistribueerd en is alleen van kracht als de producten in de VS worden gekocht en gebruikt. (Binnen de VS, inclusief 48 staten, Alaska en Hawaï.)",
              "_key": "cdaaa24c99720"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Deze garantie dekt alleen normaal gebruik van de behuizing en de onderdelen ervan. HYTE is niet aansprakelijk onder deze garantie als enige schade of defect het gevolg is van (i) verkeerd gebruik, misbruik, verwaarlozing, onjuiste verzending of installatie; ii) rampen zoals brand, overstroming, bliksem of onjuiste elektrische stroom; of (iii) service of wijziging door iemand anders dan een geautoriseerde HYTE-vertegenwoordiger.",
              "_key": "977e1f5d89970"
            }
          ],
          "level": 1
        },
        {
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "In het geval dat uw product wordt geretourneerd naar HYTE voor reparatie - als er geen defect in materialen of vakmanschap wordt gevonden, bent u verantwoordelijk voor retourzending en huidige arbeidskosten.",
              "_key": "76503d2417500"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "U moet uw verkoopfactuur of ander aankoopbewijs bewaren om garantieservice te ontvangen.",
              "_key": "c9d7be39d3e50",
              "_type": "span"
            }
          ],
          "level": 1
        },
        {
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "U moet uw product registreren voor garantie op uw accountpagina.",
              "_key": "9934a290b83a0",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "children": [
            {
              "marks": [],
              "text": "Het serienummer van het product moet onaangetast en duidelijk identificeerbaar zijn.",
              "_key": "03107faa525c0",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a",
          "listItem": "number",
          "markDefs": []
        },
        {
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Er wordt geen garantieverlenging verleend voor vervangende onderdelen die aan de koper worden geleverd ter uitvoering van deze garantie.",
              "_key": "0ab15da65bd40"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "761fc28eeb94",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Procedures voor het verkrijgen van garantieservice",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_key": "2153de296bd30",
              "_type": "span",
              "marks": [],
              "text": "RMA-beleid (Returning Merchandise Authorization): Als reparaties vereist zijn, moet de klant een retour-ID verkrijgen en een aankoopbewijs overleggen. Retour-ID en services worden alleen geleverd door HYTE of geautoriseerde servicecentra. Eventuele verzendkosten na 30 dagen (vanaf de oorspronkelijke aankoopdatum) op elk artikel dat voor reparatie wordt geretourneerd, zijn de verantwoordelijkheid van de klant. Alle geretourneerde onderdelen moeten een retour-ID hebben dat duidelijk op de buitenkant van het pakket is geschreven, samen met een brief met details over de problemen en een kopie van het originele aankoopbewijs. Er worden geen rembourspakketten geaccepteerd. Geen enkel pakket wordt geaccepteerd zonder een retour-ID-nummer dat op de buitenkant van het pakket staat. Retournummers zijn slechts 30 dagen geldig vanaf de datum van uitgifte. Mocht u problemen hebben met uw product, volg dan deze procedures om de service te verkrijgen:"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Als het product moet worden gerepareerd, wordt een retournummer afgegeven voor verzending naar ons reparatiedepot. Volg de instructies van het technische ondersteuningspersoneel van HYTE om uw product te verzenden. HYTE accepteert geen zendingen zonder retour-ID-nummer.",
              "_key": "9cbb6a25aa550"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number"
        },
        {
          "_key": "6b02e4337970",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Verpak het product in de originele doos of een goed beschermde doos, zoals beschreven in de verpakkingsinstructies. Het is erg belangrijk dat u de retour-ID duidelijk buiten het pakket schrijft. HYTE betaalt geen retourverzendkosten buiten het vasteland van de VS, waaronder Hawaï, Alaska, Guam en Puerto Rico. Verzend het product met een kopie van uw verkoopfactuur of ander aankoopbewijs, uw naam, adres, telefoonnummer, beschrijving van het probleem (en) en het retour-ID dat u hebt verkregen naar:\n\nHYTE Service Center \nRMA#____________ 529 \nN. Baldwin Park Blvd, City of Industry, CA 91746, Verenigde Staten",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Na ontvangst van het product zal HYTE uw product repareren of vervangen (naar goeddunken van HYTE) en het binnen 2 weken naar u terugsturen (afhankelijk van de beschikbaarheid van onderdelen) via FedEx/UPS.",
              "_key": "3202ccca88820"
            }
          ],
          "level": 1
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE geeft geen garantie of verklaring, expliciet of impliciet, inclusief maar niet beperkt tot garanties van verkoopbaarheid, geschiktheid voor een bepaald doel of conformiteit met enige verklaring of beschrijving met betrekking tot het product of de documentatie van een fabrikant, de kwaliteit, prestaties, verkoopbaarheid, geschiktheid voor een bepaald doel of conformiteit met een verklaring of beschrijving.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "4f0153df7649"
        },
        {
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Prijs, specificaties en voorwaarden kunnen zonder voorafgaande kennisgeving worden gewijzigd. HYTE is niet verantwoordelijk voor fouten in typografie en/of fotografie.",
              "_key": "dc08a7783489"
            }
          ],
          "_type": "block",
          "style": "normal"
        }
      ],
      "zhCN": [
        {
          "style": "h1",
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "保修服务",
              "_key": "0c69c836304a0"
            }
          ],
          "_type": "block"
        },
        {
          "markDefs": [
            {
              "_type": "link",
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "text": "我们保证每个HYTE产品在原始发票日期起的时间内不会出现材料或工艺缺陷。HYTE对运输过程中发生的任何问题概不负责，例如损坏，丢失和盗窃。这些问题将由我们的合作伙伴Route负责。欲了解更多信息，请访问此处：",
              "_key": "7c1f777751ca0",
              "_type": "span",
              "marks": []
            },
            {
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1"
            },
            {
              "_key": "7c1f777751ca2",
              "_type": "span",
              "marks": [],
              "text": "要通过Route提出索赔，请点击此处："
            },
            {
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3",
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ]
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "我们产品的保修期如下：",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "85eb2dc52092",
          "markDefs": []
        },
        {
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "电脑机箱保修",
              "_key": "28cf6dc241600"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "： 3 年\n",
              "_key": "28cf6dc241601"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "电源：",
              "_key": "d7df22a23be40"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "10年\n",
              "_key": "d7df22a23be41"
            },
            {
              "marks": [
                "strong"
              ],
              "text": "耳机",
              "_key": "d27e2115dc2e",
              "_type": "span"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "： 3 年\n",
              "_key": "ae6be04c2a59"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "电脑配件（FA12 风扇组、PCIE40 转接卡电缆、CNVS）",
              "_key": "65db89c7f38c"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "： 3 年\n\n在此期间，HYTE将根据HYTE的选择，用新的或翻新的零件维修或更换原装HYTE有缺陷的零件，不向您收取任何费用。所有由HYTE或其授权服务中心更换的原装零件均归HYTE所有。您有责任按当前费率支付本有限保修范围之外的任何服务或维修费用。如果您直接从HYTE购买了HYTE产品，请致电（833）GET-HYTE联系客户服务以启动保修流程。\n\n如果您从其他零售商处购买了HYTE产品，则通过原始购买点解决保修索赔可能会更快。由于保修或退货期限可能因您购买产品的地点而异，因此我们建议您先查看零售商的退货政策。",
              "_key": "7a36388934a6"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "保修条件",
              "_key": "c2e5a805f70d0"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "50948518a083",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "上述有限保修受以下条件的约束：",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "本保修仅适用于HYTE分销的产品，仅在产品在美国购买和运营时才有效。（在美国境内，包括美国 48 个州、阿拉斯加和夏威夷。",
              "_key": "cdaaa24c99720"
            }
          ],
          "level": 1
        },
        {
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "977e1f5d89970",
              "_type": "span",
              "marks": [],
              "text": "本保修仅涵盖机箱及其组件的正常使用。如果因以下原因导致任何损坏或缺陷，HYTE不承担本保修责任：（i）误用，滥用，疏忽，运输或安装不当;（ii） 火灾、洪水、闪电或电流不当等灾害;或 （iii） 由授权 HYTE 代表以外的任何人提供服务或更改。"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "如果您的产品被退回HYTE进行维修 - 如果没有发现材料或工艺缺陷，您将负责退货运费和当前的人工费用。",
              "_key": "76503d2417500"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "您必须保留销售单或其他购买凭证才能获得保修服务。",
              "_key": "c9d7be39d3e50",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "您必须在帐户页面上注册产品以获得保修。",
              "_key": "9934a290b83a0",
              "_type": "span",
              "marks": []
            }
          ]
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "产品的序列号必须未被篡改且清晰可辨。",
              "_key": "03107faa525c0",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a"
        },
        {
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "为履行本保修而提供给购买者的任何更换部件，将不授予保修延期。",
              "_key": "0ab15da65bd40",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "获得保修服务的程序",
              "_key": "333e95969fc00"
            }
          ]
        },
        {
          "children": [
            {
              "_key": "2153de296bd30",
              "_type": "span",
              "marks": [],
              "text": "RMA（退货授权）政策：如果需要维修，客户必须获得退货 ID 并提供购买证明。退货ID和服务仅由HYTE或授权服务中心提供。30 天后（从原始购买日期开始）退回维修的任何物品的任何运费均由客户承担。所有退回的部件必须在包装外部清楚地写有退货 ID，以及详细说明问题的信函和原始购买凭证的副本。不接受货到付款包裹。如果没有在包裹外部写上退货 ID 号，则不接受任何包裹。退货编号自签发之日起 30 天内有效。如果您的产品有任何问题，请按照以下程序获取服务："
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "11804807ebcf",
          "markDefs": []
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "如果产品必须维修，将发出退货号码以运送到我们的维修站。请按照HYTE技术支持人员给出的说明运送您的产品。HYTE不接受任何没有退货ID号的货件。",
              "_key": "9cbb6a25aa550"
            }
          ]
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "按照包装说明中的说明，将商品包装在原包装盒或保护良好的包装盒中。在包装外清楚地写下退货 ID 非常重要。HYTE将不支付美国大陆以外的退货运费，包括夏威夷，阿拉斯加，关岛和波多黎各。将产品连同您的销售单或其他购买证明的副本、您的姓名、地址、电话号码、问题描述以及您获得的退货 ID 一起运送至：\n\n海特服务中心\nRMA#________ 529\nN.鲍德温公园大道，工业城，CA 91746，美国",
              "_key": "d17e415985ff0"
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_key": "3202ccca88820",
              "_type": "span",
              "marks": [],
              "text": "收到产品后，HYTE将维修或更换您的产品（由HYTE自行决定），并将在2周内通过FedEx / UPS将其寄回给您（取决于零件可用性）。"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number"
        },
        {
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "\nHYTE不作任何明示或暗示的保证或陈述，包括但不限于对适销性、特定用途的适用性或对任何制造商的产品或文件、其质量、性能、适销性、特定用途的适用性或符合任何陈述或描述的符合性的保证。",
              "_key": "da45441387ed",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "4f0153df7649"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "价格、规格和条款如有更改，恕不另行通知。HYTE不对排版和/或摄影错误负责。",
              "_key": "dc08a7783489"
            }
          ]
        }
      ],
      "enGB": [
        {
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Warranty Service",
              "_key": "0c69c836304a0"
            }
          ],
          "_type": "block",
          "style": "h1"
        },
        {
          "markDefs": [
            {
              "_key": "a0e0df0bfc06",
              "_type": "link",
              "href": "https://route.com/terms-and-conditions"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "We warrant each HYTE product against defects in materials or workmanship in periods from the original date of invoice. HYTE will not be responsible for any issues that occur during transit such as damage, loss, and theft. These issues will be covered by our partner, Route. For more information please go here: ",
              "_key": "7c1f777751ca0"
            },
            {
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1",
              "_type": "span"
            },
            {
              "_key": "7c1f777751ca2",
              "_type": "span",
              "marks": [],
              "text": " To file a claim through Route, please go here: "
            },
            {
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "The warranty period for our products are as follows:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "85eb2dc52092",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC Case Warranty",
              "_key": "28cf6dc241600"
            },
            {
              "marks": [],
              "text": ": 3 Years\n",
              "_key": "28cf6dc241601",
              "_type": "span"
            },
            {
              "_key": "d7df22a23be40",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Power Supply:"
            },
            {
              "_key": "d7df22a23be41",
              "_type": "span",
              "marks": [],
              "text": " 10 Years\n"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Headsets",
              "_key": "d27e2115dc2e"
            },
            {
              "text": " : 3 Years\n",
              "_key": "ae6be04c2a59",
              "_type": "span",
              "marks": []
            },
            {
              "_key": "65db89c7f38c",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC Accessories (FA12 Fan pack, PCIE40 Riser cable, CNVS)"
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3 Years\n\nDuring this period, HYTE will repair or replace original HYTE defective parts with new or reconditioned parts at HYTE’s option, without charge to you. All original parts replaced by HYTE or its authorized service centers, become the property of HYTE. You are responsible for the payment, at current rates, for any service or repair outside the scope of this limited warranty. If you purchased a HYTE product directly from HYTE, contact customer service at (833) GET-HYTE to initiate the warranty process.\n\nIf you purchased a HYTE product from another retailer, it may be faster to solve your warranty claim through your original point of purchase. Because the warranty or return period may vary depending on where you purchased the product, we recommend checking the return policy of the retailer first.",
              "_key": "7a36388934a6"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "3312c409bf1a"
        },
        {
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "marks": [
                "strong"
              ],
              "text": "Warranty Conditions",
              "_key": "c2e5a805f70d0",
              "_type": "span"
            }
          ],
          "_type": "block"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_key": "05ca6dbead4f0",
              "_type": "span",
              "marks": [],
              "text": "The above Limited Warranty is subject to the following conditions:"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083"
        },
        {
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "This warranty extends only to products distributed by HYTE is effective only if the products are purchased and operated in the USA. (Within the USA including US 48 States, Alaska and Hawaii.)",
              "_key": "cdaaa24c99720",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "This warranty covers only normal use of the case, and its components. HYTE shall not be liable under this warranty if any damage or defect results from (i) misuse, abuse, neglect, improper shipping or installation; (ii) disasters such as fire, flood, lightning or improper electric current; or (iii) service or alteration by anyone other than an authorized HYTE representative.",
              "_key": "977e1f5d89970"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9"
        },
        {
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "In the event that your product is returned to HYTE for repair – should no defect in materials or workmanship be found, you will be responsible for return shipping and current labor charges.",
              "_key": "76503d2417500"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "You must retain your bill of sale or other proof of purchase to receive warranty service.",
              "_key": "c9d7be39d3e50"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "You must register your product for warranty on your account page.",
              "_key": "9934a290b83a0"
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "The product's serial number must be untampered with and clearly identifiable.",
              "_key": "03107faa525c0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a",
          "listItem": "number"
        },
        {
          "markDefs": [],
          "children": [
            {
              "text": "No warranty extension will be granted for any replacement part(s) furnished to the purchaser in fulfillment of this warranty.",
              "_key": "0ab15da65bd40",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10",
          "listItem": "number"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Procedures for Obtaining Warranty Service",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94"
        },
        {
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "text": "RMA (Returning Merchandise Authorization) Policy:If repairs are required, the customer must obtain a Return ID and provide proof of purchase. Return ID and services are rendered by HYTE or Authorized Service Centers only. Any shipping costs after 30 days (starting from the original date of purchase) on any item returned for repair are the customer's responsibility. All returned parts must have a Return ID written clearly on the outside of the package along with a letter detailing the problems and a copy of the original proof of purchase. No COD packages will be accepted. No package will be accepted without a return ID number written on the outside of the package. Return numbers are only valid for 30 days from the date of issue.Should you have any problems with your product, please follow these procedures to obtain the service:",
              "_key": "2153de296bd30",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "9cbb6a25aa550",
              "_type": "span",
              "marks": [],
              "text": "If the product must be repaired, a return number will be issued for shipment to our repair depot. Please follow the instructions given by HYTE technical support staff to ship your product. HYTE will not accept any shipments without a return ID number."
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Pack the product in its original box or a well-protected box, as outlined in the Packing Instructions. It is very important that you write the Return ID clearly outside the package. HYTE will not pay for return shipping costs outside mainland U.S.A. including Hawaii, Alaska, Guam and Puerto Rico. Ship the product with a copy of your bill of sales or other proof of purchase, your name, address, phone number, description of the problem(s), and the return ID you have obtained to:\n\nHYTE Service Center \nRMA#____________ 529 \nN. Baldwin Park Blvd, City of Industry, CA 91746, USA",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Upon receiving the product, HYTE will repair or replace your product (at HYTE’s discretion) and will ship it back to you within 2 weeks(depending on parts availability) via FedEx/UPS.",
              "_key": "3202ccca88820"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number"
        },
        {
          "style": "normal",
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE makes no warranty or representation, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or conformity to any representation or description with respect to any manufacturer’s product or documentation, its quality, performance, merchantability, fitness for a particular purpose, or conformity to any representation or description.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "text": "Price, specification, and terms are subject to change without notice. HYTE is not responsible for errors in typography and/or photography.",
              "_key": "dc08a7783489",
              "_type": "span",
              "marks": []
            }
          ]
        }
      ],
      "it": [
        {
          "_type": "block",
          "style": "h1",
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Servizio di garanzia",
              "_key": "0c69c836304a0"
            }
          ]
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_type": "link",
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "marks": [],
              "text": "Garantiamo ogni prodotto HYTE contro difetti nei materiali o nella lavorazione nei periodi successivi alla data originale della fattura. HYTE non sarà responsabile per eventuali problemi che si verificano durante il trasporto come danni, perdita e furto. Questi problemi saranno trattati dal nostro partner, Route. Per maggiori informazioni vai qui: ",
              "_key": "7c1f777751ca0",
              "_type": "span"
            },
            {
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " Per presentare un reclamo tramite Route, vai qui: ",
              "_key": "7c1f777751ca2"
            },
            {
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3",
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ]
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Il periodo di garanzia per i nostri prodotti è il seguente:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "85eb2dc52092"
        },
        {
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Garanzia del case per PC",
              "_key": "28cf6dc241600"
            },
            {
              "marks": [],
              "text": ": 3 anni\n",
              "_key": "28cf6dc241601",
              "_type": "span"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Alimentatore:",
              "_key": "d7df22a23be40"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " 10 anni\n",
              "_key": "d7df22a23be41"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Cuffie",
              "_key": "d27e2115dc2e"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " : 3 anni\n",
              "_key": "ae6be04c2a59"
            },
            {
              "marks": [
                "strong"
              ],
              "text": "Accessori PC (FA12 Fan pack, cavo riser PCIE40, CNVS)",
              "_key": "65db89c7f38c",
              "_type": "span"
            },
            {
              "text": ": 3 anni\n\nDurante questo periodo, HYTE riparerà o sostituirà le parti difettose originali HYTE con parti nuove o ricondizionate a discrezione di HYTE, senza alcun costo per l'utente. Tutte le parti originali sostituite da HYTE o dai suoi centri di assistenza autorizzati, diventano di proprietà di HYTE. L'utente è responsabile del pagamento, alle tariffe correnti, per qualsiasi servizio o riparazione al di fuori dell'ambito della presente garanzia limitata. Se hai acquistato un prodotto HYTE direttamente da HYTE, contatta il servizio clienti al numero (833) GET-HYTE per avviare la procedura di garanzia.\n\nSe hai acquistato un prodotto HYTE da un altro rivenditore, potrebbe essere più veloce risolvere la richiesta di garanzia tramite il punto di acquisto originale. Poiché la garanzia o il periodo di restituzione possono variare a seconda di dove hai acquistato il prodotto, ti consigliamo di verificare prima la politica di restituzione del rivenditore.",
              "_key": "7a36388934a6",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Condizioni di garanzia",
              "_key": "c2e5a805f70d0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "La garanzia limitata di cui sopra è soggetta alle seguenti condizioni:",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083",
          "markDefs": []
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Questa garanzia si estende solo ai prodotti distribuiti da HYTE è efficace solo se i prodotti sono acquistati e gestiti negli Stati Uniti. (All'interno degli Stati Uniti, compresi gli Stati Uniti 48, Alaska e Hawaii.)",
              "_key": "cdaaa24c99720"
            }
          ]
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Questa garanzia copre solo il normale utilizzo della custodia e dei suoi componenti. HYTE non sarà responsabile ai sensi della presente garanzia se eventuali danni o difetti derivano da (i) uso improprio, abuso, negligenza, spedizione o installazione improprie; (ii) disastri quali incendi, inondazioni, fulmini o corrente elettrica impropria; o (iii) assistenza o modifica da parte di soggetti diversi da un rappresentante autorizzato HYTE.",
              "_key": "977e1f5d89970"
            }
          ]
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Nel caso in cui il tuo prodotto venga restituito a HYTE per la riparazione, se non vengono riscontrati difetti nei materiali o nella lavorazione, sarai responsabile della spedizione di ritorno e delle spese di manodopera correnti.",
              "_key": "76503d2417500",
              "_type": "span"
            }
          ]
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "È necessario conservare la fattura di vendita o altra prova di acquisto per ricevere il servizio di garanzia.",
              "_key": "c9d7be39d3e50"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "È necessario registrare il prodotto per la garanzia sulla pagina dell'account.",
              "_key": "9934a290b83a0",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf"
        },
        {
          "_key": "504ccfe1332a",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "03107faa525c0",
              "_type": "span",
              "marks": [],
              "text": "Il numero di serie del prodotto deve essere non manomesso e chiaramente identificabile."
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "0ab15da65bd40",
              "_type": "span",
              "marks": [],
              "text": "Nessuna estensione di garanzia sarà concessa per qualsiasi parte di ricambio fornita all'acquirente in adempimento della presente garanzia."
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Procedure per ottenere il servizio di garanzia",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94"
        },
        {
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Politica RMA (Return Merchandise Authorization): se sono necessarie riparazioni, il cliente deve ottenere un ID di restituzione e fornire la prova di acquisto. L'ID di reso e i servizi sono forniti solo da HYTE o dai centri di assistenza autorizzati. Eventuali spese di spedizione trascorse 30 giorni (a partire dalla data originale di acquisto) su qualsiasi articolo restituito per la riparazione sono a carico del cliente. Tutte le parti restituite devono avere un ID di reso scritto chiaramente all'esterno del pacco insieme a una lettera che dettaglia i problemi e una copia della prova di acquisto originale. Non saranno accettati pacchetti in contrassegno. Nessun pacco sarà accettato senza un numero ID di ritorno scritto all'esterno del pacco. I numeri di reso sono validi solo per 30 giorni dalla data di emissione. In caso di problemi con il prodotto, seguire queste procedure per ottenere il servizio:",
              "_key": "2153de296bd30"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Se il prodotto deve essere riparato, verrà emesso un numero di reso per la spedizione al nostro deposito di riparazione. Si prega di seguire le istruzioni fornite dal personale di supporto tecnico HYTE per spedire il prodotto. HYTE non accetterà spedizioni senza un numero ID di reso.",
              "_key": "9cbb6a25aa550"
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_key": "d17e415985ff0",
              "_type": "span",
              "marks": [],
              "text": "Imballare il prodotto nella sua scatola originale o in una scatola ben protetta, come indicato nelle istruzioni di imballaggio. È molto importante scrivere chiaramente l'ID di reso all'esterno del pacco. HYTE non pagherà i costi di spedizione di ritorno al di fuori degli Stati Uniti continentali, tra cui Hawaii, Alaska, Guam e Porto Rico. Spedisci il prodotto con una copia della fattura di vendita o altra prova di acquisto, il tuo nome, indirizzo, numero di telefono, descrizione del problema (i) e l'ID di reso che hai ottenuto a:\n\nCentro assistenza HYTE \nRMA#____________ 529 \nN. Baldwin Park Blvd, Città dell'industria, CA 91746, Stati Uniti"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970",
          "listItem": "number"
        },
        {
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Dopo aver ricevuto il prodotto, HYTE riparerà o sostituirà il prodotto (a discrezione di HYTE) e lo rispedirà entro 2 settimane (a seconda della disponibilità delle parti) tramite FedEx/UPS.",
              "_key": "3202ccca88820"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE non rilascia alcuna garanzia o dichiarazione, esplicita o implicita, incluse, a titolo esemplificativo ma non esaustivo, garanzie di commerciabilità, idoneità per uno scopo particolare o conformità a qualsiasi dichiarazione o descrizione in relazione a qualsiasi prodotto o documentazione del produttore, alla sua qualità, prestazioni, commerciabilità, idoneità per uno scopo particolare o conformità a qualsiasi rappresentazione o descrizione.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Prezzo, specifiche e termini sono soggetti a modifiche senza preavviso. HYTE non è responsabile per errori di tipografia e/o fotografia.",
              "_key": "dc08a7783489",
              "_type": "span"
            }
          ]
        }
      ],
      "fr": [
        {
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Service de garantie",
              "_key": "0c69c836304a0"
            }
          ],
          "_type": "block",
          "style": "h1"
        },
        {
          "style": "normal",
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_key": "a0e0df0bfc06",
              "_type": "link",
              "href": "https://route.com/terms-and-conditions"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Nous garantissons chaque produit HYTE contre les défauts de matériaux ou de fabrication dans les périodes à compter de la date de facturation originale. HYTE ne sera pas responsable des problèmes qui surviennent pendant le transport, tels que les dommages, la perte et le vol. Ces questions seront couvertes par notre partenaire, Route. Pour plus d’informations, veuillez cliquer ici: ",
              "_key": "7c1f777751ca0"
            },
            {
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1",
              "_type": "span"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " Pour déposer une réclamation via Route, veuillez vous rendre ici: ",
              "_key": "7c1f777751ca2"
            },
            {
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3"
            }
          ],
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "La période de garantie de nos produits est la suivante:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block"
        },
        {
          "children": [
            {
              "text": "Garantie du boîtier PC",
              "_key": "28cf6dc241600",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3 ans\n",
              "_key": "28cf6dc241601"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Alimentation:",
              "_key": "d7df22a23be40"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " 10 ans\n",
              "_key": "d7df22a23be41"
            },
            {
              "text": "Casques",
              "_key": "d27e2115dc2e",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": " : 3 ans\n",
              "_key": "ae6be04c2a59"
            },
            {
              "text": "Accessoires PC (pack ventilateur FA12, câble de montage PCIE40, CNVS)",
              "_key": "65db89c7f38c",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "marks": [],
              "text": ": 3 ans\n\nPendant cette période, HYTE réparera ou remplacera les pièces d’origine HYTE défectueuses par des pièces neuves ou reconditionnées au choix de HYTE, sans frais pour vous. Toutes les pièces d’origine remplacées par HYTE ou ses centres de service agréés deviennent la propriété de HYTE. Vous êtes responsable du paiement, aux tarifs en vigueur, de tout service ou réparation en dehors du champ d’application de cette garantie limitée. Si vous avez acheté un produit HYTE directement auprès de HYTE, contactez le service clientèle au (833) GET-HYTE pour lancer le processus de garantie.\n\nSi vous avez acheté un produit HYTE auprès d’un autre détaillant, il peut être plus rapide de résoudre votre réclamation au titre de la garantie via votre point de vente initial. Étant donné que la garantie ou la période de retour peut varier en fonction de l’endroit où vous avez acheté le produit, nous vous recommandons de vérifier d’abord la politique de retour du détaillant.",
              "_key": "7a36388934a6",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "3312c409bf1a",
          "markDefs": []
        },
        {
          "children": [
            {
              "marks": [
                "strong"
              ],
              "text": "Conditions de garantie",
              "_key": "c2e5a805f70d0",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "La garantie limitée ci-dessus est soumise aux conditions suivantes :",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Cette garantie ne s’étend qu’aux produits distribués par HYTE et n’est effective que si les produits sont achetés et exploités aux États-Unis. (Aux États-Unis, y compris les États-Unis 48 États, l’Alaska et Hawaii.)",
              "_key": "cdaaa24c99720"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": []
        },
        {
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "Cette garantie ne couvre que l’utilisation normale du boîtier et de ses composants. HYTE ne sera pas responsable en vertu de cette garantie si tout dommage ou défaut résulte (i) d’une mauvaise utilisation, d’un abus, d’une négligence, d’une expédition ou d’une installation incorrecte ; (ii) les catastrophes telles que les incendies, les inondations, la foudre ou un courant électrique inapproprié; ou (iii) le service ou la modification par toute personne autre qu’un représentant autorisé de HYTE.",
              "_key": "977e1f5d89970",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Dans le cas où votre produit est retourné à HYTE pour réparation - si aucun défaut de matériaux ou de fabrication n’est trouvé, vous serez responsable de l’expédition de retour et des frais de main-d’œuvre actuels.",
              "_key": "76503d2417500"
            }
          ]
        },
        {
          "style": "normal",
          "_key": "66681546d3b6",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Vous devez conserver votre acte de vente ou toute autre preuve d’achat pour bénéficier du service de garantie.",
              "_key": "c9d7be39d3e50"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "children": [
            {
              "text": "Vous devez enregistrer votre produit pour la garantie sur la page de votre compte.",
              "_key": "9934a290b83a0",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Le numéro de série du produit doit être intact et clairement identifiable.",
              "_key": "03107faa525c0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a",
          "listItem": "number"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Aucune extension de garantie ne sera accordée pour toute pièce de rechange fournie à l’acheteur en exécution de cette garantie.",
              "_key": "0ab15da65bd40"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": []
        },
        {
          "style": "normal",
          "_key": "761fc28eeb94",
          "markDefs": [],
          "children": [
            {
              "marks": [
                "strong"
              ],
              "text": "Procédures d’obtention du service de garantie",
              "_key": "333e95969fc00",
              "_type": "span"
            }
          ],
          "_type": "block"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Politique RMA (autorisation de retour de marchandise): Si des réparations sont nécessaires, le client doit obtenir un ID de retour et fournir une preuve d’achat. L’ID de retour et les services sont fournis par HYTE ou les centres de service agréés uniquement. Tous les frais d’expédition après 30 jours (à compter de la date d’achat d’origine) sur tout article retourné pour réparation sont à la charge du client. Toutes les pièces retournées doivent avoir un ID de retour écrit clairement à l’extérieur du colis ainsi qu’une lettre détaillant les problèmes et une copie de la preuve d’achat originale. Aucun colis COD ne sera accepté. Aucun colis ne sera accepté sans un numéro d’identification de retour écrit à l’extérieur du colis. Les numéros de retour ne sont valables que pendant 30 jours à compter de la date d’émission. Si vous rencontrez des problèmes avec votre produit, veuillez suivre ces procédures pour obtenir le service:",
              "_key": "2153de296bd30"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "11804807ebcf",
          "markDefs": []
        },
        {
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Si le produit doit être réparé, un numéro de retour sera émis pour l’expédition à notre dépôt de réparation. Veuillez suivre les instructions données par le personnel d’assistance technique de HYTE pour expédier votre produit. HYTE n’acceptera aucun envoi sans numéro d’identification de retour.",
              "_key": "9cbb6a25aa550"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Emballez le produit dans sa boîte d’origine ou dans une boîte bien protégée, comme indiqué dans les instructions d’emballage. Il est très important que vous écriviez clairement l’ID de retour à l’extérieur du colis. HYTE ne paiera pas les frais d’expédition de retour en dehors des États-Unis continentaux, y compris Hawaii, l’Alaska, Guam et Porto Rico. Expédiez le produit avec une copie de votre acte de vente ou autre preuve d’achat, votre nom, adresse, numéro de téléphone, description du ou des problèmes et l’ID de retour que vous avez obtenu à:\n\nCentre de service HYTE \nRMA#________ 529 \nN. Baldwin Park Blvd, City of Industry, CA 91746, États-Unis",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Dès réception du produit, HYTE réparera ou remplacera votre produit (à la discrétion de HYTE) et vous le renverra dans un délai de 2 semaines (en fonction de la disponibilité des pièces) via FedEx/UPS.",
              "_key": "3202ccca88820"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number"
        },
        {
          "style": "normal",
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE n’offre aucune garantie ou représentation, expresse ou implicite, y compris, mais sans s’y limiter, les garanties de qualité marchande, d’adéquation à un usage particulier ou de conformité à toute déclaration ou description concernant le produit ou la documentation d’un fabricant, sa qualité, ses performances, sa qualité marchande, son adéquation à un usage particulier ou sa conformité à toute déclaration ou description.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Le prix, les spécifications et les conditions sont sujets à changement sans préavis. HYTE n’est pas responsable des erreurs de typographie et/ou de photographie.",
              "_key": "dc08a7783489"
            }
          ]
        }
      ],
      "de": [
        {
          "style": "h1",
          "_key": "67490b206970",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Garantie-Service",
              "_key": "0c69c836304a0"
            }
          ],
          "_type": "block"
        },
        {
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_type": "link",
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Wir gewähren für jedes HYTE-Produkt eine Garantie gegen Material- oder Verarbeitungsfehler in Zeiträumen ab dem ursprünglichen Rechnungsdatum. HYTE ist nicht verantwortlich für Probleme, die während des Transports auftreten, wie z. B. Beschädigung, Verlust und Diebstahl. Diese Themen werden von unserem Partner Route abgedeckt. Weitere Informationen finden Sie hier: ",
              "_key": "7c1f777751ca0"
            },
            {
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " Um eine Forderung über Route einzureichen, gehen Sie bitte hier: ",
              "_key": "7c1f777751ca2"
            },
            {
              "_key": "7c1f777751ca3",
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Die Garantiezeit für unsere Produkte ist wie folgt:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "style": "normal",
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC-Gehäuse-Garantie",
              "_key": "28cf6dc241600"
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3 Jahre\n",
              "_key": "28cf6dc241601"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Stromversorgung:",
              "_key": "d7df22a23be40"
            },
            {
              "_key": "d7df22a23be41",
              "_type": "span",
              "marks": [],
              "text": " 10 Jahre\n"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Headsets",
              "_key": "d27e2115dc2e"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " : 3 Jahre\n",
              "_key": "ae6be04c2a59"
            },
            {
              "text": "PC-Zubehör (FA12-Lüfterpaket, PCIE40-Riser-Kabel, CNVS)",
              "_key": "65db89c7f38c",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "text": ": 3 Jahre\n\nWährend dieses Zeitraums repariert oder ersetzt HYTE defekte Originalteile von HYTE nach Wahl von HYTE kostenlos durch neue oder überholte Teile. Alle Originalteile, die von HYTE oder seinen autorisierten Servicezentren ausgetauscht werden, gehen in das Eigentum von HYTE über. Sie sind verantwortlich für die Zahlung zu den aktuellen Preisen für alle Dienstleistungen oder Reparaturen, die außerhalb des Geltungsbereichs dieser beschränkten Garantie liegen. Wenn Sie ein HYTE-Produkt direkt bei HYTE gekauft haben, wenden Sie sich an den Kundendienst unter (833) GET-HYTE, um den Garantieprozess einzuleiten.\n\nWenn Sie ein HYTE-Produkt bei einem anderen Händler gekauft haben, kann es schneller sein, Ihren Garantieanspruch über Ihre ursprüngliche Verkaufsstelle zu lösen. Da die Garantie- oder Rückgabefrist variieren kann, je nachdem, wo Sie das Produkt gekauft haben, empfehlen wir, zuerst die Rückgabebedingungen des Händlers zu überprüfen.",
              "_key": "7a36388934a6",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Garantiebedingungen",
              "_key": "c2e5a805f70d0"
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_key": "05ca6dbead4f0",
              "_type": "span",
              "marks": [],
              "text": "Die oben genannte beschränkte Garantie unterliegt den folgenden Bedingungen:"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Diese Garantie erstreckt sich nur auf Produkte, die von HYTE vertrieben werden, und gilt nur, wenn die Produkte in den USA gekauft und betrieben werden. (Innerhalb der USA, einschließlich der 48 US-Bundesstaaten, Alaska und Hawaii.)",
              "_key": "cdaaa24c99720",
              "_type": "span"
            }
          ]
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Diese Garantie gilt nur für den normalen Gebrauch des Gehäuses und seiner Komponenten. HYTE haftet im Rahmen dieser Garantie nicht, wenn Schäden oder Mängel auf (i) Missbrauch, Missbrauch, Vernachlässigung, unsachgemäßen Versand oder Installation zurückzuführen sind; (ii) Katastrophen wie Feuer, Überschwemmung, Blitzschlag oder unsachgemäßer elektrischer Strom; oder (iii) Service oder Änderung durch eine andere Person als einen autorisierten HYTE-Vertreter.",
              "_key": "977e1f5d89970"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9"
        },
        {
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Für den Fall, dass Ihr Produkt zur Reparatur an HYTE zurückgeschickt wird – sollte kein Material- oder Verarbeitungsfehler festgestellt werden, sind Sie für den Rückversand und die aktuellen Arbeitskosten verantwortlich.",
              "_key": "76503d2417500",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number"
        },
        {
          "style": "normal",
          "_key": "66681546d3b6",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Sie müssen Ihren Kaufvertrag oder einen anderen Kaufbeleg aufbewahren, um Garantieleistungen in Anspruch nehmen zu können.",
              "_key": "c9d7be39d3e50"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Sie müssen Ihr Produkt auf Ihrer Kontoseite für die Garantie registrieren.",
              "_key": "9934a290b83a0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": []
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Die Seriennummer des Produkts muss unmanipuliert und eindeutig identifizierbar sein.",
              "_key": "03107faa525c0",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Für Ersatzteile, die dem Käufer in Erfüllung dieser Garantie zur Verfügung gestellt werden, wird keine Garantieverlängerung gewährt.",
              "_key": "0ab15da65bd40"
            }
          ]
        },
        {
          "style": "normal",
          "_key": "761fc28eeb94",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Verfahren zur Inanspruchnahme von Garantieleistungen",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block"
        },
        {
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "RMA-Richtlinie (Returning Merchandise Authorization): Wenn Reparaturen erforderlich sind, muss der Kunde eine Rücksende-ID erhalten und einen Kaufbeleg vorlegen. Die Rücksende-ID und die Dienstleistungen werden nur von HYTE oder autorisierten Servicezentren erbracht. Alle Versandkosten nach 30 Tagen (ab dem ursprünglichen Kaufdatum) für jeden Artikel, der zur Reparatur zurückgeschickt wird, gehen zu Lasten des Kunden. Alle zurückgegebenen Teile müssen mit einer Rücksende-ID versehen sein, die deutlich auf der Außenseite des Pakets angebracht ist, zusammen mit einem Schreiben, in dem die Probleme aufgeführt sind, und einer Kopie des Original-Kaufbelegs. Es werden keine Nachnahmepakete akzeptiert. Es wird kein Paket ohne eine Rücksendenummer auf der Außenseite des Pakets angenommen. Rücksendenummern sind nur 30 Tage ab Ausstellungsdatum gültig. Sollten Sie Probleme mit Ihrem Produkt haben, gehen Sie bitte wie folgt vor, um den Service in Anspruch zu nehmen:",
              "_key": "2153de296bd30"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Wenn das Produkt repariert werden muss, wird eine Rücksendenummer für den Versand an unser Reparaturdepot ausgestellt. Bitte befolgen Sie die Anweisungen des technischen Supports von HYTE, um Ihr Produkt zu versenden. HYTE akzeptiert keine Sendungen ohne Rücksende-ID-Nummer.",
              "_key": "9cbb6a25aa550"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Verpacken Sie das Produkt in der Originalverpackung oder in einer gut geschützten Verpackung, wie in der Verpackungsanleitung beschrieben. Es ist sehr wichtig, dass Sie die Rücksende-ID deutlich außerhalb des Pakets schreiben. HYTE übernimmt keine Rücksendekosten außerhalb des US-Festlandes, einschließlich Hawaii, Alaska, Guam und Puerto Rico. Senden Sie das Produkt mit einer Kopie Ihres Kaufvertrags oder eines anderen Kaufbelegs, Ihrem Namen, Ihrer Adresse, Ihrer Telefonnummer, einer Beschreibung des Problems und der Rücksende-ID, die Sie erhalten haben, an:\n\nHYTE Service-Center \nRMA#____________ 529 \nN. Baldwin Park Blvd, Stadt der Industrie, CA 91746, USA",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970",
          "listItem": "number"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Nach Erhalt des Produkts repariert oder ersetzt HYTE Ihr Produkt (nach Ermessen von HYTE) und sendet es innerhalb von 2 Wochen (je nach Verfügbarkeit der Teile) per FedEx/UPS an Sie zurück.",
              "_key": "3202ccca88820",
              "_type": "span"
            }
          ],
          "level": 1
        },
        {
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE gibt keine ausdrückliche oder stillschweigende Gewährleistung oder Zusicherung, einschließlich, aber nicht beschränkt auf Garantien der Marktgängigkeit, der Eignung für einen bestimmten Zweck oder der Konformität mit einer Zusicherung oder Beschreibung in Bezug auf das Produkt oder die Dokumentation eines Herstellers, seine Qualität, Leistung, Marktgängigkeit, Eignung für einen bestimmten Zweck oder Konformität mit einer Zusicherung oder Beschreibung.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Preise, Spezifikationen und Bedingungen können ohne vorherige Ankündigung geändert werden. HYTE ist nicht verantwortlich für Fehler in der Typografie und/oder Fotografie.",
              "_key": "dc08a7783489"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40"
        }
      ],
      "ko": [
        {
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "보증 서비스",
              "_key": "0c69c836304a0",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "h1",
          "_key": "67490b206970"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "당사는 송장의 원래 날짜로부터 기간 동안 재료 또는 제조상의 결함에 대해 각 HYTE 제품을 보증합니다. HYTE는 손상, 분실, 도난 등 운송 중 발생하는 문제에 대해 책임을 지지 않습니다. 이러한 문제는 파트너인 Route에서 다룹니다. 자세한 내용은 여기를 참조하십시오. ",
              "_key": "7c1f777751ca0"
            },
            {
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " Route를 통해 청구를 제출하려면 여기로 이동하십시오. ",
              "_key": "7c1f777751ca2"
            },
            {
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06",
              "_type": "link"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ]
        },
        {
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "당사 제품의 보증 기간은 다음과 같습니다.",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC 케이스 보증",
              "_key": "28cf6dc241600"
            },
            {
              "marks": [],
              "text": ": 3년\n",
              "_key": "28cf6dc241601",
              "_type": "span"
            },
            {
              "text": "전원 공급 장치:",
              "_key": "d7df22a23be40",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": " 10 년\n",
              "_key": "d7df22a23be41"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "헤드셋",
              "_key": "d27e2115dc2e"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " : 3년\n",
              "_key": "ae6be04c2a59"
            },
            {
              "_key": "65db89c7f38c",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC 액세서리 (FA12 팬 팩, PCIE40 라이저 케이블, CNVS)"
            },
            {
              "text": ": 3년\n\n이 기간 동안 HYTE는 HYTE의 선택에 따라 원래 HYTE 결함 부품을 새 부품 또는 수리된 부품으로 무료로 수리하거나 교체해 드립니다. HYTE 또는 공인 서비스 센터로 교체된 모든 순정 부품은 HYTE의 자산이 됩니다. 귀하는 이 제한 보증의 범위를 벗어난 모든 서비스 또는 수리에 대해 현재 요율로 지불할 책임이 있습니다. HYTE에서 직접 HYTE 제품을 구입한 경우 (833) GET-HYTE로 고객 서비스에 연락하여 보증 절차를 시작하십시오.\n\n다른 판매점에서 HYTE 제품을 구입한 경우 원래 구매처를 통해 보증 청구를 해결하는 것이 더 빠를 수 있습니다. 보증 또는 반품 기간은 제품 구매처에 따라 다를 수 있으므로 먼저 판매점의 반품 정책을 확인하는 것이 좋습니다.",
              "_key": "7a36388934a6",
              "_type": "span",
              "marks": []
            }
          ]
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "text": "보증 조건",
              "_key": "c2e5a805f70d0",
              "_type": "span",
              "marks": [
                "strong"
              ]
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "위의 제한 보증에는 다음 조건이 적용됩니다.",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083"
        },
        {
          "children": [
            {
              "marks": [],
              "text": "이 보증은 HYTE에서 유통하는 제품에만 적용되며 미국에서 제품을 구매하고 운영하는 경우에만 유효합니다. (미국 내 48개 주, 알래스카 및 하와이를 포함)",
              "_key": "cdaaa24c99720",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "이 보증은 케이스와 그 구성 요소의 정상적인 사용에만 적용됩니다. HYTE는 (i) 오용, 남용, 방치, 부적절한 배송 또는 설치로 인해 손상이나 결함이 발생한 경우 이 보증에 따라 책임을 지지 않습니다. (ii) 화재, 홍수, 번개 또는 부적절한 전류와 같은 재해; 또는 (iii) 공인 HYTE 대리인이 아닌 다른 사람에 의한 서비스 또는 변경.",
              "_key": "977e1f5d89970"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9",
          "listItem": "number"
        },
        {
          "children": [
            {
              "text": "수리를 위해 제품을 HYTE로 반품하는 경우 – 재료나 제조상의 결함이 발견되지 않는 경우 반품 배송 및 현재 인건비는 귀하가 부담해야 합니다.",
              "_key": "76503d2417500",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": []
        },
        {
          "style": "normal",
          "_key": "66681546d3b6",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "보증 서비스를 받으려면 판매 증서 또는 기타 구매 증빙 자료를 보관해야 합니다.",
              "_key": "c9d7be39d3e50"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "계정 페이지에서 보증을 위해 제품을 등록해야 합니다.",
              "_key": "9934a290b83a0",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "504ccfe1332a",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "제품의 일련 번호는 변조되지 않았으며 명확하게 식별할 수 있어야 합니다.",
              "_key": "03107faa525c0",
              "_type": "span"
            }
          ],
          "level": 1
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "0ab15da65bd40",
              "_type": "span",
              "marks": [],
              "text": "이 보증을 이행하기 위해 구매자에게 제공된 교체 부품에 대해서는 보증 연장이 허용되지 않습니다."
            }
          ],
          "level": 1
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "보증 서비스를 받기 위한 절차",
              "_key": "333e95969fc00"
            }
          ]
        },
        {
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "RMA(반품 승인) 정책: 수리가 필요한 경우 고객은 반품 ID를 받고 구매 증명서를 제공해야 합니다. 반품 ID 및 서비스는 HYTE 또는 공인 서비스 센터에서만 제공합니다. 수리를 위해 반품된 품목에 대한 30일(최초 구매일부터) 이후의 배송비는 고객의 책임입니다. 반품된 모든 부품에는 문제를 자세히 설명하는 서신 및 구매 증명서 원본과 함께 패키지 외부에 반품 ID가 명확하게 적혀 있어야 합니다. COD 패키지는 허용되지 않습니다. 패키지 외부에 적힌 반품 ID 번호가 없으면 패키지가 허용되지 않습니다. 반품 번호는 발행일로부터 30일 동안만 유효합니다. 제품에 문제가 있는 경우 다음 절차에 따라 서비스를 받으십시오.",
              "_key": "2153de296bd30"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "제품을 수리해야 하는 경우 수리 센터로 배송할 수 있도록 반품 번호가 발급됩니다. HYTE 기술 지원 직원의 지침에 따라 제품을 배송하십시오. HYTE는 반품 ID 번호가 없는 배송을 허용하지 않습니다.",
              "_key": "9cbb6a25aa550",
              "_type": "span",
              "marks": []
            }
          ]
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "포장 지침에 설명된 대로 제품을 원래 상자 또는 잘 보호된 상자에 포장하십시오. 패키지 외부에 반품 ID를 명확하게 작성하는 것이 매우 중요합니다. HYTE는 하와이, 알래스카, 괌 및 푸에르토리코를 포함한 미국 본토 이외의 지역에서 반품 배송비를 지불하지 않습니다. 판매 영수증 또는 기타 구매 증빙 자료 사본, 이름, 주소, 전화 번호, 문제 설명 및 획득한 반품 ID와 함께 제품을 다음 주소로 배송하십시오.\n\nHYTE 서비스 센터 \nRMA#____________ 529 \nN. Baldwin Park Blvd, 산업 도시, CA 91746, 미국",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970",
          "listItem": "number",
          "markDefs": []
        },
        {
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "3202ccca88820",
              "_type": "span",
              "marks": [],
              "text": "제품을 받으면 HYTE는 귀하의 제품을 수리 또는 교체하고(HYTE의 재량에 따라) FedEx/UPS를 통해 2주 이내(부품 가용성에 따라 다름)에 다시 배송합니다."
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE는 상품성, 특정 목적에의 적합성 또는 제조업체의 제품 또는 문서, 품질, 성능, 상품성, 특정 목적에의 적합성 또는 표현 또는 설명에 대한 적합성에 대한 보증을 포함하되 이에 국한되지 않는 명시적이든 묵시적이든 어떠한 보증이나 진술도 하지 않습니다.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "가격, 사양 및 조건은 예고 없이 변경될 수 있습니다. HYTE는 타이포그래피 및/또는 사진의 오류에 대해 책임을 지지 않습니다.",
              "_key": "dc08a7783489"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40"
        }
      ],
      "pl": [
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Serwis gwarancyjny",
              "_key": "0c69c836304a0"
            }
          ],
          "_type": "block",
          "style": "h1",
          "_key": "67490b206970"
        },
        {
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_type": "link",
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06"
            },
            {
              "_type": "link",
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c"
            }
          ],
          "children": [
            {
              "_key": "7c1f777751ca0",
              "_type": "span",
              "marks": [],
              "text": "Gwarantujemy każdy produkt HYTE na wady materiałowe lub produkcyjne w okresach od pierwotnej daty wystawienia faktury. HYTE nie ponosi odpowiedzialności za jakiekolwiek problemy, które wystąpią podczas transportu, takie jak uszkodzenie, utrata i kradzież. Kwestie te zostaną omówione przez naszego partnera, firmę Route. Aby uzyskać więcej informacji, przejdź tutaj: "
            },
            {
              "_type": "span",
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1"
            },
            {
              "_type": "span",
              "marks": [],
              "text": " Aby złożyć reklamację za pośrednictwem usługi Route, przejdź tutaj: ",
              "_key": "7c1f777751ca2"
            },
            {
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Okres gwarancji na nasze produkty jest następujący:",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "style": "normal",
          "_key": "3312c409bf1a",
          "markDefs": [],
          "children": [
            {
              "text": "Gwarancja na obudowę PC",
              "_key": "28cf6dc241600",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "marks": [],
              "text": ": 3 lata\n",
              "_key": "28cf6dc241601",
              "_type": "span"
            },
            {
              "text": "Zasilacz:",
              "_key": "d7df22a23be40",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": " 10 lat\n",
              "_key": "d7df22a23be41"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Zestawy słuchawkowe",
              "_key": "d27e2115dc2e"
            },
            {
              "_key": "ae6be04c2a59",
              "_type": "span",
              "marks": [],
              "text": " : 3 lata\n"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Akcesoria komputerowe (FA12 Fan pack, PCIE40 Riser cable, CNVS)",
              "_key": "65db89c7f38c"
            },
            {
              "marks": [],
              "text": ": 3 lata\n\nW tym okresie HYTE naprawi lub wymieni oryginalne wadliwe części HYTE na nowe lub zregenerowane części według uznania HYTE, bez opłat dla Ciebie. Wszystkie oryginalne części wymienione przez HYTE lub jego autoryzowane centra serwisowe, stają się własnością HYTE. Użytkownik ponosi odpowiedzialność za płatność, według aktualnych stawek, za wszelkie usługi lub naprawy wykraczające poza zakres niniejszej ograniczonej gwarancji. Jeśli zakupiłeś produkt HYTE bezpośrednio od HYTE, skontaktuj się z działem obsługi klienta pod numerem (833) GET-HYTE, aby rozpocząć proces gwarancyjny.\n\nJeśli zakupiłeś produkt HYTE od innego sprzedawcy, może być szybsze rozwiązanie roszczenia gwarancyjnego za pośrednictwem pierwotnego punktu zakupu. Ponieważ okres gwarancji lub zwrotu może się różnić w zależności od miejsca zakupu produktu, zalecamy najpierw sprawdzić politykę zwrotów sprzedawcy.",
              "_key": "7a36388934a6",
              "_type": "span"
            }
          ],
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Warunki gwarancji",
              "_key": "c2e5a805f70d0"
            }
          ],
          "_type": "block"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Powyższa ograniczona gwarancja podlega następującym warunkom:",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083"
        },
        {
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Niniejsza gwarancja obejmuje wyłącznie produkty dystrybuowane przez HYTE tylko wtedy, gdy produkty zostały zakupione i będą eksploatowane w USA. (W USA, w tym 48 stanów USA, Alaska i Hawaje.)",
              "_key": "cdaaa24c99720"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "Niniejsza gwarancja obejmuje wyłącznie normalne użytkowanie obudowy i jej elementów. HYTE nie ponosi odpowiedzialności w ramach niniejszej gwarancji, jeśli jakiekolwiek uszkodzenia lub wady wynikają z (i) niewłaściwego użytkowania, nadużycia, zaniedbania, niewłaściwej wysyłki lub instalacji; (ii) katastrofy, takie jak pożar, powódź, wyładowania atmosferyczne lub niewłaściwy prąd elektryczny; lub (iii) serwis lub zmiana dokonana przez kogokolwiek innego niż upoważniony przedstawiciel HYTE.",
              "_key": "977e1f5d89970",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "W przypadku, gdy produkt zostanie zwrócony do HYTE w celu naprawy - jeśli nie zostaną znalezione wady materiałowe lub produkcyjne, będziesz odpowiedzialny za wysyłkę zwrotną i bieżące koszty robocizny.",
              "_key": "76503d2417500",
              "_type": "span"
            }
          ],
          "level": 1
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_key": "c9d7be39d3e50",
              "_type": "span",
              "marks": [],
              "text": "Aby skorzystać z usługi gwarancyjnej, należy zachować dowód sprzedaży lub inny dowód zakupu."
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "text": "Musisz zarejestrować swój produkt w celu uzyskania gwarancji na stronie swojego konta.",
              "_key": "9934a290b83a0",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "69ef87c58ddf"
        },
        {
          "_key": "504ccfe1332a",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Numer seryjny produktu musi być nienaruszony i łatwy do zidentyfikowania.",
              "_key": "03107faa525c0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Przedłużenie gwarancji nie zostanie udzielone na jakiekolwiek części zamienne dostarczone nabywcy w ramach realizacji niniejszej gwarancji.",
              "_key": "0ab15da65bd40"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10"
        },
        {
          "style": "normal",
          "_key": "761fc28eeb94",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Procedury uzyskania serwisu gwarancyjnego",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Polityka RMA (autoryzacja zwrotu towarów): Jeśli wymagane są naprawy, klient musi uzyskać identyfikator zwrotu i przedstawić dowód zakupu. Identyfikator zwrotu i usługi są świadczone wyłącznie przez HYTE lub Autoryzowane Centra Serwisowe. Wszelkie koszty wysyłki po 30 dniach (począwszy od pierwotnej daty zakupu) na każdy przedmiot zwrócony do naprawy są odpowiedzialnością klienta. Wszystkie zwracane części muszą mieć wyraźnie napisany identyfikator zwrotu na zewnątrz paczki wraz z listem opisującym problemy i kopią oryginalnego dowodu zakupu. Pakiety za pobraniem nie będą akceptowane. Żadna paczka nie zostanie przyjęta bez numeru identyfikacyjnego zwrotnego zapisanego na zewnątrz paczki. Numery zwrotne są ważne tylko przez 30 dni od daty wystawienia. W przypadku jakichkolwiek problemów z produktem należy postępować zgodnie z poniższymi procedurami, aby skorzystać z usługi:",
              "_key": "2153de296bd30"
            }
          ],
          "_type": "block"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Jeśli produkt musi zostać naprawiony, zostanie wydany numer zwrotny do wysyłki do naszego punktu naprawczego. Postępuj zgodnie z instrukcjami podanymi przez personel pomocy technicznej HYTE, aby wysłać produkt. HYTE nie przyjmuje żadnych przesyłek bez numeru identyfikacyjnego zwrotu.",
              "_key": "9cbb6a25aa550"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "940275459c91",
          "listItem": "number"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Zapakuj produkt w oryginalne pudełko lub dobrze zabezpieczone pudełko, zgodnie z instrukcją pakowania. Bardzo ważne jest, aby wyraźnie wpisać identyfikator zwrotny poza paczką. HYTE nie pokryje kosztów wysyłki zwrotnej poza kontynentalną część USA, w tym Hawaje, Alaska, Guam i Portoryko. Wyślij produkt z kopią dowodu sprzedaży lub innego dowodu zakupu, swoim imieniem i nazwiskiem, adresem, numerem telefonu, opisem problemu (problemów) i otrzymanym identyfikatorem zwrotnym na adres:\n\nCentrum serwisowe HYTE \nRMA#____________ 529 \nN. Baldwin Park Blvd, City of Industry, CA 91746, USA",
              "_key": "d17e415985ff0"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "6b02e4337970"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "Po otrzymaniu produktu, HYTE naprawi lub wymieni produkt (według uznania HYTE) i odeśle go z powrotem do Ciebie w ciągu 2 tygodni (w zależności od dostępności części) za pośrednictwem FedEx / UPS.",
              "_key": "3202ccca88820"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": []
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTE nie udziela żadnych gwarancji ani oświadczeń, wyraźnych ani dorozumianych, w tym między innymi gwarancji przydatności handlowej, przydatności do określonego celu lub zgodności z jakimkolwiek oświadczeniem lub opisem w odniesieniu do jakiegokolwiek produktu lub dokumentacji producenta, jego jakości, wydajności, przydatności handlowej, przydatności do określonego celu lub zgodności z jakimkolwiek oświadczeniem lub opisem.",
              "_key": "da45441387ed"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "4f0153df7649"
        },
        {
          "_key": "33c1df945d40",
          "markDefs": [],
          "children": [
            {
              "text": "Cena, specyfikacja i warunki mogą ulec zmianie bez powiadomienia. HYTE nie ponosi odpowiedzialności za błędy w typografii i/lub fotografii.",
              "_key": "dc08a7783489",
              "_type": "span",
              "marks": []
            }
          ],
          "_type": "block",
          "style": "normal"
        }
      ],
      "ja": [
        {
          "children": [
            {
              "marks": [],
              "text": "保証サービス",
              "_key": "0c69c836304a0",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "h1",
          "_key": "67490b206970",
          "markDefs": []
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "9f629ce601b1",
          "markDefs": [
            {
              "_type": "link",
              "href": "https://route.com/terms-and-conditions",
              "_key": "a0e0df0bfc06"
            },
            {
              "href": "https://claims.route.com/",
              "_key": "9d92d295466c",
              "_type": "link"
            }
          ],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "当社は、各HYTE製品を、請求書の元の日付からの期間内の材料または製造上の欠陥に対して保証します。HYTEは、輸送中に発生した破損、紛失、盗難などの問題について責任を負いません。これらの問題は、パートナーであるRouteがカバーします。詳細については、こちらをご覧ください。",
              "_key": "7c1f777751ca0"
            },
            {
              "marks": [
                "a0e0df0bfc06"
              ],
              "text": "https://route.com/terms-and-conditions",
              "_key": "7c1f777751ca1",
              "_type": "span"
            },
            {
              "text": "Routeを通じて請求を行うには、こちらにアクセスしてください。",
              "_key": "7c1f777751ca2",
              "_type": "span",
              "marks": []
            },
            {
              "_type": "span",
              "marks": [
                "9d92d295466c"
              ],
              "text": "https://claims.route.com/",
              "_key": "7c1f777751ca3"
            }
          ]
        },
        {
          "_key": "85eb2dc52092",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "当社製品の保証期間は次のとおりです。",
              "_key": "a304cae2b1110"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PCケース保証",
              "_key": "28cf6dc241600"
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3年\n",
              "_key": "28cf6dc241601"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "電源：",
              "_key": "d7df22a23be40"
            },
            {
              "_type": "span",
              "marks": [],
              "text": "10年間\n",
              "_key": "d7df22a23be41"
            },
            {
              "text": "ヘッドセット",
              "_key": "d27e2115dc2e",
              "_type": "span",
              "marks": [
                "strong"
              ]
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3年\n",
              "_key": "ae6be04c2a59"
            },
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "PC アクセサリ(FA12 ファン パック、PCIE40 ライザー ケーブル、CNVS)",
              "_key": "65db89c7f38c"
            },
            {
              "_type": "span",
              "marks": [],
              "text": ": 3年\n\nこの期間中、HYTEは、HYTEの選択により、お客様に無料で、元のHYTEの欠陥部品を修理または新品または再調整された部品と交換します。HYTEまたはその認定サービスセンターによって交換されたすべての元の部品は、HYTEの所有物になります。お客様は、この限定保証の範囲外のサービスまたは修理について、現在の料金での支払いに責任を負います。HYTEから直接HYTE製品を購入した場合は、カスタマーサービス((833)GET-HYTE)に連絡して保証プロセスを開始してください。\n\n別の小売業者からHYTE製品を購入した場合は、元の購入場所を通じて保証請求を解決する方が速い場合があります。保証または返品期間は、製品を購入した場所によって異なる場合があるため、最初に販売店の返品ポリシーを確認することをお勧めします。",
              "_key": "7a36388934a6"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "3312c409bf1a",
          "markDefs": []
        },
        {
          "_key": "c4a1ee7d897a",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "保証条件",
              "_key": "c2e5a805f70d0"
            }
          ],
          "_type": "block",
          "style": "normal"
        },
        {
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "上記の限定保証には、次の条件が適用されます。",
              "_key": "05ca6dbead4f0"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "50948518a083",
          "markDefs": []
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "85df034e0124",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "この保証は、HYTEによって配布される製品にのみ適用され、製品が米国で購入および運用されている場合にのみ有効です。(米国48州、アラスカ、ハワイを含む米国内)",
              "_key": "cdaaa24c99720"
            }
          ],
          "level": 1
        },
        {
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "1f88783ec2e9",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "この保証は、ケースとそのコンポーネントの通常の使用のみを対象としています。HYTEは、(i)誤用、乱用、怠慢、不適切な出荷または設置に起因する損傷または欠陥の場合、この保証に基づいて責任を負わないものとします。(ii)火災、洪水、落雷、または不適切な電流などの災害。または(iii)権限のあるHYTE代表者以外の者によるサービスまたは変更。",
              "_key": "977e1f5d89970"
            }
          ]
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "製品が修理のためにHYTEに返送された場合–材料または製造上の欠陥が見つからない場合、返品送料と現在の人件費はお客様の負担となります。",
              "_key": "76503d2417500"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "8e666cc9ba62"
        },
        {
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "保証サービスを受けるには、売渡証またはその他の購入証明を保持する必要があります。",
              "_key": "c9d7be39d3e50"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "66681546d3b6"
        },
        {
          "style": "normal",
          "_key": "69ef87c58ddf",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "アカウントページで保証のために製品を登録する必要があります。",
              "_key": "9934a290b83a0"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "_key": "504ccfe1332a",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "製品のシリアル番号は改ざんされておらず、明確に識別できる必要があります。",
              "_key": "03107faa525c0",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "markDefs": [],
          "children": [
            {
              "text": "この保証の履行のために購入者に提供された交換部品については、保証の延長は認められません。",
              "_key": "0ab15da65bd40",
              "_type": "span",
              "marks": []
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal",
          "_key": "3c0103293e10",
          "listItem": "number"
        },
        {
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "保証サービスを受けるための手順",
              "_key": "333e95969fc00"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "761fc28eeb94"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "11804807ebcf",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "RMA(返品承認)ポリシー:修理が必要な場合、顧客は返品IDを取得し、購入の証明を提出する必要があります。返品IDとサービスは、HYTEまたは認定サービスセンターによってのみ提供されます。修理のために返品されたアイテムの30日後(最初の購入日から開始)の送料は、お客様の負担となります。返品されるすべての部品には、問題の詳細な手紙と元の購入証明書のコピーとともに、パッケージの外側に明確に書かれた返品IDが必要です。代金引換パッケージは受け付けておりません。パッケージの外側に返品ID番号が記載されていないパッケージは受け付けられません。返品番号は発行日から30日間のみ有効です。製品に問題がある場合は、次の手順に従ってサービスを受けてください。",
              "_key": "2153de296bd30"
            }
          ]
        },
        {
          "_key": "940275459c91",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "製品の修理が必要な場合は、修理デポに発送するための返品番号が発行されます。HYTEテクニカルサポートスタッフの指示に従って製品を発送してください。HYTEは、返品ID番号のない貨物を受け付けません。",
              "_key": "9cbb6a25aa550"
            }
          ],
          "level": 1,
          "_type": "block",
          "style": "normal"
        },
        {
          "style": "normal",
          "_key": "6b02e4337970",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "梱包手順に概説されているように、製品を元の箱または十分に保護された箱に梱包します。パッケージの外側に返品IDを明確に書くことが非常に重要です。HYTEは、ハワイ、アラスカ、グアム、プエルトリコを含む米国本土以外の返送料は支払いません。売渡証またはその他の購入証明のコピー、名前、住所、電話番号、問題の説明、および取得した返品IDを添えて製品を発送してください。\n\nハイトサービスセンター\nRMA#____________ 529\nN.ボールドウィンパークブルバード、シティオブインダストリー、カリフォルニア州91746、米国",
              "_key": "d17e415985ff0",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "style": "normal",
          "_key": "664f04bf9e5c",
          "listItem": "number",
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "製品を受け取ると、HYTEは(HYTEの裁量で)製品を修理または交換し、FedEx / UPSを介して2週間以内に(部品の在庫状況に応じて)返送します。",
              "_key": "3202ccca88820",
              "_type": "span"
            }
          ],
          "level": 1,
          "_type": "block"
        },
        {
          "_type": "block",
          "style": "normal",
          "_key": "4f0153df7649",
          "markDefs": [],
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": "\nHYTEは、商品性、特定目的への適合性、またはメーカーの製品または文書に関する表明または説明への適合性、その品質、性能、商品性、特定目的への適合性、または表明または説明への適合性の保証を含むがこれらに限定されない、明示または黙示を問わず、いかなる保証または表明も表明も行いません。",
              "_key": "da45441387ed"
            }
          ]
        },
        {
          "markDefs": [],
          "children": [
            {
              "marks": [],
              "text": "価格、仕様、および条件は、予告なしに変更される場合があります。HYTEは、タイポグラフィおよび/または写真撮影の誤りについて責任を負いません。",
              "_key": "dc08a7783489",
              "_type": "span"
            }
          ],
          "_type": "block",
          "style": "normal",
          "_key": "33c1df945d40"
        }
      ]
    },
    "pageTitle": "Warranty Service",
    "_createdAt": "2022-04-26T00:49:22Z",
    "_rev": "PhhHZqNTRwi3o5g62SQdI1",
    "_updatedAt": "2023-09-04T08:30:53Z",
    "content": [
      {
        "_key": "67490b206970",
        "markDefs": [],
        "children": [
          {
            "text": "Warranty Service",
            "_key": "0c69c836304a0",
            "_type": "span",
            "marks": []
          }
        ],
        "_type": "block",
        "style": "h1"
      },
      {
        "_type": "block",
        "style": "normal",
        "_key": "9f629ce601b1",
        "markDefs": [
          {
            "_type": "link",
            "href": "https://route.com/terms-and-conditions",
            "_key": "a0e0df0bfc06"
          },
          {
            "_type": "link",
            "href": "https://claims.route.com/",
            "_key": "9d92d295466c"
          }
        ],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "We warrant each HYTE product against defects in materials or workmanship in periods from the original date of invoice. HYTE will not be responsible for any issues that occur during transit such as damage, loss, and theft. These issues will be covered by our partner, Route. For more information please go here: ",
            "_key": "7c1f777751ca0"
          },
          {
            "_type": "span",
            "marks": [
              "a0e0df0bfc06"
            ],
            "text": "https://route.com/terms-and-conditions",
            "_key": "7c1f777751ca1"
          },
          {
            "_type": "span",
            "marks": [],
            "text": " To file a claim through Route, please go here: ",
            "_key": "7c1f777751ca2"
          },
          {
            "marks": [
              "9d92d295466c"
            ],
            "text": "https://claims.route.com/",
            "_key": "7c1f777751ca3",
            "_type": "span"
          }
        ]
      },
      {
        "_type": "block",
        "style": "normal",
        "_key": "85eb2dc52092",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "The warranty period for our products are as follows:",
            "_key": "a304cae2b1110"
          }
        ]
      },
      {
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "PC Case Warranty",
            "_key": "28cf6dc241600"
          },
          {
            "_type": "span",
            "marks": [],
            "text": ": 3 Years\n",
            "_key": "28cf6dc241601"
          },
          {
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Power Supply:",
            "_key": "d7df22a23be40"
          },
          {
            "_type": "span",
            "marks": [],
            "text": " 10 Years\n",
            "_key": "d7df22a23be41"
          },
          {
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Headsets",
            "_key": "d27e2115dc2e"
          },
          {
            "_type": "span",
            "marks": [],
            "text": " : 3 Years\n",
            "_key": "ae6be04c2a59"
          },
          {
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "PC Accessories (FA12 Fan pack, PCIE40 Riser cable, CNVS)",
            "_key": "65db89c7f38c"
          },
          {
            "_type": "span",
            "marks": [],
            "text": ": 3 Years\n\nDuring this period, HYTE will repair or replace original HYTE defective parts with new or reconditioned parts at HYTE’s option, without charge to you. All original parts replaced by HYTE or its authorized service centers, become the property of HYTE. You are responsible for the payment, at current rates, for any service or repair outside the scope of this limited warranty. If you purchased a HYTE product directly from HYTE, contact customer service at (833) GET-HYTE to initiate the warranty process.\n\nIf you purchased a HYTE product from another retailer, it may be faster to solve your warranty claim through your original point of purchase. Because the warranty or return period may vary depending on where you purchased the product, we recommend checking the return policy of the retailer first.",
            "_key": "7a36388934a6"
          }
        ],
        "_type": "block",
        "style": "normal",
        "_key": "3312c409bf1a"
      },
      {
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Warranty Conditions",
            "_key": "c2e5a805f70d0"
          }
        ],
        "_type": "block",
        "style": "normal",
        "_key": "c4a1ee7d897a"
      },
      {
        "style": "normal",
        "_key": "50948518a083",
        "markDefs": [],
        "children": [
          {
            "text": "The above Limited Warranty is subject to the following conditions:",
            "_key": "05ca6dbead4f0",
            "_type": "span",
            "marks": []
          }
        ],
        "_type": "block"
      },
      {
        "level": 1,
        "_type": "block",
        "style": "normal",
        "_key": "85df034e0124",
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "_key": "cdaaa24c99720",
            "_type": "span",
            "marks": [],
            "text": "This warranty extends only to products distributed by HYTE is effective only if the products are purchased and operated in the USA. (Within the USA including US 48 States, Alaska and Hawaii.)"
          }
        ]
      },
      {
        "_key": "1f88783ec2e9",
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "text": "This warranty covers only normal use of the case, and its components. HYTE shall not be liable under this warranty if any damage or defect results from (i) misuse, abuse, neglect, improper shipping or installation; (ii) disasters such as fire, flood, lightning or improper electric current; or (iii) service or alteration by anyone other than an authorized HYTE representative.",
            "_key": "977e1f5d89970",
            "_type": "span",
            "marks": []
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal"
      },
      {
        "_key": "8e666cc9ba62",
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "In the event that your product is returned to HYTE for repair – should no defect in materials or workmanship be found, you will be responsible for return shipping and current labor charges.",
            "_key": "76503d2417500"
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal"
      },
      {
        "style": "normal",
        "_key": "66681546d3b6",
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "You must retain your bill of sale or other proof of purchase to receive warranty service.",
            "_key": "c9d7be39d3e50"
          }
        ],
        "level": 1,
        "_type": "block"
      },
      {
        "_type": "block",
        "style": "normal",
        "_key": "69ef87c58ddf",
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "You must register your product for warranty on your account page.",
            "_key": "9934a290b83a0"
          }
        ],
        "level": 1
      },
      {
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "The product's serial number must be untampered with and clearly identifiable.",
            "_key": "03107faa525c0"
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal",
        "_key": "504ccfe1332a"
      },
      {
        "children": [
          {
            "_key": "0ab15da65bd40",
            "_type": "span",
            "marks": [],
            "text": "No warranty extension will be granted for any replacement part(s) furnished to the purchaser in fulfillment of this warranty."
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal",
        "_key": "3c0103293e10",
        "listItem": "number",
        "markDefs": []
      },
      {
        "markDefs": [],
        "children": [
          {
            "marks": [
              "strong"
            ],
            "text": "Procedures for Obtaining Warranty Service",
            "_key": "333e95969fc00",
            "_type": "span"
          }
        ],
        "_type": "block",
        "style": "normal",
        "_key": "761fc28eeb94"
      },
      {
        "_key": "11804807ebcf",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "RMA (Returning Merchandise Authorization) Policy:If repairs are required, the customer must obtain a Return ID and provide proof of purchase. Return ID and services are rendered by HYTE or Authorized Service Centers only. Any shipping costs after 30 days (starting from the original date of purchase) on any item returned for repair are the customer's responsibility. All returned parts must have a Return ID written clearly on the outside of the package along with a letter detailing the problems and a copy of the original proof of purchase. No COD packages will be accepted. No package will be accepted without a return ID number written on the outside of the package. Return numbers are only valid for 30 days from the date of issue.Should you have any problems with your product, please follow these procedures to obtain the service:",
            "_key": "2153de296bd30"
          }
        ],
        "_type": "block",
        "style": "normal"
      },
      {
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "If the product must be repaired, a return number will be issued for shipment to our repair depot. Please follow the instructions given by HYTE technical support staff to ship your product. HYTE will not accept any shipments without a return ID number.",
            "_key": "9cbb6a25aa550"
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal",
        "_key": "940275459c91",
        "listItem": "number"
      },
      {
        "_key": "6b02e4337970",
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "_key": "d17e415985ff0",
            "_type": "span",
            "marks": [],
            "text": "Pack the product in its original box or a well-protected box, as outlined in the Packing Instructions. It is very important that you write the Return ID clearly outside the package. HYTE will not pay for return shipping costs outside mainland U.S.A. including Hawaii, Alaska, Guam and Puerto Rico. Ship the product with a copy of your bill of sales or other proof of purchase, your name, address, phone number, description of the problem(s), and the return ID you have obtained to:\n\nHYTE Service Center \nRMA#____________ 529 \nN. Baldwin Park Blvd, City of Industry, CA 91746, USA"
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal"
      },
      {
        "listItem": "number",
        "markDefs": [],
        "children": [
          {
            "text": "Upon receiving the product, HYTE will repair or replace your product (at HYTE’s discretion) and will ship it back to you within 2 weeks(depending on parts availability) via FedEx/UPS.",
            "_key": "3202ccca88820",
            "_type": "span",
            "marks": []
          }
        ],
        "level": 1,
        "_type": "block",
        "style": "normal",
        "_key": "664f04bf9e5c"
      },
      {
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "\nHYTE makes no warranty or representation, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or conformity to any representation or description with respect to any manufacturer’s product or documentation, its quality, performance, merchantability, fitness for a particular purpose, or conformity to any representation or description.",
            "_key": "da45441387ed"
          }
        ],
        "_type": "block",
        "style": "normal",
        "_key": "4f0153df7649"
      },
      {
        "_type": "block",
        "style": "normal",
        "_key": "33c1df945d40",
        "markDefs": [],
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "Price, specification, and terms are subject to change without notice. HYTE is not responsible for errors in typography and/or photography.",
            "_key": "dc08a7783489"
          }
        ]
      }
    ]
  }
];
export function localizeSanity(
  data: SanityData | SanityData[],
  locale: Locale
): SanityData | SanityData[] {
  // If data is an array, map over it and localize each item
  if (Array.isArray(data)) {
    return data.map((item) => localizeSanity(item, locale) as SanityData);
  }

  // If data is an object, process its keys
  const localizedObj: SanityData = {};

  // First, handle non-Global keys
  for (const key in data) {
    // @ts-ignore
    if (!key.endsWith("Global")) {
      const value = data[key];
      // If the value is an object or array, recurse
      if (typeof value === "object" && value !== null) {
        localizedObj[key] = localizeSanity(value, locale);
      } else {
        localizedObj[key] = value;
      }
    }
  }

  // Next, handle the keys with the 'Global' suffix
  for (const key in data) {
    // @ts-ignore
    if (key.endsWith("Global")) {
      const baseKey = key.replace("Global", "");
      const localizedValue = data[key][sanityLangMap[locale]];
      if (localizedValue) {
        localizedObj[baseKey] = localizedValue;
      }
      // Delete the original 'Global' key from the output object
      delete localizedObj[key];
    }
  }

  return localizedObj;
}

// console.log("🏠 homepage data:\n", JSON.stringify(localizeSanity(homepageData, "ja"), null, 2));
// console.log("⛴️ product page data:\n", JSON.stringify(localizeSanity(productPageData, "ja"), null, 2));
console.log("😁 simple page data:\n", JSON.stringify(localizeSanity(simplePageData, "ja"), null, 2));

