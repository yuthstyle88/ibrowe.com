import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';

export default async function RootNotFound() {
  const locale = await getLocale();
  redirect(`/${locale}/not-found`);
} 