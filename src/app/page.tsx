import DownloadSection from "@/components/DownloadSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
       <FeaturesCarousel />
      {/* <TestimonialsSection /> */}
      <DownloadSection />
      <Footer />
    </main>
  )
}

