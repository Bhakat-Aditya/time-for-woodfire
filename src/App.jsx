import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from './pages/Contact';

// Simple Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-orange-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-orange-500">
            TIME FOR WOODFIRE
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile Menu Button - You can add logic here */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-500 font-bold"
            >
              MENU
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4">
          <MobileLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileLink>
          <MobileLink to="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </MobileLink>
          <MobileLink to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </MobileLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:text-orange-400 px-3 py-2 rounded-md text-lg font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block hover:text-orange-400 px-3 py-2 text-lg font-medium"
  >
    {children}
  </Link>
);

const Footer = () => (
  <footer className="bg-zinc-900 text-gray-400 py-8 text-center mt-auto">
    <p>© 2026 Time for Woodfire. Midnapore, West Bengal.</p>
    <p className="text-sm mt-2">Authentic Woodfired Pizza</p>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
