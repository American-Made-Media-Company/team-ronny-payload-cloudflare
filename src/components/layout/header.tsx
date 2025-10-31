'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import Logo from '@/components/graphics/logo'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import CowboyIcon from '@/components/graphics/cowboy-icon'

const navigationItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Issues',
    href: '/issues',
  },
  {
    label: 'Donate',
    href: '/donate',
  },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between">
      <Logo className="w-1/3 h-auto md:w-auto md:h-36 mt-2 md:mt-4 ml-2 md:ml-4" />

      {/* desktop navigation */}
      <NavigationMenu className="hidden md:block bg-red-950">
        <NavigationMenuList className="bg-red-950 uppercase [&>li:last-child]:bg-red-primary [&>li:last-child]:font-black">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild className="px-4 text-xl">
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* mobile navigation */}
      <div className="flex items-center gap-2 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="md:hidden bg-red-tertiary">
              <MenuIcon className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <SheetHeader>
              <SheetTitle className="sr-only">Site Navigation</SheetTitle>
              <SheetDescription className="pt-16 flex flex-col gap-6 text-white text-5xl uppercase font-black">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? 'text-white inline-flex items-center gap-4'
                        : 'text-red-tertiary inline-flex items-center gap-2',
                    )}
                  >
                    {item.label} {pathname === item.href ? <CowboyIcon className="size-6" /> : null}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Button asChild>
          <Link href="/donate">Donate</Link>
        </Button>
      </div>
    </header>
  )
}
