import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface BlogGalleryProps {
  blogs: Blog[];
}

const BlogCard: React.FC<{ blog: Blog; pageUrl: string }> = ({ blog, pageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-t-lg"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <Link
          href={pageUrl}
          className="text-blue-500 hover:text-blue-600 transition"
        >
          Leer más...
        </Link>
      </div>
    </div>
  );
};

const BlogGallery: React.FC<BlogGalleryProps> = ({ blogs }) => {
  const getPageUrl = (blogId: number) => {
    // Asigna la URL correspondiente según el ID del blog
    return blogId === 1 ? '/BlogPage' : '/BlogPage2';
  };

  return (
    <div className="w-full py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Galería de Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {blogs.map((blog) => (
          <BlogCard 
            key={blog.id} 
            blog={blog} 
            pageUrl={getPageUrl(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGallery;