import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { GermanCourses } from './pages/GermanCourses';
import { A1Course } from './pages/A1Course';
import { A2Course } from './pages/A2Course';
import { B1Course } from './pages/B1Course';
import { B2Course } from './pages/B2Course';
import { C1Course } from './pages/C1Course';
import { C2Course } from './pages/C2Course';
import { StudyInGermany } from './pages/StudyInGermany';
import { Ausbildung } from './pages/Ausbildung';
import { Trainers } from './pages/Trainers';
import { Testimonials } from './pages/Testimonials';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { BookDemo } from './pages/BookDemo';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-white">
      <ScrollToTopOnNavigate />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<GermanCourses />} />
          <Route path="/courses/a1" element={<A1Course />} />
          <Route path="/courses/a2" element={<A2Course />} />
          <Route path="/courses/b1" element={<B1Course />} />
          <Route path="/courses/b2" element={<B2Course />} />
          <Route path="/courses/c1" element={<C1Course />} />
          <Route path="/courses/c2" element={<C2Course />} />
          <Route path="/study-in-germany" element={<StudyInGermany />} />
          <Route path="/ausbildung" element={<Ausbildung />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-demo" element={<BookDemo />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default App;
