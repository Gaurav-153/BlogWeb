import Link from "next/link"

export default function BlogCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Blog Image from API */}
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      )}

      {/* Blog Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
          {post.body}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span 
              key={tag} 
              className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link 
          href={`/blog/${post.id}`} 
          className="text-blue-600 dark:text-blue-400 hover:underline mt-auto pt-3 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}
