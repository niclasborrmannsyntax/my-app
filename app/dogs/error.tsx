"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-pink-900">
      <h1 className="text-4xl font-bold mb-4">Fehler beim Laden der Seite</h1>
      <p className="text-lg">Bitte versuchen Sie es später erneut.</p>
      <p className="text-sm mt-2 text-pink-700">{error.message}</p>
      <button
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded shadow mt-4"
        onClick={() => reset()}
      >
        Seite neu laden
      </button>
    </div>
  );
}
