import React from 'react';
import { Briefcase, GraduationCap, User, Code, Database, Cpu } from 'lucide-react';
import { ResumeData } from '../types';

interface MainContentProps {
  data: ResumeData;
}

export const MainContent: React.FC<MainContentProps> = ({ data }) => {
  return (
    <main className="flex-1 p-8 lg:p-16 max-w-4xl mx-auto">
      
      {/* Profile Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-6 flex items-center gap-3">
          <User className="w-6 h-6 text-slate-600" />
          {data.ui.profile}
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg text-justify">
          {data.profile}
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-8 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-slate-600" />
          {data.ui.experience}
        </h2>
        <div className="space-y-12">
          {data.experience.map((job) => (
            <div key={job.id} className="relative border-l-2 border-slate-200 pl-8 ml-3">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white" />
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                <h3 className="text-xl font-bold text-slate-800">
                  {job.role}
                  {job.context && <span className="text-blue-600 ml-2 font-normal">– {job.context}</span>}
                </h3>
                <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>

              {/* General Description */}
              {job.description.length > 0 && (
                <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-slate-600">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}

              {/* Subsections (for the first job) */}
              {job.subSections && (
                <div className="space-y-6 mt-4">
                  {job.subSections.map((sub, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-slate-800 mb-2">{sub.title}</h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600">
                        {sub.items.map((item, j) => (
                          <li key={j}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-slate-600" />
            {data.ui.education}
        </h2>
        <div className="space-y-8">
            {data.education.map((edu) => (
                <div key={edu.id} className="relative border-l-2 border-slate-200 pl-8 ml-3">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white" />
                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                        <h3 className="text-xl font-bold text-slate-800">{edu.institution}</h3>
                        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0">{edu.period}</span>
                     </div>
                     <p className="text-blue-700 font-medium mb-2">{edu.degree}</p>
                     <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 text-sm">
                        {edu.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                     </ul>
                </div>
            ))}
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-8 flex items-center gap-3">
          <Cpu className="w-6 h-6 text-slate-600" />
          {data.ui.skillsAndTools}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-slate-400" /> {data.ui.programmingLanguages}
                </h3>
                <div className="space-y-4">
                    {data.skills.map((skillGroup, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-slate-800">{skillGroup.category}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.skills.map((s, i) => (
                                    <span key={i} className="text-xs text-slate-500">{s}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools */}
             <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-slate-400" /> {data.ui.devTools}
                </h3>
                <div className="space-y-4">
                    {data.tools.map((toolGroup, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                             <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-slate-800 text-sm uppercase tracking-wider">{toolGroup.category}</span>
                            </div>
                             <div className="flex flex-wrap gap-2">
                                {toolGroup.tools.map((t, i) => (
                                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium border border-slate-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};