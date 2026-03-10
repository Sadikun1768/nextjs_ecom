export default async function getBlogs(id) {

  const data = await fetch(

    `https://dummyjson.com/posts/${id}`

    );

  const posts = await data.json()

  return posts;
}
