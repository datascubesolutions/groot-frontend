// @ts-nocheck
import { cn } from "../utils";

describe("Utility Functions", () => {
  describe("cn (classNames) merger", () => {
    it("merges standard class strings correctly", () => {
      const result = cn("bg-primary", "text-white");
      expect(result).toBe("bg-primary text-white");
    });

    it("handles conditional rendering effectively", () => {
      const isTrue = true;
      const isFalse = false;
      const result = cn(
        "base-class",
        isTrue && "true-class",
        isFalse && "false-class"
      );
      expect(result).toBe("base-class true-class");
    });

    it("merges tailwind conflicts using tailwind-merge", () => {
      // p-4 should be completely overridden by p-6
      const result = cn("p-4 m-2", "p-6");
      expect(result).toBe("m-2 p-6");
    });

    it("handles arrays and nested arrays cleanly", () => {
      const result = cn(["class-one", ["class-two", "class-three"]]);
      expect(result).toBe("class-one class-two class-three");
    });
  });
});
