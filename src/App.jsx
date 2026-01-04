import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CalculatorPage from "./pages/CalculatorPage";
import OtherCalculatorsHome from "./pages/OtherCalculatorsHome";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MathCalculatorsHome from "./pages/MathCalculatorsHome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       

        <Route path="/calculators" element={<OtherCalculatorsHome />} />

        <Route path="/:slug" element={<CalculatorPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/math-calculators" element={<MathCalculatorsHome />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
