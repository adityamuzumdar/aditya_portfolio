import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Writing from './Components/Writing';
import PostDetail from './Components/PostDetail'; // You'll create this to render post content

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "writing", element: <Writing /> },
      { path: "writing/:postId", element: <PostDetail /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);