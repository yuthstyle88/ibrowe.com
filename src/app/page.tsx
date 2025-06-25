import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  const isProd = process.env.NODE_ENV === 'production';
  const locale = routing.defaultLocale;

  const target = isProd ? '/' : `/${locale}`;
  redirect(target);
}
