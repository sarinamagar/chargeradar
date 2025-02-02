import data from './Data.json'
export function getAllChargers() {
    const chargers = [{
            "name": "Hotel Barahi",
            "city": "Pokhara",
            "province": "3",
            "address": "Lakeside Rd 6",
            "telephone": "61460617",
            "type": ["car"],
            "latitude": "28.20833041093028",
            "longitude": "83.95804772177283",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": [
                "wifi",
                "parking",
                "food",
                "coffee",
                "accomodation",
                "restroom"
            ]
        },
        {
            "name": "Hundai Service (L I Auto Service)",
            "city": "Kathmandu",
            "province": "3",
            "address": "Hundai service, kupondole",
            "telephone": "01-5550380",
            "type": ["car"],
            "latitude": "27.690739168677144",
            "longitude": "85.31152580415048",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": ""
            }],
            "amenities": ["wifi", "parking", "restroom"]
        },
        {
            "name": "Hyundai Sales/Service Tinkune",
            "city": "Kathmandu",
            "province": "3",
            "address": "Hyundai Sales/Service Tinkune",
            "telephone": "+97714111891",
            "type": ["car"],
            "latitude": "27.69166081858411",
            "longitude": "85.31175442397266"
        },
        {
            "name": "Siddhartha Resort Chisapani - Hyundai",
            "city": "Chisapani",
            "province": "",
            "address": "J7VJ+2H7, Chisapani 21800, Nepal",
            "telephone": "+977 91-414000",
            "type": ["car"],
            "latitude": "28.6418987",
            "longitude": "81.2101286",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom", "parking", "accomodation", "food"]
        },
        {
            "name": "Waterfront Resort, Hyundai AC Charger",
            "city": "Pokhara",
            "province": "",
            "address": "Baidam Rd, Pokhara 33700, Nepal",
            "telephone": "+977 980-1166303",
            "type": ["car"],
            "latitude": "28.2168724",
            "longitude": "83.9499755",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Hotel Landmark MG",
            "city": "Pokhara",
            "province": "",
            "address": "6X39+HRP, Pokhara 33700, Nepal",
            "telephone": "+977 61-461500",
            "type": ["car"],
            "latitude": "28.206273",
            "longitude": "83.8956421",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom", "parking", "accomodation", "food"]
        },
        {
            "name": "Nepal Electricity Authority BYD",
            "city": "Pokhara",
            "province": "",
            "address": "6X39+HRP, Pokhara 33700, Nepal",
            "telephone": "+977 61-461500",
            "type": ["car"],
            "latitude": "28.2097048",
            "longitude": "83.9062398",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Pokhara Grande Hotel Hyundai AC charger",
            "city": "Pokhara",
            "province": "",
            "address": "5XRF+X8V, Pokhara 33700, Nepal",
            "telephone": "+977 61-460210",
            "type": ["car"],
            "latitude": "28.1899366",
            "longitude": "83.9127872",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["accomodation", "parking", "food", "restroom"]
        },
        {
            "name": "Barahi Service Center - Hyundai AC Charger",
            "city": "Pokhara",
            "province": "",
            "address": "Pokhara-Baglung Hwy, Pokhara 33700, Nepal",
            "telephone": "+977 61-524336",
            "type": ["car"],
            "latitude": "28.2293376",
            "longitude": "83.9728405",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": []
        },
        {
            "name": "Ace Overseas - Kia",
            "city": "Pokhara",
            "province": "",
            "address": "6X4V+QMX, Pokhara 33700, Nepal",
            "telephone": "+977 61-435501",
            "type": ["car"],
            "latitude": "27.6697302",
            "longitude": "85.3032801",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["parking", "restroom"]
        },
        {
            "name": "Sansar trading Pokhara",
            "city": "Pokhara",
            "province": "",
            "address": "Chinedada Pokhara 14",
            "telephone": "+977 980-6601817",
            "type": ["car"],
            "latitude": "28.1810766",
            "longitude": "83.9430331",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["parking"]
        },

        {
            "name": "KOS Dumre 40kW AC Charger",
            "city": "Thumka",
            "province": "",
            "address": "Thumka - Korikha - Bahunbhanjyan Rd, Bandipur 33914, Nepal",
            "telephone": "+977 985-6080622",
            "type": ["car"],
            "latitude": "27.9690242",
            "longitude": "84.3920364",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": ["restroom", "parking"]
        },
        {
            "name": "Baba Dham Traders Thee-Go",
            "city": "Darechok",
            "province": "",
            "address": "Muktinath Pani Prashodhan, Prithvi Hwy, Darechok 44200, Nepal",
            "telephone": "+977 56-410010",
            "type": ["car"],
            "latitude": "27.8702758",
            "longitude": "84.5369453",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom", "parking"]
        },
        {
            "name": "Riverside Spring Resort",
            "city": "Darechok",
            "province": "",
            "address": "Riverside Spring Resort, Darechok, Nepal",
            "telephone": "+977 980-1801336",
            "type": ["car"],
            "latitude": "27.8751566",
            "longitude": "84.6090905",
            "plugs": [{
                    "plug": "type2",
                    "power": "7.2Kw",
                    "type": "AC"
                },
                {
                    "plug": "ccssae",
                    "power": "",
                    "type": ""
                }
            ],
            "amenities": ["restroom", "parking", "accomodation"]
        },
        {
            "name": "Siddhartha Riverside Resort TATA",
            "city": "Darechok",
            "province": "",
            "address": "H04, Darechok",
            "telephone": "+977 44-692092",
            "type": ["car"],
            "latitude": "27.795829",
            "longitude": "84.9915063",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Hotel Royal Century MG ZS EV",
            "city": "Bharatpur",
            "province": "",
            "address": "E - W Hwy, Bharatpur 44207, Nepal",
            "telephone": "+977 56-525865",
            "type": ["car"],
            "latitude": "27.4310334",
            "longitude": "85.0230911",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Sajha Auto MG",
            "city": "Bharatpur",
            "province": "",
            "address": "Bypass Rd, Bharatpur 44207, Nepal",
            "telephone": "+977 985-5033935",
            "type": ["car"],
            "latitude": "27.6905723",
            "longitude": "84.4315436",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Pinnacle Trading Hyundai AC Charger",
            "city": "Bharatpur",
            "province": "",
            "address": "Balmandir Rd 10, Bharatpur 44207, Nepal",
            "telephone": "+977 56-522781",
            "type": ["car"],
            "latitude": "27.675547",
            "longitude": "84.4309073",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Landmark Forest Park MG AC CHARGER",
            "city": "Ratnanagar",
            "province": "",
            "address": "Baghmara Road 44200, Ratnanagar 00977, Nepal",
            "telephone": "+977 1-4004706",
            "type": ["car"],
            "latitude": "27.5906715",
            "longitude": "84.4791823",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["parking"]
        },
        {
            "name": "Hetauda Wheels Hyundai",
            "city": "Hetauda",
            "province": "",
            "address": "E - W Hwy, Hetauda 44107, Nepal",
            "telephone": "+977 57-520200",
            "type": ["car"],
            "latitude": "27.4310334",
            "longitude": "85.0230911",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": []
        },
        {
            "name": "Hetauda Bus Park Charging Station (Coming Soon)",
            "city": "Hetauda",
            "province": "",
            "address": "Bypass Road 10, Hetauda 44107, Nepal",
            "telephone": "",
            "type": ["car"],
            "latitude": "27.4301604",
            "longitude": "85.0266609",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": []
        },
        {
            "name": "New MAMA'S CAFE (Coming Soon)",
            "city": "Ugratara Janagal",
            "province": "",
            "address": "Araniko Highway, Ugratara Janagal 45210, Nepal",
            "telephone": "+977 984-1299704",
            "type": ["car"],
            "latitude": "27.677168",
            "longitude": "85.3408604",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": []
        },
        {
            "name": "Akshit Resort and Rafting MG ZS EV",
            "city": "Mulkot",
            "province": "",
            "address": "Mulkot",
            "telephone": "+977 985-1045480",
            "type": ["car"],
            "latitude": "27.4181784",
            "longitude": "85.8586478",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["restroom"]
        },
        {
            "name": "Taj Riverside Resort TATA Motors",
            "city": "Purano Jhangajholi",
            "province": "",
            "address": "B.P Highway, Purano Jhangajholi",
            "telephone": "",
            "type": ["car"],
            "latitude": "27.4181784",
            "longitude": "85.8586478",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": ["parking", "restroom"]
        },
        {
            "name": "Sindhuli Bus Park Charging Station (Coming Soon)",
            "city": "Sindhuli Bus Park",
            "province": "",
            "address": "Sindhuli Bus Park, Kamalamai 45900, Nepal",
            "telephone": "",
            "type": ["car"],
            "latitude": "27.2105753",
            "longitude": "85.8417259",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": ["parking", "restroom"]
        },
        {
            "name": "Komal Hotel MG",
            "city": "Mithila",
            "province": "",
            "address": "E W, पूर्व पश्चिम राजमार्ग, मिथिला 45600, Nepal",
            "telephone": "",
            "type": ["car"],
            "latitude": "26.9405303",
            "longitude": "85.8777271",
            "plugs": [{
                    "plug": "type2",
                    "power": "7.2Kw",
                    "type": "AC"
                },
                {
                    "plug": "ccssae",
                    "power": "",
                    "type": ""
                }
            ],
            "amenities": ["parking", "restroom", "accomodation", "food"]
        },
        {
            "name": "Lahan Bus Park Charging Station (Coming Soon)",
            "city": "Lahan",
            "province": "",
            "address": "PF7C+F9P, Lahan 56500, Nepal",
            "telephone": "",
            "type": ["car"],
            "latitude": "26.7180708",
            "longitude": "86.4075821",
            "plugs": [{
                "plug": "ccssae",
                "power": "",
                "type": ""
            }],
            "amenities": []
        },
        {
            "name": "Itahari -12 Khanar",
            "city": "Itahari",
            "province": "",
            "address": "Koshi Rajmarg 12, Itahari 56705, Nepal",
            "telephone": "+977 25-420111",
            "type": ["car"],
            "latitude": "26.6281281",
            "longitude": "87.2031978",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": []
        },
        {
            "name": "Kesharichand Bhanwarlal Kia (Coming Soon)",
            "city": "Bargachhi, Biratnagar",
            "province": "",
            "address": "Near Radharaman Temple, Bargachhi, बिराटनगर 56613, Nepal",
            "telephone": "+977 21-461127",
            "type": ["car"],
            "latitude": "26.4452115",
            "longitude": "87.2071775",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": []
        },
        {
            "name": "Makalu Television",
            "city": "Biratnagar",
            "province": "",
            "address": "F73G+2HM, H08, Biratnagar 56613, Nepal",
            "telephone": "",
            "type": ["car"],
            "latitude": "26.4503092",
            "longitude": "87.2058372",
            "plugs": [{
                    "plug": "type2",
                    "power": "7.2Kw",
                    "type": "AC"
                },
                {
                    "plug": "wall-bs1363",
                    "power": "",
                    "type": ""
                }
            ],
            "amenities": ["restroom"]
        },
        {
            "name": "Pathivara Auto Link Hyundai",
            "city": "Kankai",
            "province": "",
            "address": "E - W Hwy, Birtamode 57204, Nepal",
            "telephone": "",
            "type": ["car"],
            "latitude": "27.4310334",
            "longitude": "85.0230911",
            "plugs": [{
                "plug": "type2",
                "power": "7.2Kw",
                "type": "AC"
            }],
            "amenities": ["parking", "restroom"]
        },
        {
            "name": "Mahalaxmi International",
            "city": "Birtamode",
            "province": "",
            "address": "E - W Hwy, Birtamode 57204, Nepal",
            "time": "9 am - 5 pm",
            "telephone": "+977 23-545688",
            "type": ["car"],
            "latitude": "27.4309953",
            "longitude": "85.0319317",
            "plugs": [{
                "plug": "type2",
                "power": "7Kw",
                "type": "AC"
            }],
            "amenities": ["parking"]
        },
        {
            "name": "Thapathali EV Showroom",
            "city": "Kathmandu",
            "province": "1",
            "address": "Thapathali EV Showroom",
            "telephone": "N/A",
            "type": ["car"],
            "latitude": "27.677497605840138",
            "longitude": "85.31680342774558"
        },
        {
            "name": "Labim Mall",
            "city": "Kathmandu",
            "province": "3",
            "address": "Pulchowk Gabahal Rd, Lalitpur",
            "telephone": "+97715529924",
            "type": ["car"],
            "latitude": "27.677488106320034",
            "longitude": "85.31666395202585"
        },
        {
            "name": "Hyundai Sales Naxal",
            "city": "Kathmandu",
            "province": "3",
            "address": "Naxal, Kathmandu",
            "telephone": "+97714413934",
            "type": ["car"],
            "latitude": "27.71556151510917",
            "longitude": "85.33003106227773"
        },
        {
            "name": "Trade Tower Thapathali",
            "city": "Kathmandu",
            "province": "3",
            "address": "Thapathali, Kathmandu",
            "telephone": "N/A",
            "type": ["car"],
            "latitude": "27.69459375947994",
            "longitude": "85.31994729057585"
        },
        {
            "name": "Bauwa Hotel And Guest House",
            "city": "Bardibas",
            "province": "2",
            "address": "Bardibas",
            "telephone": "+9779841808341",
            "type": ["car"],
            "latitude": "26.980336417677353",
            "longitude": "85.91898930493367"
        },
        {
            "name": "BYD Park",
            "city": "Kathmandu",
            "province": "3",
            "address": "Thirbam Road, BYD Park, Kathmandu",
            "telephone": "+97714441393",
            "type": ["car"],
            "latitude": "27.72036580899628",
            "longitude": "85.33131856411678"
        },
        {
            "name": "Sajha Yatayat",
            "city": "Lalitpur",
            "province": "3",
            "address": "Pulchowk, Lalitpur",
            "telephone": "+97715552686",
            "type": ["car"],
            "latitude": "27.679479689424358",
            "longitude": "85.31745039095695"
        },
        {
            "name": "Hotel Landmark Pokhara",
            "city": "Pokhara",
            "province": "Gandaki",
            "address": "Lakeside, Pokhara",
            "telephone": "+97761452908",
            "type": ["car"],
            "latitude": "28.20810501308324",
            "longitude": "83.95761433286081"
        },
        {
            "name": "Hotel Gunja Bardibas",
            "city": "Pokhara",
            "province": "2",
            "address": "Bardibas",
            "telephone": "+97744550620",
            "type": ["car"],
            "latitude": "26.999713853956326",
            "longitude": "85.90329853345283"
        },
        {
            "name": "Jagat Motors",
            "city": "Bhairawaha",
            "province": "Lumbini",
            "address": "Siddharthanagar, Bhairahawa",
            "telephone": "+97771525428",
            "type": ["car"],
            "latitude": "27.50386430021768",
            "longitude": "83.4561846502268"
        },
        {
            "name": "Laxmi Dinesh 4 Wheelers",
            "city": "Dhangadhi",
            "province": "Sudurpaschim Province",
            "address": "Main Road, Dhangadhi",
            "telephone": "+97791524492",
            "type": ["car"],
            "latitude": "28.704641761732702",
            "longitude": "80.56778570363397"
        },
        {
            "name": "Siddhartha Resort Chisapani",
            "city": "Chisapani",
            "province": "Karnali",
            "address": "Chisapani Chisapani",
            "telephone": "+97791414000",
            "type": ["car"],
            "latitude": "28.643017036827",
            "longitude": "81.28250618044632"
        },
        {
            "name": "Waterfront Resort",
            "city": "Pokhara",
            "province": "Gandaki",
            "address": "Pokhara",
            "telephone": "+97761420004",
            "type": ["car"],
            "latitude": "28.222093460066503",
            "longitude": "83.95172023652376"
        },
        {
            "name": "Avocado & Orchid Resort",
            "city": "Hetauda",
            "province": "Bagmati",
            "address": "Chaukitol -2, Hetauda Makawanpur Narayani Nepal, Tribhuvan Rajpath, Hetauda 44107",
            "telephone": "+97757520235",
            "type": ["car"],
            "latitude": "27.43525489831263",
            "longitude": "85.03541692000935"
        },
        {
            "name": "Hetauda Wheels Pvt Ltd",
            "city": "Hetauda",
            "province": "Bagmati",
            "address": "Hetauda-10, Hetauda 44107",
            "telephone": "+9779855027295",
            "type": ["car"],
            "latitude": "27.42559215822066",
            "longitude": "85.02998818755908"
        },
        {
            "name": "Hotel The Kingsbury",
            "city": "Birtamode",
            "province": "1",
            "address": "E - W Hwy, Birtamode 57204",
            "telephone": "+97723509700",
            "type": ["car"],
            "latitude": "26.639386515973417",
            "longitude": "87.97778701782491"
        },
        {
            "name": "Bodhi Redsun-Shinee Premiere",
            "city": "Bhairahawa",
            "province": "Lumbini",
            "address": "Basantapur 8, Siddharthanagar 32900",
            "telephone": "+97771525957",
            "type": ["car"],
            "latitude": "27.51315408771957",
            "longitude": "83.476410364382978"
        },
        {
            "name": "Hotel Da Flamingo",
            "city": "Butwal",
            "province": "Lumbini",
            "address": "Butwal 32907",
            "telephone": "+97771420152",
            "type": ["car"],
            "latitude": "27.669669310224027",
            "longitude": "83.46251608871846"
        },
        {
            "name": "Yatri Motorcycles Experience Center",
            "city": "Kathmandu",
            "province": "Bagmati",
            "address": "Thirbam Sadak, Kathmandu 44600",
            "telephone": "+977980-1877447",
            "type": ["bike"],
            "latitude": "27.730905482675592",
            "longitude": "85.330016348947"
        },
        {
            "name": "Team Eleven EV World- BYD SHOWROOM",
            "city": "Nepalgunj",
            "province": "Lumbini",
            "address": "Team Eleven EV World, Nepalgunj",
            "telephone": "N/A",
            "type": ["car"],
            "latitude": "28.10955066224798",
            "longitude": "81.65709268264737"
        },
        {
            "name": "Metro Hospitality Dang",
            "city": "Dang",
            "province": "Lumbini",
            "address": "Tulsipur, Dang",
            "telephone": "+9779868282249",
            "type": ["car"],
            "latitude": "28.13355155137408",
            "longitude": "82.28707513285744"
        },
        {
            "name": "Hyundai Sales/Service Dang",
            "city": "Dang",
            "province": "Lumbini",
            "address": "Hira Bhawan, Rabbe Tole, Ghorahi Lamahi - Tulsipur Road, 22415, Nepal",
            "telephone": "+977082563634",
            "type": ["car"],
            "latitude": "28.029439122261298",
            "longitude": "82.49279660346103"
        },
        {
            "name": "Ocean Auto AC Charger",
            "city": "Butwal",
            "province": "Lumbini",
            "address": "MFPG+4WH, Butwal 32907, Nepal",
            "telephone": "+9779857030252",
            "type": ["car"],
            "latitude": "27.68587931026063",
            "longitude": "83.47720419304807"
        },
        {
            "name": "Hyundai Sales/Service Butwal",
            "city": "Butwal",
            "province": "Lumbini",
            "address": "kalikanager, Butwal 32907, Nepal",
            "telephone": "+977071415278",
            "type": ["car"],
            "latitude": "27.673458261688964",
            "longitude": "83.46439075215936"
        },
        {
            "name": "KOS Coffee & Restaurant",
            "city": "Dumre",
            "province": "Gandaki",
            "address": "Thumka - Korikha - Bahunbhanjyan Rd, Bandipur 33914",
            "telephone": "+9779856080622",
            "type": ["car"],
            "latitude": "27.966907044627355",
            "longitude": "84.40475111763509"
        },
        {
            "name": "Gokarna Forest Resort",
            "city": "Kathmandu",
            "province": "Gandaki",
            "address": "Nagpokhari Marg 390, Gokarneshwor 44600",
            "telephone": "+977014451212",
            "type": ["car"],
            "latitude": "27.72962721027683",
            "longitude": "85.39870581209675"
        },
        {
            "name": "Taj Riverside Resort TATA Motors 25kW DC Fast Charger",
            "city": "Mulkot",
            "province": "2",
            "address": "Sunkoshi Rural Municipality Mulkot-5, B.P Highway",
            "telephone": "+9779851088440",
            "type": ["car"],
            "latitude": "27.405068909370048",
            "longitude": "85.92027607898733"
        },
        {
            "name": "Akshit Resort and Rafting MG ZS EV 7KW AC CHARGER",
            "city": "Mulkot",
            "province": "2",
            "address": "Mulkot Bazaar, Purano Jhangajholi 45400",
            "telephone": "+9779851045480",
            "type": ["car"],
            "latitude": "27.402325665640042",
            "longitude": "85.92322642403303"
        },
        {
            "name": "Hyundai Sales/Service Him Auto",
            "city": "Nepalgunj",
            "province": "5",
            "address": "Ratna Rajmarg, Near Nepalgunj Airport, Nepalgunj",
            "telephone": "081-550428",
            "type": ["car"],
            "latitude": "28.097939",
            "longitude": "81.652359"
        },
        {
            "name": "Siddhartha Hotel",
            "city": "Nepalgunj",
            "province": "5",
            "address": "Ratna Rajmarg, Nepalgunj",
            "telephone": "081-551200",
            "type": ["car"],
            "latitude": "28.085212",
            "longitude": "81.645616"
        },
        {
            "name": "Sipradi Trading Pokhara",
            "city": "Pokhara",
            "province": "4",
            "address": "Buddhachowk",
            "telephone": "+977061538499",
            "type": ["car"],
            "latitude": "28.2063884735",
            "longitude": "83.9941635132"
        },
        {
            "name": "Quick20 Riverside Hotel",
            "city": "Amlekhganj",
            "province": "2",
            "address": "E - W Hwy, Amlekhganj 44400",
            "telephone": "+977053570030",
            "type": ["car"],
            "latitude": "27.295827287773257",
            "longitude": "84.98970838885263"
        },
        {
            "name": "Sipradi Trading Pvt.Ltd,Basamadi Hetauda",
            "city": "Hetauda",
            "province": "Bagmati",
            "address": "Hetauda 44100",
            "telephone": "+9779801909862",
            "type": ["car"],
            "latitude": "27.455518277977536",
            "longitude": "84.9704420179544"
        }
    ]
    return data;
}
