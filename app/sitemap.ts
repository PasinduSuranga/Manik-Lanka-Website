import { MetadataRoute } from 'next';
import { packagesData } from '@/app/data/packages';
import { experienceCategories } from '@/app/data/experiences';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maniklankaholidays.com';

  /* ════════════════════════════════════════════════════════════
     STATIC CORE PAGES
     Priority scale:
       1.0  → Homepage (entry point)
       0.95 → High-conversion pages (Inquiry, Contact)
       0.90 → Core discovery pages (Packages, Experiences, Gallery)
       0.80 → Supporting content pages (Travel Guide, Blogs, About)
       0.65 → Informational / utility pages (Help)
  ════════════════════════════════════════════════════════════ */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/inquiry`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/travelguide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${baseUrl}/travelguide/things-to-do`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/travelguide/food-beverages`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.72,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
  ];

  /* ════════════════════════════════════════════════════════════
     DYNAMIC — INDIVIDUAL TOUR PACKAGE PAGES (/packages/[id])
     11 packages total — high priority as these are the main
     product pages and primary conversion destinations.
  ════════════════════════════════════════════════════════════ */
  const packagePages: MetadataRoute.Sitemap = packagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  }));

  /* ════════════════════════════════════════════════════════════
     DYNAMIC — EXPERIENCE CATEGORY & ITEM DEEP-LINKS
     The Experiences page is a SPA that navigates between:
       /experiences                     → category listing
       /experiences#<category-slug>     → destination listing
       /experiences#<item-slug>         → destination detail
     We include anchored URLs so search engines can crawl and
     index the rich destination content for long-tail SEO.
  ════════════════════════════════════════════════════════════ */
  const experienceCategoryPages: MetadataRoute.Sitemap = experienceCategories.map((cat) => ({
    url: `${baseUrl}/experiences#${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const experienceItemPages: MetadataRoute.Sitemap = experienceCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      url: `${baseUrl}/experiences#${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  );

  /* ════════════════════════════════════════════════════════════
     COMBINE — ordered by priority (highest first)
  ════════════════════════════════════════════════════════════ */
  return [
    ...staticPages,
    ...packagePages,
    ...experienceCategoryPages,
    ...experienceItemPages,
  ];
}