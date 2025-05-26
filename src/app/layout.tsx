import '../app/globals.css';

export const metadata = {
  title: 'iBrowe - Privacy-First Browser',
  description: 'A privacy-focused browser that puts you first',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
} 