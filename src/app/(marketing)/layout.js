/**
 * Marketing Layout
 * 
 * Shared layout for all marketing/public pages.
 * This layout applies to all routes in the (marketing) route group.
 */

export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
