import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const features = [
  'nativeBrowser',
  'nftReady',
  'crossPlatform',
  'hardwareSupport',
  'solanaSupport',
  'ethereumSupport',
  'filecoinSupport',
  'solanaDex',
  'ethereumDex',
  'openSource',
  'marketInsights'
] as const;

const wallets = [
  { name: 'iBrowe', logo: '/images/Asset-37.png' },
  { name: 'Coinbase', logo: '/images/coinbase-logo.svg' },
  { name: 'MetaMask', logo: '/images/metamask-logo.svg' },
  { name: 'Opera', logo: '/images/opera-logo.svg' },
  { name: 'Phantom', logo: '/images/phantom-logo.svg' }
] as const;

const featureAvailability = {
  iBrowe: {
    nativeBrowser: true,
    nftReady: true,
    crossPlatform: true,
    hardwareSupport: true,
    solanaSupport: true,
    ethereumSupport: true,
    filecoinSupport: true,
    solanaDex: true,
    ethereumDex: true,
    openSource: true,
    marketInsights: true
  },
  Coinbase: {
    nativeBrowser: false,
    nftReady: true,
    crossPlatform: true,
    hardwareSupport: true,
    solanaSupport: false,
    ethereumSupport: true,
    filecoinSupport: false,
    solanaDex: false,
    ethereumDex: true,
    openSource: false,
    marketInsights: true
  },
  MetaMask: {
    nativeBrowser: false,
    nftReady: true,
    crossPlatform: true,
    hardwareSupport: true,
    solanaSupport: false,
    ethereumSupport: true,
    filecoinSupport: false,
    solanaDex: false,
    ethereumDex: true,
    openSource: true,
    marketInsights: false
  },
  Opera: {
    nativeBrowser: true,
    nftReady: true,
    crossPlatform: true,
    hardwareSupport: false,
    solanaSupport: false,
    ethereumSupport: true,
    filecoinSupport: false,
    solanaDex: false,
    ethereumDex: true,
    openSource: false,
    marketInsights: false
  },
  Phantom: {
    nativeBrowser: false,
    nftReady: true,
    crossPlatform: true,
    hardwareSupport: false,
    solanaSupport: true,
    ethereumSupport: false,
    filecoinSupport: false,
    solanaDex: true,
    ethereumDex: false,
    openSource: true,
    marketInsights: false
  }
} as const;

export default function WalletComparison() {
  const t = useTranslations('wallet.comparison.features');

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header Row */}
        <div className="grid grid-cols-[3fr_repeat(5,1fr)] gap-4 items-center border-b border-gray-700 pb-4 mb-4">
          <div className="text-lg font-bold text-white text-center">Feature</div>
          {wallets.map((wallet) => (
            <div key={wallet.name} className="flex flex-col items-center gap-2 text-white">
              <Image
                src={wallet.logo}
                alt={`${wallet.name} logo`}
                width={110}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <div className="text-sm font-semibold text-white">{wallet.name}</div>
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature} className="grid grid-cols-[3fr_repeat(5,1fr)] gap-4 items-center">
              <div className="text-base pr-4 text-white">{t(feature)}</div>
              {wallets.map((wallet) => (
                <div key={wallet.name} className="flex justify-center text-white">
                  <Image
                    src={featureAvailability[wallet.name][feature] ? '/images/check.png' : '/images/uncheck-square.png'}
                    alt={featureAvailability[wallet.name][feature] ? 'Available' : 'Not available'}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 