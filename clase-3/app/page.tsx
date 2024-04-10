import Image from "next/image";
import Link from "next/link";

async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default async function Home() {
  const products: Products[] = await fetchData();
 
  return (
    <main>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={`/${product.id}`} className="group">
                <div className="h-80 items-center justify-center flex aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="max-w-full object-cover object-center group-hover:opacity-75 p-3"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
