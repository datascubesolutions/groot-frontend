/**
 * Admin Layout
 * 
 * Shared layout for admin-only pages.
 * Add admin navigation, permissions check, etc. here.
 */

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Add admin navigation, sidebar, etc. here */}
      <main>{children}</main>
    </div>
  );
}
