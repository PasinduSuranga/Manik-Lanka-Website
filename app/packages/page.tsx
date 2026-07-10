import { Suspense } from "react";
import PackagesClient from "./PackagesClient";

export const metadata = {
  title: 'Sri Lanka Tour Packages & Custom Holidays | Manik Lanka Holidays',
  description: 'Explore our carefully crafted tour packages designed to showcase the best of Sri Lanka. Discover wild safaris, hill country retreats, and pristine beaches.',
};

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFCFA]" />}>
      <PackagesClient />
    </Suspense>
  );
}