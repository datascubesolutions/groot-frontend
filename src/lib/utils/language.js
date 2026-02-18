/**
 * Simple heuristic to check if text is likely English.
 * Uses a list of common English stop words.
 *
 * @param {string} text - The text to analyze
 * @returns {boolean} - True if likely English, false otherwise
 */
export function isEnglish(text) {
  if (!text) return false;

  const stopWords = new Set([
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me"
  ]);

  // Normalize text: lowercase, remove special chars, split into words
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(w => w.length > 0);

  if (words.length === 0) return false;

  // Count matches
  let matchCount = 0;
  for (const word of words) {
    if (stopWords.has(word)) {
      matchCount++;
    }
  }

  // If at least 15% of words are English stop words, assume it's English
  // For very short texts (titles), we might need a lower threshold or different logic,
  // but for blog post content/excerpts, this usually works well.
  // Given we are filtering titles + excerpts, we can be a bit more lenient.
  const threshold = Math.max(1, Math.floor(words.length * 0.1));
  return matchCount >= threshold;
}
