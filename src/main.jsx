import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './index.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Error from './pages/Error';
import Logement from './pages/Logement';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Logement' element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
