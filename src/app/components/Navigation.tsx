import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "@/app/components/LanguageSelector";
import { useLanguage } from "@/app/context/LanguageContext";
import { getTranslation } from "@/app/translations/translations";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              Napoli Vera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              to="/piani"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.nav.plans}
            </Link>
            <Link
              to="/chi-siamo"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              to="/contatti"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.nav.contact}
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/piani"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.plans}
            </Link>
            <Link
              to="/chi-siamo"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/contatti"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
