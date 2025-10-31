import { Logo } from "./Logo";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#7A6F67]/10">
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FFFFFF] to-[#FBF6F2]" />

      {/* Subtle warm overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(251, 227, 210, 0.3) 100%)",
        }}
      />

      {/* Playful background accents */}
      <div className="absolute inset-0 z-[2] opacity-15">
        <div className="absolute bottom-0 left-[20%] w-56 h-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(247, 123, 114, 0.5), transparent)' }}></div>
        <div className="absolute bottom-0 right-[20%] w-56 h-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(188, 167, 232, 0.5), transparent)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-auto" />
            <div className="w-1 h-1 rounded-full bg-[#D63447]"></div>
            <span className="text-[#7A6F67] text-sm italic" style={{ fontFamily: 'var(--font-serif)' }}>
              where creativity lives
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              className="text-[#7A6F67] hover:text-[#D63447] transition-all hover:scale-110 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#7A6F67] hover:text-[#D63447] transition-all hover:scale-110 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="text-[#7A6F67] hover:text-[#D63447] transition-all hover:scale-110 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Privacy
            </a>
          </nav>
        </div>

        {/* Playful divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#D63447]/30 rounded-full"></div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F77B72]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F3C97B]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#BCA7E8]/40"></div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#D63447]/30 rounded-full"></div>
        </div>

        <div className="text-center">
          <p className="text-[#7A6F67] text-sm flex items-center justify-center gap-2 flex-wrap" style={{ fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} u/skillity
            <span className="text-[#7A6F67]/50">•</span>
            <span className="flex items-center gap-1.5 italic" style={{ fontFamily: 'var(--font-serif)' }}>
              Made with
              <Heart className="w-3.5 h-3.5 text-[#F77B72] fill-[#F77B72] animate-pulse" />
              for creators
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
