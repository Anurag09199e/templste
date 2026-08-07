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
