"use client";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { fetchDogImage } from "./fetch-dogs";
import Loading from "../loading";

export default function RandomDogPage() {
  const params = useParams();
  const breed = params.breed;
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (breed) {
      fetchDogImage(breed as string).then((imageUrl) => {
        setImageUrl(imageUrl);
      });
    }
  }, [breed]);

  return (
    <>
      <div className="flex flex-col items-center justify-center content-center gap-8 p-8 mx-auto max-w-md">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${breed} Dog`}
            className="w-96 h-96 object-cover rounded-full"
          />
        )}
      </div>
    </>
  );
}
