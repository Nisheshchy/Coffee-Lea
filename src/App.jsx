import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import PromoSection from './components/PromoSection'
import MenuSection from "./components/MenuSection";
import DailyDealsSection from './components/DailyDealsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f2e3d7] text-[#3c2417]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-10 lg:px-14">
        <Header />
        <main className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <HeroSection />
          <PromoSection />
        </main>
        <FeaturedSection />
        <MenuSection />
        <DailyDealsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App
