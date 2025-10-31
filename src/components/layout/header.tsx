import Link from 'next/link'

import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Logo from '@/components/graphics/logo'

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between">
      <Logo className="w-auto h-36 mt-4 ml-4" />

      {/* desktop navigation */}
      <NavigationMenu className="bg-red-950">
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
    </header>
  )
}
