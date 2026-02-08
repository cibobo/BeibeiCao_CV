import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { resumeDataDe, resumeDataEn } from './data';
import { Globe } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  
  const toggleLang = () => {
    setLang(prev => prev === 'de' ? 'en' : 'de');
  };

  const currentData = lang === 'de' ? resumeDataDe : resumeDataEn;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row relative">
      
      {/* Language Switcher */}
      <button 
        onClick={toggleLang}
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg px-4 py-2 rounded-full font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all flex items-center gap-2 print-hide"
      >
        <Globe className="w-4 h-4" />
        <span>{lang === 'de' ? 'EN' : 'DE'}</span>
      </button>

      <Sidebar data={currentData} />
      <div className="flex-1 lg:h-screen lg:overflow-y-auto scroll-smooth">
        <MainContent data={currentData} />
        
        {/* Footer for Print/Screen */}
        <footer className="p-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-8 lg:mx-16">
          <p>© {new Date().getFullYear()} {currentData.name}. {currentData.ui.copyright}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;