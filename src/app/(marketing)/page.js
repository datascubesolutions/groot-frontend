/**
 * Home Page
 * 
 * Main landing page - accessible at /
 */

export const metadata = {
  title: "Home",
  description: "Enterprise-grade solutions for modern businesses",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Groot</h1>
        <p className="text-lg text-muted-foreground">
          Enterprise-grade solutions for modern businesses
        </p>
      </div>
    </main>
  );
}
