import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import InquiryForm from "@/components/sections/InquiryForm";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StickyNavigation from "@/components/ui/StickyNavigation";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <StickyNavigation />
      <main className="min-h-screen w-full">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <InquiryForm />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
