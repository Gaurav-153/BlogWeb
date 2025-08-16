import BlogCard from '../components/BlogCard'

// Fetch posts from DummyJSON
async function getPosts() {
  const res = await fetch('https://dummyjson.com/posts')
  if (!res.ok) throw new Error("Failed to fetch posts")
  const data = await res.json()
  return data.posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-10 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          ✨ Latest Blog Posts
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Stay updated with our latest articles on web development, design, and technology trends.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 9).map((post) => (
          <div key={post.id} className="transform transition-all hover:scale-105 hover:-translate-y-1">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  )
}
