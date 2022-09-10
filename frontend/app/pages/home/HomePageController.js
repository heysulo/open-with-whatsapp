app.controller('HomePageController', function ($http) {
    console.debug('HomePageController loaded');
    this.countryCodes = [
        {
            "isoCode": "af",
            "dialCode": "93",
            "name": "Afghanistan"
        },
        {
            "isoCode": "al",
            "dialCode": "355",
            "name": "Albania"
        },
        {
            "isoCode": "dz",
            "dialCode": "213",
            "name": "Algeria"
        },
        {
            "isoCode": "as",
            "dialCode": "1684",
            "name": "American Samoa"
        },
        {
            "isoCode": "ad",
            "dialCode": "376",
            "name": "Andorra"
        },
        {
            "isoCode": "ao",
            "dialCode": "244",
            "name": "Angola"
        },
        {
            "isoCode": "ai",
            "dialCode": "1264",
            "name": "Anguilla"
        },
        {
            "isoCode": "ag",
            "dialCode": "1268",
            "name": "Antigua and Barbuda"
        },
        {
            "isoCode": "ar",
            "dialCode": "54",
            "name": "Argentina"
        },
        {
            "isoCode": "am",
            "dialCode": "374",
            "name": "Armenia"
        },
        {
            "isoCode": "aw",
            "dialCode": "297",
            "name": "Aruba"
        },
        {
            "isoCode": "au",
            "dialCode": "61",
            "name": "Australia"
        },
        {
            "isoCode": "at",
            "dialCode": "43",
            "name": "Austria"
        },
        {
            "isoCode": "az",
            "dialCode": "994",
            "name": "Azerbaijan"
        },
        {
            "isoCode": "bs",
            "dialCode": "1242",
            "name": "Bahamas"
        },
        {
            "isoCode": "bh",
            "dialCode": "973",
            "name": "Bahrain"
        },
        {
            "isoCode": "bd",
            "dialCode": "880",
            "name": "Bangladesh"
        },
        {
            "isoCode": "bb",
            "dialCode": "1246",
            "name": "Barbados"
        },
        {
            "isoCode": "by",
            "dialCode": "375",
            "name": "Belarus"
        },
        {
            "isoCode": "be",
            "dialCode": "32",
            "name": "Belgium"
        },
        {
            "isoCode": "bz",
            "dialCode": "501",
            "name": "Belize"
        },
        {
            "isoCode": "bj",
            "dialCode": "229",
            "name": "Benin"
        },
        {
            "isoCode": "bm",
            "dialCode": "1441",
            "name": "Bermuda"
        },
        {
            "isoCode": "bt",
            "dialCode": "975",
            "name": "Bhutan"
        },
        {
            "isoCode": "bo",
            "dialCode": "591",
            "name": "Bolivia"
        },
        {
            "isoCode": "ba",
            "dialCode": "387",
            "name": "Bosnia and Herzegovina"
        },
        {
            "isoCode": "bw",
            "dialCode": "267",
            "name": "Botswana"
        },
        {
            "isoCode": "br",
            "dialCode": "55",
            "name": "Brazil"
        },
        {
            "isoCode": "io",
            "dialCode": "246",
            "name": "British Indian Ocean Territory"
        },
        {
            "isoCode": "vg",
            "dialCode": "1284",
            "name": "British Virgin Islands"
        },
        {
            "isoCode": "bn",
            "dialCode": "673",
            "name": "Brunei"
        },
        {
            "isoCode": "bg",
            "dialCode": "359",
            "name": "Bulgaria"
        },
        {
            "isoCode": "bf",
            "dialCode": "226",
            "name": "Burkina Faso"
        },
        {
            "isoCode": "mm",
            "dialCode": "95",
            "name": "Burma-Myanmar"
        },
        {
            "isoCode": "bi",
            "dialCode": "257",
            "name": "Burundi"
        },
        {
            "isoCode": "kh",
            "dialCode": "855",
            "name": "Cambodia"
        },
        {
            "isoCode": "cm",
            "dialCode": "237",
            "name": "Cameroon"
        },
        {
            "isoCode": "ca",
            "dialCode": "1",
            "name": "Canada"
        },
        {
            "isoCode": "cv",
            "dialCode": "238",
            "name": "Cape Verde"
        },
        {
            "isoCode": "ky",
            "dialCode": "1345",
            "name": "Cayman Islands"
        },
        {
            "isoCode": "cf",
            "dialCode": "236",
            "name": "Central African Republic"
        },
        {
            "isoCode": "td",
            "dialCode": "235",
            "name": "Chad"
        },
        {
            "isoCode": "cl",
            "dialCode": "56",
            "name": "Chile"
        },
        {
            "isoCode": "cn",
            "dialCode": "86",
            "name": "China"
        },
        {
            "isoCode": "cx",
            "dialCode": "6189",
            "name": "Christmas Island"
        },
        {
            "isoCode": "co",
            "dialCode": "57",
            "name": "Colombia"
        },
        {
            "isoCode": "km",
            "dialCode": "269",
            "name": "Comoros"
        },
        {
            "isoCode": "cg",
            "dialCode": "242",
            "name": "Congo"
        },
        {
            "isoCode": "cd",
            "dialCode": "243",
            "name": "Congo, The Democratic Republic"
        },
        {
            "isoCode": "ck",
            "dialCode": "682",
            "name": "Cook Islands"
        },
        {
            "isoCode": "cr",
            "dialCode": "506",
            "name": "Costa Rica"
        },
        {
            "isoCode": "hr",
            "dialCode": "385",
            "name": "Croatia"
        },
        {
            "isoCode": "cu",
            "dialCode": "53",
            "name": "Cuba"
        },
        {
            "isoCode": "cy",
            "dialCode": "357",
            "name": "Cyprus"
        },
        {
            "isoCode": "cz",
            "dialCode": "420",
            "name": "Czech Republic"
        },
        {
            "isoCode": "dk",
            "dialCode": "45",
            "name": "Denmark"
        },
        {
            "isoCode": "dj",
            "dialCode": "253",
            "name": "Djibouti"
        },
        {
            "isoCode": "dm",
            "dialCode": "1767",
            "name": "Dominica"
        },
        {
            "isoCode": "do",
            "dialCode": "1849",
            "name": "Dominican Republic"
        },
        {
            "isoCode": "do",
            "dialCode": "1829",
            "name": "Dominican Republic"
        },
        {
            "isoCode": "do",
            "dialCode": "1809",
            "name": "Dominican Republic"
        },
        {
            "isoCode": "tl",
            "dialCode": "670",
            "name": "East Timor"
        },
        {
            "isoCode": "ec",
            "dialCode": "593",
            "name": "Ecuador"
        },
        {
            "isoCode": "eg",
            "dialCode": "20",
            "name": "Egypt"
        },
        {
            "isoCode": "sv",
            "dialCode": "503",
            "name": "El Salvador"
        },
        {
            "isoCode": "gq",
            "dialCode": "240",
            "name": "Equatorial Guinea"
        },
        {
            "isoCode": "er",
            "dialCode": "291",
            "name": "Eritrea"
        },
        {
            "isoCode": "ee",
            "dialCode": "372",
            "name": "Estonia"
        },
        {
            "isoCode": "et",
            "dialCode": "251",
            "name": "Ethiopia"
        },
        {
            "isoCode": "fo",
            "dialCode": "298",
            "name": "Faroe Islands"
        },
        {
            "isoCode": "fj",
            "dialCode": "679",
            "name": "Fiji"
        },
        {
            "isoCode": "fi",
            "dialCode": "358",
            "name": "Finland"
        },
        {
            "isoCode": "fr",
            "dialCode": "33",
            "name": "France"
        },
        {
            "isoCode": "gf",
            "dialCode": "594",
            "name": "French Guiana"
        },
        {
            "isoCode": "pf",
            "dialCode": "689",
            "name": "French Polynesia"
        },
        {
            "isoCode": "ga",
            "dialCode": "241",
            "name": "Gabon"
        },
        {
            "isoCode": "gm",
            "dialCode": "220",
            "name": "Gambia"
        },
        {
            "isoCode": "ge",
            "dialCode": "995",
            "name": "Georgia"
        },
        {
            "isoCode": "de",
            "dialCode": "49",
            "name": "Germany"
        },
        {
            "isoCode": "gh",
            "dialCode": "233",
            "name": "Ghana"
        },
        {
            "isoCode": "gi",
            "dialCode": "350",
            "name": "Gibraltar"
        },
        {
            "isoCode": "gr",
            "dialCode": "30",
            "name": "Greece"
        },
        {
            "isoCode": "gl",
            "dialCode": "299",
            "name": "Greenland"
        },
        {
            "isoCode": "gd",
            "dialCode": "1473",
            "name": "Grenada"
        },
        {
            "isoCode": "gp",
            "dialCode": "590",
            "name": "Guadeloupe"
        },
        {
            "isoCode": "gu",
            "dialCode": "1671",
            "name": "Guam"
        },
        {
            "isoCode": "gt",
            "dialCode": "502",
            "name": "Guatemala"
        },
        {
            "isoCode": "gn",
            "dialCode": "224",
            "name": "Guinea"
        },
        {
            "isoCode": "gw",
            "dialCode": "245",
            "name": "Guinea-Bissau"
        },
        {
            "isoCode": "gy",
            "dialCode": "592",
            "name": "Guyana"
        },
        {
            "isoCode": "ht",
            "dialCode": "509",
            "name": "Haiti"
        },
        {
            "isoCode": "hn",
            "dialCode": "504",
            "name": "Honduras"
        },
        {
            "isoCode": "hk",
            "dialCode": "852",
            "name": "Hong Kong"
        },
        {
            "isoCode": "hu",
            "dialCode": "36",
            "name": "Hungary"
        },
        {
            "isoCode": "is",
            "dialCode": "354",
            "name": "Iceland"
        },
        {
            "isoCode": "in",
            "dialCode": "91",
            "name": "India"
        },
        {
            "isoCode": "id",
            "dialCode": "62",
            "name": "Indonesia"
        },
        {
            "isoCode": "ir",
            "dialCode": "98",
            "name": "Iran"
        },
        {
            "isoCode": "iq",
            "dialCode": "964",
            "name": "Iraq"
        },
        {
            "isoCode": "ie",
            "dialCode": "353",
            "name": "Ireland"
        },
        {
            "isoCode": "il",
            "dialCode": "972",
            "name": "Israel"
        },
        {
            "isoCode": "it",
            "dialCode": "39",
            "name": "Italy"
        },
        {
            "isoCode": "ci",
            "dialCode": "225",
            "name": "Ivory Coast"
        },
        {
            "isoCode": "jm",
            "dialCode": "1876",
            "name": "Jamaica"
        },
        {
            "isoCode": "jp",
            "dialCode": "81",
            "name": "Japan"
        },
        {
            "isoCode": "jo",
            "dialCode": "962",
            "name": "Jordan"
        },
        {
            "isoCode": "kz",
            "dialCode": "7",
            "name": "Kazakhstan"
        },
        {
            "isoCode": "ke",
            "dialCode": "254",
            "name": "Kenya"
        },
        {
            "isoCode": "ki",
            "dialCode": "686",
            "name": "Kiribati"
        },
        {
            "isoCode": "kw",
            "dialCode": "965",
            "name": "Kuwait"
        },
        {
            "isoCode": "kg",
            "dialCode": "996",
            "name": "Kyrgyzstan"
        },
        {
            "isoCode": "la",
            "dialCode": "856",
            "name": "Laos"
        },
        {
            "isoCode": "lv",
            "dialCode": "371",
            "name": "Latvia"
        },
        {
            "isoCode": "lb",
            "dialCode": "961",
            "name": "Lebanon"
        },
        {
            "isoCode": "ls",
            "dialCode": "266",
            "name": "Lesotho"
        },
        {
            "isoCode": "lr",
            "dialCode": "231",
            "name": "Liberia"
        },
        {
            "isoCode": "ly",
            "dialCode": "218",
            "name": "Libya"
        },
        {
            "isoCode": "li",
            "dialCode": "423",
            "name": "Liechtenstein"
        },
        {
            "isoCode": "lt",
            "dialCode": "370",
            "name": "Lithuania"
        },
        {
            "isoCode": "lu",
            "dialCode": "352",
            "name": "Luxembourg"
        },
        {
            "isoCode": "mo",
            "dialCode": "853",
            "name": "Macau"
        },
        {
            "isoCode": "mk",
            "dialCode": "389",
            "name": "Macedonia"
        },
        {
            "isoCode": "mg",
            "dialCode": "261",
            "name": "Madagascar"
        },
        {
            "isoCode": "mw",
            "dialCode": "265",
            "name": "Malawi"
        },
        {
            "isoCode": "my",
            "dialCode": "60",
            "name": "Malaysia"
        },
        {
            "isoCode": "mv",
            "dialCode": "960",
            "name": "Maldives"
        },
        {
            "isoCode": "ml",
            "dialCode": "223",
            "name": "Mali"
        },
        {
            "isoCode": "mt",
            "dialCode": "356",
            "name": "Malta"
        },
        {
            "isoCode": "mh",
            "dialCode": "692",
            "name": "Marshall Islands"
        },
        {
            "isoCode": "mq",
            "dialCode": "596",
            "name": "Martinique"
        },
        {
            "isoCode": "mr",
            "dialCode": "222",
            "name": "Mauritania"
        },
        {
            "isoCode": "mu",
            "dialCode": "230",
            "name": "Mauritius"
        },
        {
            "isoCode": "yt",
            "dialCode": "262",
            "name": "Mayotte"
        },
        {
            "isoCode": "mx",
            "dialCode": "52",
            "name": "Mexico"
        },
        {
            "isoCode": "md",
            "dialCode": "373",
            "name": "Moldova"
        },
        {
            "isoCode": "mc",
            "dialCode": "377",
            "name": "Monaco"
        },
        {
            "isoCode": "mn",
            "dialCode": "976",
            "name": "Mongolia"
        },
        {
            "isoCode": "me",
            "dialCode": "382",
            "name": "Montenegro"
        },
        {
            "isoCode": "ms",
            "dialCode": "1664",
            "name": "Montserrat"
        },
        {
            "isoCode": "ma",
            "dialCode": "212",
            "name": "Morocco"
        },
        {
            "isoCode": "mz",
            "dialCode": "258",
            "name": "Mozambique"
        },
        {
            "isoCode": "na",
            "dialCode": "264",
            "name": "Namibia"
        },
        {
            "isoCode": "nr",
            "dialCode": "674",
            "name": "Nauru"
        },
        {
            "isoCode": "np",
            "dialCode": "977",
            "name": "Nepal"
        },
        {
            "isoCode": "nl",
            "dialCode": "31",
            "name": "Netherlands"
        },
        {
            "isoCode": "cw",
            "dialCode": "599",
            "name": "Curaçao"
        },
        {
            "isoCode": "nc",
            "dialCode": "687",
            "name": "New Caledonia"
        },
        {
            "isoCode": "nz",
            "dialCode": "64",
            "name": "New Zealand"
        },
        {
            "isoCode": "ni",
            "dialCode": "505",
            "name": "Nicaragua"
        },
        {
            "isoCode": "ne",
            "dialCode": "227",
            "name": "Niger"
        },
        {
            "isoCode": "ng",
            "dialCode": "234",
            "name": "Nigeria"
        },
        {
            "isoCode": "nu",
            "dialCode": "683",
            "name": "Niue"
        },
        {
            "isoCode": "nf",
            "dialCode": "672",
            "name": "Norfolk Island"
        },
        {
            "isoCode": "mp",
            "dialCode": "1670",
            "name": "Northern Mariana Islands"
        },
        {
            "isoCode": "kp",
            "dialCode": "850",
            "name": "North Korea"
        },
        {
            "isoCode": "no",
            "dialCode": "47",
            "name": "Norway"
        },
        {
            "isoCode": "om",
            "dialCode": "968",
            "name": "Oman"
        },
        {
            "isoCode": "pk",
            "dialCode": "92",
            "name": "Pakistan"
        },
        {
            "isoCode": "pw",
            "dialCode": "680",
            "name": "Palau"
        },
        {
            "isoCode": "ps",
            "dialCode": "970",
            "name": "Palestine"
        },
        {
            "isoCode": "pa",
            "dialCode": "507",
            "name": "Panama"
        },
        {
            "isoCode": "pg",
            "dialCode": "675",
            "name": "Papua New Guinea"
        },
        {
            "isoCode": "py",
            "dialCode": "595",
            "name": "Paraguay"
        },
        {
            "isoCode": "pe",
            "dialCode": "51",
            "name": "Peru"
        },
        {
            "isoCode": "ph",
            "dialCode": "63",
            "name": "Philippines"
        },
        {
            "isoCode": "pn",
            "dialCode": "870",
            "name": "Pitcairn Islands"
        },
        {
            "isoCode": "pl",
            "dialCode": "48",
            "name": "Poland"
        },
        {
            "isoCode": "pt",
            "dialCode": "351",
            "name": "Portugal"
        },
        {
            "isoCode": "pr",
            "dialCode": "1787",
            "name": "Puerto Rico"
        },
        {
            "isoCode": "qa",
            "dialCode": "974",
            "name": "Qatar"
        },
        {
            "isoCode": "re",
            "dialCode": "262",
            "name": "Réunion"
        },
        {
            "isoCode": "ro",
            "dialCode": "40",
            "name": "Romania"
        },
        {
            "isoCode": "ru",
            "dialCode": "7",
            "name": "Russia"
        },
        {
            "isoCode": "rw",
            "dialCode": "250",
            "name": "Rwanda"
        },
        {
            "isoCode": "sh",
            "dialCode": "290",
            "name": "Saint Helena"
        },
        {
            "isoCode": "kn",
            "dialCode": "1869",
            "name": "Saint Kitts and Nevis"
        },
        {
            "isoCode": "lc",
            "dialCode": "1758",
            "name": "Saint Lucia"
        },
        {
            "isoCode": "mf",
            "dialCode": "1599",
            "name": "Saint Martin"
        },
        {
            "isoCode": "pm",
            "dialCode": "508",
            "name": "Saint Pierre and Miquelon"
        },
        {
            "isoCode": "vc",
            "dialCode": "1784",
            "name": "Saint Vincent and the Grenadines"
        },
        {
            "isoCode": "ws",
            "dialCode": "685",
            "name": "Samoa"
        },
        {
            "isoCode": "sm",
            "dialCode": "378",
            "name": "San Marino"
        },
        {
            "isoCode": "st",
            "dialCode": "239",
            "name": "São Tomé and Príncipe"
        },
        {
            "isoCode": "sa",
            "dialCode": "966",
            "name": "Saudi Arabia"
        },
        {
            "isoCode": "sn",
            "dialCode": "221",
            "name": "Senegal"
        },
        {
            "isoCode": "rs",
            "dialCode": "381",
            "name": "Serbia"
        },
        {
            "isoCode": "sc",
            "dialCode": "248",
            "name": "Seychelles"
        },
        {
            "isoCode": "fk",
            "dialCode": "500",
            "name": "Falkland Islands"
        },
        {
            "isoCode": "sl",
            "dialCode": "232",
            "name": "Sierra Leone"
        },
        {
            "isoCode": "sg",
            "dialCode": "65",
            "name": "Singapore"
        },
        {
            "isoCode": "sk",
            "dialCode": "421",
            "name": "Slovakia"
        },
        {
            "isoCode": "si",
            "dialCode": "386",
            "name": "Slovenia"
        },
        {
            "isoCode": "sb",
            "dialCode": "677",
            "name": "Solomon Islands"
        },
        {
            "isoCode": "so",
            "dialCode": "252",
            "name": "Somalia"
        },
        {
            "isoCode": "za",
            "dialCode": "27",
            "name": "South Africa"
        },
        {
            "isoCode": "kr",
            "dialCode": "82",
            "name": "South Korea"
        },
        {
            "isoCode": "ss",
            "dialCode": "211",
            "name": "South Sudan"
        },
        {
            "isoCode": "es",
            "dialCode": "34",
            "name": "Spain"
        },
        {
            "isoCode": "lk",
            "dialCode": "94",
            "name": "Sri Lanka"
        },
        {
            "isoCode": "sd",
            "dialCode": "249",
            "name": "Sudan"
        },
        {
            "isoCode": "sr",
            "dialCode": "597",
            "name": "Suriname"
        },
        {
            "isoCode": "sz",
            "dialCode": "268",
            "name": "Swaziland"
        },
        {
            "isoCode": "se",
            "dialCode": "46",
            "name": "Sweden"
        },
        {
            "isoCode": "ch",
            "dialCode": "41",
            "name": "Switzerland"
        },
        {
            "isoCode": "sy",
            "dialCode": "963",
            "name": "Syria"
        },
        {
            "isoCode": "tw",
            "dialCode": "886",
            "name": "Taiwan"
        },
        {
            "isoCode": "tj",
            "dialCode": "992",
            "name": "Tajikistan"
        },
        {
            "isoCode": "tz",
            "dialCode": "255",
            "name": "Tanzania"
        },
        {
            "isoCode": "th",
            "dialCode": "66",
            "name": "Thailand"
        },
        {
            "isoCode": "tg",
            "dialCode": "228",
            "name": "Togo"
        },
        {
            "isoCode": "tk",
            "dialCode": "690",
            "name": "Tokelau"
        },
        {
            "isoCode": "to",
            "dialCode": "676",
            "name": "Tonga"
        },
        {
            "isoCode": "tt",
            "dialCode": "1868",
            "name": "Trinidad and Tobago"
        },
        {
            "isoCode": "tn",
            "dialCode": "216",
            "name": "Tunisia"
        },
        {
            "isoCode": "tr",
            "dialCode": "90",
            "name": "Turkey"
        },
        {
            "isoCode": "tm",
            "dialCode": "993",
            "name": "Turkmenistan"
        },
        {
            "isoCode": "tc",
            "dialCode": "1649",
            "name": "Turks and Caicos Islands"
        },
        {
            "isoCode": "tv",
            "dialCode": "688",
            "name": "Tuvalu"
        },
        {
            "isoCode": "ug",
            "dialCode": "256",
            "name": "Uganda"
        },
        {
            "isoCode": "gb",
            "dialCode": "44",
            "name": "United Kingdom"
        },
        {
            "isoCode": "ua",
            "dialCode": "380",
            "name": "Ukraine"
        },
        {
            "isoCode": "ae",
            "dialCode": "971",
            "name": "United Arab Emirates"
        },
        {
            "isoCode": "uy",
            "dialCode": "598",
            "name": "Uruguay"
        },
        {
            "isoCode": "us",
            "dialCode": "1",
            "name": "United States"
        },
        {
            "isoCode": "uz",
            "dialCode": "998",
            "name": "Uzbekistan"
        },
        {
            "isoCode": "vu",
            "dialCode": "678",
            "name": "Vanuatu"
        },
        {
            "isoCode": "ve",
            "dialCode": "58",
            "name": "Venezuela"
        },
        {
            "isoCode": "vn",
            "dialCode": "84",
            "name": "Vietnam"
        },
        {
            "isoCode": "vi",
            "dialCode": "1340",
            "name": "Virgin Islands"
        },
        {
            "isoCode": "wf",
            "dialCode": "681",
            "name": "Wallis and Futuna"
        },
        {
            "isoCode": "ye",
            "dialCode": "967",
            "name": "Yemen"
        },
        {
            "isoCode": "zm",
            "dialCode": "260",
            "name": "Zambia"
        },
        {
            "isoCode": "zw",
            "dialCode": "263",
            "name": "Zimbabwe"
        }
    ];
    this.selectedCountry = this.countryCodes[0];
    this.target = ''
    $http.get('http://ip-api.com/json').then((response)=> {
        this.selectedCountry = this.countryCodes.find((c) => c.isoCode === response.data.countryCode.toLowerCase())
    })

    this.getSelectOptionLabel = (country) => {
        return `${country.name} (+${country.dialCode})`
    }

    this.open = () => {
        window.location = `https://wa.me/${this.selectedCountry.dialCode}${this.target}`;
    }
});