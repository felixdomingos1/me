import { Inter, Roboto_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { JsonLd } from '@/components/json-ld';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

const baseUrl = 'https://felixdomingos.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const url = locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
  const locales = [...routing.locales];

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [
          l,
          l === routing.defaultLocale ? baseUrl : `${baseUrl}/${l}`,
        ]),
      ),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      siteName: 'Félix Domingos',
      locale: locale === 'pt' ? 'pt_AO' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/img/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Félix Domingos - Software Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/img/og-image.png'],
      creator: '@felixdomingos1',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'google-site-verification': process.env.GOOGLE_VERIFICATION || '',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'pt' | 'en' | 'fr')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <JsonLd locale={locale} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
