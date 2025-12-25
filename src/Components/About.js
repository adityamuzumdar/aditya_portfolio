import React from 'react';
import { CiMail } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <div className="max-w-2xl font-serif selection:bg-gray-200">
      <div className="text-lg leading-[1.8] text-gray-800">
        <p>
          I see building as a way of giving meaning to both work and life. 
          Technology enables this by letting ideas take form as software—systems that can 
          quietly improve how people live and work. I currently write software at Hilti, 
          and beyond work I spend time tinkering, learning, and reading. Philosophy keeps me 
          engaged: not just what we build, but why we build it and who it serves. For me, the 
          real goal is to write software that benefits humanity while remaining conscious of 
          its moral weight.
        </p>

        <blockquote className="border-l border-black pl-6 py-1 italic text-gray-900 mt-16 mb-12">
          “What we do now echoes in eternity.” 
          <span className="block mt-3 not-italic font-bold text-xs uppercase tracking-[0.2em] text-gray-400">— Marcus Aurelius</span>
        </blockquote>
      </div>

      <div className="flex gap-6 text-2xl mt-12 text-black">
        <a href="mailto:adityamuzumdar11@gmail.com" className="hover:text-gray-400 transition-colors" aria-label="Email">
          <CiMail />
        </a>
        <a href="https://github.com/adityamuzumdar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="GitHub">
          <DiGithubBadge />
        </a>
        <a href="https://x.com/aditweets1104" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="X (Twitter)">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
}