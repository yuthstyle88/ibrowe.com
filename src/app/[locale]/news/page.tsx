'use client';

import NewsHero from '../../../components/NewsHero';
import NewsFeatures from '../../../components/NewsFeatures';
import NewsFaq from '../../../components/NewsFaq';

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <NewsHero />
      <NewsFeatures />
      <NewsFaq />
    </main>
  );
} 