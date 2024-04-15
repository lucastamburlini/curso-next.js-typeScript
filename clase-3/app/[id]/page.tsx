"use client";
import { useEffect } from "react";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  useEffect(() => {
    function fetchDetailData() {
      console.log(id);
    }
    fetchDetailData();
  }, []);

  return <div>My post: {params.id}</div>;
}
