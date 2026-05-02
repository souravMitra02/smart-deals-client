import React, { useContext, useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Package,
  Gavel,
  PlusSquare,
  UserCircle,
  LogOut,
} from "lucide-react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, googleSignOut } = useContext(AuthContext);
console.log(user);
  const handleSignOut = () => {
    googleSignOut()
      .then(() => setIsOpen(false))
      .catch((error) => console.log(error));
  };

  const navLinks = [
  { name: "Home", icon: <Home size={18} />, href: "/" },
  { name: "All Products", icon: <ShoppingBag size={18} />, href: "/all-products" },
  ...(user ? [
    { name: "My Products", icon: <Package size={18} />, href: "/my-products" },
    { name: "My Bids", icon: <Gavel size={18} />, href: "/my-bids" },
    { name: "Create Product", icon: <PlusSquare size={18} />, href: "/create" },
  ] : [])
];

  return (
    <>
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 font-sans bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className="bg-[#8B5CF6] p-1.5 rounded-lg mr-2 group-hover:rotate-6 transition-transform">
                <Gavel className="text-white" size={22} />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Smart<span className="text-[#8B5CF6]">Deals</span>
              </span>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-[14px] font-bold group ${
                      isActive
                        ? "text-[#8B5CF6] bg-violet-50"
                        : "text-slate-600 hover:text-[#8B5CF6] hover:bg-violet-50"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  {user?.photoURL && (
                    <img title={user?.displayName} src={user?.photoURL
} alt="User" className="w-9 h-9 rounded-full border border-violet-200 shadow-sm" />
                  )}
                  <button
                    onClick={handleSignOut}
                    className="text-slate-700 py-2 px-4 rounded-xl font-bold flex items-center gap-2 border border-slate-200 bg-white hover:bg-red-50 hover:text-red-600 transition-all active:scale-95"
                  >
                    LogOut <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    className="text-slate-700 font-bold hover:text-[#8B5CF6] transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-[#8B5CF6] text-white px-5 py-2.5 rounded-xl font-bold shadow-md hover:bg-[#7c4df2] transition-all active:scale-95"
                  >
                    Register
                  </Link>
                </div>
              )}
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
        <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
          <div
            className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex flex-col h-full">
              <div className="p-5 border-b flex justify-between items-center">
                <span className="font-bold text-xl text-slate-800">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${
                        isActive ? "bg-violet-50 text-[#8B5CF6]" : "text-slate-700 hover:bg-violet-50 hover:text-[#8B5CF6]"
                      }`
                    }
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div className="p-5 border-t bg-slate-50 space-y-3">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="w-full text-red-600 py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 border border-red-100 bg-white shadow-sm transition-transform active:scale-95"
                  >
                    LogOut <LogOut size={20} />
                  </button>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="block text-center w-full bg-[#8B5CF6] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                    >
                      Register Now
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-slate-700 py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 border border-slate-200 bg-white shadow-sm active:scale-95 transition-transform"
                    >
                      <UserCircle size={20} /> Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;