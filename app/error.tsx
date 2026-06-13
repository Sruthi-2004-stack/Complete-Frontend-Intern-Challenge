"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="text-center">

        <h2 className="text-2xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-4 text-zinc-400">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="
            mt-6
            rounded-xl
            bg-white
            px-4
            py-2
            text-black
          "
        >
          Try Again
        </button>

      </div>

    </div>
  );
}