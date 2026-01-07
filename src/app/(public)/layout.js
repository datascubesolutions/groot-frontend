import { OrganizationSchema, WebsiteSchema } from "@/components/seo/StructuredData";

export default function PublicLayout({ children }) {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      {children}
    </>
  );
}
