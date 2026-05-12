"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DogPage() {
  const [breed, setBreed] = useState("");
  const router = useRouter();

  const handleGo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (breed.trim()) {
      router.push(`/dogs/${breed}`);
    } else {
      router.push("/dogs/random");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 p-8 mx-auto max-w-md mt-12">
      <form
        onSubmit={handleGo}
        className="flex flex-col items-center gap-3 w-full"
      >
        <input
          id="breed"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="enter breed name or leave empty for random"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow w-full mt-2"
        >
          Create Image
        </button>
      </form>
      <a
        href="https://dog.ceo/dog-api/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-4 hover:text-blue-800"
      >
        Dog CEO API Docs ↗
      </a>
    </div>
  );
}
