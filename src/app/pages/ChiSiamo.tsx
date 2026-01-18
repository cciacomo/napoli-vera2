import { Heart, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useLanguage } from '@/app/context/LanguageContext';
import { getTranslation } from '@/app/translations/translations';

export function ChiSiamo() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const teamMembers = [
    { name: 'Marco Esposito', role: language === 'it' ? 'Guida turistica certificata' : language === 'en' ? 'Certified tour guide' : language === 'de' ? 'Zertifizierter Reiseführer' : language === 'fr' ? 'Guide touristique certifié' : 'Guía turístico certificado', exp: 15 },
    { name: 'Giulia Romano', role: language === 'it' ? 'Storica dell\'arte' : language === 'en' ? 'Art historian' : language === 'de' ? 'Kunsthistorikerin' : language === 'fr' ? 'Historienne de l\'art' : 'Historiadora del arte', exp: 12 },
    { name: 'Antonio Russo', role: language === 'it' ? 'Esperto gastronomico' : language === 'en' ? 'Food expert' : language === 'de' ? 'Gastronomie-Experte' : language === 'fr' ? 'Expert gastronomique' : 'Experto gastronómico', exp: 10 },
    { name: 'Francesca De Luca', role: language === 'it' ? 'Guida archeologica' : language === 'en' ? 'Archaeological guide' : language === 'de' ? 'Archäologischer Führer' : language === 'fr' ? 'Guide archéologique' : 'Guía arqueológica', exp: 8 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707177614710-4d35764f7340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBJdGFseSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MzU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Napoli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">{t.about.missionTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.missionText1}
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.about.missionText2}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.about.missionText3}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">{t.about.valuesTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t.about.passion}</h3>
              <p className="text-gray-700">
                {t.about.passionDesc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t.about.professionalism}</h3>
              <p className="text-gray-700">
                {t.about.professionalismDesc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t.about.authenticity}</h3>
              <p className="text-gray-700">
                {t.about.authenticityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.about.teamTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.about.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-1">{member.role}</p>
                <p className="text-sm text-gray-500">{member.exp} {t.about.yearsExp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
