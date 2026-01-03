import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8 text-muted-foreground">Page not found</p>
        <Link
          href={ROUTES.MARKETING.HOME}
          className="inline-block rounded-lg bg-foreground px-6 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
