import { setRequestLocale } from 'next-intl/server';

import { Hero, ValueProps, Comparison, FeaturedProducts, Industries } from '~/components/epha';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedProducts />
      <Comparison />
      <Industries />
    </>
  );
}
