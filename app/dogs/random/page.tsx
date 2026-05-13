import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorFallback from "../error";
import { Suspense } from "react";
import Loading from "../loading";

export default async function RandomDogPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  // Simuliere langsame UI.
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  }).then(() => {});

  return (
    <>
      <div className="flex flex-col items-center justify-center content-center gap-8 p-8 mx-auto max-w-md">
        <img
          src={data.message}
          alt="Random Dog"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>
    </>
  );
}
