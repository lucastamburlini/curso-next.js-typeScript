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
          "https://my-json-server.typicode.com/lucastamburlini/db-fake/posts"
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
