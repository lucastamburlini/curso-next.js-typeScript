import Link from "next/link";
import { getAllPostsData } from "./api/api";

interface Data {
  id: number;
  title: string;
  description: string;
}

export default async function Home() {
  const data = await getAllPostsData();
  return (
    <main className="p-6 w-full max-w-4xl m-auto">
      {data.map((post: Data) => (
        <article key={post.id} className="py-6">
          <Link href={`/${post.id}`} className="text-3xl font-bold mb-3 ">
            {post.title}
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </main>
  );
}
