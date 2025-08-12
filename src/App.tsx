import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Truck, Car, Wrench, Zap, Users, Shield, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-gray-700 to-black p-1 rounded-full">
                <img 
                  src="/logo3.png" 
                  alt="MOBIL24 Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">MOBIL24</h1>
                <p className="text-sm text-gray-600">ADK Profesjonalny Serwis Opon</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Usługi</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">O Nas</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Kontakt</button>
              <a href="tel:+48-577-454-800" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Numer Tel.: 577 454 800
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-red-600 py-2">Usługi</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-red-600 py-2">O Nas</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-red-600 py-2">Kontakt</button>
                <a href="tel:+48-577-454-800" className="bg-red-600 text-white px-4 py-3 rounded-lg font-semibold text-center">
                  Numer Tel.: 577 454 800
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Clock className="h-8 w-8 text-red-400 animate-pulse" />
              <span className="bg-red-600 px-4 py-2 rounded-full text-lg font-bold">24/7 MOBILNY SERWIS OPON</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Profesjonalna naprawa opon
              <span className="block text-red-400">Gdy potrzebujesz nas najbardziej</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Specjalizujemy się w ciężarówkach, traktorach, busach oraz pojazdach osobowych.
              Serwis mobilny i naprawy w warsztacie dostępne całą dobę.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+48-577-454-800" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                <Phone className="inline h-5 w-5 mr-2" />
                Zadzwoń teraz: 577 454 800
              </a>
              <button onClick={() => scrollToSection('contact')} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Poproś o wycenę
              </button>
            </div>
          </div>
        </div>

        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasze Usługi</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Od nagłych napraw na drodze po kompleksowe usługi warsztatowe, 
        zajmujemy się wszystkimi Twoimi potrzebami oponiarskimi z profesjonalnym podejściem.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* SERWIS OPON CIĘŻAROWYCH, ROLNICZYCH, PRZEMYSŁOWYCH */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Wrench className="h-8 w-8 text-gray-700" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Serwis opon ciężarowych, rolniczych, przemysłowych</h3>
        <p className="text-gray-600 text-center mb-6">
          Kompleksowy serwis opon do pojazdów ciężarowych, maszyn rolniczych i przemysłowych.
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Diagnostyka i naprawy</li>
          <li>• Regulacje i konserwacja</li>
          <li>• Doradztwo techniczne</li>
          <li>• Usługi specjalistyczne</li>
        </ul>
      </div>

      {/* WYMIANA OPON BUS, OSOBOWE, TERENOWE */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Zap className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Wymiana opon bus, osobowe, terenowe</h3>
        <p className="text-gray-600 text-center mb-6">
          Profesjonalna wymiana opon dla busów, samochodów osobowych oraz terenowych.
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Szybka i bezpieczna wymiana</li>
          <li>• Dopasowanie opon do pojazdu</li>
          <li>• Sezonowe przechowywanie opon</li>
          <li>• Obsługa flot pojazdów</li>
        </ul>
      </div>

      {/* Mobile Service (bez zmian) */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Truck className="h-8 w-8 text-black" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Serwis Mobilny 24 godziny na dobę</h3>
        <p className="text-gray-600 text-center mb-6">W pełni wyposażony pojazd przyjedzie do Waszej lokalizacji w celu serwisowania on-site.</p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Pomoc drogowa</li>
          <li>• Obsługa flot pojazdów</li>
          <li>• Serwis na placach budowy</li>
          <li>• Szybka reakcja w nagłych przypadkach</li>
        </ul>
      </div>

      {/* PROFESJONALNE NAPRAWY OPON, RÓWNIEŻ NA GORĄCO Z BEZTERMINOWĄ GWARANCJĄ */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Shield className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Profesjonalne naprawy opon, również na gorąco</h3>
        <p className="text-gray-600 text-center mb-6">
          Naprawy opon wykonane przez specjalistów, z możliwością napraw na gorąco oraz bezterminową gwarancją.
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Trwałe naprawy</li>
          <li>• Szybkie usługi</li>
          <li>• Serwis gwarancyjny</li>
          <li>• Kompleksowe podejście</li>
        </ul>
      </div>
    </div>
    {/* ...reszta kodu */}
  </div>
</section>



      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">O Nas</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dzięki wieloletniemu doświadczeniu staramy się dostarczyć najwyższej jakości usługi naprawy opon,
                dostępne przez całą dobę, 7 dni w tygodniu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dostępność 24/7</h3>
                <p className="text-gray-600">Zawsze gotowi by wesprzeć Państwa w nagłych potrzebach związanych z ogumieniem, w dzień i noc.</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gwarancja jakości</h3>
                <p className="text-gray-600">Dołożymy wszelkich starań, aby oferowane usługi spełniały Państwa oczekiwania.</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ekspertyza</h3>
                <p className="text-gray-600">Specjalizujemy się również w naprawach na gorąco. </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dlaczego my?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                      <span>Ubezpieczony i profesjonalny serwis</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                      <span>Wysokiej jakości maszyny i sprzęt</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                      <span>Przejrzyste i uczciwe podejście do klienta</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                      <span>Szybki czas reakcji na wezwania</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                      <span>Kompleksowa gwarancja na naprawy na gorąco</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                      <span>Obsługujemy klientów indywidualnych i biznesowych</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
              <p className="text-xl text-gray-300">
                Gotowi by pomóc 24/7. Skontaktuj się z nami w nagłych przypadkach lub w celu umówienia wizyty.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center">
                <div className="bg-red-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Telefon kontaktowy</h3>
                <p className="text-gray-300 mb-2">Funkcjonuje 24/7</p>
                <a href="tel:+48-577-454-800" className="text-2xl font-bold text-red-400 hover:text-red-300">577 454 800</a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="bg-gray-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Napisz do nas</h3>
                <p className="text-gray-300 mb-2">Uzyskaj wycenę lub zadaj pytania</p>
                <a href="mailto:emergency@tiremaxpro.com" className="text-red-400 hover:text-red-300 font-semibold">example@mail.com</a>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="bg-gray-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nasza lokalizacja</h3>
                <p className="text-gray-300 mb-4">
                  Godzikowice 152<br />
                  Godzikowice, 55-200 Oława<br />
                </p>
              </div>

            {/* CTA Banner */}
            <div></div>
            <div className="mt-16 text-center bg-red-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Potrzebujesz natychmiastowej pomocy?</h3>
              <p className="text-lg mb-6">Nasz zespół jest gotów by pomóc 24/7</p>
              <a href="tel:+48-577-454-800" className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń już teraz
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-600 p-1 rounded-full">
                <img 
                  src="/logo3.png" 
                  alt="MOBIL24 Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
                <div>
                  <h3 className="text-xl font-bold">MOBIL24</h3>
                  <p className="text-gray-400 text-sm">ADK Profesjonalny Serwis Opon</p>
                </div>
              </div>
              <p className="text-gray-400">
                Zaufany partner w usługach profesjonalnego serwisu ogumienia. 
                Dostępność 24/7 dla wszystkich potrzeb związanych z ogumieniem.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Usługi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tradycyjne naprawy opon</li>
                <li>Naprawy na gorąco (Wulkanizacja)</li>
                <li>Mobilny serwis</li>
                <li>Serwis warsztatowy</li>
                <li>Obsługa flot pojazdów</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Pojazdy</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Samochody ciężarowe</li>
                <li>Pojazdy przemysłowe</li>
                <li>Busy i pojazdy komercyjne</li>
                <li>Samochody osobowe</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Kontakt</h4>
              <div className="space-y-3">
                <a href="tel:+48-577-454-800" className="flex items-center text-red-400 hover:text-red-300">
                  <Phone className="h-4 w-4 mr-2" />
                  577 454 800
                </a>
                <a href="mailto:emergency@tiremaxpro.com" className="flex items-center text-gray-400 hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  example@mail.com
                </a>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <span>Godzikowice 152<br />Godzikowice, 55-200 Oława</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ADK SERWIS OPON. Wszelkie prawa zastrzeżone. | Profesjonalny serwis opon
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;