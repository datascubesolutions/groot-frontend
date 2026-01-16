/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Groot Brand Colors
        mint: {
          DEFAULT: "hsl(var(--mint))",
          light: "hsl(var(--mint-light))",
          foreground: "hsl(var(--mint-foreground))",
        },
        forest: {
          DEFAULT: "hsl(var(--forest))",
          foreground: "hsl(var(--forest-foreground))",
        },
        leaf: "hsl(var(--leaf))",
        charcoal: "hsl(var(--charcoal))",
        birch: "hsl(var(--birch))",
        teal: "hsl(var(--teal))",
        burgundy: {
          DEFAULT: "hsl(var(--burgundy))",
          dark: "hsl(var(--burgundy-dark))",
          light: "hsl(var(--burgundy-light))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "draw-width-line": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "draw-height-line": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        "draw-height-5rem-line-bottom-to-top": {
          "0%": { height: "0rem" },
          "100%": { height: "5rem" },
        },
        "draw-height-5-04rem--line-bottom-to-top": {
          "0%": { height: "0rem" },
          "100%": { height: "5.04rem" },
        },
        "draw-height-line-cross-line": {
          "0%": { height: "0%" },
          "100%": { height: "20.2rem" },
        },
      },
      animation: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "draw-width-line": "draw-width-line 2s ease-out forwards",
        "draw-height-line": "draw-height-line 2s ease-out forwards",
        "draw-height-5rem-line-bottom-to-top":
          "draw-height-5rem-line-bottom-to-top 2s ease-out forwards",
        "draw-height-5-04rem--line-bottom-to-top":
          "draw-height-5-04rem--line-bottom-to-top 2s ease-out forwards",
        "draw-height-line-cross-line":
          "draw-height-line-cross-line 2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
