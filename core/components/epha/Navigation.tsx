"use client";

import * as React from "react";
import { Link } from '~/components/link';
import { Image } from '~/components/image';
import { Button } from "~/components/ui/button";
import { Menu, ShoppingCart, User, LogOut } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "~/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { CartSheet, type CartSheetItem } from "~/components/cart/cart-sheet";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface NavigationProps {
  cartCount?: number | null;
  isLoggedIn?: boolean;
  cartItems?: CartSheetItem[];
  cartSubtotal?: string;
  updateQuantityAction?: (id: string, productEntityId: number, quantity: number, variantEntityId?: number) => Promise<void>;
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
          href="/"
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/EPHA Logo.svg"
            alt="EPHA Logo"
            width={200}
            height={64}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/products"
            className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
          >
            Products
          </Link>
          <Link
            href="/case-study"
            className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
          >
            Case Studies
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-accent focus:bg-white/10 focus:text-accent data-[state=open]:bg-white/10 data-[state=open]:text-accent text-sm font-medium uppercase tracking-wider h-auto py-2 px-3 rounded-md">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white">
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
                            Explore our protection solutions across all
                            sectors.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/industries/fleet"
                      title="Fleet & Transportation"
                    >
                      Keep your fleet moving with hydraulic and fuel line
                      protection.
                    </ListItem>
                    <ListItem
                      href="/industries/construction"
                      title="Construction"
                    >
                      Proven durability for excavators, loaders, and heavy
                      equipment.
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
            href="/blog"
            className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium">
            {isLoggedIn ? (
              <>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors cursor-pointer"
                >
                  <User className="h-4 w-4" />
                  <span>My Account</span>
                </Link>
                <span className="text-white/30">|</span>
                <Link
                  href="/logout"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors cursor-pointer"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <span className="text-white/30">|</span>
                <Link
                  href="/register"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition-colors cursor-pointer"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <CartSheet
            items={cartItems}
            itemCount={cartCount ?? 0}
            subtotal={cartSubtotal}
            updateQuantityAction={updateQuantityAction}
            removeItemAction={removeItemAction}
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Cart */}
          <CartSheet
            items={cartItems}
            itemCount={cartCount ?? 0}
            subtotal={cartSubtotal}
            updateQuantityAction={updateQuantityAction}
            removeItemAction={removeItemAction}
          >
            <button className="relative p-1 hover:bg-white/10 rounded-full transition-colors group cursor-pointer">
              <ShoppingCart className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              {(cartCount ?? 0) > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-primary">
                  {cartCount && cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
          </CartSheet>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-b from-primary to-[#1A1D29] text-white border-l-white/10 p-0 w-[300px]"
            >
              {/* Mobile Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    {isLoggedIn ? (
                      <>
                        <p className="text-xs text-white/50 uppercase tracking-wider">My Account</p>
                        <div className="flex items-center gap-3 mt-1">
                          <Link
                            href="/account/orders"
                            className="text-base font-heading uppercase text-accent hover:underline"
                            onClick={() => setIsOpen(false)}
                          >
                            Orders
                          </Link>
                          <span className="text-white/20">|</span>
                          <Link
                            href="/logout"
                            className="text-base font-heading uppercase text-white hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Logout
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-white/50 uppercase tracking-wider">Welcome</p>
                        <div className="flex items-center gap-3 mt-1">
                          <Link
                            href="/login"
                            className="text-base font-heading uppercase text-accent hover:underline"
                            onClick={() => setIsOpen(false)}
                          >
                            Login
                          </Link>
                          <span className="text-white/20">|</span>
                          <Link
                            href="/register"
                            className="text-base font-heading uppercase text-white hover:text-accent transition-colors"
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
                    href="/products"
                    className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/case-study"
                    className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>
                </SheetClose>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:no-underline hover:bg-white/5 data-[state=open]:bg-white/5 border-l-4 border-transparent data-[state=open]:border-accent">
                      Industries
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 bg-black/20">
                      <SheetClose asChild>
                        <Link
                          href="/industries"
                          className="block py-3 px-8 text-base hover:bg-white/5 transition-colors text-white/70 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          All Industries
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/industries/fleet"
                          className="block py-3 px-8 text-base hover:bg-white/5 transition-colors text-white/70 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          Fleet & Transportation
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/industries/construction"
                          className="block py-3 px-8 text-base hover:bg-white/5 transition-colors text-white/70 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          Construction
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/industries/manufacturing"
                          className="block py-3 px-8 text-base hover:bg-white/5 transition-colors text-white/70 hover:text-white"
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
                    href="/knowledge-base"
                    className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Knowledge Base
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/blog"
                    className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="py-4 px-6 font-heading text-xl uppercase tracking-wide hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>

              {/* Mobile Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/30">
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-accent text-white font-heading text-lg uppercase py-3 rounded-lg hover:bg-accent/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </SheetClose>
                <p className="text-center text-xs text-white/40 mt-4">
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
