'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();





  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-sm text-center">
            © {currentYear} Samyam Bhattarai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 