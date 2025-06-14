'use client';

import { usePathname } from 'next/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  locale: string;
  messages: any;
}

export default function PageLayout({
  children,
  locale,
  messages,
}: PageLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/th' || pathname === '/vi';

  return (
    <>
      {children}
    </>
  );
} 