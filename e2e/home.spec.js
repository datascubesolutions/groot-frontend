import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load home page successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Groot/i);
  });

  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    const heroSection = page.locator("section").first();
    await expect(heroSection).toBeVisible();
  });

  test("should have working navigation", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    
    const heroContent = page.locator("h1").first();
    await expect(heroContent).toBeVisible();
  });
});
