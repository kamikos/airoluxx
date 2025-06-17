"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"

// Example submenu items for Produkte
const produkteSubmenu = [
	{
		title: "Lorem Ipsum",
		icon: "/images/1.png",
		href: "#schalldaemmluefter",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/2.png",
		href: "#waermerueckgewinnung",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/3.png",
		href: "#ohne-waermerueckgewinnung",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/4.png",
		href: "#zubehoer",
		desc: "Lorem Ipsum",
	},
]

// Example submenu items for Einsatzbereiche
const einsatzbereicheSubmenu = [
	{
		title: "Lorem Ipsum",
		icon: "/images/building1.png",
		href: "#geschosswohnungsbau",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/building2.png",
		href: "#hotel",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/building3.png",
		href: "#kiga-schulen",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/building4.png",
		href: "#gewerbebau",
		desc: "Lorem Ipsum",
	},
	{
		title: "Lorem Ipsum",
		icon: "/images/building5.png",
		href: "#einfamilienhaeuser",
		desc: "Lorem Ipsum",
	},
]

const navLinks = [
	{ name: "PRODUKTE", href: "#produkte", submenu: produkteSubmenu },
	{ name: "EINSATZBEREICHE", href: "#einsatzbereiche", submenu: einsatzbereicheSubmenu },
	{ name: "REFERENZEN", href: "#referenzen" },
  { name: "UNTERNEHMEN", href: "#unternehmen" },
	{ name: "BLOG", href: "#blog" },
	{ name: "KONTAKT", href: "#kontakt" },
]

export function Navigation() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [submenuOpen, setSubmenuOpen] = useState<string | null>(null)

	// Helper to get submenu data
	const currentSubmenu = navLinks.find(l => l.name === submenuOpen)?.submenu;

	// Handler to close submenu on mouse leave
	const handleNavBarMouseLeave = () => {
		setSubmenuOpen(null);
	};

	// Animation for mobile menu
	// (You can later add framer-motion or CSS transitions for smoother effect)

	return (
		<nav className="w-full z-50 font-roboto-condensed border-t-2 border-[#0EA5E9] bg-white/80 max-h-[76px]">
			<div
				className="flex items-center justify-between shadow-sm relative h-full"
				onMouseLeave={handleNavBarMouseLeave}
			>
				{/* Logo -left */}
				<div className="flex items-center py-4 ml-8">
          <Image
            src="/images/logo.png"
            alt="Airoluxx Logo"
            width={170}
            height={60}
            className="object-contain"
          />
				</div>
				{/* Desktop Nav - reight */}
        <div className="flex items-center justify-between w-full lg:w-auto h-full">
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6 py-4">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setSubmenuOpen(link.name)}
              >
                <Link
                  href={link.href}
                  className={`font-roboto uppercase text-base font-normal spacing px-2 py-2 tracking-wider transition-colors ${submenuOpen === link.name ? 'text-[#0EA5E9]' : 'text-gray-700 hover:text-[#0EA5E9]'}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
                        <button className="mr-4 text-gray-700 hover:text-[#0EA5E9]">
              <Search size={20} />
            </button>
          </div>
          {/* Burger always visible */}
          <div className="flex items-center justify-center bg-[#0EA5E9] h-[76px] w-[76px]">
            <button
              className="p-2 rounded hover:bg-[#0EA5E9]/10 transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} className="text-white" />
            </button>
          </div>

        </div>
			</div>

			{/* Submenu (Desktop, full width, below nav) */}
			{currentSubmenu && (
				<div
					className="w-screen bg-gray-100 border-t-4 border-[#0EA5E9] shadow-lg flex px-8 py-20 z-40 animate-fadeIn fixed left-0 top-[72px]"
					onMouseLeave={handleNavBarMouseLeave}
					onMouseEnter={() => {}}
				>
					{currentSubmenu.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className="flex flex-col items-center flex-1 px-4 group/subitem hover:bg-white transition-colors rounded-lg"
						>
							<div className="w-16 h-16 mb-2 flex items-center justify-center">
								<Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain" />
							</div>
							<span className="text-xs text-gray-700 text-center font-medium mb-1">Lorem Ipsum</span>
						</Link>
					))}
				</div>
			)}

			{/* Mobile Fullscreen Menu */}
			{mobileOpen && (
				<div className="fixed inset-0 bg-[#0EA5E9] bg-opacity-95 z-50 flex flex-col animate-slideDown">
					<div className="flex items-center justify-between px-6 py-6">
						<span className="font-bold text-2xl text-white tracking-widest">
							<span className="mr-1">::::</span>airoluxx
						</span>
						<button
							className="p-2 rounded hover:bg-white/10 transition"
							onClick={() => setMobileOpen(false)}
							aria-label="Close menu"
						>
							<X size={32} className="text-white" />
						</button>
					</div>
					{/* Search Bar */}
					<div className="px-6 mb-8">
						<div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
							<Search size={20} className="text-white mr-2" />
							<input
								type="text"
								placeholder="Suche"
								className="bg-transparent outline-none border-none text-white placeholder-white w-full text-base"
							/>
						</div>
					</div>
					{/* Menu Groups */}
					<div className="flex-1 flex flex-col justify-center items-center space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
							{/* Produkte group with submenu */}
							<div>
								<div className="uppercase text-white font-bold mb-4 tracking-wider">Produkte</div>
								<ul className="space-y-2">
									{produkteSubmenu.map((item) => (
										<li key={item.title}>
											<Link
												href={item.href}
												className="flex items-center text-white hover:text-[#8BC34A] text-lg font-medium px-2 py-2 rounded transition-colors"
												onClick={() => setMobileOpen(false)}
											>
												<Image src={item.icon} alt={item.title} width={32} height={32} className="mr-3" />
												{item.desc}
											</Link>
										</li>
									))}
								</ul>
							</div>
							{/* Other links */}
							<div>
								<div className="uppercase text-white font-bold mb-4 tracking-wider">Navigation</div>
								<ul className="space-y-2">
									{navLinks.slice(1).map((link) => (
										<li key={link.name}>
											<Link
												href={link.href}
												className="text-white hover:text-[#8BC34A] text-lg font-medium px-2 py-2 rounded transition-colors"
												onClick={() => setMobileOpen(false)}
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					{/* Footer (language, etc.) */}
					<div className="flex justify-between items-center px-6 py-4 text-white text-xs opacity-80 border-t border-white/20 mt-auto">
						<div>
							<Link href="#datenschutz" className="hover:underline mr-4">DATENSCHUTZ</Link>
							<Link href="#impressum" className="hover:underline">IMPRESSUM</Link>
						</div>
						<div>
							DE / ENG
						</div>
					</div>
				</div>
			)}

			{/* Animations (add to globals.css or as needed) */}
			<style jsx global>{`
				@keyframes slideDown {
					from { transform: translateY(-100%); opacity: 0; }
					to { transform: translateY(0); opacity: 1; }
				}
				.animate-slideDown {
					animation: slideDown 0.4s cubic-bezier(0.4,0,0.2,1);
				}
				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(10px); }
					to { opacity: 1; transform: translateY(0); }
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s cubic-bezier(0.4,0,0.2,1);
				}
			`}</style>
		</nav>
	)
}
