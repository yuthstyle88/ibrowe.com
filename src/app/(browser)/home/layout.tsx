import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>

      <main className="blog-container">{children}</main>
      <Footer/>
    </div>
  );
}

export const metadata = {
  title: "iBrowe The browser that cares about you the most",
};
