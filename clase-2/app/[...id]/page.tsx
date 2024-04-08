import { fetchData } from "../api/api";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const post = await fetchData(`https://my-json-server.typicode.com/lucastamburlini/db/posts/${id}`)
  return (
    <main className="p-6 w-full max-w-4xl m-auto">
    <article className="p-6 border rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <h3 className="text-lg font-semibold mb-2">{post.description}</h3>
        <p className="text-gray-400">{post.content}</p>
      </article>
    </main>
  );
}
