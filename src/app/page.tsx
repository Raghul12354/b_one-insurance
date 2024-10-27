import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Services from "./services/page";
import WhyChooseUs from "./whyChooseUs/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
