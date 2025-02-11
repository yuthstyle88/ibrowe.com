import { ReactNode } from 'react';

interface WalletLayoutProps {
  children: ReactNode;
}

export default function WalletLayout({ children }: WalletLayoutProps) {
  return (
    <div>
      <section className="">
        {children}
      </section>
    </div>
  );
}

export const metadata = {
    title: "iBrowe Wallet - Secure Crypto Wallet",
  };
  