import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream dark:bg-[#221933]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Languages />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
