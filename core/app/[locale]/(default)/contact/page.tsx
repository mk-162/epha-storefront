import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { ContactForm } from './_components/contact-form';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
  return {
    title: 'Contact Us | EPHA Hose Protectors',
    description:
      'Get in touch with EPHA Hose Protectors. Contact us for product inquiries, bulk orders, distribution partnerships, or technical support.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ContactForm />;
}
