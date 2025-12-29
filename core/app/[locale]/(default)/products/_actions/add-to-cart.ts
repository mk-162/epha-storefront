'use server';

import { revalidateTag } from 'next/cache';
import { TAGS } from '~/client/tags';
import { addToOrCreateCart } from '~/lib/cart';

export async function addProductToCart(
  productEntityId: number,
  variantEntityId: number,
  quantity: number = 1
) {
  try {
    await addToOrCreateCart({
      lineItems: [
        {
          productEntityId,
          variantEntityId,
          quantity,
        },
      ],
    });

    revalidateTag(TAGS.cart);

    return { success: true };
  } catch (error) {
    console.error('Failed to add to cart:', error);
    return { success: false, error: 'Failed to add item to cart' };
  }
}
