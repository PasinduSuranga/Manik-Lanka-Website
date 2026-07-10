import { Suspense } from "react";
import ExperiencesClient from "./ExperiencesClient";

export const metadata = {
  title: "Sri Lanka Experiences | Manik Lanka Holidays",
  description:
    "Discover the richest experiences Sri Lanka has to offer — ancient culture & heritage, thrilling adventures, pristine beaches, spiritual journeys, and extraordinary wildlife encounters.",
};

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFCFA]" />}>
      <ExperiencesClient />
    </Suspense>
  );
}
