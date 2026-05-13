import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-16 items-center justify-center min-h-[60vh] text-8xl">
      🐕 🐩 🦮
      <Link
        href="/dogs"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow text-sm"
      >
        Go to Dogs
      </Link>
    </main>
  );
}
