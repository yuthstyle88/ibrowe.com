import { ReactNode } from 'react';

interface ShieldLayoutProps {
  children: ReactNode;
}

export default function ShieldLayout({ children }: ShieldLayoutProps) {
  return (
    <div>
      <section className="product-content">
        {children}
      </section>
    </div>
  );
}

export const metadata = {
    title: "iBrowe Shield - Blocking Ads, Trackers & more",
  };
  