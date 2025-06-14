import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | iBrowe Browser',
    default: 'iBrowe Browser - Fast, Private & Secure',
  },
  description: 'A privacy-focused browser that puts you first',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 