"use client";
import { useEffect, useState } from "react";
import { Product } from "../lib/definitions";
import Image from "next/image";
import Spinner from "../ui/Spinner";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  const [productDetail, setProductDetail] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchDetailData() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productDetail = await response.json();
      setProductDetail(productDetail);
      setLoading(false);
    }
    fetchDetailData();
  }, []);

  return (
    <section className="">
      {loading ? (
        <div className="min-h-96 px-4 my-20 m-auto sm:px-6 lg:max-w-7xl lg:px-8 justify-center items-center flex">
          <Spinner/>
        </div>
      ) : (
        productDetail && (
          <article className="min-h-96 mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:max-w-7xl lg:px-8 justify-center flex">
            <div className="flex items-center w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl justify-center">
              <div className="relative bg-gray-100 flex w-full items-center overflow-hidden px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded">
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="h-80 aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5 bg-white items-center justify-center flex rounded">
                    <Image
                      src={productDetail.image}
                      alt={productDetail.title}
                      className="max-w-full max-h-full group-hover:opacity-75 p-2"
                      width={200}
                      height={200}
                      priority={true}
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {productDetail.title}
                    </h2>

                    <section className="mt-2 flex flex-col gap-3">
                      <p className="text-xs">{productDetail.description}</p>

                      <p className="text-2xl text-gray-900">
                        ${productDetail.price}
                      </p>

                      <div className="mt-6">
                        <h4 className="">Reviews</h4>
                        <div className="flex items-center">
                          <p className="">{productDetail.rating.rate} out of 5 stars</p>
                          <a
                            href="#"
                            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {productDetail.rating.count}
                          </a>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )
      )}
    </section>
  );
}
