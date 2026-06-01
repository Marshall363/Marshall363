import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhyCatchaflight from "@/components/sections/WhyCatchaflight";
import TheDifference from "@/components/sections/TheDifference";
import HowItWorks from "@/components/sections/HowItWorks";
import PopularDestinations from "@/components/sections/PopularDestinations";
import AirlineSupport from "@/components/sections/AirlineSupport";
import Testimonials from "@/components/sections/Testimonials";
import BookingSupport from "@/components/sections/BookingSupport";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyCatchaflight />
        <TheDifference />
        <HowItWorks />
        <PopularDestinations />
        <AirlineSupport />
        <Testimonials />
        <BookingSupport />
        <FAQ />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
