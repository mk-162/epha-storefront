import { setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Navigation, Footer } from '~/components/epha';
import { isLoggedIn } from '~/auth';
import { getHeaderCartData, updateCartItemQuantity, removeCartItem } from '~/components/cart';

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

export default async function DefaultLayout({ params, children }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  // Fetch cart data for the sliding cart sheet
  const cartData = await getHeaderCartData();

  // Check if user is logged in
  const userLoggedIn = await isLoggedIn();

  return (
    <>
      <Navigation
        cartCount={cartData.itemCount}
        isLoggedIn={userLoggedIn}
        cartItems={cartData.items}
        cartSubtotal={cartData.subtotal}
        updateQuantityAction={updateCartItemQuantity}
        removeItemAction={removeCartItem}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
