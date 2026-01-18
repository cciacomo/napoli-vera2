import { Link } from "react-router-dom";
import { MapPin, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useLanguage } from "@/app/context/LanguageContext";
import { getTranslation } from "@/app/translations/translations";

export function Homepage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707177614710-4d35764f7340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBJdGFseSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MzU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Napoli cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t.home.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t.home.heroSubtitle}
          </p>
          <Link
            to="/piani"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors"
          >
            {t.home.explorePlans}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.home.whyChooseTitle}</h2>
            <p className="text-xl text-gray-600">{t.home.whyChooseSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t.home.customTours}
              </h3>
              <p className="text-gray-600">{t.home.customToursDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t.home.expertGuides}
              </h3>
              <p className="text-gray-600">{t.home.expertGuidesDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t.home.flexibility}
              </h3>
              <p className="text-gray-600">{t.home.flexibilityDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
    </div>
  );
}
