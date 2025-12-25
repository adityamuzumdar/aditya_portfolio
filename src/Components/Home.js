import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] text-2xl md:text-4xl leading-[1.6] tracking-tight">
      <p>Hi, I am <Link to="/about" className="home-link">Aditya</Link>.</p>
      <p>I write <Link to="/projects" className="home-link">code</Link>.</p>
      <p>I also <Link to="/writing" className="home-link">write</Link> sometimes.</p>
    </div>
  );
}