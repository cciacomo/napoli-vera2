import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { Homepage } from "@/app/pages/Homepage";
import { Piano } from "@/app/pages/Piano";
import { ChiSiamo } from "@/app/pages/ChiSiamo";
import { Contatti } from "@/app/pages/Contatti";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/piani" element={<Piano />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/contatti" element={<Contatti />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
