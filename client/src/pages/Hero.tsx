import HeroBackground from "../components/Hero/HeroBackground";
import HeroContent from "../components/Hero/HeroContent";
import HeroPhoto from "../components/Hero/HeroPhoto";
import ScrollIndicator from "../components/Hero/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 pb-12 overflow-hidden">
      <HeroBackground />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <HeroContent />
          <HeroPhoto />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
