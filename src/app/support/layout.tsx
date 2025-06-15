import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | iBrowe Browser',
  description: 'Get help and support for iBrowe Browser',
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 