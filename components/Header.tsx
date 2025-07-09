import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjav4kQl17YheOgXgys6kNtdL8LnfZXyvoxqsqhhXM7i_G2mJ7KHBQ21imTfq_mGln0RmjVwl0ai5YCzyUj9pXFGOPa4es34PreOLSLmF34k3I6O_C0-Ix51awP_10yzAKnBQTtiOXwX-VETving_VhvbyQuxf1wfcaPKDTQ3XUmQb4fWB5Qy2TTyW36-w/s541/ABAII-logo-VN-e1713623831815.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
        ? 'py-3 shadow-lg bg-white/70 backdrop-blur-lg border-b border-slate-900/10' 
        : 'py-6'
      }`}
    >
      <div className="container mx-auto flex justify-center items-center opacity-0 animate-fadeInUp">
        <div className="relative group">
          <div
            className={`absolute -inset-3 bg-sky-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300 ${
              isScrolled ? 'group-hover:opacity-40' : ''
            }`}
            aria-hidden="true"
          ></div>
          <a
            href="https://abaii.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block"
            aria-label="ABAII Homepage"
          >
            <img
              src={logoUrl}
              alt="ABAII Logo"
              className={`transition-all duration-300 ease-in-out group-hover:scale-105 ${
                isScrolled ? 'h-10' : 'h-12'
              }`}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;