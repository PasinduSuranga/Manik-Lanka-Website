/* ─────────────────────────────────────────────────────────────
   travelguide.ts  —  Data for Foods & Beverages and Things To Do
   Replace photo paths once real images are placed in /public/images/
───────────────────────────────────────────────────────────── */

/* ════════════════════════════════════════════════════════
   FOODS & BEVERAGES
════════════════════════════════════════════════════════ */

export interface FoodSection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  photo: string;
}

export const foodIntro = {
  heading: "Food & Beverages",
  description:
    "Sri Lankan cuisine is a vibrant reflection of the island's rich cultural heritage, tropical climate, and centuries of culinary tradition. Renowned for its bold flavors, aromatic spices, fresh seafood, tropical fruits, and creamy coconut-based dishes, Sri Lankan food offers a unique blend of taste and authenticity. Every meal showcases locally sourced ingredients such as rice, coconut, cinnamon, curry leaves, cardamom, cloves, black pepper, and fresh vegetables, creating an unforgettable dining experience.",
  beverageNote:
    "Sri Lanka is also celebrated for its refreshing beverages. The world-famous Ceylon Tea, grown in the island's lush hill country, is internationally recognized for its exceptional quality and distinctive flavors. Visitors can also enjoy fresh tropical fruit juices made from mango, pineapple, passion fruit, wood apple, king coconut, and watermelon. Traditional drinks such as King Coconut Water (Thambili), Belimal Tea, Ranawara Herbal Tea, and fresh coconut water provide natural refreshment while reflecting Sri Lanka's wellness traditions.",
};

export const foodSections: FoodSection[] = [
  {
    id: "rice-and-curry",
    name: "Rice & Curry",
    tagline: "The Soul of Sri Lankan Cuisine",
    description:
      "Sri Lankan Rice and Curry is the island's signature traditional meal, featuring steamed rice served with a selection of flavorful curries, including chicken, fish, seafood, meat, or vegetables. Accompanied by dhal curry, coconut sambol, pickles, papadum, and seasonal vegetables, it is prepared with aromatic spices, coconut milk, and fresh local ingredients. Rich in flavor and cultural heritage, Sri Lankan Rice and Curry offers an authentic taste of the island's diverse culinary traditions.",
    highlights: ["Dhal Curry", "Coconut Sambol", "Papadum", "Seasonal Vegetables", "Aromatic Spices"],
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783601713/Rice_and_Curry_l9swxw.png",
  },
  {
    id: "iconic-dishes",
    name: "Iconic Sri Lankan Dishes",
    tagline: "A Journey Through the Island's Flavors",
    description:
      "The heart of Sri Lankan cuisine is the traditional Rice and Curry, served with a selection of flavorful meat, seafood, or vegetable curries, accompanied by dhal curry, sambols, pickles, and crispy papadums. Other iconic dishes include Hoppers (Appa), String Hoppers (Idiyappam), Kottu Roti, Pittu, Lamprais, Pol Roti, and the famous Fish Ambul Thiyal. Each region of Sri Lanka has its own specialties, influenced by Sinhala, Tamil, Muslim, and Burgher culinary traditions.",
    highlights: ["Hoppers (Appa)", "Kottu Roti", "String Hoppers", "Lamprais", "Fish Ambul Thiyal"],
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783601727/Iconic_Dishes_fy0rxk.png",
  },
  {
    id: "seafood",
    name: "Sri Lankan Seafood",
    tagline: "Fresh from the Indian Ocean",
    description:
      "Sri Lankan Seafood is celebrated for its freshness, rich flavors, and authentic coastal traditions. Surrounded by the Indian Ocean, Sri Lanka offers an abundance of premium seafood, including lobster, crab, prawns, cuttlefish, squid, tuna, snapper, and reef fish, sourced daily from local fishing communities. Expertly prepared with aromatic spices, coconut milk, curry leaves, and traditional recipes, Sri Lankan seafood delivers a perfect balance of bold flavors and natural freshness. Whether enjoyed as a spicy curry, grilled over charcoal, or served with fragrant rice, every dish offers a true taste of the island's vibrant coastal cuisine.",
    highlights: ["Lobster", "Crab", "Prawns", "Tuna", "Cuttlefish"],
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783601772/Seafood_compressed_hzivko.png",
  },
  {
    id: "desserts",
    name: "Sri Lankan Desserts",
    tagline: "Sweet Traditions, Natural Flavors",
    description:
      "Sri Lankan Desserts are a delightful blend of traditional flavors, natural sweetness, and cultural heritage. Made using ingredients like coconut milk, jaggery (kithul treacle), rice flour, and aromatic spices such as cardamom, these sweets reflect the island's rich culinary traditions. Popular desserts include Watalappan, a creamy coconut custard pudding; Kokis, a crispy festive treat; Kalu Dodol, a rich jaggery-based sweet; and Kiribath with jaggery, often served during celebrations. Sri Lankan desserts are naturally sweet, fragrant, and deeply rooted in festive and cultural occasions, offering a truly authentic taste of the island's hospitality.",
    highlights: ["Watalappan", "Kokis", "Kalu Dodol", "Kiribath", "Kithul Treacle"],
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783601717/Desserts_rv0jgz.png",
  },
  {
    id: "fruits",
    name: "Tropical Sri Lankan Fruits",
    tagline: "Nature's Sweetest Gifts",
    description:
      "Sri Lankan Fruits are known for their natural sweetness, tropical freshness, and vibrant variety grown in the island's warm climate and fertile soil. Sri Lanka offers an abundance of exotic fruits such as mango, pineapple, papaya, banana, rambutan, mangosteen, wood apple, passion fruit, and king coconut. Rich in flavor and nutrients, these fruits are often enjoyed fresh, in juices, or as part of traditional desserts. From roadside fruit stalls to lush home gardens, Sri Lankan fruits reflect the island's natural richness and provide a refreshing taste of its tropical paradise.",
    highlights: ["Mango", "Rambutan", "Mangosteen", "Wood Apple", "King Coconut"],
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783601720/Fruits_x4fozm.png",
  },
];

/* ════════════════════════════════════════════════════════
   THINGS TO DO
════════════════════════════════════════════════════════ */

export interface Activity {
  id: string;
  name: string;
  location?: string;
  tagline: string;
  description: string;
  photo: string;
}

export const activities: Activity[] = [
  {
    id: "ayurveda",
    name: "Ayurveda Treatments",
    tagline: "Ancient Healing, Modern Wellness",
    description:
      "Rejuvenate your body and mind with authentic Ayurvedic therapies, herbal treatments, yoga sessions, and wellness rituals rooted in Sri Lanka's ancient healing traditions.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668047/Ayurveda_rlculv.png",
  },
  {
    id: "kite-surfing",
    name: "Kite Surfing",
    location: "Kalpitiya",
    tagline: "Ride the Wind, Conquer the Waves",
    description:
      "Experience the thrill of kitesurfing in Kalpitiya's pristine lagoons and coastal waters, one of Asia's premier destinations for both beginners and experienced riders.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668460/Kite_Surfing_tohzhg.png",
  },
  {
    id: "paramotoring",
    name: "Paramotoring",
    location: "Koggala",
    tagline: "Soar Above Sri Lanka's Stunning South",
    description:
      "Soar above the stunning southern coastline of Koggala and enjoy breathtaking aerial views of beaches, lagoons, and lush tropical landscapes.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668675/Paramotoring_gsxfsi.png",
  },
  {
    id: "hot-air-ballooning",
    name: "Hot Air Ballooning",
    location: "Kandalama & Down South",
    tagline: "Float Above Ancient Wonders at Sunrise",
    description:
      "Float gently above Sri Lanka's picturesque countryside and witness panoramic views of ancient landmarks, wildlife, lakes, and scenic coastlines at sunrise.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668454/Hot_Air_Ballooning_plr8rc.png",
  },
  {
    id: "whale-watching",
    name: "Whale & Dolphin Watching",
    tagline: "Meet the Giants of the Indian Ocean",
    description:
      "Set sail into the Indian Ocean for an unforgettable encounter with blue whales, sperm whales, and playful dolphins in their natural habitat.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668852/Whale_Watching_qeglkv.png",
  },
  {
    id: "boat-safari",
    name: "Boat Safari",
    tagline: "Explore Hidden Waterways & Mangroves",
    description:
      "Explore tranquil rivers, mangrove forests, and hidden waterways while discovering diverse wildlife and traditional village life.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668065/Boat_Safari_l81wyx.png",
  },
  {
    id: "bird-watching",
    name: "Bird Watching",
    tagline: "Discover Sri Lanka's Spectacular Birdlife",
    description:
      "Discover Sri Lanka's incredible birdlife, from colorful endemic species to migratory birds, across wetlands, forests, and national parks.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668049/Bird_Watching_maqfnm.png",
  },
  {
    id: "surfing",
    name: "Surfing",
    tagline: "World-Class Waves Await",
    description:
      "Ride world-class waves along Sri Lanka's stunning coastline, with surf breaks suitable for beginners and seasoned surfers alike.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668694/Surfing_erqf52.png",
  },
  {
    id: "white-water-rafting",
    name: "White Water Rafting",
    tagline: "Adrenaline in the Rainforest",
    description:
      "Navigate exciting rapids surrounded by lush rainforest and enjoy an adrenaline-filled adventure on Sri Lanka's scenic rivers.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668948/White_Water_Rafting_compressed_hlk6bl.jpg",
  },
  {
    id: "nature-trekking",
    name: "Nature Trekking",
    tagline: "Step Into Sri Lanka's Wild Heart",
    description:
      "Journey through misty mountains, cloud forests, waterfalls, and breathtaking landscapes while exploring Sri Lanka's natural wonders on foot.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668628/Nature_Trekking_compressed_dyg5ni.jpg",
  },
  {
    id: "camping",
    name: "Camping",
    tagline: "Sleep Under a Million Stars",
    description:
      "Spend unforgettable nights under the stars surrounded by wilderness, pristine beaches, or mountain landscapes for a truly immersive outdoor experience.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668113/Camping_tmw07i.png",
  },
  {
    id: "train-rides",
    name: "Scenic Train Rides",
    tagline: "The World's Most Beautiful Rail Journeys",
    description:
      "Travel through Sri Lanka's iconic hill country aboard scenic train journeys that pass tea plantations, misty mountains, and charming villages.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668685/Scenic_Train_Rides_liog5n.png",
  },
  {
    id: "diving",
    name: "Diving",
    tagline: "Explore a World Beneath the Waves",
    description:
      "Discover vibrant coral reefs, fascinating shipwrecks, and diverse marine life beneath the crystal-clear waters surrounding Sri Lanka.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668453/Diving_kf0tde.png",
  },
  {
    id: "turtle-watching",
    name: "Turtle Watching",
    tagline: "Witness Ancient Marine Giants",
    description:
      "Witness endangered sea turtles nesting along Sri Lanka's beaches or observe rescued turtles at conservation centers dedicated to marine protection.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668698/Turtle_Watching_j1dzqz.png",
  },
  {
    id: "snorkeling",
    name: "Snorkeling",
    tagline: "A Window Into the Coral Kingdom",
    description:
      "Explore colorful coral gardens and tropical marine ecosystems just below the surface in some of Sri Lanka's most beautiful coastal destinations.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668689/Snorkeling_r4kdwv.png",
  },
  {
    id: "city-tour",
    name: "Walking City Tour",
    tagline: "Discover the Soul of Sri Lankan Cities",
    description:
      "Experience the culture, history, and local lifestyle of Sri Lanka's cities through guided walks featuring iconic landmarks, markets, and hidden gems.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668845/Walking_City_Tour_qjfku8.png",
  },
  {
    id: "safari",
    name: "Wildlife Safari",
    tagline: "Face to Face with Sri Lanka's Wild Kingdom",
    description:
      "Embark on exciting wildlife safaris to spot leopards, elephants, sloth bears, crocodiles, and exotic bird species in their natural habitats.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668912/Wildlife_Safari_compressed_iuqyhm.jpg",
  },
  {
    id: "cycling",
    name: "Cycling",
    tagline: "Pedal Through Paradise",
    description:
      "Pedal through scenic villages, ancient cities, tea plantations, and coastal routes while experiencing Sri Lanka at a relaxed pace.",
    photo: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783668448/Cycling_zyiunf.png",
  },
];
