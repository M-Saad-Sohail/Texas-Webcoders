import Navbar from './Components/Navbar';
import Features from './Components/Features';
// import Services from './Components/Services';
import Qualities from './Components/Qualities';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Portfolio from './Components/Portfolio';
import FooterComponent from './Components/Footer/FooterComponent';
import Hero from './Components/Hero';
import Logo from './Components/Logo';
import Reviews from './Components/Reviews';
import Branding from './Components/Branding';
import Packages from './Components/Packages';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Features />
      <Hero />
      <Logo />
      <AboutUs />
      <Slider />
      <Portfolio />
      <Branding />
      <Qualities />
      <Packages />
      <Contact />
      <Reviews />
      <FooterComponent />
    </div>
  );
}

export default App;

