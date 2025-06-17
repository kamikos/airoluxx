import { CustomButton } from "./ui/custom-button";
import { Volume2, Wind, Ruler, Plus } from "lucide-react";
import Image from "next/image";

const productCategories = [
  {
    title: "Schalldämmluftter",
    image: "/images/1.png",
    specs: [
      { icon: Volume2, text: "bis zu 72 dB", subtext: "Schalldämmung" },
      { icon: Wind, text: "bis 55 m³/h", subtext: "Luftleistung" },
      { icon: Ruler, text: "ab 280 mm", subtext: "Wandstärke" },
      { icon: Plus, text: "150-160 mm", subtext: "Durchmesser" },
    ],
    description: [
      "AirMax Schalldämmluftter sind der Inbegriff für die kontrollierte Wohnraumlüftung mit dem höchsten Schallschutz auf dem gesamten Markt. Es werden Schalldämmwerte bis 78dB Dn,e,w bei geöffneter Innenblende erreicht. Durch den modularen, sehr kompakten Aufbau sowie kleinstmöglichen Abmaßen lassen sich unsere Schalldämmluftter in jedes Lüftungskonzept sowohl im Neubau als auch in der Sanierung einplanen.",
      "airoluxx Schalldämmluftter sind für höchste architektonische Ansprüche zur nahezu unsichtbaren Integration in die Aussenfassade und Fensterlaibung konzipiert.",
      "Mit AirLite Schalldämmlufttern bietet airoluxx kostenoptimierte passive Aussenluftdurchlässe mit zugleich hohem Schallschutz. Der ALD (Aussenluftdurchlass) wird gleichermaßen wie die AirMax Baureihe nahezu unsichtbar in der Außenwand platziert.",
    ],
    variants: ["AD-L", "AD-L EFP", "AD-LV", "AD-W"],
  },
  {
    title: "Wärmerückgewinnungsgeräte",
    image: "/images/2.png",
    specs: [
      { icon: Volume2, text: "ab 70B (A)", subtext: "Schallpegel" },
      { icon: Wind, text: "bis zu 92%", subtext: "Wärmerückgewinnung" },
      { icon: Wind, text: "bis 61 m³/h", subtext: "Luftleistung" },
      { icon: Plus, text: "150-160 mm", subtext: "Durchmesser" },
    ],
    description: [
      "Die energieeffizientesten Wärmerückgewinnungsgeräte ecoHRV43 und ecoHRV60 aus unserer GreenLine Serie entstanden nach jahrelanger Entwicklung, Optimierung und Vermarktung vorangegangener Wärmerückgewinnungsgeräte und stellen unsere komplette überarbeitete Generation der dezentralen Wohnraumlüftung mit dem neuesten Stand der Technik dar.",
      "Der Einsatz des Axialfilters mit aerodynamischen Rotorblättern, abgeschaut aus der Natur, in Verbindung mit unserem eigens konzipierten und abgestimmten Luftführungsgitter sorgen für einen nahezu lautlosen Betrieb, minimalsten Stromverbrauch, sowie Luftleistungen bis zu 61m³/h.",
      "Zusammen mit der neu entwickelten Akustik Designblende für höchste architektonische sowie minimalistische Ansprüche, gepaart mit einer optimierten Luftführung, setzt unser ecoHRV aus der GreenLine Serie sowohl bei den Leistungsdaten als auch in der Designsprache neu definierte Maßstäbe.",
    ],
    variants: ["ecoHRV 43", "ecoHRV60", "eco EFP", "ecoHRV 1x"],
  },
];

export function ProductsSection() {
  return (
    <section id="produkte" className="">
      {/* Header */}
      <div className="w-full bg-[#96c32d] text-white text-center py-4">
        <h2 className="text-xl lg:text-2xl font-light font-roboto-condensed tracking-tight">
          Schallschutz der neuesten Generation
        </h2>
      </div>

      <div className="space-y-0">
        {/* Product Categories */}
        {productCategories.map((category, index) => (
          <div key={index} className="w-full bg-[#e2e2e2]">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Product Image */}
                <div className="order-2 lg:order-1">
                <h3 className="text-[#0EA5E9] text-2xl lg:text-3xl font-light mb-24">
                  {category.title}
                </h3>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={500}
                    height={300}
                    className="w-full max-w-md mx-auto"
                  />

                  {/* Product Variants */}
                  <div className="mt-32 w-full">
                    <div className="flex flex-wrap gap-2 justify-start w-full">
                      {category.variants.map((variant, vIndex) => (
                        <button
                          key={vIndex}
                          className="bg-gray-400 text-white px-4 py-2 text-sm hover:bg-white hover:text-blue-400 transition-colors w-1/5"
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                    <p className="text-left text-sm text-gray-600 mt-2 w-full">
                      WÄHLEN SIE IHRE MONTAGEVARIANTE
                    </p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="order-1 lg:order-2 relative mx-6">
                  {/* Specs */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {category.specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="bg-gray-400 text-white p-3 text-center"
                      >
                        <spec.icon size={24} className="mx-auto mb-2" />
                        <div className="text-sm font-semibold">{spec.text}</div>
                        <div className="text-xs break-words">
                          {spec.subtext}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="space-y-4 pb-12 bg-white p-6 px-10 shadow-md">
                    {category.description.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-gray-700 text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="absolute -bottom-4 right-4">
                    <CustomButton variant="primary" size="lg" showArrow>
                      MEHR ERFAHREN
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Third Product Section Banner */}
        <div className="w-full bg-[#a2aeb7] text-white text-center py-4">
          <h3 className="text-xl lg:text-2xl font-medium">
            Für den Zwischenwand- und Aussenwandeinbau
          </h3>
        </div>

        {/* Third Product Section Content */}
        <div className="w-full bg-[#e2e2e2]">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="mx-6 relative">
                {/* Specs */}
                <div className="grid grid-cols-4 gap-4 mb-6 mt-12">
                  <div className="bg-[#a2aeb7] text-white p-3 text-center">
                    <Volume2 size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-semibold">bis zu 67 dB</div>
                    <div className="text-xs">Schalldämmung</div>
                  </div>
                  <div className="bg-[#a2aeb7] text-white p-3 text-center">
                    <Wind size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-semibold">bis 61 m³/h</div>
                    <div className="text-xs">Luftleistung</div>
                  </div>
                  <div className="bg-[#a2aeb7] text-white p-3 text-center">
                    <Ruler size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-semibold">ab 150 mm</div>
                    <div className="text-xs">Wandstärke</div>
                  </div>
                </div>

                <div className="space-y-4 lg:pb-6 pb-12 bg-white px-8 py-4 shadow-md">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Die hochschallgedämmten airoluxx AirFlat ZWD
                    Nachströmelemente sind sowohl für den Einsatz in der
                    Zwischenwand als auch in der Aussenwand konzipiert. Durch
                    die stetige Weiterentwicklung unseres Flachkanalsystems
                    AirFlat erreichen wir eine höchste Normschallpegeleffizienz
                    von über 67dB Dn,e,w im offenen Zustand am Markt. Das alles
                    bereits bei einem Gesamtwandaufbau von nur 150mm.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Der AirFlat vereint minimalistisches Design bei gleichzeitig
                    sehr hohen Luftleistungsraten. Ein modularer Aufbau
                    ermöglicht die Einplanung in jegliche Einbausituationen.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                    Sonderlösungen auf Anfrage.
                  </p>
                </div>

                <div className="absolute -bottom-4 right-4">
                  <CustomButton variant="primary" size="lg" showArrow>
                    MEHR ERFAHREN
                  </CustomButton>
                </div>
              </div>

              <div>
                <Image
                  src="/images/3.png"
                  alt="AirFlat ZWD"
                  width={500}
                  height={300}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
