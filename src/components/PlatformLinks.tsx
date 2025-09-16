import Link from "next/link";
import { FaApple, FaAndroid, FaWindows, FaLinux, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

type PlatformLinks = {
    windows: string;
    macos: string;
    macosIntel?: string;
    linux: string;
    appStore: string;
    playStore: string;
};

export const PLATFORM_LINKS: PlatformLinks = {
    windows: 'https://ibrowe.com/download/iBroweBrowserSetup.exe',
    macos: 'https://ibrowe.com/ibrowe_dmg/iBroweBrowser-140.1.82.161.dmg',
    macosIntel: 'https://ibrowe.com/ibrowe_dmg/iBroweBrowser-intel-140.1.82.161.dmg',
    linux: '/linux',
    appStore: 'https://apps.apple.com/us/app/ibrowe/id6741485553',
    playStore: 'https://play.google.com/store/apps/details?id=com.ibrowe108.browser'
};

interface PlatformLinksProps {
    className?: string;
}

export default function PlatformLinks({ className = "" }: PlatformLinksProps) {
    const [isMacDropdownOpen, setIsMacDropdownOpen] = useState(false);

    return (
        <div className={`flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center sm:justify-start mt-4 mb-8 ${className}`}>
            <Link
                href={PLATFORM_LINKS.playStore}
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
                aria-label="Download for Android"
            >
                <FaAndroid className="text-2xl" />
                Android
            </Link>
            <Link
                href={PLATFORM_LINKS.appStore}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
                aria-label="Download for iOS"
            >
                <FaApple className="text-2xl" />
                iOS
            </Link>
            <Link
                href={PLATFORM_LINKS.windows}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
                aria-label="Download for Windows"
            >
                <FaWindows className="text-2xl" />
                Windows
            </Link>
            <div className="relative w-full sm:w-auto">
                <button
                    onClick={() => setIsMacDropdownOpen(!isMacDropdownOpen)}
                    className="flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full justify-center"
                    aria-label="macOS download options"
                    aria-expanded={isMacDropdownOpen}
                >
                    <FaApple className="text-2xl" />
                    macOS
                    <FaChevronDown className={`text-base transition-transform duration-200 ${isMacDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMacDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full sm:w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-10">
                        <Link
                            href={PLATFORM_LINKS.macos}
                            className="block px-4 py-3 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                            onClick={() => setIsMacDropdownOpen(false)}
                            aria-label="Download for macOS (Apple Silicon)"
                        >
                            Apple Silicon
                        </Link>
                        <Link
                            href={PLATFORM_LINKS.macosIntel || '#'}
                            className="block px-4 py-3 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                            onClick={() => setIsMacDropdownOpen(false)}
                            aria-label="Download for macOS (Intel)"
                        >
                            Intel
                        </Link>
                    </div>
                )}
            </div>
            <Link
                href={PLATFORM_LINKS.linux}
                className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
                aria-label="Download for Linux"
            >
                <FaLinux className="text-2xl" />
                Linux
            </Link>
        </div>
    );
}