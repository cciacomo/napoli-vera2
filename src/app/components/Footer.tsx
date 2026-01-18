import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { getTranslation } from "@/app/translations/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Napoli Vera</h3>
            <p className="text-gray-400">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.contacts}</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@Napoli Vera.it</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+39 081 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Napoli, Italia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.hours}</h4>
            <div className="text-gray-400">
              <p>{t.footer.monFri}</p>
              <p>{t.footer.sat}</p>
              <p>{t.footer.sun}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Napoli Vera. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
