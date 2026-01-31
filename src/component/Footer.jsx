// src/components/Footer.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const location = useLocation();

  // Configuration: define exactly where the footer should appear
  // Note: We check for exact paths to avoid it showing on sub-pages if you don't want it there
  const allowedPaths = ["/", "/menu", "/gallery"];

  // If the current path is NOT in our allowed list, render nothing
  if (!allowedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <h3 className="text-2xl font-black text-orange-500 mb-4 tracking-tighter">
            TIME FOR WOODFIRE
          </h3>
          <p className="mb-4 text-zinc-500">
            Authentic wood-fired pizza made with passion and 48-hour fermented
            dough in the heart of Midnapore.
          </p>
          <div className="flex space-x-4">
            <SocialIcon icon={<Instagram size={20} />} href="#" />
            <SocialIcon icon={<Facebook size={20} />} href="#" />
            <SocialIcon icon={<Twitter size={20} />} href="#" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/menu">Our Menu</FooterLink>
            </li>
            <li>
              <FooterLink to="/gallery">Gallery</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Visit Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="text-orange-500 flex-shrink-0" size={20} />
              <span>
                Sepoy Bazar Rd, Midnapore,
                <br />
                West Bengal 721101
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-orange-500 flex-shrink-0" size={20} />
              <span>+91 12345 67890</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
        <p>
          © {new Date().getFullYear()} Time for Woodfire. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Helper Components for clean code
const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <Link to={to} className="hover:text-orange-500 transition-colors">
    {children}
  </Link>
);
