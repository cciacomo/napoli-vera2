import { Check } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useLanguage } from "@/app/context/LanguageContext";
import { getTranslation } from "@/app/translations/translations";

export function Piano() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const plans = [
    {
      name: t.plans.classic.name,
      duration: t.plans.classic.duration,
      price: "€45",
      image:
        "https://images.unsplash.com/photo-1707177614710-4d35764f7340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBJdGFseSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MzU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.plans.classic.features,
    },
    {
      name: t.plans.gastro.name,
      duration: t.plans.gastro.duration,
      price: "€65",
      image:
        "https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBwaXp6YSUyMGZvb2R8ZW58MXx8fHwxNzY4NzM1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.plans.gastro.features,
    },
    {
      name: t.plans.vesuvio.name,
      duration: t.plans.vesuvio.duration,
      price: "€95",
      image:
        "https://images.unsplash.com/photo-1694631138401-971f4fe15c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWZXN1dml1cyUyMHZvbGNhbm8lMjBOYXBsZXN8ZW58MXx8fHwxNzY4NzM1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.plans.vesuvio.features,
    },
    {
      name: t.plans.amalfi.name,
      duration: t.plans.amalfi.duration,
      price: "€120",
      image:
        "https://images.unsplash.com/photo-1583844056361-4418a8f2a985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWFsZmklMjBDb2FzdCUyMEl0YWx5fGVufDF8fHx8MTc2ODczNTYyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.plans.amalfi.features,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{t.plans.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.plans.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  {plan.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className="text-green-600 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold">
                  {t.plans.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">{t.plans.customTourTitle}</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {t.plans.customTourDesc}
          </p>
          <a
            href="/contatti"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            {t.plans.contactUs}
          </a>
        </div>
      </div>
    </div>
  );
}
