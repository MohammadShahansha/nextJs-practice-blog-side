import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  console.log(blogs);
  return (
    <div>
      <h1 className="text-3xl text-center mt-5">
        Latest Blog from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 my-5 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 mb-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
