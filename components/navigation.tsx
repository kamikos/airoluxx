"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

const navigationItems = ["PRODUKTE", "EINSATZBEREICHE", "REFERENZEN", "UNTERNEHMEN", "BLOG", "KONTAKT"]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white/90 shadow-sm absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-[#0EA5E9] font-bold text-xl lg:text-2xl">
            <span className="mr-1">::::</span>
            airoluxx
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-[#0EA5E9] font-medium text-sm transition-colors">
              {item}
            </a>
          ))}
          <button className="text-gray-700 hover:text-[#0EA5E9] transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <CustomButton variant="secondary" size="md" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </CustomButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t">
          <div className="flex flex-col space-y-4 p-4">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-[#0EA5E9] font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center text-gray-700 hover:text-[#0EA5E9] py-2 transition-colors">
              <Search size={20} className="mr-2" />
              Suchen
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
