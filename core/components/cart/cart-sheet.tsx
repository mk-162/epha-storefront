'use client';

import { Minus, Plus, ShoppingBag, ShoppingCart, X } from 'lucide-react';
import { useRouter } from '~/i18n/routing';
import { startTransition, useOptimistic, useState } from 'react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

export interface CartSheetItem {
  id: string;
  productEntityId: number;
  variantEntityId?: number;
  name: string;
  image?: { src: string; alt: string };
  quantity: number;
  price: string;
  priceValue: number;
  subtitle?: string;
  href?: string;
}

interface CartSheetProps {
  items: CartSheetItem[];
  itemCount: number;
  subtotal: string;
  checkoutUrl?: string;
  currencyCode?: string;
  updateQuantityAction?: (
    id: string,
    productEntityId: number,
    quantity: number,
    variantEntityId?: number,
  ) => Promise<void>;
  removeItemAction?: (id: string) => Promise<void>;
  children?: React.ReactNode;
}

export function CartSheet({
  items,
  itemCount,
  subtotal,
  checkoutUrl = '/checkout',
  updateQuantityAction,
  removeItemAction,
  children,
}: CartSheetProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [optimisticItems, setOptimisticItems] = useOptimistic<
    CartSheetItem[],
    { type: 'update' | 'remove'; id: string; quantity?: number }
  >(items, (state, action) => {
    if (action.type === 'remove') {
      return state.filter((item) => item.id !== action.id);
    }

    if (action.type === 'update' && action.quantity !== undefined) {
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity! } : item,
      );
    }

    return state;
  });

  const optimisticCount = optimisticItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleUpdateQuantity = (item: CartSheetItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    startTransition(() => {
      setOptimisticItems({ type: 'update', id: item.id, quantity: newQuantity });

      if (updateQuantityAction) {
        void updateQuantityAction(
          item.id,
          item.productEntityId,
          newQuantity,
          item.variantEntityId,
        ).then(() => router.refresh());
      }
    });
  };

  const handleRemoveItem = (id: string) => {
    startTransition(() => {
      setOptimisticItems({ type: 'remove', id });

      if (removeItemAction) {
        void removeItemAction(id).then(() => router.refresh());
      }
    });
  };

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        {children || (
          <button className="group relative cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10">
            <ShoppingCart className="h-6 w-6 text-white transition-colors group-hover:text-accent" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-accent text-[10px] font-bold text-white">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </button>
        )}
      </SheetTrigger>
      <SheetContent
        className="flex w-full flex-col border-l border-slate-200 bg-white sm:max-w-md"
        side="right"
      >
        <SheetHeader className="border-b border-slate-200 pb-4">
          <SheetTitle className="flex items-center gap-2 font-heading text-xl uppercase text-primary">
            <ShoppingCart className="h-5 w-5 text-accent" />
            Your Cart
            <span className="text-sm font-normal normal-case text-slate-500">
              ({optimisticCount} {optimisticCount === 1 ? 'item' : 'items'})
            </span>
          </SheetTitle>
        </SheetHeader>

        {optimisticItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-slate-100 p-6">
              <ShoppingBag className="h-12 w-12 text-slate-400" />
            </div>
            <div>
              <h3 className="font-heading text-lg uppercase text-primary">Your cart is empty</h3>
              <p className="text-sm text-slate-500">
                Looks like you haven&apos;t added anything yet.
              </p>
            </div>
            <SheetClose asChild>
              <Button
                asChild
                className="bg-accent font-heading uppercase text-white hover:bg-accent/90"
              >
                <Link href="/products">Shop Products</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {optimisticItems.map((item) => (
                  <div
                    className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-3"
                    key={item.id}
                  >
                    {/* Image */}
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-white">
                      {item.image ? (
                        <Image
                          alt={item.image.alt}
                          className="object-contain p-1"
                          fill
                          src={item.image.src}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <ShoppingBag className="h-8 w-8 text-slate-300" />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <Link
                          className="line-clamp-2 text-sm font-medium text-primary hover:text-accent"
                          href={item.href || '#'}
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          aria-label="Remove item"
                          className="-mr-1 -mt-1 p-1 text-slate-400 transition-colors hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      {item.subtitle && (
                        <p className="mt-0.5 text-xs text-slate-500">{item.subtitle}</p>
                      )}

                      <div className="mt-auto flex items-center justify-between pt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1">
                          <button
                            className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 bg-white transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={item.quantity <= 1}
                            onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 bg-white transition-colors hover:bg-slate-50"
                            onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="space-y-4 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-heading text-xl text-primary">{subtotal}</span>
              </div>
              <p className="text-center text-xs text-slate-500">
                Shipping & tax calculated at checkout
              </p>
              <div className="grid gap-2">
                <Button
                  asChild
                  className="h-12 w-full bg-accent font-heading uppercase text-white hover:bg-accent/90"
                >
                  <Link href={checkoutUrl} onClick={() => setOpen(false)}>
                    Checkout
                  </Link>
                </Button>
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full border-slate-300 hover:bg-slate-50"
                    variant="outline"
                  >
                    <Link href="/cart" onClick={() => setOpen(false)}>
                      View Full Cart
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
