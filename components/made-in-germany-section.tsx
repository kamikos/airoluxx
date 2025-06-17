export function MadeInGermanySection() {
    return (
      <section id="qualitaet" className="w-full bg-[#0089cb] text-white relative overflow-hidden">
        <h2 className="text-3xl lg:text-4xl font-light w-full text-center py-8 font-roboto-condensed text-shadow-lg">Qualität &quot;Made in Germany&quot;</h2>
        <div className="mx-auto px-4 lg:px-8 text-center relative z-10" style={{
                backgroundImage: `url("/images/Motiv.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay',
                backgroundColor: '#0089cb0f',
              }}>

          <div className="max-w-[1200px] mx-auto space-y-4 relative p-12 px-16 lg:px-22 text-shadow-xs text-white font-light">

            <p className="text-lg lg:text-xl leading-relaxed relative z-10">
              airoluxx Wohnraumlüfter werden ausschließlich in Deutschland produziert. Am eigenen internen
              Luftleistungsprüfstand werden die Produkte von unseren Ingenieuren ständig getestet, verbessert und
              weiterentwickelt. Ebenso das Design und die Konstruktion neuer Komponenten werden hausintern umgesetzt.
            </p>

            <p className="text-base lg:text-xl leading-relaxed  relative z-10">
              Damit erfüllen wir unsere eigenen hohen Ansprüche an die Qualität unserer Produkte &quot;Made in Germany&quot;. Des
              weiteren ist uns Nachhaltigkeit und eine umweltschonende Fertigung am Produktionsstandort Landshut besonders
              wichtig.
            </p>
          </div>
        </div>

        {/* Add Einsatzbereiche section anchor for navigation */}
        <div id="einsatzbereiche" className="absolute -top-20"></div>
      </section>
    )
  }
  