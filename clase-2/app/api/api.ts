export async function fetchData(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPostData(id: number) {
  const url = `https://my-json-server.typicode.com/lucastamburlini/db-fake/posts/${id}`;
  return fetchData(url);
}

export async function getAllPostsData() {
  const url = `https://my-json-server.typicode.com/lucastamburlini/db-fake/posts`;
  return fetchData(url);
}
