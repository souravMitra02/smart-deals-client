import React, { useState, useEffect } from 'react';
import { Menu, X, Home, ShoppingBag, Package, Gavel, PlusSquare, UserCircle, LogIn } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, href: '/' },
    { name: 'All Products', icon: <ShoppingBag size={18} />, href: '/allProducts' },
    { name: 'My Products', icon: <Package size={18} />, href: '/my-products' },
    { name: 'My Bids', icon: <Gavel size={18} />, href: '/my-bids' },
    { name: 'Create Product', icon: <PlusSquare size={18} />, href: '/create' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 font-sans ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className="bg-[#8B5CF6] p-1.5 rounded-lg mr-2 group-hover:rotate-6 transition-transform">
                <Gavel className="text-white" size={22} />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Smart<span className="text-[#8B5CF6]">Deals</span>
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-[#8B5CF6] rounded-lg hover:bg-violet-50 transition-all duration-200 text-[14px] font-bold group"
                >
                  <span className="text-slate-400 group-hover:text-[#8B5CF6] transition-colors">
                    {link.icon}
                  </span>
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden lg:flex items-center space-x-3 ml-4">
              <button className="flex items-center gap-2 px-5 py-2 text-slate-700 font-bold text-sm hover:text-[#8B5CF6] transition-colors">
                <LogIn size={18} />
                Login
              </button>
              <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] transition-all active:scale-95">
                Register
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>

          <div 
            className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              <div className="p-5 border-b flex justify-between items-center">
                <span className="font-bold text-xl text-slate-800">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    to={link.href}
                    className="flex items-center gap-4 px-4 py-3.5 text-slate-700 hover:bg-violet-50 hover:text-[#8B5CF6] rounded-xl font-bold transition-all"
                  >
                    <div className="text-[#8B5CF6] bg-violet-50 p-2 rounded-lg">
                      {link.icon}
                    </div>
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="p-5 border-t bg-slate-50 space-y-3">
                <button className="w-full bg-[#8B5CF6] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform">
                  Register Now
                </button>
                <button className="w-full text-slate-700 py-3 rounded-xl font-bold flex justify-center items-center gap-2 border border-slate-200 bg-white shadow-sm">
                  <UserCircle size={20} /> Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;