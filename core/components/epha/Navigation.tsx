'use client';

import { LogOut, Menu, ShoppingCart, User } from 'lucide-react';
import * as React from 'react';

import { CartSheet, type CartSheetItem } from '~/components/cart/cart-sheet';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { cn } from '~/lib/utils';

const ListItem = React.forwardRef<
  React.ComponentRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
            className,
          )}
          href={href || '#'}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

interface NavigationProps {
  cartCount?: number | null;
  isLoggedIn?: boolean;
  cartItems?: CartSheetItem[];
  cartSubtotal?: string;
  updateQuantityAction?: (
    id: string,
    productEntityId: number,
    quantity: number,
    variantEntityId?: number,
  ) => Promise<void>;
  removeItemAction?: (id: string) => Promise<void>;
}

export function Navigation({
  cartCount = 0,
  isLoggedIn = false,
  cartItems = [],
  cartSubtotal = '$0.00',
  updateQuantityAction,
  removeItemAction,
}: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link
          className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-90"
          href="/"
        >
          <Image
            alt="EPHA Logo"
            className="h-16 w-auto object-contain"
            height={64}
            priority
            src="/images/EPHA Logo.svg"
            width={200}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            className="cursor-pointer text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="cursor-pointer text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            href="/case-study"
          >
            Case Studies
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto rounded-md bg-transparent px-3 py-2 text-sm font-medium uppercase tracking-wider text-white hover:bg-white/10 hover:text-accent focus:bg-white/10 focus:text-accent data-[state=open]:bg-white/10 data-[state=open]:text-accent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 bg-white p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-800 p-6 no-underline outline-none focus:shadow-md"
                          href="/industries"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Industries
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our protection solutions across all sectors.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/industries/fleet" title="Fleet & Transportation">
                      Keep your fleet moving with hydraulic and fuel line protection.
                    </ListItem>
                    <ListItem href="/industries/construction" title="Construction">
                      Proven durability for excavators, loaders, and heavy equipment.
                    </ListItem>
                    <ListItem href="/industries/manufacturing" title="Manufacturing & Industrial">
                      Zero unplanned stops, maximum production uptime.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            className="cursor-pointer text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="cursor-pointer text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            href="/about"
          >
            About
          </Link>
          <Link
            className="cursor-pointer text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-4 text-sm font-medium">
            {isLoggedIn ? (
              <>
                <Link
                  className="flex cursor-pointer items-center gap-2 opacity-80 transition-colors hover:text-accent hover:opacity-100"
                  href="/account/orders"
                >
                  <User className="h-4 w-4" />
                  <span>My Account</span>
                </Link>
                <span className="text-white/30">|</span>
                <Link
                  className="flex cursor-pointer items-center gap-2 opacity-80 transition-colors hover:text-accent hover:opacity-100"
                  href="/logout"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="flex cursor-pointer items-center gap-2 opacity-80 transition-colors hover:text-accent hover:opacity-100"
                  href="/login"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <span className="text-white/30">|</span>
                <Link
                  className="cursor-pointer opacity-80 transition-colors hover:text-accent hover:opacity-100"
                  href="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <CartSheet
            itemCount={cartCount ?? 0}
            items={cartItems}
            removeItemAction={removeItemAction}
            subtotal={cartSubtotal}
            updateQuantityAction={updateQuantityAction}
          />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Cart */}
          <CartSheet
            itemCount={cartCount ?? 0}
            items={cartItems}
            removeItemAction={removeItemAction}
            subtotal={cartSubtotal}
            updateQuantityAction={updateQuantityAction}
          >
            <button className="group relative cursor-pointer rounded-full p-1 transition-colors hover:bg-white/10">
              <ShoppingCart className="h-5 w-5 text-white transition-colors group-hover:text-accent" />
              {(cartCount ?? 0) > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-accent text-[10px] font-bold text-white">
                  {cartCount && cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
          </CartSheet>

          <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger asChild>
              <Button className="text-white hover:bg-white/10" size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-[300px] border-l-white/10 bg-gradient-to-b from-primary to-[#1A1D29] p-0 text-white"
              side="right"
            >
              {/* Mobile Header */}
              <div className="border-b border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    {isLoggedIn ? (
                      <>
                        <p className="text-xs uppercase tracking-wider text-white/50">My Account</p>
                        <div className="mt-1 flex items-center gap-3">
                          <Link
                            className="font-heading text-base uppercase text-accent hover:underline"
                            href="/account/orders"
                            onClick={() => setIsOpen(false)}
                          >
                            Orders
                          </Link>
                          <span className="text-white/20">|</span>
                          <Link
                            className="font-heading text-base uppercase text-white transition-colors hover:text-accent"
                            href="/logout"
                            onClick={() => setIsOpen(false)}
                          >
                            Logout
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-xs uppercase tracking-wider text-white/50">Welcome</p>
                        <div className="mt-1 flex items-center gap-3">
                          <Link
                            className="font-heading text-base uppercase text-accent hover:underline"
                            href="/login"
                            onClick={() => setIsOpen(false)}
                          >
                            Login
                          </Link>
                          <span className="text-white/20">|</span>
                          <Link
                            className="font-heading text-base uppercase text-white transition-colors hover:text-accent"
                            href="/register"
                            onClick={() => setIsOpen(false)}
                          >
                            Register
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col py-4">
                <SheetClose asChild>
                  <Link
                    className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide transition-colors hover:border-accent hover:bg-white/5"
                    href="/products"
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide transition-colors hover:border-accent hover:bg-white/5"
                    href="/case-study"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>
                </SheetClose>

                <Accordion className="w-full" collapsible type="single">
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide hover:bg-white/5 hover:no-underline data-[state=open]:border-accent data-[state=open]:bg-white/5">
                      Industries
                    </AccordionTrigger>
                    <AccordionContent className="bg-black/20 pb-0">
                      <SheetClose asChild>
                        <Link
                          className="block px-8 py-3 text-base text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          href="/industries"
                          onClick={() => setIsOpen(false)}
                        >
                          All Industries
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          className="block px-8 py-3 text-base text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          href="/industries/fleet"
                          onClick={() => setIsOpen(false)}
                        >
                          Fleet & Transportation
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          className="block px-8 py-3 text-base text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          href="/industries/construction"
                          onClick={() => setIsOpen(false)}
                        >
                          Construction
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          className="block px-8 py-3 text-base text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          href="/industries/manufacturing"
                          onClick={() => setIsOpen(false)}
                        >
                          Manufacturing & Industrial
                        </Link>
                      </SheetClose>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <SheetClose asChild>
                  <Link
                    className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide transition-colors hover:border-accent hover:bg-white/5"
                    href="/knowledge-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Knowledge Base
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide transition-colors hover:border-accent hover:bg-white/5"
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide transition-colors hover:border-accent hover:bg-white/5"
                    href="/about"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="border-l-4 border-transparent px-6 py-4 font-heading text-xl uppercase tracking-wide transition-colors hover:border-accent hover:bg-white/5"
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>

              {/* Mobile Footer */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 p-6">
                <SheetClose asChild>
                  <Link
                    className="block w-full rounded-lg bg-accent py-3 text-center font-heading text-lg uppercase text-white transition-colors hover:bg-accent/90"
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </SheetClose>
                <p className="mt-4 text-center text-xs text-white/40">
                  © 2025 EPHA Hose Protectors
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
