export default async function RandomDogPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  return (
    <>
      <img
        src={data.message}
        alt="Random Dog"
        className="w-1/2 h-[550] object-cover"
      />
    </>
  );
}
