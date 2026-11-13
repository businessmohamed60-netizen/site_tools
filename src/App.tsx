import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pack from "./components/Pack";
import Organisation from "./components/Organisation";
import MarqueBlanche from "./components/MarqueBlanche";
import DocumentsGuides from "./components/DocumentsGuides";
import Videos from "./components/Videos";
import Pricing from "./components/Pricing";
import Public from "./components/Public";
import QuoteForm from "./QuoteForm";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import { Reveal } from "./components/Reveal";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Pack />
        <Organisation />
        <MarqueBlanche />
        <DocumentsGuides />
        <Videos />
        <Pricing />
        <Public />

        <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Parlons de votre projet
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                Vous souhaitez découvrir le pack, obtenir un devis ou passer à l'achat ? Envoyez-nous
                votre demande.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-12">
              <QuoteForm />
            </Reveal>
          </div>
        </section>

        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
