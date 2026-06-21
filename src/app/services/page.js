// @ts-nocheck
import { SERVICES_ENTRY_HREF } from "@/lib/constants/services";
import { redirect } from "next/navigation";

export default function ServicesPage() {
 redirect(SERVICES_ENTRY_HREF);
}
