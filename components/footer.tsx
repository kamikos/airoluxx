import Link from "next/link"

const footerLinks = {
  quicklinks: [
    { name: "Produkte", href: "#produkte" },
    { name: "Einsatzbereiche", href: "#einsatzbereiche" },
    { name: "Referenzen", href: "#referenzen" },
    { name: "Blog", href: "#blog" },
    { name: "Unternehmen", href: "#unternehmen" },
    { name: "Kontakt", href: "#kontakt" },
  ],
  service: [
    { name: "FAQ", href: "#faq" },
    { name: "Downloads", href: "#downloads" },
    { name: "Datenschutz", href: "#datenschutz" },
    { name: "Impressum", href: "#impressum" },
    { name: "AGB", href: "#agb" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div
        className="bg-[#0EA5E9] text-white py-12 lg:py-16 relative"
        style={{
          backgroundImage: `url('/images/raster.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
            {/* Logo */}
            <div className="lg:col-span-1">
              <div className="text-white font-bold text-xl lg:text-2xl mb-8">
                <span className="mr-1">::::</span>
                airoluxx
              </div>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 justify-between">

            {/* Company Info */}
            <div className="lg:col-span-2 flex justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold mb-3 tracking-wider">FIRMA</h3>
                  <p className="text-sm mb-6">airoluxx GmbH</p>

                  <h3 className="text-sm font-semibold mb-3 tracking-wider">ADRESSE</h3>
                  <div className="text-sm space-y-1">
                    <p>Hofbauerweg 3</p>
                    <p>84028 Landshut</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3 tracking-wider">E-MAIL</h3>
                  <p className="text-sm mb-6">
                    <a href="mailto:info@airoluxx.de" className="hover:underline">
                      info@airoluxx.de
                    </a>
                  </p>

                  <h3 className="text-sm font-semibold mb-3 tracking-wider">TELEFON</h3>
                  <p className="text-sm mb-6">
                    <a href="tel:+4987143099970" className="hover:underline">
                      +49 (0)871 - 43 09 970
                    </a>
                  </p>

                  <h3 className="text-sm font-semibold mb-3 tracking-wider">FAX</h3>
                  <p className="text-sm">+49 (0)871 - 43 09 97 29</p>
                </div>
              </div>
            </div>
            

            {/* Quick Links */}
            <div className="text-left ml-auto">
              <h3 className="text-sm font-semibold mb-6 tracking-wider">QUICKLINKS</h3>
              <ul className="">
                {footerLinks.quicklinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:underline transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service */}
            <div className="text-left ml-auto">
              <h3 className="text-sm font-semibold mb-6 tracking-wider">SERVICE</h3>
              <ul className="">
                {footerLinks.service.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:underline transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#0284C7] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-end items-center text-sm">
            <p>©2025 airoluxx | Alle Rechte vorbehalten | <Link href="#cookie-settings" className="hover:underline">Cookie Einstellungen verwalten</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
