import AwardsSection from "./AwardsSection";
import Designs from "./Designs";
import Hero from "./Hero";
import Partners from "./Partners";
import Projects from "./Projects";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Designs />
      <Services />
      <Projects />
      <Partners />
      <AwardsSection />
    </>
  );
}
