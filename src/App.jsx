import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ScrollToTop from "./components/About/ScrollToTop";
import IntroHeader from "./components/IntroHeader/IntroHeader";
import Service from "./components/ServiceSection/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <IntroHeader />
      <Service />
      <Portfolio />
      <Testimonial />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
