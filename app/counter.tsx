"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter gerendert mit count:", count);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="bg-green-500 text-white px-4 py-2 rounded-full"
    >
      Klick mich: {count}
    </button>
  );
}
