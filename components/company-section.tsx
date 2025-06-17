import { CustomButton } from "./ui/custom-button";
import { Users, Lightbulb, Settings, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "MEHR ALS 5000",
    subtitle: "ZUFRIEDENE KUNDEN",
  },
  {
    icon: Lightbulb,
    title: "AUSSCHLIESSLICH IN",
    subtitle: "DEUTSCHLAND GEFERTIGT",
  },
  {
    icon: Settings,
    title: "ÜBER 20 JAHRE",
    subtitle: "BRANCHENEXPERTISE",
  },
  {
    icon: Globe,
    title: "NACHHALTIGE",
    subtitle: "PRODUKTIONSSTANDARDS",
  },
];

export function CompanySection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Company Info */}
        <div className="mb-16">
          <h2 className="text-[#0EA5E9] text-3xl lg:text-4xl font-light font-roboto-condensed tracking-tight">
            Die airoluxx GmbH
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">airoluxx</span> entwickelt, produziert und vertreibt energieeffiziente,
                hochschallgedämmte und für höchste architektonische Ansprüche
                konzipierte Lüftungssysteme für den Einsatz von der
                Einzimmerwohnung bis hin zu Hochhäusern und Hotelbauten. Unser
                Sortiment reicht von hochschallgedämmten passiven
                Außenluftdurchlässen bis hin zu energieeffizienten dezentralen
                Wärmerückgewinnungsgeräten.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Der Einsatz unserer Lüftungssysteme sorgt für eine maximale
                Einsparung bei Heiz- und Stromkosten sowie für die
                Sicherstellung des nutzerunabhängigen Luftwechsels zum
                Feuchteschutz. Dadurch werden Bausubstanzschäden verhindert und
                Ressourcen geschont.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Durch den modularen Aufbau und kleinstmöglichen Abmessungen sind
                airoluxx Geräte einerseits für sehr beengte Platzverhältnisse,
                andererseits auch für Sonderlösungen bestens geeignet.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Kundenbezogen entwickeln wir speziell auf die Anforderungen
                Ihres Projektes angepasste Lüftungslösungen. Wir unterstützen
                Sie hier von Anfang an. Begonnen bei der Entwurfsplanung, bis
                hin zur Montageunterstützung vor Ort.
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <CustomButton
                    variant="outline"
                    size="lg"
                    showArrow
                    className="bg-gray-400 text-white border-gray-400 hover:bg-gray-500 hover:border-gray-500"
                  >
                    EINSATZBEREICHE ENTDECKEN
                  </CustomButton>
                </div>
                <button className="text-[#8BC34A] font-semibold text-left hover:text-[#7CB342] transition-colors">
                  KONTAKTIEREN SIE UNS →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon size={48} className="text-[#0EA5E9]" />
              </div>
              <h3 className="font-bold text-base mb-1 font-roboto-condensed tracking-tight text-[#777777]">
                {feature.title}
              </h3>
              <p className="font-bold text-base font-roboto-condensed tracking-tight text-[#777777]">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
