import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './data';

export default function Writing() {
  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <Link key={post.id} to={`/writing/${post.id}`} className="group block">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between">
            <h2 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
              {post.title}
            </h2>
            <span className="text-sm italic text-gray-400">{post.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}