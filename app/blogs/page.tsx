import BlogsClient from './BlogsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Blogs | Manik Lanka Holidays',
  description: 'Read our latest travel stories, tips, and guides from Sri Lanka.',
};

export default function BlogsPage() {
  return <BlogsClient />;
}
