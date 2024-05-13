import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contacts  />} />
        <Route path='gallery' element={<Gallery  />} />
        <Route path='plans' element={<Plans  />} />
        <Route path='trainers' element={<Trainers  />} />
        <Route path='*' element={<NotFound  />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
