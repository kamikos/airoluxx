"use client"

import { useState } from "react"
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const produkteItems = [
  {
    title: "Schalldämmluftter",
    href: "#schalldaemmluftter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    title: "Wärmerückgewinnungsgeräte",
    href: "#waermerueckgewinnung",
    description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Nachströmelemente",
    href: "#nachstroemelemente",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    title: "Zubehör",
    href: "#zubehoer",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
]

const einsatzbereicheItems = [
  {
    title: "Wohnungsbau",
    href: "#wohnungsbau",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    title: "Gewerbebau",
    href: "#gewerbebau",
    description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    title: "Hotellerie",
    href: "#hotellerie",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    title: "Sanierung",
    href: "#sanierung",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
]

const hamburgerMenuItems = [
  {
    category: "lorem",
    items: [
      { name: "lorem2" , href: "#lorem2" },
      { name: "Lorem", href: "#lorem" },
    ],
  },
  {
    category: "safafsafs",
    items: [
      { name: "asfafsafs", href: "#afsafsafs" },
    ],
  },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section)
  }

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm shadow-sm absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-[#0EA5E9] font-bold text-xl lg:text-2xl">
            <span className="mr-1">::::</span>
            airoluxx
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <NavigationMenuTrigger className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm rounded-none bg-transparent">
                  PRODUKTE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {produkteItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm rounded-none bg-transparent">
                  EINSATZBEREICHE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {einsatzbereicheItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#referenzen"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm px-4 py-2 transition-colors"
                >
                  REFERENZEN
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#unternehmen"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm px-4 py-2 transition-colors"
                >
                  UNTERNEHMEN
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#blog"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm px-4 py-2 transition-colors"
                >
                  BLOG
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#kontakt"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm px-4 py-2 transition-colors"
                >
                  KONTAKT
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button className="text-gray-700 hover:text-[#0EA5E9] transition-colors ml-4">
            <Search size={20} />
          </button>
        </div>

        {/* Hamburger Menu Button - Always Visible */}
        <div className="flex items-center space-x-4">
          {/* Search button for mobile */}
          <button className="lg:hidden text-gray-700 hover:text-[#0EA5E9] transition-colors">
            <Search size={20} />
          </button>

          <CustomButton variant="secondary" size="md" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </CustomButton>
        </div>
      </div>

      {/* Hamburger Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {hamburgerMenuItems.map((category, index) => (
                <div key={index}>
                  <h3 className="text-[#0EA5E9] font-semibold text-lg mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-[#0EA5E9] transition-colors block py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Links with Dropdowns */}
            <div className="lg:hidden mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-[#0EA5E9] font-semibold text-lg mb-4">Hauptnavigation</h3>
              <div className="space-y-2">
                {/* PRODUKTE with dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileSection("produkte")}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors"
                  >
                    PRODUKTE
                    {expandedMobileSection === "produkte" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  {expandedMobileSection === "produkte" && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      {produkteItems.map((item) => (
                        <div key={item.title} className="py-2">
                          <Link
                            href={item.href}
                            className="text-[#0EA5E9] font-medium hover:text-[#0284C7] transition-colors block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* EINSATZBEREICHE with dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileSection("einsatzbereiche")}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors"
                  >
                    EINSATZBEREICHE
                    {expandedMobileSection === "einsatzbereiche" ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  {expandedMobileSection === "einsatzbereiche" && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      {einsatzbereicheItems.map((item) => (
                        <div key={item.title} className="py-2">
                          <Link
                            href={item.href}
                            className="text-[#0EA5E9] font-medium hover:text-[#0284C7] transition-colors block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other navigation items */}
                <Link
                  href="#referenzen"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  REFERENZEN
                </Link>
                <Link
                  href="#unternehmen"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  UNTERNEHMEN
                </Link>
                <Link
                  href="#blog"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
                <Link
                  href="#kontakt"
                  className="text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  KONTAKT
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}



interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  title: string
  children: React.ReactNode
}

const ListItem = ({ className, title, children, ...props }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
