import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from './data';

export default function PostDetail() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) return <Navigate to="/writing" />;

  return (
    <div className="max-w-2xl mx-auto pb-24 font-serif">
      <header className="mb-12">
        <h1 className="font-bold text-4xl mb-2 text-black leading-tight">{post.title}</h1>
        <h3 className="text-gray-400 italic text-lg">{post.date}</h3>
      </header>
      
      {/* This container preserves all original formatting, including poem line breaks */}
      <article className="text-lg leading-[1.8] text-gray-800 whitespace-pre-line selection:bg-gray-200">
        {post.content}
      </article>
    </div>
  );
}