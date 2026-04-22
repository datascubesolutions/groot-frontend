// @ts-nocheck
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Page not found</p>
        <Link
          href={ROUTES.PUBLIC.HOME}
          prefetch={true}
          className="inline-block rounded-lg bg-foreground px-6 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
