import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0];

  if (subdomain === 'support') {
    redirect('/support/en');
  }

  redirect('/en');
} 