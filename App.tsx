import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { resumeDataDe, resumeDataEn, resumeDataZh } from './data';
import { Globe } from 'lucide-react';

type Lang = 'de' | 'en' | 'zh';

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
];

function App() {
  const [lang, setLang] = useState<Lang>('de');

  const dataMap: Record<Lang, typeof resumeDataDe> = {
    de: resumeDataDe,
    en: resumeDataEn,
    zh: resumeDataZh,
  };

  const currentData = dataMap[lang];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row relative">

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg rounded-full px-2 py-1 print-hide">
        <Globe className="w-4 h-4 text-slate-500 ml-1 mr-1 shrink-0" />
        {LANGUAGES.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${lang === code
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

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
