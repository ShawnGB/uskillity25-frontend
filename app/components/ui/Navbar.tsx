import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(8px)" : "none",
          boxShadow: isScrolled ? "0 2px 12px rgba(180, 130, 110, 0.08)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(233, 106, 74, 0.1)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="cursor-pointer"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo
                className="h-8 w-auto"
                color="#D63447"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("purpose")}
                className="transition-all hover:scale-105 duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  color: "rgba(40, 40, 40, 0.85)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#D63447"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(40, 40, 40, 0.85)"}
              >
                Purpose
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="transition-all hover:scale-105 duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  color: "rgba(40, 40, 40, 0.85)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#D63447"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(40, 40, 40, 0.85)"}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="transition-all hover:scale-105 duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  color: "rgba(40, 40, 40, 0.85)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#D63447"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(40, 40, 40, 0.85)"}
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("join")}
                className="text-white px-6 py-2.5 rounded-full hover:scale-105 transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #E8495F 0%, #D63447 25%, #D63447 100%)',
                  boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 2px 4px rgba(214, 52, 71, 0.15)",
                }}
              >
                <span className="text-sm mr-1.5">✨</span>
                Join
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              style={{ color: "rgba(40, 40, 40, 0.85)" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-[#D8D8D8]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-[#7A6F67] hover:text-[#D63447] transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("purpose")}
                className="block w-full text-left text-[#7A6F67] hover:text-[#D63447] transition-colors py-2"
              >
                Purpose
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-[#7A6F67] hover:text-[#D63447] transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("join")}
                className="block w-full text-left text-[#7A6F67] hover:text-[#D63447] transition-colors py-2"
              >
                Join
              </button>
              <Button
                onClick={() => scrollToSection("join")}
                className="w-full text-white rounded-full shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #E8495F 0%, #D63447 25%, #D63447 100%)',
                  boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 2px 4px rgba(214, 52, 71, 0.15)",
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
