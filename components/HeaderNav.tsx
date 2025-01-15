"use client"
import * as React from "react"
import Link from "next/link"
import {Search, User as UserIcon, Menu, UserCircle, ClipboardList, Heart, LogOut, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useUserStore } from "@/store/useUserStore"
import { Button } from "./ui/button"
const navItems = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "News",
    href: "/news",
    subItems: [
      { label: "Newest", href: "/" },
      { label: "Development of the Fire", href: "/" },
      { label: "Government response", href: "/" },
      { label: "Rescue Situation", href: "/" },
    ],
  },
  {
    label: "Relief Support",
    href: "/relief-support",
    subItems: [
      { label: "Emergency Assistance", href: "/" },
      { label: "Resource Directory", href: "/" },
      { label: "Volunteer Opportunities", href: "/" },
    ],
  },
  {
    label: "Recovery Services",
    href: "/recovery-services",
    subItems: [
      { label: "Insurance Claim Assistance", href: "/" },
      { label: "Rebuilding Service", href: "/" },
      { label: "Preparedness Plans", href: "/" },
      { label: "Membership Plans", href: "/" },
      { label: "Mortgage Forbearance", href: "/" },
      { label: "Relocation Services", href: "/" },

      
    ],
  },
  {
    label: "Volunteer",
    href: "/volunteer",
  },
  {
    label: "Donations",
    href: "/donations",
  },
  {
    label: "Blog & Community",
    href: "/blog",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])
  const { user, clearUser } = useUserStore()
  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    )
  }
  const handleLogout = () => {
    clearUser()
  }
  return (
    <header className="bg-[#0d99ff] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl">SoCal Rise</h1>
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className="bg-[#0d99ff] text-white">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] shadow-lg gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white text-black">
                          {item.subItems.map((subItem) => (
                            <ListItem
                              key={subItem.href}
                              title={subItem.label}
                              href={subItem.href}
                            >
                              {subItem.label}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-4">
            <Search size={20} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <div className="md:hidden block">
                  <Menu size={24} />
                </div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-[#0d99ff] text-white"
              >
                <nav className="mt-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        {item.subItems ? (
                          <div>
                            <button
                              onClick={() => toggleExpanded(item.label)}
                              className="flex items-center justify-between w-full py-2 px-4 hover:bg-[#0d99ff] hover:text-white transition duration-300 rounded"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${expandedItems.includes(item.label) ? 'rotate-180' : ''
                                  }`}
                              />
                            </button>
                            {expandedItems.includes(item.label) && (
                              <ul className="pl-4 mt-2 space-y-2">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="block py-2 px-4 hover:bg-[#0d99ff] hover:text-white transition duration-300 rounded"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                        ) : (
                          <Link
                            href={item.href}
                            className="block py-2 px-4 hover:bg-[#0d99ff] hover:text-white transition duration-300 rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start hover:bg-[#0d99ff] hover:text-white" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-[#0d99ff] hover:text-white focus:bg-[#0d99ff] focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})