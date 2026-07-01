import { routing } from '@/i18n/routing';
import ptMessages from '@/messages/pt.json';

const baseUrl = 'https://felixdomingos.vercel.app';

export default async function sitemap() {
  const entries = [];

  for (const locale of [...routing.locales]) {
    const url = locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;

    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [
            l,
            l === routing.defaultLocale ? baseUrl : `${baseUrl}/${l}`,
          ]),
        ),
      },
    });
  }

  const projectEntries = ptMessages.projects.items.map((project) => ({
    url: `${baseUrl}/#project-${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const companyEntries = ptMessages.companies.items.map((company) => ({
    url: `${baseUrl}/#company-${company.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...entries, ...projectEntries, ...companyEntries];
}
