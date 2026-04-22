import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
    "eslint-entity-report.tmp.json",
    // Standalone generator script (not part of the Next app bundle)
    "generate_unique_heroes.js",
  ]),
  {
    rules: {
      // React Compiler / ESLint plugin — suppressed to avoid noise on SSR hydration patterns
      "react-hooks/static-components": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      // Accessibility — require label<->input associations
      "jsx-a11y/label-has-associated-control": "error",
      // Require alt text on images
      "jsx-a11y/alt-text": "error",
      // Validate ARIA props
      "jsx-a11y/aria-props": "error",
      // Warn when interactive elements are not keyboard accessible
      "jsx-a11y/interactive-supports-focus": "error",
      // Require accessible names (aria-label / aria-labelledby) on interactive elements
      "jsx-a11y/click-events-have-key-events": "error",
      // Prevent href="#" dead links — use a real route or <button>
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='href'][value.value='#']",
          message:
            'Dead href="#" detected. Use a real route or convert to <button type="button"> for action-only elements.',
        },
      ],
      // Prefer next/image over raw <img> for automatic optimization
      "@next/next/no-img-element": "error",
    },
  },
]);

export default eslintConfig;
