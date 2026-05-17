const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-linear-to-b from-transparent to-slate-900/20">
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6">
        <p className="text-gray-400 text-xs sm:text-sm text-center">
          © {currentYear} Samyam Bhattarai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
