import About from "../UI/About";
import Contact from "../UI/Contact";
import Hero from "../UI/Hero";
import Portfolio from "../UI/Portfolio";
import Services from "../UI/Services";
import Testimonial from "../UI/Testimonial";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  )
}
