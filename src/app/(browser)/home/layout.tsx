import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <header className="blog-header">
        <nav>
          <a href="#">Blog</a>
          <a href="#">Về trang chủ</a>
        </nav>
      </header>

      <main className="blog-container">{children}</main>
      <Footer/>
    </div>
  );
}

export const metadata = {
  title: "iBrowe The browser that cares about you the most",
};
