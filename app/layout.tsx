import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { defaultKeywords, orgSchema, siteUrl } from '@/lib/seo';
import { school } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${school.name} | Best School in ${school.city}`,
    template: `%s | ${school.name}`
  },
  description:
    `${school.name} offers holistic education, modern facilities, and admissions for K-12 students in ${school.city}.`,
  keywords: defaultKeywords,
  alternates: { canonical: '/' },
  openGraph: {
    title: school.name,
    description: school.tagline,
    type: 'website',
    locale: 'en_US',
    url: '/'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema()) }}
        />
      </body>
    </html>
  );
}
