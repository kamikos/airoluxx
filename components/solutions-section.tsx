import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "./ui/custom-button"

const solutionCards = [
  {
    title: "Von der Planung bis zur Umsetzung",
    image: "/images/planning-team.png",
    paragraphs: [
      "Unsere Kunden sind der wichtigste Partner im Unternehmenskonzept. Daher setzen wir auf eine langfristige und persönliche Bindung.",
      "Mit unserer langjährigen Erfahrung im Bereich der dezentralen Lüftung stehen wir Ihnen nicht nur als Hersteller und Lieferant zur Seite, sondern unterstützen Sie bereits von Beginn Ihres Projektes an als vertrauensvoller Partner, auf den Sie sich verlassen können.",
    ],
    linkText: "ZU DEN LEISTUNGEN",
    href: "#leistungen",
  },
  {
    title: "Warum airoluxx Schalldämmlüfter?",
    image: "/images/noise-pillow.png",
    paragraphs: [
      "Lärmbelästigung ist eine Erscheinung der immer stärker zunehmenden Mobilitätsentwicklung. Nach einer Untersuchung aus dem Jahr 2018 fühlen sich 75 Prozent aller Befragten in ihrem Wohnumfeld durch Straßenverkehr gestört oder belästigt. Schall wirkt auf den gesamten menschlichen Organismus, indem er körperliche Stressreaktionen hervorruft.",
    ],
    linkText: "SCHALLDÄMMLÜFTER",
    href: "#schalldaemmluefter",
    moreText: "Mehr erfahren ...",
  },
  {
    title: "Was beudeuted Schallschutz?",
    image: "/images/sound-insulation.png",
    paragraphs: [
      "Im Bereich des Wohnungsbaus bezieht sich der Schallschutz auf Maßnahmen zur Reduktion von bereits entstandenem Schall. Diese sogenannten Sekundärmaßnahmen sollen die Verbreitung von Luft- und Körperschall minimieren. Bei der dezentralen Schalldämmlüftung spielt hier die Fassade als Trennung zwischen Außenlärm und Innenraum eine tragende Rolle.",
    ],
    linkText: "ZUM BLOGBEITRAG",
    href: "#blog",
    moreText: "Mehr erfahren ...",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-12 lg:mb-16">
          Wir finden für jede Situation die optimale Lösung
        </h2>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          {solutionCards.map((card, index) => (
            <div key={index} className="bg-white shadow-md overflow-hidden flex flex-col w-full">
              <div className="px-6 min-h-[100px] flex pt-6 items-start">
                <h3 className="text-2xl text-[#0EA5E9] mb-4">{card.title}</h3>
              </div>

              <div className="relative h-56 max-h-[170px] w-full">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  {card.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {card.moreText && <p className="text-gray-500 text-base pt-2">{card.moreText}</p>}
                </div>
                <div className="pt-4 flex justify-end mt-auto">
                  <Link href={card.href}>
                    <CustomButton variant="outline" size="lg" showArrow className="bg-gray-400 text-white border-gray-400 hover:bg-gray-500 hover:border-gray-500">
                      {card.linkText}
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
