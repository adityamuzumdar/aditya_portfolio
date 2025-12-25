import React from 'react';
import { experience, projects } from './data';

export default function Projects() {
  return (
    <div className="max-w-2xl font-serif pb-20 selection:bg-gray-200">
      {/* Work Experience Section */}
      <section className="mb-24">
        <h2 className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-sans mb-12 border-b border-gray-100 pb-2">
          Experience
        </h2>
        <div className="space-y-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 items-baseline">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black leading-none">
                  {exp.company}
                </span>
                <span className="text-gray-500 italic text-sm mt-2">
                  {exp.role}
                </span>
              </div>
              <span className="text-sm italic text-gray-400 font-sans">
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects Section */}
      <section>
        <h2 className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-sans mb-12 border-b border-gray-100 pb-2">
          Selected Projects
        </h2>
        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <div key={idx}>
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <span className="text-xl font-bold text-black underline decoration-1 underline-offset-4 hover:decoration-2 transition-all">
                  {proj.title}
                </span>
              </a>
              <p className="text-sm text-gray-400 italic mt-1 font-sans">
                {proj.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}