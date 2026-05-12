async function handleSubmit(formData: FormData) {
  "use server";

  const name = formData.get("name");
  console.log("Eingegebener Name:", name);
  // Hier DB/FS/API Logik aufrufen
}

export default function Form() {
  return (
    <form action={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        required
        className="bg-zinc-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-transparent text-blue-500"
      >
        Absenden
      </button>
    </form>
  );
}
