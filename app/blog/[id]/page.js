// Fetch a single post
async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: 'no-store', // ensures fresh data
  })
  if (!res.ok) {
    throw new Error("Failed to fetch post")
  }
  return res.json()
}

export default async function BlogDetails({ params }) {
  const post = await getPost(params.id)

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags?.map((tag) => (
          <span 
            key={tag} 
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {post.body}
      </p>
    </div>
  )
}
