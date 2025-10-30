import Link from 'next/link'

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
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between">
      <Logo className="w-auto h-36 mt-4 ml-4" />

      {/* desktop navigation */}
      <NavigationMenu>
        <NavigationMenuList className="bg-red-950">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
