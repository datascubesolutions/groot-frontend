// @ts-nocheck
"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error natively to the console or an APM system
    console.error("Critical Global Boundary Error Caught: ", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="max-w-md space-y-4 rounded-xl border bg-white p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold tracking-tight text-red-600">
            Critical System Failure
          </h2>
          <p className="text-gray-500">
            The application layout failed to render securely. We have logged
            this event.
          </p>
          <button
            onClick={() => reset()}
            className="rounded-md bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-gray-800"
          >
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}
