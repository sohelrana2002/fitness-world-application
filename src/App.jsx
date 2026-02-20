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
        <Route exact path="fitness-world/" element={<Home />} />
        <Route path="fitness-world/about" element={<About />} />
        <Route path="fitness-world/contact" element={<Contacts />} />
        <Route path="fitness-world/gallery" element={<Gallery />} />
        <Route path="fitness-world/plans" element={<Plans />} />
        <Route path="fitness-world/trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
