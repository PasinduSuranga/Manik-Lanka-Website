// Tour Categories
export const tourCategories = [
  {
    id: 1,
    slug: "romantic-retreats",
    name: "Romantic Retreats",
    description: "Create unforgettable memories with intimate escapes, luxury stays, and breathtaking experiences designed for couples.",
    image: "/images/sigiriya.jpg",
    icon: "🏛️",
  },
  {
    id: 2,
    slug: "misty-mountain-escapes",
    name: "Misty Mountain Escapes",
    description: "Journey through scenic highlands, rolling tea plantations, cascading waterfalls, and charming hill country landscapes.",
    image: "/images/beachImage.jpg",
    icon: "🏖️",
  },
  {
    id: 3,
    slug: "timeless-cultural-experiences",
    name: "Timeless Cultural Experiences",
    description: "Explore ancient cities, sacred temples, vibrant traditions, and UNESCO World Heritage Sites.",
    image: "/images/wildLifeImage.jpg",
    icon: "🦁",
  },
  {
    id: 4,
    slug: "sun-kissed-beach-getaways",
    name: "Sun-Kissed Beach Getaways",
    description: "Relax along pristine coastlines, turquoise waters, and secluded beaches while enjoying the finest tropical experiences.",
    image: "/images/nuwaraEliya.jpg",
    icon: "⛰️",
  },
  /* {
    id: 5,
    slug: "complete-tours",
    name: "Complete Island Tours",
    description: "Comprehensive journeys covering all highlights of Sri Lanka",
    image: "/images/package1.jpg",
    icon: "🗺️",
  }, */
];

// Shared inclusions & exclusions (same for all packages)
export const packageInclusions = [
  "Reception at the airport",
  "Transportation by air-conditioned vehicle",
  "Accommodation in Hotels or similar category on Double/Twin sharing basis",
  "All applicable government taxes",
];

export const packageExclusions = [
  "International Air Fare",
  "Entrance fees to parks and archaeological sites",
  "Meals other than mentioned under includes",
];

export const placeDescriptions: Record<string, string> = {
  Negombo: "Negombo is a lively coastal town where Sri Lanka's tropical charm meets centuries of history. Just minutes from the international airport, it welcomes visitors with golden beaches lined with swaying palms, colorful fishing boats, and breathtaking sunsets over the Indian Ocean. Often called ‘Little Rome’, Negombo is rich in cultural heritage, with beautiful colonial-era churches, lively street markets, and a strong local fishing tradition that shapes daily life. Early mornings reveal fishermen hauling in the day’s catch, while evenings come alive with beachside cafés serving fresh seafood and local flavors.",
  Sigiriya: "Sigiriya is one of Sri Lanka’s most breathtaking treasures, a place where history, nature, and legend rise together from the heart of the island. Dominating the surrounding jungle plains, the iconic Sigiriya Rock Fortress towers nearly 200 meters above the landscape, offering an unforgettable sight and experience. Built in the 5th century, this UNESCO World Heritage Site captivates visitors with its ancient engineering and artistic brilliance. As you climb the rock, you pass through beautifully landscaped water gardens, mirror walls etched with centuries-old poetry, and the famous frescoes of the Sigiriya Maidens, whose vibrant colors still glow after more than 1,500 years.",
  Polonnaruwa: "Polonnaruwa is a remarkable journey into Sri Lanka’s ancient past, where grand stone monuments rest peacefully amid lush greenery and tranquil lakes. Once the island’s medieval capital, this UNESCO World Heritage Site showcases the refined art, architecture, and engineering of a powerful civilization that flourished over 800 years ago. Wandering through Polonnaruwa feels like stepping back in time. Majestic royal palaces, elegant pavilions, sacred stupas, and sophisticated irrigation systems reveal the brilliance of ancient city planning. The highlight for many visitors is Gal Vihara, a breathtaking collection of colossal Buddha statues carved from a single granite rock—serene, spiritual, and deeply moving.",
  Dambulla: "Dambulla is a captivating blend of spirituality, history, and natural beauty, crowned by one of Sri Lanka’s most sacred and awe-inspiring sites. At its heart lies the Dambulla Cave Temple, a UNESCO World Heritage Site and the best-preserved cave temple complex in the country. Set high atop a rocky hill, the temple consists of five caves adorned with over 150 Buddha statues and vast, vividly colored murals that cover walls and ceilings. These paintings, some dating back more than 2,000 years, tell stories of the Buddha’s life and Sri Lanka’s ancient kings, creating a powerful and peaceful atmosphere that leaves visitors in awe.",
  Kandy: "Kandy is the cultural heart of Sri Lanka, nestled among misty hills and wrapped around a serene lake. Once the last royal capital of the island, this enchanting city blends rich history, deep spirituality, and natural beauty in a truly unforgettable way. At its center lies the sacred Temple of the Tooth Relic (Sri Dalada Maligawa), one of the most important Buddhist sites in the world. Daily rituals filled with drumming, chanting, and fragrant incense offer visitors a moving glimpse into living traditions that have endured for centuries. Nearby, Kandy Lake invites peaceful strolls with scenic views and cool mountain air.",
  'Nuwara Eliya': "Nuwara Eliya is a refreshing escape into Sri Lanka’s hill country, often called ‘Little England’ for its cool climate, misty landscapes, and colonial charm. Set high among rolling hills and emerald-green tea plantations, this picturesque town feels worlds away from the tropical coast. Red-roofed bungalows, neatly trimmed gardens, and historic buildings reflect its British-era heritage, while the surrounding countryside offers some of the island’s most stunning scenery. Waterfalls tumble down forested slopes, lakes shimmer in the cool air, and endless rows of tea bushes create postcard-perfect views. A visit to a tea factory reveals the story behind Sri Lanka’s world-famous Ceylon tea.",
  Galle: "Galle is a captivating coastal city where history, culture, and ocean views blend seamlessly. At its heart stands the iconic Galle Fort, a UNESCO World Heritage Site built by the Portuguese and later fortified by the Dutch—a living monument where centuries-old walls embrace charming streets, colonial buildings, and stylish cafés. Walking through the fort feels like stepping into another era. Cobblestone lanes lead to art galleries, boutique hotels, and historic churches, while the ramparts offer stunning views of the Indian Ocean, especially at sunset. Outside the fort, golden beaches, swaying palms, and turquoise waters invite relaxation and adventure.",
  Benthota: "Bentota is a tropical paradise on Sri Lanka’s southwest coast, where golden beaches, palm-lined shores, and calm blue waters create the perfect setting for relaxation and adventure. Known for its laid-back charm and natural beauty, Bentota is one of the island’s most popular beach escapes. The wide sandy beach is ideal for sunbathing and long seaside walks, while the Bentota River offers exciting water activities such as boat safaris, jet skiing, and kayaking through mangroves rich with birdlife. Nearby, visitors can explore sea turtle conservation centers and beautifully landscaped gardens designed by the renowned architect Geoffrey Bawa.",
  Colombo: "Colombo is Sri Lanka’s dynamic capital—a city where modern life, colonial heritage, and tropical energy come together by the Indian Ocean. As the country’s main commercial hub, Colombo offers visitors a vibrant introduction to Sri Lanka, full of contrasts and color. Sleek skyscrapers rise beside historic buildings from the Portuguese, Dutch, and British eras, while bustling local markets coexist with luxury shopping malls and stylish cafés. Areas like Galle Face Green invite sunset strolls along the ocean, as street food vendors fill the air with irresistible local flavors.",
  Ella: "Nestled in the heart of Sri Lanka’s lush hill country, Ella is a charming mountain village where nature, culture, and tranquility blend effortlessly. Surrounded by rolling tea plantations, mist-covered peaks, and cascading waterfalls, Ella offers breathtaking views at every turn. The cool climate and fresh mountain air create the perfect escape from the tropical heat. Adventurers can hike to iconic landmarks like Ella Rock and Little Adam’s Peak, while the world-famous Nine Arches Bridge provides a picture-perfect glimpse of colonial-era engineering set against a dramatic green backdrop. For those seeking relaxation, Ella’s laid-back cafés, cozy guesthouses, and scenic train journeys invite visitors to slow down and soak in the beauty.",
  Yala: "Yala National Park is Sri Lanka’s ultimate wildlife adventure, where untamed nature comes alive in spectacular fashion. Famous for having one of the highest leopard densities in the world, Yala offers thrilling safari experiences through vast landscapes of dry forests, open grasslands, lagoons, and rocky outcrops. As the sun rises, the park awakens with herds of elephants, sloth bears, spotted deer, crocodiles, and a vibrant array of birdlife. Each safari journey promises excitement and wonder, guided by the sounds of the wild and the chance of unforgettable encounters. Beyond wildlife, Yala’s scenic beauty is enhanced by ancient ruins, hidden lakes, and golden coastlines that border the Indian Ocean.",
  Mirissa: "Mirissa is a tropical paradise on Sri Lanka’s southern coast, where golden sands meet crystal-clear waters and laid-back beach vibes set the pace of life. Known as one of the best places in the world for whale and dolphin watching, Mirissa offers unforgettable ocean adventures alongside serene coastal beauty. Palm-fringed beaches, colorful sunsets, and gentle waves make it ideal for swimming, surfing, and simply unwinding by the sea. The lively beachfront is dotted with cozy cafés, seafood restaurants, and beach bars, creating a perfect balance between relaxation and vibrant nightlife. Just offshore, coral reefs and marine life invite snorkelers and divers to explore beneath the surface.",
  Trincomalee: "Trincomalee, affectionately known as Trinco, is a breathtaking coastal gem on Sri Lanka’s eastern shore, celebrated for its pristine beaches, turquoise waters, and rich cultural heritage. With some of the finest natural harbors in the world, Trinco offers a perfect blend of relaxation and adventure. The powdery sands of Nilaveli and Uppuveli invite sun-seekers to unwind, while the crystal-clear seas around Pigeon Island National Park reveal vibrant coral reefs and colorful marine life, making it a paradise for snorkeling and diving. Trinco is also one of the best places in Sri Lanka for whale watching, where blue whales and dolphins can be spotted just offshore.",
  'Arugam Bay': "Arugam Bay is Sri Lanka’s laid-back surf capital, where golden beaches, rolling waves, and a carefree coastal spirit create the perfect tropical escape. Renowned worldwide for its consistent right-hand point breaks, Arugam Bay draws surfers of all levels while maintaining a relaxed, bohemian charm. Beyond surfing, the area offers tranquil beach walks, stunning sunrises over the Indian Ocean, and close encounters with nature in nearby lagoons and wildlife parks. Beachside cafés, yoga shalas, and eco-friendly stays add to the town’s easygoing vibe, making it ideal for both adventure seekers and those looking to unwind.",
};

export const packagesData = [
  {
    id: 1,
    slug: "romantic-honeymoon-escape",
    categoryId: 1,
    seoTitle: "13-Day Romantic Honeymoon Escape Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka honeymoon tour", "romantic Sri Lanka package", "13 day Sri Lanka honeymoon itinerary", "couples tour Sri Lanka", "Sri Lanka romantic holiday"],
    imageAlt: "Couple enjoying a romantic honeymoon tour across Sri Lanka",
    name: "Romantic Honeymoon Escape",
    shortDescription: "Celebrate your love with an unforgettable journey through Sri Lanka's cultural treasures, misty hills, wildlife adventures, and idyllic beaches.",
    description: "Experience the perfect honeymoon across Sri Lanka with a carefully curated itinerary featuring ancient cities, scenic hill country, wildlife safaris, and relaxing coastal escapes. From Sigiriya's iconic landscapes to the golden beaches of Mirissa, every moment is designed for romance and unforgettable memories.",
    duration: "13 Days / 12 Nights",
    image: "/images/package1.jpg",
    /*pricePerPerson: 550,
    maxPersons: 2, */
    itinerary: [
      { stop: "Negombo", duration: "1 Night" },
      { stop: "Sigiriya", duration: "2 Nights" },
      { stop: "Polonnaruwa", duration: "Day Tour" },
      { stop: "Dambulla", duration: "Visit" },
      { stop: "Kandy", duration: "2 Nights" },
      { stop: "Nuwara Eliya", duration: "2 Nights" },
      { stop: "Ella", duration: "1 Night" },
      { stop: "Yala", duration: "2 Nights" },
      { stop: "Mirissa", duration: "1 Night" },
      { stop: "Colombo", duration: "1 Night" }]
  },
  {
    id: 2,
    slug: "luxury-sri-lanka-holiday",
    categoryId: 1,
    seoTitle: "11-Day Luxury Sri Lanka Holiday Tour | Manik Lanka Holidays",
    seoKeywords: ["luxury Sri Lanka tour", "Sri Lanka luxury holiday package", "11 day Sri Lanka itinerary", "Sri Lanka premium tour", "Sri Lanka luxury vacation"],
    imageAlt: "Luxury Sri Lanka holiday package featuring hill country, wildlife, and beach escapes",
    name: "Luxury Sri Lanka Holiday",
    shortDescription: "Indulge in a premium journey through Sri Lanka's scenic highlands, wildlife reserves, and pristine coastal destinations.",
    description: "Discover Sri Lanka in style with a carefully curated luxury experience featuring elegant accommodations, breathtaking landscapes, and exclusive experiences. Travel from vibrant cities and misty mountains to wildlife adventures and tranquil beach escapes, enjoying comfort and sophistication throughout your journey.",
    duration: "11 Days / 10 Nights",
    image: "/images/package2.jpg",
    /*pricePerPerson: 390,
    maxPersons: 2, */
    itinerary: [
      { stop: "Colombo", duration: "1 Night" },
      { stop: "Kandy", duration: "1 Night" },
      { stop: "Nuwara Eliya", duration: "2 Nights" },
      { stop: "Ella", duration: "2 Nights" },
      { stop: "Yala", duration: "1 Night" },
      { stop: "Mirissa", duration: "2 Nights" },
      { stop: "Bentota", duration: "1 Night" }]
  },
  {
    id: 3,
    slug: "hill-country-luxury-escape",
    categoryId: 2,
    seoTitle: "11-Day Hill Country Luxury Escape Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka hill country tour", "Sri Lanka highland holiday", "Ella and Nuwara Eliya tour", "Sri Lanka scenic train journey", "Sri Lanka hill country package"],
    imageAlt: "Luxury hill country tour through Kandy, Nuwara Eliya, and Ella",
    name: "Hill Country Luxury Escape",
    shortDescription: "Discover Sri Lanka's breathtaking highlands, scenic train journeys, and coastal beauty in one unforgettable escape.",
    description: "Experience the charm of Sri Lanka's hill country with a carefully designed journey through Kandy, Nuwara Eliya, and Ella. Explore misty mountains, lush tea plantations, and spectacular landscapes before unwinding with wildlife encounters and relaxing beach stays along the southern coast.",
    duration: "11 Days / 10 Nights",
    image: "/images/package3.jpg",
    /*pricePerPerson: 520,
    maxPersons: 2, */
    itinerary: [
      { stop: "Colombo", duration: "1 Night" },
      { stop: "Kandy", duration: "1 Night" },
      { stop: "Nuwara Eliya", duration: "2 Nights" },
      { stop: "Ella", duration: "2 Nights" },
      { stop: "Yala", duration: "1 Night" },
      { stop: "Mirissa", duration: "2 Nights" },
      { stop: "Bentota", duration: "1 Night" }
    ]
  },
  {
    id: 4,
    slug: "hill-country-train-journey",
    categoryId: 2,
    seoTitle: "7-Day Hill Country Train Journey Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka train journey", "Ella train tour", "Nuwara Eliya holiday package", "Sri Lanka hill country tour", "Demodara train experience"],
    imageAlt: "Scenic train journey through Sri Lanka's hill country from Nuwara Eliya to Demodara",
    name: "Hill Country Train Journey",
    shortDescription: "Experience Sri Lanka's most breathtaking train ride through misty mountains, tea plantations, and charming hill towns.",
    description: "Discover the beauty of Sri Lanka's hill country with scenic landscapes, lush tea estates, and iconic rail journeys. Visit Pinnawala Elephant Orphanage, explore Horton Plains National Park, and enjoy the unforgettable train ride from Nanu Oya to Demodara through the heart of the highlands.",
    duration: "7 Days / 6 Nights",
    image: "/images/package4.jpg",
    /*pricePerPerson: 570,
    maxPersons: 2, */
    itinerary: [
      { stop: "Kandy", duration: "2 Nights", activity: "Pinnawala Excursion" },
      { stop: "Nuwara Eliya", duration: "2 Nights", activity: "Horton Plains Visit" },
      { stop: "Demodara", duration: "Scenic Train Journey from Nanu Oya" },
      { stop: "Ella", duration: "1 Night" },
      { stop: "Colombo", duration: "1 Night" }
    ]
  },
  {
    id: 5,
    slug: "kandy-esala-perahera-cultural-tour",
    categoryId: 3,
    seoTitle: "9-Day Kandy Esala Perahera Cultural Tour | Manik Lanka Holidays",
    seoKeywords: ["Kandy Esala Perahera tour", "Sri Lanka cultural festival", "Sri Lanka heritage tour", "Kandy Perahera package", "Sri Lanka festival holiday"],
    imageAlt: "Kandy Esala Perahera cultural tour featuring traditional dancers and decorated elephants",
    name: "Kandy Esala Perahera Cultural Tour",
    shortDescription: "Experience Sri Lanka's most spectacular cultural festival while exploring scenic landscapes, wildlife, and heritage sites.",
    description: "Witness the grandeur of the world-famous Kandy Esala Perahera, one of Asia's most vibrant cultural celebrations. Journey through Sri Lanka's southern coast, wildlife reserves, and misty hill country before experiencing the spectacular processions, traditional dancers, drummers, and centuries-old rituals in Kandy.",
    duration: "9 Days / 8 Nights",
    image: "/images/package5.jpg",
    /*pricePerPerson: 335,
    maxPersons: 2, */
    itinerary: [
      { stop: "Colombo", duration: "1 Night" },
      { stop: "Galle", duration: "1 Night" },
      { stop: "Yala", duration: "1 Night" },
      { stop: "Ella", duration: "2 Nights" },
      { stop: "Nuwara Eliya", duration: "1 Night" },
      { stop: "Kandy", duration: "2 Nights" }
    ]
  },
  {
    id: 6,
    slug: "cultural-city-escape",
    categoryId: 3,
    seoTitle: "4-Day Cultural City Escape Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka cultural tour", "Kandy cultural package", "4 day Sri Lanka itinerary", "Colombo and Kandy tour", "Sri Lanka heritage holiday"],
    imageAlt: "Cultural tour package featuring Colombo city highlights and Kandy heritage sites",
    name: "Cultural City Escape",
    shortDescription: "Discover the perfect blend of Sri Lanka's vibrant city life and rich cultural heritage.",
    description: "Experience the essence of Sri Lanka with a short yet memorable journey through Colombo and Kandy. Explore bustling city attractions, visit sacred temples, witness traditional cultural performances, and immerse yourself in the island's rich history and heritage.",
    duration: "4 Days / 3 Nights",
    image: "/images/sigiriya.jpg",
    /*pricePerPerson: 420,
    maxPersons: 2, */
    itinerary: [
      { stop: "Colombo", duration: "1 Night" },
      { stop: "Kandy", duration: "2 Nights" }
    ],
  },
  {
    id: 7,
    slug: "sri-lanka-highlights-tour",
    categoryId: 3,
    seoTitle: "7-Day Sri Lanka Highlights Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka highlights tour", "Sri Lanka 7 day itinerary", "Sri Lanka cultural tour", "Sri Lanka holiday package", "Colombo Kandy Bentota tour"],
    imageAlt: "Sri Lanka highlights tour featuring cultural sites, hill country, and beaches",
    name: "Sri Lanka Highlights Tour",
    shortDescription: "Discover Sri Lanka's iconic destinations, from ancient heritage sites and scenic highlands to relaxing coastal escapes.",
    description: "Experience the very best of Sri Lanka on this carefully curated journey through vibrant cities, ancient cultural landmarks, misty hill country, and golden beaches. Explore the island's rich heritage, breathtaking landscapes, and warm hospitality in one unforgettable adventure.",
    duration: "7 Days / 6 Nights",
    image: "/images/beachImage.jpg",
    /*pricePerPerson: 280,
    maxPersons: 2, */
    itinerary: [
      { stop: "Colombo", duration: "1 Night" },
      { stop: "Dambulla", duration: "1 Night" },
      { stop: "Kandy", duration: "1 Night" },
      { stop: "Nuwara Eliya", duration: "1 Night" },
      { stop: "Bentota", duration: "2 Nights" }
    ],
  },
  {
    id: 8,
    slug: "leisure-at-sri-lanka",
    categoryId: 3,
    seoTitle: "14-Day Leisure at Sri Lanka Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka leisure tour", "14 day Sri Lanka itinerary", "Sri Lanka cultural holiday", "Sri Lanka grand tour package", "Sigiriya Polonnaruwa tour", "Sri Lanka heritage and beach tour"],
    imageAlt: "Leisure tour across Sri Lanka featuring ancient cities, hill country, wildlife, and coastal destinations",
    name: "Leisure at Sri Lanka",
    shortDescription: "Explore Sri Lanka at a relaxed pace with a journey through ancient kingdoms, scenic highlands, wildlife reserves, and coastal escapes.",
    description: "Experience the diverse beauty of Sri Lanka on an immersive 14-day journey. Discover ancient heritage cities, explore iconic landmarks including Sigiriya and Polonnaruwa, travel through misty hill country, encounter wildlife in Yala, and unwind along the southern coast before concluding your adventure in Colombo.",
    duration: "14 Days / 13 Nights",
    image: "/images/wildLifeImage.jpg",
    /*pricePerPerson: 320,
    maxPersons: 2, */
    itinerary: [
      { stop: "Negombo", duration: "1 Night" },
      { stop: "Anuradhapura", duration: "2 Nights" },
      {
        stop: "Habarana",
        duration: "2 Nights",
        highlights: ["Sigiriya", "Polonnaruwa"]
      },
      { stop: "Kandy", duration: "1 Night" },
      { stop: "Nuwara Eliya", duration: "2 Nights" },
      { stop: "Ella", duration: "1 Night" },
      { stop: "Yala", duration: "1 Night" },
      { stop: "Galle", duration: "2 Nights" },
      { stop: "Colombo", duration: "1 Night" }
    ],
  },
  {
    id: 9,
    slug: "east-coast-and-southern-beach-escape",
    categoryId: 4,
    seoTitle: "13-Day East Coast & Southern Beach Escape Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka beach tour", "Trincomalee beach package", "Sri Lanka east coast holiday", "Sri Lanka south coast tour", "Sri Lanka beach and culture itinerary", "Trincomalee to Galle tour"],
    imageAlt: "Sri Lanka beach tour featuring Trincomalee, Galle, Bentota, and cultural highlights",
    name: "East Coast & Southern Beach Escape",
    shortDescription: "Discover Sri Lanka's stunning east and south coast beaches while exploring ancient cities, wildlife, and scenic hill country.",
    description: "Experience the perfect blend of coastal relaxation and cultural discovery on this unforgettable journey across Sri Lanka. Unwind on the pristine beaches of Trincomalee and the southern coast, explore the ancient wonders of Sigiriya and Polonnaruwa, visit tea plantations in the hill country, encounter wildlife in Yala, and enjoy the charm of historic Galle.",
    duration: "13 Days / 12 Nights",
    image: "/images/wildLifeImage.jpg",
    /*pricePerPerson: 320,
    maxPersons: 2, */
    itinerary: [
      { stop: "Negombo", duration: "1 Night" },
      { stop: "Habarana", duration: "2 Nights" },
      { stop: "Sigiriya", duration: "Day Tour" },
      { stop: "Polonnaruwa", duration: "Visit" },
      { stop: "Trincomalee", duration: "2 Nights" },
      { stop: "Dambulla", duration: "Visit" },
      { stop: "Matale", duration: "Visit" },
      { stop: "Kandy", duration: "2 Nights" },
      { stop: "Ramboda", duration: "Visit" },
      { stop: "Nuwara Eliya", duration: "1 Night" },
      { stop: "Yala", duration: "2 Nights" },
      { stop: "Galle", duration: "2 Nights" },
      { stop: "Bentota", duration: "Visit" },
      { stop: "Colombo", duration: "1 Night" }
    ],
  },
  {
    id: 10,
    slug: "adventure-and-beach-expedition",
    categoryId: 4,
    seoTitle: "11-Day Adventure & Beach Expedition Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka beach adventure tour", "Kalpitiya holiday package", "Trincomalee beach tour", "Pasikuda vacation", "Arugam Bay surfing holiday", "Hikkaduwa beach package"],
    imageAlt: "Adventure and beach tour across Sri Lanka featuring Kalpitiya, Trincomalee, Pasikuda, Arugam Bay, and Hikkaduwa",
    name: "Adventure & Beach Expedition",
    shortDescription: "Explore Sri Lanka's most spectacular coastal destinations with thrilling water sports and unforgettable beach experiences.",
    description: "Embark on an exciting coastal journey across Sri Lanka's east, south, and west shores. Discover the marine life of Kalpitiya, relax on the pristine beaches of Trincomalee and Pasikuda, experience the surfing culture of Arugam Bay, and enjoy the vibrant beach atmosphere of Hikkaduwa. This tour is perfect for travelers seeking adventure, relaxation, and tropical beauty.",
    duration: "11 Days / 10 Nights",
    image: "/images/wildLifeImage.jpg",
    /*pricePerPerson: 320,
    maxPersons: 2, */
    itinerary: [
      { stop: "Kalpitiya", duration: "2 Nights" },
      { stop: "Trincomalee", duration: "2 Nights" },
      { stop: "Pasikuda", duration: "2 Nights" },
      { stop: "Arugam Bay", duration: "2 Nights" },
      { stop: "Hikkaduwa", duration: "2 Nights" }
    ],
  },
  {
    id: 11,
    slug: "sun-and-fun-beach-escape",
    categoryId: 4,
    seoTitle: "6-Day Sun & Fun Beach Escape Tour | Manik Lanka Holidays",
    seoKeywords: ["Sri Lanka beach holiday", "Bentota beach package", "Galle beach tour", "Sri Lanka coastal getaway", "Sri Lanka beach vacation", "Bentota and Galle itinerary"],
    imageAlt: "Sun and Fun beach holiday featuring Bentota, Galle, and Colombo",
    name: "Sun & Fun Beach Escape",
    shortDescription: "Relax on golden beaches, explore historic coastal towns, and enjoy the vibrant atmosphere of Sri Lanka's southern coastline.",
    description: "Unwind with the perfect tropical getaway along Sri Lanka's beautiful southern coast. Relax on the pristine beaches of Bentota, discover the colonial charm of Galle, and experience the energy of Colombo before concluding your unforgettable beach holiday.",
    duration: "6 Days / 5 Nights",
    image: "/images/wildLifeImage.jpg",
    /*pricePerPerson: 320,
    maxPersons: 2, */
    itinerary: [
      { stop: "Bentota", duration: "2 Nights" },
      { stop: "Galle", duration: "2 Nights" },
      { stop: "Colombo", duration: "1 Night" }
    ],
  },
];