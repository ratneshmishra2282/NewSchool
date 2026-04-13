import { school } from './content';

export const siteUrl = 'https://www.greenfieldschool.edu';

export const defaultKeywords = [
  `Best School in ${school.city}`,
  `${school.city} admissions`,
  'K-12 education',
  'CBSE curriculum',
  'student development'
];

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: school.name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: school.address,
      addressLocality: school.city,
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: school.phone,
      contactType: 'Admissions'
    },
    sameAs: Object.values(school.socialLinks)
  };
}
