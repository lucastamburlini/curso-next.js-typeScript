"use client";
import { useEffect, useState } from "react";
import { Character } from "../lib/definitions";
import Image from "next/image";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchDetailData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = await response.json();
      setCharacter(character);
      setLoading(false);
    }
    fetchDetailData();
  }, []);

  return (
    <section className="">
      {character && (
        <article className="min-h-96 mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:max-w-7xl lg:px-8 justify-center flex">
          <div className="flex items-center w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl justify-center">
            <div className="relative bg-gray-100 flex w-full items-center overflow-hidden px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded">
              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="h-80 aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5 bg-white items-center justify-center flex rounded">
                  <Image
                    src={character.image}
                    alt={character.name}
                    className="max-w-full max-h-full group-hover:opacity-75"
                    width={300}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="h-80 sm:col-span-8 lg:col-span-7 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                    {character.name}
                  </h2>

                  <section className="mt-2 flex flex-col gap-3">
                    {character.status && <li>{character.status}</li>}
                    {character.species && <li>{character.species}</li>}
                    {character.type && <li>{character.type}</li>}
                    {character.gender && <li>{character.gender}</li>}
                    {character.origin.name && <li>{character.origin.name}</li>}
                    {character.location.name && (
                      <li>{character.location.name}</li>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
