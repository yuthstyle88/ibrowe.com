import Link from "next/link";

interface PlatformLinksProps {
  className?: string;
}

export default function PlatformLinks({ className = "" }: PlatformLinksProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 md:flex items-center justify-start mt-[35px] text-[12px] ${className}`}>
      <Link
        href="https://apps.apple.com/us/app/ibrowe/id6741485553"
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        iOS
      </Link>
      <Link
        href="https://ibrowe.com/ibrowe_dmg/iBroweBrowser-135.1.0.2.dmg"
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        MacOS
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.ibrowe108.browser"
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        Android
      </Link>
      <Link
        href="#"
        className="bg-[#22a1d3] rounded-[45px] mr-[15px] py-[10px] px-[35px] text-sm text-white"
      >
        windows
      </Link>
    </div>
  );
} 