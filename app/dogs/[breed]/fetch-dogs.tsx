export async function fetchDogImage(breed: string) {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const data = await res.json();
  return data.message;
}
