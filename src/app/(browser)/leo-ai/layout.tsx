import { ReactNode } from 'react';

interface LeoAiLayoutProps {
  children: ReactNode;
}

export default function LeoAiLayout({ children }: LeoAiLayoutProps) {
  return (
    <div>
      <header className="product-header">
      </header>

      <section className="product-content">
        {children}
      </section>
    </div>
  );
}

export const metadata = {
    title: "iBrowe Shield - Blocking Ads, Trackers & more",
  };
  