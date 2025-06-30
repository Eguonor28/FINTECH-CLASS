import { react, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <header className="flex justify-between items-center mb-20">
        <a href="/">
          <div className="text-2xl font-bold text-indigo-400">Budgetapp</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/" className="hover:text-indigo-600 flex items-center gap-1">
            Home
          </a>
          <a
            href="/dashboard"
            className="hover:text-indigo-600 flex items-center gap-1"
          >
            Income
          </a>
          <a
            href="/dashboard"
            className="hover:text-indigo-600 flex items-center gap-1"
          >
            Expenses
          </a>

          <a
            href="/dashboard"
            className="hover:text-indigo-600 flex items-center gap-1"
          >
            Dashboard
          </a>
        </nav>
        <button className="px-6 py-3 hidden md:flex bg-indigo-400 text-white rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-20 right-6 bg-white shadow-lg rounded-lg p-4 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="hover:text-indigo-600 flex items-center gap-2"
              >
                Home
              </a>
              <a
                href="/dashboard"
                className="hover:text-indigo-600 flex items-center gap-2"
              >
                Income
              </a>
              <a
                href="/dashboard"
                className="hover:text-indigo-600 flex items-center gap-2"
              >
                Expenses
              </a>

              <a
                href="/dashboard"
                className="hover:text-indigo-600 flex items-center gap-2"
              >
                Dashboard
              </a>
            </div>
          </motion.nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
