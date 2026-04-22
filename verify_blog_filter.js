const { isEnglish } = require("./src/lib/utils/language");

// Mock data for testing
const mockPosts = [
  {
    title: "The Future of AI",
    excerpt: "Artificial Intelligence is transforming industries.",
    image: "https://example.com/image.jpg",
  },
  {
    title: "Aprendiendo Javascript",
    excerpt: "Javascript es un lenguaje de programación muy popular.",
    image: "https://example.com/js.jpg",
  },
  {
    title: "No Image Post",
    excerpt: "This post has no image.",
    image: null,
  },
  {
    title: "Mixed Content",
    excerpt:
      "This is mostly English but has some foreign words like hola and mundo.",
    image: "https://example.com/mixed.jpg",
  },
];

// Test isEnglish
console.log("Testing isEnglish function:");
console.log(
  `"The Future of AI": ${isEnglish("The Future of AI")} (Expected: true)`
);
console.log(
  `"Aprendiendo Javascript": ${isEnglish("Aprendiendo Javascript")} (Expected: false)`
);
console.log(`"Mixed Content": ${isEnglish("Mixed Content")} (Expected: true)`); // "Mixed" might be tricky depending on length

// Test Filtering Logic
console.log("\nTesting Filtering Logic:");
const filtered = mockPosts.filter((post) => {
  if (!post.image) {
    console.log(`Filtered out "${post.title}" due to missing image.`);
    return false;
  }
  if (!isEnglish(`${post.title} ${post.excerpt}`)) {
    console.log(`Filtered out "${post.title}" due to non-English content.`);
    return false;
  }
  return true;
});

console.log("\nRemaining Posts:");
filtered.forEach((p) => console.log(`- ${p.title}`));

if (
  filtered.length === 2 &&
  filtered.some((p) => p.title === "The Future of AI") &&
  filtered.some((p) => p.title === "Mixed Content")
) {
  console.log("\nSUCCESS: Filtering logic works as expected.");
} else {
  console.log("\nFAILURE: Filtering logic did not produce expected results.");
}
