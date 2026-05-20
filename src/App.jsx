/** @format */

import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import PromoSection from "./components/PromoSection";
import MenuSection from "./components/MenuSection";
import DailyDealsSection from "./components/DailyDealsSection";
import Footer from "./components/Footer";
import StoriesList from "./pages/StoriesList";
import StoryDetail from "./pages/StoryDetail";
import About from "./pages/About";

function HomeContent() {
  return (
    <>
      <main className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <HeroSection />
        <PromoSection />
      </main>
      <FeaturedSection />
      <MenuSection />
      <DailyDealsSection />
      <Footer />
    </>
  );
}

function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigateTo = (path) => {
    window.location.hash = path.startsWith("#")
      ? path
      : `#${path.replace(/^\//, "")}`;
  };

  // simple router: #/stories and #/stories/:id
  const renderRoute = () => {
    if (route.startsWith("#/about")) {
      return <About />;
    }

    if (route.startsWith("#/stories")) {
      const parts = route.replace("#", "").split("/");
      const id = parts.length >= 3 ? parts[2] : null;
      if (id) return <StoryDetail id={id} navigateTo={navigateTo} />;
      return <StoriesList navigateTo={navigateTo} />;
    }

    // default / home
    return <HomeContent />;
  };

  return (
    <div className="min-h-screen bg-[#f2e3d7] text-[#3c2417]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-10 lg:px-14">
        <Header />
        {renderRoute()}
      </div>
    </div>
  );
}

export default App;
