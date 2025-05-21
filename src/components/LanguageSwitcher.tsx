"use client";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'th', label: 'TH' },
  { code: 'vi', label: 'VI' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const restPath = pathname.split('/').slice(2).join('/') || '';

  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}${restPath ? '/' + restPath : ''}`);
  };

  return (
    <div className="flex gap-2 justify-center my-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLocaleChange(lang.code)}
          className={`px-3 py-1 rounded border text-sm font-medium transition-colors ${
            currentLocale === lang.code
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
} 