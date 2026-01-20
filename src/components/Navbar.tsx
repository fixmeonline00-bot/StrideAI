import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'mt-4' : 'mt-0'
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? 'max-w-6xl bg-white/80 backdrop-blur-xl shadow-lg rounded-full px-8 py-4'
            : 'max-w-7xl bg-white/60 backdrop-blur-md rounded-full px-12 py-5'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a
              href="#"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Stride AI
            </a>
          </div>

          <div className="flex items-center space-x-10">
            <a
              href="#products"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Our Products
            </a>
            <a
              href="#partners"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Our Partners
            </a>
            <a
              href="#technology"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Technology
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30'
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
