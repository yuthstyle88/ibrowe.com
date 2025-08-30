import Link from "next/link";

export const PLATFORM_LINKS = {
  windows: 'https://ibrowe.com/download/iBroweBrowserSetup.exe',
  macos: 'https://ibrowe.com/ibrowe_dmg/iBroweBrowser-139.1.81.135.dmg',
  linux: '/linux',
  appStore: 'https://apps.apple.com/us/app/ibrowe/id6741485553',
  playStore: 'https://play.google.com/store/apps/details?id=com.ibrowe108.browser'
};

interface PlatformLinksProps {
  className?: string;
}

export default function PlatformLinks({ className = "" }: PlatformLinksProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 md:flex items-center justify-start mt-[35px] text-[12px] ${className}`}>
      <Link
        href={PLATFORM_LINKS.appStore}
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        iOS
      </Link>
      <Link
        href={PLATFORM_LINKS.macos}
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        MacOS
      </Link>
      <Link
        href={PLATFORM_LINKS.playStore}
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        Android
      </Link>
      <Link
        href={PLATFORM_LINKS.windows}
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        windows
      </Link>
    </div>
  );
} 