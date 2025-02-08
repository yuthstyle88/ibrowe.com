import { ReactNode } from 'react';

interface ShieldLayoutProps {
  children: ReactNode;
}

export default function ShieldLayout({ children }: ShieldLayoutProps) {
  return (
    <div>
      <header className="product-header">
        <nav>
          <a href="#">Sản phẩm</a>
          <a href="#">Giỏ hàng</a>
          <a href="#">Trang chủ</a>
        </nav>
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
  