/* ─────────────────────────────────────────────────────────────
   experiences.ts
   Central data file for the Experiences page.
   Photos are placeholders — replace each photos[] array with
   real destination images when available.
───────────────────────────────────────────────────────────── */


export interface ExpItem {
  id: string;
  slug: string;
  name: string;
  subcategory?: string; // only for Adventure & Lifestyle
  shortDescription: string;
  description: string;
  photos: string[]; // exactly 5 — replace with real images later
}

export interface ExpCategory {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;  // hero / card image for this category
  items: ExpItem[];
}

/* ════════════════════════════════════════════════════════════
   CATEGORIES
════════════════════════════════════════════════════════════ */
export const experienceCategories: ExpCategory[] = [

  /* ─── 1. Culture & Heritage ─────────────────────────────── */
  {
    id: 1,
    slug: "culture-heritage",
    name: "Culture & Heritage",
    shortDescription: "Step into two millennia of temples, kingdoms, and UNESCO wonders",
    description:
      "Sri Lanka's cultural heartland stretches across ancient kingdoms, sacred Buddhist sites, and UNESCO World Heritage cities. Walk where royalty once ruled, marvel at towering dagobas, and soak in centuries of tradition still alive today.",
    image: "/images/sigiriya.jpg",
    items: [
      {
        id: "anuradhapura",
        slug: "anuradhapura",
        name: "Anuradhapura",
        shortDescription: "Sri Lanka's first ancient capital — over 2,000 years of Buddhist heritage",
        description:
          "The first ancient capital of Sri Lanka, Anuradhapura is a UNESCO World Heritage Site renowned for its sacred temples, towering dagobas, and ancient irrigation systems. Home to the revered Sri Maha Bodhi Tree — grown from a cutting of the very tree under which the Buddha attained enlightenment — the city offers visitors a fascinating glimpse into more than two thousand years of Buddhist heritage and royal history.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "polonnaruwa",
        slug: "polonnaruwa",
        name: "Polonnaruwa",
        shortDescription: "A UNESCO kingdom of palaces, giant statues, and ancient reservoirs",
        description:
          "Polonnaruwa is an exceptionally well-preserved ancient kingdom filled with royal palaces, intricately carved statues, and impressive archaeological treasures. Visitors can explore the magnificent Gal Vihara — with its colossal rock-cut Buddha figures — the Royal Palace complex, and the vast Parakrama Samudraya reservoir, an ancient engineering marvel that still irrigates farmland today.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "sigiriya",
        slug: "sigiriya",
        name: "Sigiriya",
        shortDescription: "A UNESCO rock fortress rising 200m above the plains",
        description:
          "Rising dramatically above the surrounding plains, Sigiriya Rock Fortress is one of Sri Lanka's most iconic landmarks. This UNESCO World Heritage Site features ancient frescoes of celestial maidens painted into the rock face, landscaped water gardens considered among the oldest in the world, a mirror wall polished enough to reflect the king's image, and breathtaking panoramic views from the summit.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "dambulla",
        slug: "dambulla",
        name: "Dambulla",
        shortDescription: "Five ancient cave temples housing 157 Buddha statues",
        description:
          "Dambulla is home to the famous Golden Temple and Cave Temple Complex, one of the best-preserved cave temple sites in Asia. The five caves contain 157 Buddha statues and stunning murals spanning 2,100 square metres — a breathtaking showcase of centuries of Buddhist art. The complex has been a place of worship for over two thousand years.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kandy",
        slug: "kandy",
        name: "Kandy",
        shortDescription: "Sri Lanka's cultural capital, home to the sacred Tooth Relic",
        description:
          "Nestled among misty hills, Kandy is Sri Lanka's cultural capital and home to the sacred Temple of the Tooth Relic — one of Buddhism's most revered shrines. The city is famous for its rich traditions, Kandyan cultural performances, the serene Kandy Lake, and the magnificent Esala Perahera festival, an annual procession of elaborately decorated elephants, fire dancers, and drummers.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "yapahuwa",
        slug: "yapahuwa",
        name: "Yapahuwa",
        shortDescription: "A medieval capital known for its impressive stone staircase",
        description:
          "Once a medieval capital of Sri Lanka, Yapahuwa is known for its impressive carved stone staircase and ancient palace ruins perched atop a dramatic granite outcrop. The site offers historical significance combined with beautiful views of the surrounding countryside. The ornamental staircase with its decorative lions is considered a masterpiece of medieval Sri Lankan architecture.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "mihintale",
        slug: "mihintale",
        name: "Mihintale",
        shortDescription: "The birthplace of Buddhism in Sri Lanka",
        description:
          "Considered the birthplace of Buddhism in Sri Lanka, Mihintale is where Arahat Mahinda — son of Emperor Ashoka — introduced Buddhism to King Devanampiyatissa in the 3rd century BC. The ancient monastery complex includes dagobas, relic chambers, and stone-carved ponds, while the summit offers panoramic viewpoints and a deeply spiritual atmosphere.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "ritigala",
        slug: "ritigala",
        name: "Ritigala",
        shortDescription: "A mysterious ancient monastery hidden in dense forest",
        description:
          "Hidden within a strict nature reserve, Ritigala is an ancient monastery surrounded by dense forests. Its mysterious ruins — including unusual double-platform meditation walkways found nowhere else in Sri Lanka — and tranquil atmosphere create a unique blend of history and nature. The site is shrouded in legend and mentioned in both the Ramayana and Mahavamsa.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "jaffna",
        slug: "jaffna",
        name: "Jaffna",
        shortDescription: "Sri Lanka's northern cultural gem shaped by Tamil heritage",
        description:
          "Jaffna showcases a distinct cultural identity shaped by centuries of Tamil heritage. Visitors can explore ancient temples such as the Nallur Kandaswamy Kovil, the colonial Jaffna Fort, vibrant local markets, and sample authentic northern Sri Lankan cuisine. The region offers a unique cultural experience unlike anywhere else on the island, with warm and welcoming communities proud of their traditions.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "galle-fort",
        slug: "galle-fort",
        name: "Galle Fort",
        shortDescription: "A UNESCO colonial fort of cobblestones, cafés, and ocean views",
        description:
          "Built by the Portuguese in 1588 and later fortified by the Dutch in the 17th century, Galle Fort is a UNESCO World Heritage Site filled with cobblestoned streets, boutique cafés, museums, art galleries, and beautifully preserved colonial architecture. Walking the ramparts at sunset — with the Indian Ocean stretching to the horizon — is one of Sri Lanka's most memorable experiences.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "colombo",
        slug: "colombo",
        name: "Colombo",
        shortDescription: "A vibrant capital blending colonial landmarks with modern life",
        description:
          "Sri Lanka's vibrant commercial capital seamlessly blends colonial landmarks with modern city life. From historic temples and the iconic Gangaramaya, to bustling Pettah markets, luxury shopping malls, and the scenic Galle Face Green promenade, Colombo offers something for every traveler. The city's diverse culinary scene and lively nightlife make it a perfect starting or ending point for any Sri Lanka journey.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "matale",
        slug: "matale",
        name: "Matale",
        shortDescription: "Spice gardens, cultural landmarks, and traditional craft villages",
        description:
          "Located between Kandy and Dambulla, Matale is famous for its lush spice gardens where visitors can discover cinnamon, pepper, cardamom, and dozens of other spices in their natural setting. Cultural landmarks such as the Sri Muthumariamman Thevasthanam Hindu temple and traditional craft villages provide visitors with an authentic glimpse into Sri Lanka's agricultural and cultural heritage.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
    ],
  },

  /* ─── 2. Adventure, Spiritual & Lifestyle ───────────────── */
  {
    id: 2,
    slug: "adventure-spiritual-lifestyle",
    name: "Adventure, Spiritual & Lifestyle",
    shortDescription: "Thrill-seeking trails, sacred pilgrimages, festivals, food, and wellness",
    description:
      "From white-water rapids and mountain hikes to sacred pilgrimage sites, vibrant festivals, authentic cuisine, and rejuvenating Ayurvedic retreats — this category captures the richest dimensions of the Sri Lankan experience.",
    image: "/images/wildLifeImage.jpg",
    items: [
      /* ── Adventure ── */
      {
        id: "ella",
        slug: "ella",
        name: "Ella",
        subcategory: "Adventure",
        shortDescription: "Scenic train rides, waterfalls, and thrilling hikes in the highlands",
        description:
          "Ella is one of Sri Lanka's most popular adventure destinations, offering a wide range of experiences for nature lovers and thrill-seekers alike. Hike to Little Adam's Peak or the more challenging Ella Rock for breathtaking views across the valley. Catch the iconic Nine Arch Bridge by train on one of the world's most scenic rail journeys. Explore nearby waterfalls and soak in the laid-back mountain village atmosphere.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "adams-peak",
        slug: "adams-peak",
        name: "Adam's Peak",
        subcategory: "Adventure",
        shortDescription: "A sacred mountain climb rewarded by a spectacular sunrise",
        description:
          "A sacred mountain climbed by pilgrims and adventurers alike, Adam's Peak — also known as Sri Pada — rewards visitors with spectacular sunrise views after an unforgettable overnight trek. The mountain is revered by Buddhists, Hindus, Muslims, and Christians, each group attributing different religious significance to the 'sacred footprint' at the summit. The climb typically begins at midnight to reach the top by dawn.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kitulgala",
        slug: "kitulgala",
        name: "Kitulgala",
        subcategory: "Adventure",
        shortDescription: "Sri Lanka's adventure capital — rafting, canyoning, and jungle treks",
        description:
          "Known as Sri Lanka's adventure capital, Kitulgala is set amidst lush rainforest beside the rushing Kelani River. It offers white-water rafting for all experience levels, canyoning, zip-lining, and jungle trekking experiences. The area is also famous as the filming location for the classic film 'The Bridge on the River Kwai' and for its rich birdwatching opportunities in the surrounding Makandawa Forest.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "meemure",
        slug: "meemure",
        name: "Meemure",
        subcategory: "Adventure",
        shortDescription: "A remote Knuckles village for camping, trekking, and rural life",
        description:
          "Nestled deep within the Knuckles Mountain Range, Meemure is a remote and pristine village surrounded by breathtaking natural beauty. Accessible only by a single winding road, it is ideal for camping, trekking through cloud forests, and experiencing authentic rural Sri Lankan life. Streams, waterfalls, and dramatic mountain scenery create an unforgettable wilderness escape far from the tourist trail.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "belilena-cave",
        slug: "belilena-cave",
        name: "Belilena Cave",
        subcategory: "Adventure",
        shortDescription: "A prehistoric cave with archaeological significance near Kitulgala",
        description:
          "This prehistoric cave near Kitulgala offers an exciting hiking experience combined with deep archaeological significance. Excavations at Belilena have revealed evidence of human habitation dating back over 30,000 years, making it one of the oldest known human dwellings in Sri Lanka. The trail through the forest to reach the cave is itself a scenic and rewarding adventure.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "hanthana",
        slug: "hanthana",
        name: "Hanthana",
        subcategory: "Adventure",
        shortDescription: "Tea plantation hikes and mountain biking near Kandy",
        description:
          "Located near Kandy, the Hanthana Mountain Range is a popular destination for hiking and mountain biking through lush tea plantations and scenic landscapes. The trails offer stunning views over Kandy city and the surrounding valleys. With varying difficulty levels, it is suitable for casual walkers and seasoned trekkers alike.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "makandawa-forest",
        slug: "makandawa-forest",
        name: "Makandawa Forest",
        subcategory: "Adventure",
        shortDescription: "Birdwatching, waterfalls, and nature walks in a protected forest",
        description:
          "This protected rainforest near Kitulgala provides outstanding opportunities for birdwatching — with over 200 species recorded — waterfall exploration, and peaceful nature walks. The Makandawa wetlands are a designated conservation zone rich in endemic flora and fauna. Local guides offer insightful tours revealing the hidden biodiversity of this remarkable ecosystem.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "arugam-bay-adventure",
        slug: "arugam-bay-adventure",
        name: "Arugam Bay",
        subcategory: "Adventure",
        shortDescription: "World-class surfing and water-based adventures on the east coast",
        description:
          "Apart from its stunning beaches, Arugam Bay is globally renowned for surfing and water-based adventures. The main break is considered one of the top ten surfing spots in the world. The area also offers surfing lessons for beginners, stand-up paddleboarding, kayaking, and wildlife-rich lagoon boat tours. The relaxed surf culture and beautiful setting make it a must-visit for adventure travelers.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      /* ── Spiritual Journeys ── */
      {
        id: "temple-tooth-relic",
        slug: "temple-of-the-tooth",
        name: "Temple of the Tooth Relic",
        subcategory: "Spiritual Journeys",
        shortDescription: "Buddhism's most important relic in the heart of Kandy",
        description:
          "Located in the heart of Kandy, the Sri Dalada Maligawa houses one of Buddhism's most sacred and important relics — a tooth of the Buddha. The temple attracts pilgrims from across the world and is a centre of deep spiritual significance. The daily puja ceremonies, the surrounding royal palace complex, and the annual Esala Perahera procession make this one of Asia's most profound cultural and religious experiences.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kataragama",
        slug: "kataragama",
        name: "Kataragama",
        subcategory: "Spiritual Journeys",
        shortDescription: "Sri Lanka's most sacred multi-religious pilgrimage site",
        description:
          "Kataragama is one of Sri Lanka's most sacred multi-religious pilgrimage sites, visited by Buddhists, Hindus, Muslims, and Christians. The Kataragama Devalaya and the Maha Devale temples are the centrepieces of the sacred precinct. The annual Esala festival here — featuring firewalking, kavadi dances, and water-cutting ceremonies — draws hundreds of thousands of devotees in a spectacle of faith and colour.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kelaniya-temple",
        slug: "kelaniya-temple",
        name: "Kelaniya Temple",
        subcategory: "Spiritual Journeys",
        shortDescription: "Remarkable murals and ancient traditions near Colombo",
        description:
          "Steeped in history and spirituality, the Raja Maha Vihara at Kelaniya is one of Sri Lanka's most revered Buddhist temples. The interior is adorned with remarkable murals depicting scenes from the Jataka stories and the history of Buddhism in Sri Lanka. Legends hold that the Buddha himself visited this site during his third journey to the island, making it deeply sacred to Buddhists.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "madu-church",
        slug: "madu-church",
        name: "Madu Church",
        subcategory: "Spiritual Journeys",
        shortDescription: "A revered Catholic shrine on a serene island near Mannar",
        description:
          "Located on a peaceful island in Mannar, the Our Lady of Madhu Church is one of Sri Lanka's most revered Catholic shrines. Thousands of pilgrims — both Catholic and of other faiths — visit annually to seek blessings. The church is surrounded by tranquil forests and the journey by boat to reach the island adds to the spiritual atmosphere of the pilgrimage.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "nagadeepa-temple",
        slug: "nagadeepa-temple",
        name: "Nagadeepa Temple",
        subcategory: "Spiritual Journeys",
        shortDescription: "An island Buddhist pilgrimage site near Jaffna",
        description:
          "Situated on the small island of Nainativu near Jaffna, Nagadeepa is one of Sri Lanka's most important Buddhist pilgrimage destinations. The temple is believed to mark the site where the Buddha visited during his second journey to the island. Reached by a scenic boat ride, the island also houses the Nainativu Nagapooshani Amman Temple, making it a sacred destination for both Buddhists and Hindus.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "munneswaram-temple",
        slug: "munneswaram-temple",
        name: "Munneswaram Temple",
        subcategory: "Spiritual Journeys",
        shortDescription: "One of Sri Lanka's oldest and most vibrant Hindu temples",
        description:
          "One of the country's oldest Hindu temples, Munneswaram is dedicated to Shiva and is known for its vibrant festivals and deep cultural significance. The annual Munneswaram Festival draws enormous crowds of devotees from across Sri Lanka and is one of the island's most spectacular Hindu celebrations, featuring elaborate rituals, firewalking, and traditional performances.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      /* ── Festivals & Culture ── */
      {
        id: "esala-perahera",
        slug: "esala-perahera",
        name: "Esala Perahera",
        subcategory: "Festivals & Culture",
        shortDescription: "Asia's most spectacular cultural festival of elephants and fire",
        description:
          "Held annually in Kandy during July or August, the Esala Perahera is one of Asia's most spectacular cultural festivals. Over ten days, the procession features traditional Kandyan dancers, drummers, fire performers, and magnificently decorated elephants. The grand finale — the Randoli Perahera — is a breathtaking spectacle that has captivated visitors for centuries. The festival honours the sacred Tooth Relic of the Buddha.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "thai-pongal",
        slug: "thai-pongal",
        name: "Thai Pongal",
        subcategory: "Festivals & Culture",
        shortDescription: "A traditional harvest festival of gratitude and community",
        description:
          "Celebrated across Sri Lanka — especially in the north and east — Thai Pongal is a Tamil harvest festival that honours the sun god and gives thanks for the harvest. Families cook sweet pongal rice in clay pots outdoors, decorate their homes with kolam patterns, and gather for festive meals and rituals. It is a joyful celebration of nature, gratitude, and community.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "vesak",
        slug: "vesak",
        name: "Vesak",
        subcategory: "Festivals & Culture",
        shortDescription: "Sri Lanka's most important Buddhist festival of light and generosity",
        description:
          "Sri Lanka's most important Buddhist festival transforms cities and villages with extraordinary lantern displays, illuminated pandals telling stories from the Jataka tales, religious observances, and extraordinary acts of generosity. Free food stalls — called 'dansalas' — are set up across the country. Vesak commemorates the birth, enlightenment, and passing of the Buddha and is observed on the full moon of May.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "sinhala-tamil-new-year",
        slug: "sinhala-tamil-new-year",
        name: "Sinhala and Tamil New Year",
        subcategory: "Festivals & Culture",
        shortDescription: "Traditional April celebrations of games, rituals, and family",
        description:
          "Celebrated in April, the Sinhala and Tamil New Year is one of Sri Lanka's most joyful and culturally rich festivals. Families come together to play traditional games, perform ancient rituals at auspicious times, share festive meals, and exchange gifts. The celebrations bridge communities across the island, reflecting Sri Lanka's tradition of multi-cultural harmony.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      /* ── Culinary Experiences ── */
      {
        id: "colombo-food-tours",
        slug: "colombo-food-tours",
        name: "Colombo Food Tours",
        subcategory: "Culinary Experiences",
        shortDescription: "Street food, local markets, and modern dining in the capital",
        description:
          "Explore Sri Lanka's vibrant food scene through Colombo's bustling local markets, street food stalls, traditional eateries, and contemporary restaurants. From kottu roti and hoppers to fresh seafood and mango curry, Colombo's culinary landscape is a feast for the senses. Guided food tours take visitors behind the scenes to discover the authentic flavours, spices, and food traditions of the island.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "jaffna-cuisine",
        slug: "jaffna-cuisine",
        name: "Jaffna Cuisine",
        subcategory: "Culinary Experiences",
        shortDescription: "Spicy seafood, unique curries, and rich Tamil food traditions",
        description:
          "Jaffna is famous for its uniquely spicy and flavourful cuisine that reflects centuries of Tamil culinary tradition. Dishes such as Jaffna crab curry, kool — a thick seafood broth — and pittu with coconut milk offer distinctive flavours unlike anywhere else in Sri Lanka. Exploring the local food markets and family-run restaurants of Jaffna provides an authentic and deeply satisfying cultural experience.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kandy-traditional-cuisine",
        slug: "kandy-traditional-cuisine",
        name: "Kandy Traditional Cuisine",
        subcategory: "Culinary Experiences",
        shortDescription: "Authentic hill-country rice-and-curry and traditional flavours",
        description:
          "Discover authentic hill-country flavours and traditional rice-and-curry experiences in Kandy. Kandy's cuisine features a unique range of vegetable, fish, and meat curries complemented by coconut sambol, dhal, and a variety of rice types. Many local restaurants and homestays offer traditional meal experiences that provide a genuine insight into Sri Lanka's rich food heritage.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "southern-seafood-trail",
        slug: "southern-seafood-trail",
        name: "Southern Seafood Trail",
        subcategory: "Culinary Experiences",
        shortDescription: "Fresh-caught seafood along the coast from Negombo to Tangalle",
        description:
          "Enjoy freshly caught seafood along the beautiful southern coast of Sri Lanka, from the fishing communities of Negombo to the beach restaurants of Tangalle. The southern seafood trail showcases the very best of Sri Lanka's ocean harvest — grilled prawns, devilled cuttlefish, fresh tuna, and coconut-infused fish curries served on sun-drenched beachfront tables with waves lapping at the shore.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "tea-experiences-nuwara-eliya",
        slug: "tea-experiences-nuwara-eliya",
        name: "Tea Experiences in Nuwara Eliya",
        subcategory: "Culinary Experiences",
        shortDescription: "Discover Ceylon tea from estate to cup in Sri Lanka's tea country",
        description:
          "Visit the misty tea estates and factories of Nuwara Eliya to learn about Sri Lanka's world-famous Ceylon tea industry. Guided estate tours reveal the process of tea cultivation, plucking, and processing, while tea tastings allow visitors to appreciate the distinct flavours of different tea grades. The dramatic highland scenery of rolling green plantations under misty skies creates an unforgettable backdrop.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      /* ── Wellness & Ayurveda ── */
      {
        id: "beruwala-ayurveda",
        slug: "beruwala-ayurveda",
        name: "Beruwala Ayurveda Retreats",
        subcategory: "Wellness & Ayurveda",
        shortDescription: "World-class Ayurvedic wellness and traditional healing therapies",
        description:
          "Beruwala is home to some of Sri Lanka's finest Ayurvedic wellness centres, where ancient Indian healing traditions have been practised for generations. Personalised Ayurvedic treatments including massages, herbal baths, dietary consultations, and detox programmes are designed to restore balance and vitality. Combined with the peaceful coastal setting, Beruwala offers a truly transformative wellness experience.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "bentota-wellness",
        slug: "bentota-wellness",
        name: "Bentota Wellness Escapes",
        subcategory: "Wellness & Ayurveda",
        shortDescription: "Beach relaxation combined with traditional healing and yoga",
        description:
          "Combine the beauty of Bentota's golden beach with traditional healing therapies and yoga experiences at the area's world-renowned wellness resorts. Bentota has been a centre of Ayurvedic tourism since the 1970s and continues to attract visitors seeking holistic health, relaxation, and renewal. The combination of ocean breezes, tropical gardens, and expert therapists creates an ideal environment for mind-body restoration.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "weligama-yoga",
        slug: "weligama-yoga",
        name: "Weligama Yoga Retreats",
        subcategory: "Wellness & Ayurveda",
        shortDescription: "Peaceful yoga and meditation on Sri Lanka's southern coast",
        description:
          "Weligama's wide, sheltered bay and laid-back atmosphere provide a peaceful environment for yoga, meditation, and holistic wellness. Numerous retreat centres offer daily yoga classes, meditation sessions, and wellness workshops set against the backdrop of the Indian Ocean. The town's gentle surf and serene coastal setting make it an ideal destination for those seeking balance, clarity, and inner peace.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "haputale-wellness",
        slug: "haputale-wellness",
        name: "Haputale Wellness Experiences",
        subcategory: "Wellness & Ayurveda",
        shortDescription: "Mindfulness and rejuvenation surrounded by mountain tea estates",
        description:
          "Surrounded by mist-covered mountains and sweeping tea plantations, Haputale provides an extraordinary setting for rejuvenation and mindfulness. The cool highland climate, clean mountain air, and dramatic vistas create a natural environment for wellness experiences including guided meditation, yoga, and nature walks. Haputale offers a peaceful escape from the modern world that is genuinely restorative.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
    ],
  },

  /* ─── 3. Beaches & Coastal Escapes ─────────────────────── */
  {
    id: 3,
    slug: "beaches-coastal",
    name: "Beaches & Coastal Escapes",
    shortDescription: "Golden sands, turquoise waters, and vibrant coastal culture",
    description:
      "Sri Lanka's coastline stretches over 1,500 km, offering an extraordinary variety of beach experiences — from surf-swept eastern shores and tranquil southern bays to vibrant western resort towns and remote northern coves.",
    image: "/images/beachImage.jpg",
    items: [
      {
        id: "bentota",
        slug: "bentota",
        name: "Bentota",
        shortDescription: "Golden sands, luxury resorts, and exciting water sports",
        description:
          "Bentota is one of Sri Lanka's premier beach destinations, offering golden sands, luxury resorts, and a wide range of exciting water sports including jet skiing, windsurfing, and banana boat rides. The nearby Madu River estuary provides opportunities for scenic boat safaris through a beautiful mangrove ecosystem. Bentota is also home to world-class Ayurvedic wellness centres.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kalutara",
        slug: "kalutara",
        name: "Kalutara",
        shortDescription: "Peaceful coastline and the iconic Kalutara Bodhiya",
        description:
          "Known for its peaceful coastline and iconic Kalutara Bodhiya — a distinctive hollow dagoba visible for miles — this charming beach town offers relaxation combined with cultural experiences. The town sits at the mouth of the Kalu Ganga river, offering scenic boat rides as well as excellent beach facilities for swimming and sunbathing.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "beruwala",
        slug: "beruwala",
        name: "Beruwala",
        shortDescription: "Calm waters, snorkeling, and a rich maritime history",
        description:
          "Beruwala features calm and clear waters, beautiful beaches, and a rich maritime history as one of Sri Lanka's oldest Moorish trading settlements. The area is ideal for snorkeling and diving, with vibrant coral reefs teeming with tropical fish. Family-friendly beach holidays, combined with Ayurvedic wellness retreats and cultural exploration, make Beruwala a versatile and rewarding destination.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "unawatuna",
        slug: "unawatuna",
        name: "Unawatuna",
        shortDescription: "Palm-fringed bay with coral reefs and a vibrant beach scene",
        description:
          "Surrounded by palm trees and turquoise waters, Unawatuna is one of Sri Lanka's most popular and picturesque beaches. Its natural crescent-shaped bay offers calm water for swimming, and the coral reefs just offshore provide excellent snorkeling opportunities. The vibrant beachfront strip of restaurants, bars, and guesthouses creates a lively and welcoming atmosphere.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "mirissa",
        slug: "mirissa",
        name: "Mirissa",
        shortDescription: "Laid-back vibes, stunning sunsets, and whale watching",
        description:
          "Mirissa is famous for its laid-back tropical vibe, stunning sunsets, and world-class whale-watching excursions. Between November and April, blue whales and sperm whales can be spotted just offshore in what is one of the world's best whale-watching locations. Visitors can relax on pristine beaches, enjoy the lively beachfront restaurants, or take a boat out into the Indian Ocean for an unforgettable marine encounter.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "tangalle",
        slug: "tangalle",
        name: "Tangalle",
        shortDescription: "Secluded beaches and rugged coastline for the discerning traveler",
        description:
          "Tangalle offers secluded beaches, rugged coastlines, and a peaceful atmosphere away from the crowds. Turtle nesting sites, quiet lagoons, and dramatic rock formations create a natural paradise for travellers seeking tranquillity. The area's Dutch colonial fort and historic fishing harbour add cultural interest to what is already an extraordinarily beautiful coastal destination.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "hikkaduwa",
        slug: "hikkaduwa",
        name: "Hikkaduwa",
        shortDescription: "Surfing, coral reefs, and vibrant coastal entertainment",
        description:
          "Known for its surfing spots and rich coral reefs, Hikkaduwa combines adventure with vibrant coastal culture. The coral sanctuary just metres from the beach is a snorkeling paradise, while the consistent surf breaks attract riders from around the world. The town's colourful beach strip of seafood restaurants, dive shops, and lively bars creates an energetic and entertaining atmosphere.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "weligama",
        slug: "weligama",
        name: "Weligama",
        shortDescription: "Perfect for learning to surf in a wide, sheltered bay",
        description:
          "Weligama's wide bay and gentle, consistent waves make it one of the best places in Sri Lanka to learn to surf. Professional surfing schools operate year-round, catering to complete beginners and intermediate surfers. The area also offers excellent fresh seafood, scenic coastal views, and excellent access to nearby attractions including the famous Taprobane Island.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "arugam-bay",
        slug: "arugam-bay",
        name: "Arugam Bay",
        shortDescription: "One of Asia's top surfing destinations with a relaxed vibe",
        description:
          "Internationally recognised as one of Asia's top surfing destinations, Arugam Bay attracts surfers and adventure enthusiasts from around the world. The main point break consistently delivers world-class waves during the May-to-October season. Beyond surfing, the area's beautiful lagoons, wildlife-rich Kumana National Park, and archaeological sites at Panama create a wonderfully diverse destination.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "pasikuda",
        slug: "pasikuda",
        name: "Pasikuda",
        shortDescription: "Shallow turquoise waters and long sandy beaches for families",
        description:
          "Pasikuda is renowned for its exceptionally shallow turquoise waters and long, pristine sandy beaches. The calm sea conditions — safe and gentle even in the surf zone — make it ideal for swimming and perfect for family vacations with children. Luxury beach resorts line the shore, and the overall atmosphere is peaceful, clean, and unhurried.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "trincomalee",
        slug: "trincomalee",
        name: "Trincomalee",
        shortDescription: "Pristine eastern beaches, history, and whale watching",
        description:
          "Situated on Sri Lanka's east coast, Trincomalee boasts one of the world's finest natural harbours and some of the island's most pristine beaches. Historical attractions include Fort Frederick and the ancient Koneswaram Temple perched dramatically above the ocean. The waters offshore offer outstanding whale and dolphin watching, as well as world-class diving in clear, warm Indian Ocean waters.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "nilaveli",
        slug: "nilaveli",
        name: "Nilaveli",
        shortDescription: "White sands, crystal waters, and Pigeon Island snorkeling",
        description:
          "Located just north of Trincomalee, Nilaveli is known for its stunning white sandy beaches and exceptionally crystal-clear waters. The main attraction is Pigeon Island National Park, just a short boat ride offshore, where diverse coral reefs and abundant marine life — including blacktip reef sharks — make for extraordinary snorkeling and diving. The beach itself is wide, uncrowded, and utterly beautiful.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kalpitiya",
        slug: "kalpitiya",
        name: "Kalpitiya",
        shortDescription: "Dolphin watching, kitesurfing, and unspoiled coastal paradise",
        description:
          "Kalpitiya is famous for its extraordinary dolphin-watching opportunities — pods of hundreds of spinner dolphins can regularly be seen in the calm lagoon waters. The area is also a world-renowned destination for kitesurfing, with consistent trade winds and flat-water lagoons providing ideal conditions. Its unspoiled coastal landscapes and rich marine ecosystems make it a true paradise for nature lovers.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "negombo",
        slug: "negombo",
        name: "Negombo",
        shortDescription: "Colonial history and fishing culture near the airport",
        description:
          "Located close to the international airport, Negombo provides a perfect introduction to Sri Lanka for arriving visitors. The town combines beach relaxation with colonial Dutch history, a vibrant fishing community, and excellent seafood restaurants. The morning fish market is a spectacular local tradition, and the nearby lagoon offers boat rides through a scenic waterway.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "mount-lavinia",
        slug: "mount-lavinia",
        name: "Mount Lavinia",
        shortDescription: "Beachside dining, ocean views, and nightlife near Colombo",
        description:
          "Just south of Colombo, Mount Lavinia offers easy access to Sri Lanka's urban beach experience with superb beachside dining, nightlife, and spectacular Indian Ocean views. The historic Mount Lavinia Hotel — built as the colonial governor's residence — is a landmark of the area. The beach comes alive at weekends with local families and visitors enjoying the waves, seafood, and sea breeze.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "mannar",
        slug: "mannar",
        name: "Mannar",
        shortDescription: "Remote beaches, rich birdlife, and the ancient Adam's Bridge",
        description:
          "Mannar features quiet, remote beaches, unique windswept landscapes, and extraordinarily rich birdlife — with thousands of migratory birds visiting annually. The region is also known for the historic Adam's Bridge, the chain of limestone shoals linking Sri Lanka to India, and for the remarkable ancient baobab tree believed to have been planted by Arab traders over a thousand years ago.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
    ],
  },

  /* ─── 4. Wildlife & Nature ──────────────────────────────── */
  {
    id: 4,
    slug: "wildlife-nature",
    name: "Wildlife & Nature",
    shortDescription: "Leopard safaris, elephant gatherings, and ancient rainforests",
    description:
      "With one of Asia's highest concentrations of leopards, the world's largest elephant gatherings, and UNESCO-protected rainforests teeming with endemic species, Sri Lanka is a wildlife destination of extraordinary richness and diversity.",
    image: "/images/wildLifeImage.jpg",
    items: [
      {
        id: "yala",
        slug: "yala",
        name: "Yala National Park",
        shortDescription: "The world's highest leopard density in a breathtaking wilderness",
        description:
          "Yala is Sri Lanka's most famous wildlife destination and is home to one of the world's highest leopard densities. In addition to these magnificent big cats, visitors can spot elephants, sloth bears, mugger crocodiles, water buffalo, and over 200 bird species. Yala's diverse landscapes — including lagoons, grasslands, and dense forest — create a visually spectacular safari experience.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "wilpattu",
        slug: "wilpattu",
        name: "Wilpattu National Park",
        shortDescription: "A secluded safari paradise of natural lakes and ancient forests",
        description:
          "Known for its natural lakes called 'villus' — circular basins filled with rain water — Wilpattu offers a more secluded and intimate safari experience than Yala. The park's ancient forests are home to leopards, elephants, sloth bears, deer, and diverse birdlife. Wilpattu also holds deep historical significance as the site of the ancient royal settlement of Kuweni.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "udawalawe",
        slug: "udawalawe",
        name: "Udawalawe National Park",
        shortDescription: "Sri Lanka's best destination for wild elephant encounters",
        description:
          "Udawalawe is one of the best places in Asia to observe wild elephants in their natural habitat. Large herds of elephants roam the open grasslands throughout the day, providing outstanding viewing opportunities throughout the year. The park is also home to water buffalo, sambar deer, mongoose, crocodiles, and a rich variety of birdlife.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "minneriya",
        slug: "minneriya",
        name: "Minneriya National Park",
        shortDescription: "Home to 'The Gathering' — hundreds of elephants at one reservoir",
        description:
          "Minneriya is famous for 'The Gathering,' considered one of the largest congregations of Asian elephants in the world. During the dry season between July and October, hundreds of elephants converge around the ancient Minneriya reservoir to graze and socialise in a breathtaking natural spectacle. The park is also excellent for leopard, sloth bear, and birdwatching.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kaudulla",
        slug: "kaudulla",
        name: "Kaudulla National Park",
        shortDescription: "Elephant safaris and rich birdwatching near Minneriya",
        description:
          "Located near Minneriya, Kaudulla is another excellent destination for elephant safaris, especially between August and December when large herds gather around the Kaudulla reservoir. The park's diverse habitats support a wide variety of bird species, making it a rewarding destination for birdwatchers. The beautiful reservoir itself creates a stunning backdrop for wildlife viewing.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "gal-oya",
        slug: "gal-oya",
        name: "Gal Oya National Park",
        shortDescription: "Unique boat safaris watching elephants swim between islands",
        description:
          "Gal Oya offers one of Sri Lanka's most unique safari experiences — boat safaris across the Senanayake Samudra reservoir where visitors can observe elephants swimming between islands. The park remains one of Sri Lanka's hidden gems, rarely overcrowded, and home to leopards, elephants, deer, crocodiles, and a remarkable variety of waterbirds in an extraordinarily scenic setting.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "bundala",
        slug: "bundala",
        name: "Bundala National Park",
        shortDescription: "A UNESCO Biosphere Reserve renowned for migratory birds",
        description:
          "A UNESCO Biosphere Reserve, Bundala is renowned for its wetlands and extraordinary migratory bird populations. Between September and March, thousands of flamingos, pelicans, painted storks, and other migratory birds arrive from as far as Siberia, creating one of South Asia's finest birdwatching spectacles. The park is also home to elephants, crocodiles, and the endangered sea turtle.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "sinharaja",
        slug: "sinharaja",
        name: "Sinharaja Forest Reserve",
        shortDescription: "Sri Lanka's last tropical rainforest and a UNESCO World Heritage Site",
        description:
          "Sri Lanka's last viable lowland tropical rainforest is a UNESCO World Heritage Site of extraordinary biological richness. Sinharaja is home to over 60% of Sri Lanka's endemic birds, many endemic mammals, hundreds of endemic plant species, and spectacular butterflies. Guided walks through the forest — accompanied by experienced naturalists — reveal a remarkable world of rare and endemic wildlife.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "horton-plains",
        slug: "horton-plains",
        name: "Horton Plains National Park",
        shortDescription: "Dramatic cloud forests, World's End cliff, and highland wildlife",
        description:
          "Located in the central highlands at over 2,000 metres above sea level, Horton Plains features dramatic cloud forests, open grasslands, and unique highland ecosystems. The major attractions include World's End — a sheer escarpment dropping 870 metres — and the beautiful Baker's Falls waterfall. The park is also one of the best places to see the endemic Sri Lanka leopard and purple-faced langur.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "knuckles-mountain",
        slug: "knuckles-mountain-range",
        name: "Knuckles Mountain Range",
        shortDescription: "Mist-covered peaks, cloud forests, and the famous Mini World's End",
        description:
          "Located in the districts of Matale and Kandy, the Knuckles Mountain Range captivates visitors with its mist-covered peaks, lush cloud forests, and spectacular trekking routes. The region offers outstanding viewpoints, cascading waterfalls, rich biodiversity including many endemic species, and the famous Mini World's End — a dramatic cliff edge with breathtaking views across the highlands.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "riverston",
        slug: "riverston",
        name: "Riverston",
        shortDescription: "A hidden highland gem with misty mountains and scenic hikes",
        description:
          "Riverston is a hidden gem in Sri Lanka's central highlands, known for its cool climate, dramatic mountain views, and scenic hiking trails. Mini World's End at Riverston offers spectacular views across the lowland plains, while the surrounding forests are rich in birdlife and endemic flora. The area's remote and untouched character makes it a genuine escape for nature lovers.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "kitulgala-nature",
        slug: "kitulgala-nature",
        name: "Kitulgala Rainforest",
        shortDescription: "Lush rainforest, the Kelani River, and spectacular birdwatching",
        description:
          "Surrounded by lush rainforest and the rushing Kelani River, Kitulgala is a paradise for nature enthusiasts. The area is famous for its spectacular scenery and rich biodiversity — over 80 endemic bird species have been recorded in the surrounding forests. The river valley, waterfalls, and dense jungle create a breathtaking natural environment for exploration and wildlife observation.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "belihuloya",
        slug: "belihuloya",
        name: "Belihuloya",
        shortDescription: "Waterfalls, cool highland air, and scenic trekking trails",
        description:
          "Belihuloya offers picturesque highland landscapes, magnificent waterfalls, and a cool, refreshing climate throughout the year. It serves as a gateway to several challenging hiking trails leading through montane forests and across open grasslands. The Belihul Oya river adds to the scenic beauty of the area, offering swimming spots and riverside walks in a tranquil natural setting.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
      {
        id: "bambarakanda",
        slug: "bambarakanda",
        name: "Bambarakanda Falls",
        shortDescription: "Sri Lanka's tallest waterfall in a forest of pines and hills",
        description:
          "Home to Sri Lanka's tallest waterfall at 263 metres, Bambarakanda is surrounded by pine forests, rolling hills, and cool highland air. The area provides excellent opportunities for photography, trekking, and peaceful nature walks through an extraordinary highland landscape. The waterfall is most spectacular during the wet season when it thunders down the cliff face in a spectacular cascade of mist and sound.",
        photos: [
          "/images/sigiriya.jpg",
          "/images/wildLifeImage.jpg",
          "/images/beachImage.jpg",
          "/images/nuwaraEliya.jpg",
          "/images/food.jpg",
        ],
      },
    ],
  },
];
