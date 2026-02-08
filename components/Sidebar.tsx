import React from 'react';
import { Mail, Phone, MapPin, Calendar, Globe, Award, Languages, Heart } from 'lucide-react';
import { ResumeData } from '../types';

interface SidebarProps {
  data: ResumeData;
}

export const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <aside className="w-full lg:w-96 flex-shrink-0 bg-slate-900 text-slate-100 lg:min-h-screen p-6 lg:p-8 flex flex-col gap-8">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full border-4 border-slate-700 overflow-hidden shadow-2xl mb-6">
          <img 
            src="https://picsum.photos/400/400?grayscale" 
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">{data.name}</h1>
        <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">{data.title}</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 text-sm text-slate-300">
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 mt-1 text-slate-500" />
          <span>{data.contact.birthDate}</span>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="w-4 h-4 mt-1 text-slate-500" />
          <span>{data.contact.nationality}</span>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 mt-1 text-slate-500" />
          <a href={`tel:${data.contact.phone}`} className="hover:text-white transition-colors">
            {data.contact.phone}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 mt-1 text-slate-500" />
          <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors break-all">
            {data.contact.email}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-1 text-slate-500" />
          <span>{data.contact.address}</span>
        </div>
      </div>

      <hr className="border-slate-800" />

      {/* Competencies */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-white">
          <Award className="w-5 h-5 text-blue-500" />
          {data.ui.coreCompetencies}
        </h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {data.coreCompetencies.map((comp, idx) => (
            <li key={idx} className="leading-relaxed">
              • {comp}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-white">
          <Languages className="w-5 h-5 text-blue-500" />
          {data.ui.languages}
        </h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {data.languages.map((lang, idx) => (
            <li key={idx} className="flex justify-between">
              <span className="font-medium text-slate-200">{lang.language}</span>
              <span className="text-slate-500">{lang.proficiency}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Interests */}
      <div>
         <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-white">
          <Heart className="w-5 h-5 text-blue-500" />
          {data.ui.interests}
        </h3>
        <div className="flex flex-wrap gap-2">
            {data.interests.map((interest, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                    {interest}
                </span>
            ))}
        </div>
      </div>
    </aside>
  );
};