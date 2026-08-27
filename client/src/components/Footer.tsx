export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src="/wapdev-logo.png" alt="WAPDEV Logo" className="h-8 w-8 object-contain opacity-90" />
          <span className="text-xl font-bold tracking-tight text-white/90">WAPDEV</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 WAPDEV — Web & Software Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
