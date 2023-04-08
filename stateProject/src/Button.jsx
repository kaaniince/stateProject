import React from "react";

function Button({ onClick, string }) {
  return (
    <button
      onClick={onClick}
      className="mt-5 relative overflow-hidden rounded-lg bg-black px-60 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2 "
    >
      <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400">
        {string}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
      />
    </button>
  );
}

export { Button };
