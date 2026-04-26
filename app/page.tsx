import HomeClient from "./HomeClient";

// 1. This creates the SEO metadata for Google
export const metadata = {
  title: 'Manik Lanka Holidays | Best Custom Sri Lanka Tours & Safaris',
  description: 'Experience the magic of Sri Lanka with Manik Lanka Holidays. Over 10 years of experience offering custom tours, wildlife adventures, and beach escapes. Book today!',
};

// 2. This loads your Client Component safely
export default function Home() {
  return <HomeClient />;
}