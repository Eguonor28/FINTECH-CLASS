import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Homepage = () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  const wordVariants = ["Income", "Expenses", "Budget"];

  const [wordIndex, setWordIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % wordVariants.length);
    }, 2000);

    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-6 py-4 max-w-7xl mx-auto">
      {/* navbar  */}
      <Navbar />
      {/* main section  */}
      <main className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-7xl font-medium mb-6">
            Budgetapp helps you track and manage{" "}
            <motion.span
              key={wordIndex}
              className="text-indigo-400 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {wordVariants[wordIndex]}
            </motion.span>{" "}
          </h1>
          <p className="text-md mb-8 text-gray-700">
            Budgetapp helps you stay on top of your expenses, set financial
            goals, and make smarter spending.
          </p>
          <div className="flex gap-4">
            <Link to={"/dashboard"}>
              <button className="px-6 py-3 bg-indigo-400 text-white rounded hover:bg-indigo-500 transition">
                Get Started
              </button>
            </Link>
            <button className="px-6 py-3 border border-indigo-400 rounded hover:bg-indigo-50 transition">
              Contact us
            </button>
          </div>
        </div>
        <div className="relative w-full pl-6 md:w-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageIndex}
              src={images[imageIndex]}
              alt="Financial Artwork"
              className="w-full md:w-130 h-150 object-cover rounded shadow-lg"
              style={{
                x: useTransform(mouseX, [0, window.innerWidth], [-20, 20]),
                y: useTransform(mouseY, [0, window.innerHeight], [-20, 20]),
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
