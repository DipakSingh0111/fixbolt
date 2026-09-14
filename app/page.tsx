import HeroBanner from "./common/HeroBanner";
import AboutSection from "./common/AboutSection";
import CounterSection from "./common/CounterSection";
import ServicesSection from "./common/ServicesSection";
import WorkProcessSection from "./common/WorkProcessSection";
import TeamSection from "./common/TeamSection";
import TestimonialsSection from "./common/TestimonialsSection";
import WhyChooseUs from "./common/WhyChooseUs";
import BlogSection from "./common/BlogSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection showCta />
      <CounterSection />
      <ServicesSection limit={4} />
      <WorkProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <BlogSection limit={4} />
    </>
  );
}
