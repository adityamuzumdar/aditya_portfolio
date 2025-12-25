import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-24">
      {!isHome && (
        <nav className="mb-20 flex items-center gap-2 text-sm italic text-gray-400">
          <Link to="/" className="hover:text-black transition-colors">index</Link>
          <span>/</span>
          <span className="text-black not-italic font-medium">
            {location.pathname.split('/')[1]}
          </span>
        </nav>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
}