import '../app/globals.css';

export const metadata = {
  title: 'iBrowe | Privacy-First Browser',
  description: 'A privacy-focused browser that puts you first',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 