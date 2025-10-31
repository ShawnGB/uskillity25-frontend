import { Logo } from "./Logo";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t" style={{ borderColor: 'var(--border)' }}>
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-[var(--background)]" />

      {/* Subtle warm overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(251, 227, 210, 0.3) 100%)",
        }}
      />

      {/* Playful background accents */}
      <div className="absolute inset-0 z-[2] opacity-15">
        <div className="absolute bottom-0 left-[20%] w-56 h-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--color-art), transparent)' }}></div>
        <div className="absolute bottom-0 right-[20%] w-56 h-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--color-mind), transparent)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-auto" />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
            <span className="text-sm italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--muted-foreground)' }}>
              where creativity lives
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              className="transition-all hover:scale-110 text-sm link-hover-primary"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)' }}
            >
              About
            </a>
            <a
              href="#contact"
              className="transition-all hover:scale-110 text-sm link-hover-primary"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)' }}
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="transition-all hover:scale-110 text-sm link-hover-primary"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)' }}
            >
              Privacy
            </a>
          </nav>
        </div>

        {/* Playful divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(to right, transparent, rgba(214, 52, 71, 0.3))' }}></div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-art)', opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-community)', opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-mind)', opacity: 0.4 }}></div>
          </div>
          <div className="w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(to left, transparent, rgba(214, 52, 71, 0.3))' }}></div>
        </div>

        <div className="text-center">
          <p className="text-sm flex items-center justify-center gap-2 flex-wrap" style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)' }}>
            © {new Date().getFullYear()} u/skillity
            <span style={{ opacity: 0.5 }}>•</span>
            <span className="flex items-center gap-1.5 italic" style={{ fontFamily: 'var(--font-serif)' }}>
              Made with
              <Heart className="w-3.5 h-3.5 animate-pulse" style={{ color: 'var(--color-art)', fill: 'var(--color-art)' }} />
              for creators
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
