import React from "react";
import { Link } from "react-router";
import { Gavel, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#021526] text-slate-300 font-sans mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">         
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4 group">
              <div className="bg-[#8B5CF6] p-1.5 rounded-lg mr-2 group-hover:rotate-6 transition-transform">
                <Gavel className="text-white" size={20} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Smart<span className="text-[#8B5CF6]">Deals</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted marketplace for authentic local products. Discover the best deals from across Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/allProducts" className="hover:text-[#8B5CF6] transition-colors">All Products</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#8B5CF6] transition-colors">Dashboard</Link></li>
              <li><Link to="/login" className="hover:text-[#8B5CF6] transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-[#8B5CF6] transition-colors">Register</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-[#8B5CF6] transition-colors">Electronics</Link></li>
              <li><Link to="#" className="hover:text-[#8B5CF6] transition-colors">Fashion</Link></li>
              <li><Link to="#" className="hover:text-[#8B5CF6] transition-colors">Home & Living</Link></li>
              <li><Link to="#" className="hover:text-[#8B5CF6] transition-colors">Groceries</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Contact & Support</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#8B5CF6]" />
                  <span>support@Smartdeals.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#8B5CF6]" />
                  <span>+880 123 456 789</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#8B5CF6] mt-1" />
                  <span>123 Commerce Street, <br />Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#8B5CF6] hover:text-white transition-all transform hover:-translate-y-1">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#8B5CF6] hover:text-white transition-all transform hover:-translate-y-1">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#8B5CF6] hover:text-white transition-all transform hover:-translate-y-1">
                  <FaFacebookF size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SmartDeals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;