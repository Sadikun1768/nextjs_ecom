
export default async function getAllBlogs() {
  const data = await fetch('https://dummyjson.com/posts?limit=10')
  const posts = await data.json()
  return posts;
}