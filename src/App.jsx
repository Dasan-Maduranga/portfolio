import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillnetProject from "./pages/SkillnetProject";
import Footer from "./components/Footer";


const Landing = () => (
  <>
    <Navbar />
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="services"><Services /></section>
    <section id="skills"><Skills /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
    <Footer />
  </>
);

export default function App() {
  return (
    <div className="bg-[#020b1a] text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/skillnet" element={<SkillnetProject />} />
      </Routes>
    </div>
  );
}
