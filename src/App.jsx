import Navbar from './components/Navbar.jsx';
import IntroVideo from './components/IntroVideo.jsx';
import ReporterSection from './components/ReporterSection.jsx';
import Footer from './components/Footer.jsx';
// Hidden for now. To bring them back, import them and add them below ReporterSection:
// import { AboutSection, NewsSection, GallerySection, PressSection } from './components/NewsSection.jsx';
// import ContactSection from './components/ContactSection.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#reporters">Skip to reporters</a>
      <Navbar />
      <main>
        <IntroVideo />
        <ReporterSection />
      </main>
      <Footer />
    </>
  );
}