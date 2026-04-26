import { packagesData } from "@/app/data/packages";
import PackageClient from "./PackageClient";

// 1. Notice how params is now a Promise that we await
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  
  const pkg = packagesData.find((p) => p.id === id);

  if (!pkg) {
    return {
      title: 'Tour Not Found | Manik Lanka Holidays',
      description: 'Explore our amazing Sri Lanka tour packages.'
    };
  }

  return {
    title: pkg.seoTitle, 
    description: pkg.description,
    keywords: pkg.seoKeywords,
  };
}

// 2. The main page function also becomes async to await the params
export default async function PackageDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  
  return <PackageClient id={id} />;
}