export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/logo.png" alt="WAPDEV Logo" className="h-6 w-6 opacity-70" />
          <span className="text-xl font-bold text-white/70">WAPDEV</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 WAPDEV — Web & Software Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
