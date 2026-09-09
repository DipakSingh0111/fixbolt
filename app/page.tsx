import HeroBanner from "./common/HeroBanner";
import AboutSection from "./common/AboutSection";
import CounterSection from "./common/CounterSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcessSection from "./components/WorkProcessSection";
import TeamSection from "./common/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection showCta />
      <CounterSection />
      <ServicesSection />
      <WorkProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <BlogSection />
    </>
  );
}
