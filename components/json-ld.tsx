import { getTranslations } from 'next-intl/server';

type Props = {
  locale: string;
};

export async function JsonLd({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = 'https://felixdomingos.vercel.app';
  const currentUrl = locale === 'pt' ? baseUrl : `${baseUrl}/${locale}`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Félix Sanjala Domingos',
    givenName: 'Félix',
    familyName: 'Domingos',
    alternateName: 'Félix Domingos',
    jobTitle: 'Co-Founder, CTO, Fullstack Developer',
    description: t('description'),
    url: baseUrl,
    sameAs: [
      'https://github.com/felixdomingos1',
      'https://linkedin.com/in/felixdomingos',
      'https://wa.me/244926195572',
      'https://t.me/felixdomingos',
    ],
    email: 'felixsdomingos93@gmail.com',
    telephone: '+244926195572',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Benfica, Luanda',
      addressCountry: 'AO',
    },
    knowsAbout: [
      'React', 'Next.js', 'TypeScript', 'Node.js', 'Golang', 'C#/.NET',
      'React Native', 'PostgreSQL', 'MongoDB', 'Prisma',
      'Microservices', 'Cloud Architecture', 'UI/UX Design',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Felix Domingos | Software Developer',
    url: baseUrl,
    description: t('description'),
    inLanguage: ['pt', 'en', 'fr'],
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: currentUrl },
      { '@type': 'ListItem', position: 2, name: t('title'), item: currentUrl },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema, breadcrumbSchema]),
      }}
    />
  );
}
