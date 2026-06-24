export interface Blog {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  content: string[];
  images?: string[];
  videoUrl?: string;
}

export const blogsData: Blog[] = [
  {
    id: "blog-1",
    title: "Exploring the Ancient Wonders of Sigiriya",
    date: "October 12, 2026",
    author: "Manik Lanka Team",
    category: "Heritage",
    coverImage: "/images/sigiriya.jpg",
    content: [
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres high.",
      "According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa for his new capital. He built his palace on the top of this rock and decorated its sides with colourful frescoes.",
      "Today, Sigiriya is a UNESCO World Heritage Site and one of the best-preserved examples of ancient urban planning. Visitors from all over the world come to marvel at the Water Gardens, the Mirror Wall, and the Lion's Paws."
    ],
    images: [
      "/images/sigiriya.jpg",
      "/images/beachImage.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/d3P-pB83P6M"
  },
  {
    id: "blog-2",
    title: "A Serene Escape to the Southern Beaches",
    date: "September 24, 2026",
    author: "Travel Guide",
    category: "Nature & Beaches",
    coverImage: "/images/beachImage.jpg",
    content: [
      "The southern coast of Sri Lanka is home to some of the most beautiful and pristine beaches in the world. From the lively shores of Mirissa to the tranquil sands of Tangalle, there is a beach for every type of traveler.",
      "If you are an adventure seeker, the waves at Weligama are perfect for surfing. For those looking to relax, grabbing a king coconut and lying under the palm trees is an experience you won't forget."
    ]
  },
  {
    id: "blog-3",
    title: "The Ultimate Guide to Sri Lankan Cuisine",
    date: "August 05, 2026",
    author: "Food Explorer",
    category: "Culture & Food",
    coverImage: "/images/contactus.png",
    content: [
      "Sri Lankan cuisine is a vibrant tapestry of flavors, heavily influenced by its rich history as a spice island. Rice and curry is the staple, but it's much more complex than it sounds.",
      "A typical meal involves a mountain of rice surrounded by various curries—dhal (lentils), fish or chicken, and vegetable curries made with rich coconut milk and aromatic spices like cardamom, cinnamon, and curry leaves.",
      "Don't miss out on trying Kottu Roti, a popular street food made with chopped flatbread, vegetables, egg, and meat, mixed together on a hot griddle with a rhythmic clinking sound."
    ],
    images: [
      "/images/contactus.png"
    ]
  }
];
