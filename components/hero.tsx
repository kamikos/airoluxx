import { CustomButton } from "./ui/custom-button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full relative min-h-[700px] lg:min-h-[800px] flex items-center pt-20 lg:pt-24 shadow-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/building.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 lg:px-8 container mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]">
            DEZENTRALE
            <br />
            WOHNRAUMLÜFTUNGEN
          </h1>

          <p className="text-white text-lg lg:text-xl mb-8 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.4s_forwards]">
            Für höchste architektonische Ansprüche
          </p>

          <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_0.6s_forwards]">
            <CustomButton
              variant="primary"
              size="lg"
              showArrow
              className="text-white font-semibold text-base lg:text-lg hover-glow"
            >
              JETZT BERATEN LASSEN!
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="z-20">
        <div className="flex justify-center">
          <div className="flex space-x-4 rounded-lg p-4 absolute -bottom-11 right-8 lg:right-16 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.8s_forwards]">
            <a
              href="tel:"
              className="bg-[#8BC34A] text-white p-4 rounded-sm hover:bg-[#7CB342] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:"
              className="bg-[#8BC34A] text-white p-4 rounded-sm hover:bg-[#7CB342] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              className="bg-[#8BC34A] text-white p-4 rounded-sm hover:bg-[#7CB342] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
            >
              <MapPin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
