"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "./api/api";

interface Data {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData(
          "https://my-json-server.typicode.com/lucastamburlini/db/posts"
        );
        setData(fetchedData);
      } catch (error) {
        throw new Error("Error with fetching data");
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <main className="p-6 w-full max-w-4xl m-auto">
      {data.map((post: Data) => (
        <article key={post.id} className="py-6 flex flex-col gap-1">
          <Link
            href={`/${post.id}`}
            className="text-3xl font-bold text-white hover:text-orange-500 transition-colors duration-200"
          >
            {post.title}
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </main>
  );
}
