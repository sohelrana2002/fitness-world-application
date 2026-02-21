import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="fitness-world-application/" element={<Home />} />
        <Route path="fitness-world-application/about" element={<About />} />
        <Route
          path="fitness-world-application/contact"
          element={<Contacts />}
        />
        <Route path="fitness-world-application/gallery" element={<Gallery />} />
        <Route path="fitness-world-application/plans" element={<Plans />} />
        <Route
          path="fitness-world-application/trainers"
          element={<Trainers />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
