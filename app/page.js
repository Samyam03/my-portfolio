import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Effects, { SpaceDivider } from './components/Effects';
import GlobalMouseTorch from './components/GlobalMouseTorch';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      <GlobalMouseTorch />
      <Navigation />
      <Hero />
      
      <SpaceDivider />
      
      <Effects intensity="low" planetCount={2} starCount={20} showMouseTorch={false}>
        <About />
      </Effects>
      
      <SpaceDivider />
      
      <Effects intensity="medium" planetCount={2} starCount={25} showMouseTorch={false}>
        <Skills />
      </Effects>
      
      <SpaceDivider />
      
      <Effects intensity="low" planetCount={2} starCount={20} showMouseTorch={false}>
        <Projects />
      </Effects>
      
      <SpaceDivider />
      
      <Effects intensity="medium" planetCount={3} starCount={30} showMouseTorch={false}>
        <Experience />
      </Effects>
      
      <SpaceDivider />
      
      <Effects intensity="medium" planetCount={2} starCount={25} showMouseTorch={false}>
        <Leadership />
      </Effects>
      
      <SpaceDivider />
      
      <Effects intensity="low" planetCount={2} starCount={20} showMouseTorch={false}>
        <Contact />
      </Effects>
      
      <Effects intensity="low" planetCount={1} starCount={15} showMouseTorch={false}>
        <Footer />
      </Effects>
    </main>
  );
}
