import { setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { isLoggedIn } from '~/auth';
import { getHeaderCartData, removeCartItem, updateCartItemQuantity } from '~/components/cart';
import { Footer, Navigation } from '~/components/epha';

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
        cartItems={cartData.items}
        cartSubtotal={cartData.subtotal}
        isLoggedIn={userLoggedIn}
        removeItemAction={removeCartItem}
        updateQuantityAction={updateCartItemQuantity}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
