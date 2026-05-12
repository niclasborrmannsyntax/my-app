"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchDogImage } from "./fetch-dogs";

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
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Random Dog"
          className="w-1/2 h-[550] object-cover"
        />
      )}
    </>
  );
}
