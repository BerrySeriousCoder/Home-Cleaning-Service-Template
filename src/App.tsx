import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import SchedulePage from './pages/SchedulePage';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <Router>
      <Header /> 
      <div style={{ display: 'flex', flexDirection : 'column' , justifyContent: 'center', alignItems: 'center', width : '100vw' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
      <Footer></Footer>
       </div>
    </Router>
  );
}

export default App;