import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Effects, { SpaceDivider, GlobalMouseTorch } from './components/Effects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlobalMouseTorch />
      <Navigation />
      <Hero />
      
      <Effects intensity="medium" planetCount={3} starCount={30} showMouseTorch={false}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
        <Footer />
      </Effects>
    </main>
  );
}
