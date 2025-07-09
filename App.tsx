
import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { PROJECTS } from './constants';
import { CpuChipIcon, CubeTransparentIcon, YoutubeIcon, TiktokIcon, FacebookIcon } from './components/icons';

const socialLinks = [
  { name: 'YouTube', href: 'https://www.youtube.com/@ABAII-2024', Icon: YoutubeIcon },
  { name: 'TikTok', href: 'https://www.tiktok.com/@taisanso.abaii', Icon: TiktokIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/ABAIIacademy', Icon: FacebookIcon },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-slate-800 overflow-x-hidden">
      {/* Light Blue Gradient Background */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-sky-50 to-sky-200"
      ></div>

      <Header />

      <main className="container mx-auto px-6 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-full mb-6 filter drop-shadow-[0_0_15px_rgba(56,189,248,0.25)] border border-sky-200">
             <CpuChipIcon className="w-12 h-12 text-aba-blue" />
             <CubeTransparentIcon className="w-12 h-12 text-aba-green" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            <span className="bg-gradient-to-br from-aba-blue to-aba-green bg-clip-text text-transparent">
              ABAII SPACE
            </span>
          </h1>
          <div className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            <p>
              Không gian với những dự án tổng hợp về AI và Blockchain miễn phí Vì cộng đồng, nhằm phổ cập AI & Blockchain đến hơn 1 triệu người dân Việt Nam.
            </p>
            <p className="mt-3 font-medium text-slate-700 text-sm sm:text-base">
              Được phát triển, vận hành và bảo trợ bởi Viện Công nghệ Blockchain và Trí tuệ nhân tạo ABAII
            </p>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-8">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-slate-500 hover:text-sky-500 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 px-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
        <p className="text-slate-500 text-sm">
          Phát triển và vận hành bởi Bộ phận Đào tạo - Viện Công nghệ Blockchain và Trí tuệ nhân tạo ABAII
        </p>
      </footer>
    </div>
  );
};

export default App;