import Image from "next/image";
import Link from "next/link";
import { Character } from "./lib/definitions";

export default async function Home() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  const data = await response.json();
  const characters: Character[] = await data.results;

  return (
    <main>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {characters &&
              characters.map((character) => (
                <li
                  key={character.id}
                  className="flex h-80 min-h-full flex-col aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7"
                >
                  <Link
                    href={`/${character.id}`}
                    className="group flex items-center justify-center h-60 object-cover object-center"
                  >
                    <Image
                      src={character.image}
                      alt={character.name}
                      className="max-w-full max-h-full group-hover:opacity-75"
                      width={300}
                      height={300}
                    />
                  </Link>

                  <div className="p-2">
                    <h3 className="text-lg font-bold text-gray-700">
                      {character.name}
                    </h3>
                    <p className=" font-medium text-gray-900">
                      {character.species}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
