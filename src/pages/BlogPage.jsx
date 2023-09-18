import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Software Development",
    author: "John Doe",
    date: "July 20, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus sed magna ultrices convallis. Proin ut quam at erat rhoncus dignissim. Nulla a mi sagittis, elementum nisl vitae, ultrices nulla.",
  },
  {
    id: 2,
    title: "10 Best Practices for Frontend Development",
    author: "Jane Smith",
    date: "July 15, 2023",
    content:
      "Integer rutrum, mauris a gravida maximus, justo dolor gravida massa, ac dapibus ligula velit eget metus. Suspendisse potenti. Sed ut quam quam.",
  },
];

const BlogPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
            Blog
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-2">
                  By {post.author} - {post.date}
                </p>
                <p className="text-gray-600">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
