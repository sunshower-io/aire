/**
 * @excluded
 */

import * as Identicon from "jdenticon";

export class RoleBasedAccessControl {

  users = [
    {
      "_id": "5d85a6261754ba3b58f4eb55",
      "index": 0,
      "guid": "6f286020-c120-4382-8848-1d14ed23a398",
      "isActive": false,
      "balance": "$3,333.41",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": {
        "first": "Helen",
        "last": "Mccray"
      },
      "company": "ZENSOR",
      "email": "helen.mccray@zensor.co.uk",
      "phone": "+1 (920) 437-2713",
      "address": "824 Village Road, Jugtown, Mississippi, 9930",
      "registered": "Saturday, March 14, 2015 1:20 AM",
      "latitude": "45.997632",
      "longitude": "97.199083",
      "roles": [
        "user",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627915737ce485442a0",
      "index": 1,
      "guid": "46a3a53f-1ebb-4f40-8dc2-544dab1153da",
      "isActive": true,
      "balance": "$3,230.28",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "green",
      "name": {
        "first": "Francis",
        "last": "Haney"
      },
      "company": "DRAGBOT",
      "email": "francis.haney@dragbot.me",
      "phone": "+1 (846) 566-3310",
      "address": "452 Dearborn Court, Goochland, North Carolina, 6699",
      "registered": "Tuesday, January 15, 2019 5:00 PM",
      "latitude": "-2.978041",
      "longitude": "-114.351051",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a62749154fdea3f34a96",
      "index": 2,
      "guid": "2b16eff4-cd8f-42d6-9175-7c7028b119d4",
      "isActive": true,
      "balance": "$3,903.37",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": {
        "first": "Larsen",
        "last": "Fleming"
      },
      "company": "VALPREAL",
      "email": "larsen.fleming@valpreal.org",
      "phone": "+1 (888) 488-2649",
      "address": "285 Moultrie Street, Tilleda, Iowa, 9354",
      "registered": "Sunday, May 22, 2016 11:54 AM",
      "latitude": "-60.402807",
      "longitude": "163.112439",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627ed9358d587efe131",
      "index": 3,
      "guid": "3fe66cd9-c0c4-44e9-b48f-4ac84d324858",
      "isActive": true,
      "balance": "$3,876.11",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "green",
      "name": {
        "first": "Reed",
        "last": "Richmond"
      },
      "company": "ADORNICA",
      "email": "reed.richmond@adornica.ca",
      "phone": "+1 (940) 501-2995",
      "address": "942 Oxford Street, Bartonsville, New Jersey, 8667",
      "registered": "Wednesday, January 18, 2017 4:04 PM",
      "latitude": "74.726939",
      "longitude": "-110.405858",
      "roles": [
        "tenant:admin",
        1
      ]
    },
    {
      "_id": "5d85a627d47a485c6a4d418e",
      "index": 4,
      "guid": "2c000df7-2ad3-40b1-a52a-849f0efb9a2d",
      "isActive": false,
      "balance": "$1,211.46",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "green",
      "name": {
        "first": "Manuela",
        "last": "Boone"
      },
      "company": "ILLUMITY",
      "email": "manuela.boone@illumity.biz",
      "phone": "+1 (983) 422-3444",
      "address": "288 Robert Street, Barstow, New York, 985",
      "registered": "Tuesday, July 1, 2014 1:26 PM",
      "latitude": "-27.60398",
      "longitude": "32.574181",
      "roles": [
        "sysadmin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627678f2efe58a6c269",
      "index": 5,
      "guid": "06a19471-9544-4567-9f59-1c610e4d055d",
      "isActive": true,
      "balance": "$3,342.08",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": {
        "first": "Briggs",
        "last": "Stokes"
      },
      "company": "MAGNEMO",
      "email": "briggs.stokes@magnemo.net",
      "phone": "+1 (821) 449-2837",
      "address": "404 Cropsey Avenue, Loma, Kentucky, 9297",
      "registered": "Sunday, April 9, 2017 11:15 PM",
      "latitude": "-60.62568",
      "longitude": "-103.647826",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a62781a81d3b2e0a70d5",
      "index": 6,
      "guid": "3afe920f-8925-4fa8-ab0f-dcded7123c49",
      "isActive": false,
      "balance": "$3,019.47",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": {
        "first": "England",
        "last": "Sutton"
      },
      "company": "EXOTECHNO",
      "email": "england.sutton@exotechno.info",
      "phone": "+1 (874) 410-3734",
      "address": "715 Ocean Court, Jackpot, Ohio, 1111",
      "registered": "Wednesday, December 5, 2018 1:16 PM",
      "latitude": "-70.783747",
      "longitude": "-64.390347",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627f0c1e0e897a5c6d0",
      "index": 7,
      "guid": "8a2a58db-6ab1-45ca-9614-c7cb0f37d4e5",
      "isActive": false,
      "balance": "$3,341.14",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": {
        "first": "Richard",
        "last": "Davenport"
      },
      "company": "VURBO",
      "email": "richard.davenport@vurbo.tv",
      "phone": "+1 (804) 470-3231",
      "address": "531 Vine Street, Katonah, Pennsylvania, 8331",
      "registered": "Friday, June 30, 2017 9:21 PM",
      "latitude": "-72.121138",
      "longitude": "17.459084",
      "roles": [
        1,
        "user"
      ]
    },
    {
      "_id": "5d85a6274a4896df1aea7b99",
      "index": 8,
      "guid": "d6172aa9-8734-4870-b775-ae40c6e7d7a2",
      "isActive": false,
      "balance": "$3,093.65",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": {
        "first": "Marylou",
        "last": "Mejia"
      },
      "company": "ZILODYNE",
      "email": "marylou.mejia@zilodyne.com",
      "phone": "+1 (853) 437-2771",
      "address": "109 Dupont Street, Beaverdale, Tennessee, 2302",
      "registered": "Tuesday, December 13, 2016 7:35 AM",
      "latitude": "-45.811786",
      "longitude": "178.654101",
      "roles": [
        "user",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627271a7a2f41698b39",
      "index": 9,
      "guid": "b6da0a7f-d0c5-406a-8925-3062b9bf0346",
      "isActive": true,
      "balance": "$1,578.33",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "blue",
      "name": {
        "first": "Ford",
        "last": "Maxwell"
      },
      "company": "EXIAND",
      "email": "ford.maxwell@exiand.io",
      "phone": "+1 (847) 573-2672",
      "address": "355 Lester Court, Valle, Nebraska, 2032",
      "registered": "Monday, July 27, 2015 8:40 AM",
      "latitude": "-68.213803",
      "longitude": "-44.800853",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627fb7ebaa6a3b31e0d",
      "index": 10,
      "guid": "9a4a392a-87d2-4a07-971d-f517cf0f2c76",
      "isActive": false,
      "balance": "$3,243.06",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": {
        "first": "Meyers",
        "last": "Mckee"
      },
      "company": "ZAGGLE",
      "email": "meyers.mckee@zaggle.us",
      "phone": "+1 (977) 431-2487",
      "address": "135 Prospect Avenue, Fairmount, Utah, 6189",
      "registered": "Sunday, October 9, 2016 9:45 PM",
      "latitude": "51.369433",
      "longitude": "10.895914",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a627ed0d224278cd1bfe",
      "index": 11,
      "guid": "1b76ff9e-21ec-498e-a27e-a7f62a6e1bb9",
      "isActive": false,
      "balance": "$1,705.99",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "blue",
      "name": {
        "first": "April",
        "last": "Aguilar"
      },
      "company": "BITTOR",
      "email": "april.aguilar@bittor.biz",
      "phone": "+1 (838) 482-3271",
      "address": "605 Woodbine Street, Waukeenah, California, 1320",
      "registered": "Wednesday, July 10, 2019 4:26 PM",
      "latitude": "-49.050059",
      "longitude": "-150.109116",
      "roles": [
        "user",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a62733630413034a2a5a",
      "index": 12,
      "guid": "40a86556-7ac7-4f7a-bd2b-5ec0a4f7bdba",
      "isActive": false,
      "balance": "$3,925.59",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": {
        "first": "Bonnie",
        "last": "Evans"
      },
      "company": "ORBIFLEX",
      "email": "bonnie.evans@orbiflex.co.uk",
      "phone": "+1 (843) 410-3947",
      "address": "279 Nelson Street, Albrightsville, Marshall Islands, 6259",
      "registered": "Thursday, March 16, 2017 1:35 AM",
      "latitude": "-0.088807",
      "longitude": "101.843311",
      "roles": [
        "user",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627dbbe2c19a4b04657",
      "index": 13,
      "guid": "014deb36-18ca-4544-acdc-680908f466f7",
      "isActive": false,
      "balance": "$1,582.08",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "brown",
      "name": {
        "first": "Marisa",
        "last": "Craft"
      },
      "company": "DELPHIDE",
      "email": "marisa.craft@delphide.me",
      "phone": "+1 (952) 524-3874",
      "address": "963 Halleck Street, Jessie, Louisiana, 3129",
      "registered": "Sunday, November 4, 2018 8:36 PM",
      "latitude": "-67.413581",
      "longitude": "53.645333",
      "roles": [
        1,
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a6273fba4cd8c9a4ca92",
      "index": 14,
      "guid": "0705ac3e-d6e6-4b60-aba3-14ca54c79240",
      "isActive": false,
      "balance": "$1,945.74",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "green",
      "name": {
        "first": "Rhodes",
        "last": "Mcclure"
      },
      "company": "EARBANG",
      "email": "rhodes.mcclure@earbang.org",
      "phone": "+1 (880) 430-3132",
      "address": "929 Grimes Road, Snelling, Nevada, 3496",
      "registered": "Tuesday, May 15, 2018 12:24 PM",
      "latitude": "25.039778",
      "longitude": "117.027954",
      "roles": [
        "tenant:admin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627a391909a2eb797bc",
      "index": 15,
      "guid": "7c72fb76-b28f-4b5f-90b7-ec9dc9bd0231",
      "isActive": true,
      "balance": "$1,335.71",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "green",
      "name": {
        "first": "Crane",
        "last": "Booth"
      },
      "company": "URBANSHEE",
      "email": "crane.booth@urbanshee.ca",
      "phone": "+1 (871) 422-3298",
      "address": "699 Bedford Place, Loomis, New Mexico, 5055",
      "registered": "Wednesday, April 22, 2015 11:07 PM",
      "latitude": "0.725886",
      "longitude": "-144.771561",
      "roles": [
        "user",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a6275ececdce77ae1327",
      "index": 16,
      "guid": "a343b240-86cd-421a-9f7e-bc9cce4c52a9",
      "isActive": false,
      "balance": "$3,564.53",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "blue",
      "name": {
        "first": "Armstrong",
        "last": "Vaughan"
      },
      "company": "TETAK",
      "email": "armstrong.vaughan@tetak.biz",
      "phone": "+1 (924) 592-2595",
      "address": "466 Madison Street, Zortman, Minnesota, 790",
      "registered": "Sunday, May 14, 2017 5:04 PM",
      "latitude": "-29.311649",
      "longitude": "-82.597347",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a627769db13bc8ab7009",
      "index": 17,
      "guid": "bee850fb-b9bf-403b-9594-ae1a1868ac7a",
      "isActive": false,
      "balance": "$1,943.63",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": {
        "first": "Shari",
        "last": "Finch"
      },
      "company": "TELEPARK",
      "email": "shari.finch@telepark.net",
      "phone": "+1 (865) 466-3358",
      "address": "922 Hart Street, Carlos, American Samoa, 1257",
      "registered": "Thursday, April 25, 2019 7:18 PM",
      "latitude": "41.485946",
      "longitude": "99.616986",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627b7368f7f7941a332",
      "index": 18,
      "guid": "ab079de2-3f47-4554-ab38-b0efab8fae2b",
      "isActive": true,
      "balance": "$1,265.67",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Cabrera",
        "last": "Wagner"
      },
      "company": "GYNKO",
      "email": "cabrera.wagner@gynko.info",
      "phone": "+1 (863) 538-3233",
      "address": "929 Lorraine Street, Guthrie, Wisconsin, 3204",
      "registered": "Sunday, November 26, 2017 5:40 AM",
      "latitude": "4.799817",
      "longitude": "40.215766",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a6278553efaec8a23ad5",
      "index": 19,
      "guid": "4ddb774c-d913-4fa5-bdfe-2380ca37603c",
      "isActive": true,
      "balance": "$1,710.23",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "brown",
      "name": {
        "first": "Kim",
        "last": "Best"
      },
      "company": "IMKAN",
      "email": "kim.best@imkan.tv",
      "phone": "+1 (981) 456-2455",
      "address": "714 Coleman Street, Bentonville, Guam, 7032",
      "registered": "Thursday, February 2, 2017 4:30 AM",
      "latitude": "40.019763",
      "longitude": "50.382891",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627472135807a648d63",
      "index": 20,
      "guid": "ba1d63bb-270c-4a79-9680-e78410643baf",
      "isActive": false,
      "balance": "$3,651.52",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "brown",
      "name": {
        "first": "Toni",
        "last": "Chambers"
      },
      "company": "XEREX",
      "email": "toni.chambers@xerex.com",
      "phone": "+1 (900) 477-3776",
      "address": "844 Highland Avenue, Torboy, Texas, 3180",
      "registered": "Sunday, March 23, 2014 5:00 AM",
      "latitude": "-59.051548",
      "longitude": "-144.481504",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627d6a2aa7fc44f651a",
      "index": 21,
      "guid": "f50b6f18-7709-49c9-ae15-478c3ad0c628",
      "isActive": false,
      "balance": "$3,998.61",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "brown",
      "name": {
        "first": "Natalia",
        "last": "Eaton"
      },
      "company": "ZANILLA",
      "email": "natalia.eaton@zanilla.io",
      "phone": "+1 (948) 547-2358",
      "address": "748 Kermit Place, Carbonville, Delaware, 5690",
      "registered": "Thursday, May 17, 2018 10:19 PM",
      "latitude": "73.616412",
      "longitude": "-149.998531",
      "roles": [
        "sysadmin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627822a8830fc1dee93",
      "index": 22,
      "guid": "0f912b41-c3e2-40d1-a2a2-9991e5c260dc",
      "isActive": true,
      "balance": "$2,195.80",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "blue",
      "name": {
        "first": "Bonita",
        "last": "Juarez"
      },
      "company": "ZENTURY",
      "email": "bonita.juarez@zentury.us",
      "phone": "+1 (901) 468-2931",
      "address": "109 Cranberry Street, Falmouth, Florida, 9930",
      "registered": "Monday, November 21, 2016 3:28 AM",
      "latitude": "-48.112989",
      "longitude": "107.569668",
      "roles": [
        "user",
        1
      ]
    },
    {
      "_id": "5d85a62770239ee4d7c2f896",
      "index": 23,
      "guid": "0fe31328-f6f4-4eb5-999d-0b62d5801400",
      "isActive": true,
      "balance": "$1,342.37",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "brown",
      "name": {
        "first": "Cole",
        "last": "Holder"
      },
      "company": "ANIVET",
      "email": "cole.holder@anivet.biz",
      "phone": "+1 (894) 415-2725",
      "address": "403 Frost Street, Axis, Missouri, 9388",
      "registered": "Friday, May 23, 2014 11:56 PM",
      "latitude": "65.542554",
      "longitude": "113.855269",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a627b5e406edb792ef24",
      "index": 24,
      "guid": "5d20b406-787b-4ca9-8fd0-d29a7e3850c2",
      "isActive": true,
      "balance": "$1,495.15",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "brown",
      "name": {
        "first": "Harriet",
        "last": "Moses"
      },
      "company": "GEOFORM",
      "email": "harriet.moses@geoform.co.uk",
      "phone": "+1 (836) 588-3385",
      "address": "522 Losee Terrace, Allison, Northern Mariana Islands, 254",
      "registered": "Sunday, September 4, 2016 6:56 PM",
      "latitude": "59.510255",
      "longitude": "153.943802",
      "roles": [
        "tenant:admin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627ce01d76d9d8cb13c",
      "index": 25,
      "guid": "d36921bb-3984-47fc-9ac5-8049ce9ad220",
      "isActive": true,
      "balance": "$2,827.15",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "blue",
      "name": {
        "first": "Alejandra",
        "last": "Graves"
      },
      "company": "KRAGGLE",
      "email": "alejandra.graves@kraggle.me",
      "phone": "+1 (916) 580-3389",
      "address": "734 Whitty Lane, Sylvanite, Federated States Of Micronesia, 868",
      "registered": "Friday, February 16, 2018 7:27 AM",
      "latitude": "-67.317439",
      "longitude": "35.591477",
      "roles": [
        1,
        "user"
      ]
    },
    {
      "_id": "5d85a6278e4dd8b7e9e10002",
      "index": 26,
      "guid": "ac71afdd-2369-4886-b604-c32664aef5cd",
      "isActive": false,
      "balance": "$2,312.67",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "green",
      "name": {
        "first": "Rodriguez",
        "last": "Fry"
      },
      "company": "COMVEY",
      "email": "rodriguez.fry@comvey.org",
      "phone": "+1 (929) 471-3729",
      "address": "585 Homecrest Court, Morriston, Washington, 5709",
      "registered": "Thursday, March 31, 2016 10:47 AM",
      "latitude": "-39.024459",
      "longitude": "-68.733337",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a6276554bfbd5bd48a0b",
      "index": 27,
      "guid": "520ba28c-38c4-4781-a123-b027a6bd98c4",
      "isActive": true,
      "balance": "$2,308.63",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "green",
      "name": {
        "first": "Briana",
        "last": "Dawson"
      },
      "company": "MOMENTIA",
      "email": "briana.dawson@momentia.ca",
      "phone": "+1 (822) 580-3332",
      "address": "235 Maple Street, Beaulieu, Idaho, 3984",
      "registered": "Monday, May 29, 2017 2:06 PM",
      "latitude": "-43.337121",
      "longitude": "73.648354",
      "roles": [
        "sysadmin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627ddb65763facc8c3f",
      "index": 28,
      "guid": "1974cb45-4b0e-4275-a9b3-cd03d619f388",
      "isActive": false,
      "balance": "$1,955.94",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "brown",
      "name": {
        "first": "Cross",
        "last": "Jacobs"
      },
      "company": "FITCORE",
      "email": "cross.jacobs@fitcore.biz",
      "phone": "+1 (923) 574-2701",
      "address": "489 Willoughby Street, Trona, Arizona, 2549",
      "registered": "Wednesday, June 24, 2015 11:48 AM",
      "latitude": "40.229289",
      "longitude": "-119.660627",
      "roles": [
        "tenant:admin",
        1
      ]
    },
    {
      "_id": "5d85a6277d6adeff5202bbab",
      "index": 29,
      "guid": "bdb9f8ac-d738-4bbe-824b-3d41459217d1",
      "isActive": true,
      "balance": "$3,185.62",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": {
        "first": "Brittany",
        "last": "Middleton"
      },
      "company": "AQUAMATE",
      "email": "brittany.middleton@aquamate.net",
      "phone": "+1 (950) 493-2880",
      "address": "706 Sullivan Street, Rossmore, Colorado, 5357",
      "registered": "Friday, June 21, 2019 12:56 AM",
      "latitude": "-76.092825",
      "longitude": "-103.045425",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a627f476836f7ef8eebf",
      "index": 30,
      "guid": "4a767762-7bd2-4088-9f3a-6327be1cb44e",
      "isActive": false,
      "balance": "$1,662.21",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "green",
      "name": {
        "first": "Wooten",
        "last": "Trevino"
      },
      "company": "XINWARE",
      "email": "wooten.trevino@xinware.info",
      "phone": "+1 (983) 408-2621",
      "address": "323 Tilden Avenue, Hilltop, New Hampshire, 2193",
      "registered": "Wednesday, June 7, 2017 2:28 AM",
      "latitude": "0.79752",
      "longitude": "98.914724",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627c1e21d460df4d83a",
      "index": 31,
      "guid": "4fd5bbf2-953c-4558-96ec-ad2cf9b839e3",
      "isActive": false,
      "balance": "$1,864.46",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "blue",
      "name": {
        "first": "Morin",
        "last": "Phelps"
      },
      "company": "DOGNOSIS",
      "email": "morin.phelps@dognosis.tv",
      "phone": "+1 (977) 403-3138",
      "address": "493 Clymer Street, Blanco, Virgin Islands, 4994",
      "registered": "Wednesday, April 24, 2019 8:27 PM",
      "latitude": "46.304107",
      "longitude": "-123.755401",
      "roles": [
        "sysadmin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a6277e2932b51829e234",
      "index": 32,
      "guid": "b3b4504c-05a6-43c8-8caa-b1610d844aef",
      "isActive": true,
      "balance": "$2,357.24",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": {
        "first": "Shirley",
        "last": "Irwin"
      },
      "company": "EXOSIS",
      "email": "shirley.irwin@exosis.com",
      "phone": "+1 (827) 421-2720",
      "address": "527 President Street, Jardine, Rhode Island, 821",
      "registered": "Tuesday, January 28, 2014 8:07 PM",
      "latitude": "-2.855105",
      "longitude": "170.517705",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a627cd437785cc4c7150",
      "index": 33,
      "guid": "610a2086-46d3-42ac-ae8f-7d5d606ed92e",
      "isActive": false,
      "balance": "$1,266.55",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": {
        "first": "Weaver",
        "last": "Oneil"
      },
      "company": "FURNAFIX",
      "email": "weaver.oneil@furnafix.io",
      "phone": "+1 (800) 538-2371",
      "address": "435 Wilson Avenue, Ryderwood, West Virginia, 9020",
      "registered": "Friday, May 27, 2016 8:09 PM",
      "latitude": "-9.169635",
      "longitude": "122.1282",
      "roles": [
        "sysadmin",
        1
      ]
    },
    {
      "_id": "5d85a62772d5f1178946b9ca",
      "index": 34,
      "guid": "4554e517-f0c4-4f64-a794-8fb8e3507fb7",
      "isActive": true,
      "balance": "$3,043.89",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "brown",
      "name": {
        "first": "Cecile",
        "last": "Parrish"
      },
      "company": "TSUNAMIA",
      "email": "cecile.parrish@tsunamia.us",
      "phone": "+1 (933) 500-3606",
      "address": "266 Bradford Street, Southview, Montana, 6756",
      "registered": "Friday, October 13, 2017 7:50 PM",
      "latitude": "70.977901",
      "longitude": "18.301058",
      "roles": [
        "user",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627fc3ec88e278caf86",
      "index": 35,
      "guid": "745aa7b9-31fd-4438-aacc-46965d188da5",
      "isActive": true,
      "balance": "$1,035.01",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "brown",
      "name": {
        "first": "Fischer",
        "last": "Benson"
      },
      "company": "POLARIA",
      "email": "fischer.benson@polaria.biz",
      "phone": "+1 (813) 436-2112",
      "address": "666 Hicks Street, Deercroft, Indiana, 7167",
      "registered": "Friday, February 3, 2017 6:16 AM",
      "latitude": "8.651248",
      "longitude": "100.562333",
      "roles": [
        "sysadmin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a62721b4ffe54092799c",
      "index": 36,
      "guid": "736bf1d8-09e0-4022-8e44-1e4220832e65",
      "isActive": false,
      "balance": "$1,576.59",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "brown",
      "name": {
        "first": "Vaughn",
        "last": "Alford"
      },
      "company": "MOREGANIC",
      "email": "vaughn.alford@moreganic.co.uk",
      "phone": "+1 (823) 527-3779",
      "address": "342 Quincy Street, Robinson, North Dakota, 3898",
      "registered": "Friday, August 3, 2018 9:35 PM",
      "latitude": "21.573922",
      "longitude": "164.069399",
      "roles": [
        1,
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a62763cc1f8d9542a950",
      "index": 37,
      "guid": "dda39045-0e06-4ef9-bb05-22a5bf55ec4f",
      "isActive": true,
      "balance": "$2,277.44",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": {
        "first": "Noreen",
        "last": "Daniel"
      },
      "company": "ZILLAN",
      "email": "noreen.daniel@zillan.me",
      "phone": "+1 (847) 462-2687",
      "address": "731 Howard Alley, Riceville, Oregon, 7612",
      "registered": "Sunday, June 28, 2015 10:44 PM",
      "latitude": "-81.606285",
      "longitude": "-108.871993",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a6277aff0270a4339c19",
      "index": 38,
      "guid": "7cc93c52-e43b-4de8-941a-c929d1d6d528",
      "isActive": true,
      "balance": "$1,258.17",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": {
        "first": "Lamb",
        "last": "Carroll"
      },
      "company": "TALKOLA",
      "email": "lamb.carroll@talkola.org",
      "phone": "+1 (862) 515-3477",
      "address": "649 Wythe Avenue, Fredericktown, Massachusetts, 8188",
      "registered": "Wednesday, July 10, 2019 11:16 AM",
      "latitude": "73.060118",
      "longitude": "71.639839",
      "roles": [
        1,
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627b09b991273e4f033",
      "index": 39,
      "guid": "cfbf21da-03ac-48f1-a3c4-ddf5777a9fd2",
      "isActive": false,
      "balance": "$3,551.80",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "green",
      "name": {
        "first": "Elliott",
        "last": "Harris"
      },
      "company": "GENMOM",
      "email": "elliott.harris@genmom.ca",
      "phone": "+1 (838) 507-2875",
      "address": "664 Elliott Walk, Wanship, Maryland, 2542",
      "registered": "Saturday, May 11, 2019 2:45 PM",
      "latitude": "27.590321",
      "longitude": "-34.484355",
      "roles": [
        "sysadmin",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a6270a828ba11ff466b5",
      "index": 40,
      "guid": "30dc989a-94d0-44b7-af8b-e4c10db1a5df",
      "isActive": false,
      "balance": "$1,742.26",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": {
        "first": "Erika",
        "last": "Weber"
      },
      "company": "DYNO",
      "email": "erika.weber@dyno.biz",
      "phone": "+1 (841) 470-2895",
      "address": "968 Kaufman Place, Bluffview, Georgia, 7082",
      "registered": "Friday, January 26, 2018 10:22 PM",
      "latitude": "30.138725",
      "longitude": "40.223315",
      "roles": [
        "sysadmin",
        "user"
      ]
    },
    {
      "_id": "5d85a62726994a09936d77e7",
      "index": 41,
      "guid": "8d4a281d-757f-4db0-abf7-8211044e8a98",
      "isActive": true,
      "balance": "$2,990.45",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "blue",
      "name": {
        "first": "Dejesus",
        "last": "Pacheco"
      },
      "company": "SNIPS",
      "email": "dejesus.pacheco@snips.net",
      "phone": "+1 (932) 530-2006",
      "address": "493 Melba Court, Dexter, Vermont, 2227",
      "registered": "Wednesday, May 3, 2017 1:57 PM",
      "latitude": "-76.226119",
      "longitude": "-118.024045",
      "roles": [
        "user",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a6270f053e4b19f031fa",
      "index": 42,
      "guid": "1370f6fd-b8d3-4f78-b004-45d5306e9c70",
      "isActive": true,
      "balance": "$1,297.36",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Caldwell",
        "last": "Hinton"
      },
      "company": "ATGEN",
      "email": "caldwell.hinton@atgen.info",
      "phone": "+1 (934) 434-3049",
      "address": "322 Evans Street, Calpine, Connecticut, 9970",
      "registered": "Thursday, February 26, 2015 2:00 AM",
      "latitude": "12.262068",
      "longitude": "118.709794",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a6273db5bc6708e47b62",
      "index": 43,
      "guid": "369dceab-98ab-41bf-9e79-30bd5a818844",
      "isActive": false,
      "balance": "$2,593.89",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "green",
      "name": {
        "first": "Joyce",
        "last": "Willis"
      },
      "company": "TROPOLIS",
      "email": "joyce.willis@tropolis.tv",
      "phone": "+1 (947) 555-2254",
      "address": "617 Poplar Street, Hackneyville, South Dakota, 7339",
      "registered": "Monday, September 18, 2017 5:08 PM",
      "latitude": "18.196861",
      "longitude": "-146.32978",
      "roles": [
        "sysadmin",
        "user"
      ]
    },
    {
      "_id": "5d85a62776f0b421ee32775e",
      "index": 44,
      "guid": "f995f1fc-6dc6-4f02-ba58-6d12bf65c261",
      "isActive": true,
      "balance": "$1,756.34",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "green",
      "name": {
        "first": "John",
        "last": "Flores"
      },
      "company": "RONBERT",
      "email": "john.flores@ronbert.com",
      "phone": "+1 (906) 439-2566",
      "address": "681 Oceanic Avenue, Grenelefe, South Carolina, 9441",
      "registered": "Friday, June 3, 2016 10:41 PM",
      "latitude": "37.793404",
      "longitude": "-58.565114",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627b4f5396df6e729b6",
      "index": 45,
      "guid": "00032243-1ebc-44d0-85b1-0b6f7f5866b1",
      "isActive": false,
      "balance": "$3,114.90",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "blue",
      "name": {
        "first": "Anthony",
        "last": "Houston"
      },
      "company": "EGYPTO",
      "email": "anthony.houston@egypto.io",
      "phone": "+1 (878) 562-3931",
      "address": "471 Clifford Place, Hayes, Oklahoma, 1747",
      "registered": "Monday, March 3, 2014 12:35 PM",
      "latitude": "35.379868",
      "longitude": "-20.757773",
      "roles": [
        1,
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a62762c89c0978a5a3ab",
      "index": 46,
      "guid": "1d303454-0425-448f-ac38-44fb4e57d7c2",
      "isActive": true,
      "balance": "$3,892.98",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "brown",
      "name": {
        "first": "Rosa",
        "last": "Grant"
      },
      "company": "TURNABOUT",
      "email": "rosa.grant@turnabout.us",
      "phone": "+1 (845) 575-3033",
      "address": "394 Eckford Street, Crumpler, Palau, 6056",
      "registered": "Saturday, July 8, 2017 6:19 AM",
      "latitude": "17.223143",
      "longitude": "-47.895075",
      "roles": [
        "tenant:admin",
        1
      ]
    },
    {
      "_id": "5d85a627bc17acc55af81094",
      "index": 47,
      "guid": "b320b766-a91c-4fc6-8ee1-e5870eef578f",
      "isActive": true,
      "balance": "$1,391.82",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": {
        "first": "Mindy",
        "last": "Hammond"
      },
      "company": "BULLZONE",
      "email": "mindy.hammond@bullzone.biz",
      "phone": "+1 (836) 493-3336",
      "address": "873 Lewis Place, Cornucopia, Michigan, 8119",
      "registered": "Saturday, August 22, 2015 12:45 AM",
      "latitude": "50.343501",
      "longitude": "120.933217",
      "roles": [
        "tenant:admin",
        1
      ]
    },
    {
      "_id": "5d85a627f0958c317f508313",
      "index": 48,
      "guid": "dde85fb0-3d36-4cd7-a526-dbfda997a3cd",
      "isActive": true,
      "balance": "$3,294.46",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": {
        "first": "Buckner",
        "last": "Parker"
      },
      "company": "ZEROLOGY",
      "email": "buckner.parker@zerology.co.uk",
      "phone": "+1 (827) 491-3083",
      "address": "629 Lee Avenue, Finzel, Hawaii, 8795",
      "registered": "Sunday, October 12, 2014 12:45 AM",
      "latitude": "-67.785734",
      "longitude": "149.037699",
      "roles": [
        "tenant:admin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a6272d6fba05c73ae1f3",
      "index": 49,
      "guid": "b057952c-3301-4fd9-91cd-501986ad3d9b",
      "isActive": true,
      "balance": "$1,054.04",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "blue",
      "name": {
        "first": "Terra",
        "last": "Baird"
      },
      "company": "IMANT",
      "email": "terra.baird@imant.me",
      "phone": "+1 (850) 488-3346",
      "address": "914 Arkansas Drive, Aurora, Virginia, 3013",
      "registered": "Thursday, June 11, 2015 11:07 PM",
      "latitude": "54.210173",
      "longitude": "-85.600695",
      "roles": [
        "user",
        "tenant:admin"
      ]
    },
    {
      "_id": "5d85a62790bb5d2988dd301d",
      "index": 50,
      "guid": "d933f333-1a57-48ef-a120-78b6eab1e309",
      "isActive": false,
      "balance": "$2,333.71",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "green",
      "name": {
        "first": "Mary",
        "last": "Christian"
      },
      "company": "ISOPLEX",
      "email": "mary.christian@isoplex.org",
      "phone": "+1 (874) 523-2870",
      "address": "913 Louise Terrace, Kanauga, Arkansas, 2566",
      "registered": "Tuesday, December 16, 2014 2:41 AM",
      "latitude": "-24.869074",
      "longitude": "-96.504072",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a62724b55ebd6ee51561",
      "index": 51,
      "guid": "02714280-74ee-4695-9385-2e227b8e0123",
      "isActive": false,
      "balance": "$3,880.18",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": {
        "first": "Stafford",
        "last": "Harmon"
      },
      "company": "NETBOOK",
      "email": "stafford.harmon@netbook.ca",
      "phone": "+1 (911) 485-3576",
      "address": "918 Maple Avenue, Watchtower, Puerto Rico, 1691",
      "registered": "Sunday, January 11, 2015 2:20 PM",
      "latitude": "31.846846",
      "longitude": "-37.411953",
      "roles": [
        1,
        1
      ]
    },
    {
      "_id": "5d85a627fd943c9e9c89947d",
      "index": 52,
      "guid": "56205aec-adb1-4ad4-9280-789a26f01554",
      "isActive": true,
      "balance": "$1,398.52",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": {
        "first": "Lucia",
        "last": "Giles"
      },
      "company": "COLUMELLA",
      "email": "lucia.giles@columella.biz",
      "phone": "+1 (889) 519-2244",
      "address": "894 Boerum Street, Orviston, District Of Columbia, 7180",
      "registered": "Friday, August 4, 2017 10:41 PM",
      "latitude": "1.731196",
      "longitude": "-23.43189",
      "roles": [
        "sysadmin",
        "sysadmin"
      ]
    },
    {
      "_id": "5d85a627f2cadadf7cb02bfe",
      "index": 53,
      "guid": "c25ce78d-8c48-42bb-bec5-8f5de9786ed8",
      "isActive": false,
      "balance": "$1,906.65",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "brown",
      "name": {
        "first": "Rodriquez",
        "last": "Cook"
      },
      "company": "ZILLAR",
      "email": "rodriquez.cook@zillar.net",
      "phone": "+1 (917) 440-3748",
      "address": "712 Manhattan Court, Thynedale, Alaska, 2271",
      "registered": "Sunday, December 13, 2015 12:20 PM",
      "latitude": "-45.572366",
      "longitude": "27.094874",
      "roles": [
        "user",
        1
      ]
    },
    {
      "_id": "5d85a6273a483106b7b78f9f",
      "index": 54,
      "guid": "d2ab6269-f224-4f5f-9aa6-31068435e4b8",
      "isActive": false,
      "balance": "$2,071.79",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "green",
      "name": {
        "first": "Imogene",
        "last": "Nolan"
      },
      "company": "UXMOX",
      "email": "imogene.nolan@uxmox.info",
      "phone": "+1 (837) 503-3956",
      "address": "217 Schenck Avenue, Flintville, Maine, 6388",
      "registered": "Thursday, March 29, 2018 1:54 PM",
      "latitude": "-68.917109",
      "longitude": "16.042303",
      "roles": [
        "tenant:admin",
        "user"
      ]
    },
    {
      "_id": "5d85a627bb9acfbad52ebfc4",
      "index": 55,
      "guid": "20d5b303-33fc-4f36-8b7a-3b236377f9cb",
      "isActive": false,
      "balance": "$3,852.69",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": {
        "first": "Hahn",
        "last": "Conner"
      },
      "company": "ANIXANG",
      "email": "hahn.conner@anixang.tv",
      "phone": "+1 (894) 575-2255",
      "address": "989 Dahl Court, Sidman, Wyoming, 1773",
      "registered": "Friday, August 4, 2017 11:47 PM",
      "latitude": "66.654382",
      "longitude": "179.07952",
      "roles": [
        "user",
        1
      ]
    },
    {
      "_id": "5d85a627825cff15abdfe8eb",
      "index": 56,
      "guid": "e6e218f8-b667-4528-8490-49bcbd98d215",
      "isActive": true,
      "balance": "$3,535.74",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Joann",
        "last": "Ellis"
      },
      "company": "LEXICONDO",
      "email": "joann.ellis@lexicondo.com",
      "phone": "+1 (831) 582-2991",
      "address": "743 Poly Place, Efland, Illinois, 152",
      "registered": "Tuesday, November 24, 2015 10:47 AM",
      "latitude": "-6.373221",
      "longitude": "105.991618",
      "roles": [
        "user",
        "tenant:admin"
      ]
    }
  ];

  iconFor(name: any) : string {
    return btoa(Identicon.toSvg(name.guid, 32));
  }
}