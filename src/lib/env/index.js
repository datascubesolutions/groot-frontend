// @ts-nocheck
/**
 * Environment Configuration
 * Validates and exports environment variables using strict Zod architectures.
 */
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsedEnv.success) {
  console.error(
    "❌ Invalid environment variables during boot:",
    parsedEnv.error.format()
  );
  throw new Error("Invalid environment variables");
}

export const env = {
  NODE_ENV: parsedEnv.data.NODE_ENV,
  NEXT_PUBLIC_SITE_URL:
    parsedEnv.data.NEXT_PUBLIC_SITE_URL ||
    (parsedEnv.data.NODE_ENV === "production"
      ? "https://grootanalytics.com"
      : "http://localhost:3000"),
  IS_PRODUCTION: parsedEnv.data.NODE_ENV === "production",
  IS_DEVELOPMENT: parsedEnv.data.NODE_ENV === "development",
};
