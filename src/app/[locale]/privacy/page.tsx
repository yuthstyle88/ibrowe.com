import { Metadata } from 'next'
import PrivacyContent from '@/components/privacy/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'The iBrowe browser is a fast, private and secure web browser for PC, Mac and mobile. Download now to enjoy a faster ad-free browsing experience that saves data and battery life by blocking tracking software',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <PrivacyContent />
    </main>
  )
} 