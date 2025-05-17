import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function Download() {
  return (
    <main>
      <Navigation />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              ดาวน์โหลด iBrowe สำหรับทุกแพลตฟอร์ม
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              เลือกดาวน์โหลด iBrowe สำหรับอุปกรณ์ของคุณ เพื่อประสบการณ์การท่องเว็บที่เร็วขึ้น ปลอดภัยขึ้น และเป็นส่วนตัวมากขึ้น
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Windows */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/windows.png"
                alt="Windows"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Windows</h3>
              <p className="text-gray-600 mb-4">สำหรับ Windows 10 และใหม่กว่า</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                ดาวน์โหลด
              </button>
            </div>

            {/* macOS */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/mac-os-logo.png"
                alt="macOS"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">macOS</h3>
              <p className="text-gray-600 mb-4">สำหรับ macOS 10.15 และใหม่กว่า</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                ดาวน์โหลด
              </button>
            </div>

            {/* Linux */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/linux.png"
                alt="Linux"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Linux</h3>
              <p className="text-gray-600 mb-4">สำหรับ Ubuntu และ Debian</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                ดาวน์โหลด
              </button>
            </div>

            {/* Mobile */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/iphone-web.png"
                alt="Mobile"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Mobile</h3>
              <p className="text-gray-600 mb-4">สำหรับ iOS และ Android</p>
              <div className="space-y-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">
                  App Store
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-full">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 