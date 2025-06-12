export function MadeInGermanySection() {
    return (
      <section id="qualitaet" className="w-full bg-[#0e92cf] text-white relative overflow-hidden">
        <h2 className="text-3xl lg:text-4xl font-light w-full text-center py-8">Qualität „Made in Germany"</h2>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center relative z-10" style={{
                backgroundImage: `url("/images/Motiv.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>

          <div className="max-w-5xl mx-auto space-y-8 lg:space-y-10 relative py-16">

            <p className="text-lg lg:text-xl leading-relaxed font-light relative z-10">
              airoluxx Wohnraumlüfter werden ausschließlich in Deutschland produziert. Am eigenen internen
              Luftleistungsprüfstand werden die Produkte von unseren Ingenieuren ständig getestet, verbessert und
              weiterentwickelt. Ebenso das Design und die Konstruktion neuer Komponenten werden hausintern umgesetzt.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed font-light relative z-10">
              Damit erfüllen wir unsere eigenen hohen Ansprüche an die Qualität unserer Produkte „Made in Germany". Des
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
  