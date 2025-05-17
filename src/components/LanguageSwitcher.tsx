"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'th', label: 'TH' },
  { code: 'vi', label: 'VI' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  // pathname: /en/..., /th/..., /vi/...
  const currentLocale = pathname.split('/')[1];
  const restPath = pathname.split('/').slice(2).join('/') || '';

  return (
    <div className="flex gap-2 justify-center my-4">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}${restPath ? '/' + restPath : ''}`}
          className={`px-3 py-1 rounded border text-sm font-medium transition-colors ${
            currentLocale === lang.code
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50'
          }`}
          prefetch={false}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
} 