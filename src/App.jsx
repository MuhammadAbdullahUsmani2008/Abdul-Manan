import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/tokens.css';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <Topbar />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:slug" element={<StoryDetail />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
