import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './index.css'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
