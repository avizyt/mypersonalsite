import { BlogPosts } from "@/components/posts";

const Blog = () => {
  return (
    <div>
      <main className="min-h-screen p-6">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4">Welcome to my blog! Stay tuned for updates.</p>
        <BlogPosts />
      </main>
    </div>
  );
};

export default Blog;
