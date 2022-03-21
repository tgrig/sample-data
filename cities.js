const cities = [
	{
		"name": "Cork",
		"lat": "25.6649911296",
		"lng": "133.0993221632"
	},
	{
		"name": "Kielce",
		"lat": "12.1668631552",
		"lng": "-132.1067578368"
	},
	{
		"name": "Sapele",
		"lat": "-69.6066782208",
		"lng": "-178.021420544"
	},
	{
		"name": "Orvault",
		"lat": "66.3138361344",
		"lng": "171.2517136384"
	},
	{
		"name": "Banda Aceh",
		"lat": "-56.1180548096",
		"lng": "1.2215545856"
	},
	{
		"name": "Feilding",
		"lat": "0.5114047488",
		"lng": "-158.480226816"
	},
	{
		"name": "Blenheim",
		"lat": "-35.3280023552",
		"lng": "99.8620542976"
	},
	{
		"name": "Enschede",
		"lat": "-62.690784768",
		"lng": "45.282823168"
	},
	{
		"name": "Punggol",
		"lat": "-7.7207503872",
		"lng": "10.3592200192"
	},
	{
		"name": "Delicias",
		"lat": "-20.4099462144",
		"lng": "119.2127835136"
	},
	{
		"name": "Dehradun",
		"lat": "85.7765359616",
		"lng": "5.9941003264"
	},
	{
		"name": "Watson Lake",
		"lat": "-30.4289712128",
		"lng": "-119.8400268288"
	},
	{
		"name": "Mexico City",
		"lat": "-65.0312225792",
		"lng": "77.927602176"
	},
	{
		"name": "Changi Bay",
		"lat": "-28.9774326784",
		"lng": "-165.5665860608"
	},
	{
		"name": "Huaraz",
		"lat": "-10.01515008",
		"lng": "-176.7712007168"
	},
	{
		"name": "Dublin",
		"lat": "28.2306116608",
		"lng": "10.586793984"
	},
	{
		"name": "Pachuca",
		"lat": "39.0035161088",
		"lng": "91.6524100608"
	},
	{
		"name": "Galway",
		"lat": "17.5501856768",
		"lng": "159.3141885952"
	},
	{
		"name": "Adana",
		"lat": "-33.8423934976",
		"lng": "-138.9258682368"
	},
	{
		"name": "Klerksdorp",
		"lat": "46.2640408576",
		"lng": "103.8195598336"
	},
	{
		"name": "Huaraz",
		"lat": "-13.7409483776",
		"lng": "-99.9108860928"
	},
	{
		"name": "Terme",
		"lat": "-14.3144936448",
		"lng": "175.68866816"
	},
	{
		"name": "Puerto Carreño",
		"lat": "62.9381055488",
		"lng": "-143.5590260736"
	},
	{
		"name": "Belfast",
		"lat": "61.771661824",
		"lng": "131.7686924288"
	},
	{
		"name": "Cork",
		"lat": "-86.4884078592",
		"lng": "5.3522881536"
	},
	{
		"name": "Zaporizhzhia",
		"lat": "-60.8963867648",
		"lng": "107.8707818496"
	},
	{
		"name": "Medellín",
		"lat": "-28.6946217984",
		"lng": "145.6003254272"
	},
	{
		"name": "Avesta",
		"lat": "27.9717942272",
		"lng": "177.4881110016"
	},
	{
		"name": "Port Harcourt",
		"lat": "-17.5512976384",
		"lng": "112.5074366464"
	},
	{
		"name": "Saint Petersburg",
		"lat": "-54.2965467136",
		"lng": "-86.2777107456"
	},
	{
		"name": "Chepstow",
		"lat": "-73.3055361024",
		"lng": "178.148446208"
	},
	{
		"name": "Marchihue",
		"lat": "-76.2140469248",
		"lng": "100.236475392"
	},
	{
		"name": "Newark",
		"lat": "-6.6793217024",
		"lng": "-34.7873948672"
	},
	{
		"name": "Cheonan",
		"lat": "-33.1714742272",
		"lng": "-21.506154496"
	},
	{
		"name": "Ibagué",
		"lat": "-37.4040823808",
		"lng": "-112.6198160384"
	},
	{
		"name": "Fairbanks",
		"lat": "-39.005366272",
		"lng": "169.627001856"
	},
	{
		"name": "Civo",
		"lat": "48.7298038784",
		"lng": "-143.554953216"
	},
	{
		"name": "Yangsan",
		"lat": "64.4750696448",
		"lng": "46.9963097088"
	},
	{
		"name": "Colorado Springs",
		"lat": "-47.6691782656",
		"lng": "-119.1324500992"
	},
	{
		"name": "Worcester",
		"lat": "-40.0569181184",
		"lng": "157.6993250304"
	},
	{
		"name": "Santa Rosa de Cabal",
		"lat": "18.3765687296",
		"lng": "87.047760896"
	},
	{
		"name": "Lelystad",
		"lat": "-73.7919218688",
		"lng": "-171.0832354304"
	},
	{
		"name": "Ceuta",
		"lat": "-0.218107904",
		"lng": "143.9983444992"
	},
	{
		"name": "Kimberley",
		"lat": "-72.4944984064",
		"lng": "118.2707047424"
	},
	{
		"name": "Subiaco",
		"lat": "-75.16060672",
		"lng": "-1.405445632"
	},
	{
		"name": "Kursk",
		"lat": "-62.9363330048",
		"lng": "-33.9780416512"
	},
	{
		"name": "Huế",
		"lat": "15.5139364864",
		"lng": "9.1483268096"
	},
	{
		"name": "Penicuik",
		"lat": "55.2566141952",
		"lng": "-173.7220301824"
	},
	{
		"name": "Weyburn",
		"lat": "-79.917581312",
		"lng": "-179.5571119104"
	},
	{
		"name": "Sogamoso",
		"lat": "-9.7719851008",
		"lng": "-158.7636641792"
	},
	{
		"name": "Maiduguri",
		"lat": "47.641133568",
		"lng": "7.664006144"
	},
	{
		"name": "Göttingen",
		"lat": "5.2418894848",
		"lng": "-58.3999587328"
	},
	{
		"name": "George",
		"lat": "-71.242394112",
		"lng": "-99.5465414656"
	},
	{
		"name": "Bydgoszcz",
		"lat": "82.9773295616",
		"lng": "146.9904679936"
	},
	{
		"name": "Porpetto",
		"lat": "62.7565623296",
		"lng": "61.3846751232"
	},
	{
		"name": "Norman Wells",
		"lat": "18.8049224704",
		"lng": "-53.456408064"
	},
	{
		"name": "La Rochelle",
		"lat": "72.6220566528",
		"lng": "-149.9443386368"
	},
	{
		"name": "Tabuk",
		"lat": "7.2987728896",
		"lng": "15.166500864"
	},
	{
		"name": "Onitsha",
		"lat": "-53.897483776",
		"lng": "179.0684913664"
	},
	{
		"name": "Auxerre",
		"lat": "-29.5782508544",
		"lng": "173.3483070464"
	},
	{
		"name": "Geylang",
		"lat": "70.5112472576",
		"lng": "-91.6736927744"
	},
	{
		"name": "Ganganagar",
		"lat": "7.021708288",
		"lng": "112.7387553792"
	},
	{
		"name": "Porirua",
		"lat": "65.2698080256",
		"lng": "-5.993279488"
	},
	{
		"name": "Águas Lindas de Goiás",
		"lat": "-17.822039552",
		"lng": "6.7071791104"
	},
	{
		"name": "Mödling",
		"lat": "75.0743653376",
		"lng": "-16.5272704"
	},
	{
		"name": "Seletar",
		"lat": "-52.3631643648",
		"lng": "-89.2984196096"
	},
	{
		"name": "Bajaur Agency",
		"lat": "61.105498624",
		"lng": "-64.578633728"
	},
	{
		"name": "Assen",
		"lat": "-27.8103047168",
		"lng": "-100.1406728192"
	},
	{
		"name": "Xinjiang",
		"lat": "-36.2283144192",
		"lng": "-125.0270608384"
	},
	{
		"name": "Okene",
		"lat": "-88.3757312",
		"lng": "125.539097088"
	},
	{
		"name": "Uribia",
		"lat": "89.3582255104",
		"lng": "-115.1945243648"
	},
	{
		"name": "Bima",
		"lat": "-5.0915265536",
		"lng": "70.6026461184"
	},
	{
		"name": "Mohmand Agency",
		"lat": "43.879769088",
		"lng": "175.6682942464"
	},
	{
		"name": "Astrakhan",
		"lat": "32.544034304",
		"lng": "65.2958244864"
	},
	{
		"name": "Shillong",
		"lat": "-34.8731738112",
		"lng": "-176.4791013376"
	},
	{
		"name": "Port Moody",
		"lat": "49.4432089088",
		"lng": "-7.158075904"
	},
	{
		"name": "Morelia",
		"lat": "44.9900868608",
		"lng": "-32.8575033344"
	},
	{
		"name": "Ulyanovsk",
		"lat": "-2.254950912",
		"lng": "13.2757164032"
	},
	{
		"name": "Ulyanovsk",
		"lat": "80.8435398656",
		"lng": "68.501249024"
	},
	{
		"name": "Surigao City",
		"lat": "77.8155757568",
		"lng": "-124.6978079744"
	},
	{
		"name": "Lillesand",
		"lat": "14.964481024",
		"lng": "-2.0518770688"
	},
	{
		"name": "Mmabatho",
		"lat": "29.2411264",
		"lng": "-165.5852137472"
	},
	{
		"name": "L'Hospitalet de Llobregat",
		"lat": "9.6968761344",
		"lng": "-103.6917244928"
	},
	{
		"name": "Bergen",
		"lat": "-67.8439527424",
		"lng": "140.1621919744"
	},
	{
		"name": "Grande Cache",
		"lat": "-70.873491456",
		"lng": "-93.5587646464"
	},
	{
		"name": "Sant'Angelo a Fasanella",
		"lat": "-7.0052795392",
		"lng": "50.5432423424"
	},
	{
		"name": "Detroit",
		"lat": "-47.0863958016",
		"lng": "-164.1841685504"
	},
	{
		"name": "Rockville",
		"lat": "-43.6698503168",
		"lng": "-117.083255808"
	},
	{
		"name": "León",
		"lat": "-37.9185142784",
		"lng": "34.1775224832"
	},
	{
		"name": "Rechnitz",
		"lat": "22.3028534272",
		"lng": "84.7020035072"
	},
	{
		"name": "Laon",
		"lat": "80.2214130688",
		"lng": "126.802335744"
	},
	{
		"name": "Port Blair",
		"lat": "-63.726903296",
		"lng": "-4.5389622272"
	},
	{
		"name": "Ilagan",
		"lat": "23.3563107328",
		"lng": "47.8211045376"
	},
	{
		"name": "Hunan",
		"lat": "2.6343692288",
		"lng": "-30.4761043968"
	},
	{
		"name": "Masbate City",
		"lat": "74.353795072",
		"lng": "-11.7062349824"
	},
	{
		"name": "Borlänge",
		"lat": "21.1455273984",
		"lng": "139.8005551104"
	},
	{
		"name": "Yên Bái",
		"lat": "-11.346346496",
		"lng": "-30.944781312"
	},
	{
		"name": "Frederikstad",
		"lat": "-46.0055661568",
		"lng": "-74.087414784"
	},
	{
		"name": "Palma de Mallorca",
		"lat": "-59.1265647616",
		"lng": "-106.9141248"
	},
	{
		"name": "Okene",
		"lat": "71.2341925888",
		"lng": "138.0625765376"
	}
]
