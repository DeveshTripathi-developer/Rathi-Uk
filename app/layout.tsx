import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anand Rathi Wealth UK | Private Wealth. Uncomplicated.',
  description:
    'FCA-regulated private wealth management firm in the City of London providing disciplined, data-led wealth stewardship for high-net-worth families.',
  openGraph: {
    title: 'Anand Rathi Wealth UK | Private Wealth. Uncomplicated.',
    description:
      'Authorised and regulated by the Financial Conduct Authority (FCA Ref: 1033886). City of London private wealth management for HNW families.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Rathi Wealth UK | Private Wealth. Uncomplicated.',
    description:
      'Authorised and regulated by the Financial Conduct Authority (FCA Ref: 1033886). City of London private wealth management.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': 'https://www.anandrathiwealth.co.uk/#organization',
      name: 'Anand Rathi Wealth UK Limited',
      legalName: 'Anand Rathi Wealth UK Limited',
      url: 'https://www.anandrathiwealth.co.uk',
      logo: 'https://www.anandrathiwealth.co.uk/logo.png',
      description:
        'FCA-regulated private wealth management firm in the City of London offering discretionary wealth planning, risk management, and multi-generational stewardship.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Octagon Point, 5 Cheapside',
        addressLocality: 'City of London',
        postalCode: 'EC2V 6AA',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5138,
        longitude: -0.0934,
      },
      telephone: '+44 20 7946 0920',
      priceRange: '££££',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '18:00',
        },
      ],
      knowsAbout: [
        'Private Wealth Management',
        'Cross-Border Wealth Planning',
        'Inheritance Tax & Estate Planning',
        'FCA-Regulated Advisory',
        'Portfolio Risk Management',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.anandrathiwealth.co.uk/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Anand Rathi Wealth UK regulated by the FCA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority in the United Kingdom under FCA Reference Number 1033886.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum investment portfolio threshold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our institutional advisory is tailored for high-net-worth families, entrepreneurs, and senior executives with typical investable assets starting from £250,000 up to £10M+.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is your London office located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our UK headquarters is located at Octagon Point, 5 Cheapside, City of London, EC2V 6AA, adjacent to St Paul’s Cathedral.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased text-[#AF7535] bg-[#FFFFFF] min-h-screen selection:bg-[#EAD397] selection:text-[#AF7535]">
        {children}
      </body>
    </html>
  );
}
