export async function fetchData(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}